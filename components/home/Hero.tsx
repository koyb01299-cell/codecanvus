"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Server,
  Cpu,
  Network,
  Layers,
  Database,
  Activity,
  LineChart,
  BarChart3,
  ChevronRight,
} from "lucide-react";

/**
 * =======================================================================
 *  STRIPE-ENTERPRISE HERO — PART 1
 *  - 핵심 Hero 섹션
 *  - 좌측 텍스트 / 우측 엔터프라이즈 기술 카드
 *  - Stripe.com + Snowflake + Datadog 스타일 하이엔드 톤
 * =======================================================================
 */

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

// 공통 색상
const ui = {
  purple: "#7b5cf4",
  purpleLight: "#efeaff",
  border: "#ece6ff",
  textPrimary: "#1c1538",
  textSecondary: "#6b6480",
  bg1: "#f8f7ff",
  bg2: "#f4f0ff",
};

export default function Hero(): JSX.Element {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background ======================================================== */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[${ui.bg1}] to-[${ui.bg2}]`}
      />


      {/* Wrapper =========================================================== */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-40 grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* =================================================================
           LEFT :: TEXT BLOCK
        ================================================================== */}
        <motion.div {...fade(0)} className="flex flex-col justify-center">

          {/* Eyebrow */}
          <motion.div
            {...fade(0.05)}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border text-sm font-medium w-fit"
            style={{ borderColor: ui.border }}
          >
            <Shield className="h-4 w-4" style={{ color: ui.purple }} />
            Enterprise Infrastructure Platform
          </motion.div>

          {/* Title */}
          <motion.h1
            {...fade(0.15)}
            className="mt-6 text-5xl sm:text-6xl font-extrabold leading-tight"
            style={{ color: ui.textPrimary }}
          >
            Unified infrastructure
            <br />
            <span className="text-[#7b5cf4]">for scaling enterprises</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fade(0.3)}
            className="mt-6 text-lg max-w-xl"
            style={{ color: ui.textSecondary }}
          >
            CodeCanvas는 결제·정산·데이터 관측·보안 인프라를
            하나의 아키텍처로 통합한 **엔터프라이즈 기술 플랫폼**입니다.
            단순한 PG가 아닌, 기술팀이 의존할 수 있는 완전한 운영 레이어를 제공합니다.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fade(0.45)}
            className="mt-10 flex flex-wrap gap-4"
          >
            {/* Primary */}
            <button
              className="px-8 py-3 rounded-xl font-semibold flex items-center gap-2 text-white shadow-sm transition"
              style={{ backgroundColor: ui.purple }}
            >
              Contact Sales
              <ArrowRight className="h-5 w-5" />
            </button>

            {/* Secondary */}
            <button
              className="px-8 py-3 rounded-xl font-semibold border transition flex items-center gap-2"
              style={{
                backgroundColor: "#ffffff",
                color: ui.purple,
                borderColor: ui.border,
              }}
            >
              Explore Architecture
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fade(0.6)}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { label: "SLA", value: "99.99%" },
              { label: "Latency", value: "<110ms" },
              { label: "TPS", value: "410k+" },
            ].map((s, i) => (
              <motion.div {...fade(0.65 + i * 0.05)} key={i}>
                <div className="text-xl font-extrabold" style={{ color: ui.purple }}>
                  {s.value}
                </div>
                <div className="text-sm" style={{ color: ui.textSecondary }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* =================================================================
           RIGHT :: TECH ILLUSTRATION CARD (Stripe 스타일 Enterprise Visual)
        ================================================================== */}
        <motion.div
          {...fade(0.15)}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-lg">

            {/* Glow */}
            <div
              className="absolute inset-0 blur-[100px]"
              style={{ backgroundColor: ui.purple, opacity: 0.18 }}
            />

            {/* Card */}
            <div
              className="relative p-10 rounded-3xl bg-white shadow-xl border"
              style={{ borderColor: ui.border }}
            >
              {/* Header Icons */}
              <div className="flex items-center justify-between mb-12">
                {[Server, Cpu, Network].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl"
                    style={{
                      backgroundColor: ui.purpleLight,
                      color: ui.purple,
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                ))}
              </div>

              {/* Fake tech bars */}
              <div className="space-y-4">
                <div
                  className="h-3 rounded-full"
                  style={{ backgroundColor: ui.purpleLight }}
                />
                <div
                  className="h-3 rounded-full w-[83%]"
                  style={{ backgroundColor: "#ddcfff" }}
                />
                <div
                  className="h-3 rounded-full w-[64%]"
                  style={{ backgroundColor: "#cabaff" }}
                />
              </div>

              {/* Graph */}
              <div className="pt-8 flex justify-center">
                <BarChart3 className="h-8 w-8" style={{ color: ui.purple }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===========================================================================
   PART 2 — Stripe-Style Feature Columns + Enterprise Metrics
   (이 파일은 Hero.tsx PART 1 바로 아래에 그대로 이어 붙이면 된다)
   전체 약 180줄
============================================================================ */

const FeatureSection = () => {
  const features = [
    {
      icon: <Layers className="h-6 w-6" style={{ color: ui.purple }} />,
      title: "Modular Infrastructure",
      desc: "결제, 정산, 보안, 데이터가 분리된 도메인 구조로 구성되어 독립적 확장 가능.",
    },
    {
      icon: <Server className="h-6 w-6" style={{ color: ui.purple }} />,
      title: "Cloud-native Runtime",
      desc: "Kubernetes 기반 오토스케일링, 서비스 메쉬, 무중단 배포 구조.",
    },
    {
      icon: <Database className="h-6 w-6" style={{ color: ui.purple }} />,
      title: "Unified Data Pipeline",
      desc: "ETL · Warehouse · Dashboard를 하나의 분석 파이프라인으로 통합한 구조.",
    },
    {
      icon: <Activity className="h-6 w-6" style={{ color: ui.purple }} />,
      title: "Observability Built-in",
      desc: "로그, 메트릭, 트레이싱을 단일 관측 레이어에서 제공.",
    },
    {
      icon: <LineChart className="h-6 w-6" style={{ color: ui.purple }} />,
      title: "AI-driven Optimization",
      desc: "승인율 최적화·부하 예측·오류 감지 기반 자동 운영 모델 탑재.",
    },
    {
      icon: <Shield className="h-6 w-6" style={{ color: ui.purple }} />,
      title: "Finance-grade Security",
      desc: "PCI · ISMS · HSM 기반 보안 아키텍처. 기업 데이터 보호 설계.",
    },
  ];

  return (
    <section className="w-full py-28 bg-white border-t" style={{ borderColor: ui.border }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          {...fade(0)}
          className="text-3xl sm:text-4xl font-bold text-center"
          style={{ color: ui.textPrimary }}
        >
          Enterprise engineering, simplified
        </motion.h2>

        <motion.p
          {...fade(0.15)}
          className="mt-4 text-center max-w-2xl mx-auto text-sm sm:text-base"
          style={{ color: ui.textSecondary }}
        >
          Stripe가 결제를 단순화했듯, CodeCanvas는 복잡한 엔터프라이즈 기술 스택을 하나의 플랫폼으로 단순화합니다.
        </motion.p>

        {/* Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {features.map((f, i) => (
            <motion.div
              key={i}
              {...fade(0.25 + i * 0.1)}
              className="p-8 rounded-3xl border bg-white shadow-sm hover:shadow-lg transition"
              style={{ borderColor: ui.border }}
            >
              <div className="w-fit p-3 rounded-xl" style={{ backgroundColor: ui.purpleLight }}>
                {f.icon}
              </div>
              <div className="mt-5 font-semibold text-lg" style={{ color: ui.textPrimary }}>
                {f.title}
              </div>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: ui.textSecondary }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===========================================================================
   PART 2.5 — Enterprise Metrics Grid (Stripe-style number proof)
============================================================================ */

const MetricSection = () => {
  const metrics = [
    { value: "410k+", label: "TPS Throughput" },
    { value: "99.99%", label: "SLA Uptime" },
    { value: "<110ms", label: "Latency p95" },
    { value: "134M+", label: "보안 이벤트 차단/월" },
    { value: "150+", label: "지원 PG/결제 채널" },
    { value: "3 Continents", label: "글로벌 리전" },
  ];

  return (
    <section className="w-full py-24 bg-[#faf9ff] border-t" style={{ borderColor: ui.border }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          {...fade(0)}
          className="text-3xl sm:text-4xl text-center font-bold"
          style={{ color: ui.textPrimary }}
        >
          Designed for global scale
        </motion.h2>

        <motion.p
          {...fade(0.2)}
          className="mt-4 text-center text-sm sm:text-base max-w-xl mx-auto"
          style={{ color: ui.textSecondary }}
        >
          글로벌 확장, 고성능, 금융권 수준 보안이 필요한 기업을 위해 설계되었습니다.
        </motion.p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 mt-16">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              {...fade(0.35 + i * 0.1)}
              className="text-center"
            >
              <div
                className="text-2xl sm:text-3xl font-extrabold"
                style={{ color: ui.purple }}
              >
                {m.value}
              </div>
              <div
                className="text-xs sm:text-sm mt-1 font-medium"
                style={{ color: ui.textSecondary }}
              >
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===========================================================================
   PART 2 EXPORT (Hero.tsx에서 PART 1 아래에 붙여서 사용)
============================================================================ */

export const HeroPart2 = () => (
  <>
    <FeatureSection />
    <MetricSection />
  </>
);

/* ===========================================================================
   PART 3 — Developer Console + API Preview + Architecture Blocks
   Stripe Developers 스타일 + Snowflake Docs + Vercel DX 결합형 UI
============================================================================ */

const ApiPreview = () => {
  const codeSample = `
curl https://api.codecanvas.io/v1/transactions \\
 -X POST \\
 -H "Authorization: Bearer sk_test_xxxx" \\
 -H "Content-Type: application/json" \\
 -d '{
      "amount": 50000,
      "currency": "KRW",
      "merchant_id": "mch_98asf8",
      "order_id": "order_12833",
      "metadata": { "source": "web" }
 }'
