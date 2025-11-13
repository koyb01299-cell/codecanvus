"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  PieChart,
  LineChart,
  Sparkles,
  Filter,
  SlidersHorizontal,
  Layers,
  Users2,
  Hourglass,
  TrendingUp,
  Target,
  BrainCircuit,
  ShieldCheck,
  ChevronRight,
  Calendar,
  Info,
  Download,
} from "lucide-react";

/**
 * CodeCanvas | Services → Analytics
 * - 라벤더(보라) 톤 통일
 * - KPI 카드, 모듈 탭(세그먼트/코호트/퍼널/LTV/어트리뷰션/FDS),
 *   간단 필터·미니 테이블·가짜 차트(도형/바) 등 "실사용 느낌"으로 구성
 * - 상단 colors만 바꾸면 테마 일괄 변경
 */

const colors = {
  bg: "bg-[#f9f7ff]",          // 연한 라벤더 배경
  card: "bg-white",
  text: "text-[#241f3a]",
  textMuted: "text-[#5c5470]",
  violet: "text-[#7b5cf4]",
  violetBg: "bg-[#7b5cf4]",
  border: "border-[#e8e2fb]",
  grad: "bg-[linear-gradient(90deg,rgba(123,92,244,0.12),rgba(186,163,255,0.12))]",
  ring: "focus:ring-2 focus:ring-[#7b5cf4]/30",
};

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: 0.06 * i },
});

type TabKey = "segments" | "cohorts" | "funnel" | "ltv" | "attribution" | "fds";

/* ------------------------------- Mock Data ------------------------------- */
const KPI = [
  { label: "월간 활성(가맹 대시보드) MAU", value: "12,340", delta: "+8.1%" },
  { label: "세그먼트 캠페인 회수율", value: "27.4%", delta: "+3.2%" },
  { label: "7일 재방문율", value: "41.6%", delta: "+1.9%" },
  { label: "평균 LTV", value: "₩128,000", delta: "+5.5%" },
];

type Row = { id: string; segment: string; size: number; conversion: number; arpu: number; lastRun: string };

const MOCK_ROWS: Row[] = [
  { id: "s-premium", segment: "VIP (상위 10%)", size: 1240, conversion: 0.38, arpu: 87000, lastRun: "2025-11-10" },
  { id: "s-new7", segment: "신규 7일 이내", size: 5320, conversion: 0.22, arpu: 41000, lastRun: "2025-11-11" },
  { id: "s-churn90", segment: "90일 이탈 위험", size: 2890, conversion: 0.12, arpu: 23000, lastRun: "2025-11-09" },
  { id: "s-weekend", segment: "주말 19–22시 주 방문", size: 1730, conversion: 0.33, arpu: 52000, lastRun: "2025-11-12" },
  { id: "s-stamp", segment: "스탬프 7/10 달성", size: 950, conversion: 0.44, arpu: 99000, lastRun: "2025-11-12" },
];

/* --------------------------- Small Presentational --------------------------- */
function StatCard({ icon, title, value, delta }: { icon: React.ReactNode; title: string; value: string; delta?: string }) {
  return (
    <div className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>{icon}</div>
        <div className="font-semibold">{title}</div>
      </div>
      <div className="mt-3 text-2xl font-extrabold">{value}</div>
      {delta && <div className={`mt-1 text-xs ${colors.textMuted}`}>{delta} vs. prev</div>}
    </div>
  );
}

function MiniBar({ values }: { values: number[] }) {
  // 간단한 미니 바(가짜 차트): 접근성 위해 role/presentation만 지정
  const max = Math.max(...values, 1);
  return (
    <div className="flex items-end gap-1 h-12" role="presentation" aria-hidden>
      {values.map((v, i) => (
        <div key={i} className="w-2 rounded-[3px] bg-[#7b5cf4]/70" style={{ height: `${(v / max) * 100}%` }} />
      ))}
    </div>
  );
}

