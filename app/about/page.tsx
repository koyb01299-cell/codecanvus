"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  BarChart3,
  Network,
  Building2,
  Users2,
  Award,
  Globe2,
  Fingerprint,
  ServerCog,
  Clock3,
  ArrowRight,
} from "lucide-react";

/**
 * CodeCanvas | About Page
 * - 기술기업(핀테크 인프라 + CRM/데이터 플랫폼) 정체성을 강조
 * - 외부 컴포넌트 의존 최소화 (Navbar/Footer는 layout에서 처리된다고 가정)
 * - Tailwind 임의 컬러(hex) 사용: 밝은 민트 계열 + 딥그린 텍스트
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

export default function AboutPage(): JSX.Element {
  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* Hero / Mission */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24 relative">
          <motion.div {...fadeUp(0)} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm bg-white/70 backdrop-blur border-white/60">
              <Cpu className="h-4 w-4" />
              기술로 결제·CRM·데이터를 하나로
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              CodeCanvas — 결제 인프라와 고객경험을
              <span className={`block ${colors.mint}`}>하나의 기술 캔버스로</span>
            </h1>
            <p className={`mt-4 sm:mt-6 text-base sm:text-lg ${colors.textMuted}`}>
              우리는 PG 인프라, CRM/멤버십, 데이터 분석, 보안/모니터링을
              단일한 제품 철학 아래 통합합니다. 결제와 고객 데이터가 만나는
              지점에서, 더 빠르고 안전하며 확장 가능한 비즈니스 성장을 가능하게 합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#10bfa5] hover:opacity-95 transition"
              >
                서비스 개요 보기 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tech"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#bfeee5] bg-white hover:bg-[#ebfffa] transition"
              >
                기술 문서 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Pillars */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <motion.div {...fadeUp(0)} className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            우리의 비전
          </h2>
          <p className={`mt-3 ${colors.textMuted}`}>
            CodeCanvas는 “Start → Scale → Grow”의 여정을 수반하는 모든 팀에게
            <b> 인프라적 안정성</b>과 <b>데이터 기반의 성장 가속</b>을 제공합니다.
            결제/정산, 리워드/프로모션, 데이터 분석, 모니터링과 보안을 한 번에
            연결하여, 운영자는 더 적은 도구로 더 큰 확신을 가질 수 있습니다.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: <Network className="h-5 w-5" />,
              title: "통합 인프라",
              desc: "결제·정산, 리워드, 메시징, 데이터 파이프라인까지 하나의 백플레인.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "보안·컴플라이언스",
              desc: "ISMS/PCI 원칙을 반영한 기본 설계. 감사/리포팅 자동화.",
            },
            {
              icon: <BarChart3 className="h-5 w-5" />,
              title: "데이터 중심",
              desc: "분석·FDS·세그먼트 타깃팅으로 LTV와 재방문을 체계화.",
            },
            {
              icon: <ServerCog className="h-5 w-5" />,
              title: "운영 가시성",
              desc: "실시간 로깅/알림·대시보드·SLO로 안정적 운영.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-5 ring-1 ring-transparent hover:ring-2 hover:${colors.mintRing} transition`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${colors.mintBg} text-white`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className={`mt-3 text-sm ${colors.textMuted}`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Numbers / Proof */}
      <section className="max-w-7xl mx-auto px-6 pb-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            { label: "연간 처리 거래액", value: "₩1조+", icon: <Globe2 className="h-5 w-5" /> },
            { label: "누적 가맹", value: "40,000+", icon: <Building2 className="h-5 w-5" /> },
            { label: "납품/도입 기업", value: "40+", icon: <Users2 className="h-5 w-5" /> },
            { label: "평균 승인 지연", value: "< 200ms", icon: <Clock3 className="h-5 w-5" /> },
          ].map((n, i) => (
            <motion.div
              key={n.label}
              {...fadeUp(i)}
              className="rounded-2xl bg-white border border-[#e9faf6] p-5"
            >
              <div className="flex items-center gap-2 text-sm text-[#3a5a53]">
                {n.icon}
                <span>{n.label}</span>
              </div>
              <div className="mt-2 text-2xl font-extrabold tracking-tight">{n.value}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Architecture Snapshot (compact) */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <motion.div {...fadeUp(0)} className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">아키텍처 스냅샷</h2>
          <p className={`mt-3 ${colors.textMuted}`}>
            CodeCanvas는 멀티 AZ/이중화, 퍼블릭·프라이빗 네트워크 분리, 실시간 로깅과
            경보 체계를 기본값으로 설계합니다. FDS/AML 모듈, 메시징 게이트웨이, 정산 스케줄러,
            대시보드가 단일 표준 이벤트 버스로 연결됩니다.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {[
            {
              title: "Security & Identity",
              icon: <Fingerprint className="h-5 w-5" />,
              points: [
                "권한/역할 기반 접근제어",
                "암호화·비밀관리 표준화",
                "감사 로그/리포팅",
              ],
            },
            {
              title: "Data & Monitoring",
              icon: <BarChart3 className="h-5 w-5" />,
              points: ["실시간 파이프라인/세그먼트", "이상징후 탐지", "SLO/알림/리커버리"],
            },
            {
              title: "Infra & Runtime",
              icon: <ServerCog className="h-5 w-5" />,
              points: ["컨테이너/오토스케일", "예약/배치/재시도", "고가용성 이중화"],
            },
          ].map((col, i) => (
            <motion.div
              key={col.title}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${colors.mintBg} text-white`}>{col.icon}</div>
                <h3 className="font-semibold">{col.title}</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm list-disc pl-6">
                {col.points.map((p) => (
                  <li key={p} className={`${colors.textMuted}`}>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <motion.div {...fadeUp(0)}>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">연혁</h2>
          <p className={`mt-3 ${colors.textMuted}`}>
            PG 인프라와 CRM/리워드 기술의 결합에서 출발해, 글로벌 결제·데이터 플랫폼으로
            확장하고 있습니다.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              year: "2021–2022",
              items: [
                "핵심 결제/정산 모듈 및 메시징 게이트웨이 PoC",
                "초기 CRM/리워드 엔진 통합, 자동 쿠폰/세그먼트",
              ],
            },
            {
              year: "2023",
              items: [
                "운영 대시보드/로깅/알림 체계 고도화",
                "해외 PG 연동 및 다국어 구조 설계",
              ],
            },
            {
              year: "2024",
              items: [
                "연간 거래액 ₩1조+ 달성",
                "보안/감사 리포트 자동화, IR 자료 표준화",
              ],
            },
            {
              year: "2025~",
              items: [
                "데이터 제품군(세그먼트·예측) 상용화",
                "글로벌 파트너 에코시스템 확장",
              ],
            },
          ].map((t, i) => (
            <motion.div
              key={t.year}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}
            >
              <div className="flex items-center gap-2">
                <Award className={`${colors.mint} h-5 w-5`} />
                <h3 className="font-semibold">{t.year}</h3>
              </div>
              <ul className="mt-3 pl-6 list-disc text-sm space-y-2">
                {t.items.map((it) => (
                  <li key={it} className={`${colors.textMuted}`}>
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership / Certifications (placeholder content-friendly) */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <motion.div {...fadeUp(0)} className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">리더십</h2>
            <p className={`mt-3 ${colors.textMuted}`}>
              다양한 결제·데이터·보안 분야의 엔지니어와 제품 리더들이
              “안정적인 인프라 위의 성장”이라는 하나의 원칙 아래 협업합니다.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "J. Kim", role: "CEO / Product" },
                { name: "H. Lee", role: "CTO / Platform" },
                { name: "S. Park", role: "Head of Data" },
                { name: "M. Choi", role: "Head of Security" },
              ].map((p, i) => (
                <motion.div
                  key={p.name}
                  {...fadeUp(i + 1)}
                  className="rounded-2xl bg-white border border-[#e9faf6] p-5"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{p.name}</div>
                      <div className={`text-sm ${colors.textMuted}`}>{p.role}</div>
                    </div>
                    <Users2 className={`${colors.mint} h-6 w-6`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(2)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}
          >
            <h3 className="font-semibold">보안·인증</h3>
            <ul className="mt-3 pl-6 list-disc text-sm space-y-2">
              <li className={`${colors.textMuted}`}>ISMS 원칙 기반 설계</li>
              <li className={`${colors.textMuted}`}>PCI DSS 고려 아키텍처</li>
              <li className={`${colors.textMuted}`}>개인정보·키 관리 표준화</li>
              <li className={`${colors.textMuted}`}>감사 추적/리포트 자동화</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="rounded-3xl bg-white border border-[#e9faf6] p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">
                CodeCanvas와 함께 “Start → Scale → Grow”
              </h3>
              <p className={`mt-2 ${colors.textMuted}`}>
                데모와 기술 문서, 레퍼런스를 통해 더 빠르게 도입해 보세요.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#10bfa5] hover:opacity-95 transition"
              >
                상담/데모 요청 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/career"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#bfeee5] bg-white hover:bg-[#ebfffa] transition"
              >
                채용 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
