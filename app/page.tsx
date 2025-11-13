"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Server,
  BarChart3,
  Shield,
  Globe2,
  Layers,
  Workflow,
  Rocket,
  LineChart,
  Laptop,
  Lock,
  UserCheck,
  ShoppingCart,
  Building2,
  Store,
  Code2,
  Activity,
} from "lucide-react";

/**
 * CodeCanvas Home Page
 * - 기술 중심 엔터프라이즈 인프라 플랫폼 랜딩
 * - 라벤더 브랜딩
 * - 핵심 메시지: "Unified Tech Infrastructure for Modern Businesses"
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
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: 0.08 * i },
});

export default function HomePage(): JSX.Element {
  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* ──────────────────────────────── HERO ──────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />

        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <motion.div
            {...fadeUp(0)}
            className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr,2fr] gap-12 items-center"
          >
            {/* LEFT: Copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm bg-white/70 backdrop-blur border-white/60">
                <Sparkles className="h-4 w-4" />
                Cloud-native Tech Infrastructure
              </span>

              <h1 className="mt-8 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
                제품, 데이터, 글로벌을
                <span className={`block ${colors.violet}`}>
                  하나의 기술 플랫폼으로
                </span>
              </h1>

              <p className={`mt-6 text-lg sm:text-xl ${colors.textMuted}`}>
                CodeCanvas는 결제만을 위한 PG가 아닙니다.  
                온라인·오프라인 서비스, 데이터 분석, 보안, 글로벌 확장을  
                한 번에 담아내는 엔터프라이즈급 기술 인프라 플랫폼입니다.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-xl bg-[#f2edff] text-[#7b5cf4]">
                    <Server className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold">모듈형 인프라</div>
                    <div className={colors.textMuted}>
                      결제, 정산, CRM, Analytics, Global 모듈 단위 구성
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-xl bg-[#f2edff] text-[#7b5cf4]">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold">데이터 우선 설계</div>
                    <div className={colors.textMuted}>
                      이벤트 스트림 기반 실시간 지표와 장기 보관 분석
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
                >
                  도입 상담 신청 <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/tech"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
                >
                  기술 구조 보기
                </Link>
              </div>
            </div>

            {/* RIGHT: Highlight Card */}
            <div className="lg:block">
              <div
                className={`rounded-3xl ${colors.card} border ${colors.border} p-6 sm:p-8 shadow-[0_18px_60px_rgba(73,56,135,0.18)]`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold flex items-center gap-2">
                    <Activity className="h-4 w-4 text-[#7b5cf4]" />
                    실시간 운영 현황
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#f2edff] text-[#7b5cf4]">
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="rounded-2xl bg-[#f9f7ff] p-4">
                    <div className="text-xs text-[#5c5470] mb-1">
                      일별 트랜잭션
                    </div>
                    <div className="text-2xl font-bold">3.2M</div>
                    <div className="mt-1 text-xs text-green-600">
                      +18% vs 지난주
                    </div>
                  </div>
                  <div className="rounded-2xl bg-[#f9f7ff] p-4">
                    <div className="text-xs text-[#5c5470] mb-1">
                      평균 지연 시간
                    </div>
                    <div className="text-2xl font-bold">&lt; 95ms</div>
                    <div className="mt-1 text-xs text-[#5c5470]">
                      글로벌 리전 기준
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-dashed border-[#e8e2fb] p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#5c5470]">
                      승인율 모니터링
                    </span>
                    <span className="text-xs text-green-600 font-semibold">
                      99.2%
                    </span>
                  </div>
                  <div className="h-20 rounded-xl bg-gradient-to-r from-[#f2edff] to-[#e2d6ff] relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-xs text-[#5c5470]/70">
                      통합 승인율 · 리전별 비교 그래프
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#5c5470]">
                    <Shield className="h-3 w-3 text-[#7b5cf4]" />
                    <span>PCI DSS &amp; ISMS 설계 기준</span>
                  </div>
                  <Link
                    href="/tech/security"
                    className="inline-flex items-center gap-1 text-[#7b5cf4] font-semibold"
                  >
                    보안 구조 보기 <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────── TRUST / METRICS BAR ──────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-4 pb-20">
        <motion.div
          {...fadeUp(1)}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm"
        >
          {[
            { label: "연간 처리 트랜잭션", value: "10억+ 건" },
            { label: "평균 가용성", value: "99.99%" },
            { label: "연동 가능한 엔드포인트", value: "200+ APIs" },
            { label: "지원 국가/통화", value: "150+ / 50+" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-xs text-[#5c5470]">{item.label}</div>
              <div className="text-base font-semibold mt-1">{item.value}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ──────────────────────────────── VALUE PROPOSITION ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          우리는 이런 기술 플랫폼입니다
        </motion.h2>
        <p
          className={`text-center mt-3 text-sm ${colors.textMuted} max-w-2xl mx-auto`}
        >
          CodeCanvas는 “PG사”가 아니라,  
          <span className="font-semibold">비즈니스 인프라 전체를 설계·운영하는 기술 회사</span>입니다.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {[
            {
              icon: <Layers className="h-6 w-6" />,
              title: "Unified Infrastructure",
              desc: "결제, 정산, 회원, CRM, Analytics, Global을 하나의 구조로 설계합니다.",
              tags: ["모듈형 도메인", "마이크로서비스", "API 우선"],
            },
            {
              icon: <BarChart3 className="h-6 w-6" />,
              title: "Data-first Platform",
              desc: "이벤트 스트림과 데이터레이크 기반으로 전 구간 데이터를 수집·분석합니다.",
              tags: ["이벤트 기반", "실시간 지표", "장기 분석"],
            },
            {
              icon: <Shield className="h-6 w-6" />,
              title: "Security by Design",
              desc: "처음부터 금융권 수준의 보안과 컴플라이언스를 전제로 설계합니다.",
              tags: ["암호화", "접근 제어", "감사 로그"],
            },
          ].map((block, idx) => (
            <motion.div
              {...fadeUp(idx + 1)}
              key={block.title}
              className={`rounded-3xl ${colors.card} border ${colors.border} p-8`}
            >
              <div className="p-3 rounded-xl bg-[#f2edff] text-[#7b5cf4] w-fit mb-4">
                {block.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{block.title}</h3>
              <p className={`${colors.textMuted} mb-4`}>{block.desc}</p>
              <div className="flex flex-wrap gap-2">
                {block.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex px-3 py-1 rounded-full bg-[#f2edff] text-[#7b5cf4] text-[11px] font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────── CORE CAPABILITIES ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          CodeCanvas가 제공하는 핵심 역량
        </motion.h2>
        <p className={`text-center mt-3 text-sm ${colors.textMuted}`}>
          비즈니스가 성장할 때 필요한 대부분의 기술 인프라를 커버합니다.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          {[
            {
              icon: <Server className="h-6 w-6" />,
              title: "Application Infra",
              desc: "Kubernetes, Service Mesh, CI/CD, Blue-Green 배포",
            },
            {
              icon: <Code2 className="h-6 w-6" />,
              title: "Developer Platform",
              desc: "REST/GraphQL API, SDK, Sandbox, 문서 포털",
            },
            {
              icon: <BarChart3 className="h-6 w-6" />,
              title: "Data & Analytics",
              desc: "ETL, 스트리밍, 데이터마트, 대시보드, 예측 모델",
            },
            {
              icon: <Lock className="h-6 w-6" />,
              title: "Security & Compliance",
              desc: "암호화, 키 관리, 권한 정책, 감사 로그, FDS 연계",
            },
          ].map((cap, i) => (
            <motion.div
              {...fadeUp(i + 1)}
              key={cap.title}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="p-2 rounded-xl bg-[#f2edff] text-[#7b5cf4] w-fit mb-3">
                {cap.icon}
              </div>
              <h3 className="font-semibold mb-1">{cap.title}</h3>
              <p className={colors.textMuted}>{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────── INDUSTRY SOLUTIONS ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20" id="solutions">
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          산업별로 최적화된 기술 설계
        </motion.h2>
        <p className={`text-center mt-3 text-sm ${colors.textMuted}`}>
          각 산업이 가진 구조적인 한계를 기술로 다시 설계합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {[
            {
              icon: <ShoppingCart className="h-6 w-6" />,
              name: "온라인 커머스",
              link: "/solutions/online",
              desc: "장바구니, 구독, 재고 동기화, 멀티채널 주문 처리",
            },
            {
              icon: <Store className="h-6 w-6" />,
              name: "리테일 & O2O",
              link: "/solutions/retail",
              desc: "POS 연동, 통합 멤버십, 오프라인 데이터 수집",
            },
            {
              icon: <Building2 className="h-6 w-6" />,
              name: "핀테크 & 금융",
              link: "/solutions/fintech",
              desc: "지갑, 송금, 정산, FDS, 리스크 스코어링",
            },
            {
              icon: <Globe2 className="h-6 w-6" />,
              name: "글로벌 확장",
              link: "/solutions/global",
              desc: "다국가 결제, 환전, 세금·규제 대응",
            },
          ].map((s, i) => (
            <motion.a
              {...fadeUp(i + 1)}
              key={i}
              href={s.link}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6 cursor-pointer hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-[#f2edff] text-[#7b5cf4]">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{s.name}</h3>
                  <p className={`text-xs mt-1 ${colors.textMuted}`}>
                    {s.desc}
                  </p>
                </div>
              </div>
              <span className="text-sm text-[#7b5cf4] font-semibold flex items-center gap-1">
                자세히 보기 <ArrowRight className="h-3 w-3" />
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────── TECH SECTION PREVIEW ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20" id="tech">
        <motion.div
          {...fadeUp(0)}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-10"
        >
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              기술 구조까지 투명하게 공개합니다
            </h2>
            <p className={`${colors.textMuted} text-sm mb-5`}>
              CodeCanvas는 단순히 “된다”고 말하지 않습니다.  
              아키텍처, 보안, 운영, 데이터 구조를 기술 문서로 제공하고,  
              엔지니어와 직접 대화하는 수준의 투명성을 지향합니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-6">
              {[
                {
                  title: "시스템 아키텍처",
                  desc: "4 계층 구조, Microservices, Event-driven",
                  href: "/tech/architecture",
                },
                {
                  title: "보안 & 컴플라이언스",
                  desc: "암호화, 접근 제어, 감사 로그, 규제 대응",
                  href: "/tech/security",
                },
                {
                  title: "시스템 구성 & 운영",
                  desc: "K8s, CI/CD, Observability, 운영 표준",
                  href: "/tech/system",
                },
                {
                  title: "대시보드 & 모니터링",
                  desc: "승인율, 지연, 장애, 로그를 한 눈에",
                  href: "/tech/dashboard",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-2xl border border-[#e8e2fb] bg-white p-4 hover:border-[#d1c5ff] transition"
                >
                  <div className="text-sm font-semibold flex items-center justify-between">
                    {item.title}
                    <ArrowRight className="h-3 w-3 text-[#7b5cf4]" />
                  </div>
                  <div className={`mt-1 text-xs ${colors.textMuted}`}>
                    {item.desc}
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/tech"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#7b5cf4]"
            >
              전체 기술 문서 보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Developer Snippet */}
          <motion.div
            {...fadeUp(1)}
            className={`flex-1 rounded-3xl ${colors.card} border ${colors.border} p-6 lg:p-8`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#5c5470]">
                <Code2 className="h-4 w-4 text-[#7b5cf4]" />
                Developer-first API
              </div>
              <span className="text-[10px] px-2 py-1 rounded-full bg-[#f2edff] text-[#7b5cf4]">
                Sandbox
              </span>
            </div>

            <div className="rounded-2xl bg-[#141021] text-[#f7f3ff] text-xs p-4 font-mono overflow-x-auto">
              <div className="flex items-center justify-between mb-3 opacity-80">
                <span>// Node.js 예시</span>
                <span>POST /v1/transactions</span>
              </div>
              <pre className="whitespace-pre">
{`import CodeCanvas from "@codecanvas/sdk";

const client = new CodeCanvas({
  apiKey: process.env.CODECANVAS_API_KEY!,
});

const tx = await client.transaction.create({
  amount: 120000,
  currency: "KRW",
  customerId: "cus_123",
  meta: {
    orderId: "ORD-2025-0001",
    channel: "web",
  },
});

console.log(tx.status, tx.id);`}
              </pre>
            </div>

            <div className="mt-4 text-xs flex items-center justify-between text-[#5c5470]">
              <div className="flex items-center gap-2">
                <Laptop className="h-3 w-3 text-[#7b5cf4]" />
                <span>개발 1일 이내 샌드박스 연동 가능</span>
              </div>
              <Link
                href="/services/apis"
                className="inline-flex items-center gap-1 text-[#7b5cf4] font-semibold"
              >
                API 서비스 보기 <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ──────────────────────────────── FOR TEAMS ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          각 조직에게 주는 가치
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {[
            {
              icon: <UserCheck className="h-5 w-5" />,
              role: "비즈니스/프로덕트",
              points: [
                "신규 비즈니스 론칭 리드타임 단축",
                "수익 구조/수수료/정산 정책 유연 설계",
                "산업별 템플릿으로 빠른 기획 검증",
              ],
            },
            {
              icon: <Laptop className="h-5 w-5" />,
              role: "개발/엔지니어링",
              points: [
                "명확한 API와 문서, 테스트 환경 제공",
                "모듈형 아키텍처로 리스크 최소화",
                "DevOps/Observability 표준 구성",
              ],
            },
            {
              icon: <Shield className="h-5 w-5" />,
              role: "보안/리스크",
              points: [
                "감사 로그/접근 제어 정책 내장",
                "FDS·AML 연동을 전제한 인프라",
                "규제 대응을 고려한 데이터 구조",
              ],
            },
          ].map((team, i) => (
            <motion.div
              {...fadeUp(i + 1)}
              key={team.role}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-xl bg-[#f2edff] text-[#7b5cf4]">
                  {team.icon}
                </div>
                <div className="font-semibold">{team.role}</div>
              </div>
              <ul className={`list-disc pl-5 space-y-1 ${colors.textMuted}`}>
                {team.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────── FINAL CTA ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-14 text-center shadow-sm">
          <h2 className="text-3xl font-bold mb-4">
            기술 인프라부터 함께 설계할 파트너가 필요하다면
          </h2>
          <p className={`${colors.textMuted} text-sm mb-8`}>
            CodeCanvas는 단순한 솔루션 공급사가 아니라,  
            비즈니스 구조를 함께 설계하는 기술 파트너를 지향합니다.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7b5cf4] text-white font-semibold hover:opacity-95 transition"
            >
              도입·제휴 상담 요청 <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#d9d0fb] bg-white text-sm font-semibold hover:bg-[#f2edff] transition"
            >
              CodeCanvas 소개 보기
            </Link>
          </div>
        </div>
      </section>

      <div className="h-10" />
    </div>
  );
}
