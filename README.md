# Redirect Script with Bot Protection

A simple JavaScript redirect service that can be hosted on GitHub Pages with built-in bot detection and blocking.

## Features

- 4-second delay before redirect
- Advanced bot detection and blocking
- Beautiful loading interface
- Works with GitHub Pages
- Single JavaScript file solution

## Setup Instructions

### 1. Create a New GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `redirect-service` or `link-shortener`
3. Make it public (required for free GitHub Pages)
4. Initialize with README

### 2. Upload Files

Upload these files to your repository:
- `index.html` - Entry point for GitHub Pages
- `redirect.js` - Main redirect script
- `_config.yml` - GitHub Pages configuration

### 3. Configure Your Redirect URL

Edit `redirect.js` and change this line:
```javascript
const REDIRECT_URL = 'https://example.com'; // Change to your target URL
```

### 4. Enable GitHub Pages

1. Go to your repository settings
2. Scroll down to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

### 5. Access Your Redirect Service

Your redirect service will be available at:
```
https://yourusername.github.io/your-repository-name
```

## How It Works

1. **Bot Detection**: The script checks for various bot indicators:
   - User agent patterns
   - Headless browser signatures
   - Automation tool markers
   - Screen dimensions
   - Missing browser properties

2. **Bot Blocking**: Detected bots see fake privacy policy content instead of redirecting

3. **Human Users**: Real users see a loading screen with countdown before redirect

## Customization

You can customize the script by modifying these variables in `redirect.js`:

- `REDIRECT_URL`: Your target URL
- `DELAY_SECONDS`: Redirect delay (default: 4 seconds)
- `LOADING_MESSAGE`: Loading screen message
- `BOT_USER_AGENTS`: Additional bot patterns to detect

## Security Features

- NoIndex/NoFollow meta tags
- Referrer checking
- Interaction detection
- Multiple bot detection methods
- Fake content for bots

## Browser Compatibility

Works in all modern browsers including:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)
- Does not require any external dependencies
