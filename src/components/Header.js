import React from 'react';
import { restaurantInfo } from '../mockData';

const Header = ({ onNavigate }) => {
  return (
    <header className="header-nav">
      <div className="header-container">
        <div className="logo-section">
          <span className="logo-icon">🌙</span>
          <div className="logo-text">
            <h1>{restaurantInfo.name}</h1>
            <div className="rating-badge">
              <span>⭐</span>
              <span>{restaurantInfo.rating}</span>
            </div>
          </div>
        </div>
        
        <nav>
          <ul className="nav-links">
            <li><a onClick={() => onNavigate('home')}>الرئيسية</a></li>
            <li><a onClick={() => onNavigate('about')}>من نحن</a></li>
            <li><a onClick={() => onNavigate('menu')}>المنيو</a></li>
            <li><a onClick={() => onNavigate('services')}>الخدمات</a></li>
            <li><a onClick={() => onNavigate('gallery')}>المعرض</a></li>
            <li><a onClick={() => onNavigate('reviews')}>التقييمات</a></li>
            <li><a onClick={() => onNavigate('contact')}>تواصل معنا</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;