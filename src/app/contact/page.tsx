import React from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
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
      <section className="bg-gradient-to-br from-[#0A1B3D] via-[#0A1B3D] to-[#1E40AF] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#38BDF8] text-xs font-semibold tracking-wide backdrop-blur-md">
            <span>Verified Campus Office</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl">
            Contact Vidyarthi Bhavan IIT Academy
          </h1>
          <p className="text-[#E3EAF7] text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Reach out to our administrative desk, connect via WhatsApp, or visit our campus in Narasannapeta, Srikakulam District.
          </p>
        </div>
      </section>

      {/* Contact Details & Form Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Official Contact Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#F5F8FF] border border-[#E3EAF7] px-3 py-1 rounded-full">
                  Campus Headquarters
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1B3D] tracking-tight">
                  Get in Touch With Us
                </h2>
                <p className="text-[#5B6B8C] text-sm leading-relaxed">
                  Our admissions office and academic counseling team are available to answer queries regarding admissions, IIT foundation curriculum, and school visits.
                </p>
              </div>

              {/* Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#F5F8FF] border border-[#E3EAF7] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E3EAF7] text-[#2563EB] flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#0A1B3D]">Campus Address</h3>
                    <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed">
                      {institutionData.location.address}
                    </p>
                    <p className="text-xs font-semibold text-[#2563EB]">
                      Verified Location: Narasannapeta, Srikakulam District, AP
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F5F8FF] border border-[#E3EAF7] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E3EAF7] text-[#2563EB] flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#0A1B3D]">Admissions Helpline</h3>
                    <p className="text-xs sm:text-sm text-[#0A1B3D]">
                      <a
                        href={`tel:${institutionData.contact.phone.replace(/\s+/g, "")}`}
                        className="hover:text-[#2563EB] font-semibold transition-colors duration-200"
                      >
                        {institutionData.contact.phone}
                      </a>
                    </p>
                    <p className="text-xs text-[#5B6B8C]">
                      General inquiries, fee guidance & appointment bookings
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F5F8FF] border border-[#E3EAF7] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E3EAF7] text-[#2563EB] flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#0A1B3D]">WhatsApp Quick Connect</h3>
                    <p className="text-xs sm:text-sm text-[#0A1B3D]">
                      <a
                        href={`https://wa.me/${institutionData.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20VB%20IIT%20Academy,%20I%20would%20like%20to%20enquire%20about%20admissions.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2563EB] font-bold hover:underline transition-colors duration-200"
                      >
                        Message on WhatsApp ({institutionData.contact.whatsapp})
                      </a>
                    </p>
                    <p className="text-xs text-[#5B6B8C]">
                      Fast response during working hours
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F5F8FF] border border-[#E3EAF7] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E3EAF7] text-[#2563EB] flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#0A1B3D]">Official Email</h3>
                    <p className="text-xs sm:text-sm text-[#0A1B3D]">
                      <a
                        href={`mailto:${institutionData.contact.email}`}
                        className="hover:text-[#2563EB] font-semibold break-all transition-colors duration-200"
                      >
                        {institutionData.contact.email}
                      </a>
                    </p>
                    <p className="text-xs text-[#5B6B8C]">
                      Admissions: {institutionData.contact.admissionsEmail}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F5F8FF] border border-[#E3EAF7] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E3EAF7] text-[#0A1B3D] flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-5 h-5 text-[#0A1B3D]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#0A1B3D]">Visiting Hours</h3>
                    <p className="text-xs sm:text-sm text-[#0A1B3D] font-medium">
                      {institutionData.contact.hours}
                    </p>
                    <p className="text-xs text-[#5B6B8C]">
                      Principal consultations available by prior appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact & Enquiry Form (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#F5F8FF] border border-[#E3EAF7] px-3 py-1 rounded-full">
                  Direct Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1B3D] tracking-tight">
                  Send an Admission Message
                </h2>
                <p className="text-[#5B6B8C] text-xs sm:text-sm">
                  Complete the form below. We will respond promptly with curricular details and campus visit scheduling.
                </p>
              </div>

              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section: Alternate Soft Surface */}
      <section className="py-12 bg-[#F5F8FF] border-t border-[#E3EAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A1B3D]">
                Campus Location Map • Narasannapeta
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B8C]">
                Centrally positioned in Narasannapeta, Srikakulam District, AP.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Narasannapeta+Andhra+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0A1B3D] hover:bg-[#1E40AF] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-[0_4px_14px_rgba(10,27,61,0.18)] hover:-translate-y-0.5 transition-all duration-200 self-start sm:self-auto"
            >
              <Navigation className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          <div className="w-full h-96 rounded-3xl overflow-hidden border border-[#E3EAF7] shadow-[0_8px_24px_rgba(37,99,235,0.06)]">
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
