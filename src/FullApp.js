import React, { useState, createContext, useContext } from 'react';
import { 
  TreePine, Leaf, User, Lock, LogIn, Eye, EyeOff, Home, Users, Calendar, 
  BookOpen, GraduationCap, Settings, Bell, Menu, X, FileText, Clock,
  Award, TrendingUp, MessageSquare, ClipboardList, Download, Upload
} from 'lucide-react';
import AttendancePanel from './AttendancePanel';
import ReportsPanel from './ReportsPanel';
import AdvancedMaterialsPanel from './AdvancedMaterialsPanel';
import AdvancedSettingsPanel from './AdvancedSettingsPanel';
import StudentProfilePanel from './StudentProfilePanel';
import GroupsCoursesPanel from './GroupsCoursesPanel';
import StudentGradesPanel from './StudentGradesPanel';
import StudentDashboardPanel from './StudentDashboardPanel';
import AdminDashboardPanel from './AdminDashboardPanel';
import LectureDashboardPanel from './LectureDashboardPanel';


// Context dla stanu użytkownika
const UserContext = createContext();

// Style globalne
const styles = {
  // Login styles
  loginContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: '1rem'
  },
  loginCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '3rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    width: '100%',
    maxWidth: '400px'
  },
  
  // App layout styles
  appContainer: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  sidebar: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '260px',
    height: '100vh',
    backgroundColor: 'white',
    borderRight: '1px solid #e2e8f0',
    boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
    zIndex: 1000,
    overflowY: 'auto'
  },
  sidebarHeader: {
    padding: '1.5rem',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #16a34a, #84cc16)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  nav: {
    padding: '1rem 0'
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 1.5rem',
    color: '#64748b',
    cursor: 'pointer',
    transition: 'all 0.2s',
    borderLeft: '3px solid transparent'
  },
  navItemActive: {
    backgroundColor: '#f0fdf4',
    color: '#16a34a',
    borderLeftColor: '#16a34a'
  },
  mainContent: {
    marginLeft: '260px',
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    width: 'calc(100% - 260px)'
  },
  header: {
    backgroundColor: 'white',
    borderBottom: '1px solid #e2e8f0',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pageContent: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  
  // Page styles
  pageTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '0.5rem'
  },
  pageSubtitle: {
    color: '#64748b',
    marginBottom: '2rem'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    border: '1px solid #e2e8f0'
  },
  grid: {
    display: 'grid',
    gap: '1.5rem'
  },
  gridCols2: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  gridCols3: {
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  gridCols4: {
    gridTemplateColumns: 'repeat(4, 1fr)'
  },
  button: {
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'all 0.2s'
  },
  buttonPrimary: {
    backgroundColor: '#16a34a',
    color: 'white'
  },
  buttonSecondary: {
    backgroundColor: '#f1f5f9',
    color: '#475569'
  }
};

// Komponenty nawigacji
const Sidebar = ({ userRole, currentPage, onNavigate, onLogout }) => {
  const menuItems = {
    admin: [
      { id: 'dashboard', label: 'Panel Główny', icon: Home },
      { id: 'users', label: 'Zarządzanie Użytkownikami', icon: Users },
      { id: 'groups', label: 'Grupy i Kursy', icon: BookOpen },
      { id: 'reports', label: 'Raporty', icon: FileText },
      { id: 'settings', label: 'Ustawienia Systemu', icon: Settings }
    ],
    Wykładowca: [
      { id: 'dashboard', label: 'Panel Główny', icon: Home },
      { id: 'students', label: 'Moi Uczniowie', icon: Users },
      { id: 'schedule', label: 'Plan Zajęć', icon: Calendar },
      { id: 'grades', label: 'Oceny', icon: GraduationCap },
      { id: 'materials', label: 'Materiały', icon: BookOpen },
      { id: 'attendance', label: 'Obecności', icon: ClipboardList }
    ],
    Kursant: [
      { id: 'dashboard', label: 'Panel Główny', icon: Home },
      { id: 'grades', label: 'Moje Oceny', icon: GraduationCap },
      { id: 'schedule', label: 'Plan Zajęć', icon: Calendar },
      { id: 'materials', label: 'Materiały', icon: BookOpen },
      { id: 'profile', label: 'Mój Profil', icon: User }
    ]
  };

  const items = menuItems[userRole] || [];

  return (
    <div style={styles.sidebar}>
      <div style={styles.sidebarHeader}>
        <div style={styles.logoIcon}>
          <TreePine size={20} color="white" />
          <Leaf size={12} color="#84cc16" style={{position: 'absolute', top: '-2px', right: '-2px'}} />
        </div>
        <div>
          <h3 style={{margin: 0, fontSize: '18px', fontWeight: 'bold'}}>Arrio</h3>
          <p style={{margin: 0, fontSize: '12px', color: '#64748b'}}>
            {userRole === 'admin' ? 'Administrator' : 
             userRole === 'Wykładowca' ? 'Wykładowca' : 'Kursant'}
          </p>
        </div>
      </div>
      
      <nav style={styles.nav}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              ...styles.navItem,
              ...(currentPage === item.id ? styles.navItemActive : {})
            }}
            onClick={() => onNavigate(item.id)}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </div>
        ))}
        
        <div style={{borderTop: '1px solid #e2e8f0', margin: '1rem 0', paddingTop: '1rem'}}>
          <div
            style={styles.navItem}
            onClick={onLogout}
          >
            <LogIn size={20} />
            <span>Wyloguj się</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

