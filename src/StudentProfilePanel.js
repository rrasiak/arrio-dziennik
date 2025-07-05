import React, { useState } from 'react';
import { 
  User, Edit3, Camera, Mail, Phone, MapPin, Calendar, 
  BookOpen, Award, TrendingUp, Clock, Star, Download,
  Settings, Bell, Lock, Eye, EyeOff, Save, Upload,
  BarChart3, PieChart, Target, CheckCircle, AlertCircle,
  GraduationCap, FileText, Image, Smartphone, Monitor,
  Globe, Shield, Key, RefreshCw, ArrowRight, ChevronRight
} from 'lucide-react';

const StudentProfilePanel = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Anna',
    lastName: 'Kowalska',
    email: 'anna.kowalska@psdia.edu.pl',
    phone: '+48 123 456 789',
    address: 'ul. Leśna 12, 00-123 Warszawa',
    birthDate: '1998-01-01',
    studentId: 'PSDiA/2024/001',
    enrollmentDate: '2024-01-15'
  });

  const tabs = [
    { id: 'overview', name: 'Przegląd', icon: User },
    { id: 'courses', name: 'Moje kursy', icon: BookOpen },
    { id: 'achievements', name: 'Osiągnięcia', icon: Award },
    { id: 'schedule', name: 'Harmonogram', icon: Calendar },
    { id: 'settings', name: 'Ustawienia', icon: Settings }
  ];

  const studentStats = {
    overallGrade: 4.2,
    attendance: 92,
    completedCourses: 3,
    activeCourses: 2,
    totalPoints: 1240,
    ranking: 5
  };

  const courses = [
    {
      id: 1,
      name: 'Dendrologia podstawowa',
      code: 'DEND-001',
      teacher: 'Dr Maria Zielińska',
      progress: 85,
      grade: 4.5,
      status: 'active',
      nextClass: '2024-05-20 09:00',
      attendance: 95,
      materials: 12
    },
    {
      id: 2,
      name: 'Arborystyka praktyczna',
      code: 'ARBO-002',
      teacher: 'Mgr Piotr Kowalski',
      progress: 70,
      grade: 4.0,
      status: 'active',
      nextClass: '2024-05-22 14:00',
      attendance: 88,
      materials: 8
    },
    {
      id: 3,
      name: 'Morfologia roślin',
      code: 'MORF-003',
      teacher: 'Dr Anna Nowak',
      progress: 100,
      grade: 4.3,
      status: 'completed',
      completedDate: '2024-04-30',
      attendance: 96,
      materials: 15
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Pierwszy kurs ukończony',
      description: 'Pomyślnie ukończyłeś swój pierwszy kurs',
      icon: GraduationCap,
      earned: true,
      date: '2024-04-30',
      points: 100
    },
    {
      id: 2,
      title: 'Wzorowa frekwencja',
      description: 'Frekwencja powyżej 95% przez miesiąc',
      icon: CheckCircle,
      earned: true,
      date: '2024-04-15',
      points: 50
    },
    {
      id: 3,
      title: 'Ekspert dendrologii',
      description: 'Uzyskaj ocenę 4.5+ z dendrologii',
      icon: Award,
      earned: true,
      date: '2024-05-10',
      points: 150
    },
    {
      id: 4,
      title: 'Mistrz praktyk',
      description: 'Ukończ 5 praktyk terenowych',
      icon: Target,
      earned: false,
      progress: 60,
      points: 200
    }
  ];

  const upcomingClasses = [
    {
      course: 'Dendrologia podstawowa',
      topic: 'Drzewa iglaste - identyfikacja',
      date: '2024-05-20',
      time: '09:00 - 11:30',
      room: 'Sala 101',
      type: 'wykład'
    },
    {
      course: 'Arborystyka praktyczna',
      topic: 'Praktyki w arboretum',
      date: '2024-05-22',
      time: '14:00 - 17:00',
      room: 'Arboretum',
      type: 'praktyka'
    }
  ];

  const styles = {
    container: {
      padding: '2rem',
      backgroundColor: '#f8fafc',
      minHeight: '100vh'
    },
    header: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '2rem',
      marginBottom: '2rem',
      border: '1px solid #e5e7eb',
      position: 'relative',
      overflow: 'hidden'
    },
    headerBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '120px',
      background: 'linear-gradient(135deg, #16a34a, #84cc16)',
      opacity: 0.1
    },
    profileSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      position: 'relative',
      zIndex: 1
    },
    avatar: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      backgroundColor: '#e5e7eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#6b7280',
      border: '4px solid white',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      position: 'relative'
    },
    avatarEdit: {
      position: 'absolute',
      bottom: '8px',
      right: '8px',
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#16a34a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      border: '2px solid white'
    },
    profileInfo: {
      flex: 1
    },
    profileName: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#1e293b',
      marginBottom: '0.5rem'
    },
    profileMeta: {
      color: '#64748b',
      marginBottom: '1rem'
    },
    statsRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2rem',
      marginTop: '1.5rem'
    },
    statItem: {
      textAlign: 'center'
    },
    statValue: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      color: '#16a34a'
    },
    statLabel: {
      fontSize: '14px',
      color: '#64748b',
      marginTop: '4px'
    },
    tabsContainer: {
      backgroundColor: 'white',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      marginBottom: '2rem'
    },
    tabsList: {
      display: 'flex',
      borderBottom: '1px solid #f1f5f9'
    },
    tab: {
      padding: '1rem 1.5rem',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      color: '#64748b',
      borderBottom: '2px solid transparent',
      transition: 'all 0.2s',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    tabActive: {
      color: '#16a34a',
      borderBottomColor: '#16a34a',
      backgroundColor: '#f0fdf4'
    },
    tabContent: {
      padding: '2rem'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      border: '1px solid #e5e7eb',
      marginBottom: '1.5rem'
    },
    cardTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#1e293b',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
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
    courseCard: {
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '1.5rem',
      transition: 'all 0.2s'
    },
    courseCardHover: {
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      borderColor: '#16a34a'
    },
    progressBar: {
      width: '100%',
      height: '8px',
      backgroundColor: '#f1f5f9',
      borderRadius: '4px',
      overflow: 'hidden',
      marginBottom: '1rem'
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#16a34a',
      borderRadius: '4px',
      transition: 'width 0.3s'
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
    formGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem'
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
    achievementCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      transition: 'all 0.2s'
    },
    achievementIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    scheduleItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#f8fafc',
      borderRadius: '8px',
      marginBottom: '1rem',
      border: '1px solid #e2e8f0'
    }
  };

  const handleProfileEdit = () => {
    setIsEditingProfile(!isEditingProfile);
  };

  const handleSaveProfile = () => {
    setIsEditingProfile(false);
    // Tutaj logika zapisywania profilu
  };

  const renderOverview = () => (
    <div>
      <div style={{ ...styles.grid, ...styles.gridCols2 }}>
        {/* Dane osobowe */}
        <div style={styles.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={styles.cardTitle}>
              <User size={20} />
              Dane osobowe
            </h3>
            <button
              onClick={handleProfileEdit}
              style={{ ...styles.button, ...styles.buttonSecondary }}
            >
              <Edit3 size={16} />
              {isEditingProfile ? 'Anuluj' : 'Edytuj'}
            </button>
          </div>

          {isEditingProfile ? (
            <div>
              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Imię</label>
                  <input
                    type="text"
                    style={styles.input}
                    value={profileData.firstName}
                    onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Nazwisko</label>
                  <input
                    type="text"
                    style={styles.input}
                    value={profileData.lastName}
                    onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                  />
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input
                  type="email"
                  style={styles.input}
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Telefon</label>
                <input
                  type="tel"
                  style={styles.input}
                  value={profileData.phone}
                  onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                />
              </div>

              <button
                onClick={handleSaveProfile}
                style={{ ...styles.button, ...styles.buttonPrimary }}
              >
                <Save size={16} />
                Zapisz zmiany
              </button>
            </div>
          ) : (
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Mail size={16} color="#64748b" />
                  <span style={{ fontSize: '14px' }}>{profileData.email}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Phone size={16} color="#64748b" />
                  <span style={{ fontSize: '14px' }}>{profileData.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <MapPin size={16} color="#64748b" />
                  <span style={{ fontSize: '14px' }}>{profileData.address}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={16} color="#64748b" />
                  <span style={{ fontSize: '14px' }}>Zapisany: {profileData.enrollmentDate}</span>
                </div>
              </div>
              
              <div style={{ padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '6px', border: '1px solid #bbf7d0' }}>
                <div style={{ fontSize: '12px', color: '#166534', fontWeight: '500' }}>
                  Numer indeksu: {profileData.studentId}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Postępy */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>
            <TrendingUp size={20} />
            Twoje postępy
          </h3>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>Średnia ocen</span>
              <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#16a34a' }}>
                {studentStats.overallGrade}
              </span>
            </div>
            <div style={{ ...styles.progressBar, backgroundColor: '#f1f5f9' }}>
              <div style={{
                ...styles.progressFill,
                width: `${(studentStats.overallGrade / 5) * 100}%`,
                backgroundColor: '#16a34a'
              }} />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>Frekwencja</span>
              <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#16a34a' }}>
                {studentStats.attendance}%
              </span>
            </div>
            <div style={styles.progressBar}>
              <div style={{
                ...styles.progressFill,
                width: `${studentStats.attendance}%`
              }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#16a34a' }}>
                {studentStats.totalPoints}
              </div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Punkty</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#16a34a' }}>
                #{studentStats.ranking}
              </div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Pozycja</div>
            </div>
          </div>
        </div>
      </div>

      {/* Nadchodzące zajęcia */}
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>
          <Clock size={20} />
          Nadchodzące zajęcia
        </h3>
        
        {upcomingClasses.map((class_, index) => (
          <div key={index} style={styles.scheduleItem}>
            <div>
              <div style={{ fontWeight: '500', marginBottom: '4px' }}>{class_.course}</div>
              <div style={{ fontSize: '14px', color: '#64748b' }}>{class_.topic}</div>
              <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>
                {class_.date} • {class_.time} • {class_.room}
              </div>
            </div>
            <div style={{
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: '500',
              backgroundColor: class_.type === 'wykład' ? '#dbeafe' : '#f0fdf4',
              color: class_.type === 'wykład' ? '#1e40af' : '#166534'
            }}>
              {class_.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCourses = () => (
    <div style={{ ...styles.grid, ...styles.gridCols2 }}>
      {courses.map(course => (
        <div key={course.id} style={styles.courseCard}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontWeight: '600' }}>{course.name}</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>{course.teacher}</p>
            </div>
            <span style={{
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: '500',
              backgroundColor: course.status === 'active' ? '#dcfce7' : '#f3f4f6',
              color: course.status === 'active' ? '#166534' : '#6b7280'
            }}>
              {course.status === 'active' ? 'Aktywny' : 'Ukończony'}
            </span>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontSize: '14px' }}>Postęp kursu</span>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>{course.progress}%</span>
            </div>
            <div style={styles.progressBar}>
              <div style={{
                ...styles.progressFill,
                width: `${course.progress}%`
              }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', fontSize: '14px' }}>
            <div>
              <div style={{ fontWeight: '500', color: '#16a34a' }}>{course.grade}</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Ocena</div>
            </div>
            <div>
              <div style={{ fontWeight: '500', color: '#16a34a' }}>{course.attendance}%</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Frekwencja</div>
            </div>
            <div>
              <div style={{ fontWeight: '500', color: '#16a34a' }}>{course.materials}</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Materiały</div>
            </div>
          </div>

          {course.status === 'active' && course.nextClass && (
            <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#f0fdf4', borderRadius: '6px', border: '1px solid #bbf7d0' }}>
              <div style={{ fontSize: '12px', color: '#166534', fontWeight: '500' }}>
                Następne zajęcia: {course.nextClass}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderAchievements = () => (
    <div style={{ ...styles.grid, ...styles.gridCols2 }}>
      {achievements.map(achievement => (
        <div
          key={achievement.id}
          style={{
            ...styles.achievementCard,
            opacity: achievement.earned ? 1 : 0.6,
            borderColor: achievement.earned ? '#bbf7d0' : '#e5e7eb',
            backgroundColor: achievement.earned ? '#f0fdf4' : 'white'
          }}
        >
          <div style={{
            ...styles.achievementIcon,
            backgroundColor: achievement.earned ? '#16a34a' : '#9ca3af'
          }}>
            <achievement.icon size={24} />
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: '0 0 4px 0', fontWeight: '600' }}>{achievement.title}</h4>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#64748b' }}>
              {achievement.description}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#16a34a', fontWeight: '500' }}>
                +{achievement.points} punktów
              </span>
              {achievement.earned ? (
                <span style={{ fontSize: '12px', color: '#64748b' }}>
                  Zdobyte: {achievement.date}
                </span>
              ) : (
                <span style={{ fontSize: '12px', color: '#64748b' }}>
                  Postęp: {achievement.progress}%
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'courses':
        return renderCourses();
      case 'achievements':
        return renderAchievements();
      case 'schedule':
        return (
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              <Calendar size={20} />
              Mój harmonogram
            </h3>
            <p style={{ color: '#64748b' }}>Szczegółowy kalendarz zajęć będzie dostępny wkrótce.</p>
          </div>
        );
      case 'settings':
        return (
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              <Settings size={20} />
              Ustawienia konta
            </h3>
            <p style={{ color: '#64748b' }}>Panel ustawień konta będzie dostępny wkrótce.</p>
          </div>
        );
      default:
        return renderOverview();
    }
  };

  return (
    <div style={styles.container}>
      {/* Header z profilem */}
      <div style={styles.header}>
        <div style={styles.headerBg} />
        <div style={styles.profileSection}>
          <div style={styles.avatar}>
            {profileData.firstName[0]}{profileData.lastName[0]}
            <div style={styles.avatarEdit}>
              <Camera size={16} color="white" />
            </div>
          </div>
          <div style={styles.profileInfo}>
            <h1 style={styles.profileName}>
              {profileData.firstName} {profileData.lastName}
            </h1>
            <div style={styles.profileMeta}>
              Student • {profileData.studentId} • Zapisany od {profileData.enrollmentDate}
            </div>
            <div style={styles.statsRow}>
              <div style={styles.statItem}>
                <div style={styles.statValue}>{studentStats.overallGrade}</div>
                <div style={styles.statLabel}>Średnia ocen</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statValue}>{studentStats.attendance}%</div>
                <div style={styles.statLabel}>Frekwencja</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statValue}>{studentStats.completedCourses}</div>
                <div style={styles.statLabel}>Ukończone kursy</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statValue}>{studentStats.totalPoints}</div>
                <div style={styles.statLabel}>Punkty</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabsContainer}>
        <div style={styles.tabsList}>
          {tabs.map(tab => (
            <div
              key={tab.id}
              style={{
                ...styles.tab,
                ...(activeTab === tab.id ? styles.tabActive : {})
              }}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon size={16} />
              {tab.name}
            </div>
          ))}
        </div>
        <div style={styles.tabContent}>
          {renderContent()}
        </div>
      </div>

      {/* Info Panel */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #bbf7d0',
        padding: '1.5rem',
        backgroundColor: '#f0fdf4'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle size={20} color="#16a34a" />
          <div>
            <h4 style={{ margin: 0, color: '#166534' }}>Panel profilu studenta gotowy</h4>
            <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#15803d' }}>
              Funkcjonalności: edycja profilu, postępy, kursy, osiągnięcia, harmonogram, statystyki
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfilePanel;