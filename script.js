// ============================================
// PORTFOLIO SYSTEM - MAIN JAVASCRIPT
// Version: 3.0.0
// Author: Pranav Machireddy
// ============================================

// Global Configuration
const CONFIG = {
    name: "Pranav Machireddy",
    email: "machireddy12@gmail.com",
    phone: "+91 9177740126",
    github: "Pranava-M",
    linkedin: "pranav-machireddy-554163311",
    college: "Amrita Vishwa Vidyapeetham University",
    graduation: "2028",
    cgpa: "7.5",
    location: "India",
    title: "Full-Stack Developer & AI Enthusiast",
    
    // System Configuration
    version: "3.0.0",
    debug: false,
    
    // Storage Keys
    storageKeys: {
        certificates: "portfolio_certificates",
        events: "portfolio_events",
        memories: "portfolio_memories",
        projects: "portfolio_projects",
        settings: "portfolio_settings"
    },
    
    // Default Data
    defaultCertificates: [
        {
            id: "cert-001",
            title: "C Programming Certification",
            issuer: "Infotech Computers",
            date: "2024-06-15",
            category: "academic",
            description: "Comprehensive C programming course covering fundamentals, data structures, algorithms, and problem-solving techniques.",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            credentialId: "CERT-2024-001",
            verified: true
        },
        {
            id: "cert-002",
            title: "Python for Data Science",
            issuer: "Self-Learning Projects",
            date: "2024-08-20",
            category: "professional",
            description: "Advanced Python skills demonstrated through 15+ projects including AI, computer vision, and web applications.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            credentialId: "",
            verified: true
        },
        {
            id: "cert-003",
            title: "Web Development Fundamentals",
            issuer: "Personal Projects Portfolio",
            date: "2024-09-10",
            category: "online",
            description: "HTML5, CSS3, JavaScript, and responsive web design skills showcased through multiple projects.",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            credentialId: "",
            verified: true
        }
    ],
    
    defaultEvents: [
        {
            id: "event-001",
            title: "Tech Conference 2024",
            startDate: "2024-11-15T09:00:00",
            endDate: "2024-11-15T17:00:00",
            type: "conference",
            role: "attendee",
            location: "Bangalore, India",
            description: "Annual technology conference featuring talks on AI, Web3, and Cloud Computing.",
            link: "https://techconference2024.com",
            images: [],
            status: "completed"
        },
        {
            id: "event-002",
            title: "AI/ML Workshop",
            startDate: "2024-12-10T10:00:00",
            endDate: "2024-12-10T16:00:00",
            type: "workshop",
            role: "participant",
            location: "Virtual",
            description: "Hands-on workshop on machine learning algorithms and model deployment.",
            link: "",
            images: [],
            status: "upcoming"
        }
    ],
    
    defaultMemories: [
        {
            id: "memory-001",
            title: "Team Project Celebration",
            date: "2024-10-15",
            category: "team",
            description: "Celebrating the successful completion of our major project with the team.",
            tags: ["team", "celebration", "success"],
            files: [
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                }
            ],
            album: "Project Memories"
        },
        {
            id: "memory-002",
            title: "Hackathon Win",
            date: "2024-09-20",
            category: "achievements",
            description: "First prize in the annual university hackathon for our innovative solution.",
            tags: ["hackathon", "win", "achievement"],
            files: [
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    thumbnail: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                }
            ],
            album: "Achievements"
        }
    ],
    
    defaultProjects: [
        {
            id: "project-001",
            title: "Hand Gesture Volume Control",
            description: "AI-powered real-time hand gesture recognition system to control system volume using webcam. Features gesture detection using MediaPipe's 21-point hand-landmark model with Flask web interface.",
            category: "ai",
            technologies: ["Python", "OpenCV", "MediaPipe", "Flask", "PyAutoGUI"],
            year: "2025",
            github: "https://github.com/Pranava-M/Hand-Gesture-Volume-Control",
            demo: "#",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            featured: true
        },
        {
            id: "project-002",
            title: "Quantum-Secure Network Threat Analyzer",
            description: "Cybersecurity application for real-time packet monitoring and threat detection. Implements graph-based anomaly detection and post-quantum cryptography for secure data handling.",
            category: "cyber",
            technologies: ["Python", "DSA", "Graph Algorithms", "Hash Tables", "Cryptography"],
            year: "2025",
            github: "https://github.com/Pranava-M/Quantum-Secure-Network-Threat-Analyzer",
            demo: "#",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            featured: true
        }
    ]
};

// DOM Elements
const DOM = {
    // Navigation
    navbar: document.getElementById('navbar'),
    navMenu: document.getElementById('navMenu'),
    navToggle: document.getElementById('navToggle'),
    navLinks: document.querySelectorAll('.nav-link'),
    
    // Theme
    themeToggle: document.getElementById('themeToggle'),
    
    // User Menu
    userToggle: document.getElementById('userToggle'),
    
    // Quick Actions
    quickActions: document.querySelectorAll('.quick-action-btn'),
    
    // Sections
    sections: document.querySelectorAll('section[id]'),
    
    // Scroll to Top
    scrollTop: document.getElementById('scrollTop'),
    
    // Floating Actions
    floatingBtn: document.getElementById('mainFloatingBtn'),
    
    // Modals
    modals: {
        certificate: document.getElementById('certificateModal'),
        event: document.getElementById('eventModal'),
        memory: document.getElementById('memoryModal'),
        imagePreview: document.getElementById('imagePreviewModal')
    },
    
    // Forms
    forms: {
        certificate: document.getElementById('certificateForm'),
        event: document.getElementById('eventForm'),
        memory: document.getElementById('memoryForm'),
        contact: document.getElementById('contactForm')
    },
    
    // File Inputs
    fileInputs: {
        certificate: document.getElementById('certificateFile'),
        event: document.getElementById('eventImages'),
        memory: document.getElementById('memoryFiles')
    },
    
    // Containers
    certificatesGrid: document.getElementById('certificatesGrid'),
    eventsContainer: document.getElementById('eventsContainer'),
    memoriesGrid: document.getElementById('memoriesGrid'),
    projectsGrid: document.getElementById('projectsGrid'),
    
    // Statistics
    stats: {
        totalCertificates: document.getElementById('totalCertificates'),
        thisYearCertificates: document.getElementById('thisYearCertificates'),
        academicCertificates: document.getElementById('academicCertificates'),
        professionalCertificates: document.getElementById('professionalCertificates'),
        totalEvents: document.getElementById('totalEvents'),
        speakerEvents: document.getElementById('speakerEvents'),
        workshopEvents: document.getElementById('workshopEvents'),
        upcomingEvents: document.getElementById('upcomingEvents'),
        totalMemories: document.getElementById('totalMemories'),
        photosCount: document.getElementById('photosCount'),
        videosCount: document.getElementById('videosCount'),
        albumsCount: document.getElementById('albumsCount')
    }
};

// Application State
const STATE = {
    // Theme
    theme: localStorage.getItem('portfolio-theme') || 
           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    
    // Data Stores
    certificates: [],
    events: [],
    memories: [],
    projects: [],
    
    // UI State
    currentSection: 'home',
    isNavOpen: false,
    isModalOpen: false,
    currentFilter: 'all',
    currentSort: 'date-desc',
    
    // Image Preview State
    previewImages: [],
    currentImageIndex: 0,
    
    // Calendar State
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear()
};

// Initialize Application
class PortfolioSystem {
    constructor() {
        this.init();
    }

    async init() {
        try {
            // Initialize storage
            await this.initStorage();
            
            // Initialize UI
            this.initUI();
            
            // Initialize event listeners
            this.initEventListeners();
            
            // Load data
            await this.loadData();
            
            // Render all components
            this.renderAll();
            
            // Initialize animations
            this.initAnimations();
            
            // Show welcome message
            this.showNotification('🚀 Portfolio System Initialized Successfully!', 'success');
            
            if (CONFIG.debug) {
                console.log('Portfolio System Initialized:', {
                    version: CONFIG.version,
                    theme: STATE.theme,
                    certificates: STATE.certificates.length,
                    events: STATE.events.length,
                    memories: STATE.memories.length,
                    projects: STATE.projects.length
                });
            }
        } catch (error) {
            console.error('Failed to initialize portfolio system:', error);
            this.showNotification('❌ Failed to initialize portfolio system', 'error');
        }
    }

    // ===== STORAGE MANAGEMENT =====
    async initStorage() {
        // Check if storage is available
        if (!this.isStorageAvailable()) {
            this.showNotification('Storage is not available. Using default data.', 'warning');
            return;
        }

        // Initialize default data if storage is empty
        if (!localStorage.getItem(CONFIG.storageKeys.certificates)) {
            localStorage.setItem(CONFIG.storageKeys.certificates, JSON.stringify(CONFIG.defaultCertificates));
        }
        
        if (!localStorage.getItem(CONFIG.storageKeys.events)) {
            localStorage.setItem(CONFIG.storageKeys.events, JSON.stringify(CONFIG.defaultEvents));
        }
        
        if (!localStorage.getItem(CONFIG.storageKeys.memories)) {
            localStorage.setItem(CONFIG.storageKeys.memories, JSON.stringify(CONFIG.defaultMemories));
        }
        
        if (!localStorage.getItem(CONFIG.storageKeys.projects)) {
            localStorage.setItem(CONFIG.storageKeys.projects, JSON.stringify(CONFIG.defaultProjects));
        }
    }

    isStorageAvailable() {
        try {
            const test = '__storage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }

    async loadData() {
        try {
            STATE.certificates = JSON.parse(localStorage.getItem(CONFIG.storageKeys.certificates) || '[]');
            STATE.events = JSON.parse(localStorage.getItem(CONFIG.storageKeys.events) || '[]');
            STATE.memories = JSON.parse(localStorage.getItem(CONFIG.storageKeys.memories) || '[]');
            STATE.projects = JSON.parse(localStorage.getItem(CONFIG.storageKeys.projects) || '[]');
        } catch (error) {
            console.error('Error loading data:', error);
            this.showNotification('Error loading data', 'error');
        }
    }

    saveData(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving data:', error);
            this.showNotification('Error saving data', 'error');
            return false;
        }
    }

    // ===== UI INITIALIZATION =====
    initUI() {
        // Set theme
        document.documentElement.setAttribute('data-theme', STATE.theme);
        this.updateThemeIcon();
        
        // Initialize particles
        this.initParticles();
        
        // Initialize counters
        this.initCounters();
        
        // Initialize calendar
        this.initCalendar();
        
        // Initialize chart
        this.initSkillsChart();
    }

    initEventListeners() {
        // Navigation
        DOM.navToggle?.addEventListener('click', () => this.toggleNav());
        DOM.themeToggle?.addEventListener('click', () => this.toggleTheme());
        
        // Nav links
        DOM.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.getAttribute('data-section');
                this.scrollToSection(section);
                this.updateActiveNav(section);
                if (window.innerWidth < 768) {
                    this.toggleNav(false);
                }
            });
        });
        
        // Scroll events
        window.addEventListener('scroll', () => this.handleScroll());
        DOM.scrollTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        
        // Quick actions
        document.getElementById('quickUpload')?.addEventListener('click', () => this.openModal('certificate'));
        document.getElementById('quickAddEvent')?.addEventListener('click', () => this.openModal('event'));
        document.getElementById('quickAddMemory')?.addEventListener('click', () => this.openModal('memory'));
        document.getElementById('quickContact')?.addEventListener('click', () => this.scrollToSection('contact'));
        
        // Modal close buttons
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => this.closeAllModals());
        });
        
        // Form submissions
        DOM.forms.certificate?.addEventListener('submit', (e) => this.handleCertificateSubmit(e));
        DOM.forms.event?.addEventListener('submit', (e) => this.handleEventSubmit(e));
        DOM.forms.memory?.addEventListener('submit', (e) => this.handleMemorySubmit(e));
        DOM.forms.contact?.addEventListener('submit', (e) => this.handleContactSubmit(e));
        
        // File uploads
        this.initFileUploads();
        
        // Filter buttons
        this.initFilters();
        
        // Calendar navigation
        document.querySelector('.prev-month')?.addEventListener('click', () => this.changeMonth(-1));
        document.querySelector('.next-month')?.addEventListener('click', () => this.changeMonth(1));
        
        // Image preview navigation
        document.getElementById('prevImage')?.addEventListener('click', () => this.navigatePreview(-1));
        document.getElementById('nextImage')?.addEventListener('click', () => this.navigatePreview(1));
        
        // Close modal on outside click
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeAllModals();
            }
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
    }

    // ===== NAVIGATION =====
    toggleNav(force) {
        STATE.isNavOpen = force !== undefined ? force : !STATE.isNavOpen;
        DOM.navMenu.classList.toggle('active', STATE.isNavOpen);
        DOM.navToggle.classList.toggle('active', STATE.isNavOpen);
        
        if (STATE.isNavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    updateActiveNav(section) {
        DOM.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === section) {
                link.classList.add('active');
            }
        });
        STATE.currentSection = section;
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    handleScroll() {
        // Update navbar
        if (window.scrollY > 50) {
            DOM.navbar.classList.add('scrolled');
        } else {
            DOM.navbar.classList.remove('scrolled');
        }
        
        // Update scroll to top button
        if (window.scrollY > 500) {
            DOM.scrollTop.style.display = 'flex';
        } else {
            DOM.scrollTop.style.display = 'none';
        }
        
        // Update active navigation based on scroll position
        const scrollPosition = window.scrollY + 100;
        
        DOM.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.updateActiveNav(sectionId);
            }
        });
    }

    // ===== THEME MANAGEMENT =====
    toggleTheme() {
        STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', STATE.theme);
        localStorage.setItem('portfolio-theme', STATE.theme);
        this.updateThemeIcon();
        this.showNotification(`Theme changed to ${STATE.theme} mode`, 'info');
    }

    updateThemeIcon() {
        if (DOM.themeToggle) {
            const icon = DOM.themeToggle.querySelector('i');
            if (icon) {
                icon.className = STATE.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    }

    // ===== DATA MANAGEMENT =====
    // Certificates
    async addCertificate(certificateData) {
        const newCertificate = {
            id: `cert-${Date.now()}`,
            ...certificateData,
            createdAt: new Date().toISOString(),
            verified: false
        };
        
        STATE.certificates.unshift(newCertificate);
        const success = this.saveData(CONFIG.storageKeys.certificates, STATE.certificates);
        
        if (success) {
            this.renderCertificates();
            this.updateCertificateStats();
            this.showNotification('✅ Certificate uploaded successfully!', 'success');
            return newCertificate;
        }
        
        return null;
    }

    deleteCertificate(certificateId) {
        STATE.certificates = STATE.certificates.filter(cert => cert.id !== certificateId);
        const success = this.saveData(CONFIG.storageKeys.certificates, STATE.certificates);
        
        if (success) {
            this.renderCertificates();
            this.updateCertificateStats();
            this.showNotification('Certificate deleted successfully', 'info');
            return true;
        }
        
        return false;
    }

    // Events
    async addEvent(eventData) {
        const newEvent = {
            id: `event-${Date.now()}`,
            ...eventData,
            createdAt: new Date().toISOString()
        };
        
        STATE.events.unshift(newEvent);
        const success = this.saveData(CONFIG.storageKeys.events, STATE.events);
        
        if (success) {
            this.renderEvents();
            this.updateEventStats();
            this.updateCalendar();
            this.showNotification('✅ Event added successfully!', 'success');
            return newEvent;
        }
        
        return null;
    }

    deleteEvent(eventId) {
        STATE.events = STATE.events.filter(event => event.id !== eventId);
        const success = this.saveData(CONFIG.storageKeys.events, STATE.events);
        
        if (success) {
            this.renderEvents();
            this.updateEventStats();
            this.updateCalendar();
            this.showNotification('Event deleted successfully', 'info');
            return true;
        }
        
        return false;
    }

    // Memories
    async addMemory(memoryData) {
        const newMemory = {
            id: `memory-${Date.now()}`,
            ...memoryData,
            createdAt: new Date().toISOString()
        };
        
        STATE.memories.unshift(newMemory);
        const success = this.saveData(CONFIG.storageKeys.memories, STATE.memories);
        
        if (success) {
            this.renderMemories();
            this.updateMemoryStats();
            this.showNotification('✅ Memory added successfully!', 'success');
            return newMemory;
        }
        
        return null;
    }

    deleteMemory(memoryId) {
        STATE.memories = STATE.memories.filter(memory => memory.id !== memoryId);
        const success = this.saveData(CONFIG.storageKeys.memories, STATE.memories);
        
        if (success) {
            this.renderMemories();
            this.updateMemoryStats();
            this.showNotification('Memory deleted successfully', 'info');
            return true;
        }
        
        return false;
    }

    // ===== RENDERING =====
    renderAll() {
        this.renderCertificates();
        this.renderEvents();
        this.renderMemories();
        this.renderProjects();
        this.updateAllStats();
    }

    renderCertificates(filter = STATE.currentFilter, sort = STATE.currentSort) {
        if (!DOM.certificatesGrid) return;
        
        let filteredCertificates = STATE.certificates;
        
        // Apply filter
        if (filter !== 'all') {
            filteredCertificates = filteredCertificates.filter(cert => cert.category === filter);
        }
        
        // Apply sort
        filteredCertificates.sort((a, b) => {
            switch (sort) {
                case 'date-desc':
                    return new Date(b.date) - new Date(a.date);
                case 'date-asc':
                    return new Date(a.date) - new Date(b.date);
                case 'name-asc':
                    return a.title.localeCompare(b.title);
                case 'name-desc':
                    return b.title.localeCompare(a.title);
                default:
                    return new Date(b.date) - new Date(a.date);
            }
        });
        
        // Render certificates
        DOM.certificatesGrid.innerHTML = filteredCertificates.map(cert => `
            <div class="certificate-card" data-id="${cert.id}" data-category="${cert.category}">
                <div class="certificate-image">
                    <img src="${cert.image}" alt="${cert.title}" loading="lazy">
                    <span class="certificate-badge">${this.getCategoryLabel(cert.category)}</span>
                </div>
                <div class="certificate-content">
                    <div class="certificate-header">
                        <div>
                            <h3 class="certificate-title">${cert.title}</h3>
                            <p class="certificate-issuer">${cert.issuer}</p>
                        </div>
                        <span class="certificate-date">${this.formatDate(cert.date)}</span>
                    </div>
                    <p class="certificate-description">${cert.description}</p>
                    <div class="certificate-actions">
                        <a href="${cert.image}" target="_blank" class="certificate-action-btn view">
                            <i class="fas fa-eye"></i> View
                        </a>
                        <a href="${cert.image}" download class="certificate-action-btn download">
                            <i class="fas fa-download"></i> Download
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Add event listeners to certificate cards
        document.querySelectorAll('.certificate-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.certificate-action-btn')) {
                    const certificateId = card.getAttribute('data-id');
                    this.viewCertificate(certificateId);
                }
            });
        });
    }

    renderEvents() {
        if (!DOM.eventsContainer) return;
        
        // Sort events by date
        const sortedEvents = [...STATE.events].sort((a, b) => 
            new Date(a.startDate) - new Date(b.startDate)
        );
        
        // Separate upcoming and past events
        const now = new Date();
        const upcomingEvents = sortedEvents.filter(event => new Date(event.startDate) >= now);
        const pastEvents = sortedEvents.filter(event => new Date(event.startDate) < now);
        
        // Render upcoming events
        const upcomingHTML = upcomingEvents.map(event => this.createEventCard(event)).join('');
        const pastHTML = pastEvents.map(event => this.createEventCard(event)).join('');
        
        DOM.eventsContainer.innerHTML = `
            ${upcomingEvents.length > 0 ? `
                <div class="events-group">
                    <h4 class="events-group-title">Upcoming Events (${upcomingEvents.length})</h4>
                    ${upcomingHTML}
                </div>
            ` : ''}
            ${pastEvents.length > 0 ? `
                <div class="events-group">
                    <h4 class="events-group-title">Past Events (${pastEvents.length})</h4>
                    ${pastHTML}
                </div>
            ` : ''}
        `;
        
        // Add event listeners
        document.querySelectorAll('.event-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.event-action-btn')) {
                    const eventId = card.getAttribute('data-id');
                    this.viewEvent(eventId);
                }
            });
        });
    }

    createEventCard(event) {
        const eventDate = new Date(event.startDate);
        const now = new Date();
        const isUpcoming = eventDate >= now;
        
        return `
            <div class="event-card" data-id="${event.id}" data-status="${isUpcoming ? 'upcoming' : 'past'}">
                <div class="event-header">
                    <div class="event-date">
                        <div class="event-day">${eventDate.getDate()}</div>
                        <div class="event-month">${eventDate.toLocaleDateString('en-US', { month: 'short' })}</div>
                    </div>
                    <span class="event-type">${this.getEventTypeLabel(event.type)}</span>
                </div>
                <div class="event-content">
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-description">${event.description}</p>
                    <div class="event-details">
                        <div class="event-detail">
                            <i class="fas fa-clock"></i>
                            ${this.formatDateTime(event.startDate)}
                        </div>
                        <div class="event-detail">
                            <i class="fas fa-map-marker-alt"></i>
                            ${event.location || 'Virtual'}
                        </div>
                        <div class="event-detail">
                            <i class="fas fa-user-tag"></i>
                            ${this.getRoleLabel(event.role)}
                        </div>
                    </div>
                    <div class="event-actions">
                        <button class="event-action-btn view" title="View Details">
                            <i class="fas fa-eye"></i>
                        </button>
                        ${event.link ? `
                            <a href="${event.link}" target="_blank" class="event-action-btn link" title="Visit Website">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    renderMemories(filter = 'all') {
        if (!DOM.memoriesGrid) return;
        
        let filteredMemories = STATE.memories;
        
        // Apply filter
        if (filter !== 'all') {
            filteredMemories = filteredMemories.filter(memory => memory.category === filter);
        }
        
        // Sort by date (newest first)
        filteredMemories.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Render memories
        DOM.memoriesGrid.innerHTML = filteredMemories.map(memory => {
            const mainFile = memory.files[0];
            const isVideo = mainFile.type === 'video';
            
            return `
                <div class="memory-item" data-id="${memory.id}" data-category="${memory.category}">
                    ${isVideo ? `
                        <video muted loop>
                            <source src="${mainFile.url}" type="video/mp4">
                        </video>
                    ` : `
                        <img src="${mainFile.thumbnail || mainFile.url}" alt="${memory.title}" loading="lazy">
                    `}
                    <div class="memory-overlay">
                        <h4 class="memory-title">${memory.title}</h4>
                        <p class="memory-date">${this.formatDate(memory.date)}</p>
                    </div>
                    <span class="memory-type">${this.getCategoryLabel(memory.category)}</span>
                </div>
            `;
        }).join('');
        
        // Add event listeners
        document.querySelectorAll('.memory-item').forEach(item => {
            item.addEventListener('click', () => {
                const memoryId = item.getAttribute('data-id');
                this.viewMemory(memoryId);
            });
        });
    }

    renderProjects(filter = 'all') {
        if (!DOM.projectsGrid) return;
        
        let filteredProjects = STATE.projects;
        
        // Apply filter
        if (filter !== 'all') {
            filteredProjects = filteredProjects.filter(project => project.category === filter);
        }
        
        // Render projects
        DOM.projectsGrid.innerHTML = filteredProjects.map(project => `
            <div class="project-card" data-id="${project.id}" data-category="${project.category}">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    <span class="project-category">${this.getCategoryLabel(project.category)}</span>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" class="project-link github">
                            <i class="fab fa-github"></i> Code
                        </a>
                        <a href="${project.demo}" class="project-link demo">
                            <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ===== STATISTICS =====
    updateAllStats() {
        this.updateCertificateStats();
        this.updateEventStats();
        this.updateMemoryStats();
    }

    updateCertificateStats() {
        if (!DOM.stats.totalCertificates) return;
        
        const now = new Date();
        const currentYear = now.getFullYear();
        
        const total = STATE.certificates.length;
        const thisYear = STATE.certificates.filter(cert => {
            const certYear = new Date(cert.date).getFullYear();
            return certYear === currentYear;
        }).length;
        
        const academic = STATE.certificates.filter(cert => cert.category === 'academic').length;
        const professional = STATE.certificates.filter(cert => cert.category === 'professional').length;
        
        // Update counters with animation
        this.animateCounter(DOM.stats.totalCertificates, total);
        this.animateCounter(DOM.stats.thisYearCertificates, thisYear);
        this.animateCounter(DOM.stats.academicCertificates, academic);
        this.animateCounter(DOM.stats.professionalCertificates, professional);
    }

    updateEventStats() {
        if (!DOM.stats.totalEvents) return;
        
        const now = new Date();
        
        const total = STATE.events.length;
        const speaker = STATE.events.filter(event => event.role === 'speaker').length;
        const workshop = STATE.events.filter(event => event.type === 'workshop').length;
        const upcoming = STATE.events.filter(event => new Date(event.startDate) >= now).length;
        
        this.animateCounter(DOM.stats.totalEvents, total);
        this.animateCounter(DOM.stats.speakerEvents, speaker);
        this.animateCounter(DOM.stats.workshopEvents, workshop);
        this.animateCounter(DOM.stats.upcomingEvents, upcoming);
    }

    updateMemoryStats() {
        if (!DOM.stats.totalMemories) return;
        
        const total = STATE.memories.length;
        let photos = 0;
        let videos = 0;
        
        STATE.memories.forEach(memory => {
            memory.files.forEach(file => {
                if (file.type === 'image') photos++;
                if (file.type === 'video') videos++;
            });
        });
        
        const albums = [...new Set(STATE.memories.map(memory => memory.album))].length;
        
        this.animateCounter(DOM.stats.totalMemories, total);
        this.animateCounter(DOM.stats.photosCount, photos);
        this.animateCounter(DOM.stats.videosCount, videos);
        this.animateCounter(DOM.stats.albumsCount, albums);
    }

    // ===== CALENDAR =====
    initCalendar() {
        this.updateCalendar();
    }

    changeMonth(delta) {
        STATE.currentMonth += delta;
        
        if (STATE.currentMonth < 0) {
            STATE.currentMonth = 11;
            STATE.currentYear--;
        } else if (STATE.currentMonth > 11) {
            STATE.currentMonth = 0;
            STATE.currentYear++;
        }
        
        this.updateCalendar();
    }

    updateCalendar() {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        
        const calendarGrid = document.getElementById('calendarGrid');
        const currentMonthElement = document.getElementById('currentMonth');
        
        if (!calendarGrid || !currentMonthElement) return;
        
        // Update month display
        currentMonthElement.textContent = `${monthNames[STATE.currentMonth]} ${STATE.currentYear}`;
        
        // Get first day of month and total days
        const firstDay = new Date(STATE.currentYear, STATE.currentMonth, 1);
        const lastDay = new Date(STATE.currentYear, STATE.currentMonth + 1, 0);
        const totalDays = lastDay.getDate();
        const startingDay = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
        
        // Get events for this month
        const monthEvents = STATE.events.filter(event => {
            const eventDate = new Date(event.startDate);
            return eventDate.getMonth() === STATE.currentMonth && 
                   eventDate.getFullYear() === STATE.currentYear;
        });
        
        // Create calendar grid
        let calendarHTML = '';
        
        // Day headers
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayNames.forEach(day => {
            calendarHTML += `<div class="calendar-day header">${day}</div>`;
        });
        
        // Empty cells for days before the first day of the month
        for (let i = 0; i < startingDay; i++) {
            calendarHTML += '<div class="calendar-day empty"></div>';
        }
        
        // Days of the month
        const today = new Date();
        const isCurrentMonth = today.getMonth() === STATE.currentMonth && 
                              today.getFullYear() === STATE.currentYear;
        
        for (let day = 1; day <= totalDays; day++) {
            const date = new Date(STATE.currentYear, STATE.currentMonth, day);
            const hasEvents = monthEvents.some(event => 
                new Date(event.startDate).getDate() === day
            );
            
            const isToday = isCurrentMonth && day === today.getDate();
            const classes = ['calendar-day'];
            
            if (isToday) classes.push('current');
            if (hasEvents) classes.push('has-events');
            
            calendarHTML += `
                <div class="${classes.join(' ')}" data-date="${date.toISOString()}">
                    ${day}
                </div>
            `;
        }
        
        calendarGrid.innerHTML = calendarHTML;
        
        // Add click event to days with events
        document.querySelectorAll('.calendar-day.has-events').forEach(day => {
            day.addEventListener('click', () => {
                const date = new Date(day.getAttribute('data-date'));
                this.showEventsForDate(date);
            });
        });
    }

    // ===== FORM HANDLING =====
    async handleCertificateSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        try {
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Uploading...';
            
            // Get form data
            const formData = {
                title: document.getElementById('certificateTitle').value.trim(),
                issuer: document.getElementById('certificateIssuer').value.trim(),
                date: document.getElementById('certificateDate').value,
                category: document.getElementById('certificateCategory').value,
                credentialId: document.getElementById('certificateCredential').value.trim(),
                description: document.getElementById('certificateDescription').value.trim()
            };
            
            // Validate required fields
            if (!formData.title || !formData.issuer || !formData.date) {
                throw new Error('Please fill in all required fields');
            }
            
            // Handle file upload
            const fileInput = document.getElementById('certificateFile');
            if (!fileInput.files.length) {
                throw new Error('Please select a certificate file');
            }
            
            const file = fileInput.files[0];
            const imageUrl = await this.uploadFile(file);
            
            // Add certificate
            await this.addCertificate({
                ...formData,
                image: imageUrl
            });
            
            // Reset form and close modal
            form.reset();
            document.getElementById('certificatePreview').innerHTML = '';
            this.closeAllModals();
            
        } catch (error) {
            console.error('Error adding certificate:', error);
            this.showNotification(`❌ ${error.message}`, 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    }

    async handleEventSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        try {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Adding...';
            
            const formData = {
                title: document.getElementById('eventTitle').value.trim(),
                startDate: document.getElementById('eventStartDate').value,
                endDate: document.getElementById('eventEndDate').value,
                type: document.getElementById('eventType').value,
                role: document.getElementById('eventRole').value,
                location: document.getElementById('eventLocation').value.trim(),
                description: document.getElementById('eventDescription').value.trim(),
                link: document.getElementById('eventLink').value.trim()
            };
            
            if (!formData.title || !formData.startDate || !formData.endDate || !formData.description) {
                throw new Error('Please fill in all required fields');
            }
            
            // Handle image uploads
            const fileInput = document.getElementById('eventImages');
            const images = [];
            
            if (fileInput.files.length) {
                for (let i = 0; i < fileInput.files.length; i++) {
                    const imageUrl = await this.uploadFile(fileInput.files[i]);
                    images.push({
                        type: 'image',
                        url: imageUrl,
                        thumbnail: imageUrl
                    });
                }
            }
            
            await this.addEvent({
                ...formData,
                images
            });
            
            form.reset();
            document.getElementById('eventImagesPreview').innerHTML = '';
            this.closeAllModals();
            
        } catch (error) {
            console.error('Error adding event:', error);
            this.showNotification(`❌ ${error.message}`, 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    }

    async handleMemorySubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        try {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
            
            const formData = {
                title: document.getElementById('memoryTitle').value.trim(),
                date: document.getElementById('memoryDate').value,
                category: document.getElementById('memoryCategory').value,
                description: document.getElementById('memoryDescription').value.trim(),
                tags: document.getElementById('memoryTags').value.split(',').map(tag => tag.trim()).filter(tag => tag),
                album: 'General'
            };
            
            if (!formData.title || !formData.date) {
                throw new Error('Please fill in all required fields');
            }
            
            // Handle file uploads
            const fileInput = document.getElementById('memoryFiles');
            const files = [];
            
            if (!fileInput.files.length) {
                throw new Error('Please select at least one file');
            }
            
            for (let i = 0; i < fileInput.files.length; i++) {
                const file = fileInput.files[i];
                const fileUrl = await this.uploadFile(file);
                
                files.push({
                    type: file.type.startsWith('video') ? 'video' : 'image',
                    url: fileUrl,
                    thumbnail: fileUrl
                });
            }
            
            await this.addMemory({
                ...formData,
                files
            });
            
            form.reset();
            document.getElementById('memoryFilesPreview').innerHTML = '';
            this.closeAllModals();
            
        } catch (error) {
            console.error('Error adding memory:', error);
            this.showNotification(`❌ ${error.message}`, 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    }

    async handleContactSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        try {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            const formData = {
                name: document.getElementById('contactName').value.trim(),
                email: document.getElementById('contactEmail').value.trim(),
                subject: document.getElementById('contactSubject').value.trim(),
                message: document.getElementById('contactMessage').value.trim()
            };
            
            // Validate form
            const errors = this.validateContactForm(formData);
            if (errors.length > 0) {
                throw new Error(errors[0]);
            }
            
            // Simulate sending message (in a real app, you would send to a server)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            this.showNotification('✅ Message sent successfully! I will get back to you soon.', 'success');
            
            // Reset form
            form.reset();
            
            // Update statistics
            const messagesSent = parseInt(DOM.stats.messagesSent?.textContent || '0') + 1;
            if (DOM.stats.messagesSent) {
                DOM.stats.messagesSent.textContent = messagesSent;
            }
            
        } catch (error) {
            console.error('Error sending message:', error);
            this.showNotification(`❌ ${error.message}`, 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    }

    validateContactForm(formData) {
        const errors = [];
        
        if (!formData.name) errors.push('Name is required');
        if (!formData.email) errors.push('Email is required');
        if (!this.isValidEmail(formData.email)) errors.push('Please enter a valid email');
        if (!formData.subject) errors.push('Subject is required');
        if (!formData.message) errors.push('Message is required');
        if (formData.message.length < 10) errors.push('Message is too short');
        
        return errors;
    }

    // ===== FILE UPLOAD =====
    initFileUploads() {
        // Certificate file upload
        const certUploadArea = document.getElementById('certificateFileUpload');
        const certFileInput = document.getElementById('certificateFile');
        const certPreview = document.getElementById('certificatePreview');
        
        if (certUploadArea && certFileInput) {
            certUploadArea.addEventListener('click', () => certFileInput.click());
            certUploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                certUploadArea.style.borderColor = 'var(--primary)';
                certUploadArea.style.background = 'rgba(99, 102, 241, 0.05)';
            });
            certUploadArea.addEventListener('dragleave', () => {
                certUploadArea.style.borderColor = '';
                certUploadArea.style.background = '';
            });
            certUploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                certUploadArea.style.borderColor = '';
                certUploadArea.style.background = '';
                
                if (e.dataTransfer.files.length) {
                    certFileInput.files = e.dataTransfer.files;
                    this.handleFilePreview(certFileInput, certPreview);
                }
            });
            
            certFileInput.addEventListener('change', () => this.handleFilePreview(certFileInput, certPreview));
        }
        
        // Event images upload
        const eventUploadArea = document.getElementById('eventImagesUpload');
        const eventFileInput = document.getElementById('eventImages');
        const eventPreview = document.getElementById('eventImagesPreview');
        
        if (eventUploadArea && eventFileInput) {
            eventUploadArea.addEventListener('click', () => eventFileInput.click());
            eventFileInput.addEventListener('change', () => this.handleMultipleFilePreview(eventFileInput, eventPreview));
        }
        
        // Memory files upload
        const memoryUploadBox = document.getElementById('memoryUploadBox');
        const memoryFileInput = document.getElementById('memoryFiles');
        const memoryPreview = document.getElementById('memoryFilesPreview');
        
        if (memoryUploadBox && memoryFileInput) {
            memoryUploadBox.addEventListener('click', () => memoryFileInput.click());
            memoryFileInput.addEventListener('change', () => this.handleMultipleFilePreview(memoryFileInput, memoryPreview));
        }
    }

    handleFilePreview(fileInput, previewContainer) {
        if (!fileInput.files.length) return;
        
        const file = fileInput.files[0];
        const reader = new FileReader();
        
        reader.onload = (e) => {
            previewContainer.innerHTML = `
                <div class="preview-item">
                    <img src="${e.target.result}" alt="Preview">
                    <button class="preview-remove" onclick="this.parentElement.remove(); fileInput.value = '';">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        };
        
        reader.readAsDataURL(file);
    }

    handleMultipleFilePreview(fileInput, previewContainer) {
        if (!fileInput.files.length) return;
        
        previewContainer.innerHTML = '';
        
        Array.from(fileInput.files).forEach((file, index) => {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                const previewItem = document.createElement('div');
                previewItem.className = 'preview-item';
                previewItem.innerHTML = `
                    <img src="${e.target.result}" alt="Preview ${index + 1}">
                    <button class="preview-remove" onclick="this.parentElement.remove(); updateFileInput(${index})">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                
                previewContainer.appendChild(previewItem);
                
                // Add function to update file input
                window.updateFileInput = (removeIndex) => {
                    const dt = new DataTransfer();
                    Array.from(fileInput.files).forEach((file, idx) => {
                        if (idx !== removeIndex) {
                            dt.items.add(file);
                        }
                    });
                    fileInput.files = dt.files;
                };
            };
            
            reader.readAsDataURL(file);
        });
    }

    async uploadFile(file) {
        // In a real application, you would upload to a server
        // For now, we'll create a local URL
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.readAsDataURL(file);
        });
    }

    // ===== FILTERS =====
    initFilters() {
        // Certificate filters
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const filter = tab.getAttribute('data-filter');
                
                // Update active tab
                document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Update and render
                STATE.currentFilter = filter;
                this.renderCertificates(filter, STATE.currentSort);
            });
        });
        
        // Certificate sort
        document.getElementById('certificateSort')?.addEventListener('change', (e) => {
            STATE.currentSort = e.target.value;
            this.renderCertificates(STATE.currentFilter, STATE.currentSort);
        });
        
        // Memory categories
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-category');
                
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                this.renderMemories(category);
            });
        });
        
        // Project filters
        document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                this.renderProjects(filter);
            });
        });
    }

    // ===== MODALS =====
    openModal(modalName) {
        this.closeAllModals();
        
        const modal = DOM.modals[modalName];
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            STATE.isModalOpen = true;
            
            // Set default dates
            if (modalName === 'certificate' || modalName === 'memory') {
                const dateInput = modal.querySelector('input[type="date"]');
                if (dateInput) {
                    dateInput.value = new Date().toISOString().split('T')[0];
                }
            }
            
            if (modalName === 'event') {
                const now = new Date();
                const startDateInput = document.getElementById('eventStartDate');
                const endDateInput = document.getElementById('eventEndDate');
                
                if (startDateInput) {
                    startDateInput.value = this.formatDateTimeLocal(now);
                }
                
                if (endDateInput) {
                    const endDate = new Date(now.getTime() + 2 * 60 * 60 * 1000); // 2 hours later
                    endDateInput.value = this.formatDateTimeLocal(endDate);
                }
            }
        }
    }

    closeAllModals() {
        Object.values(DOM.modals).forEach(modal => {
            if (modal) {
                modal.style.display = 'none';
            }
        });
        document.body.style.overflow = '';
        STATE.isModalOpen = false;
    }

    // ===== VIEW FUNCTIONS =====
    viewCertificate(certificateId) {
        const certificate = STATE.certificates.find(c => c.id === certificateId);
        if (certificate) {
            STATE.previewImages = [certificate.image];
            STATE.currentImageIndex = 0;
            this.openImagePreview(certificate.title, certificate.date);
        }
    }

    viewEvent(eventId) {
        const event = STATE.events.find(e => e.id === eventId);
        if (event) {
            // Show event details in a modal or alert
            alert(`Event: ${event.title}\n\nDate: ${this.formatDateTime(event.startDate)}\nLocation: ${event.location || 'Virtual'}\n\n${event.description}`);
        }
    }

    viewMemory(memoryId) {
        const memory = STATE.memories.find(m => m.id === memoryId);
        if (memory && memory.files.length > 0) {
            STATE.previewImages = memory.files.map(file => file.url);
            STATE.currentImageIndex = 0;
            this.openImagePreview(memory.title, memory.date);
        }
    }

    openImagePreview(title, date) {
        const modal = DOM.modals.imagePreview;
        if (modal && STATE.previewImages.length > 0) {
            document.getElementById('previewImageTitle').textContent = title;
            document.getElementById('previewImageDate').textContent = this.formatDate(date);
            document.getElementById('previewImage').src = STATE.previewImages[STATE.currentImageIndex];
            
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            STATE.isModalOpen = true;
        }
    }

    navigatePreview(direction) {
        STATE.currentImageIndex += direction;
        
        if (STATE.currentImageIndex < 0) {
            STATE.currentImageIndex = STATE.previewImages.length - 1;
        } else if (STATE.currentImageIndex >= STATE.previewImages.length) {
            STATE.currentImageIndex = 0;
        }
        
        document.getElementById('previewImage').src = STATE.previewImages[STATE.currentImageIndex];
    }

    // ===== ANIMATIONS =====
    initAnimations() {
        // Initialize AOS if available
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100,
                delay: 100
            });
        }
        
        // Animate skill bars
        this.animateSkillBars();
        
        // Animate counters in hero section
        this.initCounters();
    }

    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = `${width}%`;
        });
    }

    initCounters() {
        const counters = document.querySelectorAll('.stat-number[data-count]');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            this.animateCounter(counter, target);
        });
    }

    animateCounter(element, target) {
        if (!element || isNaN(target)) return;
        
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (element.textContent.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
            }
        }, 30);
    }

    // ===== PARTICLES =====
    initParticles() {
        const container = document.getElementById('particles');
        if (!container) return;
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 5 + 2}px;
                height: ${Math.random() * 5 + 2}px;
                background: rgba(99, 102, 241, ${Math.random() * 0.3 + 0.1});
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: floatParticle ${Math.random() * 20 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            container.appendChild(particle);
        }
    }

    // ===== CHART =====
    initSkillsChart() {
        const canvas = document.getElementById('skillsChart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // Sample data
        const data = {
            labels: ['Python', 'Java', 'JavaScript', 'HTML/CSS', 'C', 'SQL'],
            datasets: [{
                data: [85, 75, 70, 90, 80, 75],
                backgroundColor: [
                    '#306998', // Python blue
                    '#f89820', // Java orange
                    '#f7df1e', // JavaScript yellow
                    '#e34c26', // HTML orange
                    '#00599c', // C blue
                    '#4479a1'  // SQL blue
                ],
                borderWidth: 2,
                borderColor: 'rgba(255, 255, 255, 0.1)'
            }]
        };
        
        new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: '#94a3b8',
                            font: {
                                family: "'Inter', sans-serif",
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        titleColor: '#f8fafc',
                        bodyColor: '#94a3b8',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 1
                    }
                },
                cutout: '70%'
            }
        });
    }

    // ===== UTILITY FUNCTIONS =====
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    formatDateTime(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    formatDateTimeLocal(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    getCategoryLabel(category) {
        const labels = {
            'academic': 'Academic',
            'professional': 'Professional',
            'online': 'Online Course',
            'workshop': 'Workshop',
            'competition': 'Competition',
            'ai': 'AI/ML',
            'web': 'Web Development',
            'mobile': 'Mobile Apps',
            'game': 'Games',
            'cyber': 'Cybersecurity',
            'events': 'Events',
            'projects': 'Projects',
            'team': 'Team',
            'travel': 'Travel',
            'achievements': 'Achievements',
            'personal': 'Personal'
        };
        
        return labels[category] || category;
    }

    getEventTypeLabel(type) {
        const labels = {
            'conference': 'Conference',
            'workshop': 'Workshop',
            'meetup': 'Meetup',
            'hackathon': 'Hackathon',
            'webinar': 'Webinar',
            'competition': 'Competition'
        };
        
        return labels[type] || type;
    }

    getRoleLabel(role) {
        const labels = {
            'attendee': 'Attendee',
            'speaker': 'Speaker',
            'organizer': 'Organizer',
            'volunteer': 'Volunteer',
            'participant': 'Participant'
        };
        
        return labels[role] || role;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // ===== NOTIFICATIONS =====
    showNotification(message, type = 'info') {
        const container = document.getElementById('notificationContainer');
        if (!container) return;
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        container.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
        
        // Close button
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        });
    }

    // ===== KEYBOARD SHORTCUTS =====
    handleKeyboardShortcuts(e) {
        // Don't trigger if user is typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        // Close modal with Escape
        if (e.key === 'Escape' && STATE.isModalOpen) {
            this.closeAllModals();
        }
        
        // Navigate preview with arrow keys
        if (STATE.isModalOpen && DOM.modals.imagePreview.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                this.navigatePreview(-1);
            } else if (e.key === 'ArrowRight') {
                this.navigatePreview(1);
            }
        }
        
        // Quick actions with numbers
        if (!STATE.isModalOpen) {
            switch (e.key) {
                case '1':
                    this.scrollToSection('home');
                    break;
                case '2':
                    this.scrollToSection('certificates');
                    break;
                case '3':
                    this.scrollToSection('events');
                    break;
                case '4':
                    this.scrollToSection('memories');
                    break;
                case '5':
                    this.scrollToSection('contact');
                    break;
                case 't':
                    this.toggleTheme();
                    break;
            }
        }
    }

    // ===== PUBLIC METHODS =====
    downloadResume() {
        this.showNotification('📄 Downloading resume...', 'info');
        
        // Simulate download
        setTimeout(() => {
            this.showNotification('✅ Resume downloaded successfully!', 'success');
            
            // Create and trigger download
            const resumeContent = `
                Pranav Machireddy - Resume
                
                Contact Information:
                Email: ${CONFIG.email}
                Phone: ${CONFIG.phone}
                GitHub: github.com/${CONFIG.github}
                LinkedIn: linkedin.com/in/${CONFIG.linkedin}
                
                Education:
                B.Tech in Computer Science & Engineering
                ${CONFIG.college} (${CONFIG.graduation})
                Current CGPA: ${CONFIG.cgpa}/10
                
                Skills:
                • Programming: Python, Java, JavaScript, C
                • Web Technologies: HTML5, CSS3, Flask, React.js
                • Tools: Git, VS Code, OpenCV, MediaPipe
                • Concepts: DSA, OOP, Computer Vision, AI/ML Basics
                
                Projects:
                1. Hand Gesture Volume Control - AI gesture recognition system
                2. Quantum-Secure Network Threat Analyzer - Cybersecurity tool
                3. Hospital Management System - Database application
                4. Flood-It Game - Java puzzle game
                
                Certifications:
                • C Programming Certification - Infotech Computers
                • Data Analytics Certification - Unified Certification
                
                Available for internships in Software Development, AI/ML, and Web Development.
            `;
            
            const blob = new Blob([resumeContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Pranav_Machireddy_Resume.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 1500);
    }

    showEventsForDate(date) {
        const events = STATE.events.filter(event => {
            const eventDate = new Date(event.startDate);
            return eventDate.toDateString() === date.toDateString();
        });
        
        if (events.length > 0) {
            let message = `Events on ${date.toLocaleDateString()}:\n\n`;
            events.forEach(event => {
                message += `• ${event.title} (${this.formatDateTime(event.startDate)})\n`;
            });
            alert(message);
        } else {
            this.showNotification('No events on this date', 'info');
        }
    }
}

// Global functions for HTML onclick attributes
window.scrollToSection = function(sectionId) {
    if (window.portfolioSystem) {
        window.portfolioSystem.scrollToSection(sectionId);
    }
};

window.downloadResume = function() {
    if (window.portfolioSystem) {
        window.portfolioSystem.downloadResume();
    }
};

window.openModal = function(modalName) {
    if (window.portfolioSystem) {
        window.portfolioSystem.openModal(modalName);
    }
};

// Initialize the portfolio system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioSystem = new PortfolioSystem();
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.portfolioSystem) {
            window.portfolioSystem.updateCalendar();
        }
        
        // Refresh AOS
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }, 250);
});

// Export for debugging
if (CONFIG.debug) {
    window.PortfolioDebug = {
        state: STATE,
        config: CONFIG,
        system: () => window.portfolioSystem
    };
}