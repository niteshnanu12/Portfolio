// Portfolio Application JavaScript

// Application data
const portfolioData = {
  personalInfo: {
    name: "Nitesh Kumar Panthulu ",
    title: "Full-Stack Developer & AI Generalist",
    tagline:
      "Building intelligent web applications that bridge creativity with cutting-edge technology",
    email: "niteshnanu8@gmail.com",
    location: "Hyderabad , India",
    phone: "+91 8328607614",
    availability: "Available for freelance projects",
  },
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/niteshnanu12",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/niteshkumar-nk",
      icon: "linkedin",
    },
    { platform: "Twitter", url: "https://twitter.com", icon: "twitter" },
    { platform: "Medium", url: "https://medium.com", icon: "medium" },
  ],
  about: {
    summary:
      "Full-stack developer and AI generalist with a strong focus on building intelligent, scalable digital products that merge modern web development with applied AI. Often stepping into roles such as AI product developer, technical founder, or innovation specialist, I bring a holistic approach to crafting end-to-end solutions — from frontend interfaces to backend logic, and AI-driven automation. Skilled in technologies like .NET, React, SQL, and modern AI frameworks, I specialize in developing user-centric platforms that are both functional and forward-thinking. Passionate about solving real-world problems, experimenting with new tools, and turning ideas into deployable, impactful solutions.",
    interests: [
      "Open Source",
      "Machine Learning",
      "Web Performance",
      "DevOps",
      "Tech Innovation",
    ],
    values: [
      "Clean Code",
      "User-Centric Design",
      "Continuous Learning",
      "Collaboration",
    ],
  },
  skills: {
    languages: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "Go", level: 75 },
      { name: "Rust", level: 70 },
    ],
    frontend: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Angular", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "Django", level: 80 },
      { name: "FastAPI", level: 85 },
      { name: "Spring Boot", level: 75 },
    ],
    aiml: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "OpenAI API", level: 90 },
      { name: "Hugging Face", level: 85 },
      { name: "LangChain", level: 80 },
    ],
    database: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "Prisma", level: 85 },
    ],
    cloud: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 75 },
      { name: "Vercel", level: 90 },
    ],
  },
  projects: [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform",
      category: "Full-Stack",
      description:
        "Built a modern e-commerce platform with AI-driven product recommendations, real-time inventory management, and advanced analytics dashboard.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TensorFlow",
        "PostgreSQL",
        "AWS",
      ],
      image: "/api/placeholder/400/250",
      liveUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 2,
      title: "Smart Code Review Assistant",
      category: "AI/ML",
      description:
        "Developed an AI assistant that analyzes code quality, suggests improvements, and identifies potential bugs using machine learning models.",
      technologies: ["Python", "OpenAI", "FastAPI", "React", "Docker"],
      image: "/api/placeholder/400/250",
      liveUrl: "https://demo2.example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 3,
      title: "Real-time Collaboration Tool",
      category: "Web Apps",
      description:
        "Created a real-time collaborative workspace with live editing, video conferencing integration, and AI-powered meeting summaries.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
      image: "/api/placeholder/400/250",
      liveUrl: "https://demo3.example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: 4,
      title: "Predictive Analytics Dashboard",
      category: "AI/ML",
      description:
        "Built an interactive dashboard for business intelligence with predictive modeling and automated report generation.",
      technologies: ["Vue.js", "Python", "Scikit-learn", "D3.js", "PostgreSQL"],
      image: "/api/placeholder/400/250",
      liveUrl: "https://demo4.example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: 5,
      title: "Microservices Architecture",
      category: "Full-Stack",
      description:
        "Designed and implemented a scalable microservices architecture with containerized services and automated deployment pipelines.",
      technologies: ["Go", "Docker", "Kubernetes", "gRPC", "PostgreSQL"],
      image: "/api/placeholder/400/250",
      liveUrl: "https://demo5.example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: 6,
      title: "Natural Language Processing Tool",
      category: "AI/ML",
      description:
        "Developed a comprehensive NLP tool for text analysis, sentiment detection, and automated content generation.",
      technologies: ["Python", "Transformers", "Flask", "React", "Redis"],
      image: "/api/placeholder/400/250",
      liveUrl: "https://demo6.example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
  ],
  experience: [
    {
      type: "work",
      title: "Senior Full-Stack Developer",
      company: "TechInnovate Inc.",
      period: "2022 - Present",
      description:
        "Led development of AI-enhanced web applications, mentored junior developers, and architected scalable cloud solutions.",
    },
    {
      type: "work",
      title: "Full-Stack Developer",
      company: "WebSolutions Co.",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications, implemented CI/CD pipelines, and integrated machine learning models into production systems.",
    },
    {
      type: "education",
      title: "M.S. Computer Science",
      company: "Stanford University",
      period: "2018 - 2020",
      description:
        "Specialized in Artificial Intelligence and Machine Learning. Thesis on neural network optimization for web applications.",
    },
    {
      type: "education",
      title: "B.S. Software Engineering",
      company: "UC Berkeley",
      period: "2014 - 2018",
      description:
        "Graduated Summa Cum Laude. Focus on full-stack development and software architecture.",
    },
  ],
  certifications: [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "TensorFlow Developer Certificate",
    "Azure AI Engineer Associate",
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechInnovate",
      text: "Alex's ability to seamlessly integrate AI capabilities into our web applications has been game-changing for our product.",
    },
    {
      name: "Michael Zhang",
      role: "CTO at WebSolutions",
      text: "One of the most talented developers I've worked with. Alex delivers high-quality code and innovative solutions consistently.",
    },
  ],
};

