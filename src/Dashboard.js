import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  BookOpen, 
  FileText, 
  Settings, 
  Bell, 
  Menu, 
  X,
  Clock,
  Award,
  TrendingUp,
  MessageSquare,
  TreePine,
  Leaf,
  GraduationCap,
  ClipboardList
} from 'lucide-react';

// Stylowanie wbudowane
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  header: {
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
  },
  headerInner: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '8px'
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(to bottom right, #16a34a, #84cc16)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  logoText: {
    marginLeft: '12px'
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#111827',
    margin: 0
  },
  subtitle: {
    fontSize: '12px',
    color: '#6b7280',
    margin: 0
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  bellButton: {
    position: 'relative',
    padding: '8px',
    color: '#6b7280',
    background: 'none',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  bellBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#16a34a'
  },
  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'linear-gradient(to right, #16a34a, #84cc16)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500'
  },
  main: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '2rem 1rem'
  },
  welcome: {
    marginBottom: '2rem'
  },
  welcomeTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '8px'
  },
  welcomeText: {
    color: '#6b7280'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '1.5rem',
    border: '1px solid #f3f4f6',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.2s'
  },
  statContent: {
    display: 'flex',
    alignItems: 'center'
  },
  statIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1rem',
    color: 'white'
  },
  statValue: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#111827',
    margin: 0
  },
  statLabel: {
    fontSize: '14px',
    color: '#6b7280',
    margin: 0
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '2rem',
    marginBottom: '2rem'
  },
  section: {
    backgroundColor: 'white',
    borderRadius: '12px',
    border: '1px solid #f3f4f6',
    padding: '1.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center'
  },
  sectionIcon: {
    color: '#16a34a',
    marginRight: '8px'
  },
  actionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem'
  },
  actionButton: {
    padding: '1.5rem',
    borderRadius: '12px',
    border: '2px dashed #d1d5db',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all 0.2s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px'
  },
  actionIcon: {
    transition: 'transform 0.2s'
  },
  actionText: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151'
  },
  activityList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  activityItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px'
  },
  activityDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    marginTop: '8px',
    flexShrink: 0
  },
  activityContent: {
    flex: 1,
    minWidth: 0
  },
  activityText: {
    fontSize: '14px',
    color: '#111827',
    lineHeight: '1.25',
    margin: 0
  },
  activityTime: {
    fontSize: '12px',
    color: '#6b7280',
    marginTop: '4px'
  },
  classItem: {
    padding: '1.5rem',
    borderRadius: '12px',
    borderLeft: '4px solid',
    marginBottom: '1rem'
  },
  classContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  classLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  classIconWrapper: {
    padding: '12px',
    borderRadius: '8px'
  },
  classInfo: {
    display: 'flex',
    flexDirection: 'column'
  },
  classTitle: {
    fontWeight: '600',
    color: '#111827',
    margin: 0
  },
  classTime: {
    fontSize: '14px',
    color: '#6b7280',
    margin: '4px 0'
  },
  classInstructor: {
    fontSize: '12px',
    color: '#6b7280'
  },
  classRight: {
    textAlign: 'right'
  },
  classBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500'
  },
  classType: {
    fontSize: '12px',
    color: '#6b7280',
    marginTop: '4px',
    textTransform: 'capitalize'
  },
  footer: {
    marginTop: '3rem',
    textAlign: 'center'
  },
  footerText: {
    fontSize: '14px',
    color: '#6b7280'
  },
  // Responsive
  '@media (max-width: 768px)': {
    contentGrid: {
      gridTemplateColumns: '1fr'
    },
    actionsGrid: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  }
};

const Dashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const stats = [
    { label: 'Aktywni uczniowie', value: '87', color: '#16a34a', icon: Users },
    { label: 'Nadchodzące zajęcia', value: '12', color: '#84cc16', icon: Calendar },
    { label: 'Materiały dendrologii', value: '156', color: '#10b981', icon: TreePine },
    { label: 'Praktyki terenowe', value: '3', color: '#16a34a', icon: Leaf }
  ];

  const quickActions = [
    { title: 'Dodaj ucznia', icon: Users, bgColor: '#f0fdf4', textColor: '#15803d', borderColor: '#bbf7d0' },
    { title: 'Zaplanuj zajęcia', icon: Calendar, bgColor: '#f7fee7', textColor: '#65a30d', borderColor: '#d9f99d' },
    { title: 'Materiały', icon: TreePine, bgColor: '#ecfdf5', textColor: '#047857', borderColor: '#a7f3d0' },
    { title: 'Lista obecności', icon: ClipboardList, bgColor: '#f0fdf4', textColor: '#15803d', borderColor: '#bbf7d0' },
    { title: 'Oceny', icon: GraduationCap, bgColor: '#f7fee7', textColor: '#65a30d', borderColor: '#d9f99d' },
    { title: 'Raporty', icon: TrendingUp, bgColor: '#ecfdf5', textColor: '#047857', borderColor: '#a7f3d0' }
  ];

  const recentActivity = [
    { text: 'Dr Jan Kowalski dodał materiał o dębach', time: '15 min temu', type: 'success' },
    { text: 'Praktyki w Arboretum - jutro 9:00', time: '1 godz. temu', type: 'info' },
    { text: 'Anna Nowak ukończyła test dendrologii', time: '2 godz. temu', type: 'success' },
    { text: 'Nowy kurs arborystyki - wymaga akceptacji', time: '4 godz. temu', type: 'warning' }
  ];

  const upcomingClasses = [
    {
      title: 'Dendrologia - drzewa liściaste',
      time: 'Jutro, 9:00 - 11:30',
      students: 24,
      instructor: 'Dr Maria Zielińska',
      type: 'teoria',
      bgColor: '#f0fdf4',
      borderColor: '#16a34a',
      iconBg: '#dcfce7',
      badgeColor: '#dcfce7',
      badgeText: '#166534'
    },
    {
      title: 'Praktyki w Arboretum',
      time: 'Piątek, 8:00 - 16:00',
      students: 18,
      instructor: 'Mgr Piotr Dębowski',
      type: 'praktyka',
      bgColor: '#f7fee7',
      borderColor: '#84cc16',
      iconBg: '#ecfccb',
      badgeColor: '#ecfccb',
      badgeText: '#365314'
    }
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <TreePine size={20} color="white" />
              <Leaf 
                size={12} 
                color="#84cc16" 
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px'
                }}
              />
            </div>
            <div style={styles.logoText}>
              <h1 style={styles.title}>Arrio</h1>
              <p style={styles.subtitle}>PSDiA Dziennik</p>
            </div>
          </div>
          
          <div style={styles.headerActions}>
            <button style={styles.bellButton}>
              <Bell size={20} />
              <span style={styles.bellBadge}></span>
            </button>
            <div style={styles.avatar}>
              A
            </div>
          </div>
        </div>
      </header>

      <div style={styles.main}>
        {/* Welcome Section */}
        <div style={styles.welcome}>
          <h2 style={styles.welcomeTitle}>
            Witaj w systemie Arrio! 🌳
          </h2>
          <p style={styles.welcomeText}>
            Zarządzaj kursami dendrologii i arborystyki w Polskiej Szkole Dendrologii i Arborystyki
          </p>
        </div>

        {/* Stats Cards */}
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              style={{
                ...styles.statCard,
                ':hover': { boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }
              }}
            >
              <div style={styles.statContent}>
                <div style={{
                  ...styles.statIcon,
                  backgroundColor: stat.color
                }}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <p style={styles.statValue}>{stat.value}</p>
                  <p style={styles.statLabel}>{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.contentGrid}>
          {/* Quick Actions */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>
              <Leaf style={styles.sectionIcon} size={20} />
              Szybkie akcje
            </h3>
            <div style={styles.actionsGrid}>
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  style={{
                    ...styles.actionButton,
                    backgroundColor: action.bgColor,
                    color: action.textColor,
                    borderColor: action.borderColor,
                    ':hover': {
                      borderStyle: 'solid',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }
                  }}
                >
                  <div style={styles.actionIcon}>
                    <action.icon size={20} />
                  </div>
                  <span style={styles.actionText}>
                    {action.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>
              <Clock style={styles.sectionIcon} size={20} />
              Ostatnia aktywność
            </h3>
            <div style={styles.activityList}>
              {recentActivity.map((activity, index) => (
                <div key={index} style={styles.activityItem}>
                  <div style={{
                    ...styles.activityDot,
                    backgroundColor: 
                      activity.type === 'success' ? '#10b981' :
                      activity.type === 'warning' ? '#f59e0b' : '#3b82f6'
                  }}></div>
                  <div style={styles.activityContent}>
                    <p style={styles.activityText}>
                      {activity.text}
                    </p>
                    <p style={styles.activityTime}>
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Classes */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>
            <Calendar style={styles.sectionIcon} size={20} />
            Nadchodzące zajęcia
          </h3>
          {upcomingClasses.map((classItem, index) => (
            <div key={index} style={{
              ...styles.classItem,
              backgroundColor: classItem.bgColor,
              borderLeftColor: classItem.borderColor
            }}>
              <div style={styles.classContent}>
                <div style={styles.classLeft}>
                  <div style={{
                    ...styles.classIconWrapper,
                    backgroundColor: classItem.iconBg
                  }}>
                    {classItem.type === 'teoria' ? 
                      <BookOpen color={classItem.borderColor} size={20} /> :
                      <TreePine color={classItem.borderColor} size={20} />
                    }
                  </div>
                  <div style={styles.classInfo}>
                    <h4 style={styles.classTitle}>{classItem.title}</h4>
                    <p style={styles.classTime}>{classItem.time}</p>
                    <p style={styles.classInstructor}>Prowadzący: {classItem.instructor}</p>
                  </div>
                </div>
                <div style={styles.classRight}>
                  <span style={{
                    ...styles.classBadge,
                    backgroundColor: classItem.badgeColor,
                    color: classItem.badgeText
                  }}>
                    {classItem.students} uczniów
                  </span>
                  <p style={styles.classType}>{classItem.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            © 2024 Arrio - System zarządzania dla Polskiej Szkoły Dendrologii i Arborystyki
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;