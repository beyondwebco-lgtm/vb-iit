"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Sparkles } from "lucide-react";
import { institutionData } from "@/data/institutionData";

export default function TopAnnouncementBar() {
  return (
    <div className="bg-[#071434] text-white border-b border-blue-900/40 text-xs sm:text-sm py-2 px-4 sm:px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Left: Announcement & Location */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span className="inline-flex items-center gap-1.5 bg-blue-600/30 text-blue-200 border border-blue-400/30 px-2.5 py-0.5 rounded-full font-semibold text-xs tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            Admissions 2026-27 Open
          </span>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span className="inline-flex items-center gap-1 text-slate-300 text-xs">
            <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            {institutionData.location.town}, {institutionData.location.district}
          </span>
        </div>

        {/* Right: Verified Helplines & Actions */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <a
            href={`tel:${institutionData.contact.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            title="Call Admissions Office"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>{institutionData.contact.phone}</span>
          </a>
          <span className="text-slate-600 hidden sm:inline">·</span>
          <a
            href={`https://wa.me/${institutionData.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20VB%20IIT%20Academy,%20I%20would%20like%20to%20enquire%20about%20admissions.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition-colors font-semibold"
            title="WhatsApp Admissions"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-500/20" />
            <span>WhatsApp</span>
          </a>
          <span className="text-slate-600 hidden sm:inline">·</span>
          <Link
            href="/admissions"
            className="text-blue-300 hover:text-white underline underline-offset-2 hidden sm:inline"
          >
            Admission Procedures
          </Link>
        </div>
      </div>
    </div>
  );
}
