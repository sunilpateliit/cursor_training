# MySQL Replication Internals Blog Clone

A static website clone of the MySQL Replication Internals blog post from Sunil Patel's website.

## Files

- `index.html` - Main HTML structure with the complete blog content
- `styles.css` - Modern CSS styling with responsive design
- `script.js` - JavaScript for interactivity (smooth scrolling, reading progress, code copying)
- `README.md` - This documentation file

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Clean Typography**: Uses Inter font for modern, readable text
- **Code Syntax Highlighting**: Monospace font and proper styling for code blocks
- **Interactive Elements**:
  - Smooth scrolling navigation
  - Reading progress indicator
  - Clickable code blocks (copy to clipboard)
  - Fade-in animations on scroll
- **Complete Content**: Full replication of the original blog post including all sections, code examples, and formatting

## Running the Website

To view the website locally:

1. Navigate to the `blogging_website` folder
2. Start a local HTTP server:
   ```bash
   python3 -m http.server 8000
   ```
3. Open your browser and go to `http://localhost:8000`

## Original Source

This is a clone of: https://arpitPatel.me/blogs/mysql-replication-internals

## Technologies Used

- HTML5
- CSS3 (with modern features like CSS Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)