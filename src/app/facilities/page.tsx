import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  GraduationCap,
  FlaskConical,
  Monitor,
  Library,
  Activity,
  Users,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { institutionData } from "@/data/institutionData";

export const metadata: Metadata = {
  title: "Campus Facilities & Infrastructure",
  description:
    "Explore the classrooms, IIT foundation science labs, AI and computer center, library, and sports facilities at Vidyarthi Bhavan IIT Academy, Narasannapeta.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-8 h-8" />,
  FlaskConical: <FlaskConical className="w-8 h-8" />,
  Monitor: <Monitor className="w-8 h-8" />,
  Library: <Library className="w-8 h-8" />,
  Activity: <Activity className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
};

export default function FacilitiesPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0A1B3D] via-[#0A1B3D] to-[#1E40AF] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#38BDF8] text-xs font-semibold tracking-wide backdrop-blur-md">
              <span>Verified Campus Infrastructure</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-white text-xs font-semibold">
              <span>Complete A/C Campus</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#38BDF8] text-xs font-semibold">
              <span>First Play School in Narasannapeta</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl">
            Complete A/C Campus & Purpose-Built Infrastructure
          </h1>
          <p className="text-[#E3EAF7] text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Every learning space at Vidyarthi Bhavan IIT Academy is completely air-conditioned, climate-controlled, and acoustically balanced to promote deep concentration, interactive inquiry, physical wellness, and moral character.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#F5F8FF] border border-[#E3EAF7] px-3 py-1 rounded-full">
              Purpose-Built Spaces
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1B3D] tracking-tight">
              Spaces Engineered for Conceptual Growth
            </h2>
            <p className="text-[#5B6B8C] text-base">
              Explore our verified facilities supporting both academic rigor and holistic development in Narasannapeta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {institutionData.facilities.map((facility) => (
              <div
                key={facility.id}
                className="bg-[#F5F8FF] rounded-2xl p-7 border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#2563EB] border border-[#E3EAF7] flex items-center justify-center shadow-[0_2px_8px_rgba(37,99,235,0.08)] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                    {ICON_MAP[facility.icon] || <GraduationCap className="w-8 h-8" />}
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB]">
                      {facility.category}
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0A1B3D] mt-1 group-hover:text-[#2563EB] transition-colors duration-200">
                      {facility.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="pt-2 border-t border-[#E3EAF7] space-y-2">
                    <p className="text-xs font-bold text-[#0A1B3D] uppercase tracking-wider">
                      Verified Infrastructure Features:
                    </p>
                    <ul className="space-y-1.5">
                      {facility.verifiedDetails.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-[#0A1B3D]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-[#E3EAF7]">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#1E40AF] transition-colors duration-200"
                  >
                    <span>Schedule Campus Visit</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Safety & Atmosphere: Deep Navy Anchor */}
      <section className="py-16 bg-[#0A1B3D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
          <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold text-lg text-white">Complete A/C Campus</h3>
            <p className="text-xs text-[#E3EAF7]/80 leading-relaxed">
              100% air-conditioned classrooms providing a climate-controlled, dust-free environment for uninterrupted concentration.
            </p>
          </div>
          <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold text-lg text-white">First Play School in Town</h3>
            <p className="text-xs text-[#E3EAF7]/80 leading-relaxed">
              Pioneered early childhood education in Narasannapeta with a specialized 100% program from Delhi Publication.
            </p>
          </div>
          <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold text-lg text-white">Disciplined & Safe Campus</h3>
            <p className="text-xs text-[#E3EAF7]/80 leading-relaxed">
              CCTV surveillance, supervised corridors, and strict visitor verification ensure a secure environment for every child.
            </p>
          </div>
          <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold text-lg text-white">Dedicated STEM & Labs</h3>
            <p className="text-xs text-[#E3EAF7]/80 leading-relaxed">
              ULO Bangalore STEM coding center, analytical science kits, and Principal-led IIT foundation classrooms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
