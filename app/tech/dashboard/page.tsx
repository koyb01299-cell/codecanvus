"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  LineChart,
  Activity,
  Gauge,
  Database,
  Eye,
  Bell,
  Globe2,
  MonitorSmartphone,
  PieChart,
  AlertTriangle,
  Server,
  Layers,
  ArrowRight,
  Workflow,
  Clock3,
  Terminal,
  Sparkles,
} from "lucide-react";

/**
 * CodeCanvas | Tech → Dashboard Architecture
 * - 실시간 분석, 승인율 모니터링, Event 기반 인사이트 시스템
 * - 운영 대시보드 / 가맹점 대시보드 / 금융 데이터 시각화 / FDS 연계
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
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay: 0.05 * i },
});

export default function TechDashboardPage(): JSX.Element {
  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* ─────────────── Hero ─────────────── */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <motion.div
            {...fadeUp(0)}
            className="max-w-3xl flex flex-col gap-4"
          >
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white/70 backdrop-blur border-white/60">
              <BarChart3 className="h-4 w-4" />
              Dashboard & Insight Engine
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              CodeCanvas Dashboard
              <span className={`block ${colors.violet}`}>
                실시간 데이터 기반 의사결정 플랫폼
              </span>
            </h1>
            <p className={`text-base sm:text-lg ${colors.textMuted}`}>
              거래·정산·승인율·리스크·글로벌 데이터까지  
              모든 정보를 하나의 통합 대시보드에서 확인할 수 있습니다.  
              운영팀, 개발팀, 경영진을 위한 인사이트 중심 설계.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="/contact?type=data"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-[#7b5cf4] text-white text-sm font-semibold hover:opacity-95"
              >
                도입 상담 <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/tech/architecture"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#dcd2fc] bg-white hover:bg-[#f3edff]"
              >
                기술 구조 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── Core Sections ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          3가지 유형의 대시보드 제공
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          각각의 사용자 역할에 최적화된 UX로 설계된 다차원 분석 환경.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <MonitorSmartphone className="h-6 w-6" />,
              title: "가맹점 매출 대시보드",
              desc: "매출·승인율·정산·고객·리포트를 한눈에.",
            },
            {
              icon: <Server className="h-6 w-6" />,
              title: "운영사(Backoffice) Console",
              desc: "승인율, 트래픽, 거래 지연, 장애 지표 실시간 확인.",
            },
            {
              icon: <Layers className="h-6 w-6" />,
              title: "데이터 분석(Insight) 엔진",
              desc: "ML 기반 패턴 분석·KPI 모니터링·FDS 스코어링 연계.",
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 1)}
              className={`p-6 rounded-2xl ${colors.card} border ${colors.border}`}
            >
              <div className="p-3 rounded-xl bg-[#f2edff] w-fit mb-4 text-[#7b5cf4]">
                {c.icon}
              </div>
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className={`mt-2 text-sm ${colors.textMuted}`}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── Live Monitoring ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          실시간 라이브 모니터링
        </motion.h2>

        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          승인/취소/트래픽/지연/장애 탐지를 모두 모니터링합니다.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10">
          {[
            {
              title: "실시간 승인율",
              stat: "97.4%",
              icon: <Gauge className="h-6 w-6" />,
            },
            {
              title: "평균 승인 속도",
              stat: "78ms",
              icon: <Clock3 className="h-6 w-6" />,
            },
            {
              title: "에러 지표",
              stat: "0.12%",
              icon: <AlertTriangle className="h-6 w-6" />,
            },
            {
              title: "거래 처리량",
              stat: "8,420 tps",
              icon: <Activity className="h-6 w-6" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="p-3 rounded-xl bg-[#f2edff] text-[#7b5cf4] w-fit mb-4">
                {item.icon}
              </div>
              <div className="text-sm font-semibold">{item.title}</div>
              <div className="text-2xl font-extrabold mt-1">{item.stat}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── Analytics Blocks ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          분석 & KPI 인사이트
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          일/주/월 단위 매출, 고객 행동, 반복 구매율, 결제 성공률 등의  
          주요 KPI를 자동으로 수집하고 시각화합니다.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              title: "매출 추이 분석",
              icon: <LineChart className="h-6 w-6" />,
              text: "일/주/월 단위 매출 트렌드를 AI 기반 예측과 함께 제공.",
            },
            {
              title: "고객 세그먼트",
              icon: <PieChart className="h-6 w-6" />,
              text: "성별·연령·시간대·지역 기반 고객 그룹 자동 분류.",
            },
            {
              title: "이상 탐지",
              icon: <AlertTriangle className="h-6 w-6" />,
              text: "비정상 거래 패턴 확인 시 즉시 경고 및 슬랙/문자 알림.",
            },
          ].map((a, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="p-3 bg-[#f2edff] rounded-xl text-[#7b5cf4] w-fit mb-4">
                {a.icon}
              </div>
              <h3 className="font-semibold text-lg">{a.title}</h3>
              <p className={`mt-2 text-sm ${colors.textMuted}`}>{a.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── Event-driven Architecture ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          이벤트 기반 데이터 처리
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          모든 대시보드 데이터는 Event Stream 기반으로  
          지연 최소화·데이터 정합성·히스토리 관리가 보장됩니다.
        </p>

        <motion.div
          {...fadeUp(1)}
          className={`rounded-3xl ${colors.card} border ${colors.border} p-8 mt-8`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 text-sm">
            {[
              ["Payment.Requested", "결제 요청"],
              ["Payment.Authorized", "승인 완료"],
              ["Payment.Settled", "정산 스케줄링"],
              ["User.Segment.Updated", "고객 세그먼트"],
              ["Analytics.Aggregated", "KPI 집계"],
            ].map((e, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#ece6ff] p-4 flex flex-col"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-[#7b5cf4]">
                    Event {idx + 1}
                  </span>
                  <Workflow className="h-4 w-4 text-[#7b5cf4]" />
                </div>
                <h3 className="mt-1 font-semibold">{e[0]}</h3>
                <p className={`mt-1 text-xs ${colors.textMuted}`}>{e[1]}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-10 sm:p-14 text-center">
          <h2 className="text-3xl font-bold mb-3">
            실시간 인사이트, 지금 바로 시작하세요
          </h2>
          <p className={`text-sm ${colors.textMuted} mb-8`}>
            운영팀·데이터팀·경영진 모두가 만족하는 유일한 통합 대시보드.
          </p>

          <a
            href="/contact?type=dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7b5cf4] text-white font-semibold hover:opacity-95 transition"
          >
            상담 신청하기 <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <div className="h-10" />
    </div>
  );
}
