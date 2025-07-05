import React, { useState } from 'react';
import { 
  Users, BookOpen, Plus, Edit3, Trash2, Calendar, Clock, 
  User, GraduationCap, Settings, Filter, Search, MoreVertical,
  ChevronDown, ChevronRight, Star, Target, BarChart3, PieChart,
  TrendingUp, Award, CheckCircle, AlertCircle, XCircle, Eye,
  Download, Upload, Copy, Share2, Archive, RefreshCw, Save,
  MapPin, Phone, Mail, FileText, Image, Video, Folder,
  Hash, Globe, Shield, Key, Bell, Monitor, Smartphone
} from 'lucide-react';

const GroupsCoursesPanel = () => {
  const [activeView, setActiveView] = useState('groups'); // groups, courses, calendar
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Przykładowe dane grup
  const groups = [
    {
      id: 1,
      name: 'Dendrologia I - Grupa A',
      code: 'DEND-1A',
      course: 'Dendrologia podstawowa',
      teacher: 'Dr Maria Zielińska',
      students: 24,
      maxStudents: 30,
      schedule: {
        day: 'Poniedziałek',
        time: '09:00 - 11:30',
        room: 'Sala 101'
      },
      progress: 65,
      avgGrade: 4.2,
      attendance: 92,
      status: 'active',
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      description: 'Podstawy dendrologii - identyfikacja drzew, morfologia',
      materials: 15,
      assignments: 8,
      nextClass: '2024-05-20 09:00'
    },
    {
      id: 2,
      name: 'Arborystyka II - Zaawansowana',
      code: 'ARBO-2',
      course: 'Arborystyka praktyczna',
      teacher: 'Mgr Piotr Kowalski',
      students: 18,
      maxStudents: 20,
      schedule: {
        day: 'Środa',
        time: '14:00 - 17:00',
        room: 'Arboretum'
      },
      progress: 80,
      avgGrade: 4.0,
      attendance: 88,
      status: 'active',
      startDate: '2024-02-01',
      endDate: '2024-07-15',
      description: 'Zaawansowane techniki arborystyczne, praktyki terenowe',
      materials: 22,
      assignments: 12,
      nextClass: '2024-05-22 14:00'
    },
    {
      id: 3,
      name: 'Fizjologia Drzew - Eksperymentalna',
      code: 'FIZJ-EXP',
      course: 'Fizjologia drzew',
      teacher: 'Dr Anna Nowak',
      students: 22,
      maxStudents: 25,
      schedule: {
        day: 'Piątek',
        time: '10:00 - 13:00',
        room: 'Laboratorium'
      },
      progress: 45,
      avgGrade: 4.5,
      attendance: 96,
      status: 'paused',
      startDate: '2024-03-01',
      endDate: '2024-08-30',
      description: 'Badania fizjologiczne, eksperymenty laboratoryjne',
      materials: 18,
      assignments: 6,
      nextClass: null
    }
  ];

  // Przykładowe dane kursów
  const courses = [
    {
      id: 1,
      name: 'Dendrologia podstawowa',
      code: 'DEND-001',
      category: 'Teoria',
      duration: '1 semestr',
      credits: 5,
      groups: 2,
      totalStudents: 45,
      teachers: ['Dr Maria Zielińska', 'Dr Jan Kowalski'],
      status: 'active',
      description: 'Podstawowy kurs dendrologii obejmujący identyfikację gatunków',
      prerequisites: [],
      objectives: [
        'Identyfikacja podstawowych gatunków drzew',
        'Znajomość morfologii liści i kory',
        'Podstawy systematyki dendrologicznej'
      ]
    },
    {
      id: 2,
      name: 'Arborystyka praktyczna',
      code: 'ARBO-002',
      category: 'Praktyka',
      duration: '2 semestry',
      credits: 8,
      groups: 3,
      totalStudents: 38,
      teachers: ['Mgr Piotr Kowalski', 'Mgr Anna Dębowska'],
      status: 'active',
      description: 'Praktyczne umiejętności pracy z drzewami w środowisku miejskim',
      prerequisites: ['Dendrologia podstawowa'],
      objectives: [
        'Techniki przycinania i formowania',
        'Ocena stanu zdrowotnego drzew',
        'Bezpieczeństwo pracy na wysokości'
      ]
    }
  ];

  const statistics = {
    totalGroups: groups.length,
    activeGroups: groups.filter(g => g.status === 'active').length,
    totalStudents: groups.reduce((sum, g) => sum + g.students, 0),
    avgAttendance: Math.round(groups.reduce((sum, g) => sum + g.attendance, 0) / groups.length),
    avgGrade: (groups.reduce((sum, g) => sum + g.avgGrade, 0) / groups.length).toFixed(1)
  };

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
    viewTabs: {
      display: 'flex',
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '0.5rem',
      border: '1px solid #e5e7eb',
      marginBottom: '2rem',
      gap: '0.5rem'
    },
    viewTab: {
      padding: '0.75rem 1.5rem',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'all 0.2s',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    viewTabActive: {
      backgroundColor: '#16a34a',
      color: 'white'
    },
    viewTabInactive: {
      color: '#64748b'
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
      flexWrap: 'wrap',
      gap: '1rem'
    },
    toolbarLeft: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center'
    },
    toolbarRight: {
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center'
    },
    searchInput: {
      padding: '8px 12px 8px 40px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      width: '250px',
      backgroundColor: 'white'
    },
    select: {
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      backgroundColor: 'white',
      fontSize: '14px'
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
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    statCard: {
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      textAlign: 'center'
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
    mainContent: {
      display: 'grid',
      gridTemplateColumns: selectedGroup ? '1fr 400px' : '1fr',
      gap: '2rem'
    },
    groupsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
      gap: '1.5rem'
    },
    groupCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      padding: '1.5rem',
      transition: 'all 0.2s',
      cursor: 'pointer'
    },
    groupCardHover: {
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      borderColor: '#16a34a'
    },
    groupHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem'
    },
    groupTitle: {
      fontWeight: '600',
      fontSize: '1.125rem',
      color: '#1e293b',
      marginBottom: '4px'
    },
    groupCode: {
      fontSize: '12px',
      color: '#64748b',
      fontFamily: 'monospace'
    },
    statusBadge: {
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: '500'
    },
    statusActive: {
      backgroundColor: '#dcfce7',
      color: '#166534'
    },
    statusPaused: {
      backgroundColor: '#fef3c7',
      color: '#92400e'
    },
    statusCompleted: {
      backgroundColor: '#f3f4f6',
      color: '#6b7280'
    },
    groupMeta: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginBottom: '1rem',
      fontSize: '14px'
    },
    metaItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      color: '#64748b'
    },
    progressSection: {
      marginBottom: '1rem'
    },
    progressBar: {
      width: '100%',
      height: '8px',
      backgroundColor: '#f1f5f9',
      borderRadius: '4px',
      overflow: 'hidden',
      marginBottom: '0.5rem'
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#16a34a',
      borderRadius: '4px',
      transition: 'width 0.3s'
    },
    progressStats: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '12px',
      color: '#64748b'
    },
    groupActions: {
      display: 'flex',
      gap: '0.5rem',
      marginTop: '1rem'
    },
    actionButton: {
      padding: '4px 8px',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      borderRadius: '4px',
      transition: 'background-color 0.2s',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '12px'
    },
    sidebar: {
      backgroundColor: 'white',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      padding: '1.5rem',
      height: 'fit-content',
      position: 'sticky',
      top: '2rem'
    },
    sidebarTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#1e293b'
    },
    detailSection: {
      marginBottom: '1.5rem'
    },
    detailLabel: {
      fontSize: '12px',
      fontWeight: '500',
      color: '#64748b',
      textTransform: 'uppercase',
      marginBottom: '0.5rem'
    },
    detailValue: {
      fontSize: '14px',
      color: '#1e293b',
      marginBottom: '1rem'
    },
    studentsList: {
      maxHeight: '200px',
      overflowY: 'auto'
    },
    studentItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '0.5rem 0',
      borderBottom: '1px solid #f1f5f9'
    },
    studentAvatar: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      backgroundColor: '#e5e7eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '10px',
      fontWeight: '500'
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '2rem',
      width: '90%',
      maxWidth: '600px',
      maxHeight: '90vh',
      overflowY: 'auto'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginBottom: '1rem'
    },
    formGroup: {
      marginBottom: '1rem'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '6px'
    },
    input: {
      width: '100%',
      padding: '10px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      boxSizing: 'border-box'
    },
    textarea: {
      width: '100%',
      padding: '10px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      minHeight: '80px',
      resize: 'vertical',
      boxSizing: 'border-box'
    }
  };

  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || group.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const CreateGroupModal = () => (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '600' }}>Utwórz nową grupę</h3>
          <button
            onClick={() => setShowCreateModal(false)}
            style={{ ...styles.actionButton, fontSize: '20px' }}
          >
            ×
          </button>
        </div>

        <div style={styles.formGrid}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Nazwa grupy *</label>
            <input type="text" style={styles.input} placeholder="Dendrologia I - Grupa B" />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Kod grupy *</label>
            <input type="text" style={styles.input} placeholder="DEND-1B" />
          </div>
        </div>

        <div style={styles.formGrid}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Kurs *</label>
            <select style={styles.input}>
              <option>Dendrologia podstawowa</option>
              <option>Arborystyka praktyczna</option>
              <option>Fizjologia drzew</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Prowadzący *</label>
            <select style={styles.input}>
              <option>Dr Maria Zielińska</option>
              <option>Mgr Piotr Kowalski</option>
              <option>Dr Anna Nowak</option>
            </select>
          </div>
        </div>

        <div style={styles.formGrid}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Maksymalna liczba uczniów</label>
            <input type="number" style={styles.input} defaultValue="30" />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Sala</label>
            <input type="text" style={styles.input} placeholder="Sala 101" />
          </div>
        </div>

        <div style={styles.formGrid}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Dzień tygodnia</label>
            <select style={styles.input}>
              <option>Poniedziałek</option>
              <option>Wtorek</option>
              <option>Środa</option>
              <option>Czwartek</option>
              <option>Piątek</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Godziny zajęć</label>
            <input type="text" style={styles.input} placeholder="09:00 - 11:30" />
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Opis grupy</label>
          <textarea
            style={styles.textarea}
            placeholder="Krótki opis celów i charakterystyki grupy..."
          />
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <button
            onClick={() => setShowCreateModal(false)}
            style={{ ...styles.button, ...styles.buttonSecondary }}
          >
            Anuluj
          </button>
          <button style={{ ...styles.button, ...styles.buttonPrimary }}>
            <Save size={16} />
            Utwórz grupę
          </button>
        </div>
      </div>
    </div>
  );

  const GroupSidebar = ({ group }) => (
    <div style={styles.sidebar}>
      <h3 style={styles.sidebarTitle}>{group.name}</h3>
      
      <div style={styles.detailSection}>
        <div style={styles.detailLabel}>Kurs</div>
        <div style={styles.detailValue}>{group.course}</div>
      </div>

      <div style={styles.detailSection}>
        <div style={styles.detailLabel}>Prowadzący</div>
        <div style={styles.detailValue}>{group.teacher}</div>
      </div>

      <div style={styles.detailSection}>
        <div style={styles.detailLabel}>Harmonogram</div>
        <div style={styles.detailValue}>
          {group.schedule.day}<br />
          {group.schedule.time}<br />
          {group.schedule.room}
        </div>
      </div>

      <div style={styles.detailSection}>
        <div style={styles.detailLabel}>Statystyki</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '14px' }}>
          <div>
            <div style={{ fontWeight: 'bold', color: '#16a34a' }}>{group.avgGrade}</div>
            <div style={{ fontSize: '12px', color: '#64748b' }}>Średnia</div>
          </div>
          <div>
            <div style={{ fontWeight: 'bold', color: '#16a34a' }}>{group.attendance}%</div>
            <div style={{ fontSize: '12px', color: '#64748b' }}>Frekwencja</div>
          </div>
        </div>
      </div>

      <div style={styles.detailSection}>
        <div style={styles.detailLabel}>Uczniowie ({group.students}/{group.maxStudents})</div>
        <div style={styles.studentsList}>
          {Array.from({ length: Math.min(group.students, 10) }, (_, i) => (
            <div key={i} style={styles.studentItem}>
              <div style={styles.studentAvatar}>
                {String.fromCharCode(65 + i)}{String.fromCharCode(75 + i)}
              </div>
              <span style={{ fontSize: '14px' }}>
                Student {i + 1}
              </span>
            </div>
          ))}
          {group.students > 10 && (
            <div style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', marginTop: '0.5rem' }}>
              i {group.students - 10} więcej...
            </div>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <button style={{ ...styles.button, ...styles.buttonPrimary, justifyContent: 'center' }}>
          <Edit3 size={16} />
          Edytuj grupę
        </button>
        <button style={{ ...styles.button, ...styles.buttonSecondary, justifyContent: 'center' }}>
          <Users size={16} />
          Zarządzaj uczniami
        </button>
        <button style={{ ...styles.button, ...styles.buttonSecondary, justifyContent: 'center' }}>
          <Calendar size={16} />
          Plan zajęć
        </button>
      </div>
    </div>
  );

  const renderGroupsView = () => (
    <div style={styles.mainContent}>
      <div>
        <div style={styles.groupsGrid}>
          {filteredGroups.map(group => (
            <div
              key={group.id}
              style={{
                ...styles.groupCard,
                ...(selectedGroup?.id === group.id ? { borderColor: '#16a34a', backgroundColor: '#f0fdf4' } : {})
              }}
              onClick={() => setSelectedGroup(selectedGroup?.id === group.id ? null : group)}
            >
              <div style={styles.groupHeader}>
                <div>
                  <h4 style={styles.groupTitle}>{group.name}</h4>
                  <div style={styles.groupCode}>{group.code}</div>
                </div>
                <span style={{
                  ...styles.statusBadge,
                  ...(group.status === 'active' ? styles.statusActive :
                      group.status === 'paused' ? styles.statusPaused : styles.statusCompleted)
                }}>
                  {group.status === 'active' ? 'Aktywna' :
                   group.status === 'paused' ? 'Wstrzymana' : 'Zakończona'}
                </span>
              </div>

              <div style={styles.groupMeta}>
                <div style={styles.metaItem}>
                  <User size={14} />
                  <span>{group.teacher}</span>
                </div>
                <div style={styles.metaItem}>
                  <Users size={14} />
                  <span>{group.students}/{group.maxStudents}</span>
                </div>
                <div style={styles.metaItem}>
                  <Calendar size={14} />
                  <span>{group.schedule.day}</span>
                </div>
                <div style={styles.metaItem}>
                  <Clock size={14} />
                  <span>{group.schedule.time}</span>
                </div>
              </div>

              <div style={styles.progressSection}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>Postęp kursu</span>
                  <span style={{ fontSize: '14px', color: '#16a34a', fontWeight: '500' }}>
                    {group.progress}%
                  </span>
                </div>
                <div style={styles.progressBar}>
                  <div style={{
                    ...styles.progressFill,
                    width: `${group.progress}%`
                  }} />
                </div>
                <div style={styles.progressStats}>
                  <span>Średnia: {group.avgGrade}</span>
                  <span>Frekwencja: {group.attendance}%</span>
                </div>
              </div>

              <div style={styles.groupActions}>
                <button style={styles.actionButton}>
                  <Eye size={14} />
                  Szczegóły
                </button>
                <button style={styles.actionButton}>
                  <Edit3 size={14} />
                  Edytuj
                </button>
                <button style={styles.actionButton}>
                  <Calendar size={14} />
                  Harmonogram
                </button>
                <button style={styles.actionButton}>
                  <MoreVertical size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedGroup && <GroupSidebar group={selectedGroup} />}
    </div>
  );

  const renderCoursesView = () => (
    <div style={styles.groupsGrid}>
      {courses.map(course => (
        <div key={course.id} style={styles.groupCard}>
          <div style={styles.groupHeader}>
            <div>
              <h4 style={styles.groupTitle}>{course.name}</h4>
              <div style={styles.groupCode}>{course.code} • {course.category}</div>
            </div>
            <span style={{ ...styles.statusBadge, ...styles.statusActive }}>
              {course.status === 'active' ? 'Aktywny' : 'Nieaktywny'}
            </span>
          </div>

          <div style={{ marginBottom: '1rem', fontSize: '14px', color: '#64748b' }}>
            {course.description}
          </div>

          <div style={styles.groupMeta}>
            <div style={styles.metaItem}>
              <Clock size={14} />
              <span>{course.duration}</span>
            </div>
            <div style={styles.metaItem}>
              <Award size={14} />
              <span>{course.credits} ECTS</span>
            </div>
            <div style={styles.metaItem}>
              <Users size={14} />
              <span>{course.groups} grup</span>
            </div>
            <div style={styles.metaItem}>
              <GraduationCap size={14} />
              <span>{course.totalStudents} studentów</span>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: '12px', fontWeight: '500', color: '#64748b', marginBottom: '0.5rem' }}>
              PROWADZĄCY:
            </div>
            {course.teachers.map((teacher, idx) => (
              <div key={idx} style={{ fontSize: '14px', marginBottom: '2px' }}>
                {teacher}
              </div>
            ))}
          </div>

          <div style={styles.groupActions}>
            <button style={styles.actionButton}>
              <Eye size={14} />
              Szczegóły
            </button>
            <button style={styles.actionButton}>
              <Edit3 size={14} />
              Edytuj
            </button>
            <button style={styles.actionButton}>
              <Users size={14} />
              Grupy
            </button>
            <button style={styles.actionButton}>
              <MoreVertical size={14} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Panel Grup i Kursów</h1>
        <p style={styles.subtitle}>
          Kompleksowe zarządzanie grupami uczniów i kursami edukacyjnymi
        </p>
      </div>

      {/* View Tabs */}
      <div style={styles.viewTabs}>
        <div
          style={{
            ...styles.viewTab,
            ...(activeView === 'groups' ? styles.viewTabActive : styles.viewTabInactive)
          }}
          onClick={() => setActiveView('groups')}
        >
          <Users size={16} />
          Grupy uczniów
        </div>
        <div
          style={{
            ...styles.viewTab,
            ...(activeView === 'courses' ? styles.viewTabActive : styles.viewTabInactive)
          }}
          onClick={() => setActiveView('courses')}
        >
          <BookOpen size={16} />
          Kursy
        </div>
        <div
          style={{
            ...styles.viewTab,
            ...(activeView === 'calendar' ? styles.viewTabActive : styles.viewTabInactive)
          }}
          onClick={() => setActiveView('calendar')}
        >
          <Calendar size={16} />
          Kalendarz
        </div>
      </div>

      {/* Statistics */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={{ ...styles.statNumber, color: '#1e293b' }}>{statistics.totalGroups}</div>
          <div style={styles.statLabel}>Łącznie grup</div>
        </div>
        <div style={styles.statCard}>
          <div style={{ ...styles.statNumber, color: '#16a34a' }}>{statistics.activeGroups}</div>
          <div style={styles.statLabel}>Aktywnych grup</div>
        </div>
        <div style={styles.statCard}>
          <div style={{ ...styles.statNumber, color: '#3b82f6' }}>{statistics.totalStudents}</div>
          <div style={styles.statLabel}>Łącznie studentów</div>
        </div>
        <div style={styles.statCard}>
          <div style={{ ...styles.statNumber, color: '#8b5cf6' }}>{statistics.avgAttendance}%</div>
          <div style={styles.statLabel}>Średnia frekwencja</div>
        </div>
        <div style={styles.statCard}>
          <div style={{ ...styles.statNumber, color: '#f59e0b' }}>{statistics.avgGrade}</div>
          <div style={styles.statLabel}>Średnia ocen</div>
        </div>
      </div>

      {/* Toolbar */}
      <div style={styles.toolbar}>
        <div style={styles.toolbarLeft}>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
            <input
              type="text"
              placeholder={activeView === 'groups' ? 'Szukaj grup...' : 'Szukaj kursów...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={styles.select}
          >
            <option value="all">Wszystkie statusy</option>
            <option value="active">Aktywne</option>
            <option value="paused">Wstrzymane</option>
            <option value="completed">Zakończone</option>
          </select>

          <button style={{ ...styles.button, ...styles.buttonSecondary }}>
            <Filter size={16} />
            Filtry
          </button>
        </div>

        <div style={styles.toolbarRight}>
          <button style={{ ...styles.button, ...styles.buttonSecondary }}>
            <Download size={16} />
            Export
          </button>
          <button
            onClick={() => setShowCreateModal(true)}
            style={{ ...styles.button, ...styles.buttonPrimary }}
          >
            <Plus size={16} />
            {activeView === 'groups' ? 'Nowa grupa' : 'Nowy kurs'}
          </button>
        </div>
      </div>

      {/* Content */}
      {activeView === 'groups' && renderGroupsView()}
      {activeView === 'courses' && renderCoursesView()}
      {activeView === 'calendar' && (
        <div style={styles.groupCard}>
          <h3 style={{ margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={20} color="#16a34a" />
            Kalendarz zajęć
          </h3>
          <p style={{ color: '#64748b' }}>
            Interaktywny kalendarz zajęć wszystkich grup będzie dostępny wkrótce.
          </p>
        </div>
      )}

      {/* Create Modal */}
      {showCreateModal && <CreateGroupModal />}

      {/* Success Panel */}
      
      
    </div>
  );
};

export default GroupsCoursesPanel;