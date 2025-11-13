"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Handshake,
  Building2,
  Globe2,
  Users2,
  ShieldCheck,
  Rocket,
  Star,
  Trophy,
  ArrowRight,
  Mail,
  HeartHandshake,
  Layers,
  Sparkles,
} from "lucide-react";

/**
 * CodeCanvas | Partners Page
 * - 밝은 보라색(라벤더) 브랜드 톤으로 구성
 * - 파트너십 구조, 카테고리, 혜택, CTA 등 포함
 * - 기술/PG/CRM/데이터 파트너가 모두 어울리는 통합 구조
 */

const colors = {
  bg: "bg-[#f9f7ff]",
  card: "bg-white",
  text: "text-[#241f3a]",
  textMuted: "text-[#5c5470]",
  violet: "text-[#7b5cf4]",
  violetBg: "bg-[#7b5cf4]",
  border: "border-[#e8e2fb]",
  grad:
    "bg-[linear-gradient(90deg,rgba(123,92,244,0.12),rgba(186,163,255,0.12))]",
};

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: 0.05 * i },
});

export default function PartnersPage(): JSX.Element {
  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* ─────────────── Hero Section ─────────────── */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <motion.div {...fadeUp(0)} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm bg-white/70 backdrop-blur border-white/60">
              <Handshake className="h-4 w-4" />
              Partner Network
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight">
              CodeCanvas 파트너 네트워크
              <span className={`block ${colors.violet}`}>
                함께 성장하는 기술 생태계
              </span>
            </h1>
            <p className={`mt-4 sm:mt-6 text-base sm:text-lg ${colors.textMuted}`}>
              결제, CRM, 데이터 분석, 보안, 마케팅을 잇는 파트너십 플랫폼.
              함께하는 기업이 더 강해집니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?type=partner"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                제휴 문의하기 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                회사 소개 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── Partner Categories ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          파트너 유형
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Building2 className="h-5 w-5" />,
              title: "결제 인프라 파트너",
              desc: "카드사, VAN, 은행, 정산망 등 결제 네트워크와 직접 연결.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "보안·컴플라이언스 파트너",
              desc: "ISMS, PCI DSS, 인증·감사·리스크 관리 솔루션 협업.",
            },
            {
              icon: <Globe2 className="h-5 w-5" />,
              title: "글로벌 게이트웨이 파트너",
              desc: "현지 PG, 크로스보더 결제, 환전 및 세금처리 연동.",
            },
            {
              icon: <Users2 className="h-5 w-5" />,
              title: "CRM·리워드 파트너",
              desc: "세그먼트 마케팅, 로열티, 고객경험 데이터 제공.",
            },
            {
              icon: <Rocket className="h-5 w-5" />,
              title: "테크놀로지 파트너",
              desc: "API, SDK, AI 모듈, 데이터 파이프라인 및 클라우드 기술 연동.",
            },
            {
              icon: <HeartHandshake className="h-5 w-5" />,
              title: "비즈니스·채널 파트너",
              desc: "공동 영업, 리셀러, 리퍼럴 및 솔루션 유통.",
            },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>
                  {p.icon}
                </div>
                <h3 className="font-semibold">{p.title}</h3>
              </div>
              <p className={`mt-3 text-sm ${colors.textMuted}`}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── Partner Tier / Benefits ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          파트너 등급 및 혜택
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: <Star className="h-5 w-5" />,
              tier: "Certified",
              desc: "기본 기술 검증 및 표준 연동 완료 기업",
              benefits: ["공식 인증 배지", "테크 문서 접근", "공동 브랜딩 가능"],
            },
            {
              icon: <Trophy className="h-5 w-5" />,
              tier: "Premier",
              desc: "전략 제휴 및 공동 GTM 파트너",
              benefits: ["공동 세일즈", "리퍼럴 리워드", "IR/홍보 지원"],
            },
            {
              icon: <Layers className="h-5 w-5" />,
              tier: "Strategic Alliance",
              desc: "플랫폼 공동개발 및 데이터 교환 제휴",
              benefits: ["공동 R&D", "데이터 API 교환", "전략적 로드맵 협의"],
            },
          ].map((tier, i) => (
            <motion.div
              key={tier.tier}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>
                    {tier.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{tier.tier}</h3>
                </div>
                <p className={`mt-2 text-sm ${colors.textMuted}`}>{tier.desc}</p>
                <ul className="mt-3 pl-5 list-disc text-sm space-y-1">
                  {tier.benefits.map((b) => (
                    <li key={b} className={`${colors.textMuted}`}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── Featured Partners (예시 리스트) ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          주요 제휴사
        </motion.h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            "Visa",
            "AWS",
            "Naver Cloud",
            "Toss Payments",
            "Kakao Pay",
            "LG CNS",
            "Google Cloud",
            "Oracle",
            "Microsoft",
            "BC Card",
          ].map((name, i) => (
            <motion.div
              key={name}
              {...fadeUp(i)}
              className="rounded-2xl bg-white border border-[#ece6ff] p-4 flex items-center justify-center text-sm font-semibold text-[#5c5470] hover:text-[#7b5cf4] hover:border-[#d9d0fb] transition"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── CTA Section ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">
                CodeCanvas와 함께 새로운 가능성을 그리세요
              </h3>
              <p className={`mt-2 ${colors.textMuted}`}>
                기술과 파트너십의 결합은 무한한 기회를 만듭니다. 제휴 문의를 남겨주시면 담당자가 직접 연락드립니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?type=partner"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                <Mail className="h-4 w-4" />
                제휴 문의하기
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                회사 소개
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
