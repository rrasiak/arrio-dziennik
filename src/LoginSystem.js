import React, { useState } from 'react';
import { TreePine, Leaf, User, Lock, LogIn, Eye, EyeOff } from 'lucide-react';
import AdminDashboard from './AdminDashboardPanel';
import LectureDashboardPanel from './LectureDashboardPanel';
import StudentDashboardPanel from './StudentDashboardPanel';
// Style
const styles = {
  container: {
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
    maxWidth: '400px',
    position: 'relative',
    overflow: 'hidden'
  },
  logoSection: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  logoContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: '1rem'
  },
  logoIcon: {
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, #16a34a, #84cc16)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxShadow: '0 10px 25px rgba(22, 163, 74, 0.3)'
  },
  leafIcon: {
    position: 'absolute',
    top: '-6px',
    right: '-6px',
    backgroundColor: 'white',
    borderRadius: '50%',
    padding: '2px'
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#111827',
    margin: '0 0 4px 0'
  },
  subtitle: {
    fontSize: '16px',
    color: '#6b7280',
    margin: 0
  },
  tagline: {
    fontSize: '14px',
    color: '#9ca3af',
    marginTop: '8px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  inputGroup: {
    position: 'relative'
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '6px'
  },
  inputWrapper: {
    position: 'relative'
  },
  input: {
    width: '100%',
    padding: '12px 16px 12px 44px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'all 0.2s',
    outline: 'none',
    backgroundColor: '#f9fafb',
    boxSizing: 'border-box'
  },
  inputFocus: {
    borderColor: '#16a34a',
    backgroundColor: 'white',
    boxShadow: '0 0 0 3px rgba(22, 163, 74, 0.1)'
  },
  inputIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af'
  },
  passwordToggle: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#9ca3af',
    cursor: 'pointer',
    padding: '4px'
  },
  roleSelector: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '8px',
    marginBottom: '1rem'
  },
  roleButton: {
    padding: '12px 8px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    background: 'white',
    cursor: 'pointer',
    transition: 'all 0.2s',
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: '500'
  },
  roleButtonActive: {
    borderColor: '#16a34a',
    backgroundColor: '#f0fdf4',
    color: '#15803d'
  },
  loginButton: {
    background: 'linear-gradient(135deg, #16a34a, #84cc16)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '14px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    boxShadow: '0 4px 14px rgba(22, 163, 74, 0.3)'
  },
  loginButtonHover: {
    transform: 'translateY(-1px)',
    boxShadow: '0 6px 20px rgba(22, 163, 74, 0.4)'
  },
  errorMessage: {
    backgroundColor: '#fef2f2',
    color: '#dc2626',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '14px',
    border: '1px solid #fecaca',
    textAlign: 'center'
  },
  quickLogin: {
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  },
  quickLoginTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#475569',
    marginBottom: '8px',
    textAlign: 'center'
  },
  quickLoginButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  quickLoginButton: {
    padding: '8px 12px',
    background: 'white',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    textAlign: 'left'
  },
  footer: {
    textAlign: 'center',
    marginTop: '2rem',
    paddingTop: '1rem',
    borderTop: '1px solid #f3f4f6'
  },
  footerText: {
    fontSize: '12px',
    color: '#9ca3af'
  }
};

// Komponenty Dashboard dla każdej roli
const AdminDashboard = ({ onLogout }) => (
  <div style={styles.container}>
    <div style={styles.loginCard}>
      <div style={styles.logoSection}>
        <div style={styles.logoContainer}>
          <div style={styles.logoIcon}>
            <TreePine size={30} color="white" />
            <div style={styles.leafIcon}>
              <Leaf size={16} color="#84cc16" />
            </div>
          </div>
        </div>
        <h1 style={styles.title}>Panel Administratora</h1>
        <p style={styles.subtitle}>Zarządzanie systemem Arrio</p>
      </div>
      
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h2 style={{ color: '#16a34a', marginBottom: '1rem' }}>Witaj, Administratorze!</h2>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          Masz pełen dostęp do wszystkich funkcji systemu
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
          <button style={{...styles.roleButton, ...styles.roleButtonActive}}>
            Zarządzaj użytkownikami
          </button>
          <button style={{...styles.roleButton, ...styles.roleButtonActive}}>
            Ustawienia systemu
          </button>
          <button style={{...styles.roleButton, ...styles.roleButtonActive}}>
            Raporty
          </button>
          <button style={{...styles.roleButton, ...styles.roleButtonActive}}>
            Backup danych
          </button>
        </div>
        
        <button 
          onClick={onLogout}
          style={{...styles.loginButton, background: '#dc2626'}}
        >
          Wyloguj się
        </button>
      </div>
    </div>
  </div>
);