// DOM Elements
let themeToggle,
  navToggle,
  navMenu,
  navLinks,
  typedTextElement,
  downloadCvButton,
  contactForm;

// State
let currentTheme = localStorage.getItem("theme") || "light";
let typingIndex = 0;
let currentTextIndex = 0;
const typingTexts = [
  "Full-Stack Developer",
  "AI Generalist",
  "Problem Solver",
  "Innovation Enthusiast",
];

// Initialize application
document.addEventListener("DOMContentLoaded", function () {
  // Initialize DOM elements
  themeToggle = document.getElementById("theme-toggle");
  navToggle = document.getElementById("nav-toggle");
  navMenu = document.getElementById("nav-menu");
  navLinks = document.querySelectorAll(".nav__link");
  typedTextElement = document.getElementById("typed-text");
  downloadCvButton = document.getElementById("download-cv");
  contactForm = document.getElementById("contact-form");

  initializeTheme();
  initializeNavigation();
  initializeTypingAnimation();
  loadSkills();
  loadProjects();
  loadTimeline();
  initializeProjectFilters();
  initializeContactForm();
  initializeScrollAnimations();
  initializeSmoothScrolling();
});

// Theme Management
function initializeTheme() {
  if (!themeToggle) return;

  // Apply saved theme
  document.documentElement.setAttribute("data-color-scheme", currentTheme);
  updateThemeIcons();

  themeToggle.addEventListener("click", toggleTheme);
}

function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";

  // Apply theme immediately
  document.documentElement.setAttribute("data-color-scheme", currentTheme);
  localStorage.setItem("theme", currentTheme);
  updateThemeIcons();
  // Remove any inline color styles from nav links
  if (navLinks) {
    navLinks.forEach(link => link.style.color = "");
  }

  // Add visual feedback
  themeToggle.style.transform = "scale(0.9)";
  setTimeout(() => {
    themeToggle.style.transform = "scale(1)";
  }, 150);

  updateHeaderOnScroll();
}

function updateThemeIcons() {
  const moonIcon = themeToggle.querySelector(".moon-icon");
  const sunIcon = themeToggle.querySelector(".sun-icon");

  if (currentTheme === "dark") {
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
  } else {
    moonIcon.classList.remove("hidden");
    sunIcon.classList.add("hidden");
  }
}

// Navigation
function initializeNavigation() {
  if (!navToggle || !navMenu) return;

  navToggle.addEventListener("click", toggleMobileMenu);

  // Handle navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      scrollToSection(targetId);
      closeMobileMenu();
    });
  });

  // Handle "View Projects" button in hero
  const viewProjectsBtn = document.querySelector('a[href="#projects"]');
  if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToSection("#projects");
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      navMenu &&
      navToggle &&
      !navMenu.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });
}

function scrollToSection(targetId) {
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    const headerHeight = 70; // Account for fixed header
    const targetPosition = targetSection.offsetTop - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    // Update active nav link
    updateActiveNavLink(targetId.substring(1));
  }
}

function toggleMobileMenu() {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");
}

function closeMobileMenu() {
  navMenu.classList.remove("active");
  navToggle.classList.remove("active");
}

// Typing Animation
function initializeTypingAnimation() {
  if (!typedTextElement) return;

  startTyping();
}

function startTyping() {
  const currentText = typingTexts[currentTextIndex];

  if (typingIndex < currentText.length) {
    typedTextElement.textContent += currentText.charAt(typingIndex);
    typingIndex++;
    setTimeout(startTyping, 100);
  } else {
    setTimeout(startErasing, 2000);
  }
}

function startErasing() {
  const currentText = typingTexts[currentTextIndex];

  if (typingIndex > 0) {
    typedTextElement.textContent = currentText.substring(0, typingIndex - 1);
    typingIndex--;
    setTimeout(startErasing, 50);
  } else {
    currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
    setTimeout(startTyping, 500);
  }
}

// Skills Loading
function loadSkills() {
  const skillCategories = {
    "languages-skills": portfolioData.skills.languages,
    "frontend-skills": portfolioData.skills.frontend,
    "backend-skills": portfolioData.skills.backend,
    "aiml-skills": portfolioData.skills.aiml,
    "database-skills": portfolioData.skills.database,
    "cloud-skills": portfolioData.skills.cloud,
  };

  Object.entries(skillCategories).forEach(([containerId, skills]) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = skills
      .map(
        (skill) => `
      <div class="skill-item">
        <div class="skill-info">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-level">${skill.level}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-progress" style="--skill-width: ${skill.level}%"></div>
        </div>
      </div>
    `
      )
      .join("");
  });
}

// Projects Loading
function loadProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = portfolioData.projects
    .map(
      (project) => `
    <div class="project-card" data-category="${project.category}">
      <div class="project-image">
        <span>🚀 ${project.title}</span>
      </div>
      <div class="project-content">
        <div class="project-category">${project.category}</div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies
            .map((tech) => `<span class="tech-tag">${tech}</span>`)
            .join("")}
        </div>
        <div class="project-links">
          <a href="${project.liveUrl}" target="_blank" class="project-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15,3 21,3 21,9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Live Demo
          </a>
          <a href="${project.githubUrl}" target="_blank" class="project-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// Timeline Loading
function loadTimeline() {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;

  timeline.innerHTML = portfolioData.experience
    .map(
      (item) => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h3 class="timeline-title">${item.title}</h3>
        <div class="timeline-company">${item.company}</div>
        <div class="timeline-period">${item.period}</div>
        <p class="timeline-description">${item.description}</p>
      </div>
    </div>
  `
    )
    .join("");
}

// Project Filters
function initializeProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter projects with animation
      projectCards.forEach((card, index) => {
        const category = card.getAttribute("data-category");

        setTimeout(() => {
          if (filter === "all" || category === filter) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        }, index * 50);
      });
    });
  });
}

// Contact Form
function initializeContactForm() {
  if (!contactForm) return;

  contactForm.addEventListener("submit", handleContactSubmit);

  // Real-time validation
  const formInputs = contactForm.querySelectorAll("input, textarea");
  formInputs.forEach((input) => {
    input.addEventListener("blur", validateField);
    input.addEventListener("input", clearFieldError);
  });
}

function handleContactSubmit(e) {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  // Clear previous messages
  clearFormMessages();

  // Validate all fields
  let isValid = true;
  const requiredFields = ["name", "email", "subject", "message"];

  requiredFields.forEach((field) => {
    const fieldElement = contactForm.querySelector(`[name="${field}"]`);
    if (!validateField({ target: fieldElement })) {
      isValid = false;
    }
  });

  if (isValid) {
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    setTimeout(() => {
      showFormSuccess("Thank you for your message! I'll get back to you soon.");
      contactForm.reset();
      clearAllFieldStates();
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 1500);
  } else {
    showFormError("Please fill in all required fields correctly.");
  }
}

function validateField(e) {
  const field = e.target;
  const value = field.value.trim();
  const fieldName = field.name;

  clearFieldError(e);

  let isValid = true;
  let errorMessage = "";

  if (!value) {
    errorMessage = `${
      fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
    } is required`;
    isValid = false;
  } else if (fieldName === "email" && !isValidEmail(value)) {
    errorMessage = "Please enter a valid email address";
    isValid = false;
  }

  if (!isValid) {
    showFieldError(field, errorMessage);
    field.classList.add("error");
  } else {
    field.classList.add("success");
  }

  return isValid;
}

function clearFieldError(e) {
  const field = e.target;
  field.classList.remove("error", "success");

  const existingError = field.parentNode.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }
}

