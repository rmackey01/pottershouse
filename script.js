// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only prevent default for anchor links (starting with #)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href.substring(1));
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            // Allow regular navigation links to work normally
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
    });

    // Missionary dots functionality
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            // Remove active class from all dots
            dots.forEach(d => d.classList.remove('active'));
            // Add active class to clicked dot
            this.classList.add('active');
            
            // Here you could add logic to change the missionary content
            // For now, we'll just update the active state
        });
    });

    // Sermon play button interactions
    const playButtons = document.querySelectorAll('.sermon-play');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle play/pause state
            if (this.innerHTML === '▶') {
                this.innerHTML = '⏸';
                this.style.background = '#38b2ac';
            } else {
                this.innerHTML = '▶';
                this.style.background = '#d4a574';
            }
            
            // Here you could add logic to actually play/pause audio
            console.log('Sermon play/pause clicked');
        });
    });

    // Button hover effects and interactions
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Hero section is immediately visible
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }

    // Calendar day hover effects
    const calendarDays = document.querySelectorAll('.calendar-day');
    calendarDays.forEach(day => {
        day.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        day.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Quick link cards hover effects
    const quickLinkCards = document.querySelectorAll('.quick-link-card');
    quickLinkCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 15px rgba(0,0,0,0.15)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });

    // Sermon items hover effects
    const sermonItems = document.querySelectorAll('.sermon-item');
    sermonItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f7fafc';
            this.style.transition = 'background-color 0.3s ease';
            this.style.cursor = 'pointer';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            // Add animation class
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('animate-fade-in');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Set active navigation item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('text-church-secondary', 'border-b-2', 'border-church-secondary');
        }
    });

    // Initialize animations
    initializeAnimations();
    
    // Initialize countdown timer
    initializeCountdown();
    
    // Initialize YouTube integration
    initializeYouTubeIntegration();
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Create mobile menu
    createMobileMenu();
    
    // Enhance forms
    enhanceForms();
});

