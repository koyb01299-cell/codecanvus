"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown, ChevronRight, Cpu } from "lucide-react";

/**
 * MobileMenu.tsx
 * - Navbar와 분리된 모바일 전용 네비게이션 드로어
 * - Stripe / Vercel 톤의 미니멀 + Tech 중심 메뉴 구조
 */

const ui = {
    purple: "#7b5cf4",
    purpleSoft: "#efeaff",
    border: "#e7e3f8",
    textPrimary: "#1c1538",
    textMuted: "#6b6480",
    bg: "#fbf9ff",
};

type ChildItem = {
    label: string;
    href: string;
    description?: string;
};

export type MobileNavItem = {
    label: string;
    href: string;
    exact?: boolean;
    children?: ChildItem[];
};

export interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navItems?: MobileNavItem[];
}

/** 기본 메뉴 (Navbar.tsx의 구조와 맞춰 둔 형태) */
const DEFAULT_ITEMS: MobileNavItem[] = [
    {
        label: "Products",
        href: "/services",
        children: [
            {
                label: "Analytics Platform",
                href: "/services/analytics",
                description: "실시간 데이터 파이프라인 & BI.",
            },
            {
                label: "APIs & Integration",
                href: "/services/apis",
                description: "엔터프라이즈 API & SDK.",
            },
            {
                label: "Customer & CRM",
                href: "/services/crm",
                description: "고객 이벤트 기반 CRM.",
            },
            {
                label: "Payment Infra",
                href: "/services/payinfra",
                description: "결제·정산 인프라 레이어.",
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
                description: "이커머스 & D2C 인프라.",
            },
            {
                label: "Retail & O2O",
                href: "/solutions/retail",
                description: "매장·POS·온라인 통합.",
            },
            {
                label: "Fintech & Banking",
                href: "/solutions/fintech",
                description: "핀테크 / 디지털 뱅킹.",
            },
            {
                label: "Global Expansion",
                href: "/solutions/global",
                description: "글로벌 리전·통화·세금.",
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
                description: "시스템 전체 아키텍처.",
            },
            {
                label: "System Runtime",
                href: "/tech/system",
                description: "런타임 & 오케스트레이션.",
            },
            {
                label: "Security Model",
                href: "/tech/security",
                description: "보안·암호화·컴플라이언스.",
            },
            {
                label: "Observability",
                href: "/tech/dashboard",
                description: "모니터링·로그·트레이싱.",
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
                description: "미션·팀·문화.",
            },
            {
                label: "Careers",
                href: "/career",
                description: "엔지니어링 중심 채용.",
            },
            {
                label: "Partners",
                href: "/partners",
                description: "파트너 & 에코시스템.",
            },
            {
                label: "IR & Reports",
                href: "/ir/reports",
                description: "IR / 리포트.",
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
                description: "투자자 정보.",
            },
            {
                label: "Reports",
                href: "/ir/reports",
                description: "엔터프라이즈 인프라 인사이트.",
            },
            {
                label: "Contact",
                href: "/contact",
                description: "엔터프라이즈 문의.",
            },
        ],
    },
];

const isActive = (pathname: string, item: MobileNavItem) => {
    if (item.exact) return pathname === item.href;
    return pathname === item.href || pathname.startsWith(item.href + "/");
};

export default function MobileMenu({
    isOpen,
    onClose,
    navItems,
}: MobileMenuProps): JSX.Element {
    const pathname = usePathname();
    const items = navItems ?? DEFAULT_ITEMS;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Dimmed backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="fixed inset-0 z-40 bg-black"
                        onClick={onClose}
                    />

                    {/* Drawer */}
                    <motion.aside
                        key="drawer"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur border-b"
                        style={{ borderColor: ui.border }}
                    >
                        {/* Header row */}
                        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div
                                    className="h-8 w-8 rounded-2xl flex items-center justify-center text-white text-sm font-bold"
                                    style={{ backgroundColor: ui.purple }}
                                >
                                    C
                                </div>
                                <span
                                    className="font-semibold text-sm"
                                    style={{ color: ui.textPrimary }}
                                >
                                    CodeCanvas
                                </span>
                            </div>

                            <button
                                className="inline-flex items-center justify-center rounded-lg border p-1.5 bg-white"
                                style={{ borderColor: ui.border, color: ui.textMuted }}
                                onClick={onClose}
                                aria-label="Close menu"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Scrollable menu body */}
                        <div
                            className="max-h-[calc(100vh-60px)] overflow-y-auto border-t"
                            style={{ borderColor: ui.border, backgroundColor: ui.bg }}
                        >
                            <div className="max-w-7xl mx-auto px-4 py-4 space-y-4 text-sm">
                                {items.map((item) => {
                                    const active = isActive(pathname ?? "/", item);
                                    const hasChildren = !!item.children?.length;

                                    return (
                                        <div
                                            key={item.label}
                                            className="rounded-2xl bg-white border px-3 py-2"
                                            style={{ borderColor: ui.border }}
                                        >
                                            {/* Parent link row */}
                                            <Link
                                                href={item.href}
                                                onClick={onClose}
                                                className="flex items-center justify-between py-1.5"
                                            >
                                                <span
                                                    className="font-semibold"
                                                    style={{
                                                        color: active ? ui.textPrimary : ui.textMuted,
                                                    }}
                                                >
                                                    {item.label}
                                                </span>
                                                {hasChildren && (
                                                    <ChevronDown className="h-3.5 w-3.5 text-[#b3a6ea]" />
                                                )}
                                            </Link>

                                            {/* Children list */}
                                            {hasChildren && (
                                                <div className="mt-1 pl-2 border-l border-dashed space-y-1.5 pb-1.5">
                                                    {item.children!.map((child) => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            onClick={onClose}
                                                            className="flex items-start gap-1.5 py-1"
                                                        >
                                                            <ChevronRight className="h-3 w-3 mt-0.5 text-[#c5b8ff]" />
                                                            <div>
                                                                <div
                                                                    className="text-xs font-medium"
                                                                    style={{ color: ui.textPrimary }}
                                                                >
                                                                    {child.label}
                                                                </div>
                                                                {child.description && (
                                                                    <div
                                                                        className="text-[11px] mt-0.5 leading-snug"
                                                                        style={{ color: ui.textMuted }}
                                                                    >
                                                                        {child.description}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}

                                {/* Bottom actions */}
                                <div className="pt-3 mt-3 border-t flex flex-col gap-3">
                                    <button
                                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full w-fit border bg-white text-[11px] font-medium"
                                        style={{ borderColor: ui.border, color: ui.textMuted }}
                                    >
                                        KR / EN
                                    </button>

                                    <Link
                                        href="/contact"
                                        onClick={onClose}
                                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl w-full border bg-white text-sm font-semibold"
                                        style={{ borderColor: ui.border, color: ui.purple }}
                                    >
                                        Contact sales
                                    </Link>

                                    <Link
                                        href="/tech"
                                        onClick={onClose}
                                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl w-full text-sm font-semibold text-white"
                                        style={{ backgroundColor: ui.purple }}
                                    >
                                        View tech
                                        <Cpu className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}
