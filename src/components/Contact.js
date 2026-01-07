import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { restaurantInfo } from '../mockData';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2 className="heading-1">تواصل معنا</h2>
        <p className="section-subtitle">
          نحن هنا لخدمتكم، لا تتردد في التواصل
        </p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        <div className="card" style={{ textAlign: 'center', background: 'var(--accent-purple-200)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Phone size={40} color="var(--text-primary)" />
          </div>
          <h3 className="heading-3">رقم الهاتف</h3>
          <a 
            href={`tel:${restaurantInfo.phone}`}
            className="body-large" 
            style={{ 
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontWeight: '600',
              display: 'block',
              marginTop: '0.5rem'
            }}
          >
            {restaurantInfo.phone}
          </a>
        </div>
        
        <div className="card" style={{ textAlign: 'center', background: 'var(--accent-blue-200)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <MapPin size={40} color="var(--text-primary)" />
          </div>
          <h3 className="heading-3">العنوان</h3>
          <p className="body-medium" style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            {restaurantInfo.address}
          </p>
        </div>
        
        <div className="card" style={{ textAlign: 'center', background: 'var(--accent-green-200)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Clock size={40} color="var(--text-primary)" />
          </div>
          <h3 className="heading-3">ساعات العمل</h3>
          <p className="body-medium" style={{ marginTop: '0.5rem', fontWeight: '600' }}>
            يومياً: 8:00 ص - 12:00 م
          </p>
        </div>
      </div>
      
      {/* Map */}
      <div style={{ 
        borderRadius: '1rem', 
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        height: '400px'
      }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.8!2d44.79!3d33.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQxJzI0LjAiTiA0NMKwNDcnMjQuMCJF!5e0!3m2!1sar!2siq!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="موقع مطعم وكافيه قمر"
        />
      </div>
    </section>
  );
};

export default Contact;