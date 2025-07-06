/* Change this file to get your personal portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Amit Gangane",
  title: "Hi all, I'm Amit",
  subTitle: emoji(
    "A passionate Data Scientist 🚀 with experience in Machine Learning, Deep Learning, and Data Analytics. I love transforming raw data into meaningful insights and building intelligent systems that solve real-world problems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/amitgangane",
  linkedin: "https://www.linkedin.com/in/amitgangane/",
  gmail: "amitgangane@gmail.com",
  kaggle: "https://www.kaggle.com/amitgangane",
  medium: "https://medium.com/@amitgangane",
  stackoverflow: "https://stackoverflow.com/users/amitgangane",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DATA SCIENTIST WHO LOVES TO EXPLORE EVERY TECH STACK IN DATA SCIENCE",
  skills: [
    emoji(
      "⚡ Develop highly scalable machine learning models for various business problems"
    ),
    emoji("⚡ Build end-to-end data pipelines and analytics solutions"),
    emoji(
      "⚡ Create interactive dashboards and data visualizations using modern tools"
    ),
    emoji(
      "⚡ Deploy ML models to production using cloud platforms and containerization"
    ),
    emoji(
      "⚡ Perform statistical analysis and A/B testing for data-driven decision making"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassName: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassName: "fab fa-r-project"
    },
    {
      skillName: "SQL",
      fontAwesomeClassName: "fas fa-database"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassName: "fas fa-brain"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassName: "fas fa-fire"
    },
    {
      skillName: "Scikit-learn",
      fontAwesomeClassName: "fas fa-chart-line"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassName: "fas fa-table"
    },
    {
      skillName: "NumPy",
      fontAwesomeClassName: "fas fa-calculator"
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassName: "fas fa-chart-bar"
    },
    {
      skillName: "Seaborn",
      fontAwesomeClassName: "fas fa-chart-area"
    },
    {
      skillName: "Jupyter",
      fontAwesomeClassName: "fas fa-book"
    },
    {
      skillName: "Git",
      fontAwesomeClassName: "fab fa-git-alt"
    },
    {
      skillName: "Docker",
      fontAwesomeClassName: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassName: "fab fa-aws"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassName: "fab fa-google"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassName: "fas fa-chart-pie"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassName: "fas fa-chart-column"
    },
    {
      skillName: "Apache Spark",
      fontAwesomeClassName: "fas fa-bolt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Technology",
      logo: require("./assets/images/iitLogo.png"),
      subHeader: "Master of Technology in Computer Science",
      duration: "September 2019 - April 2021",
      desc: "Specialized in Machine Learning and Data Mining. Thesis on Deep Learning for Natural Language Processing.",
      descBullets: [
        "Coursework: Advanced Machine Learning, Deep Learning, Statistical Methods",
        "Research in NLP and Computer Vision applications"
      ]
    },
    {
      schoolName: "University of Mumbai",
      logo: require("./assets/images/mumbaiUniLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2015 - May 2019",
      desc: "Graduated with First Class with Distinction. Active member of Data Science Club.",
      descBullets: [
        "Relevant Coursework: Data Structures, Algorithms, Database Systems, Statistics",
        "Final Year Project: Predictive Analytics for E-commerce Recommendation System"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Analysis & Visualization",
      progressPercentage: "85%"
    },
    {
      Stack: "Deep Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Statistical Modeling",
      progressPercentage: "85%"
    },
    {
      Stack: "Big Data Technologies",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to false to hide workExperiences Section
  experience: [
    {
      role: "Senior Data Scientist",
      company: "TechCorp Analytics",
      companylogo: require("./assets/images/techcorpLogo.png"),
      date: "June 2022 – Present",
      desc: "Leading data science initiatives and building ML solutions for business optimization.",
      descBullets: [
        "Developed predictive models that increased customer retention by 25%",
        "Built real-time recommendation systems serving 1M+ users daily",
        "Led a team of 4 data scientists and analysts",
        "Implemented MLOps pipelines reducing model deployment time by 60%"
      ]
    },
    {
      role: "Data Scientist",
      company: "DataInsights Inc",
      companylogo: require("./assets/images/datainsightsLogo.png"),
      date: "May 2021 – May 2022",
      desc: "Worked on various machine learning projects across different domains including finance and healthcare.",
      descBullets: [
        "Developed fraud detection models with 95% accuracy for financial transactions",
        "Created customer segmentation models for targeted marketing campaigns",
        "Built time series forecasting models for inventory management",
        "Collaborated with cross-functional teams to deliver data-driven solutions"
      ]
    },
    {
      role: "Data Science Intern",
      company: "StartupXYZ",
      companylogo: require("./assets/images/startupLogo.png"),
      date: "Jan 2021 – Apr 2021",
      desc: "Worked on exploratory data analysis and built initial ML prototypes for the company's core product.",
      descBullets: [
        "Performed comprehensive EDA on customer behavior data",
        "Built initial recommendation system prototype",
        "Created automated reporting dashboards using Python and Tableau"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME MAJOR DATA SCIENCE PROJECTS AND SOLUTIONS I'VE BUILT",
  projects: [
    {
      image: require("./assets/images/mlPlatformLogo.png"),
      projectName: "Enterprise ML Platform",
      projectDesc: "Built an end-to-end machine learning platform for automated model training, validation, and deployment with A/B testing capabilities.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/amitgangane/ml-platform"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/predictiveAnalyticsLogo.png"),
      projectName: "Predictive Analytics Suite",
      projectDesc: "Developed a comprehensive predictive analytics solution for retail businesses to forecast demand, optimize inventory, and predict customer churn.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/amitgangane/predictive-analytics"
        }
      ]
    },
    {
      image: require("./assets/images/nlpLogo.png"),
      projectName: "NLP Text Classification System",
      projectDesc: "Built a multi-class text classification system using transformer models for automated content categorization and sentiment analysis.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/amitgangane/nlp-classification"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Machine Learning - Specialty",
      subtitle:
        "Demonstrated expertise in building, training, tuning, and deploying machine learning models on AWS.",
      image: require("./assets/images/awsLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://aws.amazon.com/certification/certified-machine-learning-specialty/"
        }
      ]
    },
    {
      title: "Google Cloud Professional Data Engineer",
      subtitle:
        "Certified in designing and building data processing systems and machine learning models on Google Cloud.",
      image: require("./assets/images/googleCloudLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://cloud.google.com/certification/data-engineer"
        }
      ]
    },
    {
      title: "Kaggle Expert",
      subtitle: "Achieved Expert level on Kaggle with multiple competition medals and high-ranking solutions.",
      image: require("./assets/images/kaggleLogo.png"),
      footerLink: [
        {
          name: "Kaggle Profile",
          url: "https://www.kaggle.com/amitgangane"
        }
      ]
    },
    {
      title: "Best Data Science Project Award",
      subtitle: "Won the best project award at National Data Science Conference 2022 for innovative ML solution.",
      image: require("./assets/images/awardLogo.png"),
      footerLink: [
        {
          name: "Award Details",
          url: "https://example.com/award"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Data Science, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@amitgangane/understanding-deep-learning-fundamentals",
      title: "Understanding Deep Learning Fundamentals",
      description:
        "A comprehensive guide to deep learning concepts, from neural networks to advanced architectures like CNNs and RNNs."
    },
    {
      url: "https://medium.com/@amitgangane/machine-learning-in-production",
      title: "Machine Learning in Production: Best Practices",
      description:
        "Learn how to deploy and maintain machine learning models in production environments with real-world examples."
    },
    {
      url: "https://medium.com/@amitgangane/data-visualization-with-python",
      title: "Advanced Data Visualization Techniques with Python",
      description:
        "Explore advanced visualization techniques using matplotlib, seaborn, and plotly to create compelling data stories."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Machine Learning in Healthcare",
      subtitle: "PyData Conference 2023",
      slides_url: "https://slides.com/amitgangane/ml-healthcare",
      event_url: "https://pydata.org/conference2023"
    },
    {
      title: "Building Scalable ML Pipelines",
      subtitle: "Data Science Summit 2022",
      slides_url: "https://slides.com/amitgangane/scalable-ml-pipelines",
      event_url: "https://datasciencesummit.com/2022"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT DATA SCIENCE AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/amitgangane/embed/episodes/Data-Science-Career-Tips-e1234567"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9876543210",
  email_address: "amitgangane@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "amitgangane", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};