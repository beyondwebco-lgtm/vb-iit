"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send, PhoneCall } from "lucide-react";
import { institutionData } from "@/data/institutionData";

interface FormState {
  studentName: string;
  parentName: string;
  mobileNumber: string;
  interestedProgram: string;
  currentClass: string;
  message: string;
  honeypot: string;
}

export default function EnquiryForm({ initialProgram = "" }: { initialProgram?: string }) {
  const [formData, setFormData] = useState<FormState>({
    studentName: "",
    parentName: "",
    mobileNumber: "",
    interestedProgram: initialProgram || "IIT-JEE Foundation Program",
    currentClass: "Class 7",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [refId, setRefId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Client validation
    if (!formData.studentName.trim() || formData.studentName.trim().length < 2) {
      setError("Please enter the student's full name.");
      return;
    }
    if (!formData.parentName.trim() || formData.parentName.trim().length < 2) {
      setError("Please enter the parent or guardian's name.");
      return;
    }
    const cleanPhone = formData.mobileNumber.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Submission failed. Please call our admissions desk.");
      }

      setSuccess(result.message);
      setRefId(result.referenceId);
      setFormData({
        studentName: "",
        parentName: "",
        mobileNumber: "",
        interestedProgram: "IIT-JEE Foundation Program",
        currentClass: "Class 7",
        message: "",
        honeypot: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An error occurred. Please call our admissions desk.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E3EAF7] shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
      {success ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-[#F5F8FF] text-[#2563EB] border border-[#E3EAF7] rounded-full flex items-center justify-center mx-auto shadow-[0_4px_14px_rgba(37,99,235,0.12)]">
            <CheckCircle2 className="w-8 h-8 text-[#2563EB]" />
          </div>
          <h3 className="text-2xl font-extrabold text-[#0A1B3D]">Enquiry Received Successfully!</h3>
          <p className="text-[#5B6B8C] max-w-md mx-auto text-sm leading-relaxed">
            {success}
          </p>
          {refId && (
            <div className="inline-block bg-[#F5F8FF] border border-[#E3EAF7] text-[#2563EB] font-mono text-xs px-3.5 py-1.5 rounded-lg">
              Reference ID: {refId}
            </div>
          )}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSuccess(null);
                setRefId(null);
              }}
              className="text-sm font-semibold text-[#2563EB] hover:text-[#1E40AF] underline underline-offset-4 transition-colors"
            >
              Submit Another Enquiry
            </button>
            <span className="text-[#5B6B8C] hidden sm:inline">•</span>
            <a
              href={`tel:${institutionData.contact.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A1B3D] hover:text-[#2563EB] transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#2563EB]" />
              Direct Helpline: {institutionData.contact.phone}
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field for spam prevention */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {error && (
            <div className="p-3.5 bg-red-50/80 border border-red-200/80 text-red-700 rounded-xl text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="studentName" className="block text-xs font-bold text-[#0A1B3D] mb-1">
                Student Full Name *
              </label>
              <input
                id="studentName"
                name="studentName"
                type="text"
                required
                value={formData.studentName}
                onChange={handleChange}
                placeholder="e.g. S. Sai Krishna"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E3EAF7] text-[#0A1B3D] placeholder-[#5B6B8C]/60 focus:border-[#2563EB] focus:ring-2 focus:ring-[#38BDF8]/30 outline-none transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="parentName" className="block text-xs font-bold text-[#0A1B3D] mb-1">
                Parent / Guardian Name *
              </label>
              <input
                id="parentName"
                name="parentName"
                type="text"
                required
                value={formData.parentName}
                onChange={handleChange}
                placeholder="e.g. S. Venkatesh"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E3EAF7] text-[#0A1B3D] placeholder-[#5B6B8C]/60 focus:border-[#2563EB] focus:ring-2 focus:ring-[#38BDF8]/30 outline-none transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="mobileNumber" className="block text-xs font-bold text-[#0A1B3D] mb-1">
                Mobile Number *
              </label>
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                required
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E3EAF7] text-[#0A1B3D] placeholder-[#5B6B8C]/60 focus:border-[#2563EB] focus:ring-2 focus:ring-[#38BDF8]/30 outline-none transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="currentClass" className="block text-xs font-bold text-[#0A1B3D] mb-1">
                Current Class / Standard *
              </label>
              <select
                id="currentClass"
                name="currentClass"
                value={formData.currentClass}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E3EAF7] text-[#0A1B3D] focus:border-[#2563EB] focus:ring-2 focus:ring-[#38BDF8]/30 outline-none transition-all duration-200 bg-white"
              >
                <option value="Class 5">Class 5</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Primary (1-4)">Primary (Classes 1 - 4)</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="interestedProgram" className="block text-xs font-bold text-[#0A1B3D] mb-1">
              Interested Program *
            </label>
            <select
              id="interestedProgram"
              name="interestedProgram"
              value={formData.interestedProgram}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E3EAF7] text-[#0A1B3D] focus:border-[#2563EB] focus:ring-2 focus:ring-[#38BDF8]/30 outline-none transition-all duration-200 bg-white"
            >
              <option value="IIT-JEE Foundation Program">IIT-JEE Foundation Program (Classes 6-10)</option>
              <option value="Comprehensive School Academics">Comprehensive School Academics</option>
              <option value="AI, Coding & Innovation">AI, Coding & Innovation Curriculum</option>
              <option value="Olympiad Mentorship">Olympiad & Talent Mentorship</option>
              <option value="Holistic Development & Yoga">Holistic Development, Yoga & Martial Arts</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold text-[#0A1B3D] mb-1">
              Questions or Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Any specific questions regarding curriculum, transportation, or batch timings..."
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E3EAF7] text-[#0A1B3D] placeholder-[#5B6B8C]/60 focus:border-[#2563EB] focus:ring-2 focus:ring-[#38BDF8]/30 outline-none transition-all duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1E40AF] text-white font-bold py-3.5 px-4 rounded-xl shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_20px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-[#38BDF8]" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Admission Enquiry</span>
                <Send className="w-4 h-4 text-[#38BDF8]" />
              </>
            )}
          </button>

          <p className="text-[11px] text-[#5B6B8C] text-center">
            🔒 Your contact information is kept strictly confidential. Our academic desk will reach out during working hours.
          </p>
        </form>
      )}
    </div>
  );
}
