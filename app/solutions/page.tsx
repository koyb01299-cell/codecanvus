"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShoppingCart,
  Building2,
  Globe2,
  Store,
  TrendingUp,
  Users2,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  BarChart3,
  CreditCard,
  Heart,
  Shield,
  Clock3,
  Award,
  Package,
  Smartphone,
  Headphones,
  DollarSign,
  Layers,
  Rocket,
  Star,
  LineChart,
  PieChart,
  MessageSquare,
  Lock,
  Code2,
  Server,
  Workflow,
  Gift,
  RefreshCw,
  ThumbsUp,
  Lightbulb,
  TrendingDown,
  Activity,
} from "lucide-react";

/**
 * CodeCanvas | Solutions 메인 페이지
 * - 라벤더 톤 통일
 * - 4개 솔루션 카테고리 (Online/Retail/Fintech/Global)
 * - 산업별 맞춤 접근법 + 실제 사례 + 비교 매트릭스
 * - 선택형 솔루션 탐색 + ROI 시뮬레이터
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

// ============================= Solutions Categories =============================
const SOLUTIONS = [
  {
    id: "online",
    name: "온라인 커머스",
    icon: <ShoppingCart className="h-8 w-8" />,
    color: "from-[#7b5cf4] to-[#9b7cf4]",
    tagline: "이커머스의 모든 것을 하나로",
    description: "결제·재고·CRM·분석을 통합한 완전한 온라인 커머스 솔루션. 평균 결제 성공률 97%+, 재구매율 +28%.",
    perfectFor: ["이커머스", "D2C 브랜드", "소셜 커머스", "구독 서비스"],
    keyFeatures: [
      { icon: <CreditCard />, title: "멀티 PG 통합", desc: "97%+ 결제 성공률" },
      { icon: <Heart />, title: "로열티 프로그램", desc: "재구매율 +28%" },
      { icon: <MessageSquare />, title: "장바구니 회수", desc: "34% 회수율" },
      { icon: <BarChart3 />, title: "실시간 분석", desc: "즉각적 의사결정" },
    ],
    metrics: {
      paymentSuccess: "97.3%",
      retention: "+28%",
      ltv: "+53%",
      roi: "6개월 회수",
    },
    useCases: [
      "패션·뷰티 온라인몰",
      "식품·생필품 정기배송",
      "디지털 콘텐츠 판매",
      "크라우드펀딩 플랫폼",
    ],
  },
  {
    id: "retail",
    name: "리테일 & O2O",
    icon: <Store className="h-8 w-8" />,
    color: "from-[#9b7cf4] to-[#bb7cf4]",
    tagline: "온·오프라인을 하나의 경험으로",
    description: "매장 POS와 온라인몰을 통합. 실시간 재고 동기화, 통합 멤버십, 옴니채널 마케팅으로 고객 경험 극대화.",
    perfectFor: ["프랜차이즈", "백화점·아울렛", "편의점·슈퍼", "카페·레스토랑"],
    keyFeatures: [
      { icon: <Package />, title: "통합 재고", desc: "실시간 동기화" },
      { icon: <Users2 />, title: "통합 멤버십", desc: "온·오프 포인트 통합" },
      { icon: <Store />, title: "매장 POS", desc: "빠른 결제·정산" },
      { icon: <Target />, title: "위치 기반", desc: "근처 매장 쿠폰" },
    ],
    metrics: {
      inventory: "99.9%",
      footTraffic: "+34%",
      conversion: "+41%",
      unifiedMember: "85%",
    },
    useCases: [
      "패션 브랜드 매장",
      "카페 체인점",
      "편의점 프랜차이즈",
      "뷰티 스토어",
    ],
  },
  {
    id: "fintech",
    name: "핀테크 & 금융",
    icon: <Building2 className="h-8 w-8" />,
    color: "from-[#bb7cf4] to-[#db7cf4]",
    tagline: "금융 서비스를 더 빠르고 안전하게",
    description: "송금·지갑·대출·투자 서비스를 위한 규제 준수형 인프라. PCI DSS, ISMS 기반 설계로 보안과 컴플라이언스 보장.",
    perfectFor: ["간편결제", "디지털 뱅킹", "P2P 금융", "자산관리"],
    keyFeatures: [
      { icon: <Shield />, title: "보안 인증", desc: "PCI DSS Level 1" },
      { icon: <Lock />, title: "데이터 암호화", desc: "AES-256 기본" },
      { icon: <Activity />, title: "FDS", desc: "실시간 이상탐지" },
      { icon: <Server />, title: "고가용성", desc: "99.99% SLA" },
    ],
    metrics: {
      uptime: "99.99%",
      latency: "< 100ms",
      fraud: "-95%",
      compliance: "100%",
    },
    useCases: [
      "간편송금 서비스",
      "디지털 지갑",
      "BNPL (선구매 후결제)",
      "가상계좌 발급",
    ],
  },
  {
    id: "global",
    name: "글로벌 진출",
    icon: <Globe2 className="h-8 w-8" />,
    color: "from-[#db7cf4] to-[#fb7cf4]",
    tagline: "국경을 넘는 비즈니스 확장",
    description: "다국가 결제·통화·언어·세금 처리를 통합 지원. 현지 PG 연동과 크로스보더 정산으로 글로벌 확장 가속화.",
    perfectFor: ["크로스보더 커머스", "해외 진출 기업", "글로벌 서비스", "여행·숙박"],
    keyFeatures: [
      { icon: <Globe2 />, title: "다국가 PG", desc: "150+ 국가 지원" },
      { icon: <DollarSign />, title: "다통화", desc: "자동 환전·정산" },
      { icon: <Code2 />, title: "현지화", desc: "언어·세금 대응" },
      { icon: <Workflow />, title: "통합 대시보드", desc: "글로벌 통합 뷰" },
    ],
    metrics: {
      countries: "150+",
      currencies: "50+",
      conversionRate: "+18%",
      expansionTime: "-60%",
    },
    useCases: [
      "해외 직구몰",
      "글로벌 SaaS",
      "여행 예약 플랫폼",
      "교육 콘텐츠 판매",
    ],
  },
];

// ============================= Industry Stats =============================
const INDUSTRY_STATS = [
  {
    industry: "이커머스",
    avgGrowth: "+127%",
    adoption: "78%",
    satisfaction: "4.8/5",
    icon: <ShoppingCart className="h-5 w-5" />,
  },
  {
    industry: "리테일",
    avgGrowth: "+89%",
    adoption: "62%",
    satisfaction: "4.7/5",
    icon: <Store className="h-5 w-5" />,
  },
  {
    industry: "핀테크",
    avgGrowth: "+156%",
    adoption: "91%",
    satisfaction: "4.9/5",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    industry: "글로벌",
    avgGrowth: "+203%",
    adoption: "85%",
    satisfaction: "4.8/5",
    icon: <Globe2 className="h-5 w-5" />,
  },
];

// ============================= Comparison Matrix =============================
const COMPARISON_FEATURES = [
  { feature: "결제 인프라", online: true, retail: true, fintech: true, global: true },
  { feature: "CRM & 로열티", online: true, retail: true, fintech: "부분", global: true },
  { feature: "실시간 분석", online: true, retail: true, fintech: true, global: true },
  { feature: "재고 관리", online: true, retail: true, fintech: false, global: "부분" },
  { feature: "POS 연동", online: false, retail: true, fintech: false, global: false },
  { feature: "보안 인증", online: "PCI", retail: "PCI", fintech: "PCI+ISMS", global: "PCI" },
  { feature: "다국가 지원", online: "부분", retail: false, fintech: "부분", global: true },
  { feature: "자동화 워크플로", online: true, retail: true, fintech: true, global: true },
];

// ============================= Success Stories =============================
const SUCCESS_STORIES = [
  {
    company: "패션 브랜드 F사",
    solution: "online",
    industry: "Fashion E-commerce",
    revenue: "₩240억",
    improvement: "+127%",
    quote: "결제부터 CRM까지 통합하니 운영 효율이 3배 올랐습니다.",
  },
  {
    company: "카페 체인 C사",
    solution: "retail",
    industry: "Food & Beverage",
    revenue: "₩180억",
    improvement: "+89%",
    quote: "온·오프라인 멤버십 통합으로 재방문율이 크게 개선됐어요.",
  },
  {
    company: "간편결제 P사",
    solution: "fintech",
    industry: "Fintech Payment",
    revenue: "₩520억",
    improvement: "+156%",
    quote: "PCI 준수 인프라로 빠르게 시장에 진입할 수 있었습니다.",
  },
  {
    company: "여행 플랫폼 T사",
    solution: "global",
    industry: "Travel & Hospitality",
    revenue: "₩310억",
    improvement: "+203%",
    quote: "다국가 결제 통합으로 해외 매출이 2배 이상 증가했습니다.",
  },
];

// ============================= Benefits Overview =============================
const BENEFITS = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "빠른 도입",
    desc: "평균 2-4주면 완전한 통합 완료",
    stat: "30일",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "매출 성장",
    desc: "평균 127% 매출 증가 달성",
    stat: "+127%",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "보안 보장",
    desc: "PCI DSS, ISMS 인증 기반",
    stat: "Level 1",
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: "24/7 지원",
    desc: "전담 매니저 및 기술 지원",
    stat: "24/7",
  },
];

// ============================= Solution Selector =============================
function SolutionSelector() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const industries = [
    { id: "ecommerce", name: "이커머스", icon: <ShoppingCart className="h-5 w-5" /> },
    { id: "retail", name: "리테일·O2O", icon: <Store className="h-5 w-5" /> },
    { id: "fintech", name: "핀테크·금융", icon: <Building2 className="h-5 w-5" /> },
    { id: "global", name: "글로벌 진출", icon: <Globe2 className="h-5 w-5" /> },
  ];

  const sizes = [
    { id: "startup", name: "스타트업", desc: "< 10억" },
    { id: "growth", name: "성장기", desc: "10-100억" },
    { id: "enterprise", name: "엔터프라이즈", desc: "100억+" },
  ];

  const goals = [
    { id: "payment", name: "결제 최적화", icon: <CreditCard className="h-4 w-4" /> },
    { id: "crm", name: "고객 관리", icon: <Heart className="h-4 w-4" /> },
    { id: "analytics", name: "데이터 분석", icon: <BarChart3 className="h-4 w-4" /> },
    { id: "expansion", name: "시장 확장", icon: <Rocket className="h-4 w-4" /> },
  ];

  const getRecommendation = () => {
    if (!selectedIndustry) return null;

    const mapping: Record<string, string> = {
      ecommerce: "online",
      retail: "retail",
      fintech: "fintech",
      global: "global",
    };

    return SOLUTIONS.find(s => s.id === mapping[selectedIndustry]);
  };

  const recommendation = getRecommendation();

  return (
    <div className={`rounded-3xl ${colors.card} border ${colors.border} p-8`}>
      <div className="flex items-center gap-3 mb-8">
        <div className={`p-3 rounded-xl ${colors.violetBg} text-white`}>
          <Lightbulb className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold">솔루션 추천받기</h3>
          <p className={`text-sm ${colors.textMuted}`}>3가지 질문에 답하고 최적의 솔루션을 찾아보세요</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Industry Selection */}
        <div>
          <label className="block text-sm font-semibold mb-3">1. 귀사의 업종은?</label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`p-4 rounded-xl border-2 transition ${selectedIndustry === industry.id
                  ? "border-[#7b5cf4] bg-[#f2edff]"
                  : "border-[#ece6ff] bg-white hover:border-[#d9d0fb]"
                  }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={selectedIndustry === industry.id ? "text-[#7b5cf4]" : colors.textMuted}>
                    {industry.icon}
                  </div>
                  <span className="text-sm font-medium">{industry.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div>
          <label className="block text-sm font-semibold mb-3">2. 연 매출 규모는?</label>
          <div className="grid grid-cols-3 gap-3">
            {sizes.map((size) => (
              <button
                key={size.id}
                onClick={() => setSelectedSize(size.id)}
                className={`p-4 rounded-xl border-2 transition ${selectedSize === size.id
                  ? "border-[#7b5cf4] bg-[#f2edff]"
                  : "border-[#ece6ff] bg-white hover:border-[#d9d0fb]"
                  }`}
              >
                <div className="font-medium mb-1">{size.name}</div>
                <div className={`text-xs ${colors.textMuted}`}>{size.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Goal Selection */}
        <div>
          <label className="block text-sm font-semibold mb-3">3. 가장 중요한 목표는?</label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {goals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                className={`p-4 rounded-xl border-2 transition ${selectedGoal === goal.id
                  ? "border-[#7b5cf4] bg-[#f2edff]"
                  : "border-[#ece6ff] bg-white hover:border-[#d9d0fb]"
                  }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={selectedGoal === goal.id ? "text-[#7b5cf4]" : colors.textMuted}>
                    {goal.icon}
                  </div>
                  <span className="text-sm font-medium">{goal.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recommendation Result */}
        {recommendation && selectedSize && selectedGoal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-gradient-to-br from-[#7b5cf4] to-[#9b7cf4] p-8 text-white"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-white/20 backdrop-blur">
                {recommendation.icon}
              </div>
              <div className="flex-1">
                <div className="text-sm opacity-90 mb-1">추천 솔루션</div>
                <h4 className="text-2xl font-bold mb-2">{recommendation.name}</h4>
                <p className="text-sm opacity-90">{recommendation.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.entries(recommendation.metrics).slice(0, 4).map(([key, value]) => (
                <div key={key} className="rounded-xl bg-white/10 backdrop-blur p-4">
                  <div className="text-xs opacity-75 mb-1 capitalize">{key}</div>
                  <div className="text-xl font-bold">{value}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={`/solutions/${recommendation.id}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold bg-white text-[#7b5cf4] hover:bg-gray-50 transition cursor-pointer"
              >
                자세히 보기 <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`/contact?solution=${recommendation.id}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 transition cursor-pointer"
              >
                상담 신청
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ============================= Main Component =============================
export default function SolutionsPage(): JSX.Element {
  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* ============================= Hero ============================= */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <motion.div {...fadeUp(0)} className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm bg-white/70 backdrop-blur border-white/60">
              <Sparkles className="h-4 w-4" />
              Industry Solutions
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
              산업별 맞춤 솔루션으로
              <span className={`block ${colors.violet}`}>비즈니스 성장을 가속하세요</span>
            </h1>
            <p className={`mt-6 text-lg sm:text-xl ${colors.textMuted} max-w-3xl mx-auto`}>
              온라인 커머스부터 글로벌 진출까지. 각 산업의 특성과 과제를 깊이 이해한
              CodeCanvas만의 솔루션으로 빠르고 확실한 성과를 만들어보세요.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition cursor-pointer"
              >
                솔루션 둘러보기 <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#selector"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition cursor-pointer"
              >
                맞춤 추천받기 <ChevronRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================= Industry Stats ============================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRY_STATS.map((stat, i) => (
            <motion.div
              key={stat.industry}
              {...fadeUp(i)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>
                  {stat.icon}
                </div>
                <div className="font-bold">{stat.industry}</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`text-xs ${colors.textMuted}`}>평균 성장률</span>
                  <span className="text-sm font-bold text-green-600">{stat.avgGrowth}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-xs ${colors.textMuted}`}>도입률</span>
                  <span className="text-sm font-bold">{stat.adoption}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-xs ${colors.textMuted}`}>만족도</span>
                  <span className="text-sm font-bold flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {stat.satisfaction}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================= Solutions Grid ============================= */}
      <section id="solutions" className="max-w-7xl mx-auto px-6 py-16">
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            4가지 산업별 솔루션
          </h2>
          <p className={`mt-4 text-lg ${colors.textMuted}`}>
            각 산업의 특성을 반영한 최적화된 기능과 워크플로를 제공합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SOLUTIONS.map((solution, i) => (
            <motion.div
              key={solution.id}
              {...fadeUp(i)}
              className={`rounded-3xl ${colors.card} border ${colors.border} p-8 hover:shadow-2xl transition-shadow`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${solution.color} text-white mb-4`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{solution.name}</h3>
                  <p className={`text-sm font-medium ${colors.violet} mb-3`}>{solution.tagline}</p>
                  <p className={`text-sm ${colors.textMuted}`}>{solution.description}</p>
                </div>
              </div>

              {/* Perfect For */}
              <div className="mb-6">
                <div className="text-xs font-semibold mb-3 flex items-center gap-2">
                  <Target className="h-4 w-4 text-[#7b5cf4]" />
                  적합한 비즈니스
                </div>
                <div className="flex flex-wrap gap-2">
                  {solution.perfectFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-full bg-[#f2edff] px-3 py-1 text-xs font-medium text-[#7b5cf4]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {solution.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="rounded-xl border border-[#ece6ff] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-[#f2edff] text-[#7b5cf4]">
                        {React.cloneElement(
                          feature.icon as React.ReactElement,
                          { className: "h-4 w-4" }
                        )}
                      </div>
                      <div>
                        <div className="font-semibold">{feature.title}</div>
                        <div className={`text-xs ${colors.textMuted}`}>{feature.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>


              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(solution.metrics).map(([key, value], idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-[#f9f7ff] border border-[#ece6ff] p-4 text-center"
                  >
                    <div className={`text-xs ${colors.textMuted} mb-1`}>
                      {key}
                    </div>
                    <div className="text-lg font-bold">{value}</div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <a
                  href={`/solutions/${solution.id}`}
                  className="flex-1 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-[#7b5cf4] text-white hover:opacity-95 transition"
                >
                  자세히 보기 <ArrowRight className="h-4 w-4 ml-2" />
                </a>
                <a
                  href={`/contact?solution=${solution.id}`}
                  className="flex-1 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
                >
                  상담 요청
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section >

      {/* ============================= Comparison Matrix ============================= */}
      < section className="max-w-7xl mx-auto px-6 py-20" >
        <motion.div {...fadeUp(0)} className="max-w-3xl mb-12">
          <h2 className="text-3xl font-extrabold">솔루션 비교</h2>
          <p className={`mt-2 text-sm ${colors.textMuted}`}>
            네 가지 솔루션의 기능 차이를 한눈에 확인하세요.
          </p>
        </motion.div>

        <div className="overflow-x-auto rounded-2xl border border-[#e8e2fb] bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-[#f4edff]">
              <tr>
                <th className="px-4 py-3 text-left">기능</th>
                {["온라인", "리테일", "핀테크", "글로벌"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_FEATURES.map((row, i) => (
                <tr key={i} className="border-t border-[#eee6ff]">
                  <td className="px-4 py-3 font-medium">{row.feature}</td>
                  <td className="px-4 py-3">{String(row.online)}</td>
                  <td className="px-4 py-3">{String(row.retail)}</td>
                  <td className="px-4 py-3">{String(row.fintech)}</td>
                  <td className="px-4 py-3">{String(row.global)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section >

      {/* ============================= Success Stories ============================= */}
      < section className="max-w-7xl mx-auto px-6 py-20" >
        <motion.div {...fadeUp(0)} className="max-w-3xl mb-12">
          <h2 className="text-3xl font-extrabold">고객 성공 사례</h2>
          <p className={`mt-2 text-sm ${colors.textMuted}`}>
            다양한 산업의 기업들이 CodeCanvas와 함께 성장을 이루고 있습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SUCCESS_STORIES.map((story, i) => (
            <motion.div
              key={i}
              {...fadeUp(i)}
              className="rounded-3xl bg-white border border-[#e8e2fb] p-8 hover:shadow-xl transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold">{story.company}</h4>
                  <p className={`text-sm ${colors.textMuted}`}>{story.industry}</p>
                </div>
                <div className="text-lg font-bold text-green-600">{story.improvement}</div>
              </div>

              <p className={`text-sm ${colors.textMuted} mb-4`}>
                연매출 {story.revenue} 규모 기업
              </p>

              <p className="text-sm italic">“{story.quote}”</p>
            </motion.div>
          ))}
        </div>
      </section >

      {/* ============================= Benefits ============================= */}
      < section className="max-w-7xl mx-auto px-6 py-20" >
        <motion.div {...fadeUp(0)} className="max-w-3xl mb-12">
          <h2 className="text-3xl font-extrabold">왜 CodeCanvas인가?</h2>
          <p className={`mt-2 text-sm ${colors.textMuted}`}>
            빠른 도입, 강력한 기능, 검증된 보안. 모든 측면에서 가장 앞선 플랫폼입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={i}
              {...fadeUp(i)}
              className="rounded-2xl bg-white border border-[#e8e2fb] p-6 text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-[#f2edff] text-[#7b5cf4]">
                  {benefit.icon}
                </div>
              </div>
              <h4 className="font-semibold mb-1">{benefit.title}</h4>
              <p className={`text-sm ${colors.textMuted}`}>{benefit.desc}</p>
              <div className="text-lg font-bold mt-3 text-[#7b5cf4]">{benefit.stat}</div>
            </motion.div>
          ))}
        </div>
      </section >

      {/* ============================= Solution Selector ============================= */}
      < section id="selector" className="max-w-7xl mx-auto px-6 py-20" >
        <SolutionSelector />
      </section >

      {/* ============================= CTA ============================= */}
      < section className="max-w-7xl mx-auto px-6 py-24" >
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-10 sm:p-14 text-center">
          <h2 className="text-3xl font-bold mb-4">
            산업별 솔루션을 지금 바로 도입하세요
          </h2>
          <p className={`text-sm ${colors.textMuted} mb-8`}>
            2~4주 안에 온라인·리테일·핀테크·글로벌 시스템 구축이 가능합니다.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7b5cf4] text-white font-semibold hover:opacity-95 transition"
          >
            상담 신청하기 <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section >

      <div className="h-12" />
    </div >
  );
}
