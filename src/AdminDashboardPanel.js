import React from 'react';
import { Users, BookOpen, FileText, Activity, ShieldAlert, AlertTriangle, BarChart2, Clock3 } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { icon: <Users size={20} />, label: 'Kursanci', value: 120, description: 'Zarejestrowani kursanci' },
    { icon: <Users size={20} />, label: 'Wykładowcy', value: 25, description: 'Prowadzący zajęcia' },
    { icon: <Users size={20} />, label: 'Administratorzy', value: 3, description: 'Zarządzający systemem' },
    { icon: <Clock3 size={20} />, label: 'Ostatnie logowania', value: 47, description: 'W ciągu 24h' }
  ];

  const courses = [
    { label: 'Aktywne kursy', value: 8 },
    { label: 'Zakończone kursy', value: 15 },
    { label: 'Średnia zapisów', value: '26/os.' }
  ];

  const access = [
    { label: 'Uprawnienia: Kursanci', value: 'Tylko przegląd' },
    { label: 'Uprawnienia: Wykładowcy', value: 'Edycja i oceny' },
    { label: 'Uprawnienia: Administratorzy', value: 'Pełny dostęp' }
  ];

  const monitoring = [
    { icon: <Activity size={18} />, label: 'Obciążenie serwera', value: '52%' },
    { icon: <FileText size={18} />, label: 'Błędy systemowe', value: '3 raporty' },
    { icon: <AlertTriangle size={18} />, label: 'Alerty', value: '2 krytyczne' }
  ];

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'sans-serif', background: '#f9fafb', padding: 32 }}>
      <h1 style={{ fontSize: 24, marginBottom: 8 }}>Panel Główny</h1>
      <p style={{ color: '#6b7280', marginBottom: 32 }}>Zarządzaj całym systemem PSDiA</p>

      <section style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: '#fff', padding: 24, borderRadius: 12, flex: '1 1 200px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 'bold' }}>{s.icon} {s.label}</div>
            <div style={{ fontSize: 28, fontWeight: 'bold', color: '#16a34a', marginTop: 8 }}>{s.value}</div>
            <div style={{ fontSize: 13, color: '#6b7280' }}>{s.description}</div>
          </div>
        ))}
      </section>

      <h2 style={{ marginBottom: 12 }}>Zarządzanie kursami</h2>
      <section style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}>
        {courses.map((c, i) => (
          <div key={i} style={{ background: '#fff', padding: 20, borderRadius: 12, flex: '1 1 220px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: 16, fontWeight: 'bold' }}>{c.label}</div>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: '#0f766e', marginTop: 8 }}>{c.value}</div>
          </div>
        ))}
      </section>

      <h2 style={{ marginBottom: 12 }}>Uprawnienia dostępu</h2>
      <section style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}>
        {access.map((a, i) => (
          <div key={i} style={{ background: '#fff', padding: 20, borderRadius: 12, flex: '1 1 220px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: 16, fontWeight: 'bold' }}>{a.label}</div>
            <div style={{ fontSize: 14, color: '#475569', marginTop: 8 }}>{a.value}</div>
          </div>
        ))}
      </section>

      <h2 style={{ marginBottom: 12 }}>Monitorowanie platformy</h2>
      <section style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {monitoring.map((m, i) => (
          <div key={i} style={{ background: '#fff', padding: 20, borderRadius: 12, flex: '1 1 240px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 'bold' }}>{m.icon} {m.label}</div>
            <div style={{ fontSize: 20, fontWeight: 'bold', color: '#b91c1c', marginTop: 8 }}>{m.value}</div>
          </div>
        ))}
      </section>
    </div>
  );
}