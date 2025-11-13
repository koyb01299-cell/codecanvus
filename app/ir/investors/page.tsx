"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  BarChart3,
  ShieldCheck,
  PieChart,
  LineChart,
  Download,
  Building2,
  Landmark,
  Users2,
  Coins,
  CircleDollarSign,
  Clock3,
  FileText,
  ArrowRight,
  Globe2,
  Scale,
  Handshake,
  Mail,
} from "lucide-react";

/**
 * CodeCanvas | IR → Investors Page
 * - 밝은 보라색(라벤더) 브랜드 톤으로 통일
 * - 투자 하이라이트, 투자 논리(투자포인트), 핵심 지표(트랙션), 거버넌스/컴플라이언스,
 *   간단 재무 스냅샷, FAQ, IR 연락/다운로드 CTA까지 포함
 * - 외부 상태/스토어 의존X, 페이지 단독 동작
 */

const colors = {
  bg: "bg-[#f9f7ff]", // 라이트 라벤더
  card: "bg-white",
  text: "text-[#241f3a]",
  textMuted: "text-[#5c5470]",
  violet: "text-[#7b5cf4]",
  violetBg: "bg-[#7b5cf4]",
  violetRing: "ring-[#7b5cf4]/30",
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

// ───────────────────────────────────────────────────────────────────────────────
// Mocked KPI snapshot (placeholder values to be replaced with real data later)
// ───────────────────────────────────────────────────────────────────────────────
const KPI = [
  { label: "연간 처리 거래액 (TPV)", value: "₩1조+", icon: <CircleDollarSign className="h-5 w-5" /> },
  { label: "누적 가맹", value: "40,000+", icon: <Building2 className="h-5 w-5" /> },
  { label: "납품/도입 기업", value: "40+", icon: <Users2 className="h-5 w-5" /> },
  { label: "평균 승인 지연", value: "< 200ms", icon: <Clock3 className="h-5 w-5" /> },
];

// 간단 재무 스냅샷 (예시 데이터)
type FinancialRow = { year: string; revenue: string; grossMargin: string; ebitdaMargin: string; notes?: string };
const FINANCIALS: FinancialRow[] = [
  { year: "2022", revenue: "₩8.2B", grossMargin: "46%", ebitdaMargin: "-18%", notes: "플랫폼 전환 초기" },
  { year: "2023", revenue: "₩14.7B", grossMargin: "51%", ebitdaMargin: "-7%", notes: "데이터/메시징 매출 확대" },
  { year: "2024E", revenue: "₩21.3B", grossMargin: "57%", ebitdaMargin: "+3%", notes: "정산/분석 모듈 상업화" },
  { year: "2025P", revenue: "₩30.5B", grossMargin: "60%", ebitdaMargin: "+11%", notes: "해외/엔터프라이즈 확장" },
];

// FAQ (투자자 관점 Q/A)
const FAQ = [
  {
    q: "수익모델은 어떻게 구성되나요?",
    a: "결제 인프라 사용료(구독/트랜잭션), 메시징/API 요금, 데이터/분석 애드온, 정산/지갑형 기능, 엔터프라이즈 커스터마이징 등 다각화된 구조입니다.",
  },
  {
    q: "해외 진출 전략은 무엇인가요?",
    a: "현지 PG/지갑 파트너와의 게이트웨이 연동을 우선 구축하고, CRM/분석 모듈을 로컬 규제/세금 체계에 맞춰 커스터마이징합니다.",
  },
  {
    q: "보안/컴플라이언스는 어떻게 보장하나요?",
    a: "ISMS/PCI 원칙을 기반으로 권한/접근 통제, 암호화/키 관리, 감사 로그/리포팅 자동화 등 보안 설계를 기본값으로 적용합니다.",
  },
  {
    q: "경쟁사 대비 차별점은 무엇인가요?",
    a: "결제(PG)·CRM/리워드·데이터/분석을 단일 표준 이벤트 버스 위에 통합합니다. 적은 도구로 높은 신뢰성을 제공하며, 운영 가시성·자동화가 강점입니다.",
  },
];

export default function InvestorsPage(): JSX.Element {
  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* ───────────────────────── Hero / Key message ───────────────────────── */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <motion.div {...fadeUp(0)} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm bg-white/70 backdrop-blur border-white/60">
              <Sparkles className="h-4 w-4" />
              Investor Relations
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              CodeCanvas — 결제·CRM·데이터 인프라를
              <span className={`block ${colors.violet}`}>하나의 기술 캔버스로</span>
            </h1>
            <p className={`mt-4 sm:mt-6 text-base sm:text-lg ${colors.textMuted}`}>
              Start → Scale → Grow: 결제 인프라의 안정성과 데이터 기반 성장을 동시에 제공합니다.
              우리는 글로벌 확장을 염두에 둔 표준 이벤트 버스, 보안/감사 자동화,
              그리고 운영 가시성을 통해 장기적인 가치를 창출합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/ir/reports"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                IR 리포트 보기 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact?type=ir"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                IR 미팅 요청 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────── Investor Highlights ───────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold tracking-tight">
          투자 하이라이트
        </motion.h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: <TrendingUp className="h-5 w-5" />,
              title: "고성장 구조",
              desc: "TPV·MAU·메시징 사용량 동반 성장. 구독+사용량 기반 하이브리드 매출.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "보안·신뢰성",
              desc: "ISMS/PCI 원칙, 감사 로그/리포팅 자동화, 이중화/재해복구 설계.",
            },
            {
              icon: <BarChart3 className="h-5 w-5" />,
              title: "데이터 중심",
              desc: "세그먼트/리워드/분석의 선순환. LTV·리텐션 최적화.",
            },
            {
              icon: <Handshake className="h-5 w-5" />,
              title: "파트너 에코시스템",
              desc: "현지 PG/지갑/메시징 파트너와 글로벌 온보딩 가속.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>{card.icon}</div>
                <h3 className="font-semibold">{card.title}</h3>
              </div>
              <p className={`mt-3 text-sm ${colors.textMuted}`}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────────────────── KPI / Traction ───────────────────────── */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {KPI.map((k, i) => (
            <motion.div
              key={k.label}
              {...fadeUp(i)}
              className="rounded-2xl bg-white border border-[#ece6ff] p-5"
            >
              <div className="flex items-center gap-2 text-sm text-[#5c5470]">
                {k.icon}
                <span>{k.label}</span>
              </div>
              <div className="mt-2 text-2xl font-extrabold tracking-tight">{k.value}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────────────────── Investment Thesis ───────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold tracking-tight">
          투자 포인트
        </motion.h2>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {[
            {
              icon: <PieChart className="h-5 w-5" />,
              title: "다각화된 수익모델",
              bullets: ["구독+사용량(트랜잭션) 모델", "메시징/API/데이터 애드온", "엔터프라이즈 커스텀"],
            },
            {
              icon: <LineChart className="h-5 w-5" />,
              title: "스케일 친화 아키텍처",
              bullets: ["표준 이벤트 버스", "실시간 파이프라인", "관측/알림·자동 복구"],
            },
            {
              icon: <Globe2 className="h-5 w-5" />,
              title: "글로벌 확장성",
              bullets: ["현지 파트너 게이트웨이", "다국어/세금/규제 대응", "제품화된 모듈"],
            },
          ].map((box, i) => (
            <motion.div
              key={box.title}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>{box.icon}</div>
                <h3 className="font-semibold">{box.title}</h3>
              </div>
              <ul className="mt-3 pl-6 list-disc text-sm space-y-2">
                {box.bullets.map((b) => (
                  <li key={b} className={`${colors.textMuted}`}>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────────────────── Governance & Compliance ───────────────────────── */}
      <section className="max-w-7xl mx-auto px-6">
        <div className={`rounded-3xl ${colors.card} border ${colors.border} p-6 sm:p-8`}>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">거버넌스 & 컴플라이언스</h3>
              <p className={`mt-1 text-sm ${colors.textMuted}`}>
                보안/감사/위험관리 체계를 제품 설계 단계부터 반영합니다.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm rounded-xl border border-[#d9d0fb] bg-white px-3 py-2">
              <Scale className="h-4 w-4" />
              책임있는 경영
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "ISMS 원칙", desc: "정책·자산·접근·암호화·운영·개발 전 단계 반영" },
              { title: "PCI 고려", desc: "결제 데이터 흐름 분리·감사 로그·취약점 관리" },
              { title: "감사 자동화", desc: "Promtail/Loki 기반 로그 + 감사 리포트 템플릿" },
              { title: "리스크 대응", desc: "위험 식별·평가·완화·모니터링 체계" },
            ].map((g, i) => (
              <motion.div
                key={g.title}
                {...fadeUp(i)}
                className="rounded-2xl bg-white border border-[#ece6ff] p-5"
              >
                <div className="font-semibold">{g.title}</div>
                <div className={`mt-2 text-sm ${colors.textMuted}`}>{g.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Financial Snapshot ───────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold tracking-tight">
          재무 스냅샷 (요약)
        </motion.h2>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              <tr>
                {["연도", "매출(Revenue)", "매출총이익률", "EBITDA 마진", "비고"].map((h, i) => (
                  <th
                    key={h}
                    className={`text-left text-sm font-semibold ${colors.text} sticky top-0 ${colors.card} px-4 py-3 border-b ${colors.border}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FINANCIALS.map((row, i) => (
                <tr key={row.year} className="odd:bg-white even:bg-[#fbfaff]">
                  <td className="px-4 py-3 text-sm font-medium">{row.year}</td>
                  <td className="px-4 py-3 text-sm">{row.revenue}</td>
                  <td className="px-4 py-3 text-sm">{row.grossMargin}</td>
                  <td className="px-4 py-3 text-sm">{row.ebitdaMargin}</td>
                  <td className={`px-4 py-3 text-sm ${colors.textMuted}`}>{row.notes ?? "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/ir/reports?download=pitchdeck"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
          >
            <Download className="h-4 w-4" />
            Pitch Deck 다운로드
          </Link>
          <Link
            href="/ir/reports?download=financials"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
          >
            <FileText className="h-4 w-4" />
            상세 재무자료 요청
          </Link>
        </div>
      </section>

      {/* ───────────────────────── FAQ ───────────────────────── */}
      <section className="max-w-7xl mx-auto px-6">
        <div className={`rounded-3xl ${colors.card} border ${colors.border} p-6 sm:p-8`}>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">투자자 FAQ</h3>
              <p className={`mt-1 text-sm ${colors.textMuted}`}>
                더 자세한 질의는 IR 채널로 문의해 주세요.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm rounded-xl border border-[#d9d0fb] bg-white px-3 py-2">
              <Landmark className="h-4 w-4" />
              IR 정책
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {FAQ.map((f, i) => (
              <motion.div
                key={f.q}
                {...fadeUp(i)}
                className="rounded-2xl bg-white border border-[#ece6ff] p-5"
              >
                <div className="font-semibold">{f.q}</div>
                <div className={`mt-2 text-sm ${colors.textMuted}`}>{f.a}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── IR Contact CTA ───────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:pb-24">
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">
                CodeCanvas IR — 대화가 성장을 만듭니다
              </h3>
              <p className={`mt-2 ${colors.textMuted}`}>
                장기 파트너십/전략적 투자 논의를 환영합니다. 미팅을 예약하시거나
                최신 리포트를 받아보세요.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?type=ir"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                <Mail className="h-4 w-4" />
                IR 미팅 요청
              </Link>
              <Link
                href="/ir/reports"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                <FileText className="h-4 w-4" />
                리포트 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Footer spacer (if needed) ───────────────────────── */}
      <div className="h-4" />
    </div>
  );
}
