"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Rocket,
  Users2,
  Sparkles,
  ShieldCheck,
  Globe2,
  Building2,
  MapPin,
  Clock3,
  ChevronRight,
  Filter,
  Award,
  Cpu,
  ServerCog,
  Cog,
  PenTool,
  BarChart3,
  LifeBuoy,
  Handshake,
} from "lucide-react";

/**
 * CodeCanvas | Career Page
 * - 기술기업(핀테크 인프라 + CRM/데이터 플랫폼) 정체성
 * - 직무 필터링(팀/근무형태/지역) + 채용 프로세스 + 복지/문화 + 가치관
 * - 상단 colors만 바꾸면 테마 변경 가능
 */

const colors = {
  bg: "bg-[#f9f7ff]",            // 전체 배경 (아주 연한 라벤더)
  card: "bg-white",
  text: "text-[#241f3a]",        // 본문 텍스트 (짙은 보라)
  textMuted: "text-[#5c5470]",   // 보조 텍스트
  mint: "text-[#7b5cf4]",        // 포인트 색 (메인 라벤더)
  mintBg: "bg-[#7b5cf4]",        // 버튼 배경
  mintRing: "ring-[#7b5cf4]/30", // hover ring 색
  deep: "text-[#352b56]",        // 더 어두운 포인트 텍스트
  border: "border-[#e8e2fb]",    // 카드 보더
  grad:
    "bg-[linear-gradient(90deg,rgba(123,92,244,0.12),rgba(186,163,255,0.12))]",
};

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: 0.06 * i },
});

type Job = {
  id: string;
  title: string;
  team: "Engineering" | "Platform" | "Security" | "Product" | "Design" | "Data" | "Operations";
  location: "Seoul" | "Remote" | "Hybrid";
  type: "Full-time" | "Contract" | "Intern";
  tags: string[];
  summary: string;
};

const JOBS: Job[] = [
  {
    id: "senior-backend-platform",
    title: "Senior Backend Engineer (Platform)",
    team: "Platform",
    location: "Seoul",
    type: "Full-time",
    tags: ["Node/PHP", "Payments", "Distributed", "K8s/Docker"],
    summary:
      "결제/정산·메시징 게이트웨이·배치 스케줄러 등 핵심 플랫폼을 설계/구현합니다. 고가용성과 관측 가능성을 중시합니다.",
  },
  {
    id: "fullstack-product",
    title: "Fullstack Engineer (Product)",
    team: "Engineering",
    location: "Hybrid",
    type: "Full-time",
    tags: ["Next.js", "TypeScript", "Design System", "DX"],
    summary:
      "가맹점용 대시보드/백오피스와 고객경험(리워드·프로모션)을 연결하는 제품 기능을 빠르고 안정적으로 개발합니다.",
  },
  {
    id: "security-grc",
    title: "Security Engineer (GRC/Compliance)",
    team: "Security",
    location: "Seoul",
    type: "Full-time",
    tags: ["ISMS/PCI", "Risk", "Audit", "Hardening"],
    summary:
      "ISMS/PCI 원칙 기반의 보안 정책·리스크 관리·감사 로깅·취약점 대응 체계를 고도화합니다.",
  },
  {
    id: "data-platform-analytics",
    title: "Data Platform Engineer",
    team: "Data",
    location: "Remote",
    type: "Full-time",
    tags: ["Streaming", "ETL/ELT", "Segment", "Monitoring"],
    summary:
      "실시간 데이터 파이프라인·세그먼트·모델 서빙 환경을 구축하고, 운영 SLO와 데이터 품질을 보장합니다.",
  },
  {
    id: "product-designer",
    title: "Product Designer (B2B/B2B2C)",
    team: "Design",
    location: "Hybrid",
    type: "Full-time",
    tags: ["Design System", "UX Writing", "Prototyping"],
    summary:
      "복잡한 결제/데이터 워크플로를 단순하고 직관적으로 풀어내는 UX·UI를 설계합니다. 컴포넌트 시스템을 함께 만듭니다.",
  },
  {
    id: "site-reliability",
    title: "Site Reliability Engineer (SRE)",
    team: "Platform",
    location: "Seoul",
    type: "Full-time",
    tags: ["Observability", "SLO/SLA", "Autoscale", "Infra as Code"],
    summary:
      "관측·알림·비용·성능·가용성 균형을 최적화하고, 배포/롤백/장애 대응의 표준 프로세스를 정의합니다.",
  },
  {
    id: "product-manager",
    title: "Product Manager (Payments/CRM)",
    team: "Product",
    location: "Seoul",
    type: "Full-time",
    tags: ["Fintech", "Roadmap", "Experimentation"],
    summary:
      "결제·CRM·데이터 제품 로드맵을 수립하고, 시장/고객 인사이트를 바탕으로 가설-실험-지표의 선순환을 만듭니다.",
  },
  {
    id: "operations-lead",
    title: "Operations Lead (Merchant/Partner)",
    team: "Operations",
    location: "Seoul",
    type: "Full-time",
    tags: ["Process", "Partner", "Quality", "Scale"],
    summary:
      "가맹점·제휴·CS·정책을 체계화하고, 대규모 운영 효율화 및 품질지표 개선을 리드합니다.",
  },
];

