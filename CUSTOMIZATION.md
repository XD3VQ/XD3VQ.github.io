# Portfolio Website Customization Guide

This guide will help you personalize your portfolio website with your own information.

## Quick Start Checklist

### 1. Basic Information (index.html)
- [ ] Line 6: Change page title from "Portfolio | Your Name"
- [ ] Line 31: Update hero name from "Your Name"
- [ ] Line 32: Update tagline "Developer | Designer | Problem Solver"
- [ ] Lines 36-39: Update social media links (GitHub, LinkedIn, Twitter, Email)

### 2. About Me Section (index.html, lines 56-77)
- [ ] Lines 63-65: Write your personal introduction
- [ ] Replace placeholder text "[your journey here]" and "[your specializations]"
- [ ] Replace "[your hobbies/interests]" with actual interests
- [ ] Optional: Replace user icon with your photo (update lines 59-61)

### 3. Skills Section (index.html, lines 83-130)
- [ ] Update skills in each category to match your expertise
- [ ] Add or remove skill categories as needed
- [ ] Customize icons (Font Awesome classes) if desired

### 4. Projects Section (index.html, lines 136-218)
- [ ] For each project card (3 total):
  - Update project title
  - Write project description
  - Update technology tags
  - Replace GitHub link (https://github.com/yourusername/projectX)
  - Replace live demo link
- [ ] Add more project cards by copying the structure
- [ ] Optional: Replace gradient placeholders with project screenshots

### 5. Hackathons Section (index.html, lines 224-273)
- [ ] Update hackathon names and dates
- [ ] Write descriptions of your achievements
- [ ] Update technology tags
- [ ] Change award badges (Winner, Finalist, Participant)

### 6. Volunteer Experience (index.html, lines 279-310)
- [ ] Update organization names
- [ ] Add your role/position
- [ ] Update date ranges
- [ ] Write descriptions of your contributions
- [ ] Change icons if desired (fas fa-hands-helping, fa-heart, fa-users)

### 7. Contact Section (index.html, lines 316-360)
- [ ] Line 324: Update email address (2 places)
- [ ] Line 328: Update location
- [ ] Lines 332-336: Update GitHub and LinkedIn URLs
- [ ] Optional: Integrate with a form service (see below)

### 8. Footer (index.html, lines 366-376)
- [ ] Line 368: Copyright text updates automatically with current year
- [ ] Lines 370-372: Update social media links

## Advanced Customizations

### Color Scheme (styles.css, lines 5-16)
```css
--primary-color: #6366f1;    /* Main brand color */
--secondary-color: #8b5cf6;  /* Secondary brand color */
--accent-color: #ec4899;     /* Accent highlights */
```

### Hero Background Gradient (styles.css, line 238)
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adding Your Photo
Replace the icon placeholder (lines 59-61) with:
```html
<div class="about-image">
    <img src="path/to/your-photo.jpg" alt="Your Name" style="width: 250px; height: 250px; border-radius: 50%; object-fit: cover; box-shadow: var(--shadow-xl);">
</div>
```

### Adding Project Images
Replace project placeholders (e.g., lines 140-144) with:
```html
<div class="project-image">
    <img src="path/to/project-screenshot.jpg" alt="Project Name" style="width: 100%; height: 200px; object-fit: cover;">
</div>
```

### Contact Form Integration

The form currently shows an alert. To make it functional, integrate with:

**Option 1: Formspree (Recommended)**
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: EmailJS**
Update script.js contactForm event listener to use EmailJS API.

**Option 3: Netlify Forms**
Add `netlify` attribute to form tag and `name` attributes to inputs.

### Adding More Sections
Copy an existing section structure and modify. Remember to:
1. Add navigation link in the navbar
2. Add section anchor ID
3. Style consistently with existing sections

### Mobile Responsiveness
The site is already mobile-responsive. Test by resizing browser or checking Chrome DevTools.

## Deployment to GitHub Pages

1. Go to repository Settings → Pages
2. Select source branch (this branch or main after merging)
3. Select folder: `/` (root)
4. Click Save
5. Wait 1-2 minutes for deployment
6. Access at: https://xd3vq.github.io/

## Tips

- Use high-quality images (compress them first)
- Keep descriptions concise and impactful
- Test all links before publishing
- Use consistent naming for GitHub username across all links
- Consider SEO: update meta tags in `<head>` section
- Test on multiple devices and browsers

## Need Help?

- Font Awesome Icons: https://fontawesome.com/icons
- Color Schemes: https://coolors.co/
- Free Images: https://unsplash.com/
- Gradient Generator: https://cssgradient.io/

Happy customizing! 🚀
