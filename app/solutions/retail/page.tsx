"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Store,
  CreditCard,
  QrCode,
  Users,
  Wallet,
  Gift,
  BarChart3,
  LineChart,
  Receipt,
  Clock3,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Truck,
  Layers,
  Ticket,
  Phone,
} from "lucide-react";

/**
 * CodeCanvas | Solutions → Retail
 * - 오프라인 매장, 프랜차이즈, 브랜드숍을 위한 Retail Suite
 * - 결제/정산/CRM/리워드/POS 연동을 통합 제공
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

export default function RetailSolutionPage(): JSX.Element {
  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* ─────────────── Hero ─────────────── */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <motion.div {...fadeUp(0)} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm bg-white/70 backdrop-blur border-white/60">
              <Store className="h-4 w-4" />
              Retail Solution
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight">
              CodeCanvas Retail Suite
              <span className={`block ${colors.violet}`}>
                매장 운영과 고객 관리를 한 번에
              </span>
            </h1>
            <p className={`mt-4 sm:mt-6 text-base sm:text-lg ${colors.textMuted}`}>
              오프라인 매장·프랜차이즈·브랜드숍을 위한  
              **결제·단골·포인트·정산·리워드·분석**을 통합한  
              강력한 리테일 운영 플랫폼입니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?type=retail"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition">
                도입 상담하기 <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services/analytics"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition">
                데이터 분석 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── 주요 기능 ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          리테일 운영에 필요한 모든 기능
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          결제부터 단골·포인트·영업 데이터까지 리테일 비즈니스 전체를 지원합니다.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <CreditCard className="h-5 w-5" />,
              title: "통합 결제 인프라",
              desc: "카드·QR·앱결제·간편결제 등 매장에 필요한 모든 결제수단 지원.",
            },
            {
              icon: <Wallet className="h-5 w-5" />,
              title: "포인트 / 스탬프 / 지갑",
              desc: "적립·사용·유효기간·매장별 정책 등 고도화된 포인트 엔진 제공.",
            },
            {
              icon: <Gift className="h-5 w-5" />,
              title: "리워드 & 쿠폰 자동 발송",
              desc: "첫방문·단골·이탈고객 자동 쿠폰 발송으로 재방문율 증가.",
            },
            {
              icon: <Users className="h-5 w-5" />,
              title: "고객 CRM 관리",
              desc: "성별·연령대·방문횟수·메뉴 선호도 기반 고객 세그먼트 관리.",
            },
            {
              icon: <BarChart3 className="h-5 w-5" />,
              title: "매장 분석 대시보드",
              desc: "요일/시간·고객 유형·메뉴 판매량·매출 흐름 등을 실시간 분석.",
            },
            {
              icon: <Receipt className="h-5 w-5" />,
              title: "D+0/D+1 정산",
              desc: "리테일 업종에 최적화된 빠른 정산 및 예약 정산 모드 제공.",
            },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>{f.icon}</div>
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className={`mt-3 text-sm ${colors.textMuted}`}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── 업종별 실제 사용 시나리오 ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          업종별 실사용 시나리오
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <ShoppingBag className="h-5 w-5" />,
              title: "패션·잡화 매장",
              desc: "재구매율 중심의 포인트/쿠폰 운영, 결제-상품-고객 데이터를 연결해 VIP 관리.",
            },
            {
              icon: <Store className="h-5 w-5" />,
              title: "카페 · 베이커리",
              desc: "스탬프 기반 로열티, 단골 중심 커뮤니케이션, 간편결제/QR 도입.",
            },
            {
              icon: <Truck className="h-5 w-5" />,
              title: "프랜차이즈 체인점",
              desc: "본사-매장 데이터 통합, 매장별 정산/정책 분리, 본사 대시보드 제공.",
            },
            {
              icon: <Phone className="h-5 w-5" />,
              title: "테이크아웃 · 예약형 매장",
              desc: "전화/예약/포장 주문과 POS 통합, SMS 쿠폰 자동 발송.",
            },
            {
              icon: <Layers className="h-5 w-5" />,
              title: "오프라인+온라인 통합 매장",
              desc: "오프라인/온라인 주문을 단일 고객ID로 연결하는 Omni-Commerce 구조 지원.",
            },
            {
              icon: <Sparkles className="h-5 w-5" />,
              title: "뷰티 · 라이프스타일샵",
              desc: "고객 시술/방문 기록 기반 추천·세그먼트·전문 CRM 제공.",
            },
          ].map((u, i) => (
            <motion.div
              key={u.title}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>{u.icon}</div>
                <h3 className="font-semibold">{u.title}</h3>
              </div>
              <p className={`mt-3 text-sm ${colors.textMuted}`}>{u.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── POS / KIOSK / 기기 연동 ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          POS · 키오스크 · 단말기 연동
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          매장 환경에 맞는 다양한 기기와 연동되어, 빠른 결제와 자동 적립을 제공합니다.
        </p>

        <motion.div
          {...fadeUp(1)}
          className={`mt-8 rounded-3xl ${colors.card} border ${colors.border} p-6 sm:p-8`}>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <li className="flex items-center gap-2">
              <QrCode className="h-4 w-4 text-[#7b5cf4]" />
              키오스크 자동 적립/쿠폰 적용
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#7b5cf4]" />
              휴대폰 번호 기반 포인트 적립
            </li>
            <li className="flex items-center gap-2">
              <Receipt className="h-4 w-4 text-[#7b5cf4]" />
              영수증 기반 자동 스탬프 누적
            </li>
            <li className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[#7b5cf4]" />
              POS 연동 정산·배치 자동화
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#7b5cf4]" />
              결제 실패 자동 재시도
            </li>
            <li className="flex items-center gap-2">
              <LineChart className="h-4 w-4 text-[#7b5cf4]" />
              실시간 매출/방문 데이터 업데이트
            </li>
          </ul>
        </motion.div>
      </section>

      {/* ─────────────── Why Retail Suite ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          CodeCanvas Retail Suite가 특별한 이유
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Ticket className="h-5 w-5" />,
              title: "자동화된 단골 시스템",
              desc: "첫방문·단골전환·이탈고객 자동 쿠폰 발송으로 재방문율 증가.",
            },
            {
              icon: <LineChart className="h-5 w-5" />,
              title: "심층 매장 분석",
              desc: "시간대/요일/고객층/메뉴별 분석으로 영업 효율 극대화.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "안정적인 결제 인프라",
              desc: "POS 지연·VAN 오류 자동 감지 및 우회 처리.",
            },
            {
              icon: <Receipt className="h-5 w-5" />,
              title: "매장별 정산 자동화",
              desc: "D+0/D+1 정산, 분리정산, 예약 출금 등 매장 형태에 맞춤 제공.",
            },
          ].map((a, i) => (
            <motion.div
              key={a.title}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}>
              <div className={`p-2 rounded-xl ${colors.violetBg} text-white w-fit`}>{a.icon}</div>
              <h3 className="mt-3 font-semibold">{a.title}</h3>
              <p className={`mt-2 text-sm ${colors.textMuted}`}>{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">
                매장 운영, CodeCanvas Retail Suite로 단순하게
              </h3>
              <p className={`mt-2 text-sm ${colors.textMuted}`}>
                결제·포인트·정산·CRM·리워드·분석을 하나로 통합한 리테일 운영 솔루션을 지금 시작해보세요.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?type=retail"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition">
                도입 상담하기 <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/solutions/fintech"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition">
                핀테크 솔루션 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-6" />
    </div>
  );
}
