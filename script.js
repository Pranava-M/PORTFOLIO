// ===== CONFIGURATION =====
const CONFIG = {
    name: "Pranav Machireddy",
    title: "Full-Stack Developer & AI Enthusiast",
    email: "machireddy12@gmail.com",
    phone: "+91 9177740126",
    location: "India",
    college: "Amrita Vishwa Vidyapeetham University",
    graduation: "2028",
    cgpa: "7.5",
    github: "https://github.com/Pranava-M",
    linkedin: "https://linkedin.com/in/pranav-machireddy-554163311",
    instagram: "https://instagram.com/p_r_a_n_a_v___m",
    githubUsername: "Pranava-M"
};

// ===== GLOBAL VARIABLES =====
let currentTheme = localStorage.getItem('theme') || 'dark';
let certificates = JSON.parse(localStorage.getItem('certificates')) || [];
let memories = JSON.parse(localStorage.getItem('memories')) || [];
let projects = JSON.parse(localStorage.getItem('projects')) || [];
let githubRepos = JSON.parse(localStorage.getItem('githubRepos')) || [];
let visitorCount = parseInt(localStorage.getItem('visitorCount')) || 0;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

async function initializeApp() {
    // Initialize theme
    initTheme();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize preloader
    initPreloader();
    
    // Initialize typing effect
    initTypingEffect();
    
    // Initialize animations
    initAnimations();
    
    // Initialize counters
    initCounters();
    
    // Initialize scroll events
    initScrollEvents();
    
    // Initialize forms
    initForms();
    
    // Initialize file upload
    initFileUpload();
    
    // Initialize filters
    initFilters();
    
    // Initialize visitor count
    updateVisitorCount();
    
    // Load data
    await loadData();
    
    // Show welcome notification
    setTimeout(() => {
        showNotification('Welcome!', 'Portfolio loaded successfully 🚀', 'success');
    }, 2000);
}

// ===== THEME MANAGEMENT =====
function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
    showNotification('Theme Changed', `Switched to ${currentTheme} mode`, 'success');
}

function updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ===== NAVIGATION =====
function initNavigation() {
    const navToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100;
        
        // Update navbar background
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        // Update scroll to top button
        const scrollTopBtn = document.getElementById('scrollTop');
        if (scrollTopBtn) {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        }
        
        // Update active nav link based on section
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ===== PRELOADER =====
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    const progressBar = document.getElementById('preloaderProgress');
    
    if (!preloader || !progressBar) return;
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress > 100) {
            progress = 100;
            clearInterval(interval);
            
            setTimeout(() => {
                preloader.classList.add('hidden');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 300);
        }
        progressBar.style.width = `${progress}%`;
    }, 100);
}

// ===== TYPING EFFECT =====
function initTypingEffect() {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;
    
    const words = [
        'Full-Stack Developer',
        'AI/ML Enthusiast',
        'Cybersecurity Researcher',
        'Python Developer',
        'Web Developer',
        'Problem Solver'
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isPaused) {
            setTimeout(() => {
                isPaused = false;
                type();
            }, 1500);
            return;
        }
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentWord.length) {
            isPaused = true;
            isDeleting = true;
            typeSpeed = 1500;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    setTimeout(type, 1000);
}

// ===== ANIMATIONS =====
function initAnimations() {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            delay: 100,
            easing: 'ease-out-cubic'
        });
    }
    
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-level, .skill-progress');
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level') || bar.getAttribute('data-width') || '0';
        setTimeout(() => {
            bar.style.width = `${level}%`;
        }, 500);
    });
    
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, delay);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
}

// ===== COUNTERS =====
function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = target / 100;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target + (counter.textContent.includes('+') ? '+' : '');
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCount();
                observer.unobserve(counter);
            }
        });
        
        observer.observe(counter);
    });
}

// ===== SCROLL EVENTS =====
function initScrollEvents() {
    // Scroll to top
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ===== FORMS =====
function initForms() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                timestamp: new Date().toISOString()
            };
            
            // Save message to localStorage
            const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
            messages.push(formData);
            localStorage.setItem('contactMessages', JSON.stringify(messages));
            
            // Create mailto link
            const mailtoLink = `mailto:${CONFIG.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
            )}`;
            
            // Open email client
            window.open(mailtoLink, '_blank');
            
            // Show success message
            showNotification('Message Ready', 'Your email client will open with the message', 'success');
            
            // Reset form
            contactForm.reset();
            document.getElementById('attachmentName').textContent = 'No file chosen';
        });
    }
    
    // Newsletter form
    const newsletterBtn = document.querySelector('.newsletter-form button');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', subscribeNewsletter);
    }
    
    // File attachment
    const attachmentInput = document.getElementById('attachment');
    const attachmentName = document.getElementById('attachmentName');
    
    if (attachmentInput && attachmentName) {
        attachmentInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                const file = this.files[0];
                const fileSize = (file.size / (1024 * 1024)).toFixed(2);
                attachmentName.textContent = `${file.name} (${fileSize} MB)`;
            } else {
                attachmentName.textContent = 'No file chosen';
            }
        });
    }
}

