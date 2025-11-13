"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Layers,
  Server,
  Cpu,
  Workflow,
  Shield,
  Database,
  Activity,
  Network,
  Boxes,
  GitBranch,
  Cloud,
  CloudLightning,
  Globe2,
  Gauge,
  Lock,
  BarChart3,
  FileCode,
  CircuitBoard,
  LayoutTemplate,
  Binary,
  GitCommitVertical,
  GitPullRequestArrow,
  GitMerge,
  RefreshCcw,
  Settings,
  LineChart,
  ArrowRight,
  CheckCircle2,
  PlugZap,
  Router,
  Box,
} from "lucide-react";

/**
 * CoreFeatures.tsx (Enterprise Architecture Edition)
 * - 홈페이지에서 가장 엔지니어링 회사 느낌이 강하게 드러나는 핵심 아키텍처 소개 섹션
 * - PG 느낌 ZERO, 기술 아키텍처 플랫폼 기업 느낌 100%
 * - 7-Layer Architecture + Domain Isolation + Event Pipeline + Observability + DX 등 대규모 포함
 */

/* -------------------------------------------------------------------------- */
/*                               COLOR SYSTEM                                 */
/* -------------------------------------------------------------------------- */
const colors = {
  text: "text-[#241f3a]",
  textMuted: "text-[#5c5470]",
  card: "bg-white",
  border: "border-[#e8e2fb]",
  violet: "text-[#7b5cf4]",
  violetBg: "bg-[#7b5cf4]",
  violetLightBg: "bg-[#f3edff]",
};

/* -------------------------------------------------------------------------- */
/*                               ANIMATION                                    */
/* -------------------------------------------------------------------------- */
const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: i * 0.08 },
});

/* -------------------------------------------------------------------------- */
/*                        ARCHITECTURE PRINCIPLES LIST                        */
/* -------------------------------------------------------------------------- */
const PRINCIPLES = [
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Layered Architecture",
    desc: "Entry → Routing → Service → Engine → Data → Observability → Edge 로 구성된 7-Layer 구조.",
  },
  {
    icon: <Boxes className="h-6 w-6" />,
    title: "Domain Isolation",
    desc: "서비스 도메인을 완전히 분리하여 장애 전파를 최소화하고 독립 스케일링 제공.",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Event-Driven Processing",
    desc: "모든 시스템 이벤트가 스트림 기반으로 전달되어 순서보장·재처리·장애격리가 가능.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Security by Design",
    desc: "Zero-Trust 기반 보안, RBAC, PKI, HSM, 네트워크 세그멘테이션을 기반으로 설계.",
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: "High Availability",
    desc: "Multi-AZ · Multi-Region · 배포 무중단 환경으로 99.99% SLA 보장.",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Observability First",
    desc: "로그·메트릭·트레이싱을 통합하여 장애가 발생하는 지점을 즉시 파악.",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "Microservice-Driven",
    desc: "모든 기능은 독립 서비스로 배치되며 서비스 간 의존도를 최소화.",
  },
  {
    icon: <CloudLightning className="h-6 w-6" />,
    title: "Cloud-Native Infra",
    desc: "Kubernetes 기반 오토스케일링·지능형 복구·리소스 최적화 구조.",
  },
];

