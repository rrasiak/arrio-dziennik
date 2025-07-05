import React, { useState } from 'react';
import { 
  Calendar, Users, CheckCircle, XCircle, Clock, Download, 
  Filter, Search, Plus, Eye, BarChart3, FileText,
  ChevronDown, ChevronUp, UserCheck, UserX, AlertCircle
} from 'lucide-react';

const AttendancePanel = () => {
  const [selectedClass, setSelectedClass] = useState('dendrologia-1');
  const [selectedDate, setSelectedDate] = useState('2024-05-15');
  const [viewMode, setViewMode] = useState('daily'); // daily, weekly, monthly, student
  const [searchTerm, setSearchTerm] = useState('');
  const [showStats, setShowStats] = useState(false);

  // Przykładowe dane
  const classes = [
    { id: 'dendrologia-1', name: 'Dendrologia I', students: 24 },
    { id: 'arborystyka-2', name: 'Arborystyka II', students: 18 },
    { id: 'fizjologia', name: 'Fizjologia drzew', students: 22 }
  ];

  const students = [
    { 
      id: 1, 
      name: 'Anna Kowalska', 
      email: 'anna.kowalska@email.com',
      attendanceRate: 95,
      present: true,
      totalClasses: 20,
      presentClasses: 19,
      lateClasses: 1,
      absentClasses: 1
    },
    { 
      id: 2, 
      name: 'Jan Nowak', 
      email: 'jan.nowak@email.com',
      attendanceRate: 88,
      present: true,
      totalClasses: 20,
      presentClasses: 17,
      lateClasses: 1,
      absentClasses: 3
    },
    { 
      id: 3, 
      name: 'Maria Zielińska', 
      email: 'maria.zielinska@email.com',
      attendanceRate: 76,
      present: false,
      totalClasses: 20,
      presentClasses: 14,
      lateClasses: 2,
      absentClasses: 6
    },
    { 
      id: 4, 
      name: 'Piotr Dębowski', 
      email: 'piotr.debowski@email.com',
      attendanceRate: 92,
      present: true,
      totalClasses: 20,
      presentClasses: 18,
      lateClasses: 0,
      absentClasses: 2
    },
    { 
      id: 5, 
      name: 'Katarzyna Lipińska', 
      email: 'katarzyna.lipinska@email.com',
      attendanceRate: 84,
      present: false,
      totalClasses: 20,
      presentClasses: 16,
      lateClasses: 1,
      absentClasses: 4
    }
  ];

  const recentClasses = [
    { date: '2024-05-15', topic: 'Drzewa iglaste - identyfikacja', present: 22, absent: 2, rate: 92 },
    { date: '2024-05-13', topic: 'Choroby drzew liściastych', present: 20, absent: 4, rate: 83 },
    { date: '2024-05-10', topic: 'Praktyki terenowe - Park Miejski', present: 24, absent: 0, rate: 100 },
    { date: '2024-05-08', topic: 'Morfologia liści', present: 21, absent: 3, rate: 88 },
    { date: '2024-05-06', topic: 'System korzeniowy', present: 19, absent: 5, rate: 79 }
  ];

  const styles = {
    container: {
      padding: '2rem',
      backgroundColor: '#f8fafc',
      minHeight: '100vh'
    },
    header: {
      marginBottom: '2rem'
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#1e293b',
      marginBottom: '0.5rem'
    },
    subtitle: {
      color: '#64748b',
      fontSize: '1rem'
    },
    controlsRow: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '2rem',
      flexWrap: 'wrap',
      alignItems: 'center'
    },
    select: {
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      backgroundColor: 'white',
      fontSize: '14px',
      minWidth: '150px'
    },
    input: {
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      width: '200px'
    },
    button: {
      padding: '8px 16px',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.2s'
    },
    buttonPrimary: {
      backgroundColor: '#16a34a',
      color: 'white'
    },
    buttonSecondary: {
      backgroundColor: 'white',
      color: '#374151',
      border: '1px solid #d1d5db'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb',
      marginBottom: '1.5rem'
    },
    grid: {
      display: 'grid',
      gap: '1.5rem'
    },
    gridCols4: {
      gridTemplateColumns: 'repeat(4, 1fr)'
    },
    gridCols3: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
    statCard: {
      textAlign: 'center',
      padding: '1.5rem',
      backgroundColor: '#f8fafc',
      borderRadius: '8px',
      border: '1px solid #e2e8f0'
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    statLabel: {
      color: '#64748b',
      fontSize: '14px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse'
    },
    th: {
      textAlign: 'left',
      padding: '12px',
      borderBottom: '2px solid #e5e7eb',
      fontWeight: '600',
      color: '#374151',
      backgroundColor: '#f8fafc'
    },
    td: {
      padding: '12px',
      borderBottom: '1px solid #e5e7eb'
    },
    attendanceButton: {
      padding: '6px 12px',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '12px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    present: {
      backgroundColor: '#dcfce7',
      color: '#166534'
    },
    absent: {
      backgroundColor: '#fee2e2',
      color: '#dc2626'
    },
    late: {
      backgroundColor: '#fef3c7',
      color: '#92400e'
    },
    progressBar: {
      width: '100%',
      height: '8px',
      backgroundColor: '#e5e7eb',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      borderRadius: '4px',
      transition: 'width 0.3s'
    }
  };

  const toggleAttendance = (studentId) => {
    // Logika zmiany obecności - tutaj byłaby aktualizacja stanu
    console.log('Toggle attendance for student:', studentId);
  };

  const getAttendanceColor = (rate) => {
    if (rate >= 90) return '#16a34a';
    if (rate >= 75) return '#eab308';
    return '#dc2626';
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const classStats = {
    totalStudents: students.length,
    presentToday: students.filter(s => s.present).length,
    absentToday: students.filter(s => !s.present).length,
    averageAttendance: Math.round(students.reduce((acc, s) => acc + s.attendanceRate, 0) / students.length)
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Panel Obecności</h1>
        <p style={styles.subtitle}>
          Zarządzaj obecnością uczniów i monitoruj frekwencję
        </p>
      </div>

      {/* Controls */}
      <div style={styles.controlsRow}>
        <select 
          value={selectedClass} 
          onChange={(e) => setSelectedClass(e.target.value)}
          style={styles.select}
        >
          {classes.map(cls => (
            <option key={cls.id} value={cls.id}>{cls.name}</option>
          ))}
        </select>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={styles.input}
        />

        <select 
          value={viewMode} 
          onChange={(e) => setViewMode(e.target.value)}
          style={styles.select}
        >
          <option value="daily">Widok dzienny</option>
          <option value="weekly">Widok tygodniowy</option>
          <option value="monthly">Widok miesięczny</option>
          <option value="student">Widok studenta</option>
        </select>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', color: '#9ca3af' }} />
          <input
            type="text"
            placeholder="Szukaj ucznia..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ ...styles.input, paddingLeft: '40px' }}
          />
        </div>

        <button style={{ ...styles.button, ...styles.buttonSecondary }}>
          <Download size={16} />
          Eksport Excel
        </button>

        <button 
          style={{ ...styles.button, ...styles.buttonPrimary }}
          onClick={() => setShowStats(!showStats)}
        >
          <BarChart3 size={16} />
          {showStats ? 'Ukryj' : 'Pokaż'} Statystyki
        </button>
      </div>

      {/* Statistics Cards */}
      {showStats && (
        <div style={{ ...styles.grid, ...styles.gridCols4, marginBottom: '2rem' }}>
          <div style={styles.statCard}>
            <div style={{ ...styles.statNumber, color: '#1e293b' }}>
              {classStats.totalStudents}
            </div>
            <div style={styles.statLabel}>Łącznie uczniów</div>
          </div>
          <div style={styles.statCard}>
            <div style={{ ...styles.statNumber, color: '#16a34a' }}>
              {classStats.presentToday}
            </div>
            <div style={styles.statLabel}>Obecni dziś</div>
          </div>
          <div style={styles.statCard}>
            <div style={{ ...styles.statNumber, color: '#dc2626' }}>
              {classStats.absentToday}
            </div>
            <div style={styles.statLabel}>Nieobecni dziś</div>
          </div>
          <div style={styles.statCard}>
            <div style={{ ...styles.statNumber, color: '#eab308' }}>
              {classStats.averageAttendance}%
            </div>
            <div style={styles.statLabel}>Średnia frekwencja</div>
          </div>
        </div>
      )}

      <div style={{ ...styles.grid, ...styles.gridCols3 }}>
        {/* Current Class Attendance */}
        <div style={{ ...styles.card, gridColumn: 'span 2' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '600' }}>
              Obecność - {selectedDate}
            </h3>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{ ...styles.button, ...styles.buttonSecondary, fontSize: '12px' }}>
                <UserCheck size={14} />
                Wszyscy obecni
              </button>
              <button style={{ ...styles.button, ...styles.buttonSecondary, fontSize: '12px' }}>
                <UserX size={14} />
                Wszyscy nieobecni
              </button>
            </div>
          </div>

          <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Uczeń</th>
                  <th style={styles.th}>Email</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Frekwencja</th>
                  <th style={styles.th}>Akcje</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map(student => (
                  <tr key={student.id}>
                    <td style={styles.td}>
                      <div style={{ fontWeight: '500' }}>{student.name}</div>
                    </td>
                    <td style={styles.td}>
                      <div style={{ color: '#64748b', fontSize: '14px' }}>{student.email}</div>
                    </td>
                    <td style={styles.td}>
                      <button
                        onClick={() => toggleAttendance(student.id)}
                        style={{
                          ...styles.attendanceButton,
                          ...(student.present ? styles.present : styles.absent)
                        }}
                      >
                        {student.present ? (
                          <>
                            <CheckCircle size={14} />
                            Obecny
                          </>
                        ) : (
                          <>
                            <XCircle size={14} />
                            Nieobecny
                          </>
                        )}
                      </button>
                    </td>
                    <td style={styles.td}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={styles.progressBar}>
                          <div 
                            style={{
                              ...styles.progressFill,
                              width: `${student.attendanceRate}%`,
                              backgroundColor: getAttendanceColor(student.attendanceRate)
                            }}
                          />
                        </div>
                        <span style={{ 
                          fontSize: '14px', 
                          fontWeight: '500',
                          color: getAttendanceColor(student.attendanceRate),
                          minWidth: '40px'
                        }}>
                          {student.attendanceRate}%
                        </span>
                      </div>
                    </td>
                    <td style={styles.td}>
                      <button style={{ ...styles.button, ...styles.buttonSecondary, fontSize: '12px' }}>
                        <Eye size={14} />
                        Szczegóły
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Classes */}
        <div style={styles.card}>
          <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
            Ostatnie zajęcia
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentClasses.map((classItem, index) => (
              <div 
                key={index}
                style={{
                  padding: '1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '500', color: '#1e293b' }}>
                    {classItem.date}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: getAttendanceColor(classItem.rate)
                  }}>
                    {classItem.rate}%
                  </div>
                </div>
                
                <div style={{ 
                  fontSize: '13px', 
                  color: '#64748b', 
                  marginBottom: '0.5rem',
                  lineHeight: '1.4'
                }}>
                  {classItem.topic}
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  fontSize: '12px',
                  color: '#9ca3af'
                }}>
                  <span>Obecni: {classItem.present}</span>
                  <span>Nieobecni: {classItem.absent}</span>
                </div>
              </div>
            ))}
          </div>

          <button style={{
            ...styles.button,
            ...styles.buttonSecondary,
            width: '100%',
            marginTop: '1rem',
            justifyContent: 'center'
          }}>
            <FileText size={16} />
            Zobacz wszystkie
          </button>
        </div>
      </div>

      {/* Student Details Modal placeholder */}
      <div style={{
        ...styles.card,
        marginTop: '2rem',
        backgroundColor: '#f0fdf4',
        border: '1px solid #bbf7d0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertCircle size={20} color="#16a34a" />
          <div>
            <h4 style={{ margin: 0, color: '#166534' }}>Panel gotowy do rozbudowy</h4>
            <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#15803d' }}>
              Funkcjonalności: eksport Excel, szczegóły studenta, masowe operacje, powiadomienia o nieobecnościach
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendancePanel;