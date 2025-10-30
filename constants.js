// Path for local images stored inside the `baba-website-main` folder.
// Return a root-relative path and URI-encode the filename to handle spaces.
const IMAGE_PATH = (filename) => `/baba-website-main/${encodeURIComponent(filename)}`;

export const NAV_LINKS = [
  { name: 'Home', id: 'home' }, // Renamed 'About' to 'Home' to align with hero section
  { name: 'About', id: 'about' },
  { name: 'Education', id: 'education' },
  { name: 'Skills', id: 'skills' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Projects & Internships', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export const PERSONAL_INFO = {
  name: 'BABA SEKAR',
  // profile image filename in the `baba-website-main` folder has a space: "baba img.jpeg"
  image: IMAGE_PATH('baba img.jpeg'),
  phone: '+91-9385465091',
  email: 'babasekar.in@gmail.com',
  linkedin: 'https://www.linkedin.com/in/baba-sekar-159068262/',
  objective: "To secure a challenging and creative position in an organization where I can implement my skills and knowledge. I am eager to collaborate with a dynamic team with enthusiasm to utilize my interpersonal skills to contribute effectively and grow professionally."
};

// Default background image (uses the `bc.jpg` image in baba-website-main)
export const BACKGROUND_IMAGE = IMAGE_PATH('bc.jpg');

export const ABOUT_ME = {
  title: 'About Me',
  content: `I am a recent B.Tech graduate in Computer and Communication Engineering from Sri Manakula Vinayagar Engineering College. I have a strong foundation in various programming languages and tools, including Python, Java, Excel, PowerBI, HTML, CSS, JavaScript, and statistics. My academic background has equipped me with the necessary skills to excel in technical job role. During my college, I completed a significant project on fake news detection using machine learning with CNN and LSTM algorithms. This project not only honed my technical skills but also deepened my understanding of machine learning and data analysis. Additionally, I have published a journal in the Gravida Review Journal titled "TruthNet with CNN," which showcases my research and analytical capabilities. I have a strong passion for mathematics and statistics which lead me to score 96% in hsc mathematics and in college scored 10/10 in m1,m2,and statistics. I am enthusiastic about leveraging my technical skills and analytical mindset to contribute effectively to a company. I am confident that my background and skills make me a strong candidate for technical, development and data analytics roles.`,
};

export const EDUCATION = [
  {
    level: 'B.Tech (Computer and Communication Engineering)',
    institution: 'Sri Manakula Vinayagar Engineering College',
    cgpa: '8.27 CGPA',
    location: 'Puducherry',
    years: '2020 - 2024',
  },
  {
    level: 'HSC (12th Std)',
    institution: 'Nirmala Matric Hr. Sec School',
    percentage: '80.83%',
    location: 'Chidambaram',
    years: '2019 - 2020',
  },
  {
    level: 'SSLC (10th Std)',
    institution: 'Nirmala Matric Hr. Sec School',
    percentage: '88.4%',
    location: 'Chidambaram',
    years: '2017 - 2018',
  },
];

export const SKILLS = {
  programming: [
    { name: 'Python', icon: IMAGE_PATH('python.png') },
    { name: 'Java', icon: IMAGE_PATH('java.png') },
    { name: 'HTML', icon: IMAGE_PATH('html.jpg') },
    { name: 'CSS', icon: IMAGE_PATH('CSS-Logo.png') },
    { name: 'JavaScript', icon: IMAGE_PATH('js.jpg') },
    { name: 'React.js', icon: IMAGE_PATH('React.jpg') },
    { name: 'Data Structures', icon: IMAGE_PATH('data structures.png') },
    { name: 'MySQL', icon: IMAGE_PATH('mysql.png') },
  ],
  applications: [
    { name: 'PowerBI', icon: IMAGE_PATH('powerbi.png') },
    { name: 'Excel', icon: IMAGE_PATH('excel.jpg') },
    { name: 'Figma', icon: IMAGE_PATH('figma.png') },
    { name: 'Illustrator', icon: IMAGE_PATH('illustrator.png') },
    { name: 'Photoshop', icon: IMAGE_PATH('photoshop.png') },
  ],
  other: [
    'OOPS',
    'Machine learning',
    'AWS',
    'Rest API',
    'Vue',
    'M365 (SharePoint, Power Apps, Power Automate, Copilot, Power BI, Excel)',
    'N8N',
    'Git',
    'Github',
    'VS Code',
  ],
  soft: [
    {
      title: 'Teamwork and Communication',
      description: 'Gained team work experience and improved communication skill during college project.',
    },
    {
      title: 'Problem-Solving',
      description: 'Ability to analyze and identify problems effectively to develop efficient solutions.',
    },
    {
      title: 'Time Management and Open Minded',
      description: 'Will complete tasks within deadlines, managing time effectively and Open minded.',
    },
  ],
  interests: [
    'Software Engineering',
    'Web Development',
    'Data Analyst',
  ],
};

export const CERTIFICATIONS = [
  {
    name: 'IBM certification in Python basics for data science',
    link: 'https://courses.edx.org/certificates/1de75e26d70f40fca432954d2dc79ff1',
  },
  {
    name: 'IBM certification in Introduction to data science',
    link: 'https://courses.edx.org/certificates/519f509a95e54d6aaab3ea0cfb1233cb',
  },
  {
    name: 'ML certification from AWS',
    link: 'https://www.credly.com/badges/2495526c-d80a-491d-baa3-49b6a1ac7309/linked_in_profile',
  },
  {
    name: 'Programming in Java in NPTEL',
    link: 'https://www.linkedin.com/in/baba-sekar-159068262/details/certifications/',
  },
  {
    name: 'IBM certification in Web Development',
    link: 'https://courses.edx.org/certificates/320d092cc1904e17a8b11193fcd49081',
  },
  {
    name: 'Database certification from Certiport',
    link: 'https://www.linkedin.com/in/baba-sekar-159068262/details/certifications/',
  },
  {
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    link: 'https://learn.microsoft.com/en-us/users/babas-0566/credentials/8de287b3cf980c54?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
];

export const PROJECTS_INTERNSHIPS = [
  {
    type: 'project',
    title: 'Creditcard Cashback Calculator',
    description: 'Developed responsive Credit card cashback calculator to calculate cashback amount in easy way for different credit cards spends with different cashback percentage. Skills used: HTML, CSS, JavaScript.',
    links: [{ name: 'Project Link', url: 'https://babasekar.github.io/creditcard-Cashback-count/' }],
  },
  {
    type: 'project',
    title: 'Truthnet with CNN - Fake news Detection',
    description: 'Developed a robust fake news detection model using CNN and LSTM algorithms, achieving an impressive accuracy of 96% and an F1-score of 0.92 through meticulous parameter optimization. Skills used: Python, HTML, CSS, JS, machine learning algorithms.',
    links: [{ name: 'Paper Publication (GRJ journal)', url: 'https://drive.google.com/file/d/16NouWxEB5Z596KvTFJbvpU8mEhNj9Vtb/view' }],
  },
  {
    type: 'internship',
    title: 'AI/ML AICTE Virtual Internship',
    duration: 'Dec - Feb (2022-2023)',
    description: 'Developed and implemented machine learning algorithms using Python focusing on supervised/unsupervised learning techniques with various algorithms CNN, LSTM, Random forest, etc.',
  },
  {
    type: 'internship',
    title: 'AI Internship at Petrichor Techlutions',
    duration: 'April - Oct (2025)',
    description: [
      'Developed a pharmacy product order automation system by extracting data from provided Excel files using Playwright (Python).',
      'Built a question-paper generator that parses textbook content and analyses the structure of uploaded question papers; used the LLM "llama-3.3-70b-versatile" via the groq API and applied Few-Shot Learning (FSL); frontend implemented with React.js.',
      'Handled a project for safety route finding application. Designed and trained a model for safe-route prediction using scikit-learn to predict the safest route.',
    ],
  },
];