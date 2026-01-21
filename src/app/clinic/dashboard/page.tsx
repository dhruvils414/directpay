import ClinicSidebar from "@/components/ClinicSidebar";

const stats = [
  { label: "Total Patients", value: "1,284", change: "+12%", icon: "users" },
  { label: "Today's Appointments", value: "8", change: "", icon: "calendar" },
  { label: "Revenue (MTD)", value: "$24,560", change: "+8%", icon: "money" },
  { label: "Avg Wait Time", value: "12 min", change: "-3 min", icon: "clock" },
];

const todayAppointments = [
  { time: "9:00 AM", patient: "Maria Garcia", type: "Annual Physical", status: "confirmed" },
  { time: "10:00 AM", patient: "James Wilson", type: "Follow-up", status: "confirmed" },
  { time: "11:00 AM", patient: "Emily Chen", type: "New Patient", status: "pending" },
  { time: "2:00 PM", patient: "Robert Brown", type: "Lab Review", status: "confirmed" },
  { time: "3:30 PM", patient: "Sarah Martinez", type: "Telehealth", status: "confirmed" },
];

export default function ClinicDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ClinicSidebar />
      
      <main className="ml-64">
        <header className="bg-white border-b border-slate-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
              <p className="text-slate-500 text-sm">Welcome back, Dr. Johnson</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500">Today</p>
              <p className="font-medium text-slate-800">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-500 text-sm">{stat.label}</span>
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-slate-800">{stat.value}</span>
                  {stat.change && (
                    <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Today's Appointments */}
            <div className="col-span-2 bg-white rounded-2xl border border-slate-200">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h2 className="font-semibold text-slate-800">Today&apos;s Appointments</h2>
                <span className="text-sm text-slate-500">{todayAppointments.length} scheduled</span>
              </div>
              <div className="divide-y divide-slate-100">
                {todayAppointments.map((apt, i) => (
                  <div key={i} className="p-4 flex items-center gap-4 hover:bg-slate-50">
                    <div className="w-16 text-sm font-medium text-slate-600">{apt.time}</div>
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold text-sm">
                      {apt.patient.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-800">{apt.patient}</div>
                      <div className="text-sm text-slate-500">{apt.type}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      apt.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {apt.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                {[
                  { label: "Add New Patient", href: "/clinic/patients" },
                  { label: "Schedule Appointment", href: "/clinic/appointments" },
                  { label: "Write Note", href: "/clinic/notes" },
                ].map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all"
                  >
                    <span className="font-medium text-slate-700">{action.label}</span>
                    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
