// Mock data for مطعم وكافيه قمر

export const restaurantInfo = {
  name: 'مطعم وكافيه قمر',
  slogan: 'كل شي بتحلم فيه عند قمر بتلاقيه',
  rating: 3.7,
  reviewCount: 165,
  phone: '0772 225 3847',
  whatsapp: '9647722253847',
  address: 'G9PV+Q7F, حسينية، محافظة ديالى',
  mapUrl: 'https://www.google.com/maps/place/G9PV%2BQ7F,+Husayniyah,+Diyala+Governorate,+Iraq',
  workingHours: {
    saturday: '8:00 ص - 12:00 م',
    sunday: '8:00 ص - 12:00 م',
    monday: '8:00 ص - 12:00 م',
    tuesday: '8:00 ص - 12:00 م',
    wednesday: '8:00 ص - 12:00 م',
    thursday: '8:00 ص - 12:00 م',
    friday: '8:00 ص - 12:00 م'
  }
};

export const menuCategories = [
  {
    id: 'fast-food',
    name: 'وجبات سريعة',
    icon: '🍔',
    items: [
      {
        id: 1,
        name: 'بيتزا بيبروني',
        description: 'بيتزا إيطالية أصلية مع شرائح البيبروني الطازجة وجبنة الموزاريلا',
        price: '15,000',
        image: 'https://images.unsplash.com/photo-1692737580547-b45bb4a02356',
        popular: true
      },
      {
        id: 2,
        name: 'برغر قمر الخاص',
        description: 'برغر لحم طازج مع الخضار والصوصات الخاصة',
        price: '10,000',
        image: 'https://images.unsplash.com/photo-1619810816144-68dbc1f695e8',
        popular: true
      },
      {
        id: 3,
        name: 'شاورما عربي',
        description: 'شاورما دجاج أو لحم مع الخضار والطحينة',
        price: '8,000',
        image: 'https://images.unsplash.com/photo-1734772591537-15ac1b3b3c04',
        popular: true
      },
      {
        id: 4,
        name: 'برغر دجاج مقرمش',
        description: 'دجاج مقرمش مع الخس والمايونيز',
        price: '9,000',
        image: 'https://images.unsplash.com/photo-1619810816144-68dbc1f695e8'
      },
      {
        id: 5,
        name: 'سندويش فلافل',
        description: 'فلافل طازج مع الخضار والطحينة',
        price: '5,000',
        image: 'https://images.unsplash.com/photo-1734772591537-15ac1b3b3c04'
      },
      {
        id: 6,
        name: 'بيتزا مارغريتا',
        description: 'بيتزا كلاسيكية مع الطماطم والريحان',
        price: '12,000',
        image: 'https://images.unsplash.com/photo-1692737580547-b45bb4a02356'
      }
    ]
  },
  {
    id: 'drinks',
    name: 'المشروبات',
    icon: '☕',
    items: [
      {
        id: 7,
        name: 'قهوة لاتيه',
        description: 'قهوة إيطالية مع الحليب الرغوي',
        price: '4,000',
        image: 'https://images.unsplash.com/photo-1611564494260-6f21b80af7ea',
        popular: true
      },
      {
        id: 8,
        name: 'عصير ليمون بالنعناع',
        description: 'عصير ليمون طازج مع النعناع والثلج',
        price: '3,000',
        image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e',
        popular: true
      },
      {
        id: 9,
        name: 'عصائر طبيعية',
        description: 'عصائر فواكه طازجة متنوعة',
        price: '4,000',
        image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a'
      },
      {
        id: 10,
        name: 'قهوة عربية',
        description: 'قهوة عربية أصيلة مع الهيل',
        price: '2,500',
        image: 'https://images.unsplash.com/photo-1611564494260-6f21b80af7ea'
      },
      {
        id: 11,
        name: 'شاي',
        description: 'شاي أحمر أو أخضر',
        price: '1,500',
        image: 'https://images.unsplash.com/photo-1611564494260-6f21b80af7ea'
      },
      {
        id: 12,
        name: 'موكا',
        description: 'قهوة بالشوكولاتة',
        price: '5,000',
        image: 'https://images.unsplash.com/photo-1611564494260-6f21b80af7ea'
      }
    ]
  },
  {
    id: 'desserts',
    name: 'الحلويات',
    icon: '🍰',
    items: [
      {
        id: 13,
        name: 'بقلاوة',
        description: 'حلوى شرقية مع الفستق والعسل',
        price: '6,000',
        image: 'https://images.unsplash.com/photo-1676014959543-81df1079b423',
        popular: true
      },
      {
        id: 14,
        name: 'كنافة',
        description: 'كنافة ساخنة مع الجبن والقطر',
        price: '7,000',
        image: 'https://images.unsplash.com/photo-1676014959543-81df1079b423'
      },
      {
        id: 15,
        name: 'تشيز كيك',
        description: 'تشيز كيك كريمي بنكهات متنوعة',
        price: '8,000',
        image: 'https://images.unsplash.com/photo-1676014959543-81df1079b423'
      }
    ]
  },
  {
    id: 'appetizers',
    name: 'المقبلات',
    icon: '🥗',
    items: [
      {
        id: 16,
        name: 'سلطة فتوش',
        description: 'سلطة خضار مع الخبز المحمص',
        price: '4,000',
        image: 'https://images.unsplash.com/photo-1748540459503-19efc015143b'
      },
      {
        id: 17,
        name: 'حمص بالطحينة',
        description: 'حمص كريمي مع زيت الزيتون',
        price: '3,500',
        image: 'https://images.unsplash.com/photo-1748540459503-19efc015143b'
      },
      {
        id: 18,
        name: 'متبل',
        description: 'باذنجان مشوي مع الطحينة',
        price: '3,500',
        image: 'https://images.unsplash.com/photo-1748540459503-19efc015143b'
      }
    ]
  }
];

