export const profile = {
  name: 'Jay Bhardwaj',
  role: 'Software Developer | Software Engineer',
  email: 'jaybhardwaj402@gmail.com', // Replace with your email
  linkedin: 'https://www.linkedin.com/in/jay-bhardwaj27/', // Replace with your LinkedIn URL
  github: 'https://github.com/Jay-Bhardwaj',
  resume: '/assets/Jay-Bhardwaj-Resume.pdf', // Add your PDF at public/assets/Jay-Bhardwaj-Resume.pdf
};

export const skills = [
  { icon: '⌘', title: 'Languages', items: ['Java', 'C++', 'Python', 'SQL'] },
  { icon: '◈', title: 'Backend', items: ['Spring Boot', 'REST APIs', 'Hibernate / JPA', 'Spring Security', 'JWT Authentication'] },
  { icon: '▣', title: 'Data & Testing', items: ['MySQL', 'Selenium','Postman', 'Manual Testing'] },
  { icon: '⚙', title: 'Tools', items: ['GitHub', 'VS Code', 'Maven'] },
];

export const projects = [
  {
    id: 'ecommerce',
    name: 'E-Commerce Web Application',
    description: 'A full-stack e-commerce application inspired by modern online retail platforms.',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'JWT'],
    features: ['JWT-based authentication and authorization', 'Product catalogue, cart, reviews, and admin tools', 'Cash on Delivery and Razorpay test payments'],
    github: 'https://github.com/Jay-Bhardwaj/Springboot_Ecommerce',
    accent: 'violet',
  },
  {
    id: 'eluno',
    name: 'Eluno POS',
    description: 'A browser-based point-of-sale application for clear, efficient store billing and cashier workflows.',
    technologies: ['Java 21', 'Spring Boot', 'JavaScript', 'REST APIs', 'Docker'],
    features: ['Responsive cashier dashboard with product lookup', 'Cart, billing, checkout, and mock payment terminal', 'Invoice, refund, credit note, and day-end reporting', 'Docker-ready deployment configuration'],
    github: 'https://github.com/Jay-Bhardwaj/Eluno_Project',
    accent: 'cyan',
  },
];
