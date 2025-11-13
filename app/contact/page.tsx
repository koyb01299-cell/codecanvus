"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Building2, Globe2, Phone, Send, MapPin, Clock3 } from "lucide-react";

/**
 * CodeCanvas | Contact Page
 * - 밝은 보라(Lavender) 톤 통일
 * - 기업 문의, 파트너 제휴, 채용 문의 모두 커버
 * - UX 중심의 폼 / 연락처 / 오피스 정보 / CTA 포함
 */

const colors = {
  bg: "bg-[#f9f7ff]", // 아주 연한 라벤더
  card: "bg-white",
  text: "text-[#241f3a]", // 기본 보라 텍스트
  textMuted: "text-[#5c5470]",
  violet: "text-[#7b5cf4]", // 메인 포인트
  violetBg: "bg-[#7b5cf4]",
  violetRing: "ring-[#7b5cf4]/30",
  border: "border-[#e8e2fb]",
  grad:
    "bg-[linear-gradient(90deg,rgba(123,92,244,0.12),rgba(186,163,255,0.12))]",
};

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: 0.06 * i },
});

export default function ContactPage(): JSX.Element {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 환경에선 API 연동
    setSubmitted(true);
  };

  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <motion.div {...fadeUp(0)} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm bg-white/70 backdrop-blur border-white/60">
              <MessageSquare className="h-4 w-4" />
              문의 및 파트너십
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              CodeCanvas와 함께
              <span className={`block ${colors.violet}`}>새로운 연결을 시작하세요</span>
            </h1>
            <p className={`mt-4 sm:mt-6 text-base sm:text-lg ${colors.textMuted}`}>
              기술 협력, 제휴, 채용, 투자 등 어떤 형태의 파트너십도 환영합니다.  
              아래 양식으로 문의를 남겨주세요. 가능한 한 빠르게 답변드리겠습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10">
        {/* Left: Form */}
        <motion.div {...fadeUp(0)} className={`rounded-3xl ${colors.card} border ${colors.border} p-8`}>
          <h2 className="text-2xl font-bold mb-6">문의하기</h2>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">이름</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="홍길동"
                  className="w-full rounded-xl border border-[#dcd2fa] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7b5cf4]/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">이메일</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#dcd2fa] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7b5cf4]/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">문의 유형</label>
                <input
                  name="topic"
                  value={form.topic}
                  onChange={handleChange}
                  placeholder="예: 기술 제휴, 채용 문의, IR, 기타"
                  className="w-full rounded-xl border border-[#dcd2fa] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7b5cf4]/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">메시지</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="내용을 입력해주세요."
                  className="w-full rounded-xl border border-[#dcd2fa] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7b5cf4]/30"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                <Send className="h-4 w-4" />
                보내기
              </button>
            </form>
          ) : (
            <div className="text-center py-12">
              <Mail className="h-12 w-12 mx-auto text-[#7b5cf4]" />
              <h3 className="mt-4 text-lg font-semibold">문의가 접수되었습니다.</h3>
              <p className={`mt-2 text-sm ${colors.textMuted}`}>
                담당자가 확인 후 이메일로 회신드리겠습니다.  
                CodeCanvas에 관심을 가져주셔서 감사합니다.
              </p>
            </div>
          )}
        </motion.div>

        {/* Right: Info */}
        <motion.div {...fadeUp(1)} className="space-y-5">
          <div className={`rounded-3xl ${colors.card} border ${colors.border} p-6`}>
            <h3 className="font-semibold mb-3">연락처</h3>
            <ul className={`space-y-3 text-sm ${colors.textMuted}`}>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#7b5cf4]" />
                hello@codecanvas.io
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#7b5cf4]" /> +82-2-0000-0000
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#7b5cf4]" /> 서울특별시 강남구 테헤란로 000
              </li>
              <li className="flex items-center gap-3">
                <Clock3 className="h-4 w-4 text-[#7b5cf4]" /> 월–금 10:00–18:00
              </li>
            </ul>
          </div>

          <div className={`rounded-3xl ${colors.card} border ${colors.border} p-6`}>
            <h3 className="font-semibold mb-3">파트너십 / 협력</h3>
            <p className={`text-sm ${colors.textMuted}`}>
              CodeCanvas는 기술/데이터/금융/마케팅 등 다양한 분야의  
              파트너들과 함께 성장합니다. 협력 제안을 환영합니다.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-sm rounded-xl border border-[#dcd2fa] px-3 py-1">
                <Building2 className="h-4 w-4 text-[#7b5cf4]" /> 기업 제휴
              </div>
              <div className="flex items-center gap-2 text-sm rounded-xl border border-[#dcd2fa] px-3 py-1">
                <Globe2 className="h-4 w-4 text-[#7b5cf4]" /> 해외 협력
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-8 sm:p-10 text-center">
          <motion.h3
            {...fadeUp(0)}
            className="text-xl sm:text-2xl font-bold text-[#241f3a]"
          >
            함께할 준비가 되셨나요?
          </motion.h3>
          <motion.p
            {...fadeUp(1)}
            className={`mt-3 text-sm sm:text-base ${colors.textMuted}`}
          >
            CodeCanvas는 혁신적인 결제 인프라, CRM, 데이터 플랫폼을 함께 설계할  
            파트너를 찾고 있습니다.
          </motion.p>
          <motion.button
            {...fadeUp(2)}
            className="mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
          >
            <Send className="h-4 w-4" />
            지금 문의하기
          </motion.button>
        </div>
      </section>
    </div>
  );
}
