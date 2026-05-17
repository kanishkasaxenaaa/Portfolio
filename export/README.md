# Kanishka Saxena - Portfolio Website (Static Export)

This is a **fully static HTML/CSS/JavaScript** version of the portfolio website, converted from the original React/Vite application. All pages are deployment-ready and preserve the original responsiveness, interactions, animations, and navigation structure.

## 📁 Project Structure

```
export/
├── index.html              # Homepage with all sections
├── fintra.html             # Fintra case study page
├── splitwise.html          # Splitwise case study page
├── dysmenorrhea.html       # Dysmenorrhea case study page
├── styles.css              # Comprehensive CSS (converted from Tailwind)
├── main.js                 # JavaScript for interactions & animations
├── assets/
│   └── images/             # All project images
│       ├── profile.jpg
│       ├── fintra.png
│       ├── splitwise.png
│       ├── dysmenorrhea.png
│       └── visual-1.png through visual-6.png
└── README.md               # This file
```

## ✨ Features

### Preserved from Original
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Scroll-based navigation styling
- ✅ Fade-in animations on page load
- ✅ Hover effects on projects and images
- ✅ Floating animation orbs in hero section
- ✅ All original content and sections
- ✅ Professional dark theme with custom color palette

### Technology Stack
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No framework dependencies
- **Google Fonts** - DM Sans & Fraunces

## 🚀 Deployment Options

### Option 1: Static Hosting (Recommended)

#### Netlify
1. Drag and drop the `/export` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly with a generated URL
3. (Optional) Configure custom domain in Netlify settings

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from export directory
cd export
vercel --prod
```

#### GitHub Pages
```bash
# Create a new repository on GitHub
git init
git add .
git commit -m "Initial commit: Static portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# Enable GitHub Pages in repository settings (select main branch)
```

#### Cloudflare Pages
1. Push code to GitHub/GitLab
2. Connect repository in Cloudflare Pages
3. Build settings: Leave blank (no build needed)
4. Output directory: `/export` or root if you push only export contents

### Option 2: Traditional Web Hosting

Upload all files via FTP/SFTP to your web hosting provider:
- All `.html` files
- `styles.css`
- `main.js`
- `assets/` directory with all images

### Option 3: Local Testing

```bash
# Using Python (Python 3)
cd export
python3 -m http.server 8000

# Using Node.js
npx serve export

# Using PHP
cd export
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎨 Customization

### Update Personal Information

#### Email Address
Replace `Kanishkaasaksena@gmail.com` in:
- `index.html` (contact section, footer)
- All case study HTML files (footer)

#### LinkedIn URL
Update the LinkedIn link in:
- `index.html` (navigation, hero, footer)

#### Resume Link
Update the Google Drive link in `index.html` navigation:
```html
<a href="YOUR_RESUME_LINK" target="_blank" rel="noopener noreferrer" class="nav-link nav-link-bordered">Resume ↗</a>
```

### Update Colors
Modify CSS variables in `styles.css`:
```css
:root {
  --bg: #0A0A09;                  /* Background color */
  --text-primary: #F2EFE8;        /* Primary text */
  --sage: #4A7C6F;                /* Accent color 1 */
  --clay: #C8593A;                /* Accent color 2 */
  --plum: #7A5C7A;                /* Accent color 3 */
}
```

### Replace Images
Simply replace files in `assets/images/` with your own:
- `profile.jpg` - Your profile photo (recommended: 600x800px)
- `fintra.png`, `splitwise.png`, `dysmenorrhea.png` - Project screenshots
- `visual-1.png` through `visual-6.png` - Visual design portfolio items

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Performance Optimizations

### Already Implemented
- Minified HTML structure
- Efficient CSS with custom properties
- Optimized animations using CSS transforms
- Font preloading for Google Fonts
- Lazy-loaded animations using Intersection Observer

### Additional Recommendations
1. **Image Optimization**: Compress images using tools like:
   - [TinyPNG](https://tinypng.com/) for PNG files
   - [Squoosh](https://squoosh.app/) for JPG files
   - Recommended max width: 1920px for project images

2. **CDN**: Serve static assets through a CDN for faster global delivery

3. **Caching**: Configure HTTP headers for static assets:
   ```
   Cache-Control: public, max-age=31536000
   ```

## 🐛 Troubleshooting

### Images Not Showing
- Check that all files in `assets/images/` are present
- Verify image paths in HTML match actual filenames
- Ensure case-sensitive filenames match (important on Linux servers)

### Fonts Not Loading
- Verify Google Fonts link is present in `<head>` of all HTML files
- Check internet connection (fonts load from Google's CDN)

### Animations Not Working
- Verify `main.js` is linked correctly in HTML
- Check browser console for JavaScript errors
- Ensure JavaScript is enabled in browser

### Navigation Not Scrolling Smoothly
- Check that anchor links match section IDs
- Verify `main.js` is loaded
- CSS `scroll-behavior: smooth` requires modern browser

## 📄 License

This is a personal portfolio website. Feel free to use the structure and code as inspiration for your own portfolio.

## 📞 Support

For questions or issues, contact Kanishka Saxena at Kanishkaasaksena@gmail.com

---

**Built with** ❤️ **using HTML, CSS, and JavaScript**  
**Deployed on**: [Your chosen platform]  
**Last Updated**: May 2026
