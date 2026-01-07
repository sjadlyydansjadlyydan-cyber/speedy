import React from 'react';
import { MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../mockData';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`مرحبا! أريد الاستفسار عن ${restaurantInfo.name}`);
    window.open(`https://wa.me/${restaurantInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <a 
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;