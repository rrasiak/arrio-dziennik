import React, { useState } from 'react';
import { BookOpen, ClipboardList, Calendar as CalendarIcon, Mail, FileText, BarChart2, Bell } from 'lucide-react';

export default function StudentDashboardPanel() {
  const stats = [
    { label: 'Zaliczone', value: 5, icon: BookOpen, bg: '#dcfce7', color: '#166534' },
    { label: 'Niezaliczone', value: 2, icon: BookOpen, bg: '#fee2e2', color: '#b91c1c' },
    { label: 'Oddane prace', value: '5/8', icon: ClipboardList, bg: '#f0fdf4', color: '#047857' }
  ];

  const upcoming = [
    { title: 'Dendrologia I', date: new Date(2025,5,3), time: '03.06.2025 09:00', type: 'Online', link: 'https://teams.microsoft.com/l/meetup-join/1', location: '' },
    { title: 'Arborystyka II', date: new Date(2025,5,5), time: '05.06.2025 12:00', type: 'Sala 101', link: '', location: 'UBB, Sala 202' },
    { title: 'Ekologia drzew', date: new Date(2025,5,10), time: '10.06.2025 14:00', type: 'Terenowe', link: '', location: 'Arboretum PSDiA' },
    { title: 'Propagacja drzew', date: new Date(2025,5,12), time: '12.06.2025 11:00', type: 'Sala 103', link: '', location: 'UBB, Sala 103' }
  ];

  const tasks = [
    { title: 'Oddaj projekt ekologiczny', due: '15.06.2025', status: 'Oczekujące' },
    { title: 'Zadanie testowe: Patologia drzew', due: '20.06.2025', status: 'Oczekujące' },
    { title: 'Referat o gatunkach chronionych', due: '30.06.2025', status: 'Oczekujące' }
  ];

  const history = [
    { title: 'Test I: Fotosynteza', completed: '01.06.2025' },
    { title: 'Sprawozdanie z laboratorium', completed: '28.05.2025' }
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(5);
  const [contactMode, setContactMode] = useState(null);
  const [message, setMessage] = useState('');

  const daysInMonth = (() => {
    const year = 2025;
    const m = currentMonthIndex;
    const count = new Date(year, m + 1, 0).getDate();
    return Array.from({ length: count }, (_, i) => ({ day: i + 1, month: m }));
  })();

  const monthNames = ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec'];

  const handleSend = () => {
    alert(`Wiadomość wysłana do ${contactMode}: ${message}`);
    setMessage('');
    setContactMode(null);
  };

  return (
    <div style={{ padding: 24, background: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, margin: 0 }}>Panel Kursanta</h1>
        <p style={{ color: '#6b7280' }}>Śledź swoje zaliczenia i plan zajęć</p>
      </header>

      <section style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
        {stats.map((s,i) => (
          <div key={i} style={{ background: s.bg, padding:16, borderRadius:16, flex:'1 1 200px', display:'flex', alignItems:'center', gap:12 }}>
            <div style={{ background: s.color, padding:8, borderRadius:'50%', color:'white' }}><s.icon size={20}/></div>
            <div>
              <p style={{ margin:0, fontSize:20, fontWeight:'bold', color: s.color }}>{s.value}</p>
              <p style={{ margin:0, color:'#374151' }}>{s.label}</p>
            </div>
          </div>
        ))}
      </section>

      <section style={{ marginBottom:32, textAlign:'center' }}>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:16, marginBottom:8 }}>
          <button onClick={()=>setCurrentMonthIndex(idx=>Math.max(5,idx-1))} style={{ borderRadius:8, padding:'4px 12px' }}>&lt;</button>
          <h2 style={{ margin:0 }}>{monthNames[currentMonthIndex]} 2025</h2>
          <button onClick={()=>setCurrentMonthIndex(idx=>Math.min(6,idx+1))} style={{ borderRadius:8, padding:'4px 12px' }}>&gt;</button>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:4, maxWidth:700, margin:'auto' }}>
          {daysInMonth.map(({day},idx) => {
            const isEvent = upcoming.some(e => e.date.getDate() === day && e.date.getMonth() === currentMonthIndex);
            return (
              <div key={idx}
                style={{ padding:10, textAlign:'center', borderRadius:12, border:'1px solid #e5e7eb', background: isEvent ? '#dcfce7' : 'white', cursor: isEvent ? 'pointer' : 'default' }}
                onClick={() => {
                  const ev = upcoming.find(e => e.date.getDate() === day && e.date.getMonth() === currentMonthIndex);
                  if (ev) setSelectedEvent(ev);
                }}
              >{day}</div>
            );
          })}
        </div>
      </section>

      <section style={{ background:'white', padding:16, borderRadius:16, maxWidth:600, margin:'32px auto' }}>
        <h2 style={{ marginBottom:16 }}>Nadchodzące zajęcia</h2>
        <ul style={{ listStyle:'none', padding:0, margin:0 }}>
          {upcoming
            .filter(e => e.date.getMonth() === currentMonthIndex)
            .map((c,i) => (
              <li key={i} onClick={() => setSelectedEvent(c)}
                  style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 12px', borderBottom:'1px solid #e5e8f0', borderRadius:12, background:'#ecfdf5', cursor:'pointer' }}>
                <div>
                  <strong>{c.title}</strong>
                  <div style={{ fontSize:13, color:'#6b7280' }}>{c.time}</div>
                </div>
                <div style={{ fontSize:13, textAlign:'right' }}>
                  {c.type === 'Online'
                    ? <a href={c.link} target="_blank" rel="noopener noreferrer">Teams</a>
                    : <span>{c.location}</span>
                  }
                </div>
              </li>
            ))}
        </ul>
      </section>

      <section style={{ background:'white', padding:16, borderRadius:16, maxWidth:600, margin:'32px auto' }}>
        <h2 style={{ marginBottom:16 }}>Twoje zadania</h2>
        <ul style={{ listStyle:'none', padding:0, margin:0 }}> 
          {tasks.map((t,i)=> (
            <li key={i} onClick={()=>setSelectedTask(t)}
              style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 8px', borderBottom:'1px solid #e5e7f0', cursor:'pointer', borderRadius:12 }}>
              <div>
                <p style={{ margin:0, fontWeight:500 }}>{t.title}</p>
              </div>
              <div style={{ fontSize:13, color:'#6b7280' }}>Termin: {t.due} - {t.status}</div>
            </li>
          ))}
        </ul>
        {selectedTask && (
          <div style={{ marginTop:16, padding:16, background:'#f0fdf4', borderRadius:12, textAlign:'left' }}>
            <p style={{ margin:0, fontWeight:600 }}>{selectedTask.title}</p>
            <p style={{ margin:'8px 0 0' }}>Termin wykonania: {selectedTask.due}</p>
            <button onClick={()=>setSelectedTask(null)}
              style={{ marginTop:8, padding:'8px 12px', border:'none', background:'#16a34a', color:'white', borderRadius:8 }}>Zamknij</button>
          </div>
        )}
      </section>

      <section style={{ background:'white', padding:16, borderRadius:16, maxWidth:600, margin:'32px auto' }}>
        <h2 style={{ marginBottom:16 }}>Historia zadań</h2>
        <ul style={{ listStyle:'none', padding:0, margin:0 }}>
          {history.map((h,i)=> (
            <li key={i} style={{ padding:'8px 0', borderBottom:'1px solid #e5e7f0' }}>
              <p style={{ margin:0 }}>{h.title}</p>
              <p style={{ margin:0, fontSize:12, color:'#6b7280' }}>Zakończone: {h.completed}</p>
            </li>
          ))}
        </ul>
      </section>

      <section style={{ background:'white', padding:16, borderRadius:16, maxWidth:600, margin:'32px auto' }}>
        <h2 style={{ marginBottom:16, display:'flex', alignItems:'center', gap:8 }}><Mail /> Komunikacja i wsparcie</h2>
        {contactMode ? (
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder={`Wpisz wiadomość do ${contactMode}`}
              style={{ padding:12, borderRadius:8, border:'1px solid #ccc', minHeight:100 }}
            />
            <button onClick={handleSend} style={{ padding:'10px 16px', background:'#16a34a', color:'white', border:'none', borderRadius:8 }}>Wyślij</button>
            <button onClick={() => setContactMode(null)} style={{ padding:'6px 12px', border:'none', background:'#e5e7eb', borderRadius:8 }}>Anuluj</button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <button onClick={() => setContactMode('wykładowcy')} style={{ padding: '10px 16px', background: '#16a34a', color: 'white', border: 'none', borderRadius: 8 }}>
              Napisz do wykładowcy
            </button>
            <button onClick={() => setContactMode('administracji')} style={{ padding: '10px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: 8 }}>
              Skontaktuj się z administracją
            </button>
          </div>
        )}
      </section>
    </div>
  );
}