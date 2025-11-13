"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Braces,
  Server,
  Globe2,
  Cloud,
  ShieldCheck,
  Activity,
  Clock3,
  Zap,
  Code2,
  Boxes,
  Webhook,
  BookOpen,
  Copy,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Github,
  Terminal,
  Sparkles,
} from "lucide-react";

/**
 * CodeCanvas | Services → APIs
 * - Developer-first API / Gateway / Webhook / SDK 소개 페이지
 * - 라벤더(밝은 보라) 톤으로 일관된 UI
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
  transition: { duration: 0.6, delay: 0.06 * i },
});

const quickStats = [
  { label: "SLA 타겟", value: "99.95%", icon: <ShieldCheck className="h-4 w-4" /> },
  { label: "평균 응답 시간", value: "< 150ms", icon: <Activity className="h-4 w-4" /> },
  { label: "하루 평균 요청", value: "120M+", icon: <Server className="h-4 w-4" /> },
  { label: "지원 언어/SDK", value: "5+", icon: <Code2 className="h-4 w-4" /> },
];

const apiFamilies = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Payments & Settlements",
    desc: "승인/취소, 정기결제, 지갑, 정산 스케줄(D+0/D+1)까지 단일 API로 처리.",
    endpoints: ["/v1/payments", "/v1/refunds", "/v1/payouts"],
  },
  {
    icon: <Boxes className="h-5 w-5" />,
    title: "CRM & Membership",
    desc: "포인트/스탬프, 등급, 이탈 그룹 등 고객 상태를 API로 직접 제어.",
    endpoints: ["/v1/customers", "/v1/loyalty", "/v1/segments"],
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: "Messaging & Campaigns",
    desc: "SMS·알림톡·푸시 발송 및 템플릿/캠페인 관리.",
    endpoints: ["/v1/messages", "/v1/campaigns"],
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Analytics & Events",
    desc: "표준 이벤트 스키마로 결제/방문/캠페인을 통합 수집.",
    endpoints: ["/v1/events", "/v1/metrics"],
  },
  {
    icon: <Webhook className="h-5 w-5" />,
    title: "Webhooks & Callbacks",
    desc: "결제 결과, 포인트 적립, FDS 경보 등 실시간 노티.",
    endpoints: ["/v1/webhooks", "/v1/webhooks/attempts"],
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Security & IAM",
    desc: "API 키, 서비스 계정, 권한 스코프를 세밀하게 관리.",
    endpoints: ["/v1/api-keys", "/v1/service-accounts"],
  },
];

const CODE_SNIPPET = `POST https://api.codecanvas.dev/v1/payments

curl -X POST "https://api.codecanvas.dev/v1/payments" \\
  -H "Authorization: Bearer $CODECANVAS_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "merchant_id": "m_12345",
    "order_id": "order_2025_0001",
    "amount": 42000,
    "currency": "KRW",
    "capture": true,
    "customer": {
      "id": "c_91024",
      "phone": "+82-10-0000-0000",
      "membership_tier": "GOLD"
    },
    "metadata": {
      "channel": "kiosk",
      "visit_segment": "weekend_19_22"
    },
    "webhook_url": "https://merchant.example.com/webhooks/payment"
  }'`;

export default function APIsPage(): JSX.Element {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CODE_SNIPPET);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 무시 – 브라우저에서 막는 경우도 있음
    }
  };

  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* ───────────────────── Hero ───────────────────── */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <motion.div {...fadeUp(0)} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm bg-white/70 backdrop-blur border-white/60">
              <Braces className="h-4 w-4" />
              Developer APIs
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              CodeCanvas API
              <span className={`block ${colors.violet}`}>
                결제·CRM·데이터를 한 번에 연동
              </span>
            </h1>
            <p className={`mt-4 sm:mt-6 text-base sm:text-lg ${colors.textMuted}`}>
              가맹점용 백오피스부터 PG, 선불, CRM SaaS까지.
              CodeCanvas API는 표준화된 이벤트 스키마와 일관된 인증 체계를 기반으로
              결제·멤버십·메시징·분석을 하나의 플랫폼에서 제공합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?type=api-access"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                API 키 요청 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                문서 보기 <BookOpen className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────── Quick Stats ───────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quickStats.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp(i)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}
            >
              <div className="flex items-center gap-2 text-xs text-[#5c5470]">
                {s.icon}
                <span>{s.label}</span>
              </div>
              <div className="mt-2 text-2xl font-extrabold">{s.value}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────────────── API Families ───────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          API 패밀리
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          CodeCanvas는 기능별로 나뉜 여러 API 패밀리를 제공합니다.
          모든 패밀리는 동일한 인증·에러 포맷·관측 메트릭을 공유합니다.
        </p>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apiFamilies.map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>
                    {f.icon}
                  </div>
                  <h3 className="font-semibold">{f.title}</h3>
                </div>
                <p className={`mt-3 text-sm ${colors.textMuted}`}>{f.desc}</p>
              </div>
              <div className="mt-4">
                <div className="text-xs font-semibold mb-1 text-[#5c5470]">
                  대표 엔드포인트
                </div>
                <ul className="space-y-1 text-xs">
                  {f.endpoints.map((e) => (
                    <li
                      key={e}
                      className="inline-flex items-center gap-2 rounded-full border border-[#d9d0fb] bg-white px-2.5 py-1 text-[#5c5470]"
                    >
                      <Terminal className="h-3 w-3 text-[#7b5cf4]" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────────────── Code Sample / SDK ───────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">
        {/* Code block */}
        <motion.div
          {...fadeUp(0)}
          className={`rounded-3xl ${colors.card} border ${colors.border} p-6 sm:p-7`}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#7b5cf4]" />
              <span className="text-sm font-semibold">결제 생성 API 예시</span>
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#7b5cf4]" />
                  복사됨
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-[#7b5cf4]" />
                  코드 복사
                </>
              )}
            </button>
          </div>

          <div className="mt-4 rounded-2xl bg-[#141024] text-[#f5f3ff] text-xs p-4 sm:p-5 overflow-x-auto">
            <pre className="font-mono whitespace-pre">
              {CODE_SNIPPET}
            </pre>
          </div>

          <p className={`mt-3 text-xs ${colors.textMuted}`}>
            실제 Key 발급 이후에는 상점 ID, 정산 설정, Webhook 시크릿 등을 콘솔에서 관리할 수 있습니다.
          </p>
        </motion.div>

        {/* SDK & Dev Experience */}
        <motion.div
          {...fadeUp(1)}
          className={`rounded-3xl ${colors.card} border ${colors.border} p-6 sm:p-7`}
        >
          <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
            <Code2 className="h-4 w-4 text-[#7b5cf4]" />
            SDK & 개발 경험
          </h3>
          <p className={`mt-2 text-sm ${colors.textMuted}`}>
            REST+Webhook에 더해, 언어별 SDK와 타입 정의를 제공합니다.
            샌드박스 환경에서 언제든지 테스트할 수 있습니다.
          </p>
          <ul className={`mt-4 text-sm ${colors.textMuted} space-y-2`}>
            <li>• TypeScript/Node, Python, Java, PHP SDK 제공</li>
            <li>• OpenAPI 스펙 기반 자동 문서/클라이언트 생성</li>
            <li>• 샌드박스 모드에서 실제 카드 매입 없이 전체 플로우 검증</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/docs/sdk"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
            >
              SDK 가이드 <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
            >
              <Github className="h-4 w-4" />
              GitHub 예제
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ───────────────────── Reliability / Security ───────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          안정성과 보안을 전제로 한 설계
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          금융 데이터와 고객 데이터를 다루는 API이기 때문에, 설계 단계부터 운영·보안·관측을 함께 고려했습니다.
        </p>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            {...fadeUp(1)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <ShieldCheck className="h-4 w-4 text-[#7b5cf4]" />
              Security / IAM
            </div>
            <ul className={`mt-3 pl-5 list-disc text-sm ${colors.textMuted} space-y-1`}>
              <li>서비스 계정·스코프 기반 권한 관리</li>
              <li>IP 화이트리스트 및 허용 오리진</li>
              <li>키 회전 및 세션/토큰 만료 정책</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(2)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <Activity className="h-4 w-4 text-[#7b5cf4]" />
              Observability
            </div>
            <ul className={`mt-3 pl-5 list-disc text-sm ${colors.textMuted} space-y-1`}>
              <li>요청/에러/레이턴시 메트릭 제공</li>
              <li>Webhook 재시도·로그 탐색</li>
              <li>슬랙/알림톡 알림 연동</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(3)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <Cloud className="h-4 w-4 text-[#7b5cf4]" />
              Reliability
            </div>
            <ul className={`mt-3 pl-5 list-disc text-sm ${colors.textMuted} space-y-1`}>
              <li>멀티 AZ, Blue-Green 배포 전략</li>
              <li>자동 스케일링 및 서킷 브레이커</li>
              <li>백필·Reconciliation 잡으로 데이터 정합성 확보</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────── Plans for APIs / Next steps ───────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:pb-24">
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold">
                몇 줄의 코드로 시작하는 엔터프라이즈 인프라
              </h3>
              <p className={`mt-2 text-sm ${colors.textMuted}`}>
                샌드박스 키를 받아 테스트를 시작하고, 단계적으로 정식 상용 키를 발급받을 수 있습니다.
                On-prem 또는 VPC 내 전용 배포가 필요한 경우도 별도 협의가 가능합니다.
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-2xl border border-[#ece6ff] p-4">
                  <div className="font-semibold text-xs mb-1">Sandbox</div>
                  <div className={`${colors.textMuted} text-xs`}>
                    무료, 실결제 없음, 요청 제한 완화.
                    개발·QA 환경에서 전체 플로우 검증.
                  </div>
                </div>
                <div className="rounded-2xl border border-[#ece6ff] p-4">
                  <div className="font-semibold text-xs mb-1">Production</div>
                  <div className={`${colors.textMuted} text-xs`}>
                    상용 Key, 정산/청구 연동.
                    SLA·모니터링·보안 지원 포함.
                  </div>
                </div>
                <div className="rounded-2xl border border-[#ece6ff] p-4">
                  <div className="font-semibold text-xs mb-1">Enterprise</div>
                  <div className={`${colors.textMuted} text-xs`}>
                    전용 VPC/전용선, 커스텀 SLA,
                    데이터 레이크/BI 연동 패키지.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3 min-w-[260px]">
              <Link
                href="/contact?type=api-access"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                API 키 발급 상담
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                개발자 문서 보기
              </Link>
              <Link
                href="/ir/investors"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                비즈니스/IR 관점에서 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-4" />
    </div>
  );
}
