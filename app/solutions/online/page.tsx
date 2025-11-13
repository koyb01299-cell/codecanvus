"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Package,
  TrendingUp,
  Users2,
  Zap,
  Shield,
  BarChart3,
  CreditCard,
  Smartphone,
  Globe2,
  Award,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Target,
  Clock3,
  Sparkles,
  Heart,
  Gift,
  MessageSquare,
  LineChart,
  DollarSign,
  Percent,
  ShoppingBag,
  Truck,
  RefreshCw,
  AlertCircle,
  Lock,
  Layers,
  Code2,
  Rocket,
  Star,
  TrendingDown,
  Server,
  Workflow,
} from "lucide-react";

/**
 * CodeCanvas | Solutions → Online Commerce
 * - 라벤더 톤 통일
 * - 온라인 커머스 비즈니스를 위한 완전한 솔루션
 * - 결제·재고·CRM·분석·마케팅 통합
 * - 실제 수치, 고객 여정, 기술 스택, ROI 계산기 포함
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

// ============================= Success Metrics =============================
const SUCCESS_METRICS = [
  { 
    label: "평균 결제 성공률", 
    value: "97.3%", 
    icon: <CheckCircle2 className="h-5 w-5" />,
    change: "+3.8%p",
    desc: "vs. 단일 PG 사용"
  },
  { 
    label: "장바구니 회수율", 
    value: "34.2%", 
    icon: <ShoppingCart className="h-5 w-5" />,
    change: "+18.7%",
    desc: "자동화 메시지 활용"
  },
  { 
    label: "재구매율", 
    value: "42.8%", 
    icon: <RefreshCw className="h-5 w-5" />,
    change: "+28.3%",
    desc: "로열티 프로그램 효과"
  },
  { 
    label: "고객 LTV", 
    value: "₩287K", 
    icon: <TrendingUp className="h-5 w-5" />,
    change: "+53.2%",
    desc: "통합 CRM 활용"
  },
];

// ============================= Pain Points =============================
const PAIN_POINTS = [
  {
    icon: <AlertCircle className="h-5 w-5" />,
    title: "결제 실패로 인한 매출 손실",
    problem: "단일 PG 장애나 특정 카드사 이슈로 10-15% 거래 실패",
    solution: "멀티 PG 자동 폴백 + 실시간 모니터링으로 성공률 97%+ 달성",
  },
  {
    icon: <TrendingDown className="h-5 w-5" />,
    title: "높은 장바구니 이탈률",
    problem: "70%의 사용자가 결제 없이 이탈, 회수 방법 부재",
    solution: "자동 리마인드 메시지 + 타겟 쿠폰으로 34% 회수",
  },
  {
    icon: <Users2 className="h-5 w-5" />,
    title: "고객 데이터 분산",
    problem: "결제·재고·CS·마케팅 시스템이 따로 놀아 통합 뷰 부재",
    solution: "단일 고객 프로필로 모든 접점 데이터 통합",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "분석 리소스 부족",
    problem: "매출은 나오는데 어떤 채널·상품·세그먼트가 효과적인지 불명확",
    solution: "실시간 대시보드로 코호트·퍼널·어트리뷰션 즉시 파악",
  },
];

// ============================= Core Features =============================
const CORE_FEATURES = [
  {
    category: "결제 & 정산",
    icon: <CreditCard className="h-6 w-6" />,
    features: [
      { 
        title: "멀티 PG 통합", 
        desc: "카드·계좌·간편결제·BNPL 단일 API",
        benefit: "개발 시간 80% 절감"
      },
      { 
        title: "스마트 라우팅", 
        desc: "성공률·수수료 최적화 자동 선택",
        benefit: "수수료 연 15% 절감"
      },
      { 
        title: "자동 재시도", 
        desc: "일시적 오류 자동 재처리",
        benefit: "실패 건 50% 회복"
      },
      { 
        title: "정산 자동화", 
        desc: "T+1 자동 정산 및 리포트",
        benefit: "수작업 제로"
      },
    ],
  },
  {
    category: "고객 경험",
    icon: <Heart className="h-6 w-6" />,
    features: [
      { 
        title: "로열티 프로그램", 
        desc: "포인트·쿠폰·등급 통합 관리",
        benefit: "재구매율 +28%"
      },
      { 
        title: "개인화 추천", 
        desc: "구매 이력 기반 상품 추천",
        benefit: "객단가 +19%"
      },
      { 
        title: "장바구니 회수", 
        desc: "이탈 고객 자동 리마인드",
        benefit: "회수율 34%"
      },
      { 
        title: "멀티채널 메시징", 
        desc: "SMS·푸시·이메일·카카오 통합",
        benefit: "발송 비용 -40%"
      },
    ],
  },
  {
    category: "운영 효율",
    icon: <Zap className="h-6 w-6" />,
    features: [
      { 
        title: "주문·배송 통합", 
        desc: "실시간 재고·배송 상태 동기화",
        benefit: "CS 문의 -35%"
      },
      { 
        title: "자동화 워크플로", 
        desc: "주문 확인→발송→리뷰 요청 자동화",
        benefit: "운영 시간 70% 절감"
      },
      { 
        title: "통합 대시보드", 
        desc: "매출·재고·고객 실시간 모니터링",
        benefit: "의사결정 속도 3배"
      },
      { 
        title: "사기 탐지", 
        desc: "이상 거래 자동 차단",
        benefit: "손실 -92%"
      },
    ],
  },
  {
    category: "성장 분석",
    icon: <BarChart3 className="h-6 w-6" />,
    features: [
      { 
        title: "실시간 Analytics", 
        desc: "매출·전환율·트래픽 즉시 확인",
        benefit: "반응 속도 실시간"
      },
      { 
        title: "코호트 분석", 
        desc: "가입 주차별 리텐션 추적",
        benefit: "이탈 예측 정확도 89%"
      },
      { 
        title: "퍼널 최적화", 
        desc: "단계별 드롭 원인 분석",
        benefit: "전환율 +23%"
      },
      { 
        title: "어트리뷰션", 
        desc: "채널·캠페인별 ROI 측정",
        benefit: "광고비 효율 +47%"
      },
    ],
  },
];

// ============================= Customer Journey =============================
const CUSTOMER_JOURNEY = [
  {
    stage: "발견",
    icon: <Globe2 className="h-5 w-5" />,
    actions: ["SEO·광고 유입", "소셜 미디어 공유", "인플루언서 협업"],
    codecanvas: "어트리뷰션 추적으로 효과적인 채널 식별",
  },
  {
    stage: "탐색",
    icon: <ShoppingBag className="h-5 w-5" />,
    actions: ["상품 검색·필터링", "상세 페이지 조회", "리뷰·평점 확인"],
    codecanvas: "개인화 추천 엔진으로 구매 가능성 높은 상품 노출",
  },
  {
    stage: "장바구니",
    icon: <ShoppingCart className="h-5 w-5" />,
    actions: ["장바구니 담기", "수량 조정", "쿠폰 적용"],
    codecanvas: "실시간 재고 확인, 이탈 시 자동 리마인드",
  },
  {
    stage: "결제",
    icon: <CreditCard className="h-5 w-5" />,
    actions: ["결제 수단 선택", "배송지 입력", "최종 확인"],
    codecanvas: "멀티 PG 스마트 라우팅으로 97%+ 성공률",
  },
  {
    stage: "배송",
    icon: <Truck className="h-5 w-5" />,
    actions: ["주문 확인 알림", "배송 추적", "수령 확인"],
    codecanvas: "자동 배송 알림, CS 챗봇 지원",
  },
  {
    stage: "재구매",
    icon: <RefreshCw className="h-5 w-5" />,
    actions: ["리뷰 작성", "포인트 적립", "재방문"],
    codecanvas: "로열티 리워드, 재구매 인센티브, 개인화 캠페인",
  },
];

// ============================= Tech Stack =============================
const TECH_STACK = [
  {
    layer: "Frontend",
    tech: ["React/Next.js", "Vue.js", "Mobile SDK"],
    integration: "Drop-in UI 컴포넌트 제공",
  },
  {
    layer: "Backend",
    tech: ["REST API", "GraphQL", "Webhook"],
    integration: "Node·PHP·Python SDK",
  },
  {
    layer: "E-commerce",
    tech: ["Shopify", "WooCommerce", "Magento", "자체 개발"],
    integration: "플러그인 or API 연동",
  },
  {
    layer: "Infra",
    tech: ["AWS/GCP", "CDN", "Load Balancer"],
    integration: "99.97% SLA 보장",
  },
];

// ============================= Case Studies =============================
const CASE_STUDIES = [
  {
    company: "패션 브랜드 F사",
    category: "Fashion & Apparel",
    challenge: "단일 PG로 인한 결제 실패율 15%, 재구매율 저조",
    solution: "멀티 PG + 로열티 프로그램 + 장바구니 리마인드 통합",
    results: [
      { metric: "결제 성공률", before: "85%", after: "98%", change: "+13%p" },
      { metric: "재구매율", before: "18%", after: "41%", change: "+127%" },
      { metric: "LTV", before: "₩143K", after: "₩289K", change: "+102%" },
    ],
    quote: "결제부터 CRM까지 하나로 통합하니 운영이 정말 간편해졌어요. 특히 자동화 워크플로가 게임 체인저였습니다.",
  },
  {
    company: "뷰티 커머스 B사",
    category: "Beauty & Cosmetics",
    challenge: "높은 장바구니 이탈률, 신규 고객 재방문 유도 어려움",
    solution: "개인화 추천 + 세그먼트 타겟팅 + 자동 쿠폰 발급",
    results: [
      { metric: "장바구니 전환율", before: "22%", after: "38%", change: "+73%" },
      { metric: "7일 재방문율", before: "28%", after: "52%", change: "+86%" },
      { metric: "객단가", before: "₩47K", after: "₩68K", change: "+45%" },
    ],
    quote: "고객 세그먼트별로 다른 전략을 자동으로 실행할 수 있어서, 마케팅 효율이 3배 이상 올랐습니다.",
  },
];

// ============================= ROI Calculator =============================
function ROICalculator() {
  const [revenue, setRevenue] = useState(100);
  const [transactions, setTransactions] = useState(10000);

  const improvements = {
    paymentSuccess: 0.03,
    cartRecovery: 0.15,
    retention: 0.28,
    ltv: 0.53,
  };

  const currentRevenue = revenue;
  const newRevenue = currentRevenue * (1 + improvements.paymentSuccess + improvements.cartRecovery * 0.7 + improvements.ltv * 0.3);
  const annualGain = (newRevenue - currentRevenue) * 12;

  return (
    <div className={`rounded-3xl ${colors.card} border ${colors.border} p-8`}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-xl ${colors.violetBg} text-white`}>
          <DollarSign className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold">ROI 시뮬레이터</h3>
          <p className={`text-sm ${colors.textMuted}`}>예상 매출 증가를 계산해보세요</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">
              월 평균 매출 (단위: 백만원)
            </label>
            <input
              type="range"
              min="10"
              max="1000"
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-2xl font-bold mt-2">₩{revenue.toLocaleString()}M</div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              월 거래 건수
            </label>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={transactions}
              onChange={(e) => setTransactions(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-2xl font-bold mt-2">{transactions.toLocaleString()}건</div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#f2edff] p-6">
          <h4 className="font-bold mb-4">예상 개선 효과</h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className={colors.textMuted}>현재 월 매출</span>
                <span className="font-bold">₩{currentRevenue.toLocaleString()}M</span>
              </div>
            </div>
            <div className="border-t border-[#d9d0fb] pt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className={colors.textMuted}>개선 후 월 매출</span>
                <span className="font-bold text-[#7b5cf4]">₩{newRevenue.toFixed(0)}M</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className={colors.textMuted}>월 증가액</span>
                <span className="font-bold text-green-600">+₩{(newRevenue - currentRevenue).toFixed(0)}M</span>
              </div>
            </div>
            <div className="border-t-2 border-[#7b5cf4] pt-4">
              <div className="flex justify-between items-center">
                <span className="font-bold">연간 예상 추가 매출</span>
                <span className="text-2xl font-extrabold text-[#7b5cf4]">
                  +₩{annualGain.toFixed(0)}M
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-[#d9d0fb]">
            <div className="text-xs text-[#5c5470] space-y-1">
              <div>• 결제 성공률 +3%p 개선</div>
              <div>• 장바구니 회수율 15% 적용</div>
              <div>• LTV +53% 장기 효과 반영</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================= Main Component =============================
export default function OnlineCommercePage(): JSX.Element {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* ============================= Hero ============================= */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <motion.div {...fadeUp(0)} className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm bg-white/70 backdrop-blur border-white/60">
              <ShoppingCart className="h-4 w-4" />
              Online Commerce Solution
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
              온라인 커머스의 모든 것을
              <span className={`block ${colors.violet}`}>하나의 플랫폼으로</span>
            </h1>
            <p className={`mt-6 text-lg sm:text-xl ${colors.textMuted} max-w-3xl mx-auto`}>
              결제부터 재고, CRM, 분석까지 통합. 평균 결제 성공률 97%+, 재구매율 +28%, LTV +53%.
              성장하는 온라인 비즈니스를 위한 완전한 솔루션.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/contact?solution=online-commerce"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition cursor-pointer"
              >
                무료 컨설팅 신청 <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition cursor-pointer"
              >
                성공 사례 보기 <ChevronRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================= Success Metrics ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUCCESS_METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              {...fadeUp(i)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>
                  {metric.icon}
                </div>
                <div className="text-sm font-medium">{metric.label}</div>
              </div>
              <div className="text-3xl font-extrabold mb-1">{metric.value}</div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-600 font-semibold">{metric.change}</span>
                <span className={colors.textMuted}>{metric.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================= Pain Points & Solutions ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            온라인 커머스의 핵심 과제와 해결책
          </h2>
          <p className={`mt-4 text-lg ${colors.textMuted}`}>
            많은 온라인 비즈니스가 겪는 문제들을 CodeCanvas는 이렇게 해결합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              {...fadeUp(i)}
              className={`rounded-3xl ${colors.card} border ${colors.border} p-8`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-red-50 text-red-600">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                  <p className={`text-sm ${colors.textMuted}`}>{point.problem}</p>
                </div>
              </div>
              <div className="rounded-2xl bg-[#f2edff] p-5">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#7b5cf4] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-[#7b5cf4] mb-1">CodeCanvas 솔루션</div>
                    <div className="text-sm">{point.solution}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================= Core Features ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            온라인 커머스를 위한 4가지 핵심 기능
          </h2>
          <p className={`mt-4 text-lg ${colors.textMuted}`}>
            결제부터 고객 경험, 운영 효율, 성장 분석까지 모든 것이 하나로.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CORE_FEATURES.map((category, i) => (
            <motion.div
              key={category.category}
              {...fadeUp(i)}
              className={`rounded-3xl ${colors.card} border ${colors.border} p-8`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl ${colors.violetBg} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.features.map((feature, idx) => (
                  <div key={idx} className="rounded-2xl border border-[#ece6ff] p-5 hover:border-[#7b5cf4] transition">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-bold mb-1">{feature.title}</h4>
                        <p className={`text-sm ${colors.textMuted} mb-2`}>{feature.desc}</p>
                        <div className="inline-flex items-center gap-1 rounded-full bg-[#f2edff] px-3 py-1 text-xs font-medium text-[#7b5cf4]">
                          <TrendingUp className="h-3 w-3" />
                          {feature.benefit}
                        </div>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-[#7b5cf4] flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================= Customer Journey ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            고객 여정의 모든 순간을 최적화
          </h2>
          <p className={`mt-4 text-lg ${colors.textMuted}`}>
            발견부터 재구매까지, 각 단계에서 CodeCanvas가 어떻게 도움을 주는지 확인하세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CUSTOMER_JOURNEY.map((stage, i) => (
            <motion.div
              key={stage.stage}
              {...fadeUp(i)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>
                  {stage.icon}
                </div>
                <h4 className="font-bold">{stage.stage}</h4>
              </div>

              <div className="space-y-2 mb-4">
                {stage.actions.map((action, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <div className="w-1 h-1 rounded-full bg-[#7b5cf4] mt-2 flex-shrink-0" />
                    <span className={colors.textMuted}>{action}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-[#f2edff] p-4">
                <div className="text-xs font-semibold text-[#7b5cf4] mb-1 flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  CodeCanvas 효과
                </div>
                <p className="text-sm">{stage.codecanvas}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================= ROI Calculator ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            예상 수익 증가 계산하기
          </h2>
          <p className={`mt-4 text-lg ${colors.textMuted}`}>
            귀사의 현재 매출을 입력하고 CodeCanvas 도입 시 예상되는 효과를 확인하세요.
          </p>
        </motion.div>

        <motion.div {...fadeUp(1)}>
          <ROICalculator />
        </motion.div>

        <motion.div {...fadeUp(2)} className="mt-8 text-center">
          <p className={`text-sm ${colors.textMuted} mb-4`}>
            실제 고객사 평균 데이터를 기반으로 한 보수적 추정입니다.
          </p>
          <a
            href="/contact?type=roi-consultation"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition cursor-pointer"
          >
            맞춤 ROI 분석 요청 <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      {/* ============================= Case Studies ============================= */}
      <section id="case-studies" className="max-w-7xl mx-auto px-6 py-16">
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            실제 성공 사례
          </h2>
          <p className={`mt-4 text-lg ${colors.textMuted}`}>
            CodeCanvas와 함께 성장한 온라인 커머스 비즈니스의 이야기
          </p>
        </motion.div>

        <div className="space-y-8">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.company}
              {...fadeUp(i)}
              className={`rounded-3xl ${colors.card} border ${colors.border} p-8 sm:p-12`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
                {/* Left: Company Info */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#f2edff] px-4 py-1.5 text-sm font-medium text-[#7b5cf4] mb-4">
                    <Award className="h-4 w-4" />
                    {study.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{study.company}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-red-500" />
                        과제
                      </div>
                      <p className={`text-sm ${colors.textMuted} pl-6`}>{study.challenge}</p>
                    </div>

                    <div>
                      <div className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#7b5cf4]" />
                        솔루션
                      </div>
                      <p className={`text-sm ${colors.textMuted} pl-6`}>{study.solution}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#f2edff] p-6">
                    <div className="flex items-start gap-3">
                      <MessageSquare className="h-5 w-5 text-[#7b5cf4] flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-xs font-semibold text-[#7b5cf4] mb-2">고객 후기</div>
                        <p className="text-sm italic">"{study.quote}"</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Results */}
                <div>
                  <h4 className="text-lg font-bold mb-6">도입 후 성과</h4>
                  <div className="space-y-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="rounded-2xl border border-[#ece6ff] p-6">
                        <div className="text-sm font-semibold mb-4">{result.metric}</div>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <div className={`text-xs ${colors.textMuted} mb-1`}>도입 전</div>
                            <div className="text-xl font-bold">{result.before}</div>
                          </div>
                          <div className="flex items-center justify-center">
                            <ArrowRight className="h-6 w-6 text-[#7b5cf4]" />
                          </div>
                          <div>
                            <div className={`text-xs ${colors.textMuted} mb-1`}>도입 후</div>
                            <div className="text-xl font-bold text-[#7b5cf4]">{result.after}</div>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-[#ece6ff]">
                          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-sm font-bold text-green-600">
                            <TrendingUp className="h-4 w-4" />
                            {result.change}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(2)} className="text-center mt-12">
          <a
            href="/about"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition cursor-pointer"
          >
            더 많은 성공 사례 보기 <ChevronRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      {/* ============================= Tech Stack & Integration ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            기술 스택 & 통합
          </h2>
          <p className={`mt-4 text-lg ${colors.textMuted}`}>
            어떤 플랫폼을 사용하든, CodeCanvas는 쉽게 통합됩니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((layer, i) => (
            <motion.div
              key={layer.layer}
              {...fadeUp(i)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="h-5 w-5 text-[#7b5cf4]" />
                <h4 className="font-bold">{layer.layer}</h4>
              </div>

              <div className="space-y-2 mb-4">
                {layer.tech.map((tech, idx) => (
                  <div key={idx} className="text-sm rounded-lg bg-[#f2edff] px-3 py-2">
                    {tech}
                  </div>
                ))}
              </div>

              <div className={`text-xs ${colors.textMuted} pt-4 border-t border-[#ece6ff]`}>
                {layer.integration}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(4)} className={`mt-12 rounded-3xl ${colors.card} border ${colors.border} p-8 sm:p-12`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f2edff] px-4 py-1.5 text-sm font-medium text-[#7b5cf4] mb-4">
                <Layers className="h-4 w-4" />
                간편한 통합
              </div>
              <h3 className="text-2xl font-bold mb-4">
                30분 안에 연동 완료
              </h3>
              <p className={`text-lg ${colors.textMuted} mb-6`}>
                플러그인, REST API, SDK 중 선택. 개발자 친화적인 문서와 샘플 코드 제공.
              </p>
              <ul className="space-y-3">
                {[
                  "Shopify/WooCommerce 플러그인 원클릭 설치",
                  "REST API + Webhook으로 자체 개발 플랫폼 연동",
                  "Node·PHP·Python SDK로 빠른 개발",
                  "Sandbox 환경에서 무료 테스트",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7b5cf4] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
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
                  href="/tech/architecture"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition cursor-pointer"
                >
                  아키텍처 보기
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                "Shopify", "WooCommerce", "Magento",
                "Cafe24", "Makeshop", "자체개발",
                "AWS", "GCP", "Azure",
                "Stripe", "Toss", "KG이니시스",
                "카카오", "네이버", "Google",
                "Slack", "Jira", "Notion",
              ].map((platform, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl border border-[#ece6ff] bg-white flex items-center justify-center p-3 hover:border-[#7b5cf4] hover:shadow-md transition text-xs font-medium text-center"
                >
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ============================= Implementation Process ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            도입 프로세스
          </h2>
          <p className={`mt-4 text-lg ${colors.textMuted}`}>
            평균 2-4주면 완전한 통합이 완료됩니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              week: "Week 1",
              title: "요구사항 분석",
              tasks: ["비즈니스 목표 정의", "현재 시스템 파악", "통합 범위 결정"],
            },
            {
              week: "Week 2",
              title: "개발 & 연동",
              tasks: ["API 연동", "테스트 환경 구축", "데이터 마이그레이션"],
            },
            {
              week: "Week 3",
              title: "테스트 & 검증",
              tasks: ["기능 테스트", "성능 테스트", "보안 검증"],
            },
            {
              week: "Week 4",
              title: "런칭 & 최적화",
              tasks: ["프로덕션 배포", "모니터링 설정", "팀 교육"],
            },
            {
              week: "Week 5+",
              title: "지속 지원",
              tasks: ["성과 분석", "최적화 제안", "기능 확장"],
            },
          ].map((phase, i) => (
            <motion.div
              key={phase.week}
              {...fadeUp(i)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#7b5cf4] text-white font-bold mb-4">
                {i + 1}
              </div>
              <div className={`text-xs ${colors.textMuted} mb-1`}>{phase.week}</div>
              <h4 className="font-bold mb-4">{phase.title}</h4>
              <ul className="space-y-2">
                {phase.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#7b5cf4] flex-shrink-0 mt-0.5" />
                    <span className={colors.textMuted}>{task}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================= Pricing Preview ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            투명한 가격 정책
          </h2>
          <p className={`mt-4 text-lg ${colors.textMuted}`}>
            사용한 만큼만 지불. 숨겨진 비용 없음.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: "무료",
              desc: "스타트업과 MVP 테스트",
              features: ["월 1,000 트랜잭션", "기본 결제 수단", "이메일 지원", "14일 데이터 보관"],
            },
            {
              name: "Growth",
              price: "₩199,000/월",
              desc: "성장하는 온라인 비즈니스",
              features: ["월 20,000 트랜잭션", "모든 기능 포함", "CRM & Analytics", "우선 지원", "1년 데이터 보관"],
              highlight: true,
            },
            {
              name: "Enterprise",
              price: "커스텀",
              desc: "대규모 커머스 운영",
              features: ["무제한 트랜잭션", "전담 매니저", "SLA 99.97%", "온프레미스 옵션", "무제한 데이터"],
            },
          ].map((plan, i) => (
            <motion.div
              key={plan.name}
              {...fadeUp(i)}
              className={`rounded-3xl border p-8 ${
                plan.highlight
                  ? "border-[#7b5cf4] bg-[#f2edff] shadow-xl scale-105"
                  : `${colors.card} ${colors.border}`
              }`}
            >
              {plan.highlight && (
                <div className="inline-flex items-center gap-1 rounded-full bg-[#7b5cf4] text-white px-3 py-1 text-xs font-bold mb-4">
                  <Star className="h-3 w-3" />
                  추천
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
                href={`/contact?plan=${plan.name.toLowerCase()}&solution=online`}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition cursor-pointer ${
                  plan.highlight
                    ? "bg-[#7b5cf4] text-white hover:opacity-95"
                    : "border border-[#d9d0fb] bg-white hover:bg-[#f2edff]"
                }`}
              >
                {plan.name === "Enterprise" ? "상담 신청" : "시작하기"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(3)} className="text-center mt-12">
          <p className={`text-sm ${colors.textMuted} mb-4`}>
            모든 플랜 14일 무료 체험 · 신용카드 등록 불필요 · 언제든 취소 가능
          </p>
          <a
            href="/services"
            className={`inline-flex items-center gap-2 text-sm font-medium ${colors.violet} hover:underline cursor-pointer`}
          >
            전체 요금제 비교표 보기 <ArrowRight className="h-4 w-4" />
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
              온라인 커머스의 성장을
              <br />
              CodeCanvas와 함께
            </h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto mb-10">
              결제 성공률 97%+, 재구매율 +28%, LTV +53%.
              지금 무료 컨설팅을 신청하고 귀사만의 성장 전략을 받아보세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact?type=consultation&solution=online"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold bg-white text-[#7b5cf4] hover:bg-gray-50 transition cursor-pointer shadow-lg"
              >
                무료 컨설팅 신청 <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/contact?type=demo&solution=online"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold bg-white/10 backdrop-blur text-white border border-white/30 hover:bg-white/20 transition cursor-pointer"
              >
                데모 체험하기 <ChevronRight className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm opacity-75 mt-6">
              평균 2-4주 도입 완료 · 전담 매니저 지원 · 30일 만족 보장
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}