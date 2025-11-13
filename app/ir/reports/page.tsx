"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Search,
  Filter,
  ChevronRight,
  ShieldCheck,
  Lock,
  Calendar,
  PieChart,
  BarChart3,
  BookOpen,
  ChevronLeft,
  ArrowDownAZ,
  ArrowUpAZ,
  Mail,
} from "lucide-react";

/**
 * CodeCanvas | IR → Reports Page
 * - 밝은 보라색(라벤더) 톤 통일
 * - 리포트 목록/검색/필터/정렬/페이지네이션/다운로드(모의) 지원
 * - 카테고리: Quarterly, Annual, KPI, Security, Governance, Press 등
 * - 데이터는 목업; 실제 연동 시 API fetch 부분으로 대체 가능
 */

const colors = {
  bg: "bg-[#f9f7ff]",
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

type ReportType = "Quarterly" | "Annual" | "KPI" | "Security" | "Governance" | "Press";
type Format = "PDF" | "XLSX" | "PPTX";

type Report = {
  id: string;
  title: string;
  type: ReportType;
  year: number;
  quarter?: "Q1" | "Q2" | "Q3" | "Q4";
  releasedAt: string; // ISO date string
  sizeMB: number;
  summary: string;
  tags: string[];
  formats: Format[];
  secure?: boolean; // true면 접근 통제(요청 필요) 뱃지 표시
  href?: string; // 공개 파일 경로가 있다면
};

// ─────────────────────────── Mocked Reports (샘플 데이터) ───────────────────────────
const REPORTS: Report[] = [
  {
    id: "2025-q3-kpi",
    title: "2025 Q3 KPI Update",
    type: "KPI",
    year: 2025,
    quarter: "Q3",
    releasedAt: "2025-10-15",
    sizeMB: 3.1,
    summary: "TPV/MAU/메시징 사용량 추이 및 리텐션/LTV 업데이트.",
    tags: ["KPI", "Growth", "Retention"],
    formats: ["PDF"],
  },
  {
    id: "2025-q2-quarterly",
    title: "2025 Q2 Quarterly Report",
    type: "Quarterly",
    year: 2025,
    quarter: "Q2",
    releasedAt: "2025-07-20",
    sizeMB: 6.4,
    summary: "분기 성과 요약, 수익모델 전개, 해외 온보딩 현황, 리스크 요인.",
    tags: ["Quarterly", "Overseas", "Revenue"],
    formats: ["PDF", "PPTX"],
  },
  {
    id: "2024-annual",
    title: "2024 Annual Report",
    type: "Annual",
    year: 2024,
    releasedAt: "2025-02-10",
    sizeMB: 12.7,
    summary: "연간 실적/재무 요약, 제품 로드맵 리뷰, 거버넌스 업데이트.",
    tags: ["Annual", "Financials", "Roadmap"],
    formats: ["PDF"],
  },
  {
    id: "2025-security-msa",
    title: "Security Whitepaper (Infrastructure & MSA)",
    type: "Security",
    year: 2025,
    releasedAt: "2025-06-18",
    sizeMB: 4.2,
    summary: "ISMS/PCI 기반 보안정책, 키관리·접근통제·감사로그 설계.",
    tags: ["Security", "ISMS", "PCI"],
    formats: ["PDF"],
    secure: true,
  },
  {
    id: "2025-q1-quarterly",
    title: "2025 Q1 Quarterly Report",
    type: "Quarterly",
    year: 2025,
    quarter: "Q1",
    releasedAt: "2025-04-18",
    sizeMB: 5.9,
    summary: "분기 실적, 세그먼트/리워드 엔진 성능 개선, 운영 가시성 지표.",
    tags: ["Quarterly", "Segments", "SLO"],
    formats: ["PDF", "PPTX"],
  },
  {
    id: "2025-governance-brief",
    title: "Governance Brief (Audit & Risk)",
    type: "Governance",
    year: 2025,
    releasedAt: "2025-08-30",
    sizeMB: 2.1,
    summary: "감사 로깅, 리스크 매트릭스, 정책 변경 사항 요약.",
    tags: ["Governance", "Audit", "Risk"],
    formats: ["PDF"],
  },
  {
    id: "2025-press-series-a",
    title: "Press: Strategic Partnership & Series A",
    type: "Press",
    year: 2025,
    releasedAt: "2025-09-05",
    sizeMB: 1.2,
    summary: "전략적 파트너십 체결 및 투자 라운드 공지.",
    tags: ["Press", "Partnership", "Funding"],
    formats: ["PDF"],
  },
];

const TYPE_OPTIONS: ("All" | ReportType)[] = ["All", "Quarterly", "Annual", "KPI", "Security", "Governance", "Press"];
const YEAR_OPTIONS = ["All", 2025, 2024, 2023] as const;
const SORT_OPTIONS = [
  { key: "releasedAt-desc", label: "최신순" },
  { key: "releasedAt-asc", label: "오래된순" },
  { key: "title-asc", label: "제목 A→Z" },
  { key: "title-desc", label: "제목 Z→A" },
] as const;

// ───────────────────────────────── component ─────────────────────────────────
export default function IRReportsPage(): JSX.Element {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<(typeof TYPE_OPTIONS)[number]>("All");
  const [year, setYear] = useState<(typeof YEAR_OPTIONS)[number]>("All");
  const [sort, setSort] = useState<(typeof SORT_OPTIONS)[number]["key"]>("releasedAt-desc");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 6;

  const filtered = useMemo(() => {
    let list = [...REPORTS];

    // filter by type
    if (type !== "All") list = list.filter((r) => r.type === type);

    // filter by year
    if (year !== "All") list = list.filter((r) => r.year === year);

    // filter by query
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.summary.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // sort
    const [field, direction] = sort.split("-") as ["releasedAt" | "title", "asc" | "desc"];
    list.sort((a, b) => {
      if (field === "releasedAt") {
        const av = new Date(a.releasedAt).getTime();
        const bv = new Date(b.releasedAt).getTime();
        return direction === "asc" ? av - bv : bv - av;
        }
      const av = a.title.toLowerCase();
      const bv = b.title.toLowerCase();
      if (av < bv) return direction === "asc" ? -1 : 1;
      if (av > bv) return direction === "asc" ? 1 : -1;
      return 0;
    });

    return list;
  }, [query, type, year, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const onDownload = (r: Report, f: Format) => {
    // 실제 환경: 파일 다운로드 링크로 이동 또는 서명된 URL 요청
    // 여기서는 단순 알림
    alert(`다운로드 시작: ${r.title} (${f})`);
  };

  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <motion.div {...fadeUp(0)} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm bg-white/70 backdrop-blur border-white/60">
              <BookOpen className="h-4 w-4" />
              IR Reports & Downloads
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              CodeCanvas IR 리포트 센터
              <span className={`block ${colors.violet}`}>모든 인사이트를 한 곳에서</span>
            </h1>
            <p className={`mt-4 sm:mt-6 text-base sm:text-lg ${colors.textMuted}`}>
              Quarterly/Annual/KPI/보안/거버넌스 리포트를 확인하고 다운로드하세요.
              최신 업데이트를 받아보고 싶다면 구독을 신청하세요.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/ir/investors"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                투자자 개요 <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact?type=ir"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                IR 미팅 요청 <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            <div className="flex-1 flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7b5cf4]" />
                <input
                  value={query}
                  onChange={(e) => {
                    setPage(1);
                    setQuery(e.target.value);
                  }}
                  placeholder="제목/요약/태그 검색 (ex: KPI, Security, Overseas)"
                  className="w-full rounded-xl border border-[#dcd2fa] bg-white pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7b5cf4]/30"
                />
              </div>
              <div className="inline-flex items-center gap-2 text-sm rounded-xl border border-[#d9d0fb] bg-white px-3 py-2">
                <Filter className="h-4 w-4" />
                필터
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
              <select
                value={type}
                onChange={(e) => {
                  setPage(1);
                  setType(e.target.value as any);
                }}
                className="rounded-xl border border-[#dcd2fa] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7b5cf4]/30"
              >
                {TYPE_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {t === "All" ? "전체 유형" : t}
                  </option>
                ))}
              </select>

              <select
                value={year as any}
                onChange={(e) => {
                  setPage(1);
                  const value = e.target.value === "All" ? "All" : Number(e.target.value);
                  setYear(value as any);
                }}
                className="rounded-xl border border-[#dcd2fa] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7b5cf4]/30"
              >
                {YEAR_OPTIONS.map((y) => (
                  <option key={y} value={y as any}>
                    {y === "All" ? "전체 연도" : y}
                  </option>
                ))}
              </select>

              <select
                value={sort}
                onChange={(e) => {
                  setPage(1);
                  setSort(e.target.value as any);
                }}
                className="rounded-xl border border-[#dcd2fa] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7b5cf4]/30"
              >
                {SORT_OPTIONS.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.key.includes("title") ? (
                      s.key.endsWith("asc") ? "제목 A→Z" : "제목 Z→A"
                    ) : s.key.endsWith("desc") ? (
                      "최신순"
                    ) : (
                      "오래된순"
                    )}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        {paged.length === 0 ? (
          <motion.div
            {...fadeUp(0)}
            className="rounded-3xl bg-white border border-[#e8e2fb] p-10 text-center"
          >
            <p className={`${colors.textMuted}`}>조건에 해당하는 리포트가 없습니다.</p>
            <div className="mt-4">
              <Link
                href="/contact?type=ir"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                IR 문의하기 <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {paged.map((r, i) => (
              <motion.article
                key={r.id}
                {...fadeUp(i)}
                className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="inline-flex items-center gap-1 rounded-full border border-[#d9d0fb] px-2 py-0.5 bg-white">
                        {badgeIcon(r.type)}
                        <span className={`${colors.textMuted}`}>{r.type}</span>
                      </span>
                      <span className={`inline-flex items-center gap-1 ${colors.textMuted}`}>
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(r.releasedAt)}
                      </span>
                      {r.secure && (
                        <span className="inline-flex items-center gap-1 text-[#7b5cf4]">
                          <Lock className="h-3.5 w-3.5" /> Access by request
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold">{r.title}</h3>
                    <p className={`text-sm ${colors.textMuted}`}>{r.summary}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {r.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full border border-[#dcd2fa] bg-white px-2.5 py-1 text-xs text-[#5c5470]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-right whitespace-nowrap">
                    <div className={`text-xs ${colors.textMuted}`}>{r.year}{r.quarter ? ` · ${r.quarter}` : ""}</div>
                    <div className={`text-xs ${colors.textMuted}`}>{r.sizeMB.toFixed(1)} MB</div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {r.formats.map((f) => (
                      <button
                        key={f}
                        onClick={() => onDownload(r, f)}
                        className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
                      >
                        <Download className="h-4 w-4" />
                        {f} 다운로드
                      </button>
                    ))}
                  </div>
                  {r.href ? (
                    <Link
                      href={r.href}
                      className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
                    >
                      <FileText className="h-4 w-4" />
                      보기
                    </Link>
                  ) : (
                    <span className={`text-xs ${colors.textMuted}`}>미리보기 준비 중</span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      {/* Pagination */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <div className="flex items-center justify-between gap-3">
          <div className={`text-sm ${colors.textMuted}`}>
            총 {filtered.length}건 / 페이지 {page} / {totalPages}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] disabled:opacity-40 transition"
            >
              <ChevronLeft className="h-4 w-4" />
              이전
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] disabled:opacity-40 transition"
            >
              다음
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Sort helper & Subscribe CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
          <motion.div {...fadeUp(0)} className={`rounded-3xl ${colors.card} border ${colors.border} p-6`}>
            <h3 className="font-semibold mb-3">정렬 도움말</h3>
            <ul className={`text-sm ${colors.textMuted} space-y-2`}>
              <li className="flex items-center gap-2">
                <ArrowDownAZ className="h-4 w-4 text-[#7b5cf4]" />
                제목 A→Z: 알파벳 순 정렬(오름차순)
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpAZ className="h-4 w-4 text-[#7b5cf4]" />
                제목 Z→A: 알파벳 역순 정렬(내림차순)
              </li>
              <li className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-[#7b5cf4]" />
                최신순/오래된순: 리포트 공개일 기준
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeUp(1)} className={`rounded-3xl ${colors.card} border ${colors.border} p-6`}>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h3 className="font-semibold">업데이트 구독</h3>
                <p className={`text-sm ${colors.textMuted}`}>
                  새 리포트 발행 시 이메일로 알려드립니다.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-sm rounded-xl border border-[#d9d0fb] bg-white px-3 py-2">
                <Mail className="h-4 w-4" />
                Subscribe
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("구독이 신청되었습니다. 감사합니다!");
              }}
              className="mt-4 flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-xl border border-[#dcd2fa] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7b5cf4]/30"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                구독 신청
                <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────── helpers ───────────────────────────
function badgeIcon(type: ReportType) {
  switch (type) {
    case "Quarterly":
      return <PieChart className="h-3.5 w-3.5 text-[#7b5cf4]" />;
    case "Annual":
      return <BookOpen className="h-3.5 w-3.5 text-[#7b5cf4]" />;
    case "KPI":
      return <BarChart3 className="h-3.5 w-3.5 text-[#7b5cf4]" />;
    case "Security":
      return <ShieldCheck className="h-3.5 w-3.5 text-[#7b5cf4]" />;
    case "Governance":
      return <Lock className="h-3.5 w-3.5 text-[#7b5cf4]" />;
    case "Press":
      return <FileText className="h-3.5 w-3.5 text-[#7b5cf4]" />;
  }
}

function formatDate(iso: string) {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${y}-${m}-${day}`;
}
