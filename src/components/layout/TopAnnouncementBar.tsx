"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Sparkles } from "lucide-react";
import { institutionData } from "@/data/institutionData";

export default function TopAnnouncementBar() {
  return (
    <div className="bg-[#0A1B3D] text-white border-b border-[#1E40AF]/40 text-xs sm:text-sm py-2 px-4 sm:px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Left: Announcement & Location */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span className="inline-flex items-center gap-1.5 bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30 px-2.5 py-0.5 rounded-full font-semibold text-xs tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            Admissions 2026-27 Open
          </span>
          <span className="text-[#5B6B8C] hidden sm:inline">|</span>
          <span className="inline-flex items-center gap-1 text-[#E3EAF7] text-xs">
            <MapPin className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
            {institutionData.location.town}, {institutionData.location.district}
          </span>
        </div>

        {/* Right: Helplines & Actions */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <a
            href={`tel:${institutionData.contact.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 text-[#E3EAF7] hover:text-[#38BDF8] transition-colors duration-200"
            title="Call Admissions Office"
          >
            <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>{institutionData.contact.phone}</span>
          </a>
          <span className="text-[#5B6B8C] hidden sm:inline">·</span>
          <a
            href={`https://wa.me/${institutionData.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20VB%20IIT%20Academy,%20I%20would%20like%20to%20enquire%20about%20admissions.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#38BDF8] hover:text-white transition-colors duration-200 font-semibold"
            title="WhatsApp Admissions"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
          <span className="text-[#5B6B8C] hidden sm:inline">·</span>
          <Link
            href="/admissions"
            className="text-[#38BDF8] hover:text-white underline underline-offset-2 transition-colors duration-200 hidden sm:inline"
          >
            Admission Procedures
          </Link>
        </div>
      </div>
    </div>
  );
}
