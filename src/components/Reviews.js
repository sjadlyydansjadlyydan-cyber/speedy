import React from 'react';
import { reviews } from '../mockData';
import { Star } from 'lucide-react';

const Reviews = () => {
  const renderStars = (rating) => {
    return (
      <div style={{ display: 'flex', gap: '0.25rem', justifyContent: 'center' }}>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            fill={index < rating ? '#FFD700' : 'none'}
            stroke={index < rating ? '#FFD700' : 'var(--border-primary)'}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="section" style={{ background: 'var(--bg-section)' }}>
      <div className="section-header">
        <h2 className="heading-1">آراء عملائنا</h2>
        <p className="section-subtitle">
          استمع لتجارب زوارنا الكرام
        </p>
      </div>
      
      <div className="grid-3">
        {reviews.map(review => (
          <div key={review.id} className="card" style={{ background: 'var(--bg-card)' }}>
            <div style={{ marginBottom: '1rem' }}>
              {renderStars(review.rating)}
            </div>
            <p className="body-medium" style={{ 
              fontStyle: 'italic', 
              marginBottom: '1rem',
              lineHeight: '1.7',
              minHeight: '4rem'
            }}>
              "{review.comment}"
            </p>
            <div style={{ 
              borderTop: '1px solid var(--border-light)', 
              paddingTop: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h4 className="heading-3" style={{ fontSize: '1rem', marginBottom: 0 }}>
                {review.name}
              </h4>
              <span className="body-small" style={{ color: 'var(--text-muted)' }}>
                {new Date(review.date).toLocaleDateString('ar-IQ', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;