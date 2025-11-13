"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  CreditCard,
  Users2,
  BarChart3,
  Zap,
  Globe2,
  ShieldCheck,
  Code2,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Target,
  Rocket,
  Award,
  Lock,
  Clock3,
  Server,
  MessageSquare,
  Gift,
  PieChart,
  Database,
  Workflow,
  Box,
  Network,
  FileCode2,
  Webhook,
  Crown,
} from "lucide-react";

/**
 * CodeCanvas | Services 메인 페이지
 * - 라벤더 톤 통일
 * - 서비스 전체 개요 + 4개 카테고리 상세 섹션
 * - Payment Infra / CRM / Analytics / APIs
 * - 실제 수치, 비교표, 사용 사례, 기술 스택 포함
 */

const colors = {
  bg: "bg-[#f9f7ff]",
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

// ============================= KPI & Stats =============================
const PLATFORM_STATS = [
  { label: "연간 처리 거래액", value: "₩1조+", icon: <TrendingUp className="h-5 w-5" />, growth: "+127% YoY" },
  { label: "API 월간 호출", value: "420M+", icon: <Zap className="h-5 w-5" />, growth: "99.97% uptime" },
  { label: "활성 가맹점", value: "40,000+", icon: <Users2 className="h-5 w-5" />, growth: "+52% YoY" },
  { label: "평균 승인 응답", value: "< 200ms", icon: <Clock3 className="h-5 w-5" />, growth: "p95 < 350ms" },
];

// ============================= Service Categories =============================
const SERVICE_CATEGORIES = [
  {
    id: "payinfra",
    name: "Payment Infrastructure",
    tagline: "결제·정산의 모든 것을 하나로",
    icon: <CreditCard className="h-6 w-6" />,
    color: "bg-[#7b5cf4]",
    features: [
      { icon: <CreditCard />, title: "멀티 PG 통합", desc: "카드·계좌·간편결제·해외 PG 단일 API" },
      { icon: <Database />, title: "자동 정산", desc: "T+1/T+2 정산, 수수료 계산, 리포트" },
      { icon: <Lock />, title: "토큰화·보안", desc: "카드번호 토큰화, PCI DSS 준수" },
      { icon: <Workflow />, title: "재시도·복구", desc: "결제 실패 자동 재시도, Dead Letter Queue" },
    ],
    useCases: [
      "이커머스 멀티 결제 수단 통합",
      "구독 서비스 자동 정기결제",
      "O2O 오프라인 POS 연동",
      "크로스보더 해외 결제 처리",
    ],
    metrics: { uptime: "99.97%", latency: "< 200ms", tps: "5,000+" },
  },
  {
    id: "crm",
    name: "CRM & Loyalty",
    tagline: "고객 관계를 데이터로 설계",
    icon: <Users2 className="h-6 w-6" />,
    color: "bg-[#9b7cf4]",
    features: [
      { icon: <Crown />, title: "로열티 엔진", desc: "포인트·쿠폰·멤버십 통합 관리" },
      { icon: <Target />, title: "세그먼트", desc: "행동·속성 기반 자동 분류" },
      { icon: <MessageSquare />, title: "메시징 허브", desc: "SMS·푸시·이메일·카카오 단일 API" },
      { icon: <Zap />, title: "자동화", desc: "노코드 워크플로, 트리거→액션" },
    ],
    useCases: [
      "VIP 고객 차등 혜택 자동 지급",
      "장바구니 이탈 자동 리마인드",
      "휴면 고객 재활성화 캠페인",
      "첫 구매 고객 온보딩 시퀀스",
    ],
    metrics: { retention: "+34%", conversion: "28.7%", ltv: "+41%" },
  },
  {
    id: "analytics",
    name: "Analytics & Data",
    tagline: "측정·이해·가속의 선순환",
    icon: <BarChart3 className="h-6 w-6" />,
    color: "bg-[#bb7cf4]",
    features: [
      { icon: <PieChart />, title: "세그먼트 분석", desc: "코호트·퍼널·LTV·어트리뷰션" },
      { icon: <TrendingUp />, title: "실시간 대시보드", desc: "결제·CRM·메시징 통합 지표" },
      { icon: <Target />, title: "예측 모델", desc: "이탈 위험·LTV 예측·이상탐지" },
      { icon: <Database />, title: "데이터 파이프라인", desc: "이벤트 버스, ETL, 데이터 웨어하우스" },
    ],
    useCases: [
      "세그먼트별 캠페인 ROI 분석",
      "결제 성공률 실시간 모니터링",
      "고객 이탈 위험 조기 탐지",
      "LTV 기반 마케팅 예산 최적화",
    ],
    metrics: { events: "50M+/day", latency: "< 5sec", accuracy: "92%+" },
  },
  {
    id: "apis",
    name: "APIs & Integration",
    tagline: "확장 가능한 개발자 경험",
    icon: <Code2 className="h-6 w-6" />,
    color: "bg-[#db7cf4]",
    features: [
      { icon: <FileCode2 />, title: "RESTful API", desc: "명확한 엔드포인트, OpenAPI 스펙" },
      { icon: <Webhook />, title: "Webhook", desc: "실시간 이벤트 푸시, 재시도 보장" },
      { icon: <Box />, title: "SDK·CLI", desc: "Node·PHP·Python SDK, CLI 툴" },
      { icon: <Network />, title: "GraphQL", desc: "유연한 데이터 쿼리 (선택적)" },
    ],
    useCases: [
      "백오피스 결제 모듈 통합",
      "모바일 앱 SDK 빠른 연동",
      "서버리스 환경 Webhook 처리",
      "레거시 시스템 점진적 마이그레이션",
    ],
    metrics: { docs: "2,000+ pages", sdk: "5 languages", support: "24/7" },
  },
];

// ============================= Comparison Table Data =============================
const COMPARISON_FEATURES = [
  { feature: "통합 결제 게이트웨이", codecanvas: true, competitor: "부분" },
  { feature: "자동 정산·수수료 계산", codecanvas: true, competitor: false },
  { feature: "CRM·로열티 네이티브 연동", codecanvas: true, competitor: false },
  { feature: "실시간 Analytics 대시보드", codecanvas: true, competitor: "부분" },
  { feature: "노코드 자동화 워크플로", codecanvas: true, competitor: false },
  { feature: "멀티채널 메시징 허브", codecanvas: true, competitor: false },
  { feature: "토큰화·PCI 준수 보안", codecanvas: true, competitor: true },
  { feature: "개발자 친화 API/SDK", codecanvas: true, competitor: true },
  { feature: "24/7 기술 지원", codecanvas: true, competitor: "유료" },
];

// ============================= Tech Stack =============================
const TECH_STACK = [
  { category: "Backend", items: ["Node.js", "PHP", "Python", "Go"] },
  { category: "Infrastructure", items: ["Kubernetes", "Docker", "AWS/GCP", "Terraform"] },
  { category: "Data", items: ["PostgreSQL", "Redis", "Kafka", "ClickHouse"] },
  { category: "Monitoring", items: ["Prometheus", "Grafana", "Loki", "Jaeger"] },
];

export default function ServicesPage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* ============================= Hero ============================= */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <motion.div {...fadeUp(0)} className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm bg-white/70 backdrop-blur border-white/60">
              <Layers className="h-4 w-4" />
              All-in-One Platform
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
              결제부터 고객 경험까지
              <span className={`block ${colors.violet}`}>하나의 플랫폼에서</span>
            </h1>
            <p className={`mt-6 text-lg sm:text-xl ${colors.textMuted} max-w-3xl mx-auto`}>
              CodeCanvas는 Payment Infrastructure, CRM & Loyalty, Analytics, APIs를 
              단일 이벤트 버스로 연결합니다. 더 적은 도구로 더 빠른 성장을.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/contact?type=demo"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition cursor-pointer"
              >
                무료 데모 신청 <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/tech/architecture"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition cursor-pointer"
              >
                아키텍처 보기 <ChevronRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================= Platform Stats ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLATFORM_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeUp(i)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>
                  {stat.icon}
                </div>
                <div className="text-sm font-medium">{stat.label}</div>
              </div>
              <div className="text-3xl font-extrabold">{stat.value}</div>
              <div className={`mt-2 text-xs ${colors.textMuted}`}>{stat.growth}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================= Service Categories Grid ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            4가지 핵심 서비스
          </h2>
          <p className={`mt-4 text-lg ${colors.textMuted}`}>
            각 서비스는 독립적으로 사용하거나, 통합하여 시너지를 극대화할 수 있습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICE_CATEGORIES.map((service, i) => (
            <motion.div
              key={service.id}
              {...fadeUp(i)}
              className={`rounded-3xl ${colors.card} border ${colors.border} p-8 hover:shadow-xl transition-shadow cursor-pointer`}
              onClick={() => setSelectedCategory(service.id)}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className={`inline-flex p-3 rounded-2xl ${service.color} text-white mb-3`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.name}</h3>
                  <p className={`mt-2 text-sm ${colors.textMuted}`}>{service.tagline}</p>
                </div>
                <ChevronRight className={`h-6 w-6 ${colors.violet}`} />
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {service.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-[#f2edff] text-[#7b5cf4] flex-shrink-0">
                      {React.cloneElement(f.icon as React.ReactElement, { className: "h-4 w-4" })}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{f.title}</div>
                      <div className={`text-xs ${colors.textMuted} mt-0.5`}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="rounded-2xl border border-[#ece6ff] p-4 bg-[#fbfaff]">
                <div className="text-xs font-semibold mb-2 flex items-center gap-2">
                  <Award className="h-3.5 w-3.5 text-[#7b5cf4]" />
                  주요 지표
                </div>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  {Object.entries(service.metrics).map(([key, value]) => (
                    <div key={key}>
                      <div className={`${colors.textMuted} capitalize`}>{key}</div>
                      <div className="font-bold text-sm mt-0.5">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 flex gap-3">
                <a
                  href={`/services/${service.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  자세히 보기 <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`/contact?service=${service.id}`}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  문의
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================= Use Cases ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            실제 활용 사례
          </h2>
          <p className={`mt-4 text-lg ${colors.textMuted}`}>
            업종과 규모에 관계없이, CodeCanvas는 비즈니스 성장을 가속합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {SERVICE_CATEGORIES.map((service, i) => (
            <motion.div
              key={service.id}
              {...fadeUp(i)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className={`inline-flex p-2 rounded-xl ${service.color} text-white mb-4`}>
                {service.icon}
              </div>
              <h4 className="font-bold mb-4">{service.name}</h4>
              <ul className="space-y-2.5">
                {service.useCases.map((useCase, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#7b5cf4] flex-shrink-0 mt-0.5" />
                    <span className={colors.textMuted}>{useCase}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================= Comparison Table ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            CodeCanvas vs. 기존 솔루션
          </h2>
          <p className={`mt-4 text-lg ${colors.textMuted}`}>
            여러 도구를 따로 사용하는 대신, 하나의 플랫폼으로 통합하세요.
          </p>
        </motion.div>

        <div className={`rounded-3xl ${colors.card} border ${colors.border} p-6 sm:p-8 overflow-x-auto`}>
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-[#e8e2fb]">
                <th className="text-left py-4 px-4 font-semibold">기능</th>
                <th className="text-center py-4 px-4 font-semibold">
                  <div className="inline-flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-[#7b5cf4]" />
                    CodeCanvas
                  </div>
                </th>
                <th className="text-center py-4 px-4 font-semibold text-[#5c5470]">
                  일반 경쟁사
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_FEATURES.map((row, i) => (
                <motion.tr
                  key={i}
                  {...fadeUp(i * 0.5)}
                  className="border-b border-[#ece6ff] last:border-0"
                >
                  <td className="py-4 px-4 text-sm">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {row.codecanvas === true ? (
                      <CheckCircle2 className="h-5 w-5 text-[#7b5cf4] mx-auto" />
                    ) : (
                      <span className="text-xs text-[#5c5470]">{row.codecanvas}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.competitor === true ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                    ) : row.competitor === false ? (
                      <div className="h-5 w-5 mx-auto rounded-full border-2 border-gray-300" />
                    ) : (
                      <span className="text-xs text-[#5c5470]">{row.competitor}</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ============================= Tech Stack ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            검증된 기술 스택
          </h2>
          <p className={`mt-4 text-lg ${colors.textMuted}`}>
            엔터프라이즈급 안정성과 확장성을 위한 모던 아키텍처
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((stack, i) => (
            <motion.div
              key={stack.category}
              {...fadeUp(i)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Server className="h-5 w-5 text-[#7b5cf4]" />
                <h4 className="font-bold">{stack.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-[#f2edff] px-3 py-1 text-xs font-medium text-[#7b5cf4]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================= Integration Ecosystem ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className={`rounded-3xl ${colors.card} border ${colors.border} p-8 sm:p-12`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f2edff] px-4 py-1.5 text-sm font-medium text-[#7b5cf4] mb-4">
                <Network className="h-4 w-4" />
                통합 생태계
              </div>
              <h3 className="text-3xl font-bold mb-4">
                기존 시스템과 즉시 연동
              </h3>
              <p className={`text-lg ${colors.textMuted} mb-6`}>
                REST API, Webhook, SDK를 통해 ERP, POS, 광고 플랫폼, BI 툴 등
                어떤 시스템과도 쉽게 통합할 수 있습니다.
              </p>
              <ul className="space-y-3">
                {[
                  "5개 언어 SDK (Node, PHP, Python, Ruby, Go)",
                  "OpenAPI 3.0 스펙 문서",
                  "Webhook 자동 재시도 & 검증",
                  "Sandbox 환경 무료 제공",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7b5cf4] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <a
                  href="/services/apis"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition cursor-pointer"
                >
                  API 문서 보기 <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/tech/dashboard"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition cursor-pointer"
                >
                  대시보드 예시
                </a>
              </div>
            </motion.div>

            <motion.div {...fadeUp(1)} className="grid grid-cols-3 gap-4">
              {[
                "Shopify", "WooCommerce", "Magento",
                "SAP", "Oracle", "Salesforce",
                "Google Ads", "Meta Ads", "Naver",
                "Slack", "Teams", "Jira",
                "Tableau", "Looker", "Metabase",
                "AWS", "GCP", "Azure",
              ].map((partner, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl border border-[#ece6ff] bg-white flex items-center justify-center p-4 hover:border-[#7b5cf4] hover:shadow-md transition text-xs font-medium text-center"
                >
                  {partner}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================= Pricing Teaser ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            투명하고 유연한 가격 정책
          </h2>
          <p className={`mt-4 text-lg ${colors.textMuted}`}>
            사용한 만큼만 지불. 숨겨진 비용 없음. 볼륨 할인 제공.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: "무료",
              desc: "스타트업과 프로토타입에 최적",
              features: ["월 1,000 트랜잭션", "기본 API 액세스", "이메일 지원", "샌드박스 환경"],
            },
            {
              name: "Growth",
              price: "₩99,000/월",
              desc: "성장하는 비즈니스를 위한 완전한 기능",
              features: ["월 10,000 트랜잭션", "모든 API & SDK", "CRM & Analytics 포함", "우선 지원"],
              highlight: true,
            },
            {
              name: "Enterprise",
              price: "커스텀",
              desc: "대규모 운영과 맞춤 요구사항",
              features: ["무제한 트랜잭션", "전담 계정 매니저", "SLA 보장", "온프레미스 옵션"],
            },
          ].map((plan, i) => (
            <motion.div
              key={plan.name}
              {...fadeUp(i)}
              className={`rounded-3xl border p-8 ${
                plan.highlight
                  ? "border-[#7b5cf4] bg-[#f2edff] shadow-xl"
                  : `${colors.card} ${colors.border}`
              }`}
            >
              {plan.highlight && (
                <div className="inline-flex items-center gap-1 rounded-full bg-[#7b5cf4] text-white px-3 py-1 text-xs font-bold mb-4">
                  <Rocket className="h-3 w-3" />
                  인기
                </div>
              )}
              <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
              <div className="text-3xl font-extrabold mb-2">{plan.price}</div>
              <p className={`text-sm ${colors.textMuted} mb-6`}>{plan.desc}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#7b5cf4] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`/contact?plan=${plan.name.toLowerCase()}`}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition cursor-pointer ${
                  plan.highlight
                    ? "bg-[#7b5cf4] text-white hover:opacity-95"
                    : "border border-[#d9d0fb] bg-white hover:bg-[#f2edff]"
                }`}
              >
                {plan.name === "Enterprise" ? "영업팀 문의" : "시작하기"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(3)} className="text-center mt-12">
          <p className={`text-sm ${colors.textMuted} mb-4`}>
            모든 플랜에는 14일 무료 체험이 포함됩니다. 신용카드 등록 불필요.
          </p>
          <a
            href="/contact?type=pricing"
            className={`inline-flex items-center gap-2 text-sm font-medium ${colors.violet} hover:underline cursor-pointer`}
          >
            상세 가격표 다운로드 <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      {/* ============================= Security & Compliance ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className={`rounded-3xl ${colors.card} border ${colors.border} p-8 sm:p-12`}>
          <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex p-4 rounded-2xl bg-[#7b5cf4] text-white mb-6">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              엔터프라이즈급 보안 & 컴플라이언스
            </h2>
            <p className={`text-lg ${colors.textMuted}`}>
              금융 데이터 처리의 모든 단계에서 최고 수준의 보안을 보장합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Lock />,
                title: "PCI DSS Level 1",
                desc: "카드 데이터 보안 최고 등급 인증",
              },
              {
                icon: <ShieldCheck />,
                title: "ISMS 인증",
                desc: "정보보호 관리체계 국내 인증",
              },
              {
                icon: <Server />,
                title: "데이터 암호화",
                desc: "전송·저장 시 AES-256 암호화",
              },
              {
                icon: <Award />,
                title: "SOC 2 Type II",
                desc: "운영 보안·가용성·기밀성 검증",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i)}
                className="rounded-2xl border border-[#ece6ff] p-6 bg-white"
              >
                <div className="p-3 rounded-xl bg-[#f2edff] text-[#7b5cf4] inline-flex mb-4">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "h-6 w-6" })}
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className={`text-sm ${colors.textMuted}`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(4)} className="mt-10 text-center">
            <a
              href="/tech/security"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition cursor-pointer"
            >
              보안 백서 보기 <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================= Customer Success Stories ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            고객 성공 사례
          </h2>
          <p className={`mt-4 text-lg ${colors.textMuted}`}>
            다양한 산업군에서 CodeCanvas로 성과를 만들어가고 있습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              company: "패션 이커머스 A사",
              industry: "Retail",
              result: "전환율 +47%, 재방문 +38%",
              quote: "결제부터 쿠폰, 리워드까지 하나로 통합하니 운영이 정말 간편해졌어요.",
              metrics: { revenue: "+127%", ltv: "+62%" },
            },
            {
              company: "구독 서비스 B사",
              industry: "SaaS",
              result: "이탈률 -34%, LTV +89%",
              quote: "자동화 워크플로로 휴면 고객을 효과적으로 재활성화할 수 있었습니다.",
              metrics: { churn: "-34%", retention: "+52%" },
            },
            {
              company: "O2O 플랫폼 C사",
              industry: "Marketplace",
              result: "정산 시간 90% 단축",
              quote: "수백 개 가맹점 정산이 자동화되면서 CS 리소스를 절반으로 줄였어요.",
              metrics: { efficiency: "+210%", cost: "-48%" },
            },
          ].map((story, i) => (
            <motion.div
              key={story.company}
              {...fadeUp(i)}
              className={`rounded-3xl ${colors.card} border ${colors.border} p-8`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-[#f2edff]">
                  <Award className="h-5 w-5 text-[#7b5cf4]" />
                </div>
                <div>
                  <div className="font-bold">{story.company}</div>
                  <div className={`text-xs ${colors.textMuted}`}>{story.industry}</div>
                </div>
              </div>

              <div className="rounded-xl bg-[#f2edff] p-4 mb-4">
                <div className="text-sm font-bold text-[#7b5cf4] mb-2">{story.result}</div>
                <p className={`text-sm ${colors.text} italic`}>"{story.quote}"</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {Object.entries(story.metrics).map(([key, value]) => (
                  <div key={key} className="rounded-xl border border-[#ece6ff] p-3 text-center">
                    <div className={`text-xs ${colors.textMuted} capitalize mb-1`}>{key}</div>
                    <div className="text-lg font-bold">{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(3)} className="text-center mt-12">
          <a
            href="/about"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition cursor-pointer"
          >
            더 많은 사례 보기 <ChevronRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      {/* ============================= FAQ ============================= */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            자주 묻는 질문
          </h2>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              q: "기존 결제 시스템에서 마이그레이션이 어렵나요?",
              a: "전혀 그렇지 않습니다. 단계적 마이그레이션을 지원하며, 전담 팀이 데이터 이전부터 테스트까지 전 과정을 지원합니다. 평균 2-4주 내 완료됩니다.",
            },
            {
              q: "소규모 스타트업도 사용할 수 있나요?",
              a: "물론입니다! Starter 플랜은 무료이며, 월 1,000건까지 무료로 처리할 수 있습니다. 성장에 따라 플랜을 업그레이드하면 됩니다.",
            },
            {
              q: "해외 결제도 지원하나요?",
              a: "네, 글로벌 PG(Stripe, PayPal 등)와 연동되어 있으며, 다국가 통화·세금 처리를 지원합니다. 크로스보더 커머스에 최적화되어 있습니다.",
            },
            {
              q: "API 응답 속도는 어느 정도인가요?",
              a: "평균 200ms 미만, p95 기준 350ms 미만입니다. 모든 엔드포인트는 실시간 모니터링되며, SLA 99.97% 가용성을 보장합니다.",
            },
            {
              q: "데이터는 어디에 저장되나요?",
              a: "AWS Seoul 리전에 기본 저장되며, 백업은 멀티 리전에 분산됩니다. 온프레미스나 프라이빗 클라우드 배포도 Enterprise 플랜에서 가능합니다.",
            },
            {
              q: "기술 지원은 어떻게 받나요?",
              a: "이메일, Slack, 전화로 지원합니다. Growth 이상은 우선 지원, Enterprise는 전담 매니저와 24/7 핫라인이 제공됩니다.",
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.3)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <h4 className="font-bold mb-3 flex items-start gap-3">
                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${colors.violetBg} text-white text-xs font-bold flex-shrink-0`}>
                  Q
                </span>
                {faq.q}
              </h4>
              <p className={`text-sm ${colors.textMuted} pl-9`}>{faq.a}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(6)} className="text-center mt-12">
          <p className={`text-sm ${colors.textMuted} mb-4`}>
            더 궁금한 점이 있으신가요?
          </p>
          <a
            href="/contact?type=inquiry"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition cursor-pointer"
          >
            문의하기 <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      {/* ============================= Final CTA ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
        <div className="rounded-3xl bg-gradient-to-br from-[#7b5cf4] to-[#9b7cf4] p-12 sm:p-16 text-center text-white">
          <motion.div {...fadeUp(0)}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-1.5 text-sm font-medium mb-6">
              <Rocket className="h-4 w-4" />
              지금 시작하세요
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-6">
              비즈니스 성장을 가속하세요
            </h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto mb-10">
              CodeCanvas와 함께라면 결제부터 고객 경험까지, 모든 것이 간단해집니다.
              14일 무료 체험으로 직접 경험해보세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact?type=trial"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold bg-white text-[#7b5cf4] hover:bg-gray-50 transition cursor-pointer shadow-lg"
              >
                무료 체험 시작 <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/contact?type=demo"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold bg-white/10 backdrop-blur text-white border border-white/30 hover:bg-white/20 transition cursor-pointer"
              >
                데모 일정 잡기 <ChevronRight className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm opacity-75 mt-6">
              신용카드 등록 불필요 · 언제든 취소 가능 · 5분 안에 시작
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}