function Legend({ items }: { items: { label: string }[] }) {
  return (
    <div className="flex flex-wrap gap-3 text-xs">
      {items.map((x) => (
        <span key={x.label} className="inline-flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm bg-[#7b5cf4]" />
          <span className={`${colors.textMuted}`}>{x.label}</span>
        </span>
      ))}
    </div>
  );
}

/* --------------------------------- Tabs UI --------------------------------- */
const TABS: { key: TabKey; name: string; icon: React.ReactNode; desc: string }[] = [
  { key: "segments", name: "Segments", icon: <Layers className="h-4 w-4" />, desc: "속성/행동 기반 세그먼트 생성·타깃팅" },
  { key: "cohorts", name: "Cohorts", icon: <Users2 className="h-4 w-4" />, desc: "가입/첫결제 주차별 리텐션" },
  { key: "funnel", name: "Funnel", icon: <Hourglass className="h-4 w-4" />, desc: "결제/회원가입 전환 퍼널 분석" },
  { key: "ltv", name: "LTV", icon: <TrendingUp className="h-4 w-4" />, desc: "군집별 생애가치 추정과 ARPU" },
  { key: "attribution", name: "Attribution", icon: <Target className="h-4 w-4" />, desc: "캠페인·채널 귀속 모델링" },
  { key: "fds", name: "Anomaly/FDS", icon: <BrainCircuit className="h-4 w-4" />, desc: "이상탐지·위험 트래픽 식별" },
];

