import React from 'react';
import { services } from '../mockData';
import { Utensils, Truck, ShoppingBag } from 'lucide-react';

const Services = () => {
  const iconMap = {
    0: <Utensils size={48} />,
    1: <Truck size={48} />,
    2: <ShoppingBag size={48} />
  };

  return (
    <section id="services" className="section" style={{ background: 'var(--bg-section)' }}>
      <div className="section-header">
        <h2 className="heading-1">خدماتنا</h2>
        <p className="section-subtitle">
          نقدم لكم خيارات متعددة لتناسب احتياجاتكم
        </p>
      </div>
      
      <div className="grid-3">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className="card" 
            style={{ 
              textAlign: 'center',
              background: index === 0 ? 'var(--accent-orange-200)' : 
                         index === 1 ? 'var(--accent-blue-200)' : 
                         'var(--accent-green-200)'
            }}
          >
            <div style={{ 
              color: 'var(--text-primary)', 
              marginBottom: '1rem', 
              display: 'flex', 
              justifyContent: 'center' 
            }}>
              {iconMap[index]}
            </div>
            <h3 className="heading-3">{service.title}</h3>
            <p className="body-medium" style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;