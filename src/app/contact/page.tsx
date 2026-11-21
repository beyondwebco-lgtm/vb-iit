import React from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, ShieldCheck } from "lucide-react";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { institutionData } from "@/data/institutionData";

export const metadata: Metadata = {
  title: "Contact Us & Campus Location | Narasannapeta",
  description:
    "Contact Vidyarthi Bhavan IIT Academy in Narasannapeta, Srikakulam District, AP. Phone numbers, WhatsApp helpline, campus address, and map directions.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#071434] via-[#0B1F4C] to-[#143B8A] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-200 text-xs font-semibold tracking-wide">
            <span>Verified Campus Office</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl">
            Contact Vidyarthi Bhavan IIT Academy
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            Reach out to our administrative desk, connect via WhatsApp, or visit our campus in Narasannapeta, Srikakulam District.
          </p>
        </div>
      </section>

      {/* Contact Details & Form Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Official Contact Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Campus Headquarters
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F4C] tracking-tight">
                  Get in Touch With Us
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our admissions office and academic counseling team are available to answer queries regarding admissions, IIT foundation curriculum, and school visits.
                </p>
              </div>

              {/* Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1D4ED8] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#0B1F4C]">Campus Address</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {institutionData.location.address}
                    </p>
                    <p className="text-xs font-semibold text-[#1D4ED8]">
                      Verified Location: Narasannapeta, Srikakulam District, AP
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1D4ED8] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#0B1F4C]">Admissions Helpline</h3>
                    <p className="text-xs sm:text-sm text-slate-700">
                      <a
                        href={`tel:${institutionData.contact.phone.replace(/\s+/g, "")}`}
                        className="hover:text-[#1D4ED8] font-semibold"
                      >
                        {institutionData.contact.phone}
                      </a>
                    </p>
                    <p className="text-xs text-slate-500">
                      General inquiries, fee guidance & appointment bookings
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#0B1F4C]">WhatsApp Quick Connect</h3>
                    <p className="text-xs sm:text-sm text-slate-700">
                      <a
                        href={`https://wa.me/${institutionData.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20VB%20IIT%20Academy,%20I%20would%20like%20to%20enquire%20about%20admissions.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline"
                      >
                        Message on WhatsApp ({institutionData.contact.whatsapp})
                      </a>
                    </p>
                    <p className="text-xs text-slate-500">
                      Fast response during working hours
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1D4ED8] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#0B1F4C]">Official Email</h3>
                    <p className="text-xs sm:text-sm text-slate-700">
                      <a
                        href={`mailto:${institutionData.contact.email}`}
                        className="hover:text-[#1D4ED8] font-semibold break-all"
                      >
                        {institutionData.contact.email}
                      </a>
                    </p>
                    <p className="text-xs text-slate-500">
                      Admissions: {institutionData.contact.admissionsEmail}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1F4C] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#0B1F4C]">Visiting Hours</h3>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium">
                      {institutionData.contact.hours}
                    </p>
                    <p className="text-xs text-slate-500">
                      Principal consultations available by prior appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact & Enquiry Form (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Direct Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F4C] tracking-tight">
                  Send an Admission Message
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Complete the form below. We will respond promptly with curricular details and campus visit scheduling.
                </p>
              </div>

              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4C]">
                Campus Location Map • Narasannapeta
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Centrally positioned in Narasannapeta, Srikakulam District, AP.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Narasannapeta+Andhra+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0B1F4C] hover:bg-[#123075] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm self-start sm:self-auto"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          <div className="w-full h-96 rounded-3xl overflow-hidden border border-slate-300 shadow-md">
            <iframe
              src={institutionData.location.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vidyarthi Bhavan IIT Academy Location Narasannapeta"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