// Enhanced animations and transitions
function initializeAnimations() {
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        @keyframes bounce {
            0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
            40%, 43% { transform: translateY(-10px); }
            70% { transform: translateY(-5px); }
            90% { transform: translateY(-2px); }
        }
        
        .animate-fade-in {
            animation: fadeIn 0.6s ease-out;
        }
        
        .animate-slide-in {
            animation: slideIn 0.8s ease-out;
        }
        
        .animate-pulse-hover:hover {
            animation: pulse 0.6s ease-in-out;
        }
        
        .animate-bounce-slow {
            animation: bounce 2s infinite;
        }
        
        .card-hover {
            transition: all 0.3s ease;
        }
        
        .card-hover:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .btn-hover {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .btn-hover::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
        }
        
        .btn-hover:hover::before {
            left: 100%;
        }
        
        .loading-shimmer {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
        
        .scroll-reveal {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.6s ease;
        }
        
        .scroll-reveal.revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Add scroll reveal to cards and sections, but exclude navbar
    document.querySelectorAll('.card-hover, section .bg-white, section .bg-gradient-to-r').forEach(el => {
        // Skip if this element is part of the navbar
        if (el.closest('nav')) return;
        
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
}

// Countdown timer for next service
function initializeCountdown() {
    const countdownElement = document.getElementById('service-countdown');
    if (!countdownElement) return;

    function updateCountdown() {
        const now = new Date();
        const currentDay = now.getDay(); // 0 = Sunday, 3 = Wednesday
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        
        let nextService;
        
        // Determine next service time
        if (currentDay === 0) { // Sunday
            if (currentHour < 9 || (currentHour === 9 && currentMinute < 0)) {
                // Before Sunday School
                nextService = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0, 0);
            } else if (currentHour < 10 || (currentHour === 10 && currentMinute < 30)) {
                // Before Morning Worship
                nextService = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 30, 0);
            } else if (currentHour < 18) {
                // Before Evening Service
                nextService = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0, 0);
            } else {
                // Next Wednesday
                nextService = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 19, 0, 0);
            }
        } else if (currentDay === 3) { // Wednesday
            if (currentHour < 19) {
                // Before Bible Study
                nextService = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 0, 0);
            } else {
                // Next Sunday
                const daysUntilSunday = (7 - currentDay) % 7;
                nextService = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysUntilSunday, 9, 0, 0);
            }
        } else {
            // Other days - next Sunday or Wednesday
            const daysUntilSunday = (7 - currentDay) % 7 || 7;
            const daysUntilWednesday = currentDay < 3 ? 3 - currentDay : 10 - currentDay;
            
            if (daysUntilWednesday < daysUntilSunday) {
                nextService = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysUntilWednesday, 19, 0, 0);
            } else {
                nextService = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysUntilSunday, 9, 0, 0);
            }
        }
        
        const timeDiff = nextService - now;
        
        if (timeDiff > 0) {
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
            
            countdownElement.innerHTML = `
                <div class="flex justify-center space-x-4 text-center">
                    <div class="bg-church-primary text-white p-4 rounded-lg min-w-[80px]">
                        <div class="text-2xl font-bold">${days}</div>
                        <div class="text-sm">Days</div>
                    </div>
                    <div class="bg-church-primary text-white p-4 rounded-lg min-w-[80px]">
                        <div class="text-2xl font-bold">${hours}</div>
                        <div class="text-sm">Hours</div>
                    </div>
                    <div class="bg-church-primary text-white p-4 rounded-lg min-w-[80px]">
                        <div class="text-2xl font-bold">${minutes}</div>
                        <div class="text-sm">Minutes</div>
                    </div>
                    <div class="bg-church-secondary text-white p-4 rounded-lg min-w-[80px] animate-pulse">
                        <div class="text-2xl font-bold">${seconds}</div>
                        <div class="text-sm">Seconds</div>
                    </div>
                </div>
            `;
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// YouTube API Configuration
const YOUTUBE_CONFIG = {
    // YouTube Data API v3 key for The Potter's House of Camdenton
    API_KEY: 'AIzaSyB-whkss3jtHisHWP5efRIwuMwSp544dpk',
    // Channel ID for The Potter's House of Camdenton
    CHANNEL_ID: 'UCiwalJc0YQWLeLOqtgHaJFQ',
    // Channel handle
    CHANNEL_HANDLE: '@thepottershouseofcamdenton'
};

// YouTube integration for automatic sermon updates
function initializeYouTubeIntegration() {
    console.log('Initializing YouTube integration...');
    console.log('Using RSS-based fallback method (no API quota needed)');
    
    // Use RSS feed method to get latest videos
    loadLatestSermonsViaRSS();
}

async function loadLatestSermonsViaRSS() {
    console.log('Loading sermons via RSS feed...');
    
    const currentSermonSection = document.getElementById('current-sermon');
    const recentSermonsGrid = document.getElementById('latest-sermons');
    
    // Show loading state
    if (currentSermonSection) {
        currentSermonSection.innerHTML = '<div class="loading-shimmer h-64 rounded-lg"></div>';
    }
    
    if (recentSermonsGrid) {
        recentSermonsGrid.innerHTML = '<div class="loading-shimmer h-64 rounded-lg col-span-full"></div>';
    }
    
    try {
        // Use YouTube RSS feed - no API quota needed!
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CONFIG.CHANNEL_ID}`;
        console.log('Fetching RSS from:', rssUrl);
        
        // Try multiple CORS proxies for better reliability
        const proxies = [
            `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`,
            `https://cors-anywhere.herokuapp.com/${rssUrl}`,
            `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(rssUrl)}`
        ];
        
        let response, data;
        
        for (const proxyUrl of proxies) {
            try {
                console.log('Trying proxy:', proxyUrl);
                response = await fetch(proxyUrl);
                
                if (proxyUrl.includes('allorigins.win')) {
                    data = await response.json();
                    if (data.contents) {
                        break;
                    }
                } else {
                    // For other proxies, the response is direct XML
                    const xmlText = await response.text();
                    data = { contents: xmlText };
                    break;
                }
            } catch (error) {
                console.log('Proxy failed:', proxyUrl, error.message);
                continue;
            }
        }
        
        if (data.contents) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data.contents, 'text/xml');
            
            // Debug: Log the raw XML structure
            console.log('Raw RSS XML:', data.contents.substring(0, 1000));
            
            // Parse RSS entries
            const entries = xmlDoc.querySelectorAll('entry');
            console.log('Found', entries.length, 'videos in RSS feed');
            
            // Debug: Log first entry structure
            if (entries.length > 0) {
                const firstEntry = entries[0];
                console.log('First entry HTML:', firstEntry.outerHTML.substring(0, 500));
                console.log('First entry children:', Array.from(firstEntry.children).map(child => child.tagName));
            }
            
            if (entries.length > 0) {
                // Get the latest video
                const latestEntry = entries[0];
                const videoId = extractVideoIdFromEntry(latestEntry);
                const title = latestEntry.querySelector('title').textContent;
                const publishedDate = new Date(latestEntry.querySelector('published').textContent);
                
                console.log('Latest video:', { videoId, title, publishedDate });
                
                // Check if this might be a live stream (published very recently)
                const now = new Date();
                const timeDiff = now - publishedDate;
                const isRecentlyPublished = timeDiff < 2 * 60 * 60 * 1000; // Within 2 hours
                
                // Display the latest video
                displaySermonFromRSS(videoId, title, publishedDate, isRecentlyPublished);
                
                // Load recent sermons grid
                loadRecentSermonsFromRSS(entries);
                
            } else {
                console.log('No videos found in RSS feed');
                updateSermonDisplayFallback();
                updateRecentSermonsFallback();
            }
        } else {
            throw new Error('No RSS data received');
        }
        
    } catch (error) {
        console.error('Error loading RSS feed:', error);
        console.error('Full error details:', error.message, error.stack);
        // Try alternative method
        loadLatestSermonsViaChannelEmbed();
    }
}

