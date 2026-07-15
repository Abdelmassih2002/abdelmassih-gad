import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'glucor',
    title: 'Glucor',
    description:
      'A non-invasive blood glucose monitoring system with a Flutter mobile app, Firebase backend, and real-time data synchronization.',
    longDescription:
      'Glucor is a graduation project that reimagines how blood glucose is monitored. Instead of traditional invasive methods, the system uses sensor data processed through a C backend to provide non-invasive readings. The Flutter mobile app gives users a clean dashboard with real-time data sync, historical trends, and alerts. I built the full-stack integration between the Flutter frontend, Express.js API layer, and Firebase for auth and data persistence.',
    technologies: ['Flutter', 'Firebase', 'Express.js', 'C', 'Git'],
    features: [
      'Cross-platform mobile app (iOS & Android)',
      'Firebase authentication & real-time database',
      'Non-invasive glucose monitoring algorithm',
      'Real-time data synchronization',
      'Medical dashboard with trend charts',
      'Push notification alerts',
    ],
    challenges: [
      'Integrating C-based sensor processing with a Flutter mobile layer required careful FFI bridging',
      'Ensuring real-time data consistency across Firebase and the Express.js API',
      'Designing a medical UI that is both accurate and accessible for non-technical users',
      'Handling sensor calibration and noise reduction for reliable non-invasive readings',
    ],
    myRole:
      'Full-stack developer. Designed the Flutter UI, built the Express.js API, integrated Firebase, and worked on the C sensor processing module.',
    github: 'https://github.com/Abdelmassih2002/Glucor',
    live: '#',
    image: '/projects/glucor.svg',
    category: 'Graduation Project',
    duration: 'Oct 2023 – Jul 2024',
    client: 'Future Academy',
    featured: true,
  },
  {
    id: 'hunger-relief',
    title: 'Hunger Relief',
    description:
      'A donation platform helping reduce poverty by connecting donors with families in need through online monetary and goods contributions.',
    longDescription:
      'Hunger Relief is a web application built for Dr. Mostafa Ibrahim that streamlines the donation process. Users can register, manage their accounts, browse donation campaigns, and contribute money or goods. The platform handles user authentication, donation tracking, and delivery coordination. Built with PHP on the backend and Bootstrap for a responsive, accessible interface.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP'],
    features: [
      'User registration and account management',
      'Monetary and goods donation system',
      'Campaign browsing and filtering',
      'Donation history and tracking',
      'Responsive UI across all devices',
      'Secure authentication flow',
    ],
    challenges: [
      'Designing a donation flow that feels trustworthy and secure for users',
      'Building a robust PHP backend with proper input validation and SQL injection prevention',
      'Creating an admin dashboard for campaign and donation management',
      'Ensuring the UI remains accessible and intuitive for users of all technical levels',
    ],
    myRole:
      'Full developer. Designed the UI with Bootstrap, implemented the PHP backend, built the authentication system, and handled database design.',
    github: 'https://github.com/Abdelmassih2002/Hunger-Relief',
    live: '#',
    image: '/projects/hunger-relief.svg',
    category: 'Web Application',
    duration: 'Jan 2023 – Mar 2023',
    client: 'Dr. Mostafa Ibrahim',
  },
  {
    id: 'easy-pizza',
    title: 'easy-pizza',
    description:
      'A modern pizza ordering web app with location picking, WhatsApp integration, and a clean responsive interface built with Next.js.',
    longDescription:
      'easy-pizza is a contemporary pizza ordering platform that prioritizes simplicity and speed. Users can browse the menu, customize their orders, pick their delivery location on an interactive map, and place orders directly through WhatsApp integration. The app is built with Next.js and React for server-side rendering and optimal performance, styled with Tailwind CSS for a consistent, modern look.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'GitHub'],
    features: [
      'Interactive pizza menu with customization',
      'Manual location picker with map integration',
      'WhatsApp order placement',
      'Fully responsive mobile-first design',
      'Server-side rendered for fast initial loads',
      'Clean, minimal UI with smooth interactions',
    ],
    challenges: [
      'Implementing a reliable location picker that works well on both desktop and mobile',
      'Building WhatsApp deep-link integration that handles order data correctly',
      'Optimizing Next.js image handling for pizza menu items',
      'Ensuring the checkout flow is frictionless on small screens',
    ],
    myRole:
      'Sole developer. Built the entire Next.js application including the location picker, WhatsApp integration, and responsive UI.',
    github: 'https://github.com/Abdelmassih2002/easy-pizza',
    live: '#',
    image: '/projects/easy-pizza.svg',
    category: 'Next.js Application',
    duration: 'Jul 2026 – Aug 2026',
    client: 'Pizza Restaurant',
  },
  {
    id: 'pizza-restaurant',
    title: 'Pizza Restaurant',
    description:
      'A responsive pizza restaurant website with menu browsing, restaurant info, and an order page built in React.',
    longDescription:
      'A clean, multi-page React application for a pizza restaurant. Users can explore the full menu with detailed item views, learn about the restaurant story, and place orders through an intuitive ordering interface. Built as part of the ITI training program, focusing on React component architecture, routing, and state management.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      'Multi-page navigation with React Router',
      'Restaurant landing page with hero section',
      'Detailed food menu with categories',
      'Order page with cart functionality',
      'Responsive design for all screen sizes',
      'Component-based architecture',
    ],
    challenges: [
      'Structuring a clean component hierarchy for a multi-page React app',
      'Managing cart state across different routes without a state management library',
      'Creating smooth page transitions that feel natural',
      'Optimizing menu item images for fast loading',
    ],
    myRole:
      'Sole developer. Designed and built the entire React application including routing, state management, and responsive layout.',
    github: 'https://github.com/Abdelmassih2002/Pizza-Restaurant',
    live: '#',
    image: '/projects/pizza-restaurant.svg',
    category: 'React Application',
    duration: 'Jul 2022 – Aug 2022',
    client: 'Information Technology Institute (ITI)',
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce',
    description:
      'An online shopping platform with product listings, shopping cart, order management, and checkout flow built with Angular.',
    longDescription:
      'A full-featured e-commerce frontend built with Angular and TypeScript during the ITI training program. The platform includes a product catalog with filtering, a shopping cart with quantity management, an order confirmation flow, and a responsive design that works across devices. Focused on Angular services, dependency injection, and reactive forms.',
    technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
    features: [
      'Product catalog with filtering and search',
      'Shopping cart with quantity controls',
      'Order management and confirmation',
      'Checkout flow with form validation',
      'Responsive design across all devices',
      'Angular services and dependency injection',
    ],
    challenges: [
      'Learning Angular\'s opinionated architecture and adapting from a React background',
      'Implementing reactive forms with proper validation for the checkout flow',
      'Managing cart state across multiple components using Angular services',
      'Building a responsive layout that maintains functionality on mobile',
    ],
    myRole:
      'Sole developer. Built the complete Angular application including components, services, routing, and form handling.',
    github: 'https://github.com/Abdelmassih2002/E-commerce',
    live: '#',
    image: '/projects/e-commerce.svg',
    category: 'Angular Application',
    duration: 'Jul 2022 – Aug 2022',
    client: 'Information Technology Institute (ITI)',
  },
];
