import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, Quote } from "lucide-react";
import { institutionData } from "@/data/institutionData";

export default function LeadershipHighlight() {
  const { director, principal } = institutionData.leadership;

  return (
    <section className="py-20 lg:py-24 bg-[#F5F8FF] border-y border-[#E3EAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2563EB] bg-white border border-[#E3EAF7] px-3.5 py-1 rounded-full shadow-[0_2px_8px_rgba(37,99,235,0.06)]">
            Visionary Institutional Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1B3D] tracking-tight">
            Guiding Every Student with Purpose & Mentorship
          </h2>
          <p className="text-[#5B6B8C] text-base sm:text-lg">
            At Vidyarthi Bhavan IIT Academy, leadership is not administrative distance—it is an active commitment in the classroom and to the nation.
          </p>
        </div>

        {/* Leadership Grid: Director & Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Director Arangi Govinda Babu */}
          <div className="bg-white rounded-3xl p-8 border border-[#E3EAF7] shadow-[0_10px_30px_rgba(37,99,235,0.08)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-[#2563EB] shadow-[0_4px_14px_rgba(37,99,235,0.2)] bg-[#F5F8FF]">
                  <Image
                    src={director.image || "/images/leadership/director_arangi_govinda_babu.png"}
                    alt={director.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#F5F8FF] border border-[#E3EAF7] px-2.5 py-0.5 rounded-md">
                    {director.role}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0A1B3D] mt-1">
                    {director.name}
                  </h3>
                  <p className="text-xs text-[#5B6B8C] font-medium">
                    Vidyarthi Bhavan IIT Academy • Narasannapeta
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="p-4 rounded-2xl bg-[#F5F8FF] border-l-4 border-[#2563EB] text-[#0A1B3D] relative">
                <Quote className="w-6 h-6 text-[#38BDF8]/40 absolute right-3 top-3" />
                <p className="text-sm font-medium italic leading-relaxed text-[#0A1B3D]">
                  “{director.quote}”
                </p>
              </div>

              {/* Photo: Director at IIT Madras */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#E3EAF7] bg-[#0A1B3D]">
                <Image
                  src="/images/leadership/director_at_iit_madras.jpg"
                  alt="Founder Arangi Govinda Babu at Indian Institute of Technology Madras (IIT Madras)"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-[#0A1B3D]/85 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs font-bold border border-white/20">
                  <span>Founder at IIT Madras Campus</span>
                </div>
              </div>

              {/* Core Message Excerpt */}
              <div className="space-y-3 text-sm text-[#5B6B8C] leading-relaxed">
                <p>
                  “Education, in my vision, is not merely the process of acquiring marks, degrees or employment. It is the journey of shaping a human being with knowledge, discipline, wisdom, values, courage, compassion and a sense of responsibility towards society and our nation.”
                </p>
                <p>
                  “My vision is to bring together the best of modern education and the timeless wisdom of Indian culture. Science, mathematics, AI, and competitive learning must go hand in hand with Indian values and patriotism.”
                </p>
              </div>

              {/* Director Key Pillars */}
              <div className="pt-2">
                <p className="text-xs font-bold text-[#0A1B3D] uppercase tracking-wider mb-2.5">
                  Core Focus & Special Initiatives:
                </p>
                <div className="flex flex-wrap gap-2">
                  {director.interests.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[#F5F8FF] text-[#0A1B3D] border border-[#E3EAF7]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E3EAF7] flex items-center justify-between">
              <span className="text-xs font-bold text-[#5B6B8C]">
                Nation-Building Through Education
              </span>
              <Link
                href="/about#director-message"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2563EB] hover:text-[#1E40AF] transition-colors duration-200"
              >
                <span>Read Director's Full Message</span>
                <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
              </Link>
            </div>
          </div>

          {/* Card 2: Principal Kalepu Satish Kumar */}
          <div className="bg-white rounded-3xl p-8 border border-[#E3EAF7] shadow-[0_10px_30px_rgba(37,99,235,0.08)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0A1B3D] to-[#2563EB] text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow-[0_4px_14px_rgba(37,99,235,0.2)] border-2 border-white">
                  {principal.initials}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#F5F8FF] border border-[#E3EAF7] px-2.5 py-0.5 rounded-md">
                    Principal & Academic Head
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0A1B3D] mt-1">
                    {principal.name}
                  </h3>
                  <p className="text-xs text-[#5B6B8C] font-medium">
                    Principal & Mathematics / IIT Foundation Faculty
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="p-4 rounded-2xl bg-[#F5F8FF] border-l-4 border-[#2563EB] text-[#0A1B3D] relative">
                <Quote className="w-6 h-6 text-[#38BDF8]/40 absolute right-3 top-3" />
                <p className="text-sm font-medium italic leading-relaxed text-[#0A1B3D]">
                  “{principal.quote}”
                </p>
              </div>

              {/* Classroom Teaching Highlight */}
              <div className="p-4 rounded-2xl bg-[#F5F8FF] border border-[#E3EAF7] text-[#0A1B3D] text-xs sm:text-sm">
                <p className="font-bold flex items-center gap-2 text-[#2563EB]">
                  <GraduationCap className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  Direct Classroom Engagement
                </p>
                <p className="mt-1 text-[#5B6B8C] leading-relaxed">
                  Principal Kalepu Satish Kumar personally conducts Mathematics and IIT Foundation classes for high-school students, diagnosing learning needs directly and nurturing logical confidence.
                </p>
              </div>

              {/* Photo: Classroom Mentorship & Student Honors */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#E3EAF7] bg-[#0A1B3D]">
                <Image
                  src="/images/achievements/childrens_day_boys_awards.jpg"
                  alt="Principal and faculty mentoring students during academic honors ceremony"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-[#0A1B3D]/85 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs font-bold border border-white/20">
                  <span>Classroom Mentorship & Student Honors</span>
                </div>
              </div>

              {/* Educational Priorities Preview */}
              <div>
                <p className="text-xs font-bold text-[#0A1B3D] uppercase tracking-wider mb-2.5">
                  Principal's Educational Priorities:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {principal.priorities.slice(0, 4).map((p) => (
                    <div
                      key={p.title}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F5F8FF] border border-[#E3EAF7]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                      <span className="font-semibold text-[#0A1B3D]">{p.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E3EAF7] flex items-center justify-between">
              <span className="text-xs font-bold text-[#5B6B8C]">
                Mathematics & IIT Mentorship
              </span>
              <Link
                href="/about#principal-message"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2563EB] hover:text-[#1E40AF] transition-colors duration-200"
              >
                <span>Read Principal's Full Message</span>
                <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