/* --------------------------------- Page --------------------------------- */
export default function AnalyticsPage(): JSX.Element {
  const [active, setActive] = useState<TabKey>("segments");
  const [q, setQ] = useState("");
  const [minSize, setMinSize] = useState(0);

  const filtered = useMemo(() => {
    return MOCK_ROWS.filter((r) => {
      const byQ = !q || r.segment.toLowerCase().includes(q.toLowerCase());
      const bySize = r.size >= minSize;
      return byQ && bySize;
    });
  }, [q, minSize]);

  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <motion.div {...fadeUp(0)} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm bg-white/70 backdrop-blur border-white/60">
              <BarChart3 className="h-4 w-4" />
              Analytics Suite
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              고객 여정 전체를
              <span className={`block ${colors.violet}`}>측정·이해·가속</span>
            </h1>
            <p className={`mt-4 sm:mt-6 text-base sm:text-lg ${colors.textMuted}`}>
              세그먼트 타깃팅, 코호트 리텐션, 퍼널 전환, LTV 예측, 어트리뷰션, 이상탐지까지.  
              결제·CRM·메시징 데이터가 하나의 이벤트 버스 위에서 연결됩니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?type=demo-analytics"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                데모 요청 <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tech"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                기술 문서 <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KPI */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCard icon={<Users2 className="h-5 w-5" />} title={KPI[0].label} value={KPI[0].value} delta={KPI[0].delta} />
          <StatCard icon={<Target className="h-5 w-5" />} title={KPI[1].label} value={KPI[1].value} delta={KPI[1].delta} />
          <StatCard icon={<Calendar className="h-5 w-5" />} title={KPI[2].label} value={KPI[2].value} delta={KPI[2].delta} />
          <StatCard icon={<TrendingUp className="h-5 w-5" />} title={KPI[3].label} value={KPI[3].value} delta={KPI[3].delta} />
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className={`rounded-3xl ${colors.card} border ${colors.border} p-4 sm:p-6`}>
          <div className="flex flex-wrap items-center gap-2">
            {TABS.map((t, i) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm border ${
                  active === t.key ? "border-[#7b5cf4] bg-[#f2edff]" : "border-[#d9d0fb] bg-white hover:bg-[#f6f2ff]"
                }`}
                aria-pressed={active === t.key}
              >
                {t.icon}
                {t.name}
              </button>
            ))}
          </div>

          <p className={`mt-4 text-sm ${colors.textMuted}`}>
            {TABS.find((x) => x.key === active)?.desc}
          </p>
        </div>
      </section>

      {/* Active Tab Body */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        {active === "segments" && <SegmentsPanel q={q} setQ={setQ} minSize={minSize} setMinSize={setMinSize} rows={filtered} />}
        {active === "cohorts" && <CohortsPanel />}
        {active === "funnel" && <FunnelPanel />}
        {active === "ltv" && <LTVPanel />}
        {active === "attribution" && <AttributionPanel />}
        {active === "fds" && <FdsPanel />}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">데이터로 성장의 속도를 정교하게 제어하세요</h3>
              <p className={`mt-2 ${colors.textMuted}`}>
                Analytics Suite를 백오피스/가맹 대시보드에 바로 통합할 수 있습니다.  
                이벤트 표준과 SDK를 공유드려요.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact?type=demo-analytics" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition">
                데모 요청 <ChevronRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition">
                서비스 개요
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ------------------------------- Panels ------------------------------- */

function SegmentsPanel({
  q,
  setQ,
  minSize,
  setMinSize,
  rows,
}: {
  q: string;
  setQ: (v: string) => void;
  minSize: number;
  setMinSize: (n: number) => void;
  rows: Row[];
}) {
  return (
    <motion.div {...fadeUp(0)} className={`rounded-3xl ${colors.card} border ${colors.border} p-6`}>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 text-sm rounded-xl border border-[#d9d0fb] bg-white px-3 py-2">
            <Filter className="h-4 w-4" />
            세그먼트 검색/필터
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <div className="relative flex-1 min-w-[220px]">
            <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7b5cf4]" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="세그먼트 이름 검색 (ex: VIP, 신규, 이탈)"
              className={`w-full rounded-xl border border-[#dcd2fa] bg-white pl-9 pr-3 py-2 text-sm outline-none ${colors.ring}`}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">최소 규모</span>
            <input
              type="number"
              min={0}
              value={minSize}
              onChange={(e) => setMinSize(Number(e.target.value))}
              className={`w-28 rounded-xl border border-[#dcd2fa] bg-white px-3 py-2 text-sm outline-none ${colors.ring}`}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr>
              {["세그먼트", "규모", "전환율", "ARPU", "최근 실행"].map((h) => (
                <th key={h} className={`text-left text-sm font-semibold ${colors.text} sticky top-0 ${colors.card} px-4 py-3 border-b ${colors.border}`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.id} className="odd:bg-white even:bg-[#fbfaff]">
                <td className="px-4 py-3 text-sm font-medium">{r.segment}</td>
                <td className="px-4 py-3 text-sm">{r.size.toLocaleString()}</td>
                <td className="px-4 py-3 text-sm">{(r.conversion * 100).toFixed(1)}%</td>
                <td className="px-4 py-3 text-sm">₩{r.arpu.toLocaleString()}</td>
                <td className={`px-4 py-3 text-sm ${colors.textMuted}`}>{r.lastRun}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mini chart + legend */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        <div className="rounded-2xl border border-[#ece6ff] p-5">
          <div className="flex items-center justify-between">
            <div className="font-semibold flex items-center gap-2">
              <PieChart className="h-4 w-4 text-[#7b5cf4]" />
              상위 세그먼트 전환 추이(가상)
            </div>
            <div className={`text-xs ${colors.textMuted}`}>최근 8주</div>
          </div>
          <div className="mt-3">
            <MiniBar values={[7, 9, 8, 10, 12, 11, 14, 15]} />
          </div>
          <div className="mt-4">
            <Legend items={[{ label: "전환 이벤트(결제/등록 등)" }]} />
          </div>
        </div>

        <div className="rounded-2xl border border-[#ece6ff] p-5">
          <div className="font-semibold flex items-center gap-2">
            <Info className="h-4 w-4 text-[#7b5cf4]" />
            팁
          </div>
          <p className={`mt-2 text-sm ${colors.textMuted}`}>
            세그먼트는 캠페인과 연결하면 효과가 커집니다. 예: <b>“신규7일”</b>에
            웰컴 쿠폰, <b>“90일 이탈 위험”</b>에 리마인드 메시지.
          </p>
          <div className="mt-4">
            <Link href="/contact?type=analytics" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition">
              세그먼트 설계 지원 받기 <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CohortsPanel() {
  return (
    <motion.div {...fadeUp(0)} className={`rounded-3xl ${colors.card} border ${colors.border} p-6`}>
      <div className="flex items-center justify-between gap-3">
        <div className="font-semibold flex items-center gap-2">
          <Users2 className="h-4 w-4 text-[#7b5cf4]" />
          Cohort Retention
        </div>
        <div className={`text-xs ${colors.textMuted}`}>가입 주차 Cohort, 8주 리텐션</div>
      </div>

      {/* 가짜 리텐션 히트맵 (바 형태) */}
      <div className="mt-5 grid grid-cols-9 gap-2">
        <div className="text-xs text-[#5c5470]">Week</div>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="text-xs text-center text-[#5c5470]">
            {i + 1}
          </div>
        ))}
        {["W35", "W36", "W37", "W38", "W39"].map((wk, r) => (
          <React.Fragment key={wk}>
            <div className="text-xs">{wk}</div>
            {Array.from({ length: 8 }).map((_, c) => {
              const val = Math.max(5, 40 - c * 5 - r * 2); // 임의 값
              const alpha = Math.min(1, 0.2 + val / 50);
              return <div key={c} className="h-6 rounded" style={{ background: `rgba(123,92,244,${alpha})` }} />;
            })}
          </React.Fragment>
        ))}
      </div>

      <p className={`mt-4 text-sm ${colors.textMuted}`}>
        코호트 리텐션은 <b>온보딩</b>과 <b>첫 사용 경험</b>의 품질을 잘 반영합니다.  
        1–2주 차의 드롭을 줄이는 것이 장기 LTV에 가장 큰 영향을 줍니다.
      </p>
    </motion.div>
  );
}

function FunnelPanel() {
  return (
    <motion.div {...fadeUp(0)} className={`rounded-3xl ${colors.card} border ${colors.border} p-6`}>
      <div className="flex items-center justify-between gap-3">
        <div className="font-semibold flex items-center gap-2">
          <Hourglass className="h-4 w-4 text-[#7b5cf4]" />
          Conversion Funnel
        </div>
        <div className={`text-xs ${colors.textMuted}`}>가입 → 첫결제 3단 퍼널</div>
      </div>

      {/* 퍼널 (단순 막대) */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        {[
          { stage: "회원가입", val: 100 },
          { stage: "장바구니/선호", val: 62 },
          { stage: "첫 결제", val: 39 },
        ].map((s, i) => (
          <div key={s.stage} className="rounded-2xl border border-[#ece6ff] p-5">
            <div className="text-sm font-semibold">{s.stage}</div>
            <div className="mt-3 h-24 flex items-end">
              <div className="w-full bg-[#f2edff] rounded">
                <div className="h-24 rounded bg-[#7b5cf4]" style={{ width: `${s.val}%` }} />
              </div>
            </div>
            <div className={`mt-2 text-xs ${colors.textMuted}`}>{s.val}%</div>
          </div>
        ))}
      </div>

      <p className={`mt-4 text-sm ${colors.textMuted}`}>
        드롭 지점의 <b>원인(UX, 성능, 정책)</b>을 분류하고, A/B 테스트와 메시징을 연동하면 전환 개선 속도가 빨라집니다.
      </p>
    </motion.div>
  );
}

function LTVPanel() {
  return (
    <motion.div {...fadeUp(0)} className={`rounded-3xl ${colors.card} border ${colors.border} p-6`}>
      <div className="flex items-center justify-between gap-3">
        <div className="font-semibold flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-[#7b5cf4]" />
          LTV / ARPU Analytics
        </div>
        <div className={`text-xs ${colors.textMuted}`}>군집별 LTV 예시</div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {[
          { title: "VIP", arpu: 98000, ltv: 620000, bar: [8, 9, 10, 11, 12, 13, 14] },
          { title: "Core", arpu: 53000, ltv: 310000, bar: [5, 6, 6, 7, 7, 8, 9] },
          { title: "New/Trial", arpu: 21000, ltv: 90000, bar: [2, 3, 3, 4, 4, 4, 5] },
        ].map((g, i) => (
          <div key={g.title} className="rounded-2xl border border-[#ece6ff] p-5">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{g.title}</div>
              <div className={`text-xs ${colors.textMuted}`}>최근 7주</div>
            </div>
            <div className="mt-3">
              <MiniBar values={g.bar} />
            </div>
            <div className="mt-3 text-sm">
              <div>ARPU: <b>₩{g.arpu.toLocaleString()}</b></div>
              <div>LTV: <b>₩{g.ltv.toLocaleString()}</b></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Link href="/contact?type=analytics" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition">
          세그먼트별 LTV 모델링 상담 <ChevronRight className="h-4 w-4" />
        </Link>
        <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition">
          <Download className="h-4 w-4" />
          샘플 리포트 다운로드
        </button>
      </div>
    </motion.div>
  );
}

function AttributionPanel() {
  return (
    <motion.div {...fadeUp(0)} className={`rounded-3xl ${colors.card} border ${colors.border} p-6`}>
      <div className="flex items-center justify-between gap-3">
        <div className="font-semibold flex items-center gap-2">
          <Target className="h-4 w-4 text-[#7b5cf4]" />
          Attribution Modeling
        </div>
        <div className={`text-xs ${colors.textMuted}`}>First/Last/Linear/Time-decay</div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {[
          { model: "First Touch", share: 18 },
          { model: "Last Touch", share: 34 },
          { model: "Linear", share: 28 },
          { model: "Time-decay", share: 20 },
        ].map((m) => (
          <div key={m.model} className="rounded-2xl border border-[#ece6ff] p-5">
            <div className="text-sm font-semibold">{m.model}</div>
            <div className="mt-3 h-3 rounded bg-[#f2edff]">
              <div className="h-3 rounded bg-[#7b5cf4]" style={{ width: `${m.share}%` }} />
            </div>
            <div className={`mt-2 text-xs ${colors.textMuted}`}>{m.share}% 귀속</div>
          </div>
        ))}
      </div>

      <p className={`mt-4 text-sm ${colors.textMuted}`}>
        채널·캠페인별 ROI를 균형 있게 읽기 위해 모델을 비교해 보세요.  
        분석 결과는 캠페인 예산 재분배에 즉시 반영할 수 있습니다.
      </p>
    </motion.div>
  );
}

function FdsPanel() {
  return (
    <motion.div {...fadeUp(0)} className={`rounded-3xl ${colors.card} border ${colors.border} p-6`}>
      <div className="flex items-center justify-between gap-3">
        <div className="font-semibold flex items-center gap-2">
          <BrainCircuit className="h-4 w-4 text-[#7b5cf4]" />
          Anomaly Detection / FDS
        </div>
        <div className={`text-xs ${colors.textMuted}`}>Rule + Statistical + ML Hybrid</div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {[
          { title: "이상 트래픽 지표", items: ["급증/급감 레이트", "고위험 BIN/국가", "재시도 패턴"] },
          { title: "규칙 기반 룰셋", items: ["임계치·블랙리스트", "속도 제한", "케이스 라우팅"] },
          { title: "ML 점수", items: ["XGBoost/IsolationForest", "SHAP 해석", "Auto retraining"] },
        ].map((b) => (
          <div key={b.title} className="rounded-2xl border border-[#ece6ff] p-5">
            <div className="text-sm font-semibold">{b.title}</div>
            <ul className={`mt-2 pl-5 list-disc text-sm ${colors.textMuted} space-y-1`}>
              {b.items.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-[#ece6ff] p-5">
        <div className="flex items-center gap-2 font-semibold">
          <ShieldCheck className="h-4 w-4 text-[#7b5cf4]" />
          운영 팁
        </div>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          탐지 임계치와 재시도 정책은 <b>SLO(승인성공률/오탐)</b>을 기준으로 주기적으로 점검하세요.
          Keptn/Argo와 연계한 정책 릴리즈가 안전합니다.
        </p>
      </div>
    </motion.div>
  );
}
