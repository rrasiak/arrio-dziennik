import React, { useState } from 'react';
import { 
  Folder, FolderOpen, File, FileText, FileImage, FileVideo, 
  Upload, Download, Search, Filter, Grid, List, Plus, 
  MoreVertical, Edit3, Trash2, Share2, Eye, Copy, Star,
  Tag, Calendar, User, ChevronRight, ChevronDown, ArrowUp,
  RefreshCw, Archive, Link, Settings, BookOpen, TreePine,
  Image, Play, FileSpreadsheet, FileCode, Music,
  Hash, Clock, Users, TrendingUp, AlertCircle, CheckCircle
} from 'lucide-react';

const AdvancedMaterialsPanel = () => {
  const [viewMode, setViewMode] = useState('list'); // list, grid
  const [currentPath, setCurrentPath] = useState(['Główny katalog']);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [expandedFolders, setExpandedFolders] = useState(['root']);

  // Przykładowe dane
  const materials = [
    {
      id: 1,
      name: 'Dendrologia_Podstawowa',
      type: 'folder',
      size: null,
      modified: '2024-05-15',
      author: 'Dr Maria Zielińska',
      downloads: 0,
      shared: true,
      tags: ['dendrologia', 'podstawy'],
      children: [
        {
          id: 11,
          name: 'Skrypt_Dendrologia_2024.pdf',
          type: 'pdf',
          size: '2.3 MB',
          modified: '2024-05-10',
          author: 'Dr Maria Zielińska',
          downloads: 45,
          shared: true,
          tags: ['dendrologia', 'skrypt'],
          description: 'Kompletny skrypt z dendrologii podstawowej'
        },
        {
          id: 12,
          name: 'Atlas_Lisci_Interaktywny.html',
          type: 'html',
          size: '1.8 MB',
          modified: '2024-05-08',
          author: 'Dr Maria Zielińska',
          downloads: 32,
          shared: false,
          tags: ['dendrologia', 'atlas', 'interaktywny']
        }
      ]
    },
    {
      id: 2,
      name: 'Arborystyka_Praktyczna',
      type: 'folder',
      size: null,
      modified: '2024-05-12',
      author: 'Mgr Piotr Kowalski',
      downloads: 0,
      shared: true,
      tags: ['arborystyka', 'praktyka'],
      children: [
        {
          id: 21,
          name: 'Techniki_Ciecia_Wideo.mp4',
          type: 'video',
          size: '127.5 MB',
          modified: '2024-05-12',
          author: 'Mgr Piotr Kowalski',
          downloads: 28,
          shared: true,
          tags: ['arborystyka', 'wideo', 'praktyka']
        },
        {
          id: 22,
          name: 'Instrukcja_Bezpieczenstwa.docx',
          type: 'document',
          size: '892 KB',
          modified: '2024-05-05',
          author: 'Mgr Piotr Kowalski',
          downloads: 67,
          shared: true,
          tags: ['arborystyka', 'bezpieczeństwo']
        }
      ]
    },
    {
      id: 3,
      name: 'Zdjecia_Terenowe_2024.zip',
      type: 'archive',
      size: '89.3 MB',
      modified: '2024-05-14',
      author: 'Student Praktykant',
      downloads: 15,
      shared: false,
      tags: ['zdjęcia', 'teren', 'praktyki'],
      description: 'Zdjęcia z praktyk terenowych w Parku Narodowym'
    },
    {
      id: 4,
      name: 'Prezentacja_Choroby_Drzew.pptx',
      type: 'presentation',
      size: '15.7 MB',
      modified: '2024-05-13',
      author: 'Dr Anna Nowak',
      downloads: 23,
      shared: true,
      tags: ['choroby', 'prezentacja', 'patologia'],
      description: 'Najczęstsze choroby drzew i metody ich zwalczania'
    },
    {
      id: 5,
      name: 'Formularz_Oceny_Drzew.xlsx',
      type: 'spreadsheet',
      size: '1.2 MB',
      modified: '2024-05-11',
      author: 'System',
      downloads: 89,
      shared: true,
      tags: ['formularz', 'ocena', 'narzędzia'],
      description: 'Standardowy formularz do oceny stanu zdrowotnego drzew'
    }
  ];

  const tags = [
    { id: 'dendrologia', name: 'Dendrologia', count: 15, color: '#16a34a' },
    { id: 'arborystyka', name: 'Arborystyka', count: 12, color: '#3b82f6' },
    { id: 'praktyka', name: 'Praktyki', count: 8, color: '#8b5cf6' },
    { id: 'teoria', name: 'Teoria', count: 20, color: '#f59e0b' },
    { id: 'bezpieczeństwo', name: 'Bezpieczeństwo', count: 5, color: '#dc2626' },
    { id: 'narzędzia', name: 'Narzędzia', count: 7, color: '#059669' }
  ];

  const statistics = {
    totalFiles: 156,
    totalSize: '2.3 GB',
    thisWeek: 12,
    mostDownloaded: 'Formularz_Oceny_Drzew.xlsx'
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
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.5rem',
      flexWrap: 'wrap',
      gap: '1rem'
    },
    toolbarLeft: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    toolbarRight: {
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center'
    },
    searchBox: {
      position: 'relative',
      display: 'flex',
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
    searchIcon: {
      position: 'absolute',
      left: '12px',
      color: '#9ca3af'
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
    select: {
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      backgroundColor: 'white',
      fontSize: '14px'
    },
    mainLayout: {
      display: 'grid',
      gridTemplateColumns: '250px 1fr',
      gap: '2rem'
    },
    sidebar: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb'
    },
    cardTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#1e293b'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginBottom: '1rem'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#16a34a'
    },
    statLabel: {
      fontSize: '12px',
      color: '#64748b'
    },
    tagList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    tagItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 12px',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    tagItemActive: {
      backgroundColor: '#f0fdf4'
    },
    breadcrumb: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1rem',
      fontSize: '14px',
      color: '#64748b'
    },
    breadcrumbItem: {
      cursor: 'pointer',
      transition: 'color 0.2s'
    },
    materialsList: {
      backgroundColor: 'white',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      overflow: 'hidden'
    },
    materialsHeader: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto auto auto auto',
      gap: '1rem',
      padding: '1rem',
      backgroundColor: '#f8fafc',
      borderBottom: '1px solid #e5e7eb',
      fontSize: '14px',
      fontWeight: '600',
      color: '#374151'
    },
    materialItem: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto auto auto auto',
      gap: '1rem',
      padding: '1rem',
      borderBottom: '1px solid #f1f5f9',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    materialItemHover: {
      backgroundColor: '#f8fafc'
    },
    materialIcon: {
      width: '32px',
      height: '32px',
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    materialInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    },
    materialName: {
      fontWeight: '500',
      color: '#1e293b'
    },
    materialMeta: {
      fontSize: '12px',
      color: '#64748b'
    },
    tagBadge: {
      padding: '2px 6px',
      borderRadius: '4px',
      fontSize: '11px',
      fontWeight: '500'
    },
    actionButton: {
      padding: '4px',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      borderRadius: '4px',
      transition: 'background-color 0.2s'
    },
    checkbox: {
      width: '16px',
      height: '16px'
    }
  };

  const getFileIcon = (type) => {
    switch (type) {
      case 'folder': return Folder;
      case 'pdf': return FileText;
      case 'image': return FileImage;
      case 'video': return FileVideo;
      case 'document': return FileText;
      case 'spreadsheet': return FileSpreadsheet;
      case 'presentation': return FileText;
      case 'archive': return Archive;
      case 'html': return FileCode;
      case 'audio': return Music;
      default: return File;
    }
  };

  const getFileIconColor = (type) => {
    switch (type) {
      case 'folder': return '#3b82f6';
      case 'pdf': return '#dc2626';
      case 'image': return '#16a34a';
      case 'video': return '#8b5cf6';
      case 'document': return '#1e40af';
      case 'spreadsheet': return '#059669';
      case 'presentation': return '#f59e0b';
      case 'archive': return '#6b7280';
      case 'html': return '#f97316';
      case 'audio': return '#ec4899';
      default: return '#64748b';
    }
  };

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (material.description && material.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTag = selectedTag === 'all' || (material.tags && material.tags.includes(selectedTag));
    
    return matchesSearch && matchesTag;
  });

  const handleItemSelect = (itemId, isSelected) => {
    if (isSelected) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    }
  };

  const UploadModal = () => (
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
        padding: '2rem',
        width: '90%',
        maxWidth: '500px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h3 style={{ margin: 0 }}>Dodaj nowe pliki</h3>
          <button
            onClick={() => setShowUploadModal(false)}
            style={{ ...styles.actionButton, fontSize: '20px' }}
          >
            ×
          </button>
        </div>

        <div style={{
          border: '2px dashed #d1d5db',
          borderRadius: '8px',
          padding: '3rem',
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}>
          <Upload size={48} color="#9ca3af" style={{ margin: '0 auto 1rem' }} />
          <h4>Przeciągnij pliki tutaj</h4>
          <p style={{ color: '#64748b', margin: '0.5rem 0' }}>lub kliknij aby wybrać</p>
          <p style={{ fontSize: '12px', color: '#9ca3af' }}>Maksymalny rozmiar: 10MB</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Folder docelowy:</label>
          <select style={styles.select}>
            <option>Główny katalog</option>
            <option>Dendrologia_Podstawowa</option>
            <option>Arborystyka_Praktyczna</option>
          </select>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Tagi:</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tags.map(tag => (
              <label key={tag.id} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <input type="checkbox" />
                <span style={{ fontSize: '14px' }}>{tag.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <button
            onClick={() => setShowUploadModal(false)}
            style={{ ...styles.button, ...styles.buttonSecondary }}
          >
            Anuluj
          </button>
          <button style={{ ...styles.button, ...styles.buttonPrimary }}>
            <Upload size={16} />
            Prześlij pliki
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Panel Materiałów</h1>
        <p style={styles.subtitle}>
          Zarządzanie zasobami edukacyjnymi i dokumentami
        </p>
      </div>

      {/* Toolbar */}
      <div style={styles.toolbar}>
        <div style={styles.toolbarLeft}>
          <div style={styles.searchBox}>
            <Search style={styles.searchIcon} size={16} />
            <input
              type="text"
              placeholder="Szukaj materiałów..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
          </div>

          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            style={styles.select}
          >
            <option value="all">Wszystkie tagi</option>
            {tags.map(tag => (
              <option key={tag.id} value={tag.id}>{tag.name}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={styles.select}
          >
            <option value="name">Nazwa</option>
            <option value="modified">Data modyfikacji</option>
            <option value="size">Rozmiar</option>
            <option value="downloads">Pobrania</option>
          </select>
        </div>

        <div style={styles.toolbarRight}>
          {selectedItems.length > 0 && (
            <>
              <span style={{ fontSize: '14px', color: '#64748b' }}>
                Wybrano: {selectedItems.length}
              </span>
              <button style={{ ...styles.button, ...styles.buttonSecondary }}>
                <Download size={16} />
                Pobierz
              </button>
              <button style={{ ...styles.button, ...styles.buttonSecondary }}>
                <Share2 size={16} />
                Udostępnij
              </button>
            </>
          )}

          <button
            onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
            style={{ ...styles.button, ...styles.buttonSecondary }}
          >
            {viewMode === 'list' ? <Grid size={16} /> : <List size={16} />}
          </button>

          <button
            onClick={() => setShowUploadModal(true)}
            style={{ ...styles.button, ...styles.buttonPrimary }}
          >
            <Upload size={16} />
            Dodaj pliki
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div style={styles.mainLayout}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          {/* Statistics */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Statystyki</h3>
            <div style={styles.statsGrid}>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>{statistics.totalFiles}</div>
                <div style={styles.statLabel}>Pliki</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>{statistics.totalSize}</div>
                <div style={styles.statLabel}>Rozmiar</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>{statistics.thisWeek}</div>
                <div style={styles.statLabel}>W tym tygodniu</div>
              </div>
              <div style={styles.statItem}>
                <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#16a34a' }}>
                  Top plik
                </div>
                <div style={styles.statLabel}>Formularz oceny</div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Tagi</h3>
            <div style={styles.tagList}>
              <div
                style={{
                  ...styles.tagItem,
                  ...(selectedTag === 'all' ? styles.tagItemActive : {})
                }}
                onClick={() => setSelectedTag('all')}
              >
                <span>Wszystkie</span>
                <span style={{ fontSize: '12px', color: '#64748b' }}>{materials.length}</span>
              </div>
              {tags.map(tag => (
                <div
                  key={tag.id}
                  style={{
                    ...styles.tagItem,
                    ...(selectedTag === tag.id ? styles.tagItemActive : {})
                  }}
                  onClick={() => setSelectedTag(tag.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: tag.color
                      }}
                    />
                    <span>{tag.name}</span>
                  </div>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>{tag.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div>
          {/* Breadcrumb */}
          <div style={styles.breadcrumb}>
            {currentPath.map((path, index) => (
              <React.Fragment key={index}>
                <span
                  style={styles.breadcrumbItem}
                  onClick={() => setCurrentPath(currentPath.slice(0, index + 1))}
                >
                  {path}
                </span>
                {index < currentPath.length - 1 && <ChevronRight size={14} />}
              </React.Fragment>
            ))}
          </div>

          {/* Materials List */}
          <div style={styles.materialsList}>
            <div style={styles.materialsHeader}>
              <input
                type="checkbox"
                style={styles.checkbox}
                checked={selectedItems.length === filteredMaterials.length && filteredMaterials.length > 0}
                onChange={() => {
                  if (selectedItems.length === filteredMaterials.length) {
                    setSelectedItems([]);
                  } else {
                    setSelectedItems(filteredMaterials.map(m => m.id));
                  }
                }}
              />
              <span>Nazwa</span>
              <span>Rozmiar</span>
              <span>Modyfikacja</span>
              <span>Autor</span>
              <span>Akcje</span>
            </div>

            {filteredMaterials.map(material => {
              const FileIcon = getFileIcon(material.type);
              const iconColor = getFileIconColor(material.type);
              
              return (
                <div
                  key={material.id}
                  style={{
                    ...styles.materialItem,
                    ...(selectedItems.includes(material.id) ? { backgroundColor: '#f0fdf4' } : {})
                  }}
                >
                  <input
                    type="checkbox"
                    style={styles.checkbox}
                    checked={selectedItems.includes(material.id)}
                    onChange={(e) => handleItemSelect(material.id, e.target.checked)}
                  />

                  <div style={styles.materialInfo}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ ...styles.materialIcon, backgroundColor: `${iconColor}20` }}>
                        <FileIcon size={16} color={iconColor} />
                      </div>
                      <div>
                        <div style={styles.materialName}>{material.name}</div>
                        {material.description && (
                          <div style={styles.materialMeta}>{material.description}</div>
                        )}
                        {material.tags && (
                          <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
                            {material.tags.slice(0, 3).map(tag => (
                              <span
                                key={tag}
                                style={{
                                  ...styles.tagBadge,
                                  backgroundColor: '#f1f5f9',
                                  color: '#475569'
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <span style={{ fontSize: '13px', color: '#64748b' }}>
                    {material.size || '—'}
                  </span>

                  <span style={{ fontSize: '13px', color: '#64748b' }}>
                    {material.modified}
                  </span>

                  <span style={{ fontSize: '13px', color: '#64748b' }}>
                    {material.author}
                  </span>

                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button style={styles.actionButton}>
                      <Eye size={16} color="#64748b" />
                    </button>
                    <button style={styles.actionButton}>
                      <Download size={16} color="#16a34a" />
                    </button>
                    <button style={styles.actionButton}>
                      <Share2 size={16} color="#64748b" />
                    </button>
                    <button style={styles.actionButton}>
                      <MoreVertical size={16} color="#64748b" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredMaterials.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '3rem',
              backgroundColor: 'white',
              borderRadius: '12px',
              border: '1px solid #e5e7eb'
            }}>
              <BookOpen size={48} style={{ margin: '0 auto 1rem', opacity: 0.5, color: '#9ca3af' }} />
              <h3 style={{ color: '#64748b' }}>Brak materiałów</h3>
              <p style={{ color: '#9ca3af' }}>Nie znaleziono materiałów spełniających kryteria wyszukiwania.</p>
            </div>
          )}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && <UploadModal />}

      {/* Info Panel */}
      <div style={{
        ...styles.card,
        marginTop: '2rem',
        backgroundColor: '#f0fdf4',
        border: '1px solid #bbf7d0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertCircle size={20} color="#16a34a" />
          <div>
            <h4 style={{ margin: 0, color: '#166534' }}>Panel materiałów gotowy do użytku</h4>
            <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#15803d' }}>
              Funkcjonalności: upload plików (10MB), organizacja folderów, tagowanie, wyszukiwanie, udostępnianie, statystyki
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedMaterialsPanel;