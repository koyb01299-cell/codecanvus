"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Menu,
    X,
    ChevronDown,
    ChevronRight,
    Shield,
    Server,
    Cpu,
    Globe2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * =============================================================================
 * Navbar.tsx — Enterprise-grade Top Navigation
 * -----------------------------------------------------------------------------
 * 특징:
 *  - Sticky + Blur + Light Lavender 배경
 *  - Stripe / Vercel / Snowflake 톤의 미니멀 기술 네비게이션
 *  - Tech 중심 매뉴 구조 (Products / Solutions / Tech / Company / Resources)
 *  - 현재 경로 기반 active state
 *  - 모바일에서 슬라이드 인 메뉴
 * =============================================================================
 */

const ui = {
    purple: "#7b5cf4",
    purpleSoft: "#efeaff",
    border: "#e7e3f8",
    textPrimary: "#1c1538",
    textMuted: "#6b6480",
    bg: "rgba(252, 250, 255, 0.92)",
};

type NavItem =
    | {
        label: string;
        href: string;
        exact?: boolean;
        children?: never;
    }
    | {
        label: string;
        href: string;
        exact?: boolean;
        children: {
            label: string;
            href: string;
            description?: string;
            icon?: React.ReactNode;
        }[];
    };

const NAV_ITEMS: NavItem[] = [
    {
        label: "Products",
        href: "/services",
        children: [
            {
                label: "Analytics Platform",
                href: "/services/analytics",
                description: "실시간 데이터 파이프라인과 BI 대시보드.",
                icon: <Server className="h-4 w-4" />,
            },
            {
                label: "APIs & Integration",
                href: "/services/apis",
                description: "엔터프라이즈 통합을 위한 API & SDK.",
                icon: <Cpu className="h-4 w-4" />,
            },
            {
                label: "Customer & CRM",
                href: "/services/crm",
                description: "고객 데이터와 이벤트 기반 CRM 엔진.",
                icon: <Globe2 className="h-4 w-4" />,
            },
            {
                label: "Payment Infra",
                href: "/services/payinfra",
                description: "결제·정산을 위한 기술 인프라 레이어.",
                icon: <Shield className="h-4 w-4" />,
            },
        ],
    },
    {
        label: "Solutions",
        href: "/solutions",
        children: [
            {
                label: "Online Commerce",
                href: "/solutions/online",
                description: "이커머스·D2C를 위한 통합 인프라.",
            },
            {
                label: "Retail & O2O",
                href: "/solutions/retail",
                description: "매장·POS·온라인을 하나로.",
            },
            {
                label: "Fintech & Banking",
                href: "/solutions/fintech",
                description: "금융 서비스와 디지털 뱅킹을 위한 아키텍처.",
            },
            {
                label: "Global Expansion",
                href: "/solutions/global",
                description: "글로벌 지역·통화·세금 대응.",
            },
        ],
    },
    {
        label: "Tech",
        href: "/tech",
        children: [
            {
                label: "Architecture",
                href: "/tech/architecture",
                description: "전체 시스템 아키텍처 레이어.",
            },
            {
                label: "System Runtime",
                href: "/tech/system",
                description: "실행 환경과 인프라 오케스트레이션.",
            },
            {
                label: "Security Model",
                href: "/tech/security",
                description: "보안·암호화·컴플라이언스 구조.",
            },
            {
                label: "Observability",
                href: "/tech/dashboard",
                description: "모니터링·로그·트레이싱 시스템.",
            },
        ],
    },
    {
        label: "Company",
        href: "/about",
        children: [
            {
                label: "About",
                href: "/about",
                description: "CodeCanvas의 방향성과 팀.",
            },
            {
                label: "Careers",
                href: "/career",
                description: "엔지니어링 중심 조직 채용.",
            },
            {
                label: "Partners",
                href: "/partners",
                description: "파트너십 및 에코시스템.",
            },
            {
                label: "IR & Reports",
                href: "/ir/reports",
                description: "IR 자료와 기술 레포트.",
            },
        ],
    },
    {
        label: "Resources",
        href: "/ir",
        children: [
            {
                label: "Investors",
                href: "/ir/investors",
                description: "투자 정보 및 하이라이트.",
            },
            {
                label: "Reports",
                href: "/ir/reports",
                description: "엔터프라이즈 인프라 인사이트.",
            },
            {
                label: "Contact",
                href: "/contact",
                description: "엔터프라이즈/파트너 문의.",
            },
        ],
    },
];

// active path helper
const isActive = (pathname: string, item: NavItem) => {
    if (item.exact) return pathname === item.href;
    return pathname === item.href || pathname.startsWith(item.href + "/");
};

