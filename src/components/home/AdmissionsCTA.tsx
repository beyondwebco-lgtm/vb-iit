import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";
import { institutionData } from "@/data/institutionData";

export default function AdmissionsCTA() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-[#0A1B3D] via-[#0A1B3D] to-[#1E40AF] text-white relative overflow-hidden">
      {/* Decorative background glow in highlight */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#38BDF8] blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#2563EB] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Information (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              Admissions Open for Academic Year 2026-27
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Begin Your Child's Journey to True Academic Mastery
            </h2>

            <p className="text-[#E3EAF7] text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Secure a seat at <strong className="text-white font-semibold">Vidyarthi Bhavan IIT Academy</strong>, Narasannapeta. Give your child the foundation of rigorous mathematics, competitive confidence, AI literacy, and moral character.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* One Prominent Amber Accent CTA Moment */}
              <Link
                href="/admissions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1B3D] font-bold text-sm px-6 py-3.5 rounded-xl shadow-[0_8px_24px_rgba(245,158,11,0.30)] hover:shadow-[0_12px_28px_rgba(245,158,11,0.40)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Online Admission Form</span>
                <ArrowRight className="w-4 h-4 text-[#0A1B3D]" />
              </Link>

              <a
                href={`tel:${institutionData.contact.phone.replace(/\s+/g, "")}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 border border-white/20 hover:border-[#38BDF8]/40 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-[#38BDF8]" />
                <span>Call: {institutionData.contact.phone}</span>
              </a>

              <a
                href={`https://wa.me/${institutionData.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20VB%20IIT%20Academy,%20I%20would%20like%20to%20enquire%20about%20admissions.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1E40AF] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-[#38BDF8]" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Quick Facts Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 space-y-5 text-white shadow-[0_16px_36px_rgba(10,27,61,0.2)]">
              <h3 className="text-xl font-bold text-white border-b border-white/15 pb-3">
                Admissions Helpdesk & Campus
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Campus Location:</p>
                    <p className="text-[#E3EAF7]">{institutionData.location.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#38BDF8] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Office Hours:</p>
                    <p className="text-[#E3EAF7]">{institutionData.contact.hours}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-[#38BDF8]/20 text-xs text-[#E3EAF7]">
                  <p className="font-bold text-white mb-1">Notice for Parents:</p>
                  <p className="text-[#E3EAF7]">Personal consultations with Principal Kalepu Satish Kumar are available by appointment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