const TeacherDashboard = ({ onLogout }) => (
  <div style={styles.container}>
    <div style={styles.loginCard}>
      <div style={styles.logoSection}>
        <div style={styles.logoContainer}>
          <div style={styles.logoIcon}>
            <TreePine size={30} color="white" />
            <div style={styles.leafIcon}>
              <Leaf size={16} color="#84cc16" />
            </div>
          </div>
        </div>
        <h1 style={styles.title}>Panel Prowadzącego</h1>
        <p style={styles.subtitle}>System zarządzania zajęciami</p>
      </div>
      
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h2 style={{ color: '#16a34a', marginBottom: '1rem' }}>Witaj, Prowadzący!</h2>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          Zarządzaj swoimi zajęciami i uczniami
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
          <button style={{...styles.roleButton, ...styles.roleButtonActive}}>
            Moi uczniowie
          </button>
          <button style={{...styles.roleButton, ...styles.roleButtonActive}}>
            Plan zajęć
          </button>
          <button style={{...styles.roleButton, ...styles.roleButtonActive}}>
            Oceny
          </button>
          <button style={{...styles.roleButton, ...styles.roleButtonActive}}>
            Materiały
          </button>
        </div>
        
        <button 
          onClick={onLogout}
          style={{...styles.loginButton, background: '#dc2626'}}
        >
          Wyloguj się
        </button>
      </div>
    </div>
  </div>
);

const StudentDashboard = ({ onLogout }) => (
  <div style={styles.container}>
    <div style={styles.loginCard}>
      <div style={styles.logoSection}>
        <div style={styles.logoContainer}>
          <div style={styles.logoIcon}>
            <TreePine size={30} color="white" />
            <div style={styles.leafIcon}>
              <Leaf size={16} color="#84cc16" />
            </div>
          </div>
        </div>
        <h1 style={styles.title}>Panel Kursanta</h1>
        <p style={styles.subtitle}>Twój postęp w nauce</p>
      </div>
      
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h2 style={{ color: '#16a34a', marginBottom: '1rem' }}>Witaj, Kursancie!</h2>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          Śledź swoje postępy w kursach PSDiA
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
          <button style={{...styles.roleButton, ...styles.roleButtonActive}}>
            Moje oceny
          </button>
          <button style={{...styles.roleButton, ...styles.roleButtonActive}}>
            Plan zajęć
          </button>
          <button style={{...styles.roleButton, ...styles.roleButtonActive}}>
            Materiały
          </button>
          <button style={{...styles.roleButton, ...styles.roleButtonActive}}>
            Obecności
          </button>
        </div>
        
        <button 
          onClick={onLogout}
          style={{...styles.loginButton, background: '#dc2626'}}
        >
          Wyloguj się
        </button>
      </div>
    </div>
  </div>
);