function extractVideoIdFromEntry(entry) {
    // YouTube RSS feeds use 'yt:videoId' namespace
    const videoIdElement = entry.querySelector('videoId') || entry.querySelector('yt\\:videoId');
    if (videoIdElement) {
        return videoIdElement.textContent;
    }
    
    // Alternative: check for id element
    const idElement = entry.querySelector('id');
    if (idElement) {
        const idText = idElement.textContent;
        const match = idText.match(/yt:video:(.+)/);
        if (match) {
            return match[1];
        }
    }
    
    // Fallback: extract from link
    const link = entry.querySelector('link');
    if (link) {
        const href = link.getAttribute('href');
        const match = href.match(/watch\?v=([^&]+)/);
        if (match) {
            return match[1];
        }
    }
    
    return null;
}

function displaySermonFromRSS(videoId, title, publishedDate, isRecentlyPublished) {
    const currentSermonSection = document.getElementById('current-sermon');
    
    if (!currentSermonSection || !videoId) {
        updateSermonDisplayFallback();
        return;
    }
    
    console.log('Displaying sermon from RSS:', videoId);
    
    // Extract scripture reference if available
    const scriptureMatch = title.match(/([1-3]?\s*[A-Za-z]+\s+\d+:\d+(?:-\d+)?)/);
    const scripture = scriptureMatch ? scriptureMatch[0] : '';
    
    // Clean title
    const cleanTitle = title.replace(/([1-3]?\s*[A-Za-z]+\s+\d+:\d+(?:-\d+)?\s*[-–—]\s*)/g, '').trim();
    
    const liveIndicator = isRecentlyPublished ? `
        <div class="bg-red-500 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 animate-pulse">
            🔴 RECENTLY LIVE
        </div>
    ` : `
        <div class="bg-church-secondary inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2">
            CURRENT SERIES: BEGINNINGS
        </div>
    `;
    
    // Use YouTube thumbnail instead of iframe to avoid embedding restrictions
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    console.log('Using thumbnail approach for video:', videoId);
    
    currentSermonSection.innerHTML = `
        <div class="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer" onclick="window.open('${videoUrl}', '_blank')">
            <div class="aspect-video bg-gray-900 relative">
                <img 
                    src="${thumbnailUrl}"
                    alt="${cleanTitle || title}"
                    class="absolute inset-0 w-full h-full object-cover"
                    onerror="this.src='https://img.youtube.com/vi/${videoId}/hqdefault.jpg'"
                />
                
                <!-- Play Button Overlay -->
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="bg-red-600 hover:bg-red-700 rounded-full p-6 transform transition-all duration-300 group-hover:scale-110 shadow-2xl">
                        <svg class="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Sermon Info Below Video -->
        <div class="mt-6 text-center">
            ${liveIndicator}
            <h2 class="text-3xl font-bold mb-2 text-church-primary">${cleanTitle || title}</h2>
            ${scripture ? `<p class="text-lg text-gray-600 mb-4">${scripture}</p>` : ''}
            <a href="${videoUrl}" target="_blank" class="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a2.999 2.999 0 0 0-2.108-2.135C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.39.505A2.999 2.999 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.999 2.999 0 0 0 2.108 2.135c1.885.505 9.39.505 9.39.505s7.505 0 9.39-.505a2.999 2.999 0 0 0 2.108-2.135C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.75 15.568V8.432L15.5 12l-5.75 3.568z"/>
                </svg>
                Watch on YouTube
            </a>
        </div>
    `;
}

