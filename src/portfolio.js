/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

//import emoji from "react-easy-emoji";
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
  username: "Olga Bronin",
  title: "Hi, I'm Olga",
  subTitle: "A Product Manager passionate about user-centric design, data-driven decision-making, and creating intuitive, impactful products.",
  resumeLink: "https://drive.google.com/file/d/1eKpXrx7M7Xu__XY-ZKt5ZW0UdJx8QMKd/view?usp=drive_link", 
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/olga-bronin-543768199",
  gmail: "slyeptsova.olga@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
 title: "What I Do",
  subTitle: "PRODUCT MANAGER WITH CROSS-FUNCTIONAL EXPERIENCE IN TECH, DESIGN & STRATEGY",
  skills: [
    "⚡ Leading product strategy and cross-functional collaboration from ideation to launch",
    "⚡ Driving user research, A/B testing, and data-informed product decisions",
    "⚡ Planning and executing agile sprints with teams across time zones",
    "⚡ Improving UX through wireframes, prototypes, and usability testing"
  ],
  softwareSkills: [
    { skillName: "Figma", fontAwesomeClassname: "logos:figma" },
    { skillName: "Jira", fontAwesomeClassname: "logos:jira" },
    { skillName: "Google Analytics", fontAwesomeClassname: "logos:google-analytics" },
    { skillName: "Confluence", fontAwesomeClassname: "logos:confluence" },
    { skillName: "HTML", fontAwesomeClassname: "vscode-icons:file-type-html" },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [{
    schoolName: "V.N. Karazin Kharkiv National University",
    subHeader: "Master of Science in Biochemistry",
    duration: "2012",
  },
  {
    schoolName: "Certifications",
    subHeader: "Google Project Management, Google UX Design, Digital Product Management (UVA Darden)",
    duration: "2021–2022",
  }]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "User-Centered Design & Research", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Business & Product Strategy",
      progressPercentage: "80%"
    },
    {
      Stack: "Cross-Functional Collaboration",
      progressPercentage: "90%"
    },
    {
      Stack: "Data & Analytics",
      progressPercentage: "70%" // insights from GA, dashboards, experimentation
    },
    {
      Stack: "Technical Communication",
      progressPercentage: "65%" // translating requirements, QA, PRDs
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
     {
    role: "Product Manager",
    company: "Facilitron Inc.",
    date: "2022 – Present",
    desc: "Led the development and launch of 7 projects across international teams, increasing usability scores from 2.4 to 4.3, and reducing bugs by 75%. Delivered 90% of features on time while improving support workflow by 30%.",
  },
  {
    role: "Project Manager",
    company: "Carglobe LLC",
    date: "2018 – 2019",
    desc: "Managed team and budget to deliver 2 MVPs and improved user engagement by 20%. Optimized user journey speed by 1.5X through collaboration with design and engineering.",
  },
  {
    role: "Associate Agent | Realtor",
    company: "Redfin Inc.",
    date: "2019 – 2023",
    desc: "Streamlined customer scheduling and helped improve internal tools for operational efficiency by 20%. Maintained 4.9/5 client rating.",
  },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Key initiatives where I led product strategy, design collaboration, and cross-functional execution",
projects: [
    {
      image: require("./assets/images/nextuLogo.webp"), // Replace with actual image file
      projectName: "Customer Support Dashboard",
      projectDesc:
        "Designed and launched a new internal support dashboard that improved customer satisfaction by 18% and cut resolution time by 30%. Reduced queue times from 10 to 5 minutes by streamlining workflows.",
      footerLink: [
        {
          name: "Learn More",
          url: "#" // replace with case study or portfolio link if available
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Search Experience Revamp",
      projectDesc:
        "Led overhaul of the product’s search experience, reducing no-search-result queries from 30% to 4%. Improved product performance 2x and usability score from 2.4 to 4.3 through user testing and iterative UI/UX improvements.",
      footerLink: [
        {
          name: "Learn More",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Car Sales & Bidding Platform",
      projectDesc:
        "Developed and launched two MVPs for a car sales and bidding platform. Conducted market analysis and defined user flows, resulting in a 20% increase in user engagement and a 1.5x faster user journey.",
      footerLink: [
        {
          name: "Learn More",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume"
}

const contactInfo = {
  title: "Contact Me ☕",
  subtitle: "Feel free to reach out for collaboration or just to say hi!",
  number: "+1 510-330-9777",
  email_address: "slyeptsova.olga@gmail.com",
};

const achievementSection = {
  display: false,
}

const blogSection = {
  display: false,
}

const talkSection = {
  display: false,
}

const podcastSection = {
  display: false,
}

const twitterDetails = {
  display: false,
}

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  contactInfo,
  isHireable,
  resumeSection,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  twitterDetails
};
