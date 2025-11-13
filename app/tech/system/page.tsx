"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Boxes,
  Server,
  Network,
  LayoutDashboard,
  Cpu,
  Cloud,
  Database,
  HardDrive,
  CircuitBoard,
  GitBranch,
  Code2,
  BarChart3,
  Activity,
  Lock,
  Shield,
  ArrowRight,
  Cog,
  Layers,
  Workflow,
  Cable,
  CreditCard,
  Globe2,
  UserCog,
  Timer,
  TrendingUp,
} from "lucide-react";

/**
 * CodeCanvas | Tech → System Architecture Page
 * - 결제/정산/Analytics/CRM/Global Infra 기반 시스템 전체 구성 소개
 * - Microservices, Event-driven Architecture, Observability, Reliability 구성
 * - 기업용 기술 페이지 수준으로 설계
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

export default function TechSystemPage(): JSX.Element {
  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* ───────────── Hero ───────────── */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <motion.div {...fadeUp(0)} className="max-w-4xl flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm bg-white/70 backdrop-blur border border-white/60">
              <Cpu className="h-4 w-4" />
              System Architecture
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              CodeCanvas 기술 시스템
              <span className={`block ${colors.violet}`}>End-to-End Infra</span>
            </h1>

            <p className={`text-base sm:text-lg ${colors.textMuted}`}>
              CodeCanvas는 결제·정산·데이터·보안·글로벌 확장까지 지원하는
              **엔터프라이즈급 시스템 아키텍처**를 기반으로 구축됩니다.
              모듈화된 마이크로서비스, 확장 가능한 Kubernetes 기반 배포,
              이벤트 중심 데이터 처리로 안정성과 민첩성을 함께 제공합니다.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/tech/architecture"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                아키텍처 보기 <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                기술 미팅 예약
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────────── Architecture Summary ───────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          시스템 전반 개요
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted} max-w-3xl`}>
          CodeCanvas 시스템은 다음 4개 레이어로 구성되어 있습니다.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 text-sm">
          {[
            {
              icon: <Layers className="h-5 w-5" />,
              title: "Presentation Layer",
              desc: "Next.js 기반 Front + Admin Console + B2B Portal",
            },
            {
              icon: <Boxes className="h-5 w-5" />,
              title: "Service Layer",
              desc: "분리된 마이크로서비스: 결제, 정산, CRM, 글로벌",
            },
            {
              icon: <Workflow className="h-5 w-5" />,
              title: "Data Pipeline",
              desc: "ETL · 이벤트 스트리밍 · 데이터레이크 · 분석",
            },
            {
              icon: <Server className="h-5 w-5" />,
              title: "Infra & Ops",
              desc: "Kubernetes · CI/CD · 모니터링 · 보안 체계",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="p-2 rounded-xl bg-[#f2edff] text-[#7b5cf4] w-fit mb-3">
                {item.icon}
              </div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className={colors.textMuted}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────── Microservices Diagram ───────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          마이크로서비스 구성
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          CodeCanvas는 결제부터 정산·회원·정책·글로벌 처리까지
          **도메인 단위로 완전히 분리된 서비스 구조**를 가집니다.
        </p>

        <motion.div
          {...fadeUp(1)}
          className={`mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
        >
          {[
            {
              icon: <CreditCard className="h-5 w-5" />,
              title: "Payment Service",
              items: [
                "멀티 PG 연동",
                "카드·계좌 이체 처리",
                "Billing/AutoPay",
                "Webhook/Callback 처리",
              ],
            },
            {
              icon: <Timer className="h-5 w-5" />,
              title: "Settlement Service",
              items: [
                "D+0 / D+1 정산",
                "차액정산 로직",
                "스케줄러 기반 배치",
                "원천사·은행 연동",
              ],
            },
            {
              icon: <UserCog className="h-5 w-5" />,
              title: "Merchant Service",
              items: ["가맹점 관리", "정책/수수료", "영업 대시보드"],
            },
            {
              icon: <BarChart3 className="h-5 w-5" />,
              title: "Analytics Service",
              items: ["실시간 지표", "ETL 파이프라인", "AI 기반 예측"],
            },
            {
              icon: <Globe2 className="h-5 w-5" />,
              title: "Global Service",
              items: ["다국가 결제", "환전/정산", "언어/세금 처리"],
            },
            {
              icon: <Shield className="h-5 w-5" />,
              title: "Security/FDS",
              items: ["이상거래 탐지", "패턴 기반 차단", "OTP/MFA 정책"],
            },
          ].map((svc, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 2)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="p-2 rounded-xl bg-[#f2edff] text-[#7b5cf4] w-fit mb-3">
                {svc.icon}
              </div>
              <h3 className="font-semibold mb-2">{svc.title}</h3>
              <ul className={`pl-5 list-disc space-y-1 ${colors.textMuted}`}>
                {svc.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ───────────── Event-Driven Architecture ───────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          이벤트 기반 아키텍처 (EDA)
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          이벤트 중심 구조로 서비스 간 결합도를 낮추고 확장성을 높였습니다.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {[
            {
              icon: <Cable className="h-5 w-5 text-[#7b5cf4]" />,
              title: "Event Producer",
              desc: "결제 완료/취소, 정산 완료, 회원 변경 등 서비스에서 이벤트 발행",
            },
            {
              icon: <Network className="h-5 w-5 text-[#7b5cf4]" />,
              title: "Event Bus",
              desc: "Kafka / MQ 기반 스트리밍 처리 (Retry, DLQ 지원)",
            },
            {
              icon: <CircuitBoard className="h-5 w-5 text-[#7b5cf4]" />,
              title: "Event Consumer",
              desc: "정산·알림·분석·CRM 서비스에서 이벤트 소비 및 비동기 처리",
            },
          ].map((e, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-[#f2edff]">{e.icon}</div>
                <h3 className="font-semibold text-base">{e.title}</h3>
              </div>
              <p className={colors.textMuted}>{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────── Infrastructure ───────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          인프라 구성 및 운영 체계
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          고가용성·자동화·관측 가능성을 기반으로 설계됩니다.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {[
            {
              icon: <Cloud className="h-5 w-5 text-[#7b5cf4]" />,
              title: "Kubernetes Cluster",
              desc: [
                "Service Mesh (Istio/Linkerd)",
                "자동 스케일링 (HPA)",
                "Blue-Green / Canary 배포",
              ],
            },
            {
              icon: <GitBranch className="h-5 w-5 text-[#7b5cf4]" />,
              title: "CI/CD Pipeline",
              desc: [
                "GitHub Actions / ArgoCD",
                "자동 테스트 & Lint",
                "보안 취약점 스캔",
              ],
            },
            {
              icon: <Activity className="h-5 w-5 text-[#7b5cf4]" />,
              title: "Observability",
              desc: [
                "Prometheus + Grafana",
                "실시간 로그 (Loki)",
                "분산 트레이싱 (Jaeger)",
              ],
            },
          ].map((box, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="p-2 rounded-xl bg-[#f2edff] w-fit mb-3">
                {box.icon}
              </div>
              <h3 className="font-semibold mb-2">{box.title}</h3>
              <ul className={`pl-5 list-disc space-y-1 ${colors.textMuted}`}>
                {box.desc.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            당신의 서비스도 엔터프라이즈급 시스템으로
          </h2>
          <p className={`${colors.textMuted} text-sm mb-6`}>
            결제/정산 인프라뿐 아니라, 데이터·보안·확장성을 고려한
            **완성형 기술 아키텍처**를 제공해드립니다.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7b5cf4] text-white font-semibold text-sm hover:opacity-95 transition"
            >
              기술 상담 요청하기 <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/tech/security"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#d9d0fb] bg-white text-sm font-semibold hover:bg-[#f2edff] transition"
            >
              보안 체계 확인
            </Link>
          </div>
        </div>
      </section>

      <div className="h-10" />
    </div>
  );
}
