export const DATA = {
  name: 'Pedro Chincolla',
  role: 'Data Analyst & Junior Data Scientist',
  location: 'In Copenaghen, Denmark',
  icon_location: '/assets/icons/denmark1.png',
  img: 'profile.png',
  contact: [
    {
      name: 'mail',
      icon: 'bi bi-envelope-at-fill',
      href: '',
    },
    {
      name: 'github',
      icon: 'bi bi-github',
      href: 'https://github.com/PedroT111',
    },
    {
      name: 'whatsapp',
      icon: 'bi bi-whatsapp',
      href: '',
    },
    {
      name: 'linkedin',
      icon: 'bi bi-linkedin',
      href: 'https://www.linkedin.com/in/pedro-chincolla/',
    },
  ],
  about:
    'Data enthusiast with a strong background in software development, currently focused on building intelligent, data-driven solutions using Python, SQL, and statistical analysis. Passionate about solving real-world problems through analytics, creativity, and innovative technology.',
  jobs: [
    {
      company: 'Accounting Firm',
      role: 'Data Analyst',
      start: 'Sep 2019',
      end: 'Nov 2022',
      tasks: [
        {
          description:
            'Automated financial data workflows using Excel, increasing efficiency in payroll and tax reporting.',
        },
        {
          description:
            'Reduced the time required to prepare balance sheets by applying advanced Excel functions and process automation.',
        },
        {
          description:
            'Processed and analyzed structured financial data with attention to accuracy and compliance.',
        },
      ],
    },
    {
      company: 'Factorise Solutions',
      role: 'JavaScript Developer',
      start: 'May 2024',
      end: 'Aug 2024',
      tasks: [
        {
          description:
            'Built data-driven dashboards in collaboration with data scientists to visualize analytics for chatbot, learning, and investment platforms.',
        },
        {
          description:
            'Enhanced user experience by integrating data visualization techniques into front-end systems.',
        },
      ],
    },
    {
      company: 'Alkemy',
      role: 'JavaScript Developer',
      start: 'Jul 2021',
      end: 'Nov 2021',
      tasks: [
        {
          description:
            'Contributed to development of web applications using React, Node.js, and MongoDB with focus on data integration and visualization',
        },
        {
          description:
            'Applied Agile methodologies (Scrum), participated in sprints, and collaborated with teams on analytics solutions.',
        },
      ],
    },
  ],
  education: [
    {
      university: 'Universidad del Gran Rosario',
      degree: "Bachelor's degree in Data Science",
      start: '2025',
      end: '2027',
      skills: [
        { name: 'Python' },
        { name: 'Pandas' },
        { name: 'Statistics' },
        {
          name: 'Machine Learning ',
        },
        {
          name: 'Deep Learning ',
        },
        {
          name: 'Computer Vision',
        },
        { name: 'SQL' },
        { name: 'MongoDB (NoSQL)' },
      ],
    },
    {
      university: 'Universidad Tencológica Nacional',
      degree: 'Technical Degree in Programming',
      start: '2021',
      end: '2023',
      skills: [
        { name: 'C#' },
        { name: '.NET' },
        { name: 'SQL' },
        { name: 'JavaScript' },
        { name: 'Angular' },
        { name: 'Jira' },
      ],
    },
    {
      university: 'Universidad Nacional de Córdoba',
      degree: "Bachelor's Degree in Accounting",
      start: '2016',
      end: '2020',
      skills: [{ name: 'Accounting' }, { name: 'Statistical Data Analysis' }],
    },
  ],
  projects: [
    {
      title:
        'Laguna Mar Chiquita — Spatio-temporal Surface Analysis (In Progress)',
      description:
        'Satellite-based analysis of Laguna Mar Chiquita (Córdoba, Argentina) using Landsat/Sentinel-2 imagery and NDWI/MNDWI spectral indices to build a monthly surface time series. Compares statistical and ML models to predict surface area from climate variables (precipitation, temperature) to support environmental management.',
      stack: [
        'Python',
        'Pandas',
        'Numpy',
        'Scikit-learn',
        'Matplotlib',
        'Google Earth Engine',
        'Machine Learning',
      ],
    },
    {
      title: 'Denmark Energy Transition',
      description:
        'Analysis of Denmark’s electricity system using Energinet data (2015–2024). Focus: structural transition (wind ↑, fossil ↓, CO₂ ↓), seasonality and system drivers.',
      stack: [
        'Python',
        'Pandas',
        'Streamlit',
        'Data Visualization',
        'Data Analysis',
      ],
      link: 'https://denmark-energy-analysis.streamlit.app/',
    },
    {
      title:
        'Classification of Prison Recidivism Trajectory in Argentina (SNEEP)',
      description:
        'Data science study using SNEEP data to classify prior offending trajectories with multiclass and balanced Random Forest models, including exploratory analysis and ethical discussion.',
      stack: [
        'Python',
        'Pandas',
        'Numpy',
        'Matplotlib',
        'Scikit-learn',
        'Machine Learning',
        'Random Forest',
        'Streamlit',
      ],
      link: 'https://recidivism-prediction.streamlit.app/',
    },
    {
      title: 'Wind Energy System Share in Denmark (2022–2024)',
      description:
        'Interactive Tableau dashboard analyzing wind energy contribution to Denmark’s electricity system. Explores monthly system share, total production trends, and seasonal patterns, highlighting structural reliance on wind power.',
      stack: ['Tableau', 'Data Visualization', 'Energy Data Analysis'],
      link: 'https://public.tableau.com/app/profile/pedro.chincolla/viz/Project_Energy_Dk/Dashboard1#1',
    },
    {
      title:
        'Analyzing the Impact of Fare Changes on Subway Demand in Buenos Aires',
      description:
        'Analysis of how subway fare changes affect ridership in Buenos Aires, using data-driven modeling to understand demand sensitivity and support public policy planning.',
      stack: ['Python', 'Pandas', 'Data Visualitation', 'Regression Modeling'],
      link: 'https://elasticidad-subte.streamlit.app/',
    },
    {
      title: 'Global Greenhouse Gas Emissions Analysis (FAO Data Project)',
      description:
        'Data science project analyzing FAO’s global GHG emissions data through preprocessing, exploration, and ARIMA modeling to forecast emission trends.',
      stack: [
        'Python',
        'Pandas',
        'Numpy',
        'Matplotlib',
        'Statsmodels',
        'Machine Learning',
        'ARIMA',
      ],
      colab:
        'https://colab.research.google.com/drive/19sFsi1XLGJfgtcMNxM5pbpErVsDUZfnk?usp=sharing',
    },
    {
      title: 'MiCafeApp',
      description:
        "A website that optimizes the coffee shop purchasing experience, with a focus on the 'Take Away' mode.",
      stack: ['Angular', 'Nodejs', 'Express', 'Bootstrap', 'Mongodb'],
      gitHub: 'https://github.com/PedroT111/miCafe',
      router: '/project-micafeapp',
    },
  ],
};
