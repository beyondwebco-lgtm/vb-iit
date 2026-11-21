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
      <section className="bg-gradient-to-br from-[#071434] via-[#0B1F4C] to-[#143B8A] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-200 text-xs font-semibold tracking-wide">
            <span>Verified Campus Infrastructure</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl">
            Modern Academic Infrastructure & Safe Campus
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            Every learning space at Vidyarthi Bhavan IIT Academy is designed to promote sustained concentration, interactive inquiry, physical wellness, and moral character.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Purpose-Built Spaces
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F4C] tracking-tight">
              Spaces Engineered for Conceptual Growth
            </h2>
            <p className="text-slate-600 text-base">
              Explore our verified facilities supporting both academic rigor and holistic development in Narasannapeta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {institutionData.facilities.map((facility) => (
              <div
                key={facility.id}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#1D4ED8] text-white flex items-center justify-center shadow-md group-hover:bg-[#0B1F4C] transition-colors">
                    {ICON_MAP[facility.icon] || <GraduationCap className="w-8 h-8" />}
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                      {facility.category}
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0B1F4C] mt-1 group-hover:text-[#1D4ED8] transition-colors">
                      {facility.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="pt-2 border-t border-slate-200 space-y-2">
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Verified Infrastructure Features:
                    </p>
                    <ul className="space-y-1.5">
                      {facility.verifiedDetails.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] hover:text-[#0B1F4C] transition-colors"
                  >
                    <span>Schedule Campus Visit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Safety & Atmosphere */}
      <section className="py-16 bg-[#0B1F4C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-2 p-4">
            <h3 className="font-bold text-lg text-white">Disciplined & Safe Campus</h3>
            <p className="text-xs text-blue-200 leading-relaxed">
              CCTV surveillance, supervised corridors, and strict visitor verification ensure a secure learning environment for every child.
            </p>
          </div>
          <div className="space-y-2 p-4">
            <h3 className="font-bold text-lg text-white">Dedicated Math & Science Rooms</h3>
            <p className="text-xs text-blue-200 leading-relaxed">
              Equipped with analytical kits and conceptual models to support Principal-led IIT foundation classes.
            </p>
          </div>
          <div className="space-y-2 p-4">
            <h3 className="font-bold text-lg text-white">Centrally Located in Narasannapeta</h3>
            <p className="text-xs text-blue-200 leading-relaxed">
              Convenient access from major transport points across Narasannapeta and surrounding areas in Srikakulam District.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
