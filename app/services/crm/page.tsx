"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users2,
  Heart,
  Gift,
  MessageSquare,
  BarChart3,
  Zap,
  Target,
  Crown,
  Sparkles,
  ChevronRight,
  Calendar,
  TrendingUp,
  Mail,
  Bell,
  Award,
  ShieldCheck,
  Layers,
  Send,
  CheckCircle2,
  Star,
} from "lucide-react";

/**
 * CodeCanvas | Services → CRM
 * - 라벤더 톤 통일
 * - CRM/멤버십/리워드/메시징 통합 플랫폼
 * - 실제 사용 시나리오 + 기능 모듈 + 성과 지표 + CTA
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

type ModuleKey = "loyalty" | "segments" | "campaigns" | "automation" | "messaging";

const MODULES = [
  { key: "loyalty" as ModuleKey, name: "로열티 & 리워드", icon: <Crown className="h-4 w-4" /> },
  { key: "segments" as ModuleKey, name: "세그먼트 타겟팅", icon: <Target className="h-4 w-4" /> },
  { key: "campaigns" as ModuleKey, name: "캠페인 관리", icon: <Sparkles className="h-4 w-4" /> },
  { key: "automation" as ModuleKey, name: "자동화 워크플로", icon: <Zap className="h-4 w-4" /> },
  { key: "messaging" as ModuleKey, name: "메시징 허브", icon: <MessageSquare className="h-4 w-4" /> },
];

const KPI = [
  { label: "평균 재방문율 개선", value: "+34%", icon: <TrendingUp className="h-5 w-5" /> },
  { label: "캠페인 참여율", value: "28.7%", icon: <Target className="h-5 w-5" /> },
  { label: "자동화 메시지 전송", value: "1.2M/월", icon: <Send className="h-5 w-5" /> },
  { label: "평균 LTV 증가", value: "+41%", icon: <Crown className="h-5 w-5" /> },
];

export default function CRMPage(): JSX.Element {
  const [activeModule, setActiveModule] = useState<ModuleKey>("loyalty");

  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <motion.div {...fadeUp(0)} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm bg-white/70 backdrop-blur border-white/60">
              <Heart className="h-4 w-4" />
              CRM & Customer Experience
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              고객과의 모든 접점을
              <span className={`block ${colors.violet}`}>하나의 플랫폼에서</span>
            </h1>
            <p className={`mt-4 sm:mt-6 text-base sm:text-lg ${colors.textMuted}`}>
              결제 데이터와 고객 행동을 실시간으로 연결하는 CRM.
              로열티, 쿠폰, 세그먼트, 자동화 메시징까지 — 더 깊은 관계, 더 높은 LTV를 만듭니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact?type=demo-crm"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition cursor-pointer"
              >
                데모 요청 <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="/services/analytics"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition cursor-pointer"
              >
                Analytics 연동 <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {KPI.map((k, i) => (
            <motion.div key={k.label} {...fadeUp(i)} className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>{k.icon}</div>
                <div className="font-semibold text-sm">{k.label}</div>
              </div>
              <div className="mt-3 text-2xl font-extrabold">{k.value}</div>
              <div className={`mt-1 text-xs ${colors.textMuted}`}>vs. CRM 도입 전</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Value Props */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold tracking-tight">
          왜 CodeCanvas CRM인가
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Layers className="h-5 w-5" />,
              title: "결제 데이터와 네이티브 통합",
              desc: "거래·정산·환불 이벤트가 실시간으로 CRM에 반영. 별도 동기화 불필요.",
            },
            {
              icon: <Target className="h-5 w-5" />,
              title: "세그먼트 기반 초개인화",
              desc: "행동·속성·거래 패턴으로 자동 분류. 1:1 메시지와 리워드 타깃팅.",
            },
            {
              icon: <Zap className="h-5 w-5" />,
              title: "노코드 자동화 워크플로",
              desc: "트리거·조건·액션을 드래그앤드롭으로 설계. 개발 없이 즉시 배포.",
            },
            {
              icon: <MessageSquare className="h-5 w-5" />,
              title: "멀티채널 메시징 허브",
              desc: "SMS·푸시·이메일·카카오·LMS를 단일 API로. 발송 이력과 성과 추적.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "개인정보 보호 & 동의 관리",
              desc: "GDPR/CCPA/국내법 고려 설계. 동의 이력과 마케팅 수신 거부 자동 반영.",
            },
            {
              icon: <BarChart3 className="h-5 w-5" />,
              title: "실시간 성과 대시보드",
              desc: "캠페인 ROI, 세그먼트 전환율, LTV 변화를 한눈에. 의사결정 가속.",
            },
          ].map((v, i) => (
            <motion.div key={v.title} {...fadeUp(i + 1)} className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white`}>{v.icon}</div>
                <h3 className="font-semibold">{v.title}</h3>
              </div>
              <p className={`mt-3 text-sm ${colors.textMuted}`}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Module Tabs */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
          핵심 모듈
        </motion.h2>

        {/* Tab Navigation */}
        <div className={`rounded-3xl ${colors.card} border ${colors.border} p-4 sm:p-6`}>
          <div className="flex flex-wrap items-center gap-2">
            {MODULES.map((m) => (
              <button
                key={m.key}
                onClick={() => setActiveModule(m.key)}
                className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm border ${
                  activeModule === m.key 
                    ? "border-[#7b5cf4] bg-[#f2edff] font-semibold" 
                    : "border-[#d9d0fb] bg-white hover:bg-[#f6f2ff]"
                }`}
              >
                {m.icon}
                {m.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeModule === "loyalty" && <LoyaltyPanel />}
          {activeModule === "segments" && <SegmentsPanel />}
          {activeModule === "campaigns" && <CampaignsPanel />}
          {activeModule === "automation" && <AutomationPanel />}
          {activeModule === "messaging" && <MessagingPanel />}
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold tracking-tight">
          실제 활용 시나리오
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              title: "온라인 쇼핑몰 — 장바구니 리마인드",
              scenario: "장바구니 추가 후 24시간 미결제 → 자동 푸시/SMS + 5% 쿠폰 발급",
              result: "전환율 +18%, 이탈 고객 28% 회수",
            },
            {
              title: "구독 서비스 — 이탈 방지",
              scenario: "30일 미사용 + 구독 만료 7일 전 → 개인화 혜택 제안 + 고객센터 연결",
              result: "재가입율 +34%, 이탈률 -22%",
            },
            {
              title: "오프라인 매장 — VIP 관리",
              scenario: "누적 구매 상위 5% → 전용 쿠폰 + 신상품 조기 오픈 알림",
              result: "VIP ARPU +45%, 재방문 주기 -8일",
            },
            {
              title: "핀테크 — 첫 거래 온보딩",
              scenario: "회원가입 후 3일 미거래 → 튜토리얼 가이드 + 소액 캐시백 인센티브",
              result: "활성화율 +52%, 첫 거래까지 시간 -40%",
            },
          ].map((u, i) => (
            <motion.div key={u.title} {...fadeUp(i)} className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}>
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-xl ${colors.violetBg} text-white mt-1`}>
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{u.title}</h3>
                  <p className={`mt-2 text-sm ${colors.textMuted}`}>
                    <b>시나리오:</b> {u.scenario}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#f2edff] px-3 py-1 text-xs font-medium text-[#7b5cf4]">
                    <Star className="h-3.5 w-3.5" />
                    {u.result}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Integration & Ecosystem */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className={`rounded-3xl ${colors.card} border ${colors.border} p-8`}>
          <motion.div {...fadeUp(0)}>
            <h3 className="text-xl sm:text-2xl font-bold">통합 & 확장성</h3>
            <p className={`mt-3 ${colors.textMuted}`}>
              CodeCanvas CRM은 결제·정산·분석·메시징이 단일 이벤트 버스로 연결됩니다.
              외부 시스템과의 연동도 REST API / Webhook으로 즉시 가능합니다.
            </p>
          </motion.div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["결제 PG", "Analytics", "메시징 게이트웨이", "ERP/POS", "광고 플랫폼", "BI 툴", "Slack/Teams", "Webhook"].map((sys, i) => (
              <motion.div
                key={sys}
                {...fadeUp(i)}
                className="rounded-xl bg-white border border-[#ece6ff] p-4 text-center text-sm font-medium hover:border-[#7b5cf4] hover:bg-[#f2edff] transition"
              >
                {sys}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">
                고객 경험의 모든 순간을 설계하세요
              </h3>
              <p className={`mt-2 ${colors.textMuted}`}>
                CodeCanvas CRM으로 첫 접점부터 장기 로열티까지, 데이터 기반의 관계를 만듭니다.
                지금 데모를 신청하고 14일 무료 트라이얼을 시작하세요.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact?type=demo-crm"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition cursor-pointer"
              >
                <Mail className="h-4 w-4" />
                데모 신청
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition cursor-pointer"
              >
                서비스 개요
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========================== Module Panels ========================== */

function LoyaltyPanel() {
  return (
    <motion.div {...fadeUp(0)} className={`rounded-3xl bg-white border border-[#e8e2fb] p-6 sm:p-8`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-xl bg-[#7b5cf4] text-white">
          <Crown className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-bold">로열티 & 리워드 엔진</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-3">주요 기능</h4>
          <ul className="space-y-2 text-sm text-[#5c5470]">
            <li className="flex items-start gap-2">
              <Gift className="h-4 w-4 text-[#7b5cf4] mt-0.5 flex-shrink-0" />
              <span>포인트·스탬프·쿠폰·멤버십 등급 통합 관리</span>
            </li>
            <li className="flex items-start gap-2">
              <Award className="h-4 w-4 text-[#7b5cf4] mt-0.5 flex-shrink-0" />
              <span>거래 금액/빈도 기반 자동 적립·승급 룰</span>
            </li>
            <li className="flex items-start gap-2">
              <Calendar className="h-4 w-4 text-[#7b5cf4] mt-0.5 flex-shrink-0" />
              <span>유효기간·소멸 예정 알림 자동화</span>
            </li>
            <li className="flex items-start gap-2">
              <Target className="h-4 w-4 text-[#7b5cf4] mt-0.5 flex-shrink-0" />
              <span>세그먼트별 차등 혜택 (VIP 전용 쿠폰 등)</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[#ece6ff] p-5">
          <div className="font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#7b5cf4]" />
            실제 효과
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-[#5c5470]">재방문율 증가</span>
              <span className="font-bold text-[#7b5cf4]">+41%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#5c5470]">객단가 상승</span>
              <span className="font-bold text-[#7b5cf4]">+28%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#5c5470]">쿠폰 전환율</span>
              <span className="font-bold text-[#7b5cf4]">34.2%</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SegmentsPanel() {
  return (
    <motion.div {...fadeUp(0)} className={`rounded-3xl bg-white border border-[#e8e2fb] p-6 sm:p-8`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-xl bg-[#7b5cf4] text-white">
          <Target className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-bold">세그먼트 타겟팅</h3>
      </div>

      <p className="text-sm text-[#5c5470] mb-6">
        고객을 행동·속성·거래 패턴으로 자동 분류하고, 각 그룹에 최적화된 메시지와 혜택을 전달합니다.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { name: "신규 가입 7일", size: "5,320명", conversion: "22%" },
          { name: "VIP 상위 10%", size: "1,240명", conversion: "38%" },
          { name: "90일 이탈 위험", size: "2,890명", conversion: "12%" },
        ].map((seg) => (
          <div key={seg.name} className="rounded-2xl border border-[#ece6ff] p-4">
            <div className="font-semibold text-sm mb-2">{seg.name}</div>
            <div className="text-xs text-[#5c5470] space-y-1">
              <div>규모: {seg.size}</div>
              <div>전환율: {seg.conversion}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function CampaignsPanel() {
  return (
    <motion.div {...fadeUp(0)} className={`rounded-3xl bg-white border border-[#e8e2fb] p-6 sm:p-8`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-xl bg-[#7b5cf4] text-white">
          <Sparkles className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-bold">캠페인 관리</h3>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-[#5c5470]">
          세그먼트·일정·메시지·혜택을 하나의 캠페인으로 묶어 실행. A/B 테스트와 성과 추적이 자동화됩니다.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-[#ece6ff] p-5">
            <h4 className="font-semibold mb-3">캠페인 타입</h4>
            <ul className="space-y-2 text-sm text-[#5c5470]">
              <li>• 프로모션 (할인·쿠폰·포인트 2배)</li>
              <li>• 온보딩 (신규 고객 환영 시퀀스)</li>
              <li>• 재활성화 (휴면 고객 회수)</li>
              <li>• 이벤트 (출시·시즌·기념일)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#ece6ff] p-5">
            <h4 className="font-semibold mb-3">성과 지표</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#5c5470]">오픈율</span>
                <span className="font-bold">42.3%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#5c5470]">클릭율</span>
                <span className="font-bold">18.7%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#5c5470]">전환율</span>
                <span className="font-bold">8.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AutomationPanel() {
  return (
    <motion.div {...fadeUp(0)} className={`rounded-3xl bg-white border border-[#e8e2fb] p-6 sm:p-8`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-xl bg-[#7b5cf4] text-white">
          <Zap className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-bold">자동화 워크플로</h3>
      </div>

      <p className="text-sm text-[#5c5470] mb-6">
        트리거(이벤트) → 조건(필터) → 액션(메시지/혜택)을 노코드로 설계. 실시간 반응형 마케팅을 구현합니다.
      </p>

      <div className="rounded-2xl border border-[#ece6ff] p-5">
        <h4 className="font-semibold mb-4">워크플로 예시: 장바구니 리마인드</h4>
        <div className="space-y-3">
          {[
            { step: "트리거", desc: "장바구니 추가 후 24시간 미결제" },
            { step: "조건", desc: "첫 구매 고객 + 이메일 수신 동의" },
            { step: "액션 1", desc: "이메일 발송 (상품 이미지 + 5% 쿠폰)" },
            { step: "대기", desc: "48시간" },
            { step: "조건", desc: "여전히 미결제" },
            { step: "액션 2", desc: "SMS 발송 (마지막 리마인드 + 10% 쿠폰)" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#f2edff] flex items-center justify-center text-xs font-bold text-[#7b5cf4] flex-shrink-0">
                {i + 1}
              </div>
              <div>
                <div className="font-semibold text-sm">{item.step}</div>
                <div className="text-xs text-[#5c5470]">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MessagingPanel() {
  return (
    <motion.div {...fadeUp(0)} className={`rounded-3xl bg-white border border-[#e8e2fb] p-6 sm:p-8`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-xl bg-[#7b5cf4] text-white">
          <MessageSquare className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-bold">멀티채널 메시징 허브</h3>
      </div>

      <p className="text-sm text-[#5c5470] mb-6">
        SMS, 푸시, 이메일, 카카오 알림톡, LMS를 단일 API로 발송. 채널별 성과를 비교하고 최적 믹스를 찾습니다.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-3">지원 채널</h4>
          <div className="space-y-2">
            {[
              { channel: "SMS/LMS", icon: <MessageSquare className="h-4 w-4" />, rate: "98% 도달률" },
              { channel: "푸시 알림", icon: <Bell className="h-4 w-4" />, rate: "74% 오픈율" },
              { channel: "이메일", icon: <Mail className="h-4 w-4" />, rate: "42% 오픈율" },
              { channel: "카카오 알림톡", icon: <MessageSquare className="h-4 w-4" />, rate: "89% 오픈율" },
            ].map((ch) => (
              <div key={ch.channel} className="flex items-center justify-between p-3 rounded-xl border border-[#ece6ff]">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#f2edff] text-[#7b5cf4]">
                    {ch.icon}
                  </div>
                  <span className="text-sm font-medium">{ch.channel}</span>
                </div>
                <span className="text-xs text-[#5c5470]">{ch.rate}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#ece6ff] p-5">
          <h4 className="font-semibold mb-3">스마트 발송 최적화</h4>
          <ul className="space-y-2 text-sm text-[#5c5470]">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#7b5cf4] mt-0.5 flex-shrink-0" />
              <span>개인별 최적 발송 시간대 자동 학습</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#7b5cf4] mt-0.5 flex-shrink-0" />
              <span>채널 우선순위 자동 조정 (비용·도달률)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#7b5cf4] mt-0.5 flex-shrink-0" />
              <span>발송 빈도 제한 (피로도 관리)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#7b5cf4] mt-0.5 flex-shrink-0" />
              <span>수신 거부·동의 상태 자동 반영</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}