function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value.trim();
    
    if (!email || !validateEmail(email)) {
        showNotification('Invalid Email', 'Please enter a valid email address', 'error');
        return;
    }
    
    // Save subscription to localStorage
    const subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions')) || [];
    if (!subscriptions.includes(email)) {
        subscriptions.push(email);
        localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));
        
        showNotification('Subscribed!', 'You have been added to the newsletter', 'success');
        emailInput.value = '';
        
        // Send to server (simulated)
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                subject: 'Newsletter Subscription',
                message: 'New newsletter subscription'
            })
        });
    } else {
        showNotification('Already Subscribed', 'This email is already subscribed', 'info');
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== FILE UPLOAD =====
function initFileUpload() {
    const certificateUploadArea = document.getElementById('certificateUploadArea');
    const certificateFileInput = document.getElementById('certificateFile');
    const certificateFileInfo = document.getElementById('certificateFileInfo');
    
    if (certificateUploadArea && certificateFileInput) {
        // Click to upload
        certificateUploadArea.addEventListener('click', () => {
            certificateFileInput.click();
        });
        
        // Drag and drop
        certificateUploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            certificateUploadArea.style.borderColor = 'var(--primary)';
            certificateUploadArea.style.background = 'rgba(99, 102, 241, 0.05)';
        });
        
        certificateUploadArea.addEventListener('dragleave', () => {
            certificateUploadArea.style.borderColor = 'var(--gray)';
            certificateUploadArea.style.background = 'var(--darker)';
        });
        
        certificateUploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            certificateUploadArea.style.borderColor = 'var(--gray)';
            certificateUploadArea.style.background = 'var(--darker)';
            
            if (e.dataTransfer.files.length) {
                certificateFileInput.files = e.dataTransfer.files;
                handleCertificateUpload(e.dataTransfer.files);
            }
        });
        
        // File selection
        certificateFileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                handleCertificateUpload(Array.from(this.files));
            }
        });
    }
}

async function handleCertificateUpload(files) {
    const fileInfo = document.getElementById('certificateFileInfo');
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    
    const validFiles = Array.from(files).filter(file => {
        if (file.size > maxSize) {
            showNotification('File Too Large', `${file.name} is larger than 10MB`, 'error');
            return false;
        }
        
        if (!allowedTypes.includes(file.type)) {
            showNotification('Invalid File Type', `${file.name} is not a JPG, PNG, or PDF file`, 'error');
            return false;
        }
        
        return true;
    });
    
    if (validFiles.length === 0) return;
    
    fileInfo.textContent = `${validFiles.length} file(s) selected`;
    
    // Simulate upload process
    showNotification('Uploading...', `Processing ${validFiles.length} certificate(s)`, 'info');
    
    // Process each file
    for (const file of validFiles) {
        await processCertificateFile(file);
    }
    
    // Update UI
    updateCertificateStats();
    renderCertificates();
    
    showNotification('Upload Complete', `${validFiles.length} certificate(s) uploaded successfully`, 'success');
    fileInfo.textContent = 'No files chosen';
    
    // Reset file input
    document.getElementById('certificateFile').value = '';
}

function processCertificateFile(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const certificate = {
                id: Date.now() + Math.random(),
                name: file.name.replace(/\.[^/.]+$/, ""), // Remove extension
                fileName: file.name,
                dataUrl: e.target.result,
                size: file.size,
                type: file.type,
                uploaded: new Date().toISOString(),
                category: 'professional' // Default category
            };
            
            certificates.push(certificate);
            localStorage.setItem('certificates', JSON.stringify(certificates));
            resolve();
        };
        
        reader.readAsDataURL(file);
    });
}