const Header = ({ pageTitle, userRole }) => (
  <div style={styles.header}>
    <div>
      <h1 style={{margin: 0, fontSize: '1.5rem', fontWeight: '600'}}>{pageTitle}</h1>
    </div>
    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
      <Bell size={20} color="#64748b" />
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #16a34a, #84cc16)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: '500'
      }}>
        {userRole?.charAt(0).toUpperCase()}
      </div>
    </div>
  </div>
);

// Komponenty stron
const DashboardPage = ({ userRole }) => {
  switch (userRole) {
    case 'admin':
      return <AdminDashboardPanel />;
    case 'Wykładowca':
      return <LectureDashboardPanel />;
    case 'Kursant':
      return <StudentDashboardPanel />;
    default:
      return <div>Nieznana rola</div>;
  }
};

const StudentsPage = ({ userRole }) => (
  <div>
    <h2 style={styles.pageTitle}>
      {userRole === 'admin' ? 'Zarządzanie Użytkownikami' : 'Moi Uczniowie'}
    </h2>
    <p style={styles.pageSubtitle}>
      Zarządzaj uczniami i ich danymi
    </p>
    
    <div style={styles.card}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
        <h3>Lista uczniów</h3>
        <div style={{display: 'flex', gap: '0.5rem'}}>
          <button style={{...styles.button, ...styles.buttonSecondary}}>
            <Download size={16} style={{marginRight: '4px'}} />
            Export Excel
          </button>
          <button style={{...styles.button, ...styles.buttonPrimary}}>
            <Users size={16} style={{marginRight: '4px'}} />
            Dodaj ucznia
          </button>
        </div>
      </div>
      
      <div style={{border: '1px solid #e2e8f0', borderRadius: '8px'}}>
        <div style={{padding: '1rem', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', fontWeight: '600', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 120px', gap: '1rem'}}>
          <span>Imię i nazwisko</span>
          <span>Email</span>
          <span>Grupa</span>
          <span>Status</span>
          <span>Akcje</span>
        </div>
        
        {[
          {name: 'Anna Kowalska', email: 'anna@example.com', group: 'Dendrologia I', status: 'Aktywny'},
          {name: 'Jan Nowak', email: 'jan@example.com', group: 'Arborystyka II', status: 'Aktywny'},
          {name: 'Maria Zielińska', email: 'maria@example.com', group: 'Dendrologia I', status: 'Nieaktywny'},
          {name: 'Piotr Dębowski', email: 'piotr@example.com', group: 'Arborystyka I', status: 'Aktywny'}
        ].map((student, index) => (
          <div key={index} style={{padding: '1rem', borderBottom: index < 3 ? '1px solid #e2e8f0' : 'none', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 120px', gap: '1rem', alignItems: 'center'}}>
            <span style={{fontWeight: '500'}}>{student.name}</span>
            <span style={{color: '#64748b'}}>{student.email}</span>
            <span>{student.group}</span>
            <span style={{
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: '500',
              backgroundColor: student.status === 'Aktywny' ? '#dcfce7' : '#fee2e2',
              color: student.status === 'Aktywny' ? '#166534' : '#dc2626',
              width: 'fit-content'
            }}>
              {student.status}
            </span>
            <button style={{...styles.button, ...styles.buttonSecondary, fontSize: '12px'}}>
              Edytuj
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SchedulePage = () => (
  <div>
    <h2 style={styles.pageTitle}>Plan Zajęć</h2>
    <p style={styles.pageSubtitle}>Kalendarz zajęć i wydarzeń</p>
    
    <div style={{...styles.grid, ...styles.gridCols2, marginBottom: '2rem'}}>
      <div style={styles.card}>
        <h3>Dzisiaj</h3>
        <div style={{marginTop: '1rem'}}>
          <div style={{padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '8px', borderLeft: '4px solid #16a34a', marginBottom: '0.5rem'}}>
            <h4 style={{margin: '0 0 0.5rem 0'}}>Dendrologia - Drzewa liściaste</h4>
            <p style={{margin: 0, color: '#64748b'}}>9:00 - 11:30 | Sala 101</p>
          </div>
          <div style={{padding: '1rem', backgroundColor: '#fefce8', borderRadius: '8px', borderLeft: '4px solid #eab308'}}>
            <h4 style={{margin: '0 0 0.5rem 0'}}>Praktyki terenowe</h4>
            <p style={{margin: 0, color: '#64748b'}}>14:00 - 17:00 | Arboretum</p>
          </div>
        </div>
      </div>
      
      <div style={styles.card}>
        <h3>Nadchodzące wydarzenia</h3>
        <div style={{marginTop: '1rem'}}>
          <div style={{marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #e2e8f0'}}>
            <h4 style={{margin: '0 0 0.25rem 0'}}>Egzamin z arborystyki</h4>
            <p style={{margin: 0, color: '#64748b', fontSize: '14px'}}>Jutro, 10:00</p>
          </div>
          <div style={{marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #e2e8f0'}}>
            <h4 style={{margin: '0 0 0.25rem 0'}}>Wykład specjalny</h4>
            <p style={{margin: 0, color: '#64748b', fontSize: '14px'}}>Piątek, 15:00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const GradesPage = ({ userRole }) => (
  <div>
    <h2 style={styles.pageTitle}>
      {userRole === 'Kursant' ? 'Moje Oceny' : 'Oceny'}
    </h2>
    <p style={styles.pageSubtitle}>
      {userRole === 'Kursant' ? 'Twoje postępy w nauce' : 'Zarządzanie ocenami uczniów'}
    </p>
    
    <div style={styles.card}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
        <h3>Oceny z przedmiotów</h3>
        {userRole !== 'Kursant' && (
          <button style={{...styles.button, ...styles.buttonPrimary}}>
            <GraduationCap size={16} style={{marginRight: '4px'}} />
            Dodaj ocenę
          </button>
        )}
      </div>
      
      <div style={{border: '1px solid #e2e8f0', borderRadius: '8px'}}>
        <div style={{padding: '1rem', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', fontWeight: '600', display: 'grid', gridTemplateColumns: userRole === 'student' ? '2fr 1fr 1fr 1fr' : '1fr 1fr 1fr 1fr 1fr', gap: '1rem'}}>
          {userRole === 'Kursant' ? (
            <>
              <span>Przedmiot</span>
              <span>Ocena</span>
              <span>Data</span>
              <span>Status</span>
            </>
          ) : (
            <>
              <span>Kursant</span>
              <span>Przedmiot</span>
              <span>Ocena</span>
              <span>Data</span>
              <span>Akcje</span>
            </>
          )}
        </div>
        
        {userRole === 'Kursant' ? [
          {subject: 'Dendrologia podstawowa', grade: '4.5', date: '2024-05-01', status: 'Zaliczony'},
          {subject: 'Arborystyka praktyczna', grade: '4.0', date: '2024-04-28', status: 'Zaliczony'},
          {subject: 'Fizjologia drzew', grade: '3.5', date: '2024-04-25', status: 'Zaliczony'},
          {subject: 'Choroby drzew', grade: '-', date: '-', status: 'W trakcie'}
        ] : [
          {Kursant: 'Anna Kowalska', subject: 'Dendrologia', grade: '4.5', date: '2024-05-01'},
          {Kursant: 'Jan Nowak', subject: 'Arborystyka', grade: '4.0', date: '2024-04-28'},
          {Kursant: 'Maria Zielińska', subject: 'Dendrologia', grade: '3.5', date: '2024-04-25'}
        ].map((item, index) => (
          <div key={index} style={{padding: '1rem', borderBottom: index < 2 ? '1px solid #e2e8f0' : 'none', display: 'grid', gridTemplateColumns: userRole === 'student' ? '2fr 1fr 1fr 1fr' : '1fr 1fr 1fr 1fr 1fr', gap: '1rem', alignItems: 'center'}}>
            {userRole === 'Kursant' ? (
              <>
                <span style={{fontWeight: '500'}}>{item.subject}</span>
                <span style={{fontWeight: 'bold', color: item.grade === '-' ? '#64748b' : '#16a34a'}}>{item.grade}</span>
                <span style={{color: '#64748b'}}>{item.date}</span>
                <span style={{
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '500',
                  backgroundColor: item.status === 'Zaliczony' ? '#dcfce7' : '#fef3c7',
                  color: item.status === 'Zaliczony' ? '#166534' : '#92400e',
                  width: 'fit-content'
                }}>
                  {item.status}
                </span>
              </>
            ) : (
              <>
                <span style={{fontWeight: '500'}}>{item.student}</span>
                <span>{item.subject}</span>
                <span style={{fontWeight: 'bold', color: '#16a34a'}}>{item.grade}</span>
                <span style={{color: '#64748b'}}>{item.date}</span>
                <button style={{...styles.button, ...styles.buttonSecondary, fontSize: '12px'}}>
                  Edytuj
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MaterialsPage = () => (
  <div>
    <h2 style={styles.pageTitle}>Materiały</h2>
    <p style={styles.pageSubtitle}>Zasoby edukacyjne i dokumenty</p>
    
    <div style={styles.card}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
        <h3>Pliki i dokumenty</h3>
        <button style={{...styles.button, ...styles.buttonPrimary}}>
          <Upload size={16} style={{marginRight: '4px'}} />
          Dodaj plik
        </button>
      </div>
      
      <div style={{...styles.grid, ...styles.gridCols3}}>
        {[
          {name: 'Skrypt_Dendrologia_2024.pdf', size: '2.3 MB', type: 'PDF'},
          {name: 'Prezentacja_Drzewa_Iglaste.pptx', size: '15.7 MB', type: 'PowerPoint'},
          {name: 'Atlas_Lisci.zip', size: '45.2 MB', type: 'Archiwum'},
          {name: 'Instrukcja_Praktyk.docx', size: '1.8 MB', type: 'Word'},
          {name: 'Filmy_Instruktarzowe.mp4', size: '127.5 MB', type: 'Video'},
          {name: 'Zdjecia_Tereonowe.zip', size: '89.3 MB', type: 'Archiwum'}
        ].map((file, index) => (
          <div key={index} style={{...styles.card, padding: '1rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
              <FileText size={20} color="#16a34a" />
              <span style={{fontSize: '12px', color: '#64748b'}}>{file.type}</span>
            </div>
            <h4 style={{margin: '0 0 0.5rem 0', fontSize: '14px'}}>{file.name}</h4>
            <p style={{margin: '0 0 1rem 0', color: '#64748b', fontSize: '12px'}}>{file.size}</p>
            <button style={{...styles.button, ...styles.buttonSecondary, width: '100%', fontSize: '12px'}}>
              <Download size={14} style={{marginRight: '4px'}} />
              Pobierz
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Główna aplikacja
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
    setCurrentPage('dashboard');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const getPageTitle = () => {
    const titles = {
      dashboard: 'Panel Główny',
      students: userRole === 'admin' ? 'Zarządzanie Użytkownikami' : 'Moi Uczniowie',
      users: 'Zarządzanie Użytkownikami',
      schedule: 'Plan Zajęć',
      grades: userRole === 'Kursant' ? 'Moje Oceny' : 'Oceny',
      materials: 'Materiały',
      attendance: 'Obecności',
      profile: 'Mój Profil',
      settings: 'Ustawienia',
      reports: 'Raporty',
      groups: 'Grupy i Kursy'
    };
    return titles[currentPage] || 'Panel Główny';
  };

const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage userRole={userRole} />;
      case 'students':
      case 'users':
        return <StudentsPage userRole={userRole} />;
      case 'schedule':
        return <SchedulePage />;
      case 'grades':
        return userRole === 'Kursant' ? (
          <StudentGradesPanel />
        ) : (
          <GradesPage userRole={userRole} />
        );
      case 'materials':
        return <MaterialsPage />;
      case 'attendance':
        return <AttendancePanel />;
      case 'reports':
        return <ReportsPanel />;
      case 'settings':
        return <AdvancedSettingsPanel />;
      case 'profile':
        return <StudentProfilePanel />;
      case 'groups':
        return <GroupsCoursesPanel />;
      default:
        return <DashboardPage userRole={userRole} />;
    }
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div style={styles.appContainer}>
      <Sidebar 
        userRole={userRole}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      />
      <div style={styles.mainContent}>
        <Header pageTitle={getPageTitle()} userRole={userRole} />
        <div style={styles.pageContent}>
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

// Komponent logowania
const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('Wykładowca');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const credentials = {
    admin: { username: 'admin', password: 'admin' },
    Wykładowca: { username: 'Wykładowca', password: 'Wykładowca' },
    student: { username: 'Kursant', password: 'Kursant' }
  };

  const handleLogin = () => {
    setError('');
    const cred = credentials[selectedRole];
    
    if (username === cred.username && password === cred.password) {
      onLogin(selectedRole);
    } else {
      setError('Nieprawidłowe dane logowania');
    }
  };

  const handleQuickLogin = (role) => {
    onLogin(role);
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginCard}>
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginBottom: '1rem'}}>
            <div style={styles.logoIcon}>
              <TreePine size={30} color="white" />
              <div style={{position: 'absolute', top: '-6px', right: '-6px', backgroundColor: 'white', borderRadius: '50%', padding: '2px'}}>
                <Leaf size={16} color="#84cc16" />
              </div>
            </div>
          </div>
          <h1 style={{fontSize: '28px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0'}}>Arrio</h1>
          <p style={{fontSize: '16px', color: '#6b7280', margin: 0}}>Polska Szkoła Dendrologii i Arborystyki</p>
          <p style={{fontSize: '14px', color: '#9ca3af', marginTop: '8px'}}>System zarządzania kursami</p>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          <div>
            <label style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px'}}>Wybierz rolę:</label>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '1rem'}}>
              {['admin', 'Wykładowca', 'Kursant'].map((role) => (
                <button
                  key={role}
                  type="button"
                  style={{
                    padding: '12px 8px',
                    border: selectedRole === role ? '2px solid #16a34a' : '2px solid #e5e7eb',
                    borderRadius: '8px',
                    background: selectedRole === role ? '#f0fdf4' : 'white',
                    color: selectedRole === role ? '#15803d' : '#374151',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'center',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}
                  onClick={() => setSelectedRole(role)}
                >
                  {role === 'admin' ? 'Administrator' : role === 'Wykładowca' ? 'Wykładowca' : 'Kursant'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px'}}>Nazwa użytkownika:</label>
            <div style={{position: 'relative'}}>
              <User style={{position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af'}} size={20} />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 44px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  backgroundColor: '#f9fafb',
                  boxSizing: 'border-box'
                }}
                placeholder="Wprowadź nazwę użytkownika"
              />
            </div>
          </div>

          <div>
            <label style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px'}}>Hasło:</label>
            <div style={{position: 'relative'}}>
              <Lock style={{position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af'}} size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 44px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  backgroundColor: '#f9fafb',
                  boxSizing: 'border-box'
                }}
                placeholder="Wprowadź hasło"
              />
              <button
                type="button"
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#9ca3af',
                  cursor: 'pointer',
                  padding: '4px'
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && (
            <div style={{
              backgroundColor: '#fef2f2',
              color: '#dc2626',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '14px',
              border: '1px solid #fecaca',
              textAlign: 'center'
            }}>
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            style={{
              background: 'linear-gradient(135deg, #16a34a, #84cc16)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '14px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(22, 163, 74, 0.3)'
            }}
          >
            <LogIn size={20} />
            Zaloguj się
          </button>
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#f8fafc',
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{fontSize: '14px', fontWeight: '600', color: '#475569', marginBottom: '8px', textAlign: 'center'}}>Szybkie logowanie (demo):</div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
            <button
              onClick={() => handleQuickLogin('admin')}
              style={{
                padding: '8px 12px',
                background: 'white',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                fontSize: '12px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              🔧 Administrator (admin/admin)
            </button>
            <button
              onClick={() => handleQuickLogin('Wykładowca')}
              style={{
                padding: '8px 12px',
                background: 'white',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                fontSize: '12px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
               Wykładowca (Wykładowca/Wykładowca)
            </button>
            <button
              onClick={() => handleQuickLogin('Kursant')}
              style={{
                padding: '8px 12px',
                background: 'white',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                fontSize: '12px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
               Kursant (Kursant/Kursant)
            </button>
          </div>
        </div>

        <div style={{textAlign: 'center', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #f3f4f6'}}>
          <p style={{fontSize: '12px', color: '#9ca3af'}}>
            © 2024 Arrio - System PSDiA
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;