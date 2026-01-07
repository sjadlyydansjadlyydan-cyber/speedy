import React from 'react';
import { Phone, MapPin, Menu } from 'lucide-react';
import { restaurantInfo } from '../mockData';

const Hero = ({ onNavigate }) => {
  const handleCall = () => {
    window.location.href = `tel:${restaurantInfo.phone}`;
  };

  const handleDirections = () => {
    window.open(restaurantInfo.mapUrl, '_blank');
  };

  return (
    <section className="hero-section">
      <div className="hero-decorations">
        <div className="decoration decoration-1"></div>
        <div className="decoration decoration-2"></div>
        <div className="decoration decoration-3"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span>⭐</span>
          <span>{restaurantInfo.rating} ({restaurantInfo.reviewCount} تقييم)</span>
        </div>
        
        <h1 className="heading-hero">{restaurantInfo.name}</h1>
        <p className="body-large" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
          {restaurantInfo.slogan}
        </p>
        <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
          مطعم وكافيه يقدم أشهى الوجبات السريعة والمشروبات في أجواء مريحة وعصرية
        </p>
        
        <div className="hero-buttons">
          <button className="btn-primary" onClick={handleCall}>
            <Phone size={20} />
            اتصل الآن
          </button>
          <button className="btn-primary" onClick={handleDirections}>
            <MapPin size={20} />
            الاتجاهات
          </button>
          <button className="btn-secondary" onClick={() => onNavigate('menu')}>
            <Menu size={20} />
            اطّلع على المنيو
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;