function loadRecentSermonsFromRSS(entries) {
    const recentSermonsGrid = document.getElementById('latest-sermons');
    
    if (!recentSermonsGrid) return;
    
    const colorClasses = ['church-primary', 'church-accent', 'church-secondary'];
    let sermonCards = '';
    
    // Take first 6 entries for recent sermons
    const recentEntries = Array.from(entries).slice(0, 6);
    
    recentEntries.forEach((entry, index) => {
        const videoId = extractVideoIdFromEntry(entry);
        const title = entry.querySelector('title').textContent;
        const publishedDate = new Date(entry.querySelector('published').textContent);
        
        if (videoId) {
            const formattedDate = publishedDate.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            }).toUpperCase();
            
            // Extract scripture reference
            const scriptureMatch = title.match(/([1-3]?\s*[A-Za-z]+\s+\d+:\d+(?:-\d+)?)/);
            const scripture = scriptureMatch ? scriptureMatch[0] : 'Scripture Reference';
            
            // Clean title
            const cleanTitle = title.replace(/([1-3]?\s*[A-Za-z]+\s+\d+:\d+(?:-\d+)?\s*[-–—]\s*)/g, '').trim();
            
            const colorClass = colorClasses[index % colorClasses.length];
            
            sermonCards += generateSermonCardFromAPI(
                cleanTitle || title, 
                formattedDate, 
                scripture, 
                'Join us for this powerful message from our current sermon series.', 
                colorClass,
                videoId
            );
        }
    });
    
    recentSermonsGrid.innerHTML = sermonCards;
}