// ===== FILTERS =====
function initFilters() {
    // Project filters
    const projectFilters = document.querySelectorAll('.project-filters .filter-btn');
    projectFilters.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            projectFilters.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            filterProjects(filterValue);
        });
    });
    
    // Certificate filters
    const certificateFilters = document.querySelectorAll('.certificates-filters .filter-btn');
    certificateFilters.forEach(button => {
        button.addEventListener('click', () => {
            certificateFilters.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            filterCertificates(filterValue);
        });
    });
    
    // Memory filters
    const memoryFilters = document.querySelectorAll('.memories-filters .filter-btn');
    memoryFilters.forEach(button => {
        button.addEventListener('click', () => {
            memoryFilters.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            filterMemories(filterValue);
        });
    });
    
    // GitHub search
    const githubSearch = document.getElementById('githubSearch');
    if (githubSearch) {
        githubSearch.addEventListener('input', () => {
            filterGitHubRepos();
        });
    }
    
    // GitHub sort
    const githubSort = document.getElementById('githubSort');
    if (githubSort) {
        githubSort.addEventListener('change', () => {
            filterGitHubRepos();
        });
    }
}

function filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const projectCategory = card.getAttribute('data-category');
        
        if (filter === 'all' || projectCategory === filter) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

function filterCertificates(filter) {
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    certificateCards.forEach(card => {
        const certificateCategory = card.getAttribute('data-category');
        
        if (filter === 'all' || certificateCategory === filter) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

function filterMemories(filter) {
    const memoryCards = document.querySelectorAll('.memory-card');
    
    memoryCards.forEach(card => {
        const memoryCategory = card.getAttribute('data-category');
        
        if (filter === 'all' || memoryCategory === filter) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

function filterGitHubRepos() {
    const searchTerm = document.getElementById('githubSearch').value.toLowerCase();
    const sortBy = document.getElementById('githubSort').value;
    const repoCards = document.querySelectorAll('.github-repo-card');
    
    let filteredRepos = Array.from(repoCards);
    
    // Filter by search term
    if (searchTerm) {
        filteredRepos = filteredRepos.filter(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.repo-description').textContent.toLowerCase();
            return title.includes(searchTerm) || description.includes(searchTerm);
        });
    }
    
    // Sort repos
    filteredRepos.sort((a, b) => {
        switch(sortBy) {
            case 'stars':
                const starsA = parseInt(a.querySelector('.repo-stars').textContent);
                const starsB = parseInt(b.querySelector('.repo-stars').textContent);
                return starsB - starsA;
            case 'forks':
                const forksA = parseInt(a.querySelector('.repo-forks')?.textContent || '0');
                const forksB = parseInt(b.querySelector('.repo-forks')?.textContent || '0');
                return forksB - forksA;
            case 'name':
                const nameA = a.querySelector('h3').textContent.toLowerCase();
                const nameB = b.querySelector('h3').textContent.toLowerCase();
                return nameA.localeCompare(nameB);
            case 'updated':
            default:
                return 0; // Already sorted by update time from API
        }
    });
    
    // Hide all repos
    repoCards.forEach(card => {
        card.style.display = 'none';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });
    
    // Show filtered repos with animation
    filteredRepos.forEach((card, index) => {
        setTimeout(() => {
            card.style.display = 'block';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// ===== DATA MANAGEMENT =====
async function loadData() {
    // Load certificates
    certificates = JSON.parse(localStorage.getItem('certificates')) || [];
    updateCertificateStats();
    renderCertificates();
    
    // Load memories
    memories = JSON.parse(localStorage.getItem('memories')) || [];
    updateMemoryStats();
    renderMemories();
    
    // Load projects
    projects = JSON.parse(localStorage.getItem('projects')) || [];
    renderProjects();
    
    // Load GitHub repos
    await loadGitHubRepos();
    
    // Load sample data if empty
    if (certificates.length === 0) {
        loadSampleCertificates();
    }
    
    if (memories.length === 0) {
        loadSampleMemories();
    }
    
    if (projects.length === 0) {
        loadSampleProjects();
    }
}

function updateCertificateStats() {
    const certCount = document.getElementById('certCount');
    const certThisYear = document.getElementById('certThisYear');
    const certAcademic = document.getElementById('certAcademic');
    const certProfessional = document.getElementById('certProfessional');
    
    if (certCount) {
        certCount.textContent = certificates.length;
    }
    
    const currentYear = new Date().getFullYear();
    const thisYearCount = certificates.filter(cert => {
        const certDate = new Date(cert.uploaded);
        return certDate.getFullYear() === currentYear;
    }).length;
    
    if (certThisYear) {
        certThisYear.textContent = thisYearCount;
    }
    
    // Count by category (you need to add category property to certificates)
    const academicCount = certificates.filter(cert => cert.category === 'academic').length;
    const professionalCount = certificates.filter(cert => cert.category === 'professional').length;
    
    if (certAcademic) {
        certAcademic.textContent = academicCount;
    }
    
    if (certProfessional) {
        certProfessional.textContent = professionalCount;
    }
}

function updateMemoryStats() {
    const memoryCount = document.getElementById('memoryCount');
    const photoCount = document.getElementById('photoCount');
    const videoCount = document.getElementById('videoCount');
    const albumCount = document.getElementById('albumCount');
    
    if (memoryCount) {
        memoryCount.textContent = memories.length;
    }
    
    // Count photos and videos (you need to add type property to memories)
    const photos = memories.filter(memory => memory.type === 'photo').length;
    const videos = memories.filter(memory => memory.type === 'video').length;
    const albums = new Set(memories.map(memory => memory.album)).size;
    
    if (photoCount) {
        photoCount.textContent = photos;
    }
    
    if (videoCount) {
        videoCount.textContent = videos;
    }
    
    if (albumCount) {
        albumCount.textContent = albums;
    }
}

function updateVisitorCount() {
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    
    const visitorCountElement = document.getElementById('visitorCount');
    if (visitorCountElement) {
        visitorCountElement.textContent = visitorCount;
    }
}

// ===== RENDER FUNCTIONS =====
function renderCertificates() {
    const certificatesGrid = document.getElementById('certificatesGrid');
    if (!certificatesGrid) return;
    
    certificatesGrid.innerHTML = '';
    
    certificates.forEach(certificate => {
        const card = document.createElement('div');
        card.className = 'certificate-card fade-in';
        card.setAttribute('data-category', certificate.category || 'professional');
        
        const date = new Date(certificate.uploaded).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        
        card.innerHTML = `
            <div class="certificate-preview">
                <img src="${certificate.dataUrl}" alt="${certificate.name}" onerror="this.src='https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'">
                <div class="preview-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="certificate-header">
                <h3>${certificate.name}</h3>
                <span class="certificate-date">${date}</span>
            </div>
            <div class="certificate-issuer">
                <i class="fas fa-university"></i>
                <span>${certificate.issuer || 'Professional Certification'}</span>
            </div>
            <p class="certificate-description">${certificate.description || 'Professional certification demonstrating skills and knowledge.'}</p>
            <div class="certificate-actions">
                <button class="btn btn-sm" onclick="viewCertificate('${certificate.id}')">
                    <i class="fas fa-eye"></i> View
                </button>
                <button class="btn btn-sm btn-outline" onclick="downloadCertificate('${certificate.id}')">
                    <i class="fas fa-download"></i> Download
                </button>
                <button class="btn btn-sm btn-outline" onclick="deleteCertificate('${certificate.id}')">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
        
        certificatesGrid.appendChild(card);
    });
}

function renderMemories() {
    const memoriesGrid = document.getElementById('memoriesGrid');
    if (!memoriesGrid) return;
    
    memoriesGrid.innerHTML = '';
    
    memories.forEach(memory => {
        const card = document.createElement('div');
        card.className = 'memory-card fade-in';
        card.setAttribute('data-category', memory.category || 'general');
        
        card.innerHTML = `
            <div class="memory-image">
                <img src="${memory.imageUrl}" alt="${memory.title}" onerror="this.src='https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'">
                <div class="memory-overlay">
                    <h3>${memory.title}</h3>
                    <p>${memory.date || new Date().getFullYear()}</p>
                </div>
            </div>
            <div class="memory-content">
                <h3>${memory.title}</h3>
                <p>${memory.date || new Date().getFullYear()} • ${memory.category || 'General'}</p>
            </div>
        `;
        
        memoriesGrid.appendChild(card);
    });
}

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card fade-in';
        card.setAttribute('data-category', project.category || 'web');
        
        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image || 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}" alt="${project.title}">
                <div class="project-overlay">
                    <div class="overlay-content">
                        <h3>${project.title}</h3>
                        <p>${project.description || 'A professional project showcasing skills and expertise.'}</p>
                        <div class="project-technologies">
                            ${(project.technologies || ['HTML', 'CSS', 'JavaScript']).map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <span class="project-category">${(project.category || 'WEB').toUpperCase()}</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-year">${project.year || new Date().getFullYear()}</p>
                <div class="project-actions">
                    <a href="${project.githubUrl || '#'}" target="_blank" rel="noopener" class="btn btn-sm">
                        <i class="fab fa-github"></i> View Code
                    </a>
                    <button type="button" class="btn btn-sm btn-outline" onclick="viewProject('${project.id}')" title="View Project Details">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });
}

async function loadGitHubRepos() {
    const loadingElement = document.getElementById('githubLoading');
    const reposGrid = document.getElementById('githubReposGrid');
    
    if (!reposGrid) return;
    
    // Show loading state
    if (loadingElement) loadingElement.style.display = 'block';
    reposGrid.innerHTML = '';
    
    try {
        // Check cache first
        const cachedRepos = localStorage.getItem('githubRepos');
        const cacheTime = localStorage.getItem('githubReposCacheTime');
        const oneHour = 60 * 60 * 1000;
        
        if (cachedRepos && cacheTime && (Date.now() - cacheTime) < oneHour) {
            githubRepos = JSON.parse(cachedRepos);
        } else {
            // Fetch from GitHub API
            const response = await fetch(`https://api.github.com/users/${CONFIG.githubUsername}/repos?sort=updated&per_page=100`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch GitHub repositories');
            }
            
            githubRepos = await response.json();
            
            // Cache the results
            localStorage.setItem('githubRepos', JSON.stringify(githubRepos));
            localStorage.setItem('githubReposCacheTime', Date.now());
        }
        
        // Update stats
        updateGitHubStats();
        
        // Render repos
        renderGitHubRepos();
        
    } catch (error) {
        console.error('Error loading GitHub repos:', error);
        showNotification('GitHub Error', 'Could not load repositories. Using cached data.', 'error');
        
        // Try to use cached data if available
        const cachedRepos = localStorage.getItem('githubRepos');
        if (cachedRepos) {
            githubRepos = JSON.parse(cachedRepos);
            renderGitHubRepos();
        }
    } finally {
        if (loadingElement) loadingElement.style.display = 'none';
    }
}

function updateGitHubStats() {
    const reposCount = document.getElementById('githubReposCount');
    const starsCount = document.getElementById('githubStarsCount');
    const forksCount = document.getElementById('githubForksCount');
    const languagesCount = document.getElementById('githubLanguagesCount');
    
    if (reposCount) {
        reposCount.textContent = githubRepos.length;
    }
    
    if (starsCount) {
        const totalStars = githubRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        starsCount.textContent = totalStars;
    }
    
    if (forksCount) {
        const totalForks = githubRepos.reduce((sum, repo) => sum + repo.forks_count, 0);
        forksCount.textContent = totalForks;
    }
    
    if (languagesCount) {
        const languages = new Set();
        githubRepos.forEach(repo => {
            if (repo.language) languages.add(repo.language);
        });
        languagesCount.textContent = languages.size;
    }
}

function renderGitHubRepos() {
    const reposGrid = document.getElementById('githubReposGrid');
    if (!reposGrid) return;
    
    reposGrid.innerHTML = '';
    
    githubRepos.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'github-repo-card fade-in';
        
        const updatedDate = new Date(repo.updated_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        
        // Determine language color
        const languageColors = {
            'JavaScript': '#f1e05a',
            'TypeScript': '#2b7489',
            'Python': '#3572A5',
            'Java': '#b07219',
            'HTML': '#e34c26',
            'CSS': '#563d7c',
            'PHP': '#4F5D95',
            'Ruby': '#701516',
            'C++': '#f34b7d',
            'C#': '#178600',
            'Go': '#00ADD8',
            'Rust': '#dea584',
            'Kotlin': '#F18E33',
            'Swift': '#ffac45'
        };
        
        const languageColor = languageColors[repo.language] || '#6366f1';
        
        card.innerHTML = `
            <div class="repo-header">
                <h3>${repo.name}</h3>
                <div class="repo-stars">
                    <i class="fas fa-star"></i>
                    <span>${repo.stargazers_count}</span>
                </div>
            </div>
            <p class="repo-description">${repo.description || 'No description available.'}</p>
            <div class="repo-footer">
                <div class="repo-language">
                    <div class="language-color" style="background: ${languageColor}"></div>
                    <span class="language-name">${repo.language || 'Not specified'}</span>
                </div>
                <div class="repo-actions">
                    <a href="${repo.html_url}" target="_blank" rel="noopener" class="btn btn-sm">
                        <i class="fas fa-code"></i> Code
                    </a>
                    ${repo.homepage ? `
                    <a href="${repo.homepage}" target="_blank" rel="noopener" class="btn btn-sm btn-outline">
                        <i class="fas fa-external-link-alt"></i> Live
                    </a>
                    ` : ''}
                </div>
            </div>
        `;
        
        reposGrid.appendChild(card);
    });
}

// ===== SAMPLE DATA =====
function loadSampleCertificates() {
    const sampleCertificates = [
        {
            id: 'cert1',
            name: 'Web Development Fundamentals',
            issuer: 'Personal Projects Portfolio',
            description: 'HTML5, CSS3, JavaScript, and responsive web design skills showcased through multiple projects.',
            category: 'professional',
            uploaded: '2024-09-10T00:00:00.000Z'
        },
        {
            id: 'cert2',
            name: 'Python for Data Science',
            issuer: 'Self-Learning Projects',
            description: 'Advanced Python skills demonstrated through 15+ projects including AI, computer vision, and web applications.',
            category: 'professional',
            uploaded: '2024-08-20T00:00:00.000Z'
        },
        {
            id: 'cert3',
            name: 'C Programming Certification',
            issuer: 'Infotech Computers',
            description: 'Comprehensive C programming course covering fundamentals, data structures, algorithms, and problem-solving techniques.',
            category: 'academic',
            uploaded: '2024-01-15T00:00:00.000Z'
        }
    ];
    
    sampleCertificates.forEach(cert => {
        if (!certificates.find(c => c.id === cert.id)) {
            certificates.push(cert);
        }
    });
    
    localStorage.setItem('certificates', JSON.stringify(certificates));
    updateCertificateStats();
    renderCertificates();
}

function loadSampleMemories() {
    const sampleMemories = [
        {
            id: 'mem1',
            title: 'Project Completion',
            date: '2024',
            category: 'projects',
            imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'mem2',
            title: 'Team Collaboration',
            date: '2024',
            category: 'events',
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'mem3',
            title: 'Certificate Award',
            date: '2024',
            category: 'achievements',
            imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'mem4',
            title: 'Workshop Participation',
            date: '2024',
            category: 'events',
            imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
    ];
    
    sampleMemories.forEach(memory => {
        if (!memories.find(m => m.id === memory.id)) {
            memories.push(memory);
        }
    });
    
    localStorage.setItem('memories', JSON.stringify(memories));
    updateMemoryStats();
    renderMemories();
}

function loadSampleProjects() {
    const sampleProjects = [
        {
            id: 'proj1',
            title: 'Hand Gesture Volume Control',
            description: 'AI-powered real-time hand gesture recognition system using webcam',
            year: '2025',
            category: 'ai',
            technologies: ['Python', 'OpenCV', 'MediaPipe', 'Flask'],
            githubUrl: 'https://github.com/Pranava-M/portfolio',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'proj2',
            title: 'Quantum-Secure Network Analyzer',
            description: 'Cybersecurity application for real-time packet monitoring and threat detection',
            year: '2025',
            category: 'cyber',
            technologies: ['Python', 'DSA', 'Graph Algorithms', 'Cryptography'],
            githubUrl: 'https://github.com/Pranava-M/Quantum-Secure-Network-Threat-Analyzer',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'proj3',
            title: 'Hospital Management System',
            description: 'Complete hospital management solution with patient records and scheduling',
            year: '2024',
            category: 'web',
            technologies: ['Java', 'SQL', 'Swing', 'Database'],
            githubUrl: 'https://github.com/Pranava-M/Hospital_mangemnet_system',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'proj4',
            title: 'Portfolio Website v3.0',
            description: 'Advanced portfolio website with file storage system and admin dashboard',
            year: '2024',
            category: 'web',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'File API'],
            githubUrl: 'https://github.com/Pranava-M/portfolio',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
    ];
    
    sampleProjects.forEach(project => {
        if (!projects.find(p => p.id === project.id)) {
            projects.push(project);
        }
    });
    
    localStorage.setItem('projects', JSON.stringify(projects));
    renderProjects();
}

// ===== UTILITY FUNCTIONS =====
function showNotification(title, message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    if (!container) return;
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-${icons[type] || 'info-circle'}"></i>
        </div>
        <div class="notification-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function showModal(title, content) {
    const container = document.getElementById('modalContainer');
    if (!container) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;
    
    container.appendChild(modal);
    
    // Show modal
    setTimeout(() => modal.classList.add('active'), 10);
    
    // Close button functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    });
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    });
}

// ===== CERTIFICATE FUNCTIONS =====
function viewCertificate(id) {
    const certificate = certificates.find(c => c.id === id);
    if (!certificate) return;
    
    const date = new Date(certificate.uploaded).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const content = `
        <img src="${certificate.dataUrl}" alt="${certificate.name}" class="modal-image" onerror="this.src='https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'">
        <div class="modal-details">
            <h4>${certificate.name}</h4>
            <p><strong>Issuer:</strong> ${certificate.issuer || 'Professional Certification'}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Category:</strong> ${certificate.category || 'Professional'}</p>
            <p><strong>Description:</strong> ${certificate.description || 'Professional certification demonstrating skills and knowledge.'}</p>
        </div>
    `;
    
    showModal(certificate.name, content);
}

function downloadCertificate(id) {
    const certificate = certificates.find(c => c.id === id);
    if (!certificate) return;
    
    showNotification('Download Started', 'Preparing certificate for download...', 'info');
    
    // Create a temporary link to download the data URL
    const link = document.createElement('a');
    link.href = certificate.dataUrl;
    link.download = certificate.fileName || `certificate-${id}.${certificate.type.split('/')[1]}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => {
        showNotification('Download Complete', 'Certificate downloaded successfully', 'success');
    }, 1000);
}

function deleteCertificate(id) {
    if (confirm('Are you sure you want to delete this certificate?')) {
        certificates = certificates.filter(c => c.id !== id);
        localStorage.setItem('certificates', JSON.stringify(certificates));
        
        updateCertificateStats();
        renderCertificates();
        
        showNotification('Certificate Deleted', 'Certificate has been removed', 'success');
    }
}

// ===== PROJECT FUNCTIONS =====
function viewProject(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;
    
    const content = `
        <img src="${project.image || 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}" alt="${project.title}" class="modal-image">
        <div class="modal-details">
            <h4>${project.title}</h4>
            <p><strong>Year:</strong> ${project.year || new Date().getFullYear()}</p>
            <p><strong>Category:</strong> ${project.category || 'Web Development'}</p>
            <p><strong>Description:</strong> ${project.description || 'A professional project showcasing skills and expertise.'}</p>
            <p><strong>Technologies:</strong> ${(project.technologies || ['HTML', 'CSS', 'JavaScript']).join(', ')}</p>
            ${project.githubUrl ? `<p><strong>GitHub:</strong> <a href="${project.githubUrl}" target="_blank">View Repository</a></p>` : ''}
        </div>
    `;
    
    showModal(project.title, content);
}

// ===== MEMORY FUNCTIONS =====
function uploadMemory() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,video/*';
    input.multiple = true;
    
    input.onchange = function(e) {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            showNotification('Uploading Memories', `Processing ${files.length} file(s)...`, 'info');
            
            // Process files
            files.forEach((file, index) => {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    const memory = {
                        id: Date.now() + index,
                        title: file.name.replace(/\.[^/.]+$/, ""),
                        date: new Date().getFullYear().toString(),
                        category: 'general',
                        type: file.type.startsWith('video') ? 'video' : 'photo',
                        imageUrl: e.target.result,
                        uploaded: new Date().toISOString()
                    };
                    
                    memories.push(memory);
                    localStorage.setItem('memories', JSON.stringify(memories));
                    
                    if (index === files.length - 1) {
                        updateMemoryStats();
                        renderMemories();
                        showNotification('Upload Complete', `${files.length} memory(s) added successfully`, 'success');
                    }
                };
                
                reader.readAsDataURL(file);
            });
        }
    };
    
    input.click();
}

function createAlbum() {
    const albumName = prompt('Enter album name:');
    if (albumName && albumName.trim()) {
        showNotification('Album Created', `"${albumName}" album created successfully`, 'success');
        // In a real app, this would create an album structure
    }
}

// ===== EXPORT FUNCTIONS =====
function downloadResume() {
    const resumeContent = `
        ================================
        PRANAV MACHIREDDY - RESUME
        ================================
        
        CONTACT INFORMATION
        -------------------
        Email: ${CONFIG.email}
        Phone: ${CONFIG.phone}
        GitHub: ${CONFIG.github}
        LinkedIn: ${CONFIG.linkedin}
        Instagram: ${CONFIG.instagram}
        
        EDUCATION
        ---------
        B.Tech in Computer Science & Engineering
        ${CONFIG.college} (${CONFIG.graduation})
        Current CGPA: ${CONFIG.cgpa}/10
        
        TECHNICAL SKILLS
        ----------------
        • Programming: Python, Java, JavaScript, C
        • Web Technologies: HTML5, CSS3, React.js, Node.js
        • Databases: MySQL, MongoDB
        • Tools: Git, Docker, VS Code, OpenCV
        • AI/ML: MediaPipe, TensorFlow Basics, Computer Vision
        • Cybersecurity: Network Analysis, Cryptography
        
        PROJECTS (${projects.length})
        --------
        ${projects.map((project, index) => `
        ${index + 1}. ${project.title}
           - ${project.description}
           - Technologies: ${(project.technologies || []).join(', ')}
           - Year: ${project.year}
        `).join('')}
        
        CERTIFICATIONS (${certificates.length})
        ---------------
        ${certificates.map((cert, index) => `
        ${index + 1}. ${cert.name}
           - Issuer: ${cert.issuer || 'Professional'}
           - Date: ${new Date(cert.uploaded).toLocaleDateString()}
        `).join('')}
        
        GITHUB STATISTICS
        -----------------
        • Public Repositories: ${githubRepos.length}
        • Total Stars: ${githubRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0)}
        • Total Forks: ${githubRepos.reduce((sum, repo) => sum + repo.forks_count, 0)}
        
        AVAILABILITY
        -------------
        Seeking internship opportunities in:
        - Software Development
        - AI/ML Engineering
        - Web Development
        - Cybersecurity Research
        
        Available for remote or onsite internships starting immediately.
        
        ================================
        Generated on: ${new Date().toLocaleDateString()}
        Portfolio: https://pranav-machireddy.netlify.app
        ================================
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Pranav_Machireddy_Resume_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Resume Downloaded', 'Your resume has been downloaded', 'success');
}

function exportData() {
    const data = {
        certificates,
        memories,
        projects,
        githubRepos,
        exportedAt: new Date().toISOString(),
        version: '1.0',
        config: CONFIG
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio_data_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Data Exported', 'Portfolio data exported successfully', 'success');
}

// ===== ADMIN FUNCTIONS =====
function showAdminPanel() {
    const content = `
        <h4>Admin Dashboard</h4>
        <div class="modal-details">
            <p><strong>Total Certificates:</strong> ${certificates.length}</p>
            <p><strong>Total Memories:</strong> ${memories.length}</p>
            <p><strong>Total Projects:</strong> ${projects.length}</p>
            <p><strong>GitHub Repos:</strong> ${githubRepos.length}</p>
            <p><strong>Visitor Count:</strong> ${visitorCount}</p>
            <hr>
            <button class="btn btn-sm btn-outline" onclick="clearAllData()" style="margin-right: 10px;">
                <i class="fas fa-trash"></i> Clear All Data
            </button>
            <button class="btn btn-sm btn-outline" onclick="loadSampleData()">
                <i class="fas fa-download"></i> Load Sample Data
            </button>
        </div>
    `;
    
    showModal('Admin Panel', content);
}

function clearAllData() {
    if (confirm('Are you sure you want to clear all data? This cannot be undone!')) {
        localStorage.clear();
        certificates = [];
        memories = [];
        projects = [];
        githubRepos = [];
        
        updateCertificateStats();
        updateMemoryStats();
        renderCertificates();
        renderMemories();
        renderProjects();
        
        showNotification('Data Cleared', 'All portfolio data has been cleared', 'success');
    }
}

function loadSampleData() {
    loadSampleCertificates();
    loadSampleMemories();
    loadSampleProjects();
    
    showNotification('Sample Data Loaded', 'Sample data has been loaded successfully', 'success');
}

function refreshData() {
    localStorage.removeItem('githubRepos');
    localStorage.removeItem('githubReposCacheTime');
    
    loadData();
    showNotification('Data Refreshed', 'Portfolio data has been refreshed', 'success');
}

// ===== GLOBAL FUNCTIONS =====
window.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

window.downloadResume = downloadResume;
window.toggleTheme = toggleTheme;
window.viewProject = viewProject;
window.viewCertificate = viewCertificate;
window.downloadCertificate = downloadCertificate;
window.deleteCertificate = deleteCertificate;
window.uploadMemory = uploadMemory;
window.createAlbum = createAlbum;
window.exportData = exportData;
window.showAdminPanel = showAdminPanel;
window.refreshData = refreshData;
window.scrollToTop = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('Error:', e.error);
    showNotification('Error', 'An error occurred. Check console for details.', 'error');
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Promise rejection:', e.reason);
    showNotification('Error', 'A promise rejection occurred.', 'error');
});

// Initialize app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
