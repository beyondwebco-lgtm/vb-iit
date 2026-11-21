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
  UserCheck: <UserCheck className="w-6 h-6 text-[#1D4ED8]" />,
  Award: <Award className="w-6 h-6 text-[#1D4ED8]" />,
  Brain: <Brain className="w-6 h-6 text-[#1D4ED8]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#1D4ED8]" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#1D4ED8]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#1D4ED8]" />,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-100/60 px-3.5 py-1 rounded-full border border-blue-200/60">
            Institutional Distinction
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F4C] tracking-tight">
            Why Choose Vidyarthi Bhavan IIT Academy?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            What sets our Narasannapeta institution apart in secondary education, competitive readiness, and character building.
          </p>
        </div>

        {/* 6 Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutionData.whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shadow-inner">
                {ICON_MAP[item.icon] || <CheckCircle2 className="w-6 h-6 text-[#1D4ED8]" />}
              </div>

              <h3 className="text-lg font-bold text-[#0B1F4C]">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