function loadLatestSermonsViaChannelEmbed() {
    console.log('Using channel embed fallback method...');
    const currentSermonSection = document.getElementById('current-sermon');
    
    if (currentSermonSection) {
        // Use YouTube channel's latest video embed
        const channelEmbedUrl = `https://www.youtube.com/embed/live_stream?channel=${YOUTUBE_CONFIG.CHANNEL_ID}&autoplay=0&rel=0&modestbranding=1`;
        
        currentSermonSection.innerHTML = `
            <div class="relative overflow-hidden rounded-2xl shadow-2xl">
                <div class="aspect-video bg-gray-900 relative">
                    <iframe 
                        src="${channelEmbedUrl}"
                        class="absolute inset-0 w-full h-full"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        onload="console.log('Channel embed loaded successfully')"
                        onerror="console.error('Channel embed failed, using final fallback'); updateSermonDisplayFallback();">
                    </iframe>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div class="bg-church-secondary inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        LIVE OR LATEST
                    </div>
                    <h2 class="text-3xl font-bold mb-2">Latest from Potter's House</h2>
                    <p class="text-lg opacity-90">Live stream or most recent video</p>
                    <div class="mt-4 flex gap-3">
                        <a href="https://www.youtube.com/@thepottershouseofcamdenton" target="_blank" 
                           class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all flex items-center gap-2">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a2.999 2.999 0 0 0-2.108-2.135C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.39.505A2.999 2.999 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.999 2.999 0 0 0 2.108 2.135c1.885.505 9.39.505 9.39.505s7.505 0 9.39-.505a2.999 2.999 0 0 0 2.108-2.135C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.75 15.568V8.432L15.5 12l-5.75 3.568z"/>
                            </svg>
                            Visit YouTube Channel
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Use fallback for recent sermons
    updateRecentSermonsFallback();
}

function testVideoEmbedding() {
    console.log('Testing video embedding...');
    // Skip test and go directly to sermon loading
    // The test was causing confusion - let's handle embedding issues in the main functions
}

async function loadLatestSermons() {
    // Show loading state
    const currentSermonSection = document.getElementById('current-sermon');
    const recentSermonsGrid = document.getElementById('latest-sermons');
    
    if (currentSermonSection) {
        currentSermonSection.innerHTML = '<div class="loading-shimmer h-64 rounded-lg"></div>';
    }
    
    if (recentSermonsGrid) {
        recentSermonsGrid.innerHTML = '<div class="loading-shimmer h-64 rounded-lg col-span-full"></div>';
    }
    
    try {
        console.log('Loading latest sermons...');
        console.log('API Key:', YOUTUBE_CONFIG.API_KEY ? 'Present' : 'Missing');
        console.log('Channel ID:', YOUTUBE_CONFIG.CHANNEL_ID);
        
        // First check for live streams
        const liveVideo = await checkForLiveStream();
        console.log('Live video check result:', liveVideo);
        
        if (liveVideo) {
            console.log('Found live video, updating display...');
            updateSermonDisplay(liveVideo, true);
        } else {
            // Get latest uploaded video
            console.log('No live video, getting latest video...');
            const latestVideo = await getLatestVideo();
            console.log('Latest video result:', latestVideo);
            
            if (latestVideo) {
                console.log('Found latest video, attempting to display...');
                updateSermonDisplay(latestVideo, false);
            } else {
                console.log('No latest video found, using fallback');
                updateSermonDisplayFallback();
            }
        }
        
        // Get recent sermons for the grid
        console.log('Loading recent videos...');
        const recentVideos = await getRecentVideos();
        console.log('Recent videos result:', recentVideos);
        updateRecentSermons(recentVideos);
        
    } catch (error) {
        console.error('Error loading sermons:', error);
        // Fallback to static content
        updateSermonDisplayFallback();
        updateRecentSermonsFallback();
    }
}

async function checkForLiveStream() {
    try {
        const url = `https://www.googleapis.com/youtube/v3/search?` +
            `part=snippet&channelId=${YOUTUBE_CONFIG.CHANNEL_ID}&` +
            `eventType=live&type=video&key=${YOUTUBE_CONFIG.API_KEY}`;
        
        console.log('Checking for live stream with URL:', url);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            console.error('API response not ok:', response.status, response.statusText);
            const errorText = await response.text();
            console.error('Error response:', errorText);
            return null;
        }
        
        const data = await response.json();
        console.log('Live stream API response:', data);
        
        if (data.error) {
            console.error('YouTube API error:', data.error);
            return null;
        }
        
        if (data.items && data.items.length > 0) {
            return data.items[0];
        }
        
        return null;
    } catch (error) {
        console.error('Error checking for live stream:', error);
        return null;
    }
}

async function getLatestVideo() {
    try {
        const url = `https://www.googleapis.com/youtube/v3/search?` +
            `part=snippet&channelId=${YOUTUBE_CONFIG.CHANNEL_ID}&` +
            `order=date&type=video&maxResults=1&key=${YOUTUBE_CONFIG.API_KEY}`;
        
        console.log('Getting latest video with URL:', url);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            console.error('API response not ok:', response.status, response.statusText);
            const errorText = await response.text();
            console.error('Error response:', errorText);
            return null;
        }
        
        const data = await response.json();
        console.log('Latest video API response:', data);
        
        if (data.error) {
            console.error('YouTube API error:', data.error);
            return null;
        }
        
        if (data.items && data.items.length > 0) {
            return data.items[0];
        }
        
        return null;
    } catch (error) {
        console.error('Error getting latest video:', error);
        return null;
    }
}

