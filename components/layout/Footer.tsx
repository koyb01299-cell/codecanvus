"use client";

import React from "react";
import Link from "next/link";
import {
    Github,
    Linkedin,
    Mail,
    Globe,
    Server,
    Shield,
    Layers,
} from "lucide-react";
import { motion } from "framer-motion";

/**
 * ==============================================================================
 * Footer.tsx — Enterprise-grade Footer (Final, Key-safe)
 * ==============================================================================
 */

const ui = {
    purple: "#7b5cf4",
    purpleLight: "#efeaff",
    border: "#e7e3f8",
    textPrimary: "#1c1538",
    textMuted: "#6b6480",
    bg: "#faf9ff",
};

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
});

/* ============================================================================
   Navigation Columns Data
============================================================================ */
const NAV_COLUMNS = [
    {
        title: "Infrastructure",
        links: [
            { href: "/tech/architecture", label: "Architecture" },
            { href: "/tech/system", label: "System Runtime" },
            { href: "/tech/security", label: "Security Model" },
            { href: "/tech/dashboard", label: "Observability" },
        ],
    },
    {
        title: "Data Layer",
        links: [
            { href: "/services/analytics", label: "Analytics Engine" },
            { href: "/services/apis", label: "APIs & SDKs" },
            { href: "/solutions/fintech", label: "Financial Data" },
            { href: "/partners", label: "Ecosystem" },
        ],
    },
    {
        title: "Security",
        links: [
            { href: "/tech/security", label: "Zero Trust Policy" },
            { href: "#", label: "Encryption Model" },
            { href: "#", label: "Access Control" },
            { href: "/contact", label: "Responsible Disclosure" },
        ],
    },
    {
        title: "Developers",
        links: [
            { href: "/services/apis", label: "API Reference" },
            { href: "#", label: "Integration Guides" },
            { href: "#", label: "SDK Downloads" },
            { href: "/contact", label: "Support" },
        ],
    },
    {
        title: "Company",
        links: [
            { href: "/about", label: "About Us" },
            { href: "/career", label: "Careers" },
            { href: "/ir/investors", label: "Investors" },
            { href: "/contact", label: "Contact" },
        ],
    },
];

/* ============================================================================
   Main Component
============================================================================ */
export default function Footer(): JSX.Element {
    return (
        <footer
            className="w-full border-t pt-20 pb-14"
            style={{ borderColor: ui.border, backgroundColor: ui.bg }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* ============================================================
                   1) BRAND + SOCIAL
                ============================================================ */}
                <motion.div
                    {...fade(0)}
                    className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-20"
                >
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-extrabold" style={{ color: ui.textPrimary }}>
                            CodeCanvas
                        </h3>

                        <p
                            className="mt-4 text-sm max-w-xs leading-relaxed"
                            style={{ color: ui.textMuted }}
                        >
                            Unified infrastructure platform that connects payments,
                            data, security, and observability into one seamless stack.
                        </p>

                        {/* Social */}
                        <div className="flex items-center gap-4 mt-6">
                            {[
                                { icon: <Github className="h-5 w-5" />, href: "#" },
                                { icon: <Linkedin className="h-5 w-5" />, href: "#" },
                                { icon: <Mail className="h-5 w-5" />, href: "#" },
                            ].map((item, i) => (
                                <Link
                                    key={`social-${i}`}
                                    href={item.href}
                                    className="p-2 rounded-lg bg-white border hover:bg-[#f5f0ff] transition"
                                    style={{ borderColor: ui.border, color: ui.purple }}
                                >
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Tagline Highlights */}
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-10">
                        {[
                            {
                                icon: <Server className="h-5 w-5" />,
                                title: "Infra-first",
                                desc: "엔터프라이즈 운영의 기반이 되는 통합 인프라 레이어.",
                            },
                            {
                                icon: <Layers className="h-5 w-5" />,
                                title: "Modular Architecture",
                                desc: "결제, 정산, 데이터, 보안이 독립적으로 동작하는 도메인 구조.",
                            },
                            {
                                icon: <Shield className="h-5 w-5" />,
                                title: "Security by Design",
                                desc: "ISMS · PCI 기반 보안 모델을 아키텍처 단계에서 구현.",
                            },
                        ].map((item, i) => (
                            <motion.div {...fade(0.1 + i * 0.1)} key={`highlight-${i}`} className="flex items-start gap-4">
                                <div
                                    className="p-3 rounded-xl"
                                    style={{
                                        backgroundColor: ui.purpleLight,
                                        color: ui.purple,
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-semibold" style={{ color: ui.textPrimary }}>
                                        {item.title}
                                    </h4>
                                    <p className="mt-1 text-sm leading-relaxed" style={{ color: ui.textMuted }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ============================================================
                   2) NAVIGATION COLUMNS (★ Key-safe)
                ============================================================ */}
                <motion.div
                    {...fade(0.2)}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mb-20"
                >
                    {NAV_COLUMNS.map((col, idx) => (
                        <div key={`col-${idx}`}>
                            <h4
                                className="text-sm font-semibold mb-4"
                                style={{ color: ui.textPrimary }}
                            >
                                {col.title}
                            </h4>

                            {col.links.map((l, linkIndex) => (
                                <FooterLink
                                    key={`link-${col.title}-${linkIndex}`}
                                    href={l.href}
                                    label={l.label}
                                />
                            ))}
                        </div>
                    ))}
                </motion.div>

                {/* ============================================================
                   3) LANGUAGE + LEGAL
                ============================================================ */}
                <motion.div
                    {...fade(0.35)}
                    className="flex justify-between items-center flex-wrap gap-4 py-8 border-t"
                    style={{ borderColor: ui.border }}
                >
                    <div className="flex items-center gap-2 text-sm" style={{ color: ui.textMuted }}>
                        <Globe className="h-4 w-4" />
                        English (Global)
                    </div>

                    <div className="flex items-center gap-6 text-sm" style={{ color: ui.textMuted }}>
                        <Link href="#" className="hover:text-[#7b5cf4] transition">
                            Status
                        </Link>
                        <Link href="#" className="hover:text-[#7b5cf4] transition">
                            Privacy
                        </Link>
                        <Link href="#" className="hover:text-[#7b5cf4] transition">
                            Terms
                        </Link>
                    </div>
                </motion.div>

                {/* ============================================================
                   4) COPYRIGHT
                ============================================================ */}
                <motion.div
                    {...fade(0.45)}
                    className="text-center text-xs pt-6"
                    style={{ color: ui.textMuted }}
                >
                    © {new Date().getFullYear()} CodeCanvas. All rights reserved.
                </motion.div>
            </div>
        </footer>
    );
}

/* ============================================================================
   Reusable Footer Link Component
============================================================================ */
function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="block text-sm mb-2 hover:text-[#7b5cf4] transition"
            style={{ color: ui.textMuted }}
        >
            {label}
        </Link>
    );
}
