"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cpu,
  Layers,
  Box,
  Shield,
  Server,
  BarChart3,
  Workflow,
  Globe2,
  CircuitBoard,
  Gauge,
  Lock,
  ArrowRight,
  Network,
  Rocket,
  Cog,
  LineChart,
  Activity,
} from "lucide-react";

/**
 * CodeCanvas | Tech Main Page
 * - 기술 철학, 핵심 아키텍처, 시스템 구성, 보안, 데이터, 운영 기술 소개
 * - 하위 기술 문서 페이지로 연결되는 중앙 허브 역할
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
  viewport: { once: true },
  transition: { duration: 0.55, delay: 0.06 * i },
});

export default function TechMainPage(): JSX.Element {
  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* ───────────── Hero ───────────── */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <motion.div {...fadeUp(0)} className="max-w-4xl flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-white/70 backdrop-blur text-sm border-white/70">
              <Cpu className="h-4 w-4" />
              CodeCanvas Technology
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              기술로 완성되는
              <span className={`block ${colors.violet}`}>
                End-to-End 비즈니스 인프라
              </span>
            </h1>

            <p className={`text-base sm:text-lg ${colors.textMuted}`}>
              CodeCanvas는 결제·정산·데이터·보안·글로벌 인프라를 기반으로  
              모든 제품과 서비스를 기술적으로 완성합니다.  
              확장성과 안정성을 갖춘 엔터프라이즈 아키텍처로  
              고객의 비즈니스 성장을 기술로 뒷받침합니다.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/tech/architecture"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#7b5cf4] text-white font-semibold hover:opacity-95 transition"
              >
                아키텍처 문서 보기 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact?type=tech"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#dcd2fc] bg-white font-semibold hover:bg-[#f2edff] transition"
              >
                기술 미팅 신청
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────────── 기술 철학 ───────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          CodeCanvas 기술 철학
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          모든 시스템은 다음의 4가지 철학을 기반으로 설계됩니다.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              icon: <Layers className="h-5 w-5" />,
              title: "Modular",
              desc: "도메인 별 분리된 모듈 구조로 독립적인 개발/배포.",
            },
            {
              icon: <Workflow className="h-5 w-5" />,
              title: "Event-driven",
              desc: "이벤트 스트림 기반으로 서비스 간 결합도 최소화.",
            },
            {
              icon: <Server className="h-5 w-5" />,
              title: "Scalable",
              desc: "고객 증가에도 안정적인 트래픽 처리와 확장성 제공.",
            },
            {
              icon: <Shield className="h-5 w-5" />,
              title: "Secure",
              desc: "금융권 수준의 보안 규격(PKI/암호화/ISMS/PCl DSS).",
            },
          ].map((item, i) => (
            <motion.div
              {...fadeUp(i + 1)}
              key={item.title}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="p-2 rounded-xl bg-[#f2edff] w-fit text-[#7b5cf4] mb-3">
                {item.icon}
              </div>
              <h3 className="font-semibold text-base">{item.title}</h3>
              <p className={`${colors.textMuted} mt-1 text-sm`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────── 핵심 기술 카테고리 ───────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold mb-2">
          기술 구성 요소
        </motion.h2>
        <p className={`${colors.textMuted} text-sm`}>
          CodeCanvas 기술 스택은 아래 6가지 핵심 구성요소로 이루어져 있습니다.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              icon: <CircuitBoard className="h-6 w-6" />,
              title: "시스템 아키텍처",
              desc: "Presentation, Service, Data, Infra 4계층 구조.",
              link: "/tech/architecture",
            },
            {
              icon: <Lock className="h-6 w-6" />,
              title: "보안 & 컴플라이언스",
              desc: "암호화, HSM, 접근 제어, PCI DSS, ISMS 인증 설계.",
              link: "/tech/security",
            },
            {
              icon: <Gauge className="h-6 w-6" />,
              title: "대시보드 & 모니터링",
              desc: "실시간 승인율, 트래픽, 지연, 장애 자동 감지.",
              link: "/tech/dashboard",
            },
            {
              icon: <Cpu className="h-6 w-6" />,
              title: "시스템 구성",
              desc: "Microservices, 배포 흐름, 운영 구조, DevOps 체계.",
              link: "/tech/system",
            },
            {
              icon: <Network className="h-6 w-6" />,
              title: "데이터 파이프라인",
              desc: "ETL, 이벤트 스트림, 로그/메트릭, 분석 엔진.",
              link: "/tech/streams",
            },
            {
              icon: <Cog className="h-6 w-6" />,
              title: "정산 엔진",
              desc: "D+0 / D+1 정산, 차액정산, 은행 연동 스케줄링.",
              link: "/tech/settlement-engine",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              {...fadeUp(i + 1)}
              className={`rounded-3xl ${colors.card} border ${colors.border} p-8 hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-2xl bg-[#f2edff] text-[#7b5cf4]`}
                >
                  {card.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className={`mt-2 text-sm ${colors.textMuted}`}>
                    {card.desc}
                  </p>
                  <Link
                    href={card.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#7b5cf4] mt-4 hover:underline"
                  >
                    자세히 보기 <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────── End-to-end 기술 흐름 ───────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          End-to-End 플랫폼 기술 흐름
        </motion.h2>
        <p className={`${colors.textMuted} text-sm mt-2`}>
          서비스가 사용자에게 도달하기까지의 전 과정을 기술적으로 제공합니다.
        </p>

        <motion.div
          {...fadeUp(1)}
          className={`mt-12 rounded-3xl ${colors.card} border ${colors.border} p-10`}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Frontend",
                desc: "Next.js 기반 Web/App · Admin Console",
              },
              {
                step: "02",
                title: "Service Layer",
                desc: "Payment · Settlement · CRM · Analytics 서비스",
              },
              {
                step: "03",
                title: "Data Platform",
                desc: "ETL · Streaming · Data Lake · BI Layer",
              },
              {
                step: "04",
                title: "DevOps & Security",
                desc: "Observability · CI/CD · K8s · PKI · Encryption",
              },
            ].map((block, i) => (
              <motion.div
                key={i}
                {...fadeUp(i + 2)}
                className="p-6 rounded-xl border border-[#ece6ff]"
              >
                <div
                  className={`text-xs font-semibold text-[#7b5cf4] mb-2`}
                >
                  {block.step}
                </div>
                <h3 className="font-semibold mb-1 text-lg">{block.title}</h3>
                <p className={`${colors.textMuted} text-sm`}>
                  {block.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-14 text-center">
          <h2 className="text-3xl font-bold mb-4">
            CodeCanvas 기술로 비즈니스를 성장시키세요
          </h2>
          <p className={`${colors.textMuted} text-sm mb-8`}>
            엔터프라이즈급 아키텍처 기반의 안정성과 확장성으로  
            고객의 서비스를 기술적으로 완성합니다.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7b5cf4] text-white font-semibold hover:opacity-95 transition"
          >
            기술 상담 요청하기 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <div className="h-10" />
    </div>
  );
}