function showFieldError(field, message) {
  const errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.textContent = message;
  field.parentNode.appendChild(errorElement);
}

function showFormSuccess(message) {
  const messageElement = document.createElement("div");
  messageElement.className = "form-message success-message";
  messageElement.textContent = message;
  messageElement.style.cssText = `
    background: rgba(var(--color-success-rgb), 0.1);
    color: var(--color-success);
    padding: 1rem;
    border-radius: var(--radius-base);
    margin-bottom: 1rem;
    border: 1px solid rgba(var(--color-success-rgb), 0.2);
  `;
  contactForm.insertBefore(messageElement, contactForm.firstChild);

  setTimeout(() => {
    messageElement.remove();
  }, 5000);
}

function showFormError(message) {
  const messageElement = document.createElement("div");
  messageElement.className = "form-message error-message";
  messageElement.textContent = message;
  messageElement.style.cssText = `
    background: rgba(var(--color-error-rgb), 0.1);
    color: var(--color-error);
    padding: 1rem;
    border-radius: var(--radius-base);
    margin-bottom: 1rem;
    border: 1px solid rgba(var(--color-error-rgb), 0.2);
  `;
  contactForm.insertBefore(messageElement, contactForm.firstChild);

  setTimeout(() => {
    messageElement.remove();
  }, 5000);
}

function clearFormMessages() {
  const existingMessages = contactForm.querySelectorAll(".form-message");
  existingMessages.forEach((msg) => msg.remove());
}

function clearAllFieldStates() {
  const formInputs = contactForm.querySelectorAll("input, textarea");
  formInputs.forEach((input) => {
    input.classList.remove("error", "success");
  });

  const errorMessages = contactForm.querySelectorAll(".error-message");
  errorMessages.forEach((msg) => msg.remove());
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Scroll Animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("skill-category")) {
          animateSkills(entry.target);
        }

        // Update active nav link
        const id = entry.target.id;
        if (id) {
          updateActiveNavLink(id);
        }
      }
    });
  }, observerOptions);

  // Observe sections for navigation
  const sections = document.querySelectorAll("section[id]");
  sections.forEach((section) => observer.observe(section));

  // Observe skill categories for animation
  const skillCategories = document.querySelectorAll(".skill-category");
  skillCategories.forEach((category) => observer.observe(category));
}

function animateSkills(skillCategory) {
  const skillItems = skillCategory.querySelectorAll(".skill-item");
  skillItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("animate");
      const progressBar = item.querySelector(".skill-progress");
      const skillWidth = progressBar.style.getPropertyValue("--skill-width");
      progressBar.style.width = skillWidth;
    }, index * 200);
  });
}

function updateActiveNavLink(activeId) {
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${activeId}`) {
      link.classList.add("active");
    }
  });
}

// Smooth Scrolling
function initializeSmoothScrolling() {
  // Handle CV download
  if (downloadCvButton) {
    downloadCvButton.addEventListener("click", (e) => {
      e.preventDefault();

      const cvUrl = "./assets/Nitesh_Kumar_Panthulu_CV.pdf"; // ✅ Actual path to your file
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "Nitesh_Kumar_Panthulu_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // Handle scroll to top on logo click
  const logo = document.querySelector(".nav__logo");
  if (logo) {
    logo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function updateHeaderOnScroll() {
  const header = document.querySelector(".header");
  if (!header) return;
  const isDark = document.documentElement.getAttribute("data-color-scheme") === "dark";
  const lightBg = "rgba(252, 252, 249, 0.95)";
  const darkBg = "rgba(38, 40, 40, 0.95)";
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
    header.style.background = isDark ? darkBg : lightBg;
    header.style.boxShadow = "var(--shadow-sm)";
  } else {
    header.classList.remove("scrolled");
    header.style.background = isDark ? darkBg : lightBg;
    header.style.boxShadow = "none";
  }
  if (navLinks) {
    navLinks.forEach(link => link.style.color = "");
  }
}

// Add scroll effect to header
window.addEventListener(
  "scroll",
  debounce(updateHeaderOnScroll, 10)
);

// Preload animations
function preloadAnimations() {
  // Add entrance animations for cards and sections
  const cards = document.querySelectorAll(
    ".card, .project-card, .testimonial, .timeline-item"
  );
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
  });
}

// Initialize preload animations after DOM is ready
setTimeout(preloadAnimations, 500);
