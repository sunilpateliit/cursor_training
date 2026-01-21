// Smooth scrolling for navigation links
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

// Add some subtle animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe article sections for fade-in animation
document.querySelectorAll('.article-content h2, .article-content h3').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add a simple reading progress indicator
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // Create or update progress bar
    let progressBar = document.querySelector('.reading-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: #0066cc;
            z-index: 1000;
            transform-origin: left;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    }
    progressBar.style.transform = `scaleX(${scrollPercent / 100})`;
});

// Make code blocks copyable
document.querySelectorAll('pre').forEach(block => {
    block.addEventListener('click', () => {
        const code = block.querySelector('code');
        if (code) {
            const text = code.textContent;
            navigator.clipboard.writeText(text).then(() => {
                // Simple feedback
                const original = block.style.backgroundColor;
                block.style.backgroundColor = '#e6f7ff';
                setTimeout(() => {
                    block.style.backgroundColor = original;
                }, 200);
            });
        }
    });
    block.style.cursor = 'pointer';
    block.title = 'Click to copy code';
});