"use client";

import { useEffect, useRef } from "react";

/**
 * SmoothScroll.tsx
 * ------------------------------------------------------------------
 * - 부드러운 스크롤(Lerp-based)
 * - 페이지 전체를 감싸는 Wrapper를 부드럽게 이동
 * - Linear.app / Stripe Docs 느낌의 자연스러운 감속 스크롤
 * ------------------------------------------------------------------
 */

export default function SmoothScroll({
    children,
    speed = 0.08,
}: {
    children: React.ReactNode;
    speed?: number;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollPos = useRef(0);
    const targetPos = useRef(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // 페이지 전체 높이를 실제 컨테이너 높이로 설정
        document.body.style.height = container.getBoundingClientRect().height + "px";

        const onScroll = () => {
            targetPos.current = window.scrollY;
        };

        window.addEventListener("scroll", onScroll);

        const smooth = () => {
            scrollPos.current += (targetPos.current - scrollPos.current) * speed;

            container.style.transform = `translate3d(0, -${scrollPos.current}px, 0)`;

            requestAnimationFrame(smooth);
        };

        requestAnimationFrame(smooth);

        return () => {
            window.removeEventListener("scroll", onScroll);
            document.body.style.height = "";
        };
    }, [speed]);

    return (
        <div
            ref={containerRef}
            className="smooth-scroll-wrapper will-change-transform"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 1,
            }}
        >
            {children}
        </div>
    );
}
