import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { restaurantInfo } from '../mockData';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>🌙 {restaurantInfo.name}</h3>
          <p style={{ marginTop: '0.5rem' }}>
            {restaurantInfo.slogan}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            <span>⭐</span>
            <span>{restaurantInfo.rating} ({restaurantInfo.reviewCount} تقييم)</span>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>روابط سريعة</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
            <a onClick={() => onNavigate('home')}>الرئيسية</a>
            <a onClick={() => onNavigate('about')}>من نحن</a>
            <a onClick={() => onNavigate('menu')}>قائمة الطعام</a>
            <a onClick={() => onNavigate('services')}>الخدمات</a>
            <a onClick={() => onNavigate('gallery')}>المعرض</a>
            <a onClick={() => onNavigate('reviews')}>التقييمات</a>
            <a onClick={() => onNavigate('contact')}>تواصل معنا</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>معلومات التواصل</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={18} />
              <a href={`tel:${restaurantInfo.phone}`}>{restaurantInfo.phone}</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
              <MapPin size={18} style={{ marginTop: '2px', flexShrink: 0 }} />
              <span>{restaurantInfo.address}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={18} />
              <span>يومياً: 8:00 ص - 12:00 م</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 {restaurantInfo.name}. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;