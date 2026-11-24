import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  GraduationCap,
  FlaskConical,
  Monitor,
  Library,
  Activity,
  Users,
  CheckCircle2,
  ArrowRight,
  Bus,
  Sparkles,
  Wind
} from "lucide-react";
import { institutionData } from "@/data/institutionData";

export const metadata: Metadata = {
  title: "Campus Facilities & Complete A/C Infrastructure | VB IIT Academy",
  description:
    "Explore the complete A/C campus, smart classrooms, dedicated school transport bus fleet, sports playground, and science exploration labs at Vidyarthi Bhavan IIT Academy, Narasannapeta.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-8 h-8" />,
  FlaskConical: <FlaskConical className="w-8 h-8" />,
  Monitor: <Monitor className="w-8 h-8" />,
  Library: <Library className="w-8 h-8" />,
  Activity: <Activity className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
};

const FACILITY_PHOTOS: Record<string, { image: string; alt: string; tag: string }> = {
  "smart-classrooms": {
    image: "/images/campus/independence_day_patriotism.jpg",
    alt: "Complete A/C campus and classrooms environment",
    tag: "Complete A/C Campus"
  },
  "math-science-labs": {
    image: "/images/campus/science_field_trip_solar.jpg",
    alt: "Students and faculty engaging in practical science demonstration",
    tag: "Science Exploration"
  },
  "yoga-fitness-arena": {
    image: "/images/achievements/karate_belt_grading.jpg",
    alt: "Students receiving martial arts belt grading and fitness instruction",
    tag: "Martial Arts & Yoga"
  },
  "mentoring-lounge": {
    image: "/images/campus/teen_parenting_seminar.jpg",
    alt: "Parenting guidance and student mentoring session at Vidyarthi Bhavan",
    tag: "Student Mentorship"
  }
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
              <Wind className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Complete A/C Campus</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#38BDF8] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
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
              Explore our verified facilities supporting both academic rigor and holistic development on State Bank Street, Narasannapeta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {institutionData.facilities.map((facility) => {
              const photoInfo = FACILITY_PHOTOS[facility.id];

              return (
                <div
                  key={facility.id}
                  className="bg-[#F5F8FF] rounded-2xl overflow-hidden border border-[#E3EAF7] hover:border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {photoInfo ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A1B3D]">
                        <Image
                          src={photoInfo.image}
                          alt={photoInfo.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-[#0A1B3D]/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/20">
                          {photoInfo.tag}
                        </div>
                      </div>
                    ) : (
                      <div className="p-7 pb-0">
                        <div className="w-14 h-14 rounded-2xl bg-white text-[#2563EB] border border-[#E3EAF7] flex items-center justify-center shadow-[0_2px_8px_rgba(37,99,235,0.08)] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                          {ICON_MAP[facility.icon] || <GraduationCap className="w-8 h-8" />}
                        </div>
                      </div>
                    )}

                    <div className="p-7 space-y-4">
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
                  </div>

                  <div className="px-7 pb-7 pt-2 border-t border-[#E3EAF7]">
                    <Link
                      href="/admissions"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#1E40AF] transition-colors duration-200"
                    >
                      <span>Schedule Campus Visit</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8]" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transportation & Playground Feature Strip */}
      <section className="py-16 bg-[#F5F8FF] border-y border-[#E3EAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-white border border-[#E3EAF7] px-3.5 py-1 rounded-full">
              Transport & Sports Grounds
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1B3D]">
              Dedicated Transport Fleet & School Playground
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B8C]">
              Safe student mobility across Narasannapeta mandals and healthy outdoor sports fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Bus Card */}
            <div className="rounded-3xl overflow-hidden bg-white border border-[#E3EAF7] shadow-sm flex flex-col justify-between">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A1B3D]">
                <Image
                  src="/images/campus/school_transport_bus.jpg"
                  alt="Vidyarthi Bhavan official school bus and students"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0A1B3D]/80 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs font-bold flex items-center gap-1.5">
                  <Bus className="w-4 h-4 text-[#38BDF8]" />
                  <span>Verified School Bus Fleet</span>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-extrabold text-xl text-[#0A1B3D]">Safe School Bus Transportation</h3>
                <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed">
                  Our dedicated yellow school bus fleet provides safe, punctual, and supervised transit covering State Bank Street, Narasannapeta town, and surrounding villages with certified drivers and speed governors.
                </p>
                <div className="pt-2 text-xs font-semibold text-[#2563EB]">
                  Contact transport desk: 9849290368 / 9440347837
                </div>
              </div>
            </div>

            {/* Playground Banner Card */}
            <div className="rounded-3xl overflow-hidden bg-white border border-[#E3EAF7] shadow-sm flex flex-col justify-between">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A1B3D]">
                <Image
                  src="/images/campus/school_playground_banner.jpg"
                  alt="Vidyarthi Bhavan School Playground and Admissions Open Banner"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0A1B3D]/80 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs font-bold flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-[#F59E0B]" />
                  <span>Sports & Playground</span>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-extrabold text-xl text-[#0A1B3D]">School Sports Grounds & Play Area</h3>
                <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed">
                  Dedicated outdoor sports grounds equipped for volleyball, cricket, yoga, martial arts, and early play apparatus for Wonder Kidz pre-primary children.
                </p>
                <div className="pt-2 text-xs font-semibold text-[#2563EB]">
                  Survey No. 992 & 1045 - 336 (2A & 2B), Narasannapeta
                </div>
              </div>
            </div>
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
              Pioneered early childhood education in Narasannapeta under Wonder Kidz with a 100% program from Delhi Publication.
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
