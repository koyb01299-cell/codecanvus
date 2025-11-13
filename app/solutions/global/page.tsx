"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe2,
  Plane,
  Lock,
  CreditCard,
  Wallet,
  Landmark,
  Currency,
  Building2,
  ShieldCheck,
  MapPinned,
  ArrowRight,
  LineChart,
  BadgeCheck,
  FileText,
  Clock3,
  Network,
  Languages,
  Banknote,
  Receipt,
} from "lucide-react";

/**
 * CodeCanvas | Solutions → Global
 * - 글로벌 결제 / 해외 PG 연동 / FX / 세금 / 지역별 규제 대응 솔루션 페이지
 * - 다국가로 확장하는 플랫폼, PG, SaaS를 위한 소개
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
  transition: { duration: 0.55, delay: 0.05 * i },
});

export default function GlobalSolutionPage(): JSX.Element {
  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* ─────────────── Hero Section ─────────────── */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <motion.div {...fadeUp(0)} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm bg-white/70 backdrop-blur border-white/60">
              <Globe2 className="h-4 w-4" />
              Global Expansion
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight">
              CodeCanvas Global Suite
              <span className={`block ${colors.violet}`}>
                국경을 넘는 결제와 정산, 한 번에
              </span>
            </h1>
            <p className={`mt-4 sm:mt-6 text-base sm:text-lg ${colors.textMuted}`}>
              로컬 결제수단, 다중 통화, 현지 세금·규제, 환율, 해외 PG 연동까지.
              CodeCanvas Global Suite는 한 번의 연동으로 여러 국가에서 서비스할 수 있는
              **글로벌 결제·정산 인프라**를 제공합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?type=global"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                글로벌 확장 상담 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/payinfra"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                결제 인프라 살펴보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── Core Regions & Coverage ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          커버리지와 확장 방향
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          CodeCanvas는 단계별 확장을 전제로, 우선순위 지역부터 안정적으로 론칭할 수 있게 설계되어 있습니다.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              region: "Korea & APAC",
              icon: <MapPinned className="h-5 w-5" />,
              points: ["한국 로컬 결제수단", "일본·동남아 PG 연동", "원화·엔화·동남아 통화"],
            },
            {
              region: "North America",
              icon: <Building2 className="h-5 w-5" />,
              points: ["미국 카드/ACH", "구독·정기결제", "세일즈택스·주별 세율 모델링"],
            },
            {
              region: "Europe",
              icon: <Landmark className="h-5 w-5" />,
              points: ["SEPA / 카드 결제", "PSD2 · SCA 고려", "부가세·역외 과세 구조"],
            },
            {
              region: "Global Platforms",
              icon: <Plane className="h-5 w-5" />,
              points: ["멀티 리전 배포", "글로벌 상점 구조", "Cross-border 라우팅"],
            },
          ].map((r, i) => (
            <motion.div
              key={r.region}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>
                  {r.icon}
                </div>
                <h3 className="font-semibold">{r.region}</h3>
              </div>
              <ul className={`mt-3 pl-5 list-disc text-sm ${colors.textMuted} space-y-1`}>
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── Global Capabilities ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          글로벌 결제를 위한 핵심 기능
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          단순 “해외 결제 지원” 수준을 넘어서, 실제 서비스 운영에 필요한 기능을 모두 포함합니다.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Currency className="h-5 w-5" />,
              title: "다중 통화 / 환율 관리",
              desc: "KRW·USD·EUR 등 다중 통화로 결제, 정산. 실시간/지연 환율 소스와 연동하고 스프레드 정책을 설정합니다.",
            },
            {
              icon: <Wallet className="h-5 w-5" />,
              title: "Cross-border 정산",
              desc: "현지 통화로 결제 후, 본사 기준 통화로 정산하거나, 현지 법인 단위로 분리 정산할 수 있습니다.",
            },
            {
              icon: <Receipt className="h-5 w-5" />,
              title: "세금·부가세·수수료 모델링",
              desc: "국가/주/상품군별로 서로 다른 세금·수수료 정책을 설정하고, 자동으로 정산 결과에 반영합니다.",
            },
            {
              icon: <CreditCard className="h-5 w-5" />,
              title: "로컬 결제수단 지원",
              desc: "카드 외에도 계좌, 지갑, 현지 간편결제, QR 등 로컬 결제수단을 통합 API로 제공합니다.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "리스크·규제 대응",
              desc: "지역별 KYC/AML/위험도 기준에 따라 거래를 스코어링하고, 필요 시 자동으로 추가 인증을 요구합니다.",
            },
            {
              icon: <Languages className="h-5 w-5" />,
              title: "현지화 / 로컬라이징",
              desc: "언어·통화·날짜·주소 형식·영수증 포맷 등 현지 사용자의 기대에 맞는 UX를 제공합니다.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>{c.icon}</div>
                <h3 className="font-semibold">{c.title}</h3>
              </div>
              <p className={`mt-3 text-sm ${colors.textMuted}`}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── Example Flow ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          Cross-border 결제 플로우 예시
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          예시: 한국 법인 기준으로, 동남아 이용자의 결제를 처리하고 USD 기준으로 정산하는 시나리오입니다.
        </p>

        <motion.div
          {...fadeUp(1)}
          className={`mt-8 rounded-3xl ${colors.card} border ${colors.border} p-6 sm:p-8`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "로컬 결제수단 선택",
                icon: <CreditCard className="h-5 w-5" />,
                desc: "동남아 사용자가 현지 카드/지갑/계좌를 선택해 결제 요청.",
              },
              {
                step: "02",
                title: "해외 PG / 현지 은행 연동",
                icon: <Network className="h-5 w-5" />,
                desc: "CodeCanvas 게이트웨이가 지역 PG/은행으로 트래픽 라우팅.",
              },
              {
                step: "03",
                title: "FX / 수수료 / 세금 계산",
                icon: <Banknote className="h-5 w-5" />,
                desc: "원화/달러 기준 금액 + FX 스프레드 + 현지세/수수료를 자동 계산.",
              },
              {
                step: "04",
                title: "정산 / 회계 / 리포트",
                icon: <FileText className="h-5 w-5" />,
                desc: "본사 기준 통화(예: KRW/ USD)로 정산파일·리포트 자동 생성.",
              },
            ].map((s, i) => (
              <div
                key={s.step}
                className="relative rounded-2xl border border-[#ece6ff] p-5 flex flex-col"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-[#7b5cf4]">
                    STEP {s.step}
                  </span>
                  <div className="p-2 rounded-xl bg-[#f2edff] text-[#7b5cf4]">
                    {s.icon}
                  </div>
                </div>
                <h3 className="mt-2 text-sm font-semibold">{s.title}</h3>
                <p className={`mt-2 text-xs ${colors.textMuted}`}>{s.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute right-[-12px] top-1/2 -translate-y-1/2">
                    <ArrowRight className="h-4 w-4 text-[#d0c4ff]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─────────────── Compliance / Risk / Ops ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          글로벌 운영을 지탱하는 기반
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          글로벌 비즈니스의 리스크는 ‘운영’에서 발생합니다. CodeCanvas는 운영을 먼저 설계합니다.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "Compliance & 규제",
              points: [
                "지역별 규제·한도 정책 Rule 관리",
                "KYC/AML 로그 및 감사 트레일",
                "데이터 주권·보관 기간 정책 반영",
              ],
            },
            {
              icon: <Clock3 className="h-5 w-5" />,
              title: "SLA / 가용성 / 장애대응",
              points: [
                "멀티 리전·멀티 AZ 아키텍처",
                "각 리전별 헬스체크 및 페일오버",
                "장애 시 무중단 롤백/우회",
              ],
            },
            {
              icon: <LineChart className="h-5 w-5" />,
              title: "모니터링 & 리포팅",
              points: [
                "지역/통화/결제수단별승인율 대시보드",
                "FX 손익·수수료·세금 리포트",
                "알림(슬랙/메일/웹훅) 연동",
              ],
            },
          ].map((b, i) => (
            <motion.div
              key={b.title}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="flex items-center gap-2 font-semibold">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>
                  {b.icon}
                </div>
                <span>{b.title}</span>
              </div>
              <ul className={`mt-3 pl-5 list-disc text-sm ${colors.textMuted} space-y-1`}>
                {b.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── Why CodeCanvas for Global ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          왜 글로벌 확장에 CodeCanvas인가?
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <BadgeCheck className="h-5 w-5" />,
              title: "단일 API / 다중 국가",
              desc: "하나의 통합 API와 이벤트 스키마로 여러 국가에서 동일한 코드 베이스 유지.",
            },
            {
              icon: <Wallet className="h-5 w-5" />,
              title: "정산·회계까지 포함",
              desc: "FX, 수수료, 세금, 분리정산, 회계 분개까지 엔드투엔드 자동화.",
            },
            {
              icon: <Lock className="h-5 w-5" />,
              title: "보안과 규제 중심 설계",
              desc: "해외 리전별 보안·접근제어·암호화 정책을 세밀하게 적용.",
            },
            {
              icon: <Plane className="h-5 w-5" />,
              title: "Go-to-Market 속도",
              desc: "현지 PG·은행 연동 템플릿과 레퍼런스로 론칭 시간을 단축.",
            },
          ].map((ad, i) => (
            <motion.div
              key={ad.title}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className={`p-2 rounded-xl ${colors.violetBg} text-white w-fit`}>
                {ad.icon}
              </div>
              <h3 className="mt-3 font-semibold">{ad.title}</h3>
              <p className={`mt-2 text-sm ${colors.textMuted}`}>{ad.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">
                글로벌 서비스, 인프라부터 다르게 시작하세요
              </h3>
              <p className={`mt-2 text-sm ${colors.textMuted}`}>
                CodeCanvas Global Suite는 해외 PG/은행/지갑과의 연동뿐 아니라,
                실제 운영·정산·리포팅까지 고려한 인프라를 제공합니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?type=global"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                글로벌 확장 상담 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/solutions/fintech"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                핀테크 솔루션 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-6" />
    </div>
  );
}
