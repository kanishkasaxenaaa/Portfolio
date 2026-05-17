# 🚀 Deployment Checklist

Before deploying your static portfolio, complete these steps:

## ✅ Pre-Deployment Checklist

### 1. Personalization
- [ ] Update email address (`Kanishkaasaksena@gmail.com`) in all HTML files
- [ ] Update LinkedIn URL in navigation and footer
- [ ] Update Google Drive resume link in navigation
- [ ] Add your actual Dribbble/social media links (or remove them)
- [ ] Replace placeholder images with your actual photos

### 2. Content Review
- [ ] Verify all case study content is accurate
- [ ] Check that project descriptions match your work
- [ ] Confirm all external links work correctly
- [ ] Review "About Me" section for accuracy

### 3. Image Optimization
- [ ] Compress `profile.jpg` (currently 3.3MB - consider reducing to <500KB)
- [ ] Optimize PNG files using TinyPNG or similar
- [ ] Ensure all images are properly named and referenced

### 4. Testing
- [ ] Test on Chrome/Firefox/Safari
- [ ] Test on mobile devices (iOS/Android)
- [ ] Verify all navigation links work
- [ ] Check smooth scrolling behavior
- [ ] Test hover effects on projects
- [ ] Verify animations play correctly

### 5. SEO & Meta
- [ ] Update meta descriptions in each HTML file
- [ ] Add Open Graph tags for social sharing (optional)
- [ ] Create a `favicon.ico` file
- [ ] Consider adding `robots.txt` and `sitemap.xml`

## 📤 Deployment Steps

### Quick Deploy (Netlify)
```bash
# Drag and drop the /export folder to:
https://app.netlify.com/drop
```

### GitHub Pages
```bash
cd export
git init
git add .
git commit -m "Deploy portfolio"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
# Then enable GitHub Pages in repo settings
```

### Custom Domain Setup
1. Purchase domain from registrar (Namecheap, Google Domains, etc.)
2. Add domain to hosting platform (Netlify/Vercel/GitHub)
3. Update DNS records as instructed by platform
4. Wait for SSL certificate (usually automatic)

## 🧪 Post-Deployment Testing

After deployment, verify:
- [ ] Homepage loads correctly
- [ ] All case study pages are accessible
- [ ] Images load properly
- [ ] Navigation works on all pages
- [ ] Mobile responsiveness
- [ ] Page load speed (use PageSpeed Insights)
- [ ] SSL certificate is active (https)

## 📊 Analytics (Optional)

Add Google Analytics or similar:
```html
<!-- Add before </head> in all HTML files -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔐 Security Headers (Optional)

For advanced users, configure HTTP headers:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

---

**Ready to deploy?** Choose your platform and follow the README.md instructions!