export default function Navbar(): JSX.Element {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handler = () => {
            setIsScrolled(window.scrollY > 8);
        };
        handler();
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    // dropdown hover 핸들링 (데스크탑)
    const handleMouseEnter = (label: string) => {
        setOpenDropdown(label);
    };
    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    return (
        <header
            className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? "backdrop-blur bg-white/85 shadow-sm" : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
                {/* 브랜드 영역 */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <div
                            className="h-8 w-8 rounded-2xl flex items-center justify-center text-white font-bold text-sm"
                            style={{ backgroundColor: ui.purple }}
                        >
                            C
                        </div>
                        <span
                            className="font-extrabold text-base sm:text-lg tracking-tight"
                            style={{ color: ui.textPrimary }}
                        >
                            CodeCanvas
                        </span>
                    </Link>

                    {/* 작은 캡션 */}
                    <span
                        className="hidden md:inline-block ml-3 text-xs font-medium px-2.5 py-1 rounded-full border"
                        style={{
                            borderColor: ui.border,
                            color: ui.textMuted,
                            backgroundColor: "rgba(255,255,255,0.8)",
                        }}
                    >
                        Engineering-first Infra Platform
                    </span>
                </div>

                {/* 데스크탑 네비게이션 */}
                <div className="hidden lg:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => {
                        const active = isActive(pathname ?? "/", item);
                        const hasChildren = !!item.children;

                        return (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => hasChildren && handleMouseEnter(item.label)}
                                onMouseLeave={() => hasChildren && handleMouseLeave()}
                            >
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-1 text-sm font-medium"
                                    style={{
                                        color: active ? ui.textPrimary : ui.textMuted,
                                    }}
                                >
                                    <span>{item.label}</span>
                                    {hasChildren && (
                                        <ChevronDown
                                            className={`h-3 w-3 transition-transform ${openDropdown === item.label ? "rotate-180" : ""
                                                }`}
                                        />
                                    )}
                                </Link>

                                {/* active underline */}
                                {active && (
                                    <motion.div
                                        layoutId="navbar-underline"
                                        className="absolute left-0 right-0 -bottom-2 h-[2px] rounded-full"
                                        style={{ backgroundColor: ui.purple }}
                                    />
                                )}

                                {/* 드롭다운 메뉴 */}
                                {hasChildren && (
                                    <AnimatePresence>
                                        {openDropdown === item.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 4 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 4 }}
                                                transition={{ duration: 0.18 }}
                                                className="absolute left-1/2 -translate-x-1/2 mt-4"
                                            >
                                                <div
                                                    className="min-w-[260px] rounded-2xl border bg-white shadow-lg p-3 grid grid-cols-1 gap-1"
                                                    style={{ borderColor: ui.border }}
                                                >
                                                    {item.children!.map((child) => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            className="flex items-start gap-3 px-3 py-2 rounded-xl hover:bg-[#f6f3ff] transition"
                                                        >
                                                            {child.icon && (
                                                                <div
                                                                    className="mt-0.5 flex items-center justify-center rounded-lg p-1.5"
                                                                    style={{
                                                                        backgroundColor: ui.purpleSoft,
                                                                        color: ui.purple,
                                                                    }}
                                                                >
                                                                    {child.icon}
                                                                </div>
                                                            )}
                                                            <div className="flex-1">
                                                                <div
                                                                    className="text-xs font-semibold"
                                                                    style={{ color: ui.textPrimary }}
                                                                >
                                                                    {child.label}
                                                                </div>
                                                                {child.description && (
                                                                    <div
                                                                        className="mt-0.5 text-[11px] leading-snug"
                                                                        style={{ color: ui.textMuted }}
                                                                    >
                                                                        {child.description}
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <ChevronRight
                                                                className="h-3 w-3 mt-1 text-[#c3b7ff]"
                                                            />
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* 우측 CTA 그룹 (데스크탑) */}
                <div className="hidden md:flex items-center gap-3">
                    {/* pseudo language switch */}
                    <button
                        className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border bg-white"
                        style={{ borderColor: ui.border, color: ui.textMuted }}
                    >
                        KR / EN
                    </button>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border bg-white transition hover:bg-[#f4efff]"
                        style={{ borderColor: ui.border, color: ui.purple }}
                    >
                        Contact
                    </Link>

                    <Link
                        href="/tech"
                        className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white shadow-sm hover:opacity-95 transition"
                        style={{ backgroundColor: ui.purple }}
                    >
                        View tech
                        <Cpu className="h-4 w-4" />
                    </Link>
                </div>

                {/* 모바일 메뉴 버튼 */}
                <button
                    className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg border bg-white/80"
                    style={{ borderColor: ui.border, color: ui.textPrimary }}
                    onClick={() => setMobileOpen((prev) => !prev)}
                    aria-label="Toggle navigation"
                >
                    {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </nav>

            {/* 모바일 메뉴 드로어 */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden border-t bg-white/95 backdrop-blur"
                        style={{ borderColor: ui.border }}
                    >
                        <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
                            {NAV_ITEMS.map((item) => {
                                const active = isActive(pathname ?? "/", item);
                                const hasChildren = !!item.children;

                                return (
                                    <div key={item.label} className="space-y-2">
                                        <Link
                                            href={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center justify-between py-2"
                                        >
                                            <span
                                                className="text-sm font-semibold"
                                                style={{
                                                    color: active ? ui.textPrimary : ui.textMuted,
                                                }}
                                            >
                                                {item.label}
                                            </span>
                                            {hasChildren && (
                                                <ChevronDown className="h-4 w-4 text-[#bbb1e6]" />
                                            )}
                                        </Link>

                                        {hasChildren && (
                                            <div className="pl-3 border-l space-y-1">
                                                {item.children!.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="block py-1.5 text-xs"
                                                        style={{ color: ui.textMuted }}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            <div className="pt-3 mt-3 border-t flex flex-col gap-3 text-sm">
                                <button
                                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full w-fit border bg-white"
                                    style={{ borderColor: ui.border, color: ui.textMuted }}
                                >
                                    KR / EN
                                </button>

                                <Link
                                    href="/contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg w-full border bg-white text-sm font-semibold"
                                    style={{ borderColor: ui.border, color: ui.purple }}
                                >
                                    Contact sales
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
