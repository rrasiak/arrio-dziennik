import React, { useState } from 'react';
import { 
  Settings, Building, Users, Shield, Mail, Database, Palette,
  Globe, Bell, Lock, Key, FileText, Download, Upload, Save,
  RefreshCw, Eye, EyeOff, Plus, Minus, Edit3, Trash2, Copy,
  Check, X, AlertCircle, CheckCircle, Info, ArrowRight,
  Server, Wifi, Smartphone, Monitor, Calendar, Clock,
  BarChart3, PieChart, TrendingUp, Archive, Folder
} from 'lucide-react';

const AdvancedSettingsPanel = () => {
  const [activeSection, setActiveSection] = useState('general');
  const [saving, setSaving] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [changes, setChanges] = useState({});

  const settingsSections = [
    {
      id: 'general',
      name: 'Ustawienia ogólne',
      icon: Building,
      description: 'Podstawowa konfiguracja systemu'
    },
    {
      id: 'users',
      name: 'Użytkownicy i role',
      icon: Users,
      description: 'Zarządzanie uprawnieniami'
    },
    {
      id: 'courses',
      name: 'Kursy i grupy',
      icon: FileText,
      description: 'Struktura kursów'
    },
    {
      id: 'notifications',
      name: 'Powiadomienia',
      icon: Bell,
      description: 'Email i notyfikacje'
    },
    {
      id: 'security',
      name: 'Bezpieczeństwo',
      icon: Shield,
      description: 'Polityki bezpieczeństwa'
    },
    {
      id: 'backup',
      name: 'Backup i archiwum',
      icon: Database,
      description: 'Kopie zapasowe'
    },
    {
      id: 'appearance',
      name: 'Wygląd',
      icon: Palette,
      description: 'Personalizacja interfejsu'
    },
    {
      id: 'integrations',
      name: 'Integracje',
      icon: Globe,
      description: 'API i zewnętrzne systemy'
    }
  ];

  const roles = [
    {
      id: 'admin',
      name: 'Administrator',
      description: 'Pełny dostęp do systemu',
      users: 2,
      permissions: ['full_access', 'user_management', 'system_config', 'reports', 'backup']
    },
    {
      id: 'teacher',
      name: 'Nauczyciel',
      description: 'Zarządzanie kursami i uczniami',
      users: 8,
      permissions: ['course_management', 'student_grades', 'attendance', 'materials']
    },
    {
      id: 'student',
      name: 'Student',
      description: 'Dostęp do własnych danych',
      users: 156,
      permissions: ['view_grades', 'view_schedule', 'download_materials']
    }
  ];

  const courses = [
    {
      id: 1,
      name: 'Dendrologia podstawowa',
      code: 'DEND-001',
      teacher: 'Dr Maria Zielińska',
      students: 24,
      active: true,
      startDate: '2024-01-15',
      endDate: '2024-06-30'
    },
    {
      id: 2,
      name: 'Arborystyka praktyczna',
      code: 'ARBO-002',
      teacher: 'Mgr Piotr Kowalski',
      students: 18,
      active: true,
      startDate: '2024-02-01',
      endDate: '2024-07-15'
    },
    {
      id: 3,
      name: 'Fizjologia drzew',
      code: 'FIZJ-003',
      teacher: 'Dr Anna Nowak',
      students: 22,
      active: false,
      startDate: '2024-03-01',
      endDate: '2024-08-30'
    }
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
    layout: {
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: '2rem'
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
    sectionList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    sectionItem: {
      padding: '12px',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.2s',
      border: '1px solid transparent'
    },
    sectionItemActive: {
      backgroundColor: '#f0fdf4',
      borderColor: '#bbf7d0',
      color: '#166534'
    },
    sectionItemHover: {
      backgroundColor: '#f8fafc'
    },
    sectionIcon: {
      marginBottom: '0.5rem'
    },
    sectionName: {
      fontWeight: '500',
      fontSize: '14px',
      marginBottom: '2px'
    },
    sectionDesc: {
      fontSize: '12px',
      color: '#64748b'
    },
    content: {
      backgroundColor: 'white',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      padding: '2rem'
    },
    contentHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
      paddingBottom: '1rem',
      borderBottom: '1px solid #f1f5f9'
    },
    contentTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#1e293b'
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
    buttonDanger: {
      backgroundColor: '#dc2626',
      color: 'white'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    formGroup: {
      marginBottom: '1.5rem'
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
      minHeight: '100px',
      resize: 'vertical',
      boxSizing: 'border-box'
    },
    select: {
      width: '100%',
      padding: '10px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      backgroundColor: 'white',
      boxSizing: 'border-box'
    },
    card: {
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '1rem'
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    cardTitle: {
      fontWeight: '600',
      color: '#1e293b'
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
    badge: {
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: '500'
    },
    badgeSuccess: {
      backgroundColor: '#dcfce7',
      color: '#166534'
    },
    badgeWarning: {
      backgroundColor: '#fef3c7',
      color: '#92400e'
    },
    badgeInfo: {
      backgroundColor: '#dbeafe',
      color: '#1e40af'
    },
    switch: {
      position: 'relative',
      display: 'inline-block',
      width: '44px',
      height: '24px'
    },
    switchInput: {
      opacity: 0,
      width: 0,
      height: 0
    },
    switchSlider: {
      position: 'absolute',
      cursor: 'pointer',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ccc',
      borderRadius: '24px',
      transition: '0.4s'
    },
    alert: {
      padding: '1rem',
      borderRadius: '8px',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px'
    },
    alertInfo: {
      backgroundColor: '#eff6ff',
      border: '1px solid #dbeafe',
      color: '#1e40af'
    },
    alertSuccess: {
      backgroundColor: '#f0fdf4',
      border: '1px solid #bbf7d0',
      color: '#166534'
    },
    alertWarning: {
      backgroundColor: '#fffbeb',
      border: '1px solid #fed7aa',
      color: '#92400e'
    }
  };

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setChanges({});
    }, 2000);
  };

  const renderGeneralSettings = () => (
    <div>
      <div style={styles.alert}>
        <Info size={20} />
        <div>
          <h4 style={{ margin: '0 0 4px 0' }}>Ustawienia ogólne systemu</h4>
          <p style={{ margin: 0, fontSize: '14px' }}>
            Skonfiguruj podstawowe informacje o szkole i systemie
          </p>
        </div>
      </div>

      <div style={styles.formGrid}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Nazwa szkoły</label>
          <input
            type="text"
            style={styles.input}
            defaultValue="Polska Szkoła Dendrologii i Arborystyki"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Skrót nazwy</label>
          <input type="text" style={styles.input} defaultValue="PSDiA" />
        </div>
      </div>

      <div style={styles.formGrid}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email kontaktowy</label>
          <input type="email" style={styles.input} defaultValue="kontakt@psdia.edu.pl" />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Telefon</label>
          <input type="tel" style={styles.input} defaultValue="+48 123 456 789" />
        </div>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Adres szkoły</label>
        <textarea
          style={styles.textarea}
          defaultValue="ul. Leśna 123, 00-001 Warszawa, Polska"
        />
      </div>

      <div style={styles.formGrid}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Rok akademicki</label>
          <select style={styles.select}>
            <option>2023/2024</option>
            <option>2024/2025</option>
            <option>2025/2026</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Strefa czasowa</label>
          <select style={styles.select}>
            <option>Europe/Warsaw (UTC+1)</option>
            <option>Europe/London (UTC+0)</option>
            <option>Europe/Berlin (UTC+1)</option>
          </select>
        </div>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Logo szkoły</label>
        <div style={{ 
          border: '2px dashed #d1d5db', 
          borderRadius: '8px', 
          padding: '2rem', 
          textAlign: 'center',
          backgroundColor: '#f9fafb'
        }}>
          <Upload size={32} color="#9ca3af" style={{ margin: '0 auto 1rem' }} />
          <p style={{ margin: 0, color: '#64748b' }}>Przeciągnij logo lub kliknij aby wybrać</p>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '12px', color: '#9ca3af' }}>
            Zalecany rozmiar: 200x200px, format: PNG/SVG
          </p>
        </div>
      </div>
    </div>
  );

  const renderUsersSettings = () => (
    <div>
      <div style={styles.alert}>
        <Users size={20} />
        <div>
          <h4 style={{ margin: '0 0 4px 0' }}>Zarządzanie rolami użytkowników</h4>
          <p style={{ margin: 0, fontSize: '14px' }}>
            Konfiguruj uprawnienia i role w systemie
          </p>
        </div>
      </div>

      {roles.map(role => (
        <div key={role.id} style={styles.card}>
          <div style={styles.cardHeader}>
            <div>
              <h4 style={{ margin: '0 0 4px 0', color: '#1e293b' }}>{role.name}</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>{role.description}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ ...styles.badge, ...styles.badgeInfo }}>
                {role.users} użytkowników
              </span>
              <button style={{ ...styles.button, ...styles.buttonSecondary, padding: '4px 8px' }}>
                <Edit3 size={14} />
                Edytuj
              </button>
            </div>
          </div>
          
          <div>
            <h5 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Uprawnienia:</h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {role.permissions.map(permission => (
                <span
                  key={permission}
                  style={{
                    ...styles.badge,
                    backgroundColor: '#f1f5f9',
                    color: '#475569'
                  }}
                >
                  {permission.replace('_', ' ')}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      <button style={{ ...styles.button, ...styles.buttonPrimary }}>
        <Plus size={16} />
        Dodaj nową rolę
      </button>
    </div>
  );

  const renderCoursesSettings = () => (
    <div>
      <div style={styles.alert}>
        <FileText size={20} />
        <div>
          <h4 style={{ margin: '0 0 4px 0' }}>Zarządzanie kursami i grupami</h4>
          <p style={{ margin: 0, fontSize: '14px' }}>
            Twórz i edytuj strukturę kursów edukacyjnych
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <button style={{ ...styles.button, ...styles.buttonPrimary }}>
          <Plus size={16} />
          Dodaj nowy kurs
        </button>
      </div>

      <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Kurs</th>
              <th style={styles.th}>Kod</th>
              <th style={styles.th}>Prowadzący</th>
              <th style={styles.th}>Uczniowie</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td style={styles.td}>
                  <div>
                    <div style={{ fontWeight: '500' }}>{course.name}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      {course.startDate} - {course.endDate}
                    </div>
                  </div>
                </td>
                <td style={styles.td}>
                  <span style={{ fontFamily: 'monospace', fontSize: '13px' }}>
                    {course.code}
                  </span>
                </td>
                <td style={styles.td}>{course.teacher}</td>
                <td style={styles.td}>{course.students}</td>
                <td style={styles.td}>
                  <span style={{
                    ...styles.badge,
                    ...(course.active ? styles.badgeSuccess : styles.badgeWarning)
                  }}>
                    {course.active ? 'Aktywny' : 'Nieaktywny'}
                  </span>
                </td>
                <td style={styles.td}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button style={{ ...styles.button, padding: '4px', backgroundColor: 'transparent' }}>
                      <Edit3 size={16} color="#64748b" />
                    </button>
                    <button style={{ ...styles.button, padding: '4px', backgroundColor: 'transparent' }}>
                      <Copy size={16} color="#64748b" />
                    </button>
                    <button style={{ ...styles.button, padding: '4px', backgroundColor: 'transparent' }}>
                      <Trash2 size={16} color="#dc2626" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div>
      <div style={styles.alert}>
        <Shield size={20} />
        <div>
          <h4 style={{ margin: '0 0 4px 0' }}>Ustawienia bezpieczeństwa</h4>
          <p style={{ margin: 0, fontSize: '14px' }}>
            Konfiguruj polityki bezpieczeństwa systemu
          </p>
        </div>
      </div>

      <div style={styles.card}>
        <h4 style={{ margin: '0 0 1rem 0' }}>Polityka haseł</h4>
        
        <div style={styles.formGrid}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Minimalna długość hasła</label>
            <select style={styles.select}>
              <option>6 znaków</option>
              <option>8 znaków</option>
              <option>10 znaków</option>
              <option>12 znaków</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Ważność hasła</label>
            <select style={styles.select}>
              <option>Bez ograniczeń</option>
              <option>30 dni</option>
              <option>90 dni</option>
              <option>180 dni</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input type="checkbox" defaultChecked />
            <span>Wymagaj wielkich liter</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input type="checkbox" defaultChecked />
            <span>Wymagaj cyfr</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input type="checkbox" />
            <span>Wymagaj znaków specjalnych</span>
          </label>
        </div>
      </div>

      <div style={styles.card}>
        <h4 style={{ margin: '0 0 1rem 0' }}>Sesje użytkowników</h4>
        
        <div style={styles.formGrid}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Czas nieaktywności sesji</label>
            <select style={styles.select}>
              <option>30 minut</option>
              <option>1 godzina</option>
              <option>2 godziny</option>
              <option>4 godziny</option>
              <option>8 godzin</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Maksymalny czas sesji</label>
            <select style={styles.select}>
              <option>1 dzień</option>
              <option>7 dni</option>
              <option>30 dni</option>
              <option>Bez ograniczeń</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'general':
        return renderGeneralSettings();
      case 'users':
        return renderUsersSettings();
      case 'courses':
        return renderCoursesSettings();
      case 'security':
        return renderSecuritySettings();
      default:
        return (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <Settings size={48} color="#9ca3af" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ color: '#64748b' }}>Sekcja w budowie</h3>
            <p style={{ color: '#9ca3af' }}>
              Ta sekcja ustawień będzie dostępna wkrótce
            </p>
          </div>
        );
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Panel Ustawień</h1>
        <p style={styles.subtitle}>
          Kompleksowa konfiguracja systemu i uprawnień
        </p>
      </div>

      {/* Layout */}
      <div style={styles.layout}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h3 style={styles.sidebarTitle}>Kategorie ustawień</h3>
          <div style={styles.sectionList}>
            {settingsSections.map(section => (
              <div
                key={section.id}
                style={{
                  ...styles.sectionItem,
                  ...(activeSection === section.id ? styles.sectionItemActive : {})
                }}
                onClick={() => setActiveSection(section.id)}
              >
                <div style={styles.sectionIcon}>
                  <section.icon size={20} />
                </div>
                <div style={styles.sectionName}>{section.name}</div>
                <div style={styles.sectionDesc}>{section.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={styles.content}>
          <div style={styles.contentHeader}>
            <h2 style={styles.contentTitle}>
              {settingsSections.find(s => s.id === activeSection)?.name}
            </h2>
            <button
              onClick={handleSave}
              disabled={saving}
              style={{
                ...styles.button,
                ...styles.buttonPrimary,
                opacity: saving ? 0.6 : 1
              }}
            >
              {saving ? (
                <>
                  <RefreshCw size={16} style={{ animation: 'spin 1s linear infinite' }} />
                  Zapisywanie...
                </>
              ) : (
                <>
                  <Save size={16} />
                  Zapisz zmiany
                </>
              )}
            </button>
          </div>

          {renderContent()}
        </div>
      </div>

      {/* Info Panel */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        padding: '1.5rem',
        marginTop: '2rem',
        ...styles.alertSuccess
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle size={20} />
          <div>
            <h4 style={{ margin: 0 }}>Panel ustawień gotowy do konfiguracji</h4>
            <p style={{ margin: '4px 0 0 0', fontSize: '14px' }}>
              Funkcjonalności: ustawienia ogólne, zarządzanie rolami, kursy, bezpieczeństwo, backup, personalizacja
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSettingsPanel;