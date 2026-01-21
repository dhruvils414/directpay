"use client";

import { useState } from "react";
import ClinicSidebar from "@/components/ClinicSidebar";

const recentNotes = [
  { id: 1, patient: "Maria Garcia", date: "Today, 9:00 AM", type: "Annual Physical", preview: "Annual physical examination. Patient reports feeling well overall...", initials: "MG" },
  { id: 2, patient: "James Wilson", date: "Today, 10:30 AM", type: "Follow-up", preview: "Follow-up for hypertension management. BP reading 128/82...", initials: "JW" },
  { id: 3, patient: "Robert Brown", date: "Jan 15, 2025", type: "Lab Review", preview: "Lab review - cholesterol panel results discussed...", initials: "RB" },
  { id: 4, patient: "Sarah Martinez", date: "Jan 14, 2025", type: "Sick Visit", preview: "Patient presents with acute upper respiratory symptoms...", initials: "SM" },
  { id: 5, patient: "Amanda Hayes", date: "Jan 13, 2025", type: "Chronic Care", preview: "Chronic care management - diabetes follow-up...", initials: "AH" },
];

export default function ClinicNotes() {
  const [selectedNote, setSelectedNote] = useState(0);
  const [noteData, setNoteData] = useState({
    visitDate: "2025-01-17",
    visitType: "Annual Physical",
    duration: "30",
    chiefComplaint: "Annual wellness exam, routine health maintenance",
    vitals: { bp: "120/78", pulse: "72", temp: "98.6", weight: "145", height: "5'6\"" },
    subjective: "Patient reports feeling well overall. No new complaints. Exercises 3x weekly, maintains healthy diet. Denies chest pain, shortness of breath, or recent illness. Family history notable for hypertension (father) and diabetes (mother).",
    objective: "General: Alert, well-appearing female in no distress. HEENT: Normocephalic, PERRLA, TMs clear. Cardiovascular: RRR, no murmurs. Lungs: CTA bilaterally. Abdomen: Soft, non-tender, no masses. Extremities: No edema, pulses 2+ throughout.",
    assessment: `1. Annual wellness exam - healthy female, age-appropriate
   - Continue current lifestyle modifications
   - Routine labs ordered: CBC, CMP, Lipid panel, TSH
   
2. Preventive care
   - Flu vaccine administered today
   - Discussed importance of mammogram (due this year)
   - Return in 1 year for annual exam or sooner if concerns`,
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <ClinicSidebar />
      
      <main className="ml-64">
        <header className="bg-white border-b border-slate-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Doctor Notes</h1>
              <p className="text-slate-500 text-sm">Document patient visits and care notes</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search patients..."
                  className="w-80 pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm"
                />
                <svg className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl font-medium flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                New Note
              </button>
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="grid grid-cols-3 gap-6">
            {/* Left: Recent Notes List */}
            <div className="col-span-1 space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-100">
                  <h3 className="font-semibold text-slate-800">Recent Notes</h3>
                </div>
                <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto">
                  {recentNotes.map((note, index) => (
                    <div
                      key={note.id}
                      onClick={() => setSelectedNote(index)}
                      className={`p-4 cursor-pointer transition-all ${
                        selectedNote === index
                          ? "bg-teal-50 border-l-4 border-teal-500"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                          selectedNote === index ? "bg-teal-100 text-teal-600" : "bg-slate-100 text-slate-600"
                        }`}>
                          {note.initials}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-slate-800 text-sm">{note.patient}</div>
                          <div className="text-xs text-slate-500">{note.date}</div>
                        </div>
                      </div>
                      <div className="text-sm text-slate-600 line-clamp-2">{note.preview}</div>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-teal-100 text-teal-700 text-xs rounded-full">
                        {note.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Note Editor */}
            <div className="col-span-2">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                {/* Note Header */}
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold text-lg">
                        MG
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-slate-800">Maria Garcia</h2>
                        <div className="flex items-center gap-3 text-sm text-slate-500">
                          <span>DOB: Mar 15, 1985</span>
                          <span>•</span>
                          <span>Age: 39</span>
                          <span>•</span>
                          <span>Female</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Saved</span>
                      <button className="p-2 hover:bg-slate-100 rounded-lg" title="Print">
                        <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Note Content */}
                <div className="p-6 space-y-6">
                  {/* Visit Info */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Visit Date</label>
                      <input
                        type="date"
                        value={noteData.visitDate}
                        onChange={(e) => setNoteData({ ...noteData, visitDate: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Visit Type</label>
                      <select
                        value={noteData.visitType}
                        onChange={(e) => setNoteData({ ...noteData, visitType: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm bg-white"
                      >
                        <option>Annual Physical</option>
                        <option>Follow-up</option>
                        <option>Sick Visit</option>
                        <option>New Patient</option>
                        <option>Lab Review</option>
                        <option>Chronic Care</option>
                        <option>Telehealth</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Duration</label>
                      <select
                        value={noteData.duration}
                        onChange={(e) => setNoteData({ ...noteData, duration: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm bg-white"
                      >
                        <option value="15">15 min</option>
                        <option value="20">20 min</option>
                        <option value="30">30 min</option>
                        <option value="45">45 min</option>
                        <option value="60">60 min</option>
                      </select>
                    </div>
                  </div>

                  {/* Chief Complaint */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Chief Complaint</label>
                    <input
                      type="text"
                      value={noteData.chiefComplaint}
                      onChange={(e) => setNoteData({ ...noteData, chiefComplaint: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm"
                      placeholder="Primary reason for visit"
                    />
                  </div>

                  {/* Vitals */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Vitals</label>
                    <div className="grid grid-cols-5 gap-3">
                      {[
                        { key: "bp", label: "BP", placeholder: "--/--" },
                        { key: "pulse", label: "Pulse", placeholder: "--" },
                        { key: "temp", label: "Temp", placeholder: "--" },
                        { key: "weight", label: "Weight", placeholder: "--" },
                        { key: "height", label: "Height", placeholder: "--" },
                      ].map((vital) => (
                        <div key={vital.key}>
                          <label className="block text-xs text-slate-500 mb-1">{vital.label}</label>
                          <input
                            type="text"
                            value={noteData.vitals[vital.key as keyof typeof noteData.vitals]}
                            onChange={(e) => setNoteData({
                              ...noteData,
                              vitals: { ...noteData.vitals, [vital.key]: e.target.value }
                            })}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-center"
                            placeholder={vital.placeholder}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subjective */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Subjective / History</label>
                    <textarea
                      rows={3}
                      value={noteData.subjective}
                      onChange={(e) => setNoteData({ ...noteData, subjective: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm resize-none"
                      placeholder="Patient's description of symptoms, medical history..."
                    />
                  </div>

                  {/* Objective */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Objective / Physical Exam</label>
                    <textarea
                      rows={3}
                      value={noteData.objective}
                      onChange={(e) => setNoteData({ ...noteData, objective: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm resize-none"
                      placeholder="Physical examination findings..."
                    />
                  </div>

                  {/* Assessment & Plan */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Assessment & Plan</label>
                    <textarea
                      rows={4}
                      value={noteData.assessment}
                      onChange={(e) => setNoteData({ ...noteData, assessment: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm resize-none"
                      placeholder="Diagnosis and treatment plan..."
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                        Attach File
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        Templates
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
                        Save Draft
                      </button>
                      <button className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-medium">
                        Sign & Complete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