/* -------------------------------------------------------------------------- */
/*                            COMPONENT START                                  */
/* -------------------------------------------------------------------------- */
export default function CoreFeatures(): JSX.Element {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      {/* ---------------------------------------------------------------------- */}
      {/*                                   INTRO                                */}
      {/* ---------------------------------------------------------------------- */}
      <motion.div
        {...fadeUp(0)}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          CodeCanvas Enterprise Architecture
        </h2>

        <p className={`mt-5 text-base sm:text-lg leading-relaxed ${colors.textMuted}`}>
          CodeCanvas는 단순한 SaaS나 결제 플랫폼이 아니라
          <span className="font-semibold text-[#7b5cf4]">
            엔터프라이즈급 시스템 아키텍처를 설계해 제공하는 통합 기술 플랫폼
          </span>
          입니다.
          <br />
          우리가 만드는 것은 단순 기능이 아니라
          <span className="font-semibold">
            확장성·안정성·보안성·관측성·데이터 흐름 전체를 커버하는 기술 기반 구조
          </span>
          입니다.
        </p>
      </motion.div>

      {/* ---------------------------------------------------------------------- */}
      {/*                         ARCHITECTURE PRINCIPLES                         */}
      {/* ---------------------------------------------------------------------- */}
      <motion.h3
        {...fadeUp(0)}
        className="text-2xl sm:text-3xl font-bold mb-10 text-center"
      >
        Architecture Principles
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-20">
        {PRINCIPLES.map((p, i) => (
          <motion.div
            key={p.title}
            {...fadeUp(i + 1)}
            className={`rounded-3xl ${colors.card} border ${colors.border} p-7 shadow-sm hover:shadow-[0_10px_40px_rgba(80,60,150,0.10)] transition`}
          >
            <div className="p-3 rounded-xl bg-[#f2edff] text-[#7b5cf4] w-fit mb-5">
              {p.icon}
            </div>
            <h4 className="text-lg font-bold mb-2">{p.title}</h4>
            <p className={`text-sm leading-relaxed ${colors.textMuted}`}>
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
      {/* ---------------------------------------------------------------------- */}
      {/*                   7-LAYER ENTERPRISE ARCHITECTURE OVERVIEW             */}
      {/* ---------------------------------------------------------------------- */}
      <motion.h3
        {...fadeUp(0)}
        className="text-2xl sm:text-3xl font-bold text-center mb-6"
      >
        7-Layer Enterprise Architecture
      </motion.h3>

      <p
        className={`text-center ${colors.textMuted} text-sm sm:text-base max-w-3xl mx-auto mb-16`}
      >
        CodeCanvas의 전체 시스템은 안정성·보안·확장성을 극대화하기 위해
        <span className="font-semibold text-[#7b5cf4]">7개 독립 레이어</span>로 구성됩니다.
        각 레이어는 완전히 독립적으로 확장되며 장애 전파를 차단합니다.
      </p>

      <div className="space-y-6 mb-24">
        {[
          {
            layer: "L1 — Entry Layer (Gateway / WAF / Auth)",
            description:
              "API Gateway · WAF · Bot Filter · Rate Limit · AuthN/AuthZ가 위치하는 시스템의 최전선.",
            icon: <Router className="h-6 w-6" />,
            gradient: "from-[#f1e8ff] to-[#faf6ff]",
          },
          {
            layer: "L2 — Routing Layer (Load Balancer / PG Router / Traffic Director)",
            description:
              "트래픽을 적절한 서비스로 라우팅하며 멀티-PG·멀티엔진 라우팅을 수행하는 트래픽 지휘층.",
            icon: <Network className="h-6 w-6" />,
            gradient: "from-[#ecdfff] to-[#f8f4ff]",
          },
          {
            layer: "L3 — Service Layer (Microservices)",
            description:
              "User·Order·Ledger·Billing·CRM 등 도메인이 모여 있는 마이크로서비스 계층.",
            icon: <Boxes className="h-6 w-6" />,
            gradient: "from-[#e7d9ff] to-[#f3ecff]",
          },
          {
            layer: "L4 — Engine Layer (Settlement / Risk / Workflow)",
            description:
              "정산 엔진, 이상거래 탐지 엔진, 데이터 처리 엔진 등 핵심 로직이 동작하는 실행 계층.",
            icon: <Cpu className="h-6 w-6" />,
            gradient: "from-[#e2d3ff] to-[#efe4ff]",
          },
          {
            layer: "L5 — Data Layer (Lake / Warehouse / Cache)",
            description:
              "모든 데이터의 단일 진실 원천(Single Source of Truth). 레이크·웨어하우스·캐시 전체 포함.",
            icon: <Database className="h-6 w-6" />,
            gradient: "from-[#dccaff] to-[#e9d7ff]",
          },
          {
            layer: "L6 — Observability Layer (Logs / Metrics / Traces)",
            description:
              "로그·메트릭·트레이싱·알림·분석으로 구성된 모니터링 전용 레이어.",
            icon: <Activity className="h-6 w-6" />,
            gradient: "from-[#d5c1ff] to-[#e4d2ff]",
          },
          {
            layer: "L7 — Edge Layer (CDN / Global POP / Edge Compute)",
            description:
              "글로벌 사용자에게 가장 가까운 위치에서 트래픽을 처리하는 Edge Region.",
            icon: <Globe2 className="h-6 w-6" />,
            gradient: "from-[#cfb8ff] to-[#dfc8ff]",
          },
        ].map((layer, i) => (
          <motion.div
            key={i}
            {...fadeUp(i)}
            className={`
              rounded-2xl p-8 border ${colors.border}
              bg-gradient-to-r ${layer.gradient}
              shadow-sm hover:shadow-[0_10px_40px_rgba(80,60,150,0.08)]
              transition
            `}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white text-[#7b5cf4] shadow-sm">
                {layer.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg">{layer.layer}</h4>
                <p className={`text-sm mt-2 ${colors.textMuted}`}>
                  {layer.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LAYER DIAGRAM — ASCII-LIKE HORIZONTAL RACK (순수 CSS 구조) */}
      <motion.div {...fadeUp(0)} className="mb-28">
        <h4 className="text-xl font-bold text-center mb-8">
          Architecture Layer Rack (Simplified Diagram)
        </h4>

        <div className="space-y-3 max-w-5xl mx-auto">
          {[
            ["L7", "Edge POP / CDN / Edge Compute", "bg-[#d8c9ff]"],
            ["L6", "Observability (Logs · Metrics · Traces)", "bg-[#e5dafd]"],
            ["L5", "Data Lake / Warehouse / Cache", "bg-[#eee5ff]"],
            ["L4", "Settlement / FDS / Workflow Engine", "bg-[#f5efff]"],
            ["L3", "Microservices (Domain Layer)", "bg-[#faf7ff]"],
            ["L2", "Traffic Routing / Load Balancer", "bg-[#f9f5ff]"],
            ["L1", "API Gateway / WAF / Auth", "bg-white"],
          ].map(([code, name, bg], i) => (
            <motion.div
              key={code}
              {...fadeUp(i)}
              className={`rounded-xl border border-[#e6defc] p-4 flex items-center justify-between ${bg}`}
            >
              <div className="font-bold text-[#7b5cf4] w-12">{code}</div>
              <div className="flex-1 font-medium text-sm">{name}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* ---------------------------------------------------------------------- */}
      {/*               EVENT-DRIVEN PIPELINE — STREAM PROCESSING                */}
      {/* ---------------------------------------------------------------------- */}
      <motion.h3
        {...fadeUp(0)}
        className="text-2xl sm:text-3xl font-bold text-center mb-6"
      >
        Event-Driven Processing Pipeline
      </motion.h3>

      <p
        className={`text-center ${colors.textMuted} text-sm sm:text-base max-w-3xl mx-auto mb-16`}
      >
        CodeCanvas는 모든 트랜잭션을 실시간 이벤트 스트림으로 처리하는
        <span className="text-[#7b5cf4] font-semibold">
          Kafka-like Event Pipeline
        </span>
        을 기반으로 합니다.
        순서 보장·재처리·이상 이벤트 분리 등 금융/결제 시스템에 최적화된 구조입니다.
      </p>

      {/* -------------------- Event Flow Diagrams -------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
        {/* Event Flow Box 1 */}
        <motion.div
          {...fadeUp(1)}
          className={`rounded-3xl p-8 border ${colors.border} ${colors.card}`}
        >
          <h4 className="font-bold mb-4 text-lg">Event Stream Flow</h4>

          <div className="space-y-4">
            {[
              ["API Gateway", "클라이언트 요청 수신 · 인증"],
              ["Event Router", "도메인별 라우팅 · 우선순위 처리"],
              ["Message Broker", "Kafka-like Topic 기반 비동기 스트림"],
              ["Event Processor", "워크플로 실행 및 비즈니스 로직 처리"],
              ["DB / Lake", "정합성 보장 저장"],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                {...fadeUp(i + 2)}
                className="p-4 rounded-xl border border-[#ede7ff] bg-[#f9f7ff]"
              >
                <div className="font-semibold text-[#7b5cf4]">{title}</div>
                <p className={`text-xs mt-1 ${colors.textMuted}`}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Event Flow Box 2 */}
        <motion.div
          {...fadeUp(2)}
          className={`rounded-3xl p-8 border ${colors.border} ${colors.card}`}
        >
          <h4 className="font-bold mb-4 text-lg">
            Reliability Mechanisms (금융 시스템 필수)
          </h4>

          <div className="space-y-4">
            {[
              ["Idempotency", "중복 요청 방지 · Exactly-Once Processing 지원"],
              ["Event Replay", "재처리가 가능하도록 로그 저장"],
              ["Dead Letter Queue", "처리 실패한 이벤트를 격리 저장"],
              ["Backpressure Control", "과부하 시 처리량 자동 조절"],
              ["Outbox Pattern", "DB-Event 정합성 보장을 위한 Outbox 테이블"],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                {...fadeUp(i + 3)}
                className="p-4 rounded-xl border border-[#ede7ff] bg-[#f9f7ff]"
              >
                <div className="font-semibold text-[#7b5cf4]">{title}</div>
                <p className={`text-xs mt-1 ${colors.textMuted}`}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* -------------------- Horizontal Streaming Diagram -------------------- */}
      <motion.div {...fadeUp(0)} className="mb-28">
        <h4 className="text-xl font-bold text-center mb-8">
          Streaming Architecture Diagram
        </h4>

        <div className="w-full overflow-x-auto">
          <div className="min-w-[900px] mx-auto space-y-3">
            {[
              ["Client → API Gateway", "bg-[#f6f1ff]"],
              ["API Gateway → Event Router", "bg-[#f3edff]"],
              ["Event Router → Kafka Topics", "bg-[#efe7ff]"],
              ["Kafka → Consumer Group", "bg-[#ebdfff]"],
              ["Consumer Group → Processor", "bg-[#e8d8ff]"],
              ["Processor → Database / Lake", "bg-[#e3d1ff]"],
            ].map(([label, bg], i) => (
              <motion.div
                key={label}
                {...fadeUp(i + 1)}
                className={`rounded-xl p-4 border border-[#e4dbff] flex items-center gap-4 ${bg}`}
              >
                <span className="font-semibold text-[#7b5cf4]">{label}</span>
                <div className="flex-1 h-[2px] bg-[#c8b6ff]"></div>
                <span className="text-xs text-[#5c5470]">→</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* -------------------- Saga / Workflow -------------------- */}
      <motion.div
        {...fadeUp(0)}
        className="rounded-3xl border border-[#e6defc] bg-white p-12 mb-28"
      >
        <h4 className="text-xl font-bold mb-6 text-center">
          Distributed Saga Workflow
        </h4>

        <p className={`text-center text-sm max-w-3xl mx-auto ${colors.textMuted}`}>
          다중 서비스에 걸친 트랜잭션을
          <span className="font-semibold text-[#7b5cf4]">Saga Pattern</span>
          으로 처리하여 롤백·보상 트랜잭션을 자동화합니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {[
            {
              step: "1. Orchestrator",
              desc: "Saga 실행 관리 · 상태 추적 · 보상 트랜잭션 지시",
              color: "from-[#f4eaff] to-[#faf7ff]",
            },
            {
              step: "2. Domain Services",
              desc: "각 도메인이 자체 트랜잭션을 수행하고 이벤트로 상태 보고",
              color: "from-[#efe4ff] to-[#f8f5ff]",
            },
            {
              step: "3. Compensation",
              desc: "장애 발생 시 이전 단계들을 역순으로 자동 보정",
              color: "from-[#eadbff] to-[#f5f0ff]",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 1)}
              className={`rounded-2xl p-8 border border-white bg-gradient-to-br ${s.color}`}
            >
              <div className="font-bold text-[#7b5cf4] mb-2">{s.step}</div>
              <p className={`text-sm ${colors.textMuted}`}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* -------------------- Event Sourcing Explanation -------------------- */}
      <motion.div
        {...fadeUp(0)}
        className="rounded-2xl border border-[#e8e0ff] p-10 bg-[#faf8ff] mb-28"
      >
        <h4 className="text-lg font-bold mb-3">Event Sourcing</h4>
        <p className={`text-sm ${colors.textMuted}`}>
          모든 상태 변화는 이벤트로 저장되며,
          이를 통해 재현성(Reproducibility)과 감사 추적(Auditability)을 완벽히 보장합니다.
        </p>

        <div className="mt-6 space-y-3">
          {[
            "상태를 이벤트로 저장해 모든 변경 이력을 추적",
            "장애 발생 시 이벤트 재생으로 상태 복구",
            "데이터 정합성 100% 보장",
            "FDS · 정산 엔진 등 복잡한 구조에 최적",
          ].map((bullet, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 1)}
              className="flex items-start gap-2 text-sm"
            >
              <CheckCircle2 className="h-4 w-4 text-[#7b5cf4] mt-0.5" />
              <span>{bullet}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* ---------------------------------------------------------------------- */}
      {/*                     DOMAIN ISOLATION & MICROSERVICES                   */}
      {/* ---------------------------------------------------------------------- */}
      <motion.h3
        {...fadeUp(0)}
        className="text-2xl sm:text-3xl font-bold text-center mb-6"
      >
        Domain Isolation & Microservices Graph
      </motion.h3>

      <p
        className={`text-center ${colors.textMuted} text-sm sm:text-base max-w-3xl mx-auto mb-20`}
      >
        CodeCanvas의 모든 기능은 강력한
        <span className="text-[#7b5cf4] font-semibold">도메인 분리(Domain Isolation)</span>
        원칙에 따라 독립적인 마이크로서비스로 구성됩니다.
        각 서비스는 독립 배포·독립 확장·독립 장애 격리가 가능하도록 설계되어
        <span className="font-semibold">전체 시스템 안정성을 극대화</span>합니다.
      </p>

      {/* -------------------- DOMAIN GRID -------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {[
          {
            name: "User Domain",
            desc: "사용자·계정·인증 관리 및 정책 처리",
            items: ["Auth", "Roles", "Identity", "Session"],
          },
          {
            name: "Order Domain",
            desc: "주문·청구·상태 관리",
            items: ["Order Manager", "Billing", "Quote Engine"],
          },
          {
            name: "Payment Domain",
            desc: "PG 라우팅·승인·취소 처리",
            items: ["Routing Engine", "Acquiring API", "Failover Logic"],
          },
          {
            name: "Settlement Domain",
            desc: "D+0/D+1 정산 엔진 및 회계 처리",
            items: ["Ledger", "Settlement Engine", "Reconciliation"],
          },
          {
            name: "Risk & FDS Domain",
            desc: "이상거래 탐지 및 리스크 스코어링",
            items: ["FDS Engine", "Rule Engine", "Auto-Blocking"],
          },
          {
            name: "Analytics Domain",
            desc: "ETL/ELT 데이터 모델링 및 지표 생성",
            items: ["ETL Jobs", "Metrics", "BI Layer"],
          },
          {
            name: "CRM & Operations",
            desc: "고객센터·티켓·가맹점 관리",
            items: ["Ticketing", "Inquiry", "Notification"],
          },
          {
            name: "Notification Domain",
            desc: "SMS·알림톡·Webhook 등 푸시 알림",
            items: ["Webhook Engine", "SMS Sender", "Retry Queue"],
          },
          {
            name: "Infra + Security",
            desc: "플랫폼 보안 및 키 관리",
            items: ["HSM", "Audit Log", "Policy Engine"],
          },
        ].map((domain, i) => (
          <motion.div
            key={domain.name}
            {...fadeUp(i + 1)}
            className={`rounded-2xl p-7 border ${colors.border} ${colors.card} hover:shadow-[0_10px_40px_rgba(80,60,150,0.1)] transition`}
          >
            <h4 className="font-bold text-lg text-[#7b5cf4] mb-1">
              {domain.name}
            </h4>
            <p className={`text-xs mb-4 ${colors.textMuted}`}>{domain.desc}</p>

            <div className="flex flex-wrap gap-2">
              {domain.items.map((x) => (
                <span
                  key={x}
                  className="text-[11px] px-3 py-1 rounded-full bg-[#f2edff] text-[#7b5cf4] font-semibold"
                >
                  {x}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* -------------------- MICROSERVICE GRAPH (WITH ARROWS) -------------------- */}
      <motion.div {...fadeUp(0)} className="mb-32">
        <h4 className="text-xl font-bold text-center mb-10">
          Microservices Communication Graph
        </h4>

        <div className="overflow-x-auto">
          <div className="min-w-[1100px] mx-auto">
            <div className="grid grid-cols-5 gap-4 items-center">
              {/* Row 1 */}
              <div className="rounded-xl p-4 bg-[#f5f0ff] border border-[#e6defc] text-center font-semibold">
                User Domain
              </div>
              <div className="text-center text-[#7b5cf4] font-bold">→</div>

              <div className="rounded-xl p-4 bg-[#f9f7ff] border border-[#e6defc] text-center font-semibold">
                Order Domain
              </div>
              <div className="text-center text-[#7b5cf4] font-bold">→</div>

              <div className="rounded-xl p-4 bg-[#f5f0ff] border border-[#e6defc] text-center font-semibold">
                Payment Domain
              </div>

              {/* Row 2 Arrows */}
              <div className="col-span-5 text-center my-2 text-[#7b5cf4]">
                ↓
              </div>

              {/* Row 3 */}
              <div className="rounded-xl p-4 bg-[#f9f7ff] border border-[#e6defc] text-center font-semibold">
                Notification
              </div>
              <div className="text-center text-[#7b5cf4] font-bold">←</div>

              <div className="rounded-xl p-4 bg-[#f5f0ff] border border-[#e6defc] text-center font-semibold">
                Settlement Domain
              </div>
              <div className="text-center text-[#7b5cf4] font-bold">→</div>

              <div className="rounded-xl p-4 bg-[#f9f7ff] border border-[#e6defc] text-center font-semibold">
                Ledger & Finance
              </div>

              {/* Row 4 arrows */}
              <div className="col-span-5 text-center my-2 text-[#7b5cf4]">
                ↓
              </div>

              {/* Row 5 */}
              <div className="rounded-xl p-4 bg-[#f5f0ff] border border-[#e6defc] text-center font-semibold">
                Data Lake
              </div>
              <div></div>
              <div className="rounded-xl p-4 bg-[#ede6ff] border border-[#e6defc] text-center font-semibold">
                Analytics Domain
              </div>
              <div></div>
              <div className="rounded-xl p-4 bg-[#f5f0ff] border border-[#e6defc] text-center font-semibold">
                Observability
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* -------------------- DOMAIN ISOLATION PRINCIPLES -------------------- */}
      <motion.div
        {...fadeUp(0)}
        className="rounded-2xl border border-[#e8e0ff] p-10 bg-[#faf8ff] mb-28"
      >
        <h4 className="text-lg font-bold mb-4">Domain Isolation Principles</h4>

        <div className="space-y-4">
          {[
            "각 도메인은 자체 데이터베이스를 보유하며 스키마를 공유하지 않는다.",
            "서비스 간 직접 호출을 최소화하고 이벤트 기반 비동기 메시징을 지향한다.",
            "도메인 장애는 다른 도메인으로 전파되지 않도록 Circuit Breaker 적용.",
            "독립적인 오토스케일링과 Canary/Blue-Green 배포 전략을 사용한다.",
            "트랜잭션은 Saga 패턴을 통해 글로벌 상태를 일관되게 유지한다.",
          ].map((rule, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 1)}
              className="flex items-start gap-3 text-sm"
            >
              <CheckCircle2 className="h-4 w-4 text-[#7b5cf4] mt-0.5" />
              <span className={colors.textMuted}>{rule}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* ---------------------------------------------------------------------- */}
      {/*                           OBSERVABILITY LAYER                          */}
      {/* ---------------------------------------------------------------------- */}
      <motion.h3
        {...fadeUp(0)}
        className="text-2xl sm:text-3xl font-bold text-center mb-6"
      >
        Observability Layer
      </motion.h3>

      <p
        className={`text-center ${colors.textMuted} text-sm sm:text-base max-w-3xl mx-auto mb-20`}
      >
        안정적인 엔터프라이즈 시스템은
        <span className="font-semibold text-[#7b5cf4]">
          Metrics · Logging · Tracing · Telemetry
        </span>
        가 통합된 관측성을 기반으로 운영됩니다.
        CodeCanvas의 Observability Layer는 전체 기술 스택의 상태를
        실시간으로 모니터링하고 이상을 즉시 감지합니다.
      </p>

      {/* -------------------- OBSERVABILITY GRID -------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          {
            title: "Metrics (Prometheus / OTEL)",
            icon: <Activity className="h-6 w-6 text-[#7b5cf4]" />,
            desc: "CPU · Memory · Error Rate · Latency 등 서비스 상태를 실시간으로 계측",
            pills: ["p50/p95/p99 Latency", "Error Rate", "Resource Usage"],
          },
          {
            title: "Distributed Tracing",
            icon: <LineChart className="h-6 w-6 text-[#7b5cf4]" />,
            desc: "OpenTelemetry 기반으로 마이크로서비스 간 트랜잭션 경로 추적",
            pills: ["TraceID", "Span Graph", "Service Map"],
          },
          {
            title: "Structured Logging",
            icon: <Database className="h-6 w-6 text-[#7b5cf4]" />,
            desc: "JSON 기반 구조화 로그로 검색 및 분석 효율성 극대화",
            pills: ["JSON Logs", "Correlation", "Indexable"],
          },
        ].map((box, i) => (
          <motion.div
            key={box.title}
            {...fadeUp(i + 1)}
            className={`rounded-3xl p-8 border ${colors.border} ${colors.card} hover:shadow-[0_10px_40px_rgba(80,60,150,0.12)] transition`}
          >
            <div className="p-3 rounded-xl bg-[#f3edff] w-fit mb-6">{box.icon}</div>
            <h4 className="font-bold text-lg mb-2">{box.title}</h4>
            <p className={`text-sm mb-4 ${colors.textMuted}`}>{box.desc}</p>

            <div className="flex flex-wrap gap-2">
              {box.pills.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 bg-[#f3edff] text-[#7b5cf4] text-[11px] rounded-full font-semibold"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* -------------------- TELEMETRY PIPELINE -------------------- */}
      <motion.div {...fadeUp(0)} className="mb-28">
        <h4 className="text-xl font-bold text-center mb-8">
          Unified Telemetry Pipeline
        </h4>

        <div className="overflow-x-auto">
          <div className="min-w-[1200px] mx-auto">
            <div className="grid grid-cols-7 gap-4 items-center text-center">
              {/* Row 1 */}
              <div className="rounded-xl p-4 bg-[#ede6ff] border border-[#dcd3ff] font-semibold">
                Services
              </div>
              <div className="text-[#7b5cf4] text-lg font-bold">→</div>

              <div className="rounded-xl p-4 bg-[#f2ecff] border border-[#dcd3ff] font-semibold">
                OTEL Collectors
              </div>
              <div className="text-[#7b5cf4] text-lg font-bold">→</div>

              <div className="rounded-xl p-4 bg-[#ede6ff] border border-[#dcd3ff] font-semibold">
                Telemetry Router
              </div>
              <div className="text-[#7b5cf4] text-lg font-bold">→</div>

              <div className="rounded-xl p-4 bg-[#f2ecff] border border-[#dcd3ff] font-semibold">
                Monitoring & BI
              </div>
            </div>

            <div className="text-center mt-3 text-xs text-[#7b5cf4]">
              Logs · Metrics · Traces → 하나의 파이프라인으로 집계
            </div>
          </div>
        </div>
      </motion.div>

      {/* -------------------- SERVICE MAP -------------------- */}
      <motion.div
        {...fadeUp(0)}
        className="rounded-2xl border border-[#e8e0ff] p-10 bg-[#faf8ff] mb-28"
      >
        <h4 className="font-bold text-lg mb-4">Real-time Service Map</h4>

        <p className={`text-sm mb-6 ${colors.textMuted}`}>
          마이크로서비스 간 호출 관계를 시각화하여
          병목·오류·지연 구간을 실시간으로 추적합니다.
        </p>

        <div className="overflow-x-auto">
          <div className="min-w-[1000px] grid grid-cols-5 gap-4 text-center">
            <div className="rounded-xl p-4 bg-[#f5f0ff] border border-[#e6defc] font-semibold">
              API Gateway
            </div>

            <div className="text-[#7b5cf4] text-lg font-bold">→</div>

            <div className="rounded-xl p-4 bg-[#faf7ff] border border-[#e6defc] font-semibold">
              Auth / User Service
            </div>

            <div className="text-[#7b5cf4] text-lg font-bold">→</div>

            <div className="rounded-xl p-4 bg-[#f5f0ff] border border-[#e6defc] font-semibold">
              Payment Service
            </div>

            {/* arrows */}
            <div className="col-span-5 text-center text-[#7b5cf4] my-2">↓</div>

            <div className="rounded-xl p-4 bg-[#faf7ff] border border-[#e6defc] font-semibold">
              Settlement Engine
            </div>

            <div className="text-[#7b5cf4]">→</div>

            <div className="rounded-xl p-4 bg-[#f5f0ff] border border-[#e6defc] font-semibold">
              Ledger / Finance
            </div>

            <div className="text-[#7b5cf4]">→</div>

            <div className="rounded-xl p-4 bg-[#faf7ff] border border-[#e6defc] font-semibold">
              Data Pipeline
            </div>
          </div>
        </div>
      </motion.div>

      {/* -------------------- ALERTING & SLO/SLA -------------------- */}
      <motion.div {...fadeUp(0)} className="mb-32">
        <h4 className="text-xl font-bold text-center mb-8">
          Alerting & SLO / SLA Governance
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Auto Alerting",
              desc: "Latency/Errors/CPU/Memory 이상 시 Slack · On-call 자동 알림",
            },
            {
              title: "SLO Governance",
              desc: "서비스 목표치(SLO) 기반 성능 기준 관리",
            },
            {
              title: "SLA Monitoring",
              desc: "99.99% SLA 준수를 위한 가용성 모니터링",
            },
          ].map((x, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 1)}
              className={`rounded-2xl p-8 border ${colors.border} ${colors.card}`}
            >
              <h4 className="font-bold mb-2">{x.title}</h4>
              <p className={`text-sm ${colors.textMuted}`}>{x.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* ---------------------------------------------------------------------- */}
      {/*                          AI & INTELLIGENCE LAYER                        */}
      {/* ---------------------------------------------------------------------- */}

      <motion.h3
        {...fadeUp(0)}
        className="text-2xl sm:text-3xl font-bold text-center mb-6"
      >
        AI & Intelligence Layer
      </motion.h3>

      <p
        className={`text-center ${colors.textMuted} text-sm sm:text-base max-w-3xl mx-auto mb-20`}
      >
        CodeCanvas는 단순 API 플랫폼이 아니라
        <span className="text-[#7b5cf4] font-semibold">
          AI 기반으로 스스로 진화하는 인프라
        </span>
        입니다.
        Fraud Detection, 승인율 최적화, 부하 예측, 자동 장애 처리까지
        전체 시스템이 스스로 판단하고 운영을 보조합니다.
      </p>

      {/* ----------------------- AI FEATURE GRID ----------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          {
            title: "AI Fraud Detection (FDS)",
            icon: <Shield className="h-6 w-6 text-[#7b5cf4]" />,
            desc: "RL 기반 이상거래 탐지 모델로 실시간 위험 탐지 및 차단",
            pills: ["RL Model", "Risk Score", "Anomaly Detection"],
          },
          {
            title: "Approval Optimization",
            icon: <Cpu className="h-6 w-6 text-[#7b5cf4]" />,
            desc: "카드사/PG별 승인 패턴 분석으로 승인율 자동 최적화",
            pills: ["Routing AI", "Success Predictor", "Issuer Pattern"],
          },
          {
            title: "Load Prediction",
            icon: <Activity className="h-6 w-6 text-[#7b5cf4]" />,
            desc: "AI 기반 트래픽 예측을 통해 사전 스케일링 선제 대응",
            pills: ["Predictive Scaling", "Seasonality", "Traffic Forecast"],
          },
        ].map((box, i) => (
          <motion.div
            key={box.title}
            {...fadeUp(i + 1)}
            className={`rounded-3xl p-8 border ${colors.border} ${colors.card} hover:shadow-[0_10px_40px_rgba(80,60,150,0.12)] transition`}
          >
            <div className="p-3 rounded-xl bg-[#f3edff] w-fit mb-6">{box.icon}</div>
            <h4 className="font-bold text-lg mb-2">{box.title}</h4>
            <p className={`text-sm mb-4 ${colors.textMuted}`}>{box.desc}</p>

            <div className="flex flex-wrap gap-2">
              {box.pills.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 bg-[#f3edff] text-[#7b5cf4] text-[11px] rounded-full font-semibold"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ----------------------- MODEL PIPELINE ----------------------- */}
      <motion.div {...fadeUp(0)} className="mb-28">
        <h4 className="text-xl font-bold text-center mb-10">
          ML Model Pipeline
        </h4>

        <div className="overflow-x-auto">
          <div className="min-w-[1400px]">
            <div className="grid grid-cols-9 gap-3 items-center text-center">
              {/* Blocks */}
              {[
                "Event Stream",
                "Feature Builder",
                "Preprocessing",
                "Model Inference",
                "Score Engine",
                "Decision Layer",
                "Routing/Block",
                "Feedback Loop",
                "Model Retrain",
              ].map((step, i) => (
                <React.Fragment key={step}>
                  <div
                    className="rounded-xl p-4 bg-[#f4efff] border border-[#e3dbff] font-semibold"
                  >
                    {step}
                  </div>
                  {i < 8 && (
                    <div className="text-[#7b5cf4] text-lg font-bold">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="text-center mt-3 text-xs text-[#7b5cf4]">
              실시간 이벤트 기반 Feature → 점수화 → 의사결정 → 재학습
            </p>
          </div>
        </div>
      </motion.div>

      {/* ----------------------- DECISION ENGINE ----------------------- */}
      <motion.div
        {...fadeUp(0)}
        className="rounded-2xl border border-[#e8e0ff] p-10 bg-[#faf8ff] mb-28"
      >
        <h4 className="font-bold text-lg mb-4">Decision Engine</h4>

        <p className={`text-sm mb-6 ${colors.textMuted}`}>
          모든 ML 결과는 <strong>의사결정 레이어</strong>를 통해 실제 행동으로 이어집니다.
          승인/거절/리트라이/라우팅 등 여러 행동을 자동화합니다.
        </p>

        <div className="overflow-x-auto">
          <div className="min-w-[1100px] grid grid-cols-6 gap-4 text-center">
            <div className="rounded-xl p-4 bg-[#f5f0ff] border border-[#e6defc] font-semibold">
              Score Engine
            </div>
            <div className="text-[#7b5cf4] text-lg font-bold">→</div>

            <div className="rounded-xl p-4 bg-[#faf7ff] border border-[#e6defc] font-semibold">
              Business Rules
            </div>
            <div className="text-[#7b5cf4] text-lg font-bold">→</div>

            <div className="rounded-xl p-4 bg-[#f5f0ff] border border-[#e6defc] font-semibold">
              Action Resolver
            </div>
            <div className="text-[#7b5cf4] text-lg font-bold">→</div>

            <div className="rounded-xl p-4 bg-[#faf7ff] border border-[#e6defc] font-semibold">
              Route / Block / Retry
            </div>
          </div>
        </div>
      </motion.div>

      {/* ----------------------- AUTO-REMEDIATION ----------------------- */}
      <motion.div {...fadeUp(0)} className="mb-32">
        <h4 className="text-xl font-bold text-center mb-8">
          Auto Remediation (Self-Healing Infra)
        </h4>

        <p
          className={`text-center ${colors.textMuted} text-sm max-w-3xl mx-auto mb-12`}
        >
          장애를 사전에 감지하고 자동으로 문제를 해결하는
          <strong className="text-[#7b5cf4] font-semibold">
            Self-Healing Infrastructure
          </strong>{" "}
          기능을 제공합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Error Pattern Recognition",
              desc: "로그 패턴 분석을 통해 부분 장애 자동 탐지",
            },
            {
              title: "Automated Rollback",
              desc: "배포 후 오류 감지 시 자동 롤백 실행",
            },
            {
              title: "Auto Scaling Trigger",
              desc: "부하 증가 패턴을 모델 기반으로 사전 감지",
            },
          ].map((x, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 1)}
              className={`rounded-2xl p-8 border ${colors.border} ${colors.card}`}
            >
              <h4 className="font-bold mb-2">{x.title}</h4>
              <p className={`text-sm ${colors.textMuted}`}>{x.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ----------------------- AI CAPABILITY MATRIX ----------------------- */}
      <motion.div {...fadeUp(0)} className="mb-28">
        <h4 className="text-xl font-bold text-center mb-8">
          AI Capability Matrix
        </h4>

        <div className="overflow-x-auto border border-[#e8e0ff] rounded-3xl bg-white">
          <table className="min-w-[900px] w-full text-sm">
            <thead>
              <tr className="bg-[#f2eaff] text-[#7b5cf4]">
                <th className="p-4 text-left font-semibold">분야</th>
                <th className="p-4 text-center font-semibold">기능</th>
                <th className="p-4 text-center font-semibold">설명</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Fraud Detection", "Risk Score", "RL 기반 FDS 모델"],
                ["승인 최적화", "Approval Predictor", "카드사별 승인패턴 분석"],
                ["트래픽 예측", "Traffic Model", "시계열 기반 부하 예측"],
                ["자동 운영", "Auto-Heal", "장애 자동 복구 시스템"],
                ["데이터 분석", "Insight Generator", "ETL→ML→BI 파이프라인"],
              ].map((row, idx) => (
                <motion.tr
                  key={idx}
                  {...fadeUp(idx + 1)}
                  className="border-t border-[#f0e9ff] hover:bg-[#faf7ff] transition"
                >
                  <td className="p-4 font-medium">{row[0]}</td>
                  <td className="p-4 text-center text-[#7b5cf4] font-semibold">
                    {row[1]}
                  </td>
                  <td className="p-4 text-left text-xs text-[#6a6580]">
                    {row[2]}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      {/* ---------------------------------------------------------------------- */}
      {/*                     ENTERPRISE READINESS SECTION                        */}
      {/* ---------------------------------------------------------------------- */}

      <motion.h3
        {...fadeUp(0)}
        className="text-2xl sm:text-3xl font-bold text-center mb-10"
      >
        Enterprise Readiness
      </motion.h3>

      <p
        className={`text-center ${colors.textMuted} text-sm sm:text-base max-w-3xl mx-auto mb-20`}
      >
        CodeCanvas는 엔터프라이즈 환경에서 요구하는
        <span className="font-semibold text-[#7b5cf4]">보안 · 확장성 · 거버넌스 · 신뢰성</span>
        기준을 모두 충족하도록 설계되어 있습니다.
      </p>

      {/* ----------------------- Enterprise Readiness Grid ----------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          {
            title: "Global Availability",
            desc: "Multi-Region + Multi-AZ 구성으로 고가용성 제공",
            items: ["Regional Failover", "Traffic Shifting", "SLAs"],
          },
          {
            title: "Compliance & Audit",
            desc: "금융권/엔터프라이즈 표준에 기반한 인증·로깅 체계",
            items: ["ISMS", "PCI DSS L1", "Audit Trails"],
          },
          {
            title: "Lifecycle Governance",
            desc: "데이터/서비스/보안 정책을 위한 중앙 거버넌스",
            items: ["RBAC", "Policy Engine", "Versioning"],
          },
        ].map((box, i) => (
          <motion.div
            key={box.title}
            {...fadeUp(i + 1)}
            className={`rounded-3xl p-8 border ${colors.border} ${colors.card}`}
          >
            <h4 className="font-bold text-lg mb-2">{box.title}</h4>
            <p className={`text-sm mb-4 ${colors.textMuted}`}>{box.desc}</p>
            <ul className="space-y-2">
              {box.items.map((x, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#7b5cf4] mt-0.5" />
                  {x}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/*                        MATURITY MODEL (엔터프라이즈 성숙도)             */}
      {/* ---------------------------------------------------------------------- */}

      <motion.h3
        {...fadeUp(0)}
        className="text-2xl sm:text-3xl font-bold text-center mb-10"
      >
        Enterprise Maturity Model
      </motion.h3>

      <div className="overflow-x-auto mb-28">
        <table className="min-w-[1100px] w-full text-sm border border-[#e8e0ff] rounded-3xl overflow-hidden">
          <thead>
            <tr className="bg-[#f2eaff] text-[#7b5cf4] font-semibold">
              <th className="p-4 text-left">분류</th>
              <th className="p-4 text-center">레벨 1</th>
              <th className="p-4 text-center">레벨 2</th>
              <th className="p-4 text-center">레벨 3</th>
              <th className="p-4 text-center">레벨 4 (CodeCanvas)</th>
            </tr>
          </thead>

          <tbody>
            {[
              ["Infra", "단일 서버", "수동 확장", "자동 확장", "Multi-Region + Self-Heal"],
              ["Security", "기본 인증", "정책 기반 제어", "Zero-Trust", "Security-by-Design + PKI/HSM"],
              ["Data", "기초 통계", "분석 파이프라인", "BI/ETL 자동화", "Lakehouse + ML Pipeline"],
              ["Ops", "수동 모니터링", "대시보드", "자동 알림", "AI 기반 Auto-Remediation"],
            ].map((row, idx) => (
              <motion.tr
                key={idx}
                {...fadeUp(idx + 1)}
                className="border-t border-[#f0e9ff] hover:bg-[#faf7ff] transition"
              >
                <td className="p-4 font-medium">{row[0]}</td>
                <td className="p-4 text-center">{row[1]}</td>
                <td className="p-4 text-center">{row[2]}</td>
                <td className="p-4 text-center">{row[3]}</td>
                <td className="p-4 text-center font-semibold text-[#7b5cf4]">
                  {row[4]}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/*              ENTERPRISE ONBOARDING — 기술 도입 프로세스 요약              */}
      {/* ---------------------------------------------------------------------- */}

      <motion.h3
        {...fadeUp(0)}
        className="text-2xl sm:text-3xl font-bold text-center mb-10"
      >
        Technical Onboarding Process
      </motion.h3>

      <p
        className={`text-center ${colors.textMuted} text-sm max-w-3xl mx-auto mb-16`}
      >
        엔터프라이즈 조직이 안전하게 도입할 수 있도록
        구조·보안·성능 기준에 맞춘 전문 온보딩 프로세스를 제공합니다.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-28">
        {[
          {
            step: "01",
            title: "Architecture Assessment",
            desc: "기존 인프라 분석 + 통합 아키텍처 설계",
          },
          {
            step: "02",
            title: "Sandbox Integrations",
            desc: "API 연동 · 데이터 스키마 구성",
          },
          {
            step: "03",
            title: "Load & Security Validation",
            desc: "대량 트랜잭션 부하 테스트 + 보안 검증",
          },
          {
            step: "04",
            title: "Go-Live & Monitoring",
            desc: "프로덕션 배포 + 실시간 관측",
          },
        ].map((flow, i) => (
          <motion.div
            key={i}
            {...fadeUp(i + 1)}
            className={`rounded-3xl border ${colors.border} ${colors.card} p-10 shadow-sm`}
          >
            <div className="p-3 rounded-xl bg-[#f3edff] text-[#7b5cf4] font-bold w-fit mb-4">
              {flow.step}
            </div>
            <h4 className="font-semibold text-lg mb-2">{flow.title}</h4>
            <p className={`text-sm ${colors.textMuted}`}>{flow.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/*                             FINAL TECH CTA                              */}
      {/* ---------------------------------------------------------------------- */}

      <motion.div
        {...fadeUp(0)}
        className="rounded-3xl bg-gradient-to-br from-[#7b5cf4] to-[#9d82ff] text-white p-16 text-center shadow-xl mb-24"
      >
        <h3 className="text-3xl sm:text-4xl font-extrabold">
          기술 중심 기업을 위한
          <span className="block mt-2">통합 엔터프라이즈 인프라 플랫폼</span>
        </h3>

        <p className="mt-6 text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
          CodeCanvas는 결제·정산·데이터·보안·API·AI·관측성을
          하나의 기술 아키텍처로 통합해
          기업의 확장성과 안정성을 극대화합니다.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#7b5cf4] font-semibold hover:bg-gray-100 transition"
          >
            엔터프라이즈 상담 신청
            <ArrowRight className="h-5 w-5" />
          </Link>

          <Link
            href="/tech/architecture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/20 backdrop-blur text-white font-semibold hover:bg-white/30 transition"
          >
            기술 아키텍처 보기
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </motion.div>

      <div className="h-10" />
    </section>
  );
}