export const services = [
  {
    id: 1,
    icon: '🍽️',
    title: 'تناول في المطعم',
    description: 'استمتع بتجربة تناول الطعام في أجواء مريحة وهادئة'
  },
  {
    id: 2,
    icon: '🛵',
    title: 'التوصيل',
    description: 'خدمة توصيل سريعة إلى باب منزلك'
  },
  {
    id: 3,
    icon: '🥡',
    title: 'طلبات خارجية',
    description: 'احجز طلبك واستلمه من المطعم'
  }
];

export const reviews = [
  {
    id: 1,
    name: 'أحمد محمد',
    rating: 5,
    date: '2025-03-10',
    comment: 'مطعم ممتاز والأكل لذيذ جداً، خصوصاً البيتزا'
  },
  {
    id: 2,
    name: 'فاطمة علي',
    rating: 4,
    date: '2025-03-08',
    comment: 'أجواء جميلة ومريحة، مناسب للعوائل'
  },
  {
    id: 3,
    name: 'محمود حسن',
    rating: 5,
    date: '2025-03-05',
    comment: 'عصير الليمون بالنعناع رائع! خدمة ممتازة'
  },
  {
    id: 4,
    name: 'سارة خالد',
    rating: 4,
    date: '2025-03-01',
    comment: 'الشاورما لذيذة والأسعار معقولة'
  },
  {
    id: 5,
    name: 'علي جاسم',
    rating: 3,
    date: '2025-02-28',
    comment: 'مكان جيد لكن أحياناً يكون مزدحم'
  },
  {
    id: 6,
    name: 'زينب عباس',
    rating: 5,
    date: '2025-02-25',
    comment: 'أفضل مطعم في المنطقة، الحلويات رهيبة!'
  }
];

export const gallery = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1739723745132-97df9db49db2',
    title: 'أجواء المطعم',
    category: 'ambiance'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1751956066306-c5684cbcf385',
    title: 'منطقة الكافيه',
    category: 'ambiance'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1692737580547-b45bb4a02356',
    title: 'بيتزا بيبروني',
    category: 'food'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1619810816144-68dbc1f695e8',
    title: 'برغر قمر',
    category: 'food'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611564494260-6f21b80af7ea',
    title: 'قهوة مميزة',
    category: 'drinks'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a',
    title: 'عصائر طازجة',
    category: 'drinks'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1748540459503-19efc015143b',
    title: 'وجبات متنوعة',
    category: 'food'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1676014959543-81df1079b423',
    title: 'حلويات شرقية',
    category: 'desserts'
  }
];