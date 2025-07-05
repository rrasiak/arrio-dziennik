import React, { useState } from 'react';
import { 
  BarChart3, Download, Calendar, Users, GraduationCap, TrendingUp,
  FileText, Mail, Settings, Filter, Search, Eye, Clock, CheckCircle,
  AlertCircle, PieChart, LineChart, BarChart, FileSpreadsheet,
  RefreshCw, Play, Pause, Edit3, Trash2, Copy, Share2, Archive,
  Plus
} from 'lucide-react';

const ReportsPanel = () => {
  const [selectedReportType, setSelectedReportType] = useState('attendance');
  const [dateRange, setDateRange] = useState('month');
  const [selectedGroups, setSelectedGroups] = useState(['all']);
  const [showGenerator, setShowGenerator] = useState(false);
  const [generatingReport, setGeneratingReport] = useState(false);

  // Przykładowe dane
  const reportTypes = [
    {
      id: 'attendance',
      name: 'Raport Obecności',
      description: 'Frekwencja uczniów w wybranym okresie',
      icon: Users,
      color: '#16a34a',
      formats: ['Excel', 'PDF', 'CSV']
    },
    {
      id: 'grades',
      name: 'Raport Ocen',
      description: 'Zestawienie ocen i średnich',
      icon: GraduationCap,
      color: '#3b82f6',
      formats: ['Excel', 'PDF']
    },
    {
      id: 'progress',
      name: 'Raport Postępów',
      description: 'Analiza postępów uczniów',
      icon: TrendingUp,
      color: '#8b5cf6',
      formats: ['Excel', 'PDF', 'PowerPoint']
    },
    {
      id: 'financial',
      name: 'Raport Finansowy',
      description: 'Opłaty i rozliczenia',
      icon: BarChart3,
      color: '#f59e0b',
      formats: ['Excel', 'PDF']
    }
  ];

  const recentReports = [
    {
      id: 1,
      name: 'Raport_Obecnosci_Maj_2024.xlsx',
      type: 'attendance',
      generatedBy: 'Dr Maria Zielińska',
      generatedAt: '2024-05-15 09:30',
      size: '2.3 MB',
      downloads: 12,
      status: 'completed'
    },
    {
      id: 2,
      name: 'Analiza_Ocen_Semestr_I.pdf',
      type: 'grades',
      generatedBy: 'System',
      generatedAt: '2024-05-14 14:15',
      size: '1.8 MB',
      downloads: 8,
      status: 'completed'
    },
    {
      id: 3,
      name: 'Postepy_Uczniow_Q1_2024.xlsx',
      type: 'progress',
      generatedBy: 'Admin System',
      generatedAt: '2024-05-13 10:45',
      size: '4.1 MB',
      downloads: 15,
      status: 'completed'
    },
    {
      id: 4,
      name: 'Raport_Finansowy_Kwartal.pdf',
      type: 'financial',
      generatedBy: 'Katarzyna Lipińska',
      generatedAt: '2024-05-10 16:20',
      size: '892 KB',
      downloads: 5,
      status: 'completed'
    },
    {
      id: 5,
      name: 'Obecnosc_Tygodniowa_W20.xlsx',
      type: 'attendance',
      generatedBy: 'Dr Maria Zielińska',
      generatedAt: '2024-05-15 11:45',
      size: 'Generowanie...',
      downloads: 0,
      status: 'generating'
    }
  ];

  const scheduledReports = [
    {
      id: 1,
      name: 'Miesięczny raport obecności',
      type: 'attendance',
      frequency: 'monthly',
      nextRun: '2024-06-01 08:00',
      recipients: ['admin@psdia.edu.pl', 'dyrektor@psdia.edu.pl'],
      active: true
    },
    {
      id: 2,
      name: 'Tygodniowy raport ocen',
      type: 'grades',
      frequency: 'weekly',
      nextRun: '2024-05-20 09:00',
      recipients: ['nauczyciele@psdia.edu.pl'],
      active: true
    },
    {
      id: 3,
      name: 'Kwartalny raport postępów',
      type: 'progress',
      frequency: 'quarterly',
      nextRun: '2024-07-01 10:00',
      recipients: ['admin@psdia.edu.pl'],
      active: false
    }
  ];

  const analyticsData = {
    totalReports: 156,
    thisMonth: 23,
    avgDownloads: 8.5,
    mostPopular: 'Raport Obecności'
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
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    statCard: {
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      textAlign: 'center',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
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
    mainGrid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '2rem',
      marginBottom: '2rem'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    reportTypeGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem',
      marginBottom: '2rem'
    },
    reportTypeCard: {
      padding: '1.5rem',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.2s',
      position: 'relative'
    },
    reportTypeCardActive: {
      borderColor: '#16a34a',
      backgroundColor: '#f0fdf4'
    },
    reportTypeIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem',
      color: 'white'
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
    select: {
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      backgroundColor: 'white',
      fontSize: '14px'
    },
    input: {
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      width: '100%',
      boxSizing: 'border-box'
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
    statusBadge: {
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: '500'
    },
    statusCompleted: {
      backgroundColor: '#dcfce7',
      color: '#166534'
    },
    statusGenerating: {
      backgroundColor: '#fef3c7',
      color: '#92400e'
    },
    statusError: {
      backgroundColor: '#fee2e2',
      color: '#dc2626'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginBottom: '1.5rem'
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
    checkboxGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    checkboxItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  };

  const getReportTypeIcon = (type) => {
    const reportType = reportTypes.find(rt => rt.id === type);
    return reportType ? reportType.icon : FileText;
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'completed':
        return { ...styles.statusBadge, ...styles.statusCompleted };
      case 'generating':
        return { ...styles.statusBadge, ...styles.statusGenerating };
      case 'error':
        return { ...styles.statusBadge, ...styles.statusError };
      default:
        return styles.statusBadge;
    }
  };

  const generateReport = () => {
    setGeneratingReport(true);
    // Symulacja generowania raportu
    setTimeout(() => {
      setGeneratingReport(false);
      setShowGenerator(false);
    }, 3000);
  };

  const ReportGenerator = () => (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>
        <FileSpreadsheet size={20} color="#16a34a" />
        Generator Raportów
      </h3>

      <div style={styles.reportTypeGrid}>
        {reportTypes.map(type => (
          <div
            key={type.id}
            style={{
              ...styles.reportTypeCard,
              ...(selectedReportType === type.id ? styles.reportTypeCardActive : {})
            }}
            onClick={() => setSelectedReportType(type.id)}
          >
            <div style={{ ...styles.reportTypeIcon, backgroundColor: type.color }}>
              <type.icon size={24} />
            </div>
            <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: '600' }}>{type.name}</h4>
            <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>{type.description}</p>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              {type.formats.map(format => (
                <span
                  key={format}
                  style={{
                    padding: '2px 6px',
                    backgroundColor: '#f1f5f9',
                    color: '#475569',
                    fontSize: '11px',
                    borderRadius: '4px'
                  }}
                >
                  {format}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={styles.formGrid}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Okres</label>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            style={styles.select}
          >
            <option value="week">Ostatni tydzień</option>
            <option value="month">Ostatni miesiąc</option>
            <option value="quarter">Ostatni kwartał</option>
            <option value="semester">Ostatni semestr</option>
            <option value="year">Ostatni rok</option>
            <option value="custom">Niestandardowy</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Format eksportu</label>
          <select style={styles.select}>
            <option value="excel">Excel (.xlsx)</option>
            <option value="pdf">PDF</option>
            <option value="csv">CSV</option>
          </select>
        </div>
      </div>

      {dateRange === 'custom' && (
        <div style={styles.formGrid}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Data początkowa</label>
            <input type="date" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Data końcowa</label>
            <input type="date" style={styles.input} />
          </div>
        </div>
      )}

      <div style={styles.formGroup}>
        <label style={styles.label}>Grupy/Kursy</label>
        <div style={styles.checkboxGroup}>
          <div style={styles.checkboxItem}>
            <input type="checkbox" id="all-groups" defaultChecked />
            <label htmlFor="all-groups">Wszystkie grupy</label>
          </div>
          <div style={styles.checkboxItem}>
            <input type="checkbox" id="dendrologia-1" />
            <label htmlFor="dendrologia-1">Dendrologia I</label>
          </div>
          <div style={styles.checkboxItem}>
            <input type="checkbox" id="arborystyka-2" />
            <label htmlFor="arborystyka-2">Arborystyka II</label>
          </div>
          <div style={styles.checkboxItem}>
            <input type="checkbox" id="fizjologia" />
            <label htmlFor="fizjologia">Fizjologia drzew</label>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
        <button
          onClick={() => setShowGenerator(false)}
          style={{ ...styles.button, ...styles.buttonSecondary }}
        >
          Anuluj
        </button>
        <button
          onClick={generateReport}
          disabled={generatingReport}
          style={{
            ...styles.button,
            ...styles.buttonPrimary,
            opacity: generatingReport ? 0.6 : 1
          }}
        >
          {generatingReport ? (
            <>
              <RefreshCw size={16} style={{ animation: 'spin 1s linear infinite' }} />
              Generowanie...
            </>
          ) : (
            <>
              <Download size={16} />
              Generuj raport
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Panel Raportów</h1>
        <p style={styles.subtitle}>
          Generowanie i zarządzanie raportami analitycznymi
        </p>
      </div>

      {/* Statistics */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={{ ...styles.statNumber, color: '#1e293b' }}>{analyticsData.totalReports}</div>
          <div style={styles.statLabel}>Łącznie raportów</div>
        </div>
        <div style={styles.statCard}>
          <div style={{ ...styles.statNumber, color: '#16a34a' }}>{analyticsData.thisMonth}</div>
          <div style={styles.statLabel}>W tym miesiącu</div>
        </div>
        <div style={styles.statCard}>
          <div style={{ ...styles.statNumber, color: '#3b82f6' }}>{analyticsData.avgDownloads}</div>
          <div style={styles.statLabel}>Średnio pobrań</div>
        </div>
        <div style={styles.statCard}>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#8b5cf6', marginBottom: '0.5rem' }}>
            {analyticsData.mostPopular}
          </div>
          <div style={styles.statLabel}>Najpopularniejszy</div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainGrid}>
        {/* Recent Reports */}
        <div style={styles.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={styles.cardTitle}>
              <FileText size={20} color="#16a34a" />
              Ostatnie raporty
            </h3>
            <button
              onClick={() => setShowGenerator(true)}
              style={{ ...styles.button, ...styles.buttonPrimary }}
            >
              <Plus size={16} />
              Nowy raport
            </button>
          </div>

          <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Nazwa raportu</th>
                  <th style={styles.th}>Typ</th>
                  <th style={styles.th}>Utworzył</th>
                  <th style={styles.th}>Data</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Akcje</th>
                </tr>
              </thead>
              <tbody>
                {recentReports.map(report => {
                  const ReportIcon = getReportTypeIcon(report.type);
                  return (
                    <tr key={report.id}>
                      <td style={styles.td}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: '#f1f5f9',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <ReportIcon size={16} color="#64748b" />
                          </div>
                          <div>
                            <div style={{ fontWeight: '500', fontSize: '14px' }}>{report.name}</div>
                            <div style={{ fontSize: '12px', color: '#64748b' }}>
                              {report.size} • {report.downloads} pobrań
                            </div>
                          </div>
                        </div>
                      </td>
                      <td style={styles.td}>
                        <span style={{ textTransform: 'capitalize', fontSize: '13px' }}>
                          {reportTypes.find(rt => rt.id === report.type)?.name}
                        </span>
                      </td>
                      <td style={styles.td}>
                        <span style={{ fontSize: '13px' }}>{report.generatedBy}</span>
                      </td>
                      <td style={styles.td}>
                        <span style={{ fontSize: '13px', color: '#64748b' }}>{report.generatedAt}</span>
                      </td>
                      <td style={styles.td}>
                        <span style={getStatusStyle(report.status)}>
                          {report.status === 'completed' && <CheckCircle size={12} style={{ marginRight: '4px' }} />}
                          {report.status === 'generating' && <RefreshCw size={12} style={{ marginRight: '4px' }} />}
                          {report.status === 'error' && <AlertCircle size={12} style={{ marginRight: '4px' }} />}
                          {report.status === 'completed' ? 'Gotowy' : 
                           report.status === 'generating' ? 'Generowanie' : 'Błąd'}
                        </span>
                      </td>
                      <td style={styles.td}>
                        <div style={{ display: 'flex', gap: '4px' }}>
                          {report.status === 'completed' && (
                            <>
                              <button style={{ ...styles.button, padding: '4px', backgroundColor: 'transparent' }}>
                                <Download size={16} color="#16a34a" />
                              </button>
                              <button style={{ ...styles.button, padding: '4px', backgroundColor: 'transparent' }}>
                                <Eye size={16} color="#64748b" />
                              </button>
                              <button style={{ ...styles.button, padding: '4px', backgroundColor: 'transparent' }}>
                                <Share2 size={16} color="#64748b" />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scheduled Reports */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>
            <Clock size={20} color="#16a34a" />
            Zaplanowane raporty
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {scheduledReports.map(report => (
              <div
                key={report.id}
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
                  <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>
                    {report.name}
                  </h4>
                  <button style={{ ...styles.button, padding: '2px', backgroundColor: 'transparent' }}>
                    {report.active ? (
                      <Pause size={14} color="#16a34a" />
                    ) : (
                      <Play size={14} color="#64748b" />
                    )}
                  </button>
                </div>
                
                <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '0.5rem' }}>
                  Częstotliwość: {report.frequency === 'weekly' ? 'Tygodniowo' : 
                                  report.frequency === 'monthly' ? 'Miesięcznie' : 'Kwartalnie'}
                </div>
                
                <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '0.5rem' }}>
                  Następne uruchomienie: {report.nextRun}
                </div>
                
                <div style={{ fontSize: '11px', color: '#9ca3af' }}>
                  Odbiorcy: {report.recipients.length} osób
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
            <Plus size={16} />
            Dodaj zaplanowany raport
          </button>
        </div>
      </div>

      {/* Report Generator Modal */}
      {showGenerator && (
        <div style={{
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
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '0',
            width: '90%',
            maxWidth: '800px',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <ReportGenerator />
          </div>
        </div>
      )}

      {/* Info Panel */}
      <div style={{
        ...styles.card,
        backgroundColor: '#f0fdf4',
        border: '1px solid #bbf7d0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BarChart3 size={20} color="#16a34a" />
          <div>
            <h4 style={{ margin: 0, color: '#166534' }}>Panel raportów gotowy do użytku</h4>
            <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#15803d' }}>
              Funkcjonalności: generator raportów, eksport Excel/PDF, zaplanowane raporty, analityka, automatyczne wysyłanie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPanel;