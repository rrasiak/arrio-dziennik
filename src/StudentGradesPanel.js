import React, { useState } from 'react';
import { Search, Users, BarChart2 } from 'lucide-react';

export default function StudentGradesPanel() {
  const [selectedSemester, setSelectedSemester] = useState('2024/2025 - Semestr Letni');
  const [searchQuery, setSearchQuery] = useState('');
  const [showStats, setShowStats] = useState(false);
  const [statsDetail, setStatsDetail] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const gradesData = {
    semesters: [
      '2024/2025 - Semestr Letni',
      '2024/2025 - Semestr Zimowy',
      '2023/2024 - Semestr Letni'
    ],
    subjects: [
      { id: 1, semester: '2024/2025 - Semestr Letni', name: 'Dendrologia I', lecturer: 'Dr hab. Maria Kowalska', finalGrade: 4.5, status: 'W trakcie', grades: [
          { type: 'Kolokwium I', grade: 4.5, weight: 30, date: '2024-03-15', description: 'Rozpoznawanie drzew liściastych' },
          { type: 'Egzamin końcowy', grade: null, weight: 70, date: '2024-06-15', description: 'Egzamin końcowy' }
        ]
      },
      { id: 2, semester: '2024/2025 - Semestr Letni', name: 'Arborystyka II', lecturer: 'Dr inż. Jan Nowak', finalGrade: 4.8, status: 'Zaliczony', grades: [
          { type: 'Ćwiczenia praktyczne', grade: 5.0, weight: 40, date: '2024-03-20', description: 'Techniki wspinaczki' },
          { type: 'Egzamin praktyczny', grade: 5.0, weight: 60, date: '2024-05-20', description: 'Cięcie korony' }
        ]
      },
      { id: 7, semester: '2024/2025 - Semestr Letni', name: 'Ekologia drzew', lecturer: 'Dr Ewa Zielińska', finalGrade: 4.3, status: 'Zaliczony', grades: [
          { type: 'Projekt ekologiczny', grade: 4.3, weight: 100, date: '2024-04-10', description: 'Raport ekologiczny' }
        ]
      },
      { id: 8, semester: '2024/2025 - Semestr Letni', name: 'Propagacja drzew', lecturer: 'Prof. Jan Kowalczyk', finalGrade: null, status: 'W trakcie', grades: [
          { type: 'Laboratorium', grade: null, weight: 100, date: '2024-06-01', description: 'Propagacja nasion' }
        ]
      },
      { id: 9, semester: '2024/2025 - Semestr Letni', name: 'Anatomia drzew', lecturer: 'Dr Katarzyna Łoś', finalGrade: 4.1, status: 'Zaliczony', grades: [
          { type: 'Test I', grade: 4.1, weight: 100, date: '2024-05-05', description: 'Anatomia sekcyjna' }
        ]
      },
      { id: 3, semester: '2024/2025 - Semestr Zimowy', name: 'Dendrologia II', lecturer: 'Dr inż. Katarzyna Zielińska', finalGrade: 4.2, status: 'Zaliczony', grades: [
          { type: 'Projekt II', grade: 4.2, weight: 100, date: '2024-05-10', description: 'Herbarium II' }
        ]
      },
      { id: 4, semester: '2024/2025 - Semestr Zimowy', name: 'Arborystyka I', lecturer: 'Prof. dr hab. Tomasz Mazur', finalGrade: 4.7, status: 'Zaliczony', grades: [
          { type: 'Egzamin', grade: 4.7, weight: 100, date: '2024-04-25', description: 'Praktyczny egzamin arborystyki' }
        ]
      },
      { id: 10, semester: '2024/2025 - Semestr Zimowy', name: 'Gleboznawstwo', lecturer: 'Dr Anna Góra', finalGrade: null, status: 'W trakcie', grades: [
          { type: 'Ćwiczenia', grade: null, weight: 100, date: '2024-05-30', description: 'Analiza glebowa' }
        ]
      },
      { id: 11, semester: '2024/2025 - Semestr Zimowy', name: 'Choroby drzew', lecturer: 'Dr Michał Bąk', finalGrade: 3.8, status: 'Zaliczony', grades: [
          { type: 'Test', grade: 3.8, weight: 100, date: '2024-04-15', description: 'Patologia drzew' }
        ]
      },
      { id: 5, semester: '2023/2024 - Semestr Letni', name: 'Fizjologia drzew', lecturer: 'Prof. dr hab. Anna Zielińska', finalGrade: 4.0, status: 'Zaliczony', grades: [
          { type: 'Test', grade: 4.0, weight: 100, date: '2024-05-25', description: 'Test wiedzy teoretycznej' }
        ]
      },
      { id: 6, semester: '2023/2024 - Semestr Letni', name: 'Ochrona przyrody', lecturer: 'Dr Tomasz Las', finalGrade: null, status: 'W trakcie', grades: [
          { type: 'Referat', grade: null, weight: 100, date: '2024-06-10', description: 'Referat o gatunkach chronionych' }
        ]
      },
      { id: 12, semester: '2023/2024 - Semestr Letni', name: 'Mikrobiologia gleby', lecturer: 'Dr Paweł Wilk', finalGrade: 4.4, status: 'Zaliczony', grades: [
          { type: 'Lab', grade: 4.4, weight: 100, date: '2024-04-20', description: 'Badanie próbek gleby' }
        ]
      }
    ]
  };

  // Filter subjects by semester and search
  const filtered = gradesData.subjects.filter(
    s => s.semester === selectedSemester && s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate stats
  const completed = filtered.filter(s => s.finalGrade != null);
  const stats = {
    average: completed.length
      ? Number((completed.reduce((sum, s) => sum + s.finalGrade, 0) / completed.length).toFixed(2))
      : 0,
    completedCount: completed.length,
    pendingCount: filtered.filter(s => s.status === 'W trakcie').length,
    completedList: completed.map(s => s.name),
    pendingList: filtered.filter(s => s.status === 'W trakcie').map(s => s.name)
  };

  const getGradeColor = g =>
    g == null ? '#6b7280' : g >= 4.5 ? '#059669' : g >= 4.0 ? '#d97706' : '#dc2626';

  const cardStyle = { background: 'white', borderRadius: '8px', padding: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' };
  const activeStyle = { background: '#dcfce7' };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#f8fafc', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', margin: 0 }}>Moje Oceny</h1>
        <p style={{ color: '#6b7280', margin: 0 }}>Przeglądaj oceny i statystyki</p>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <select
          value={selectedSemester}
          onChange={e => setSelectedSemester(e.target.value)}
          style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #d1d5db' }}
        >
          {gradesData.semesters.map((sem, i) => <option key={i}>{sem}</option>)}
        </select>
        <div style={{ position: 'relative' }}>
          <Search size={20} style={{ position: 'absolute', top: '50%', left: '12px', transform: 'translateY(-50%)', color: '#9ca3af' }} />
          <input
            type="text"
            placeholder="Szukaj przedmiotu..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{ padding: '0.5rem 1rem 0.5rem 2rem', borderRadius: '6px', border: '1px solid #d1d5db', width: '200px' }}
          />
        </div>
        <Users size={20} style={{ cursor: 'pointer' }} onClick={() => console.log('Export')} />
        <button onClick={() => { setShowStats(!showStats); setStatsDetail(null); }} style={{ padding: '0.5rem 1rem', borderRadius: '6px', background: '#059669', color: 'white', border: 'none', cursor: 'pointer' }}>
          <BarChart2 size={20} style={{ marginRight: '0.5rem' }} />
          {showStats ? 'Ukryj Statystyki' : 'Pokaż Statystyki'}
        </button>
      </div>

      {/* Statistics */}
      {showStats && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div onClick={() => setStatsDetail('average')} style={{ ...cardStyle, ...(statsDetail === 'average' ? activeStyle : {}) }}>
            <h3 style={{ margin: 0 }}>Średnia ocen</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#059669', margin: '0.5rem 0' }}>{stats.average}</p>
          </div>
          <div onClick={() => setStatsDetail('completed')} style={{ ...cardStyle, ...(statsDetail === 'completed' ? activeStyle : {}) }}>
            <h3 style={{ margin: 0 }}>Zaliczone</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#059669', margin: '0.5rem 0' }}>{stats.completedCount}</p>
          </div>
          <div onClick={() => setStatsDetail('pending')} style={{ ...cardStyle, ...(statsDetail === 'pending' ? { background: '#fefce8' } : {}) }}>
            <h3 style={{ margin: 0 }}>W trakcie</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#d97706', margin: '0.5rem 0' }}>{stats.pendingCount}</p>
          </div>
        </div>
      )}

      {/* Stats detail lists */}
      {statsDetail === 'completed' && (
        <div style={{ marginBottom: '2rem' }}>
          <h4>Zaliczone przedmioty:</h4>
          <ul>{stats.completedList.map((n, i) => <li key={i}>{n}</li>)}</ul>
        </div>
      )}
      {statsDetail === 'pending' && (
        <div style={{ marginBottom: '2rem' }}>
          <h4>W trakcie:</h4>
          <ul>{stats.pendingList.map((n, i) => <li key={i}>{n}</li>)}</ul>
        </div>
      )}

      {/* Subject cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '1rem' }}>
        {filtered.map(sub => (
          <div key={sub.id} style={cardStyle}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{sub.name}</h3>
            <p style={{ margin: '0 0 0.25rem 0', color: '#6b7280' }}>{sub.lecturer}</p>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: 'bold', color: getGradeColor(sub.finalGrade) }}>{sub.finalGrade ?? '—'}</p>
            <span style={{ display: 'inline-block', padding: '0.25rem 0.5rem', borderRadius: '6px', background: sub.status === 'Zaliczony' ? '#dcfce7' : '#fefce8', color: sub.status === 'Zaliczony' ? '#166534' : '#92400e' }}>{sub.status}</span>
            <button onClick={() => setSelectedSubject(sub)} style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.75rem', background: '#059669', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Szczegóły</button>
          </div>
        ))}
      </div>

      {/* Modal details */}
      {selectedSubject && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: 'white', borderRadius: '8px', padding: '2rem', width: '90%', maxWidth: '600px', maxHeight: '80vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h2 style={{ margin: 0 }}>{selectedSubject.name}</h2>
              <button onClick={() => setSelectedSubject(null)} style={{ background: 'none', border: 'none', fontSize: '1.25rem', cursor: 'pointer' }}>✕</button>
            </div>
            {selectedSubject.grades.map((g, i) => (
              <div key={i} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{g.type}</span>
                  <span style={{ fontWeight: 'bold', color: getGradeColor(g.grade) }}>{g.grade ?? '—'}</span>
                </div>
                <p style={{ margin: '0.25rem 0', fontSize: '0.875rem', color: '#6b7280' }}>{g.date}</p>
                <p style={{ margin: 0 }}>{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const getGradeColor = g =>
  g == null ? '#6b7280' : g >= 4.5 ? '#059669' : g >= 4.0 ? '#d97706' : '#dc2626';
