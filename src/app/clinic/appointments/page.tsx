"use client";

import { useState } from "react";
import ClinicSidebar from "@/components/ClinicSidebar";

const appointments = [
  { id: 1, time: "9:00 AM", patient: "Maria Garcia", type: "Annual Physical", duration: 30, status: "confirmed", initials: "MG" },
  { id: 2, time: "9:30 AM", patient: "James Wilson", type: "Follow-up", duration: 20, status: "confirmed", initials: "JW" },
  { id: 3, time: "10:00 AM", patient: "Emily Chen", type: "New Patient", duration: 45, status: "pending", initials: "EC" },
  { id: 4, time: "11:00 AM", patient: "Robert Brown", type: "Lab Review", duration: 15, status: "confirmed", initials: "RB" },
  { id: 5, time: "1:00 PM", patient: "Sarah Martinez", type: "Telehealth", duration: 20, status: "video", initials: "SM" },
  { id: 6, time: "2:00 PM", patient: "David Williams", type: "Chronic Care", duration: 30, status: "confirmed", initials: "DW" },
  { id: 7, time: "3:00 PM", patient: "Amanda Hayes", type: "Follow-up", duration: 20, status: "pending", initials: "AH" },
  { id: 8, time: "4:00 PM", patient: "Michael Brown", type: "Physical Therapy", duration: 45, status: "confirmed", initials: "MB" },
];

const timeSlots = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"];

export default function ClinicAppointments() {
  const [view, setView] = useState<"day" | "week" | "month">("day");
  const [selectedDate] = useState(new Date());

  const getAppointmentForSlot = (time: string) => {
    return appointments.find(apt => apt.time === time);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <ClinicSidebar />
      
      <main className="ml-64">
        <header className="bg-white border-b border-slate-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Appointments</h1>
              <p className="text-slate-500 text-sm">Manage your schedule</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex bg-slate-100 rounded-xl p-1">
                {(["day", "week", "month"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      view === v ? "bg-white shadow text-slate-800" : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {v.charAt(0).toUpperCase() + v.slice(1)}
                  </button>
                ))}
              </div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl font-medium flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                New Appointment
              </button>
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="grid grid-cols-4 gap-6">
            {/* Calendar Mini */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-800">January 2025</h3>
                <div className="flex gap-1">
                  <button className="p-1 hover:bg-slate-100 rounded">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-slate-100 rounded">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div key={day} className="py-2 text-slate-400 font-medium">{day}</div>
                ))}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <button
                    key={day}
                    className={`py-2 rounded-lg transition-all ${
                      day === 17 ? "bg-teal-600 text-white" : "hover:bg-slate-100 text-slate-600"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 pt-6 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-600">Confirmed</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-600">Pending</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600">Telehealth</span>
                </div>
              </div>
            </div>

            {/* Schedule Grid */}
            <div className="col-span-3 bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-semibold text-slate-800">
                  {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                </h3>
                <span className="text-sm text-slate-500">{appointments.length} appointments</span>
              </div>
              
              <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto">
                {timeSlots.map((time) => {
                  const apt = getAppointmentForSlot(time);
                  const isLunch = time === "12:00 PM" || time === "12:30 PM";
                  
                  return (
                    <div key={time} className={`flex ${isLunch && !apt ? "bg-slate-50" : ""}`}>
                      <div className="w-20 py-4 px-4 text-sm text-slate-500 font-medium border-r border-slate-100">
                        {time}
                      </div>
                      <div className="flex-1 p-2">
                        {apt ? (
                          <div className={`p-3 rounded-xl ${
                            apt.status === 'confirmed' ? 'bg-green-50 border border-green-200' :
                            apt.status === 'pending' ? 'bg-amber-50 border border-amber-200' :
                            'bg-blue-50 border border-blue-200'
                          }`}>
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-xs ${
                                apt.status === 'confirmed' ? 'bg-green-500' :
                                apt.status === 'pending' ? 'bg-amber-500' :
                                'bg-blue-500'
                              }`}>
                                {apt.initials}
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-slate-800 text-sm">{apt.patient}</div>
                                <div className="text-xs text-slate-500">{apt.type} • {apt.duration} min</div>
                              </div>
                              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                apt.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                                apt.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                                'bg-blue-100 text-blue-700'
                              }`}>
                                {apt.status === 'video' ? 'Telehealth' : apt.status}
                              </span>
                            </div>
                          </div>
                        ) : isLunch ? (
                          <div className="p-3 text-sm text-slate-400 italic">Lunch break</div>
                        ) : (
                          <div className="p-3 text-sm text-slate-400 hover:bg-slate-50 rounded-xl cursor-pointer">
                            Available
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
