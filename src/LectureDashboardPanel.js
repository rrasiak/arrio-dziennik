import React, { useState } from 'react';
import { BookOpen, Users, ClipboardList, Calendar as CalendarIcon, BarChart2, Mail, PlusCircle, FileText, Edit2 } from 'lucide-react';

export default function LectureDashboardPanel() {
  const [courses, setCourses] = useState([
    { name: 'Dendrologia I', schedule: 'Wtorki 09:00', date: '03.06.2025', students: 32 },
    { name: 'Ekologia drzew', schedule: 'Czwartki 14:00', date: '10.06.2025', students: 28 },
    { name: 'Arborystyka II', schedule: 'Piątki 12:00', date: '05.06.2025', students: 30 },
    { name: 'Gleboznawstwo', schedule: 'Środy 11:00', date: '07.06.2025', students: 35 }
  ]);
  const [newCourse, setNewCourse] = useState({ name: '', schedule: '', date: '', students: 0 });

  const [assignments, setAssignments] = useState([
    { title: 'Projekt ekologiczny', description: 'Stwórz projekt dotyczący ochrony lokalnego środowiska.', due: '15.06.2025', submissions: 25, files: ['projekt_anna.pdf', 'projekt_jan.docx', 'projekt_marek.pdf'], editable: false },
    { title: 'Test: Patologia drzew', description: 'Rozwiąż test z zakresu patologii drzew.', due: '20.06.2025', submissions: 30, files: ['test_marta.pdf', 'test_ola.docx'], editable: false },
    { title: 'Sprawozdanie z terenowych', description: 'Napisz sprawozdanie z ostatnich zajęć terenowych.', due: '25.06.2025', submissions: 22, files: ['terenowy_karol.pdf', 'terenowy_ewa.docx', 'terenowy_adam.pdf'], editable: false }
  ]);

  const grades = {
    'Grupa A': [...Array(8).keys()].map((i) => ({ name: `Student A${i+1}`, grade: `${(Math.random()*2+3).toFixed(1)}` })),
    'Grupa B': [...Array(8).keys()].map((i) => ({ name: `Student B${i+1}`, grade: `${(Math.random()*2+3).toFixed(1)}` })),
    'Grupa C': [...Array(8).keys()].map((i) => ({ name: `Student C${i+1}`, grade: `${(Math.random()*2+3).toFixed(1)}` }))
  };

  const messages = [
    { from: 'Anna Nowak', content: 'Czy można przesłać projekt do niedzieli?' },
    { from: 'Marek Zieliński', content: 'Proszę o informację o dodatkowych materiałach.' }
  ];

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [reply, setReply] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('Wszyscy');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleReply = () => {
    alert(`Wysłano odpowiedź do ${selectedMessage.from} w grupie ${selectedGroup}: ${reply}`);
    setReply('');
    setSelectedMessage(null);
  };

  const addCourse = () => {
    setCourses([...courses, { ...newCourse, students: parseInt(newCourse.students) }]);
    setNewCourse({ name: '', schedule: '', date: '', students: 0 });
  };

  const toggleEditable = (index) => {
    const updated = [...assignments];
    updated[index].editable = !updated[index].editable;
    setAssignments(updated);
  };

  const updateAssignmentTitle = (index, newTitle) => {
    const updated = [...assignments];
    updated[index].title = newTitle;
    setAssignments(updated);
  };

  const groups = ['Wszyscy', 'Grupa A', 'Grupa B', 'Grupa C'];

  const today = new Date(2025, 5); // czerwiec 2025
  const daysInMonth = Array.from({ length: 30 }, (_, i) => new Date(2025, 5, i + 1));
  const totalStudents = courses.reduce((sum, c) => sum + c.students, 0);
  const totalSubmissions = assignments.reduce((sum, a) => sum + a.submissions, 0);

  return (
    <div style={{ padding: 24, background: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <section style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
        <div style={{ background: '#e0f2fe', padding: 16, borderRadius: 16, flex: 1 }}>
          <h3 style={{ margin: 0 }}>Liczba studentów</h3>
          <p style={{ fontSize: 24, fontWeight: 'bold', color: '#0369a1' }}>{totalStudents}</p>
        </div>
        <div style={{ background: '#dcfce7', padding: 16, borderRadius: 16, flex: 1 }}>
          <h3 style={{ margin: 0 }}>Odesłane zadania</h3>
          <p style={{ fontSize: 24, fontWeight: 'bold', color: '#15803d' }}>{totalSubmissions}</p>
        </div>
      </section>

      <section style={{ background: 'white', padding: 16, borderRadius: 16, marginBottom: 32 }}>
        <h2><BookOpen /> Kursy</h2>
        <ul style={{ padding: 0 }}>
          {courses.map((c, i) => (
            <li key={i} style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
              <strong>{c.name}</strong> – {c.schedule} <span style={{ float: 'right', color: '#6b7280' }}>{c.date}</span>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 12 }}>
          <input value={newCourse.name} onChange={e => setNewCourse({ ...newCourse, name: e.target.value })} placeholder="Nazwa kursu" style={{ marginRight: 8 }} />
          <input value={newCourse.schedule} onChange={e => setNewCourse({ ...newCourse, schedule: e.target.value })} placeholder="Termin" style={{ marginRight: 8 }} />
          <input value={newCourse.date} onChange={e => setNewCourse({ ...newCourse, date: e.target.value })} placeholder="Data" style={{ marginRight: 8 }} />
          <input value={newCourse.students} type="number" onChange={e => setNewCourse({ ...newCourse, students: e.target.value })} placeholder="Liczba studentów" style={{ marginRight: 8 }} />
          <button onClick={addCourse}>Dodaj kurs</button>
        </div>
      </section>

      <section style={{ background: 'white', padding: 16, borderRadius: 16, marginBottom: 32 }}>
        <h2><CalendarIcon /> Kalendarz zajęć – Czerwiec 2025</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
          {daysInMonth.map((day, i) => {
            const dayStr = day.toISOString().split('T')[0];
            const formatted = dayStr.split('-').reverse().join('.');
            const isCourse = courses.some(c => c.date === formatted);
            return (
              <div key={i} onClick={() => setSelectedDate(formatted)}
                style={{ padding: 8, textAlign: 'center', borderRadius: 8, background: isCourse ? '#dcfce7' : '#fff', cursor: 'pointer' }}>
                {day.getDate()}
              </div>
            );
          })}
        </div>
        {selectedDate && <p style={{ marginTop: 8 }}>Wybrano dzień: {selectedDate}</p>}
      </section>

      <section style={{ background: 'white', padding: 16, borderRadius: 16, marginBottom: 32 }}>
        <h2><ClipboardList /> Zadania</h2>
        {assignments.map((a, i) => (
          <div key={i} style={{ marginBottom: 16, borderBottom: '1px solid #e5e7eb', paddingBottom: 12 }}>
            {a.editable ? (
              <input
                value={a.title}
                onChange={e => updateAssignmentTitle(i, e.target.value)}
                style={{ padding: 8, fontSize: 16, borderRadius: 8, border: '1px solid #ccc', width: '100%' }}
              />
            ) : (
              <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {a.title} <Edit2 onClick={() => toggleEditable(i)} size={16} style={{ cursor: 'pointer' }} />
              </h3>
            )}
            <p>{a.description}</p>
            <p style={{ color: '#6b7280', fontSize: 14 }}>Termin: {a.due}</p>
            <p style={{ fontSize: 14 }}>Przesłane pliki:</p>
            <ul>
              {a.files.map((file, idx) => (
                <li key={idx}><a href="#" style={{ color: '#2563eb' }}>{file}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section style={{ background: 'white', padding: 16, borderRadius: 16, marginBottom: 32 }}>
        <h2><BarChart2 /> Oceny</h2>
        {Object.entries(grades).map(([group, students], i) => (
          <div key={i} style={{ marginBottom: 24 }}>
            <h3 style={{ color: '#1e40af', marginBottom: 8 }}>{group}</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f1f5f9' }}>
                  <th style={{ padding: 8, textAlign: 'left' }}>Imię i nazwisko</th>
                  <th style={{ padding: 8, textAlign: 'left' }}>Ocena</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, j) => (
                  <tr key={j} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: 8 }}>{s.name}</td>
                    <td style={{ padding: 8 }}>{s.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>

      <section style={{ background: 'white', padding: 16, borderRadius: 16 }}>
        <h2><Mail /> Wiadomości</h2>
        {messages.map((msg, i) => (
          <div key={i} onClick={() => setSelectedMessage(msg)} style={{ padding: 8, borderBottom: '1px solid #eee', cursor: 'pointer' }}>
            <strong>{msg.from}</strong>: {msg.content}
          </div>
        ))}

        {selectedMessage && (
          <div style={{ marginTop: 16 }}>
            <h4>Odpowiedź do: {selectedMessage.from}</h4>
            <select value={selectedGroup} onChange={e => setSelectedGroup(e.target.value)}>
              {groups.map((g, i) => <option key={i} value={g}>{g}</option>)}
            </select>
            <textarea value={reply} onChange={e => setReply(e.target.value)} style={{ width: '100%', height: 80, marginTop: 8 }} />
            <button onClick={handleReply} style={{ marginTop: 8 }}>Wyślij</button>
          </div>
        )}
      </section>
    </div>
  );
}