"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Shield,
  Server,
  Cpu,
  Database,
  Activity,
  LineChart,
  BarChart3,
  Code2,
  Globe2,
  Lock,
  Layers,
  Network,
  CheckCircle2,
  Terminal,
} from "lucide-react";

/**
 * CodeCanvas Hero
 * - Stripe / Datadog / Snowflake 계열의 엔터프라이즈 SaaS 스타일
 * - 시각효과 최소화, 실제 제품 UI 느낌 중심
 * - 좌측: 메시지 / CTA / 간단 메트릭
 * - 우측: 인프라 요약 패널 + 실시간 지표 UI
 * - 하단: 개발자용 API/코드 프리뷰 + 엔터프라이즈 신뢰 지표
 */

const ui = {
  purple: "#7b5cf4",
  purpleSoft: "#efeaff",
  purpleSoft2: "#f5f1ff",
  border: "#ece6ff",
  textPrimary: "#1c1538",
  textSecondary: "#6b6480",
  chipBg: "#f5f3ff",
  bgMain: "#f9f8ff",
};

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero(): JSX.Element {
  return (
    <section
      className="relative w-full border-b"
      style={{ borderColor: ui.border, backgroundColor: ui.bgMain }}
    >
      {/* Top subtle gradient strip */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/90 via-[#f7f5ff] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-16 lg:gap-20 items-center">
          {/* LEFT :: Message / CTA */}
          <motion.div {...fade(0)} className="relative z-10">
            {/* Eyebrow */}
            <motion.div
              {...fade(0.05)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border text-xs sm:text-sm font-medium"
              style={{ borderColor: ui.border, color: ui.textSecondary }}
            >
              <Shield className="h-4 w-4" style={{ color: ui.purple }} />
              Unified enterprise infrastructure for modern teams
            </motion.div>

            {/* Title */}
            <motion.h1
              {...fade(0.15)}
              className="mt-6 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-tight"
              style={{ color: ui.textPrimary }}
            >
              The infrastructure layer
              <br />
              for ambitious engineering teams.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fade(0.3)}
              className="mt-5 text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: ui.textSecondary }}
            >
              CodeCanvas는 결제, 정산, 데이터 파이프라인, 보안, 관측성을
              하나의 아키텍처로 통합한{" "}
              <span className="font-semibold">엔지니어링-퍼스트 플랫폼</span>
              입니다. 기술팀이 직접 제어할 수 있는 인프라 레이어를 제공합니다.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fade(0.45)}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm sm:text-base font-semibold shadow-sm transition"
                style={{ backgroundColor: ui.purple, color: "#ffffff" }}
              >
                Contact sales
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm sm:text-base font-semibold border bg-white transition hover:bg-[#f7f5ff]"
                style={{ borderColor: ui.border, color: ui.purple }}
              >
                Explore documentation
                <ChevronRight className="h-4 w-4" />
              </button>
            </motion.div>

            {/* Micro trust line */}
            <motion.div
              {...fade(0.6)}
              className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm"
              style={{ color: ui.textSecondary }}
            >
              <span>Engineered for payment, data, and infra teams.</span>
              <span className="hidden sm:inline-block text-[#d0c6ff]">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>PCI / ISMS-ready architecture</span>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              {...fade(0.75)}
              className="mt-10 grid grid-cols-3 gap-5 max-w-md"
            >
              {[
                { label: "SLA uptime", value: "99.99%" },
                { label: "Latency (p95)", value: "<110ms" },
                { label: "Throughput", value: "410k TPS" },
              ].map((s, i) => (
                <div key={i}>
                  <div
                    className="text-lg sm:text-xl font-extrabold"
                    style={{ color: ui.purple }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="mt-1 text-[11px] sm:text-xs"
                    style={{ color: ui.textSecondary }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT :: Product / Infra Illustration */}
          <motion.div
            {...fade(0.2)}
            className="relative h-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Subtle glow background */}
              <div
                className="absolute inset-0 rounded-[32px] blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle at 10% 0%, rgba(123,92,244,0.12), transparent 60%)",
                }}
              />

              {/* Main infra card */}
              <div
                className="relative rounded-[28px] bg-white border shadow-sm overflow-hidden"
                style={{ borderColor: ui.border }}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-8 w-8 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: ui.purpleSoft }}
                    >
                      <Server className="h-4 w-4" style={{ color: ui.purple }} />
                    </div>
                    <div>
                      <div
                        className="text-xs font-semibold uppercase tracking-wide"
                        style={{ color: ui.textSecondary }}
                      >
                        Infrastructure overview
                      </div>
                      <div
                        className="text-[11px]"
                        style={{ color: ui.textSecondary }}
                      >
                        Runtime · Data · Security
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                  </div>
                </div>

                {/* Tabs (static) */}
                <div className="flex gap-2 px-4 pt-3 pb-1 border-b bg-[#fbfaff]">
                  {["Runtime", "Data plane", "Security"].map((tab, idx) => (
                    <button
                      key={tab}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-medium ${idx === 0
                          ? "bg-white shadow-sm"
                          : "hover:bg-white/70 transition"
                        }`}
                      style={{
                        border:
                          idx === 0 ? `1px solid ${ui.border}` : "1px solid transparent",
                        color: idx === 0 ? ui.purple : ui.textSecondary,
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Card body */}
                <div className="px-6 py-5 space-y-6">
                  {/* Top row: metrics + traffic graph */}
                  <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-4">
                    {/* Metrics */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs">
                          <Cpu className="h-4 w-4" style={{ color: ui.purple }} />
                          <span
                            className="font-semibold"
                            style={{ color: ui.textPrimary }}
                          >
                            Runtime health
                          </span>
                        </div>
                        <span className="text-[11px] text-emerald-600 font-semibold">
                          Healthy
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-[11px]">
                        {[
                          { label: "API latency", value: "92ms" },
                          { label: "Error rate", value: "0.002%" },
                          { label: "Autoscale", value: "Active" },
                        ].map((m) => (
                          <div
                            key={m.label}
                            className="rounded-xl px-3 py-2 border bg-[#fbfaff]"
                            style={{ borderColor: ui.border }}
                          >
                            <div
                              className="text-[10px] mb-0.5"
                              style={{ color: ui.textSecondary }}
                            >
                              {m.label}
                            </div>
                            <div
                              className="font-semibold"
                              style={{ color: ui.textPrimary }}
                            >
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Small traffic graph */}
                    <div className="rounded-2xl border bg-[#fbfaff] px-3 py-3 flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="text-[11px] font-medium"
                          style={{ color: ui.textSecondary }}
                        >
                          Live traffic
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
                          <Activity className="h-3 w-3" />
                          +37% load
                        </span>
                      </div>

                      <div className="flex-1 flex items-end gap-[3px] mt-1 mb-2">
                        {[34, 45, 60, 52, 80, 76, 90, 72, 61, 54].map(
                          (h, idx) => (
                            <div
                              key={idx}
                              className="flex-1 rounded-t-full"
                              style={{
                                height: `${h}%`,
                                background:
                                  idx === 8 || idx === 9
                                    ? "linear-gradient(180deg,#7b5cf4,#b6a3ff)"
                                    : "linear-gradient(180deg,#e0d7ff,#f3efff)",
                              }}
                            />
                          ),
                        )}
                      </div>

                      <div className="flex items-center justify-between text-[10px]">
                        <span style={{ color: ui.textSecondary }}>Last 5 min</span>
                        <span style={{ color: ui.purple }}>410k req/min</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: service list + status */}
                  <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-4">
                    {/* Services table */}
                    <div className="rounded-2xl border bg-white overflow-hidden">
                      <div className="flex items-center justify-between px-3 py-2 border-b bg-[#fbf9ff]">
                        <span className="text-[11px] font-medium">
                          Core services
                        </span>
                        <span className="text-[10px]" style={{ color: ui.textSecondary }}>
                          Region: ap-northeast-2
                        </span>
                      </div>
                      <div className="divide-y text-[11px]">
                        {[
                          {
                            name: "payments-core",
                            region: "multi-region",
                            status: "Healthy",
                          },
                          {
                            name: "settlement-engine",
                            region: "ap-northeast-2",
                            status: "Degraded",
                          },
                          {
                            name: "analytics-pipeline",
                            region: "ap-northeast-2",
                            status: "Healthy",
                          },
                        ].map((svc, idx) => (
                          <div
                            key={svc.name}
                            className="flex items-center justify-between px-3 py-2"
                            style={{
                              backgroundColor:
                                idx === 1 ? "#fff9f2" : "transparent",
                            }}
                          >
                            <div className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                              <span className="font-medium">{svc.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span
                                className="text-[10px]"
                                style={{ color: ui.textSecondary }}
                              >
                                {svc.region}
                              </span>
                              <span
                                className={`text-[10px] font-semibold ${svc.status === "Healthy"
                                    ? "text-emerald-600"
                                    : "text-amber-600"
                                  }`}
                              >
                                {svc.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Security summary */}
                    <div className="rounded-2xl border bg-[#fbfaff] px-4 py-3 flex flex-col justify-between">
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="h-7 w-7 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: ui.purpleSoft }}
                        >
                          <Lock className="h-4 w-4" style={{ color: ui.purple }} />
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold">
                            Security posture
                          </div>
                          <div
                            className="text-[10px]"
                            style={{ color: ui.textSecondary }}
                          >
                            PCI · ISMS · HSM
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1.5 text-[10px]">
                        <div className="flex items-center justify-between">
                          <span style={{ color: ui.textSecondary }}>
                            Blocked events (24h)
                          </span>
                          <span className="font-semibold">4.3M</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span style={{ color: ui.textSecondary }}>
                            Suspicious patterns
                          </span>
                          <span className="font-semibold text-amber-600">
                            12 under review
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span style={{ color: ui.textSecondary }}>
                            Encryption
                          </span>
                          <span className="font-semibold">AES-256 E2E</span>
                        </div>
                      </div>

                      <div className="mt-2 flex items-center justify-between text-[10px]">
                        <span style={{ color: ui.textSecondary }}>
                          Zero-trust enforced
                        </span>
                        <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                          <CheckCircle2 className="h-3 w-3" />
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating mini API card */}
              <div className="hidden md:block absolute -bottom-8 -left-3 w-56">
                <MiniApiCard />
              </div>

              {/* Floating mini metric card */}
              <div className="hidden md:block absolute -top-6 -right-2 w-44">
                <MiniMetricCard />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Developer / API preview row */}
        <motion.div
          {...fade(0.4)}
          className="mt-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-8 lg:gap-10"
        >
          <DeveloperPreview />
          <InfraSummary />
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Developer-facing API / Code preview                                */
/* ------------------------------------------------------------------ */

const DeveloperPreview = () => {
  const codeSample = `POST /v1/settlements
Authorization: Bearer sk_live_***
Content-Type: application/json

{
  "merchant_id": "mc_9f8231",
  "amount": 1200000,
  "currency": "KRW",
  "mode": "D+0",
  "metadata": {
    "batch": "2025-11-13-01",
    "source": "online"
  }
}`;

  const responseSample = `{
  "id": "stl_01HRZ3J9E4FQ",
  "status": "scheduled",
  "payout_at": "2025-11-13T15:03:00+09:00",
  "fee": 7200,
  "net_amount": 1192800,
  "risk_score": 0.03
}`;

  return (
    <div className="rounded-3xl border bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b">
        <div className="flex items-center gap-2">
          <div
            className="h-7 w-7 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: ui.purpleSoft }}
          >
            <Code2 className="h-4 w-4" style={{ color: ui.purple }} />
          </div>
          <div>
            <div
              className="text-xs font-semibold"
              style={{ color: ui.textPrimary }}
            >
              API-first integration
            </div>
            <div
              className="text-[11px]"
              style={{ color: ui.textSecondary }}
            >
              REST · Webhook · TypeScript SDK
            </div>
          </div>
        </div>
        <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#f5f3ff] font-medium">
          Sandbox ready
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t">
        {/* Request */}
        <div className="border-r h-full border-dashed">
          <div className="px-4 py-3 flex items-center justify-between text-[11px]">
            <span className="font-semibold" style={{ color: ui.textSecondary }}>
              Request
            </span>
            <span
              className="px-2 py-0.5 rounded-full text-[10px] bg-[#f5f3ff]"
              style={{ color: ui.purple }}
            >
              curl / HTTP
            </span>
          </div>
          <pre className="px-4 pb-4 text-[11px] leading-relaxed overflow-x-auto bg-[#0b1020] text-[#f4f3ff] rounded-br-none rounded-tr-lg md:rounded-tr-none md:rounded-bl-none md:rounded-br-none">
            {codeSample}
          </pre>
        </div>

        {/* Response */}
        <div className="h-full">
          <div className="px-4 py-3 flex items-center justify-between text-[11px]">
            <span className="font-semibold" style={{ color: ui.textSecondary }}>
              Response
            </span>
            <span
              className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-50 text-emerald-700 font-medium"
            >
              200 · OK
            </span>
          </div>
          <pre className="px-4 pb-4 text-[11px] leading-relaxed overflow-x-auto bg-[#050814] text-[#e8f7ff] rounded-bl-none rounded-tl-lg md:rounded-tl-none md:rounded-br-lg">
            {responseSample}
          </pre>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Infra summary / High-level architecture bullet block               */
/* ------------------------------------------------------------------ */

const InfraSummary = () => {
  const items = [
    {
      icon: <Layers className="h-4 w-4" />,
      title: "Modular services",
      desc: "결제, 정산, FDS, 데이터, 보안이 도메인 단위로 분리된 구조.",
    },
    {
      icon: <Network className="h-4 w-4" />,
      title: "Event-driven design",
      desc: "Kafka-like 이벤트 스트림 기반으로 트랜잭션 흐름을 처리.",
    },
    {
      icon: <Database className="h-4 w-4" />,
      title: "Unified data plane",
      desc: "트랜잭션·로그·지표·모델 데이터를 단일 파이프라인에 적재.",
    },
    {
      icon: <Globe2 className="h-4 w-4" />,
      title: "Multi-region ready",
      desc: "APAC, US, EU 리전에 동일한 아키텍처로 배포 가능.",
    },
  ];

  return (
    <div className="rounded-3xl border bg-white shadow-sm p-6 lg:p-7 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <Terminal className="h-4 w-4" style={{ color: ui.purple }} />
          <span
            className="text-xs font-semibold"
            style={{ color: ui.textSecondary }}
          >
            Built for infra & data teams
          </span>
        </div>
        <h2
          className="text-lg sm:text-xl font-semibold mb-3"
          style={{ color: ui.textPrimary }}
        >
          One platform for payments, data, and security.
        </h2>
        <p
          className="text-sm mb-5"
          style={{ color: ui.textSecondary }}
        >
          기술팀 관점에서 설계된 인프라 레이어로, 기존 PG·대시보드·보안 시스템을
          조합하던 복잡성을 단일 플랫폼으로 정리합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border px-3.5 py-3 bg-[#fbf9ff]"
            style={{ borderColor: ui.border }}
          >
            <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold">
              <span
                className="h-6 w-6 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: ui.purpleSoft }}
              >
                <span className="text-[#7b5cf4]">{item.icon}</span>
              </span>
              <span style={{ color: ui.textPrimary }}>{item.title}</span>
            </div>
            <p
              className="text-[11px] leading-relaxed"
              style={{ color: ui.textSecondary }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 text-[11px]">
        <div className="flex items-center gap-1.5">
          <BarChart3 className="h-3.5 w-3.5" style={{ color: ui.purple }} />
          <span style={{ color: ui.textSecondary }}>
            Ready for BI, observability, and ML workloads.
          </span>
        </div>
        <span
          className="px-2 py-0.5 rounded-full bg-[#f5f3ff] font-medium"
          style={{ color: ui.purple }}
        >
          Engineering-first platform
        </span>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Floating mini cards                                                */
/* ------------------------------------------------------------------ */

const MiniApiCard = () => {
  return (
    <div
      className="rounded-2xl border bg-white shadow-sm px-4 py-3 text-[10px]"
      style={{ borderColor: ui.border }}
    >
      <div className="flex items-center justify-between mb-2">
        <span
          className="flex items-center gap-1 font-semibold"
          style={{ color: ui.textPrimary }}
        >
          <Globe2 className="h-3.5 w-3.5" style={{ color: ui.purple }} />
          Global API
        </span>
        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">
          200 OK
        </span>
      </div>
      <div
        className="rounded-lg px-3 py-2 bg-[#fbf9ff] mb-1.5"
        style={{ borderColor: ui.border }}
      >
        <span
          className="text-[9px] uppercase tracking-wide font-semibold"
          style={{ color: ui.textSecondary }}
        >
          POST /v1/transactions
        </span>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-[9px]" style={{ color: ui.textSecondary }}>
            region=ap-northeast-2
          </span>
          <span className="text-[9px] font-semibold" style={{ color: ui.purple }}>
            92ms
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between text-[9px]">
        <span style={{ color: ui.textSecondary }}>Auth: service-to-service</span>
        <span style={{ color: ui.textSecondary }}>trace_id=9f8a…ab3</span>
      </div>
    </div>
  );
};

const MiniMetricCard = () => {
  return (
    <div
      className="rounded-2xl border bg-white shadow-sm px-3.5 py-3 text-[10px]"
      style={{ borderColor: ui.border }}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <Activity className="h-3.5 w-3.5" style={{ color: ui.purple }} />
        <span className="font-semibold" style={{ color: ui.textPrimary }}>
          Observability
        </span>
      </div>
      <div className="flex items-center justify-between mb-1">
        <span style={{ color: ui.textSecondary }}>Errors (5 min)</span>
        <span className="font-semibold">0.002%</span>
      </div>
      <div className="flex items-center justify-between">
        <span style={{ color: ui.textSecondary }}>Blocked threats</span>
        <span className="font-semibold text-emerald-600">+134M / month</span>
      </div>
    </div>
  );
};
