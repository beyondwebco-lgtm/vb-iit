import React from "react";
import {
  UserCheck,
  Award,
  Brain,
  Cpu,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { institutionData } from "@/data/institutionData";

const ICON_MAP: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-6 h-6 text-[#2563EB]" />,
  Award: <Award className="w-6 h-6 text-[#2563EB]" />,
  Brain: <Brain className="w-6 h-6 text-[#2563EB]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#2563EB]" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#2563EB]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#2563EB]" />,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2563EB] bg-[#F5F8FF] border border-[#E3EAF7] px-3.5 py-1 rounded-full">
            Institutional Distinction
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1B3D] tracking-tight">
            Why Choose Vidyarthi Bhavan IIT Academy?
          </h2>
          <p className="text-[#5B6B8C] text-base sm:text-lg">
            What sets our Narasannapeta institution apart in secondary education, competitive readiness, and character building.
          </p>
        </div>

        {/* 6 Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutionData.whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="bg-[#F5F8FF] rounded-2xl p-6 border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] hover:-translate-y-0.5 transition-all duration-300 space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E3EAF7] flex items-center justify-center shadow-[0_2px_8px_rgba(37,99,235,0.08)]">
                {ICON_MAP[item.icon] || <CheckCircle2 className="w-6 h-6 text-[#2563EB]" />}
              </div>

              <h3 className="text-lg font-bold text-[#0A1B3D]">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
