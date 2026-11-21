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

    // Basic Client validation
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
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-xl shadow-blue-900/5">
      {success ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-[#0B1F4C]">Enquiry Received Successfully!</h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            {success}
          </p>
          {refId && (
            <div className="inline-block bg-blue-50 border border-blue-200 text-[#1D4ED8] font-mono text-xs px-3 py-1.5 rounded-lg">
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
              className="text-sm font-semibold text-[#1D4ED8] hover:underline"
            >
              Submit Another Enquiry
            </button>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <a
              href={`tel:${institutionData.contact.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#0B1F4C]"
            >
              <PhoneCall className="w-4 h-4 text-[#1D4ED8]" />
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
            <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 shrink-0 text-rose-600 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="studentName" className="block text-xs font-bold text-slate-700 mb-1">
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
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="parentName" className="block text-xs font-bold text-slate-700 mb-1">
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
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="mobileNumber" className="block text-xs font-bold text-slate-700 mb-1">
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
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="currentClass" className="block text-xs font-bold text-slate-700 mb-1">
                Current Class / Standard *
              </label>
              <select
                id="currentClass"
                name="currentClass"
                value={formData.currentClass}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none transition bg-white"
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
            <label htmlFor="interestedProgram" className="block text-xs font-bold text-slate-700 mb-1">
              Interested Program *
            </label>
            <select
              id="interestedProgram"
              name="interestedProgram"
              value={formData.interestedProgram}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none transition bg-white"
            >
              <option value="IIT-JEE Foundation Program">IIT-JEE Foundation Program (Classes 6-10)</option>
              <option value="Comprehensive School Academics">Comprehensive School Academics</option>
              <option value="AI, Coding & Innovation">AI, Coding & Innovation Curriculum</option>
              <option value="Olympiad Mentorship">Olympiad & Talent Mentorship</option>
              <option value="Holistic Development & Yoga">Holistic Development, Yoga & Martial Arts</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1">
              Questions or Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Any specific questions regarding curriculum, transportation, or batch timings..."
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-blue-700/20 active:scale-[0.99] transition disabled:opacity-60 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Admission Enquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-[11px] text-slate-500 text-center">
            🔒 Your contact information is kept strictly confidential. Our academic desk will reach out during working hours.
          </p>
        </form>
      )}
    </div>
  );
}
