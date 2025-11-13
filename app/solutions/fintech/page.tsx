"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CreditCard,
  Wallet,
  FileCheck,
  ShieldCheck,
  BarChart3,
  Rocket,
  Building2,
  Layers,
  Repeat,
  Network,
  ArrowRight,
  Banknote,
  LineChart,
  Globe2,
  Lock,
  Timer,
  Coins,
  ClipboardList,
} from "lucide-react";

/**
 * CodeCanvas | Solutions → Fintech
 * - 기술 기반 핀테크 솔루션 페이지
 * - 결제 인프라 + 정산 + 데이터 + 리스크 + 운영까지 모두 포함
 * - 글로벌 / PG / 선불 / P2P / 플랫폼 금융 모두 타겟 가능
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
  transition: { duration: 0.55, delay: 0.05 * i },
});

export default function FintechSolutionPage(): JSX.Element {
  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* ─────────────── Hero Section ─────────────── */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <motion.div {...fadeUp(0)} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm bg-white/70 backdrop-blur border-white/60">
              <Globe2 className="h-4 w-4" />
              Fintech Solutions
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight">
              CodeCanvas Fintech Suite
              <span className={`block ${colors.violet}`}>
                결제부터 금융 운영까지, 하나의 플랫폼으로
              </span>
            </h1>
            <p className={`mt-4 sm:mt-6 text-base sm:text-lg ${colors.textMuted}`}>
              전통 PG사의 범위를 넘어서, 금융 데이터 처리·정산 엔진·지갑·위험관리·AML까지  
              핀테크 서비스 구축을 위한 모든 기술이 CodeCanvas에 포함되어 있습니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?type=fintech"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                상담 요청 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tech"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                기술 문서 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── Section: Core Areas ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          핀테크를 구성하는 핵심 기술영역
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          결제·정산·위험관리·지갑·데이터·보안 등 필수 요소를 하나의 구조로 제공합니다.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <CreditCard className="h-5 w-5" />,
              title: "결제 인프라(PayInfra)",
              desc: "승인·취소·노티·매입연동·정합성·배치까지 포함한 엔터프라이즈 결제 처리 엔진.",
            },
            {
              icon: <Wallet className="h-5 w-5" />,
              title: "지갑 & 선불(FinWallet)",
              desc: "선불형 잔액, 충전/차감, 프로모션, 스탬프·포인트, 정산 연동 등 완비된 지갑 엔진.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "위험관리·AML·FDS",
              desc: "이상거래 감지, BIN 스코어링, 거래 제한·재시도 로직, AML Rule Engine 제공.",
            },
            {
              icon: <FileCheck className="h-5 w-5" />,
              title: "정산·지급 Settlement",
              desc: "D+0 / D+1 / 예약 / 분리정산 등 다양한 정산 옵션을 지원.",
            },
            {
              icon: <BarChart3 className="h-5 w-5" />,
              title: "데이터 분석 / BI",
              desc: "거래·정산·지갑·고객 데이터를 통합 분석하는 Insight Engine 제공.",
            },
            {
              icon: <Lock className="h-5 w-5" />,
              title: "보안·인증·컴플라이언스",
              desc: "ISMS·전자금융감독규정·암호화·로그관리·WAF·인증·권한(IAM) 완전 지원.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              {...fadeUp(idx + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className={`mt-3 text-sm ${colors.textMuted}`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── Section: Industry Use Cases ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          업종별 핀테크 활용 사례
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          각 서비스 모델에 특화된 금융 엔진을 제공합니다.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "PG · 결제대행사",
              desc: "승인·결제창·정산·매입·가맹점 관리까지 풀스택 제공.",
              icon: <Building2 className="h-5 w-5" />,
            },
            {
              title: "커머스 · 플랫폼",
              desc: "정산 자동화, 분리정산, 수수료 관리, 지갑/포인트 연동.",
              icon: <Layers className="h-5 w-5" />,
            },
            {
              title: "선불/지갑 서비스",
              desc: "충전, 환불, 차감, 포인트/스탬프, 유효기간 정책 관리.",
              icon: <Coins className="h-5 w-5" />,
            },
            {
              title: "P2P 금융 · PayLater",
              desc: "거래 검증, 위험도 평가, 일자 기반 정산·상환 엔진 제공.",
              icon: <Timer className="h-5 w-5" />,
            },
            {
              title: "리워드 · 멤버십 서비스",
              desc: "고객 세그먼트 기반 프로모션, 자동 쿠폰, 지갑 연동.",
              icon: <ClipboardList className="h-5 w-5" />,
            },
            {
              title: "해외 결제·글로벌 PG",
              desc: "환율·수수료·세금·해외 PG 라우팅 등 국제결제 관리.",
              icon: <Globe2 className="h-5 w-5" />,
            },
          ].map((use, idx) => (
            <motion.div
              key={use.title}
              {...fadeUp(idx + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>
                  {use.icon}
                </div>
                <h3 className="font-semibold">{use.title}</h3>
              </div>
              <p className={`mt-3 text-sm ${colors.textMuted}`}>{use.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── Section: Advantage ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          CodeCanvas Fintech Suite가 특별한 이유
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Network className="h-5 w-5" />,
              title: "멀티-결제망 연결",
              desc: "40+ PG/원천/정산망과 즉시 연동 가능한 모듈 제공.",
            },
            {
              icon: <LineChart className="h-5 w-5" />,
              title: "완전한 데이터 연동",
              desc: "승인→매입→정산→지급→통계까지 데이터가 자동 정합.",
            },
            {
              icon: <Repeat className="h-5 w-5" />,
              title: "자동화된 금융 운영",
              desc: "스케줄러·배치·환불·보정·재시도 등 금융 업무 자동화.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "엔터프라이즈 보안",
              desc: "WAF·암호화·접근통제·로그·IAM 등 금융 보안 표준 완비.",
            },
          ].map((ad, idx) => (
            <motion.div
              key={ad.title}
              {...fadeUp(idx + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className={`p-2 rounded-xl ${colors.violetBg} text-white w-fit`}>
                {ad.icon}
              </div>
              <h3 className="mt-3 font-semibold">{ad.title}</h3>
              <p className={`mt-2 text-sm ${colors.textMuted}`}>{ad.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── Section: CTA ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">
                핀테크 서비스, CodeCanvas로 몇 주 만에 구축하세요
              </h3>
              <p className={`mt-2 text-sm ${colors.textMuted}`}>
                결제·정산·지갑·보안·데이터·FDS까지 포함된 통합 솔루션을 제공합니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?type=fintech"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                상담 신청 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/payinfra"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                결제 인프라 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-6" />
    </div>
  );
}