const TEAM_OPTIONS = ["All", "Engineering", "Platform", "Security", "Product", "Design", "Data", "Operations"] as const;
const LOCATION_OPTIONS = ["All", "Seoul", "Remote", "Hybrid"] as const;
const TYPE_OPTIONS = ["All", "Full-time", "Contract", "Intern"] as const;

export default function CareerPage(): JSX.Element {
  const [team, setTeam] = useState<(typeof TEAM_OPTIONS)[number]>("All");
  const [location, setLocation] = useState<(typeof LOCATION_OPTIONS)[number]>("All");
  const [type, setType] = useState<(typeof TYPE_OPTIONS)[number]>("All");
  const [query, setQuery] = useState("");

  const filteredJobs = useMemo(() => {
    return JOBS.filter((j) => {
      const byTeam = team === "All" || j.team === team;
      const byLocation = location === "All" || j.location === location;
      const byType = type === "All" || j.type === type;
      const byQuery =
        !query ||
        j.title.toLowerCase().includes(query.toLowerCase()) ||
        j.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return byTeam && byLocation && byType && byQuery;
    });
  }, [team, location, type, query]);

  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <motion.div {...fadeUp(0)} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm bg-white/70 backdrop-blur border-white/60">
              <Rocket className="h-4 w-4" />
              Build the canvas of payments, CRM & data.
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              CodeCanvas 채용
              <span className={`block ${colors.mint}`}>Start → Scale → Grow</span>
            </h1>
            <p className={`mt-4 sm:mt-6 text-base sm:text-lg ${colors.textMuted}`}>
              복잡한 결제 인프라와 고객 경험을 단순하고 강력한 제품으로 묶는 팀.
              빠르게 실험하고, 신뢰성 있게 운영하며, 데이터를 바탕으로 성장합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#bfeee5] bg-white hover:bg-[#ebfffa] transition"
              >
                우리는 어떤 팀인가 <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#10bfa5] hover:opacity-95 transition"
              >
                채용 문의하기 <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture / Values */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <motion.div {...fadeUp(0)} className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">우리의 문화</h2>
          <p className={`mt-3 ${colors.textMuted}`}>
            단순한 기능 개발을 넘어, 안정성과 가속의 균형을 설계합니다. 각자의 영역을 존중하며,
            데이터 기반으로 토론하고 결정합니다.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: <Sparkles className="h-5 w-5" />,
              title: "Simple over Easy",
              desc: "쉬운 대신 단순한 것을 지향. 핵심을 파악하고 장기적인 단순성을 설계합니다.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "Reliability First",
              desc: "고가용성과 관측 가능성, 리커버리 가능한 시스템을 기본값으로.",
            },
            {
              icon: <BarChart3 className="h-5 w-5" />,
              title: "Data-Driven",
              desc: "가설-실험-지표의 선순환. 제품과 운영을 수치로 설명합니다.",
            },
            {
              icon: <Handshake className="h-5 w-5" />,
              title: "Ownership",
              desc: "문제의 처음과 끝을 본인이 책임지는 태도. 합의된 결정에 끝까지 집중합니다.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${colors.mintBg} text-white`}>{c.icon}</div>
                <h3 className="font-semibold">{c.title}</h3>
              </div>
              <p className={`mt-3 text-sm ${colors.textMuted}`}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="rounded-3xl bg-white border border-[#e9faf6] p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Award className="h-5 w-5" />,
                title: "성장 지원",
                desc: "컨퍼런스/서적/교육비 지원, 사내 테크톡, 코드리뷰 문화.",
              },
              {
                icon: <Globe2 className="h-5 w-5" />,
                title: "유연 근무",
                desc: "하이브리드/리모트 옵션, 효율 중심의 시간 설계.",
              },
              {
                icon: <Building2 className="h-5 w-5" />,
                title: "쾌적한 환경",
                desc: "최신 장비, 듀얼 모니터, 편의 비품 지원.",
              },
              {
                icon: <LifeBuoy className="h-5 w-5" />,
                title: "생활/건강",
                desc: "건강검진, 간식/식대, 휴가 제도.",
              },
              {
                icon: <Cpu className="h-5 w-5" />,
                title: "개발 생산성",
                desc: "CI/CD, 테스트 자동화, 성능/비용 모니터링.",
              },
              {
                icon: <ServerCog className="h-5 w-5" />,
                title: "운영 안정성",
                desc: "관측/알림, 온콜 보상, 재해복구 훈련.",
              },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                {...fadeUp(i)}
                className="rounded-2xl bg-white border border-[#e9faf6] p-5"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${colors.mintBg} text-white`}>{b.icon}</div>
                  <div>
                    <div className="font-semibold">{b.title}</div>
                    <div className={`text-sm ${colors.textMuted}`}>{b.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <motion.div {...fadeUp(0)} className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">채용 포지션</h2>
            <p className={`mt-2 ${colors.textMuted}`}>
              팀·근무형태·지역, 키워드로 원하는 포지션을 찾아보세요.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-sm rounded-xl border border-[#bfeee5] bg-white px-3 py-2">
            <Filter className="h-4 w-4" />
            필터
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-6">
          {/* Left: Controls */}
          <motion.aside
            {...fadeUp(1)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-5 h-fit`}
          >
            <div>
              <label className="text-sm font-semibold">검색</label>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ex) Next.js, PCI, Observability"
                className="mt-2 w-full rounded-xl border border-[#bfeee5] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#10bfa5]/30"
              />
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div>
                <label className="text-sm font-semibold">팀</label>
                <select
                  value={team}
                  onChange={(e) => setTeam(e.target.value as any)}
                  className="mt-2 w-full rounded-xl border border-[#bfeee5] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#10bfa5]/30"
                >
                  {TEAM_OPTIONS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold">근무 형태</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as any)}
                  className="mt-2 w-full rounded-xl border border-[#bfeee5] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#10bfa5]/30"
                >
                  {TYPE_OPTIONS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold">근무 지역</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value as any)}
                  className="mt-2 w-full rounded-xl border border-[#bfeee5] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#10bfa5]/30"
                >
                  {LOCATION_OPTIONS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={() => {
                setTeam("All");
                setType("All");
                setLocation("All");
                setQuery("");
              }}
              className="mt-5 w-full rounded-xl border border-[#bfeee5] bg-white px-3 py-2 text-sm hover:bg-[#ebfffa] transition"
            >
              필터 초기화
            </button>
          </motion.aside>

          {/* Right: Job List */}
          <div className="space-y-4">
            {filteredJobs.length === 0 ? (
              <motion.div
                {...fadeUp(2)}
                className="rounded-2xl bg-white border border-[#e9faf6] p-8 text-center"
              >
                <p className={`${colors.textMuted}`}>조건에 해당하는 포지션이 없어요.</p>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#10bfa5] hover:opacity-95 transition"
                  >
                    채용 문의 남기기 <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ) : (
              filteredJobs.map((job, i) => (
                <motion.article
                  key={job.id}
                  {...fadeUp(i)}
                  className={`rounded-2xl ${colors.card} border ${colors.border} p-5 hover:ring-2 hover:${colors.mintRing} transition`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <div className={`text-sm ${colors.textMuted} flex flex-wrap items-center gap-3`}>
                        <span className="inline-flex items-center gap-1">
                          <Cog className="h-4 w-4" /> {job.team}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-4 w-4" /> {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock3 className="h-4 w-4" /> {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={`/contact?role=${encodeURIComponent(job.title)}`}
                        className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-white bg-[#10bfa5] hover:opacity-95 transition"
                      >
                        지원/문의 <ChevronRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href={`/career/${job.id}`} // 상세 페이지가 추후 생길 것을 고려한 경로
                        className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold border border-[#bfeee5] bg-white hover:bg-[#ebfffa] transition"
                      >
                        상세 보기 <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <p className={`mt-3 text-sm ${colors.textMuted}`}>{job.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-[#bfeee5] bg-white px-2.5 py-1 text-xs text-[#3a5a53]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="rounded-3xl bg-white border border-[#e9faf6] p-6 sm:p-8">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">채용 프로세스</h3>
              <p className={`mt-1 text-sm ${colors.textMuted}`}>
                포지션/경험에 따라 일부 단계가 조정될 수 있습니다.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-white bg-[#10bfa5] hover:opacity-95 transition"
            >
              지금 문의하기 <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: <PenTool className="h-5 w-5" />, title: "서류" },
              { icon: <Users2 className="h-5 w-5" />, title: "1차 인터뷰 (팀)" },
              { icon: <Cpu className="h-5 w-5" />, title: "기술/과제 (직무)" },
              { icon: <ServerCog className="h-5 w-5" />, title: "2차 인터뷰 (리더십)" },
              { icon: <Award className="h-5 w-5" />, title: "최종 협의/오퍼" },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp(i)}
                className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${colors.mintBg} text-white`}>{s.icon}</div>
                  <div className="font-semibold">{s.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-white border border-[#e9faf6] p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">
                CodeCanvas와 함께 커리어의 다음 챕터를 여세요
              </h3>
              <p className={`mt-2 ${colors.textMuted}`}>
                포지션이 보이지 않더라도 상시 지원을 환영합니다. 여러분의 전문성이 우리의 제품을 완성합니다.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contact?type=recruit"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#10bfa5] hover:opacity-95 transition"
              >
                상시 지원하기 <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#bfeee5] bg-white hover:bg-[#ebfffa] transition"
              >
                팀 더 알아보기 <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
