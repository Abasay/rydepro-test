export const services1Lg: { title: string; description: string }[] = [
  {
    title: 'On-Demand Rides',
    description: 'On-demand rides at your fingertips with RYDEPRO.',
  },
  {
    title: 'Round Trip',
    description: 'Convenient for round trips without the hassle of booking twice.',
  },

  {
    title: 'Multi-Destination Trip ',
    description: 'Book multiple trips with different vehicles and drop-off locations in one go.',
  },
];

export const services2Lg: { title: string; description: string }[] = [
  {
    title: 'One-Way Trip',
    description: 'Perfect for getting from point A to point B.',
  },
  {
    title: 'Hourly Ride',
    description: ' Ideal for when you need a vehicle for a few hours.',
  },
  {
    title: 'Additional Vehicle',
    description:
      'Duplicate a trip with the same or similar vehicle, choosing the same or a different drop-off location.',
  },
];

export const services1Md: { title: string; description: string }[] = [
  {
    title: 'On-Demand Rides',
    description: 'On-demand rides at your fingertips with RYDEPRO.',
  },
  {
    title: 'One-Way Trip',
    description: 'Perfect for getting from point A to point B.',
  },
  {
    title: 'Round Trip',
    description: 'Convenient for round trips without the hassle of booking twice.',
  },

  {
    title: 'Hourly Ride',
    description: 'Ideal for when you need a vehicle for a few hours.',
  },
];

export const services2Md: { title: string; description: string }[] = [
  {
    title: 'Multi-Destination Trip ',
    description: 'Book multiple trips with different vehicles and drop-off locations in one go.',
  },
  {
    title: 'Additional Vehicle',
    description:
      'Duplicate a trip with the same or similar vehicle, choosing the same or a different drop-off location.',
  },
];
export const services: { title: string; description: string }[] = [
  {
    title: 'Hourly Ride',
    description: 'Ideal for when you need a vehicle for a few hours.',
  },

  {
    title: 'Round Trip',
    description: 'Convenient for round trips without the hassle of booking twice.',
  },
  {
    title: 'Multi-Stop Journey',
    description: 'Great for trips with multiple destinations.',
  },
  {
    title: 'Multi-Trip Booking',
    description: 'Book multiple trips with different vehicles and drop-off locations in one go.',
  },

  {
    title: 'Multi-Stop',
    description: 'Over 1,000 vehicles available for any event',
  },
  {
    title: 'Clone Trip',
    description:
      'Duplicate a trip with the same or similar vehicle, choosing the same or a different drop-off location.',
  },
];

export const reasons: { title: string; descripton: string }[] = [
  {
    title: 'Safety First',
    descripton: 'Real-time monitoring and emergency assistance at your fingertips.',
  },
  {
    title: 'Verified Drivers',
    descripton: 'Rigorous DOJ background checks.',
  },
  {
    title: 'Fair Pricing',
    descripton: 'Upfront pricing with transparent rates.',
  },
  {
    title: 'Diverse Ride Options',
    descripton: 'Choose from Economy, Executive, Luxury & Buses.',
  },
  {
    title: '24/7 Support',
    descripton: 'Real Life support.',
  },
  {
    title: 'User-Friendly App',
    descripton: 'Intuitive interface with personalized features.',
  },
];

export const fleet: { head: string; types: { car: string }[] }[] = [
  {
    head: 'Economy',
    types: [
      {
        car: 'Sedan',
      },
      {
        car: 'Electric Sedan',
      },
      {
        car: 'Minivan',
      },
    ],
  },
  {
    head: 'Executive',
    types: [
      {
        car: 'Sedan',
      },
      {
        car: 'Electric Sedan',
      },
      {
        car: 'SUV',
      },
    ],
  },
  {
    head: 'Luxury',
    types: [
      {
        car: 'Sedan',
      },
      {
        car: 'Electric Sedan',
      },
      {
        car: 'SUV',
      },
    ],
  },
  {
    head: 'Commercial',
    types: [
      {
        car: 'Transit Van',
      },
      {
        car: 'Sprinters',
      },
      {
        car: 'Buses',
      },
    ],
  },
];

export const dummy = [
  {
    car: 'Sedan',
  },
  {
    car: 'Electric Sedan',
  },
  {
    car: 'Minivan',
  },
];

export const getRandomElement = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