const LoginSystem = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('nauczyciel');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [focusedInput, setFocusedInput] = useState('');

  const credentials = {
    admin: { username: 'admin', password: 'admin', role: 'Administrator' },
    nauczyciel: { username: 'nauczyciel', password: 'nauczyciel', role: 'Wykładowca' },
    student: { username: 'student', password: 'student', role: 'student' }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const cred = credentials[selectedRole];
    
    if (username === cred.username && password === cred.password) {
      setIsLoggedIn(true);
      setUserRole(cred.role);
    } else {
      setError('Nieprawidłowe dane logowania');
    }
  };

  const handleQuickLogin = (role) => {
    const cred = credentials[role];
    setUsername(cred.username);
    setPassword(cred.password);
    setSelectedRole(role);
    setIsLoggedIn(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
    setUsername('');
    setPassword('');
    setError('');
  };

  // Renderowanie dashboardów
  if (isLoggedIn) {
    switch (userRole) {
      case 'Administrator':
        return <AdminDashboard onLogout={handleLogout} />;
      case 'Wykładowca':
        return <TeacherDashboard onLogout={handleLogout} />;
      case 'Kursant':
        return <StudentDashboard onLogout={handleLogout} />;
      default:
        return null;
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.loginCard}>
        {/* Logo i nagłówek */}
        <div style={styles.logoSection}>
          <div style={styles.logoContainer}>
            <div style={styles.logoIcon}>
              <TreePine size={30} color="white" />
              <div style={styles.leafIcon}>
                <Leaf size={16} color="#84cc16" />
              </div>
            </div>
          </div>
          <h1 style={styles.title}>Arrio</h1>
          <p style={styles.subtitle}>Polska Szkoła Dendrologii i Arborystyki</p>
          <p style={styles.tagline}>System zarządzania kursami</p>
        </div>

        {/* Formularz logowania */}
        <div style={styles.form}>
          {/* Wybór roli */}
          <div>
            <label style={styles.label}>Wybierz rolę:</label>
            <div style={styles.roleSelector}>
              <button
                type="button"
                style={{
                  ...styles.roleButton,
                  ...(selectedRole === 'admin' ? styles.roleButtonActive : {})
                }}
                onClick={() => setSelectedRole('admin')}
              >
                Administrator
              </button>
              <button
                type="button"
                style={{
                  ...styles.roleButton,
                  ...(selectedRole === 'nauczyciel' ? styles.roleButtonActive : {})
                }}
                onClick={() => setSelectedRole('nauczyciel')}
              >
                Nauczyciel
              </button>
              <button
                type="button"
                style={{
                  ...styles.roleButton,
                  ...(selectedRole === 'student' ? styles.roleButtonActive : {})
                }}
                onClick={() => setSelectedRole('student')}
              >
                Student
              </button>
            </div>
          </div>

          {/* Nazwa użytkownika */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nazwa użytkownika:</label>
            <div style={styles.inputWrapper}>
              <User style={styles.inputIcon} size={20} />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setFocusedInput('username')}
                onBlur={() => setFocusedInput('')}
                style={{
                  ...styles.input,
                  ...(focusedInput === 'username' ? styles.inputFocus : {})
                }}
                placeholder="Wprowadź nazwę użytkownika"
                required
              />
            </div>
          </div>

          {/* Hasło */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Hasło:</label>
            <div style={styles.inputWrapper}>
              <Lock style={styles.inputIcon} size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedInput('password')}
                onBlur={() => setFocusedInput('')}
                style={{
                  ...styles.input,
                  ...(focusedInput === 'password' ? styles.inputFocus : {})
                }}
                placeholder="Wprowadź hasło"
                required
              />
              <button
                type="button"
                style={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Komunikat błędu */}
          {error && (
            <div style={styles.errorMessage}>
              {error}
            </div>
          )}

          {/* Przycisk logowania */}
          <button
            onClick={handleLogin}
            style={styles.loginButton}
            onMouseEnter={(e) => {
              Object.assign(e.target.style, styles.loginButtonHover);
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 14px rgba(22, 163, 74, 0.3)';
            }}
          >
            <LogIn size={20} />
            Zaloguj się
          </button>
        </div>

        {/* Szybkie logowanie */}
        <div style={styles.quickLogin}>
          <div style={styles.quickLoginTitle}>Szybkie logowanie (demo):</div>
          <div style={styles.quickLoginButtons}>
            <button
              onClick={() => handleQuickLogin('admin')}
              style={styles.quickLoginButton}
            >
              🔧 Administrator (admin/admin)
            </button>
            <button
              onClick={() => handleQuickLogin('nauczyciel')}
              style={styles.quickLoginButton}
            >
              👨‍🏫 Nauczyciel (nauczyciel/nauczyciel)
            </button>
            <button
              onClick={() => handleQuickLogin('student')}
              style={styles.quickLoginButton}
            >
              👨‍🎓 Student (student/student)
            </button>
          </div>
        </div>

        {/* Stopka */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            © 2024 Arrio - System PSDiA
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSystem;