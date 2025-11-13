"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

/**
 * PageHeader.tsx
 * - 모든 서브 페이지 상단에 공통으로 사용하는 헤더 컴포넌트
 * - About / Services / Solutions / Tech / IR / Contact 페이지 등에서 재사용
 * - Stripe / Vercel 느낌의 미니멀 + 엔터프라이즈 톤
 */

const ui = {
    bg: "#fbf9ff",
    border: "#ece6ff",
    textPrimary: "#1c1538",
    textMuted: "#6b6480",
    accent: "#7b5cf4",
};

type BreadcrumbItem = {
    label: string;
    href?: string;
};

type MetaItem = {
    label: string;
    value: string;
};

export interface PageHeaderProps {
    /** 메인 타이틀 (필수) */
    title: string;
    /** 상단 작은 태그 (예: "Company", "Tech", "Solutions") */
    eyebrow?: string;
    /** 타이틀 아래 서브 설명 */
    description?: string;
    /** 왼쪽/가운데 정렬 */
    align?: "left" | "center";
    /** 상단에 표시할 브레드크럼 */
    breadcrumbs?: BreadcrumbItem[];
    /** 오른쪽 액션(버튼 등) 넣을 영역 */
    actions?: React.ReactNode;
    /** 하단 메타(업데이트 일자, 카테고리 등) 표시 */
    meta?: MetaItem[];
    /** 페이지 타입에 따른 톤 조정 (디자인 살짝 바뀜) */
    variant?: "default" | "tech" | "marketing" | "ir";
}

/** 공통 애니메이션 */
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay },
});

/** 브레드크럼 렌더링 */
function Breadcrumbs({
    items,
    align = "left",
}: {
    items: BreadcrumbItem[];
    align?: "left" | "center";
}) {
    if (!items.length) return null;

    const justify =
        align === "center" ? "justify-center" : "justify-start";

    return (
        <motion.nav
            {...fadeUp(0.02)}
            aria-label="Breadcrumb"
            className={`mb-3 flex ${justify} text-xs sm:text-[13px]`}
        >
            <ol className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-3 py-1 bg-white/60 border border-[#eee6ff]">
                {/* Home 아이콘 */}
                <li className="inline-flex items-center gap-1 text-[#a39ad6]">
                    <Home className="h-3.5 w-3.5" />
                </li>
                {items.map((item, idx) => {
                    const isLast = idx === items.length - 1;
                    return (
                        <li
                            key={`${item.label}-${idx}`}
                            className="inline-flex items-center gap-1.5 sm:gap-2"
                        >
                            <ChevronRight className="h-3 w-3 text-[#c1b7f2]" />
                            {item.href && !isLast ? (
                                <Link
                                    href={item.href}
                                    className="text-[#8178b4] hover:text-[#5d51a9] transition"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-[#4c436f] font-medium">
                                    {item.label}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </motion.nav>
    );
}

/** 메타 정보 (예: "Last updated", "Category" 등) */
function MetaRow({ meta }: { meta: MetaItem[] }) {
    if (!meta.length) return null;

    return (
        <motion.div
            {...fadeUp(0.35)}
            className="mt-4 flex flex-wrap gap-3 text-[11px] sm:text-xs"
        >
            {meta.map((m) => (
                <div
                    key={m.label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/70 border px-3 py-1"
                    style={{ borderColor: ui.border }}
                >
                    <span className="text-[#9a93c7]">{m.label}</span>
                    <span className="font-medium text-[#4a3f7b]">{m.value}</span>
                </div>
            ))}
        </motion.div>
    );
}

/** 메인 컴포넌트 */
export default function PageHeader(props: PageHeaderProps): JSX.Element {
    const {
        title,
        eyebrow,
        description,
        align = "left",
        breadcrumbs,
        actions,
        meta = [],
        variant = "default",
    } = props;

    const isCenter = align === "center";

    const justifyRow = isCenter
        ? "flex-col items-center text-center"
        : "flex-col sm:flex-row sm:items-center sm:justify-between";

    // variant 에 따른 배경/테두리 톤 약간 변경
    const variantBg =
        variant === "tech"
            ? "from-[#f7f6ff] via-[#f9f8ff] to-[#f5f3ff]"
            : variant === "marketing"
                ? "from-[#fdfbff] via-[#fbf9ff] to-[#f7f3ff]"
                : variant === "ir"
                    ? "from-[#f9fbff] via-[#fbf9ff] to-[#f7f7ff]"
                    : "from-[#fbf9ff] via-[#f9f8ff] to-[#f5f2ff]";

    return (
        <header
            className="w-full border-b"
            style={{ borderColor: ui.border, backgroundColor: ui.bg }}
        >
            <div
                className={`bg-gradient-to-b ${variantBg} transition-colors duration-300`}
            >
                <div className="max-w-7xl mx-auto px-6 py-10 sm:py-14">
                    {/* Breadcrumbs */}
                    {breadcrumbs && breadcrumbs.length > 0 && (
                        <Breadcrumbs items={breadcrumbs} align={align} />
                    )}

                    <div className={`flex ${justifyRow} gap-6`}>
                        {/* 왼쪽: 텍스트 영역 */}
                        <div className={isCenter ? "max-w-3xl" : "max-w-3xl"}>
                            {/* Eyebrow */}
                            {eyebrow && (
                                <motion.div
                                    {...fadeUp(0.05)}
                                    className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium mb-3 ${isCenter ? "mx-auto" : ""
                                        }`}
                                    style={{
                                        backgroundColor: "rgba(255,255,255,0.8)",
                                        border: `1px solid ${ui.border}`,
                                        color: ui.accent,
                                    }}
                                >
                                    {eyebrow}
                                </motion.div>
                            )}

                            {/* Title */}
                            <motion.h1
                                {...fadeUp(0.12)}
                                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
                                style={{ color: ui.textPrimary }}
                            >
                                {title}
                            </motion.h1>

                            {/* Description */}
                            {description && (
                                <motion.p
                                    {...fadeUp(0.22)}
                                    className={`mt-3 text-sm sm:text-base leading-relaxed ${isCenter ? "mx-auto" : ""
                                        }`}
                                    style={{ color: ui.textMuted, maxWidth: "40rem" }}
                                >
                                    {description}
                                </motion.p>
                            )}

                            {/* Meta (updated at, category 등) */}
                            {meta.length > 0 && <MetaRow meta={meta} />}
                        </div>

                        {/* 오른쪽: 액션 영역 (버튼 등) */}
                        {actions && (
                            <motion.div
                                {...fadeUp(0.25)}
                                className={
                                    isCenter
                                        ? "mt-6 flex flex-wrap justify-center gap-3"
                                        : "sm:mt-0 flex flex-col sm:items-end gap-3"
                                }
                            >
                                {actions}
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