async function getRecentVideos() {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?` +
            `part=snippet&channelId=${YOUTUBE_CONFIG.CHANNEL_ID}&` +
            `order=date&type=video&maxResults=6&key=${YOUTUBE_CONFIG.API_KEY}`
        );
        
        const data = await response.json();
        return data.items || [];
    } catch (error) {
        console.error('Error getting recent videos:', error);
        return [];
    }
}

function updateSermonDisplay(video, isLive = false) {
    const currentSermonSection = document.getElementById('current-sermon');
    
    if (!currentSermonSection || !video) {
        updateSermonDisplayFallback();
        return;
    }
    
    const videoId = video.id.videoId;
    const title = video.snippet.title;
    const description = video.snippet.description;
    
    console.log('Updating sermon display with video ID:', videoId);
    
    // Extract scripture reference if available (look for book chapter:verse pattern)
    const scriptureMatch = title.match(/([1-3]?\s*[A-Za-z]+\s+\d+:\d+(?:-\d+)?)/);
    const scripture = scriptureMatch ? scriptureMatch[0] : '';
    
    const liveIndicator = isLive ? `
        <div class="bg-red-500 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 animate-pulse">
            🔴 LIVE NOW
        </div>
    ` : `
        <div class="bg-church-secondary inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2">
            CURRENT SERIES: BEGINNINGS
        </div>
    `;
    
    // Simplified iframe without problematic parameters
    const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
    console.log('Embed URL:', embedUrl);
    
    currentSermonSection.innerHTML = `
        <div class="relative overflow-hidden rounded-2xl shadow-2xl">
            <div class="aspect-video bg-gray-900 relative">
                <iframe 
                    src="${embedUrl}"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                ${liveIndicator}
                <h2 class="text-3xl font-bold mb-2">${title}</h2>
                ${scripture ? `<p class="text-lg opacity-90">${scripture}</p>` : ''}
                <div class="mt-4 flex gap-3">
                    <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" 
                       class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all flex items-center gap-2">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a2.999 2.999 0 0 0-2.108-2.135C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.39.505A2.999 2.999 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.999 2.999 0 0 0 2.108 2.135c1.885.505 9.39.505 9.39.505s7.505 0 9.39-.505a2.999 2.999 0 0 0 2.108-2.135C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.75 15.568V8.432L15.5 12l-5.75 3.568z"/>
                        </svg>
                        Watch on YouTube
                    </a>
                </div>
            </div>
        </div>
    `;
}

function updateSermonDisplayFallback() {
    const currentSermonSection = document.getElementById('current-sermon');
    
    if (currentSermonSection) {
        console.log('Using fallback sermon display');
        
        currentSermonSection.innerHTML = `
            <div class="relative overflow-hidden rounded-2xl shadow-2xl">
                <div class="aspect-video bg-gray-900 relative flex items-center justify-center">
                    <div class="text-center text-white p-8">
                        <div class="bg-church-secondary rounded-full p-4 inline-block mb-4">
                            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold mb-2">Latest Sermon</h3>
                        <p class="text-gray-300 mb-6">Unable to load video player. Click below to watch on YouTube.</p>
                        <a href="https://www.youtube.com/@thepottershouseofcamdenton" target="_blank" 
                           class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a2.999 2.999 0 0 0-2.108-2.135C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.39.505A2.999 2.999 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.999 2.999 0 0 0 2.108 2.135c1.885.505 9.39.505 9.39.505s7.505 0 9.39-.505a2.999 2.999 0 0 0 2.108-2.135C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.75 15.568V8.432L15.5 12l-5.75 3.568z"/>
                            </svg>
                            Visit Our YouTube Channel
                        </a>
                    </div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div class="bg-church-secondary inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        CURRENT SERIES: BEGINNINGS
                    </div>
                    <h2 class="text-3xl font-bold mb-2">The Beginning of Intercession</h2>
                    <p class="text-lg opacity-90">Genesis 18:16-33</p>
                </div>
            </div>
        `;
    }
}

function updateRecentSermons(videos) {
    const recentSermonsGrid = document.getElementById('latest-sermons');
    
    if (!recentSermonsGrid) return;
    
    if (!videos || videos.length === 0) {
        updateRecentSermonsFallback();
        return;
    }
    
    const colorClasses = ['church-primary', 'church-accent', 'church-secondary'];
    let sermonCards = '';
    
    videos.forEach((video, index) => {
        const title = video.snippet.title;
        const publishedAt = new Date(video.snippet.publishedAt);
        const formattedDate = publishedAt.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        }).toUpperCase();
        
        // Extract scripture reference if available
        const scriptureMatch = title.match(/([1-3]?\s*[A-Za-z]+\s+\d+:\d+(?:-\d+)?)/);
        const scripture = scriptureMatch ? scriptureMatch[0] : 'Scripture Reference';
        
        // Clean title (remove scripture reference for cleaner display)
        const cleanTitle = title.replace(/([1-3]?\s*[A-Za-z]+\s+\d+:\d+(?:-\d+)?\s*[-–—]\s*)/g, '').trim();
        
        // Get description preview
        const description = video.snippet.description.length > 120 
            ? video.snippet.description.substring(0, 120) + '...'
            : video.snippet.description || 'Join us for this powerful message from our current sermon series.';
        
        const colorClass = colorClasses[index % colorClasses.length];
        const videoId = video.id.videoId;
        
        sermonCards += generateSermonCardFromAPI(
            cleanTitle || title, 
            formattedDate, 
            scripture, 
            description, 
            colorClass,
            videoId
        );
    });
    
    recentSermonsGrid.innerHTML = sermonCards;
}

function updateRecentSermonsFallback() {
    const recentSermonsGrid = document.getElementById('latest-sermons');
    
    if (recentSermonsGrid) {
        // Fallback to static content with consistent styling
        recentSermonsGrid.innerHTML = `
            ${generateSermonCard("The Beginning of Intercession", "DEC 22, 2024", "Genesis 18:16-33", "Discover the power of intercession through Abraham's bold conversation with God about Sodom and Gomorrah.", "church-primary")}
            ${generateSermonCard("The Promise Fulfilled", "DEC 15, 2024", "Genesis 18:1-15", "See how God's faithfulness shines through as He visits Abraham and Sarah with the promise of Isaac.", "church-accent")}
            ${generateSermonCard("Covenant Promises", "DEC 8, 2024", "Genesis 17:1-27", "Explore God's covenant with Abraham and what it means for believers today.", "church-secondary")}
            ${generateSermonCard("Faith and Doubt", "DEC 1, 2024", "Genesis 16:1-16", "Learn from Abraham and Sarah's struggle with waiting on God's timing.", "church-primary")}
            ${generateSermonCard("The Call of Abram", "NOV 24, 2024", "Genesis 12:1-9", "Discover what it means to step out in faith when God calls you to something new.", "church-accent")}
            ${generateSermonCard("The Tower of Babel", "NOV 17, 2024", "Genesis 11:1-9", "Understand the dangers of pride and self-reliance apart from God.", "church-secondary")}
        `;
    }
}

function generateSermonCardFromAPI(title, date, scripture, description, colorClass, videoId) {
    const colorMap = {
        'church-primary': 'church-primary',
        'church-accent': 'church-accent', 
        'church-secondary': 'church-secondary'
    };
    
    const bgColor = colorMap[colorClass] || 'church-primary';
    const textColor = colorClass === 'church-secondary' ? 'church-primary' : 'church-secondary';
    const buttonColor = colorClass === 'church-secondary' ? 'church-secondary' : bgColor;
    const buttonHover = colorClass === 'church-secondary' ? 'yellow-600' : (colorClass === 'church-accent' ? 'gray-700' : 'church-accent');
    
    // Use YouTube thumbnail for better reliability
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    
    return `
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
            <!-- Video Thumbnail -->
            <div class="relative aspect-video bg-gray-900">
                <img 
                    src="${thumbnailUrl}"
                    alt="${title}"
                    class="w-full h-full object-cover"
                    onerror="this.src='https://img.youtube.com/vi/${videoId}/hqdefault.jpg'"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div class="absolute top-4 left-4">
                    <div class="bg-${bgColor} text-white px-3 py-1 rounded-full text-xs font-semibold">
                        ${date}
                    </div>
                </div>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div class="bg-red-600 hover:bg-red-700 rounded-full p-3 transform transition-all duration-300 hover:scale-110">
                        <svg class="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>
            </div>
            
            <!-- Content -->
            <div class="p-6">
                <div class="flex items-center gap-2 mb-3">
                    <div class="bg-${bgColor} rounded-full p-2">
                        <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    </div>
                    <span class="text-${bgColor} text-sm font-semibold">BEGINNINGS</span>
                </div>
                <h3 class="text-xl font-bold text-church-primary mb-3">${title}</h3>
                <p class="text-gray-600 mb-4">${scripture}</p>
                <p class="text-gray-700 text-sm mb-6 leading-relaxed">${description}</p>
                <div class="flex flex-wrap gap-3">
                    <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" class="bg-${buttonColor} hover:bg-${buttonHover} text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all flex items-center gap-2">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a2.999 2.999 0 0 0-2.108-2.135C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.39.505A2.999 2.999 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.999 2.999 0 0 0 2.108 2.135c1.885.505 9.39.505 9.39.505s7.505 0 9.39-.505a2.999 2.999 0 0 0 2.108-2.135C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.75 15.568V8.432L15.5 12l-5.75 3.568z"/>
                        </svg>
                        Watch Now
                    </a>
                    <a href="#" class="border border-${buttonColor} text-${buttonColor} hover:bg-${buttonColor} hover:text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all">
                        Notes
                    </a>
                </div>
            </div>
        </div>
    `;
}

function generateSermonCard(title, date, scripture, description, colorClass) {
    const colorMap = {
        'church-primary': 'church-primary',
        'church-accent': 'church-accent', 
        'church-secondary': 'church-secondary'
    };
    
    const bgColor = colorMap[colorClass] || 'church-primary';
    const textColor = colorClass === 'church-secondary' ? 'church-primary' : 'church-secondary';
    const buttonColor = colorClass === 'church-secondary' ? 'church-secondary' : bgColor;
    const buttonHover = colorClass === 'church-secondary' ? 'yellow-600' : (colorClass === 'church-accent' ? 'gray-700' : 'church-accent');
    
    return `
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
            <div class="bg-${bgColor} p-6">
                <div class="flex items-center justify-between text-white">
                    <div>
                        <div class="text-${textColor} text-sm font-semibold">${date}</div>
                        <div class="text-2xl font-bold">BEGINNINGS</div>
                    </div>
                    <div class="bg-${textColor} rounded-full p-3">
                        <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-church-primary mb-3">${title}</h3>
                <p class="text-gray-600 mb-4">${scripture}</p>
                <p class="text-gray-700 text-sm mb-6 leading-relaxed">${description}</p>
                <div class="flex flex-wrap gap-3">
                    <a href="https://youtube.com/thepottershouseofcamdenton" target="_blank" class="bg-${buttonColor} hover:bg-${buttonHover} text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all">
                        Watch Now
                    </a>
                    <a href="#" class="border border-${buttonColor} text-${buttonColor} hover:bg-${buttonColor} hover:text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all">
                        Notes
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Enhanced mobile navigation
function createMobileMenu() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    // Add mobile menu button if it doesn't exist
    if (!document.getElementById('mobile-menu-button')) {
        const mobileButton = document.createElement('button');
        mobileButton.id = 'mobile-menu-button';
        mobileButton.className = 'md:hidden text-white hover:text-church-secondary transition-colors';
        mobileButton.innerHTML = `
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        `;
        nav.appendChild(mobileButton);
    }
    
    // Add mobile menu if it doesn't exist
    if (!document.getElementById('mobile-menu')) {
        const mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobile-menu';
        mobileMenu.className = 'hidden md:hidden absolute top-full left-0 right-0 bg-church-primary shadow-lg z-50';
        
        const menuItems = nav.querySelectorAll('a:not(#mobile-menu-button)');
        let menuHTML = '<div class="py-4">';
        
        menuItems.forEach(item => {
            menuHTML += `
                <a href="${item.getAttribute('href')}" 
                   class="block px-6 py-3 text-white hover:bg-church-accent transition-colors">
                    ${item.textContent}
                </a>
            `;
        });
        
        menuHTML += '</div>';
        mobileMenu.innerHTML = menuHTML;
        nav.appendChild(mobileMenu);
    }
}

// Form enhancements
function enhanceForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    submitButton.textContent = 'Message Sent!';
                    submitButton.className = submitButton.className.replace('bg-church-primary', 'bg-green-600');
                    
                    setTimeout(() => {
                        submitButton.textContent = originalText;
                        submitButton.disabled = false;
                        submitButton.className = submitButton.className.replace('bg-green-600', 'bg-church-primary');
                        form.reset();
                    }, 2000);
                }, 1500);
            }
        });
    });
}

// Removed page transition animation as requested

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading-shimmer');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        pointer-events: none;
        animation: ripple-animation 0.6s ease-out;
    }
    
    @keyframes ripple-animation {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

 