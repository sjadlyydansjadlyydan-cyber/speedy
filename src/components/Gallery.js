import React, { useState } from 'react';
import { gallery } from '../mockData';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const filters = [
    { id: 'all', name: 'الكل' },
    { id: 'ambiance', name: 'الأجواء' },
    { id: 'food', name: 'الأطعمة' },
    { id: 'drinks', name: 'المشروبات' },
    { id: 'desserts', name: 'الحلويات' }
  ];
  
  const filteredGallery = selectedFilter === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === selectedFilter);

  return (
    <section id="gallery" className="section">
      <div className="section-header">
        <h2 className="heading-1">معرض الصور</h2>
        <p className="section-subtitle">
          شاهد أجواءنا الجميلة وأطباقنا الشهية
        </p>
      </div>
      
      {/* Filter Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '2rem',
              border: selectedFilter === filter.id 
                ? 'none' 
                : '1px solid var(--border-light)',
              background: selectedFilter === filter.id 
                ? 'var(--text-primary)' 
                : 'transparent',
              color: selectedFilter === filter.id 
                ? 'white' 
                : 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
          >
            {filter.name}
          </button>
        ))}
      </div>
      
      {/* Gallery Grid */}
      <div className="grid-4">
        {filteredGallery.map(item => (
          <div 
            key={item.id} 
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
            }}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              style={{
                width: '100%',
                height: '280px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            <div style={{ padding: '1rem', background: 'var(--bg-card)' }}>
              <h4 className="heading-3" style={{ fontSize: '1rem', marginBottom: 0 }}>
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;