import React, { useState } from 'react';
import { menuCategories } from '../mockData';
import { Star } from 'lucide-react';

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('fast-food');
  
  const currentCategory = menuCategories.find(cat => cat.id === selectedCategory);

  return (
    <section id="menu" className="section">
      <div className="section-header">
        <h2 className="heading-1">قائمة الطعام</h2>
        <p className="section-subtitle">
          استمتع بتشكيلة واسعة من الوجبات والمشروبات اللذيذة
        </p>
      </div>
      
      {/* Category Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
        {menuCategories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '2rem',
              border: selectedCategory === category.id 
                ? '2px solid var(--text-primary)' 
                : '1px solid var(--border-light)',
              background: selectedCategory === category.id 
                ? 'var(--text-primary)' 
                : 'var(--bg-card)',
              color: selectedCategory === category.id 
                ? 'white' 
                : 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span style={{ fontSize: '1.25rem' }}>{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Menu Items Grid */}
      <div className="grid-4">
        {currentCategory?.items.map(item => (
          <div key={item.id} className="menu-item-card">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-content">
              <div className="menu-item-header">
                <h3 className="heading-3" style={{ marginBottom: 0 }}>{item.name}</h3>
                {item.popular && (
                  <span className="popular-badge">
                    <Star size={12} fill="currentColor" style={{ display: 'inline', marginLeft: '2px' }} />
                    مميز
                  </span>
                )}
              </div>
              <p className="body-small" style={{ marginBottom: '1rem' }}>
                {item.description}
              </p>
              <div className="menu-item-price">
                {item.price} دينار
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;