`;

  return (
    <section
      className="w-full py-28 bg-white border-t"
      style={{ borderColor: ui.border }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          {...fade(0)}
          className="text-3xl sm:text-4xl font-bold text-center"
          style={{ color: ui.textPrimary }}
        >
          Developer-first infrastructure
        </motion.h2>

        <motion.p
          {...fade(0.25)}
          className="mt-4 mb-14 text-center text-sm sm:text-base max-w-xl mx-auto"
          style={{ color: ui.textSecondary }}
        >
          Stripe가 결제 API를 바꿔놓았듯, CodeCanvas는
          **정산 · 데이터 · 보안 · 글로벌 인프라 API**를 개발자에게 가장 쉬운 방식으로 제공합니다.
        </motion.p>

        {/* ========================= MAIN API CARD ========================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT — Description */}
          <motion.div {...fade(0.3)} className="flex flex-col justify-center">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: ui.textPrimary }}
            >
              Simple, fast, reliable API
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: ui.textSecondary }}
            >
              하나의 API로 승인·정산·데이터 분석을 처리합니다.
              요청 하나로 모든 결제 흐름이 추적되고,
              데이터 파이프라인에서 ETL → Warehouse → Dashboard로 자동 연결됩니다.
            </p>

            {/* Bullet points */}
            <ul className="mt-6 space-y-3">
              {[
                "Request/Response event tracking",
                "Idempotent operations",
                "Webhook auto-retry with signature verification",
                "Global multi-region failover routing",
              ].map((b, i) => (
                <motion.li
                  key={i}
                  {...fade(0.35 + i * 0.1)}
                  className="flex items-start gap-2 text-sm"
                >
                  <div
                    className="h-2 w-2 rounded-full mt-2"
                    style={{ backgroundColor: ui.purple }}
                  />
                  <span style={{ color: ui.textSecondary }}>{b}</span>
                </motion.li>
              ))}
            </ul>

            {/* Docs CTA */}
            <motion.a
              {...fade(0.8)}
              href="/tech"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-sm"
              style={{ color: ui.purple }}
            >
              API Documentation 보기
              <ChevronRight className="h-4 w-4" />
            </motion.a>
          </motion.div>

          {/* RIGHT — Code block */}
          <motion.div
            {...fade(0.4)}
            className="relative rounded-2xl border bg-[#1e1b2e] p-6 overflow-hidden shadow-lg"
            style={{ borderColor: "#2c2643" }}
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-30 blur-3xl bg-gradient-to-br from-[#7b5cf4] to-[#a38dff]" />

            {/* Code block */}
            <pre className="relative text-sm text-[#f8f7ff] whitespace-pre-wrap leading-relaxed font-mono z-10">
              {codeSample}
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ===========================================================================
   PART 3.5 — Architecture Blocks (Stripe + Snowflake + Datadog 조합)
============================================================================ */

const ArchitectureBlocks = () => {
  const blocks = [
    {
      icon: <Layers className="h-6 w-6" style={{ color: ui.purple }} />,
      title: "Event-driven router",
      desc: "승인/정산 이벤트를 비동기 스트림으로 처리하여 확장성과 복원력을 극대화.",
    },
    {
      icon: <Cpu className="h-6 w-6" style={{ color: ui.purple }} />,
      title: "Settlement engine",
      desc: "D+0/D+1 스케줄링 엔진과 Ledger 기반 정산 구조로 투명한 거래 흐름 제공.",
    },
    {
      icon: <Database className="h-6 w-6" style={{ color: ui.purple }} />,
      title: "Data lakehouse",
      desc: "Raw → Refined → Aggregated 데이터 구조로 분석/BI/ML 파이프라인 자동화.",
    },
    {
      icon: <Activity className="h-6 w-6" style={{ color: ui.purple }} />,
      title: "Observability core",
      desc: "로그, 메트릭, 트레이싱이 단일 플랫폼에서 연동되는 엔터프라이즈 관측성.",
    },
    {
      icon: <Network className="h-6 w-6" style={{ color: ui.purple }} />,
      title: "Global routing mesh",
      desc: "US·EU·APAC 멀티리전 트래픽 분산 + 자동 페일오버 구조.",
    },
    {
      icon: <Shield className="h-6 w-6" style={{ color: ui.purple }} />,
      title: "Finance-grade security",
      desc: "PCI · ISMS · HSM 기반으로 모든 데이터 흐름이 암호화/서명 처리.",
    },
  ];

  return (
    <section
      className="w-full py-32 bg-[#faf9ff] border-t"
      style={{ borderColor: ui.border }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          {...fade(0)}
          className="text-3xl sm:text-4xl font-bold text-center"
          style={{ color: ui.textPrimary }}
        >
          Architecture engineered for scale
        </motion.h2>

        <motion.p
          {...fade(0.15)}
          className="mt-4 text-center text-sm sm:text-base max-w-2xl mx-auto"
          style={{ color: ui.textSecondary }}
        >
          CodeCanvas는 엔터프라이즈 서비스 운영의 모든 단계를
          단일 아키텍처로 통합하여 운영 복잡도를 줄이고,
          개발팀의 생산성을 극대화합니다.
        </motion.p>

        {/* Blocks grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
          {blocks.map((b, i) => (
            <motion.div
              key={i}
              {...fade(0.25 + i * 0.1)}
              className="border rounded-3xl p-10 bg-white shadow-sm hover:shadow-lg transition"
              style={{ borderColor: ui.border }}
            >
              <div className="w-fit p-3 rounded-xl" style={{ backgroundColor: ui.purpleLight }}>
                {b.icon}
              </div>
              <div className="mt-6 text-lg font-semibold" style={{ color: ui.textPrimary }}>
                {b.title}
              </div>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: ui.textSecondary }}
              >
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===========================================================================
   PART 3 EXPORT — (Hero.tsx에서 사용)
============================================================================ */

export const HeroPart3 = () => (
  <>
    <ApiPreview />
    <ArchitectureBlocks />
  </>
);

