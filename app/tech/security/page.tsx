"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  ShieldCheck,
  Lock,
  LockKeyhole,
  KeyRound,
  Network,
  Server,
  Database,
  FileText,
  Cloud,
  Globe2,
  Eye,
  UserCheck,
  UserMinus,
  UserCog,
  Bug,
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  BadgeCheck,
  Code2,
  GitBranch,
  Clock3,
  Activity,
  ArrowRight,
  Fingerprint,
} from "lucide-react";

/**
 * CodeCanvas | Tech → Security
 * - 결제/정산/CRM/글로벌 데이터를 보호하는 보안 아키텍처 소개 페이지
 * - Data Protection / Infra & Network / Identity / Compliance 기준 설계
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
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay: 0.05 * i },
});

export default function TechSecurityPage(): JSX.Element {
  return (
    <div className={`${colors.bg} ${colors.text}`}>
      {/* ─────────────── Hero ─────────────── */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${colors.grad}`} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <motion.div {...fadeUp(0)} className="max-w-3xl flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm bg-white/70 backdrop-blur border-white/60">
              <Shield className="h-4 w-4" />
              Security & Compliance
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              CodeCanvas Security
              <span className={`block ${colors.violet}`}>
                결제 인프라를 위한 보안 중심 설계
              </span>
            </h1>

            <p className={`text-base sm:text-lg ${colors.textMuted}`}>
              CodeCanvas는 기능보다 먼저 **보안과 컴플라이언스**를 기준으로 설계합니다.
              데이터 보호, 네트워크·인프라 보안, 접근 제어, 규제 준수까지
              결제/정산/CRM/글로벌 데이터를 위한 보안 아키텍처를 제공합니다.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact?type=security"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#7b5cf4] hover:opacity-95 transition"
              >
                보안 미팅 요청 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tech/architecture"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-[#d9d0fb] bg-white hover:bg-[#f2edff] transition"
              >
                아키텍처 함께 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── Security Pillars ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          네 가지 보안 원칙
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          CodeCanvas의 모든 설계는 다음 네 가지 보안 원칙을 기준으로 검증됩니다.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 text-sm">
          {[
            {
              icon: <LockKeyhole className="h-5 w-5" />,
              title: "Data Protection",
              desc: "민감정보 암호화, 토큰화, 최소한의 데이터 보관 정책.",
            },
            {
              icon: <Network className="h-5 w-5" />,
              title: "Infra & Network",
              desc: "망 분리, WAF, 보안 그룹, VPN/전용선 기반 연동.",
            },
            {
              icon: <UserCheck className="h-5 w-5" />,
              title: "Identity & Access",
              desc: "역할 기반 접근 제어, MFA, 세분화된 권한 설계.",
            },
            {
              icon: <FileText className="h-5 w-5" />,
              title: "Compliance & Audit",
              desc: "규제준수, 감사 로그, 변경 이력 추적체계.",
            },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp(i + 1)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="p-2 rounded-xl bg-[#f2edff] text-[#7b5cf4] w-fit mb-3">
                {p.icon}
              </div>
              <h3 className="font-semibold mb-1">{p.title}</h3>
              <p className={colors.textMuted}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── Data Protection ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          데이터 보호(Data Protection)
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          결제/정산/고객 데이터는 **기본적으로 보호된 상태**에서 동작하도록 설계합니다.
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm">
          <motion.div
            {...fadeUp(1)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <Lock className="h-4 w-4 text-[#7b5cf4]" />
              암호화 & 토큰화
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>민감정보(계좌, 주민번호 등) 필수 암호화 저장</li>
              <li>전송 구간 TLS(HTTPS) 강제 적용</li>
              <li>카드정보는 직접 저장하지 않고 토큰 기반 처리</li>
              <li>KMS 기반 키 회전(Key Rotation) 정책 적용</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(2)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <Database className="h-4 w-4 text-[#7b5cf4]" />
              데이터 수명 & 보관 정책
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>업종/규제에 따른 필수 보관 기간만 유지</li>
              <li>장기 보관 데이터는 별도 암호화 아카이브</li>
              <li>데이터 마스킹 후 운영 콘솔 제공</li>
              <li>삭제/파기 로그 및 감사 내역 기록</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(3)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <Eye className="h-4 w-4 text-[#7b5cf4]" />
              조회 통제 & 마스킹
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>운영 콘솔에서 전체 정보 조회 차단</li>
              <li>필요 시 일부 필드만 Decrypt 권한 부여</li>
              <li>조회 이력 Audit Trail 저장</li>
              <li>실수/오남용 방지를 위한 재인증 절차</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── Network & Infra Security ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          네트워크 & 인프라 보안
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          **Public / Service / Data** 영역을 분리하고, WAF·보안그룹·VPN을 통해 통신을 통제합니다.
        </p>

        <motion.div
          {...fadeUp(1)}
          className={`mt-8 rounded-3xl ${colors.card} border ${colors.border} p-6 sm:p-8`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <Globe2 className="h-4 w-4 text-[#7b5cf4]" />
                Public Layer (DMZ)
              </div>
              <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
                <li>WAF 뒤 Web / API Gateway 위치</li>
                <li>도메인·경로별 Rate-limit 정책</li>
                <li>IP 화이트리스트 기반 운영 콘솔 접근</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 font-semibold">
                <Server className="h-4 w-4 text-[#7b5cf4]" />
                Service Layer
              </div>
              <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
                <li>도메인별 마이크로 서비스 분리</li>
                <li>Private Subnet 기반 내부 통신</li>
                <li>PG/은행/3rd-party는 VPN/전용선 연동</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 font-semibold">
                <Database className="h-4 w-4 text-[#7b5cf4]" />
                Data & Storage Layer
              </div>
              <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
                <li>DB는 인터넷 비공개, Service Layer만 접근 가능</li>
                <li>정산파일/리포트용 Object Storage 분리</li>
                <li>Backup & Snapshot 전용 네트워크 구성</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {[
            {
              icon: <Shield className="h-4 w-4 text-[#7b5cf4]" />,
              title: "WAF & 방화벽",
              items: [
                "SQL Injection, XSS, L7 공격 방어 룰셋",
                "GeoIP 기반 국가별 트래픽 차단 옵션",
                "Bot/스크래핑 방지 정책",
              ],
            },

            {
              icon: <Cloud className="h-4 w-4 text-[#7b5cf4]" />,
              title: "클라우드 보안",
              items: [
                "보안 그룹·NACL 기반 최소 포트 오픈",
                "이미지/AMI 보안 패치 관리",
                "취약점 스캐닝 및 리포팅",
              ],
            },
            {
              icon: <Activity className="h-4 w-4 text-[#7b5cf4]" />,
              title: "모니터링 & 알림",
              items: [
                "접속/트래픽 이상 시 실시간 알림",
                "로그 기반 공격 패턴 분석",
                "보안 이벤트 전용 대시보드",
              ],
            },
          ].map((b, i) => (
            <motion.div
              key={b.title}
              {...fadeUp(i + 2)}
              className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
            >
              <div className="flex items-center gap-2 font-semibold">
                {b.icon}
                <span>{b.title}</span>
              </div>
              <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
                {b.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── Identity & Access ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          Identity & Access Management
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          **누가, 언제, 무엇에** 접근할 수 있는지. 역할 기반으로 명확히 정의합니다.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <motion.div
            {...fadeUp(1)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <UserCog className="h-4 w-4 text-[#7b5cf4]" />
              역할 기반 권한(RBAC)
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>운영자 / 정산 / 영업 / 개발 / 관제 등 역할 분리</li>
              <li>권한은 기능 단위가 아닌 업무 단위로 설계</li>
              <li>권한 변경/부여/회수 이력 기록</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(2)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <Fingerprint className="h-4 w-4 text-[#7b5cf4]" />
              인증 & 세션 관리
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>MFA(2단계 인증) 적용 가능</li>
              <li>세션 타임아웃 및 동시 세션 제한</li>
              <li>IP/디바이스·위험도 기반 추가 인증</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(3)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <ClipboardList className="h-4 w-4 text-[#7b5cf4]" />
              Audit Trail & 로그
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>접속/조회/변경/다운로드 전체 기록</li>
              <li>중요 작업은 별도 승인 플로우 구성</li>
              <li>감사 대응용 리포트 자동 생성</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── Secure SDLC & DevSecOps ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          Secure SDLC & DevSecOps
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          코드 작성부터 배포까지, 모든 단계에 보안을 녹인 개발 프로세스를 운영합니다.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <motion.div
            {...fadeUp(1)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <Code2 className="h-4 w-4 text-[#7b5cf4]" />
              코드 단계
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>TypeScript 기반 타입 안정성 확보</li>
              <li>Static Code Analysis / Lint 규칙 적용</li>
              <li>Secrets는 코드에 포함되지 않도록 CI에서 검사</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(2)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <GitBranch className="h-4 w-4 text-[#7b5cf4]" />
              CI/CD & 테스트
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>Pull Request 기반 코드 리뷰 필수화</li>
              <li>자동 유닛/통합 테스트 + 보안 스캔</li>
              <li>Stage 환경에서 기능·부하·보안 검증 후 Prod 배포</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(3)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <Clock3 className="h-4 w-4 text-[#7b5cf4]" />
              배포 & 롤백
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>Blue-Green / Canary 전략을 통한 점진적 배포</li>
              <li>배포 후 오류·성능 지표 모니터링</li>
              <li>이상 징후 시 자동/반자동 롤백 절차</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── Compliance & Certification ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-2xl sm:text-3xl font-bold">
          Compliance & Certification
        </motion.h2>
        <p className={`mt-2 text-sm ${colors.textMuted}`}>
          국내외 결제/금융 서비스를 전제로, 산업 표준 규격에 맞추어 설계합니다.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <motion.div
            {...fadeUp(1)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <BadgeCheck className="h-4 w-4 text-[#7b5cf4]" />
              결제/카드 보안
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>PCI DSS 레벨1 기준에 맞춘 구조</li>
              <li>카드정보는 PG/카드사 토큰 기반 처리</li>
              <li>카드 결제 로그는 비식별 정보만 보관</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(2)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <ClipboardList className="h-4 w-4 text-[#7b5cf4]" />
              정보보호 관리
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>ISMS 수준의 관리체계 반영</li>
              <li>계정/권한/로그/백업 등 관리 정책 수립</li>
              <li>정기 보안 점검 및 취약점 개선</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(3)}
            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <FileText className="h-4 w-4 text-[#7b5cf4]" />
              감사 & 리포트
            </div>
            <ul className={`mt-3 pl-5 list-disc ${colors.textMuted} space-y-1`}>
              <li>보안 이벤트 월간 리포트 제공 가능</li>
              <li>내부/외부 감사 대응자료 자동 집계</li>
              <li>이상 사건에 대한 Root Cause & 재발방지 문서화</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-3xl bg-white border border-[#e8e2fb] p-10 sm:p-14 text-center">
          <h2 className="text-3xl font-bold mb-3">
            보안부터 함께 설계하는 결제 인프라
          </h2>
          <p className={`text-sm ${colors.textMuted} mb-8`}>
            서비스 출시 이후가 아니라, 설계 단계에서부터 보안을 함께 고민합니다.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact?type=security"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7b5cf4] text-white font-semibold hover:opacity-95 transition"
            >
              보안 아키텍처 상담 <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/tech/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#d9d0fb] bg-white font-semibold text-sm hover:bg-[#f2edff] transition"
            >
              대시보드 & 관제 보기
            </Link>
          </div>
        </div>
      </section>

      <div className="h-10" />
    </div>
  );
}
