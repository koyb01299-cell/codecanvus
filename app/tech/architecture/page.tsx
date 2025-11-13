"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Boxes,
  Server,
  Network,
  Cloud,
  Database,
  ShieldCheck,
  Activity,
  Globe2,
  GitBranch,
  Clock3,
  ArrowRight,
  Code2,
  Layers,
  BarChart3,
  Lock,
  RefreshCw,
  Terminal,
  AlertTriangle,
  Route,
} from "lucide-react";

/**
 * CodeCanvas | Tech → Architecture
 * - 전체 플랫폼(결제 인프라, CRM, 분석, 글로벌, 솔루션)을 지탱하는 기술 아키텍처 소개 페이지
 * - Infra / App / Data / Security / Reliability 관점에서 정리
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

export default function TechArchitecturePage(): JSX.Element {
  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* ─────────────── Hero ─────────────── */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <motion.div {...fadeUp(0)} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm bg-white/70 backdrop-blur border-white/60">
              <Server className="h-4 w-4" />
              Platform Architecture
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight">
              CodeCanvas Architecture
              <span className={`block ${colors.violet}`}>
                결제와 데이터를 위한 레이어드 플랫폼
              </span>
            </h1>
            <p className={`mt-4 sm:mt-6 text-base sm:text-lg ${colors.textMuted}`}>
              CodeCanvas는 결제 인프라, CRM, 메시징, 분석, 글로벌 확장을 하나의  
              이벤트 기반 아키텍처로 묶어, **추가 서비스**와 **신규 금융 상품**을  
              빠르게 올릴 수 있는 구조로 설계되어 있습니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?type=tech"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                기술 미팅 요청 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/payinfra"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                PayInfra 살펴보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── Layered Architecture Overview ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          레이어드 아키텍처 개요
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          CodeCanvas는 **Client → API → Domain Service → Data & Events → Infra** 순으로  
          책임을 분리한 레이어드 아키텍처를 채택하고 있습니다.
        </p>

        <motion.div
          {...fadeUp(1)}
          className={`mt-8 rounded-3xl ${colors.card} border ${colors.border} p-6 sm:p-8`}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
            <div className="flex flex-col items-start gap-2">
              <div className="inline-flex items-center gap-2 rounded-xl bg-[#f2edff] px-3 py-1">
                <Globe2 className="h-4 w-4 text-[#7b5cf4]" />
                <span className="text-xs font-semibold">Layer 1</span>
              </div>
              <h3 className="font-semibold">Client / Experience</h3>
              <p className={colors.textMuted}>
                Web / Admin / 가맹점 콘솔 / 리포트 뷰어 / Kiosk UI.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="inline-flex items-center gap-2 rounded-xl bg-[#f2edff] px-3 py-1">
                <Terminal className="h-4 w-4 text-[#7b5cf4]" />
                <span className="text-xs font-semibold">Layer 2</span>
              </div>
              <h3 className="font-semibold">API & Gateway</h3>
              <p className={colors.textMuted}>
                REST / Webhook / 인증 / Throttling / 라우팅 / 멱등성 처리.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="inline-flex items-center gap-2 rounded-xl bg-[#f2edff] px-3 py-1">
                <Boxes className="h-4 w-4 text-[#7b5cf4]" />
                <span className="text-xs font-semibold">Layer 3</span>
              </div>
              <h3 className="font-semibold">Domain Services</h3>
              <p className={colors.textMuted}>
                Payments / Settlements / CRM / Messaging / Risk / Global.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="inline-flex items-center gap-2 rounded-xl bg-[#f2edff] px-3 py-1">
                <BarChart3 className="h-4 w-4 text-[#7b5cf4]" />
                <span className="text-xs font-semibold">Layer 4</span>
              </div>
              <h3 className="font-semibold">Data & Events</h3>
              <p className={colors.textMuted}>
                Event Bus / Stream / Warehouse / Metrics / BI / ML Feeds.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="inline-flex items-center gap-2 rounded-xl bg-[#f2edff] px-3 py-1">
                <Cloud className="h-4 w-4 text-[#7b5cf4]" />
                <span className="text-xs font-semibold">Layer 5</span>
              </div>
              <h3 className="font-semibold">Infra & Security</h3>
              <p className={colors.textMuted}>
                Cloud, Network, KMS, WAF, Observability, CI/CD, Backup.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─────────────── Tech Stack Summary ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          기술 스택 요약
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <motion.div
            {...fadeUp(1)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <Globe2 className="h-4 w-4 text-[#7b5cf4]" />
              Frontend & Experience
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>Next.js / React 기반 SPA & MPA 혼합 구조</li>
              <li>TypeScript + Tailwind CSS</li>
              <li>프랜차이즈/가맹점 Admin 콘솔</li>
              <li>모바일 Web 우선 UX</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(2)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <Server className="h-4 w-4 text-[#7b5cf4]" />
              Backend & Domain
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>TypeScript / Node.js & PHP/Laravel 혼합 운용</li>
              <li>결제/정산/CRM/Global 도메인 서비스 분리</li>
              <li>RESTful API + Webhook 기반 이벤트 전달</li>
              <li>모듈형 Billing/정산 엔진</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(3)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <Database className="h-4 w-4 text-[#7b5cf4]" />
              Data & Observability
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>Relational DB(거래/정산 원장)</li>
              <li>로그/이벤트 전용 Storage & Index</li>
              <li>Metrics / Tracing / Dashboard</li>
              <li>BI 및 리포트용 Data Pipeline</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── Network & Environment Separation ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          네트워크 & 환경 분리
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          금융/결제 트래픽을 안전하게 다루기 위해, CodeCanvas는 **망 분리**와 **환경 분리**를  
          아키텍처의 기본 전제로 삼고 있습니다.
        </p>

        <motion.div
          {...fadeUp(1)}
          className={`mt-8 rounded-3xl ${colors.card} border ${colors.border} p-6 sm:p-8`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <Network className="h-4 w-4 text-[#7b5cf4]" />
                Public Layer
              </div>
              <ul className={`mt-3 pl-5 list-disc text-sm ${colors.textMuted} space-y-1`}>
                <li>WAF 뒤에 위치한 Web / API Gateway</li>
                <li>HTTPS Termination, Rate Limit</li>
                <li>외부 연동 PG/은행/3rd-party API</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 font-semibold">
                <Server className="h-4 w-4 text-[#7b5cf4]" />
                Service / Application Layer
              </div>
              <ul className={`mt-3 pl-5 list-disc text-sm ${colors.textMuted} space-y-1`}>
                <li>도메인 서비스(결제/정산/CRM 등)</li>
                <li>배치/스케줄러/FDS 프로세스</li>
                <li>내부용 Admin API 및 Message Queue</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 font-semibold">
                <Database className="h-4 w-4 text-[#7b5cf4]" />
                Data & Storage Layer
              </div>
              <ul className={`mt-3 pl-5 list-disc text-sm ${colors.textMuted} space-y-1`}>
                <li>거래/정산/원장용 DB</li>
                <li>객체 스토리지(정산 파일/리포트)</li>
                <li>백업/아카이브 전용 스토리지</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {[
            {
              label: "환경 분리",
              icon: <GitBranch className="h-4 w-4 text-[#7b5cf4]" />,
              items: ["Local / Dev / Stage / Prod 분리", "샌드박스 API 별도 도메인", "권한/데이터 최소화"],
            },
            {
              label: "가용성",
              icon: <Cloud className="h-4 w-4 text-[#7b5cf4]" />,
              items: ["멀티 AZ 구성", "장애 시 롤링/블루그린 배포", "자동 스케일링 및 헬스체크"],
            },
            {
              label: "연동",
              icon: <Route className="h-4 w-4 text-[#7b5cf4]" />,
              items: ["PG/은행/3rd-party와 VPN/전용선 연동", "전용 IP·화이트리스트 기반 통신", "아웃바운드 정책 최소화"],
            },
          ].map((b, i) => (
            <motion.div
              key={b.label}
              {...fadeUp(i + 2)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}
            >
              <div className="flex items-center gap-2 font-semibold">
                {b.icon}
                <span>{b.label}</span>
              </div>
              <ul className={`mt-2 pl-5 list-disc ${colors.textMuted} space-y-1`}>
                {b.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── Data & Event Flow ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          데이터 & 이벤트 플로우
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          CodeCanvas는 **이벤트 드리븐(event-driven)** 구조를 통해 결제/정산/CRM/메시징/분석을  
          하나의 타임라인으로 관리합니다.
        </p>

        <motion.div
          {...fadeUp(1)}
          className={`mt-8 rounded-3xl ${colors.card} border ${colors.border} p-6 sm:p-8`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 text-xs sm:text-sm">
            {[
              {
                step: "Event 01",
                title: "Payment.Requested",
                desc: "Client → API, 결제 시도 이벤트 생성.",
              },
              {
                step: "Event 02",
                title: "Payment.Authorized",
                desc: "PG/카드사 승인 결과 수신, 트랜잭션 기록.",
              },
              {
                step: "Event 03",
                title: "Settlement.Scheduled",
                desc: "가맹점/수수료/정산일 기반 정산 스케줄 할당.",
              },
              {
                step: "Event 04",
                title: "Loyalty.Updated",
                desc: "포인트/스탬프 적립·사용, CRM 스코어 반영.",
              },
              {
                step: "Event 05",
                title: "Analytics.Aggregated",
                desc: "매출/승인율/재방문 등 집계 후 대시보드 업데이트.",
              },
            ].map((e, i) => (
              <div
                key={e.step}
                className="relative rounded-2xl border border-[#ece6ff] p-4 flex flex-col"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-[#7b5cf4]">
                    {e.step}
                  </span>
                  <Activity className="h-3.5 w-3.5 text-[#7b5cf4]" />
                </div>
                <h3 className="mt-1 font-semibold text-xs sm:text-sm">{e.title}</h3>
                <p className={`mt-2 ${colors.textMuted}`}>{e.desc}</p>
                {i < 4 && (
                  <div className="hidden lg:block absolute right-[-10px] top-1/2 -translate-y-1/2">
                    <ArrowRight className="h-4 w-4 text-[#d0c4ff]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─────────────── Reliability & Observability ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          안정성 & 관측성 설계
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <motion.div
            {...fadeUp(1)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <ShieldCheck className="h-4 w-4 text-[#7b5cf4]" />
              Reliability & SLA
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>99.9%+ 가용성 목표 세팅</li>
              <li>서비스별 Circuit Breaker / Rate Limit</li>
              <li>Graceful Degradation 전략 적용</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(2)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <Activity className="h-4 w-4 text-[#7b5cf4]" />
              Observability
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>로그 / 메트릭 / 트레이스 3-중 관측</li>
              <li>실시간 승인율 / 지연 / 오류 모니터링</li>
              <li>Slack / SMS / Webhook 알림 연동</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(3)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <RefreshCw className="h-4 w-4 text-[#7b5cf4]" />
              Recovery & Backup
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>정기 스냅샷 및 백업·복구 절차 수립</li>
              <li>정산·원장 데이터 Double-check Job</li>
              <li>Rollback / Failover 시뮬레이션 및 리허설</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── Security & Compliance ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          Security & Compliance
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          결제/금융 데이터는 **보안과 컴플라이언스**를 기준으로 설계해야 합니다.  
          CodeCanvas는 플랫폼 수준에서 이를 고려합니다.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <motion.div
            {...fadeUp(1)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <Lock className="h-4 w-4 text-[#7b5cf4]" />
              Data Protection
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>민감정보 암호화 / 토큰화</li>
              <li>KMS 기반 키 관리 체계</li>
              <li>접근 제어 / 최소 권한 원칙</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(2)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <AlertTriangle className="h-4 w-4 text-[#7b5cf4]" />
              Risk & Audit
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>접속/변경 이력 Audit Trail</li>
              <li>FDS/AML Rule Engine과 연계</li>
              <li>행위 기반 이상 징후 탐지</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(3)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <Code2 className="h-4 w-4 text-[#7b5cf4]" />
              SDLC & CI/CD
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>코드 리뷰 / Static Analysis</li>
              <li>Stage 환경 자동 배포 및 테스트</li>
              <li>Prod 배포 Blue-Green / Canary 전략</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">
                인프라부터 함께 설계할 파트너가 필요하신가요?
              </h3>
              <p className={`mt-2 text-sm ${colors.textMuted}`}>
                CodeCanvas는 단순한 API 제공을 넘어, 귀사의 비즈니스 모델과 규제 환경에 맞춘  
                아키텍처 설계를 함께 고민합니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?type=tech"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                기술 미팅 요청 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/apis"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                API 서비스 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-6" />
    </div>
  );
}
