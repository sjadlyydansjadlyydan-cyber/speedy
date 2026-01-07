import React from 'react';
import { Coffee, Users, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Coffee size={40} />,
      title: 'قهوة مميزة',
      description: 'نقدم أفضل أنواع القهوة المحضرة بعناية'
    },
    {
      icon: <Users size={40} />,
      title: 'للعوائل والشباب',
      description: 'مكان مناسب للعائلات والأصدقاء'
    },
    {
      icon: <Heart size={40} />,
      title: 'مكونات طازجة',
      description: 'نستخدم أجود المكونات الطازجة في وجباتنا'
    }
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-section)' }}>
      <div className="section-header">
        <h2 className="heading-1">من نحن</h2>
        <p className="section-subtitle">
          مطعم وكافيه قمر هو وجهتك المفضلة للاستمتاع بأشهى الوجبات والمشروبات
        </p>
      </div>
      
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <p className="body-large" style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          نحن في مطعم وكافيه قمر نفخر بتقديم تجربة طعام فريدة تجمع بين الأصالة والحداثة. 
          منذ افتتاحنا، كان هدفنا تقديم أفضل الوجبات السريعة والمشروبات في أجواء مريحة وودية.
        </p>
        <p className="body-large" style={{ lineHeight: '1.8' }}>
          نحرص على استخدام أجود المكونات الطازجة ونقدم خدمة متميزة لضيوفنا الكرام. 
          سواء كنت تبحث عن وجبة سريعة أو مكان للاسترخاء مع قهوة مميزة، قمر هو الخيار الأمثل.
        </p>
      </div>
      
      <div className="grid-3">
        {features.map((feature, index) => (
          <div key={index} className="card" style={{ textAlign: 'center' }}>
            <div style={{ color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
              {feature.icon}
            </div>
            <h3 className="heading-3">{feature.title}</h3>
            <p className="body-medium" style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;