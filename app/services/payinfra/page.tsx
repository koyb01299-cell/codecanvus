"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  CreditCard,
  Server,
  Workflow,
  ShieldCheck,
  Clock3,
  Cloud,
  Zap,
  BarChart3,
  ArrowRight,
  Network,
  Lock,
  FileCheck,
  Repeat,
  RefreshCw,
  BadgeCheck,
  Globe2,
  FolderTree,
  History,
} from "lucide-react";

/**
 * CodeCanvas | Services → PayInfra
 * - PG / 선불 / 정산 / 결제 승인·취소 / 노티 / 스케줄 / FDS / 매입 / 시재 등
 * - 엔터프라이즈 결제 인프라 전체 플로우를 라벤더 톤으로 구성
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

// Infra 요소 리스트
const infraItems = [
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "결제 승인/취소 엔진",
    desc: "REST 기반 결제 승인·취소·정기 결제를 안정적으로 처리. 멱등성 보장.",
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: "정산·지급 엔진",
    desc: "D+0, D+1, 예약 출금, 지급이체, 회계 분배/수수료 처리.",
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "매입 스케줄러",
    desc: "매입 파일 수집 → 정제 → 매입 결과 API/대시보드 연동.",
  },
  {
    icon: <History className="h-5 w-5" />,
    title: "노티 처리 파이프라인",
    desc: "PG/카드사/제휴사에서 오는 승인·취소·FDS 노티 실시간 연동.",
  },
  {
    icon: <Network className="h-5 w-5" />,
    title: "멀티-원천사 라우팅",
    desc: "PG 1개가 아닌 40+ 결제망과 통합 연결. 라우팅 정책 제어 가능.",
  },
  {
    icon: <FolderTree className="h-5 w-5" />,
    title: "정책/스코어링 엔진",
    desc: "가맹점 위험도·BIN·금액·패턴 기반 승인 제한·스코어링.",
  },
  {
    icon: <Clock3 className="h-5 w-5" />,
    title: "자동 재시도 / Rate Control",
    desc: "카드사 지연, VAN 오류 시 자동 재시도 및 트래픽 컨트롤.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "정합성 보정(Reconciliation)",
    desc: "승인/취소/매입/정산 사이의 정합성 자동 점검·보정.",
  },
];

const gatewaySupports = [
  "카드결제(정상/간편/정기)",
  "계좌/가상계좌",
  "앱·QR 결제",
  "선불/포인트/지갑 결제",
  "수기/링크 결제",
  "신용/체크 글로벌 BIN",
];

const settlementModes = [
  {
    mode: "D+0 (당일정산)",
    desc: "빠른 정산을 원하는 가맹점에 최적화된 정산 모드.",
  },
  {
    mode: "D+1 (익일정산)",
    desc: "안정적이고 전통적인 정산 방식으로 높은 신뢰도.",
  },
  {
    mode: "예약 출금",
    desc: "특정 시점(예: 매입일 기준)으로 정액·정률 출금.",
  },
  {
    mode: "분리 정산",
    desc: "플랫폼/판매자/라이더 등 다자간 정산 자동화.",
  },
];

export default function PayInfraPage(): JSX.Element {
  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* ─────────────── Hero ─────────────── */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <motion.div {...fadeUp(0)} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm bg-white/70 backdrop-blur border-white/60">
              <Server className="h-4 w-4" />
              Enterprise Pay Infrastructure
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight">
              CodeCanvas PayInfra
              <span className={`block ${colors.violet}`}>
                확장성과 안전성을 갖춘 결제 인프라
              </span>
            </h1>
            <p className={`mt-4 sm:mt-6 text-base sm:text-lg ${colors.textMuted}`}>
              승인·정산·매입·노티·FDS까지.  
              CodeCanvas PayInfra는 PG·선불·정산망을 하나의 클라우드 네트워크로 통합하여  
              **높은 가용성과 정확한 정합성**을 보장합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?type=payinfra-demo"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                데모 요청 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tech/architecture"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                아키텍처 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── Infra Core Features ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          PayInfra 핵심 구성 요소
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          결제 승인부터 정산·매입·노티·보정까지, 결제에 필요한 모든 단계가 자동화되어 있습니다.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infraItems.map((f, idx) => (
            <motion.div
              key={f.title}
              {...fadeUp(idx + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>
                  {f.icon}
                </div>
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className={`mt-3 text-sm ${colors.textMuted}`}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── Gateway Protocol Support ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          지원 결제 프로토콜 & 채널
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          CodeCanvas PayInfra는 다양한 결제 수단과 프로토콜을 단일 인터페이스로 제공합니다.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {gatewaySupports.map((g, idx) => (
            <motion.div
              {...fadeUp(idx + 1)}
              key={g}
              className="inline-flex items-center gap-2 rounded-xl border border-[#d9d0fb] bg-white px-4 py-2 text-sm"
            >
              <CreditCard className="h-4 w-4 text-[#7b5cf4]" />
              {g}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── Settlement Modes ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          정산 방식(D+0 / D+1 / 예약 / 분리정산)
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          가맹점 사업 모델에 맞는 다양한 정산 방식을 설정할 수 있습니다.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {settlementModes.map((mode, idx) => (
            <motion.div
              {...fadeUp(idx + 1)}
              key={mode.mode}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-[#7b5cf4]" />
                <h3 className="font-semibold">{mode.mode}</h3>
              </div>
              <p className={`mt-3 text-sm ${colors.textMuted}`}>{mode.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── Architecture Diagram (Text) ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          결제 인프라 아키텍처(요약)
        </motion.h2>

        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          실제 시스템에서 동작하는 PayInfra의 구성도 요약본입니다.
        </p>

        <motion.div
          {...fadeUp(1)}
          className={`mt-6 rounded-3xl ${colors.card} border ${colors.border} p-8`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Client */}
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <Globe2 className="h-4 w-4 text-[#7b5cf4]" />
                Client Layer
              </div>
              <ul className={`mt-2 pl-5 list-disc text-sm ${colors.textMuted} space-y-1`}>
                <li>Kiosk / POS</li>
                <li>웹·앱 체크아웃</li>
                <li>플러터/리액트 네이티브</li>
              </ul>
            </div>

            {/* API Layer */}
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <Server className="h-4 w-4 text-[#7b5cf4]" />
                API / Gateway Layer
              </div>
              <ul className={`mt-2 pl-5 list-disc text-sm ${colors.textMuted} space-y-1`}>
                <li>승인/취소 API</li>
                <li>정산/매입/노티 처리기</li>
                <li>Webhook 엔드포인트</li>
                <li>API 키/IAM</li>
              </ul>
            </div>

            {/* Infra */}
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <Cloud className="h-4 w-4 text-[#7b5cf4]" />
                Infra & Ops Layer
              </div>
              <ul className={`mt-2 pl-5 list-disc text-sm ${colors.textMuted} space-y-1`}>
                <li>멀티 AZ / Auto Scaling</li>
                <li>FDS / Anomaly Detection</li>
                <li>정합성 보정(Reconciliation)</li>
                <li>배치/매입 스케줄러</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">
                엔터프라이즈 결제 인프라, 몇 줄의 코드로 시작하세요
              </h3>
              <p className={`mt-2 text-sm ${colors.textMuted}`}>
                CodeCanvas PayInfra는 PG·선불·정산·매입까지 포함한 완전한 결제 플랫폼입니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?type=payinfra"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                데모 신청 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tech"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                기술 문서
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-4" />
    </div>
  );
}
