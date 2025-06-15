# My Academic Website

A personalized academic portfolio website built with [Astro Academia](https://github.com/maiobarbero/astro_academia) template.

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will be available at `http://localhost:4321`

## 📝 Personalization Checklist

### 1. Update Personal Information
Edit `src/settings.ts` to customize:
- [ ] Full name and title
- [ ] Institution/University
- [ ] Research areas
- [ ] Social media links (email, LinkedIn, GitHub, etc.)
- [ ] Website URL (update when you have your GitHub Pages URL)

### 2. Customize Your CV
Edit `src/data/cv.ts` to add your:
- [ ] Work experience
- [ ] Education background
- [ ] Skills and expertise
- [ ] Publications and papers

### 3. Add Your Content
- [ ] Add blog posts in `src/content/BlogPosts/` (follow the existing examples)
- [ ] Update research information in the pages
- [ ] Add your profile photo to `public/images/`

### 4. Deploy to GitHub Pages
1. [ ] Push your changes to GitHub
2. [ ] Go to your repository Settings → Pages
3. [ ] Set Source to "GitHub Actions"
4. [ ] The site will automatically deploy when you push to main branch

## 📁 Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── content/        # Blog posts and content
│   │   └── BlogPosts/  # Your blog posts (.md files)
│   ├── data/           # Data files (CV, etc.)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Website pages
│   │   ├── index.astro # Homepage
│   │   ├── cv.astro    # CV page
│   │   ├── papers.astro # Publications page
│   │   ├── research.astro # Research page
│   │   └── blog/       # Blog pages
│   └── settings.ts     # Main configuration
├── public/             # Static assets
└── .github/workflows/  # GitHub Actions for deployment
```

## 🎨 Customization Tips

### Adding Blog Posts
Create new `.md` files in `src/content/BlogPosts/` with this format:
```markdown
---
title: "Your Post Title"
date: "2024-01-15"
tags: ["tag1", "tag2"]
excerpt: "Brief description of your post"
---

# Your content here
```

### Updating Colors and Themes
The website uses DaisyUI themes. You can change themes in `src/settings.ts`:
- `lightTheme`: Theme for light mode
- `darkTheme`: Theme for dark mode

### Adding Images
Place images in the `public/images/` directory and reference them with `/images/filename.jpg`

## 🔧 Current Features

✅ **Responsive Design** - Works on all devices  
✅ **Dark/Light Mode** - Toggle between themes  
✅ **Blog System** - Markdown-based blog posts  
✅ **CV Page** - Professional resume display  
✅ **Publications** - Research papers showcase  
✅ **Research Areas** - Highlight your expertise  
✅ **Social Links** - Connect with your audience  
✅ **SEO Optimized** - Better search engine visibility  
✅ **Auto-deployment** - GitHub Actions integration  

## 📱 Sample Content Included

I've added some sample content to get you started:
- Welcome blog post introducing your website
- Research methodology blog post
- Sample CV entries with academic focus
- Configured social media placeholders

## 🚀 Next Steps

1. **Personalize the content** using the checklist above
2. **Test locally** with `npm run dev`
3. **Push to GitHub** and enable GitHub Pages
4. **Share your new academic website!**

## 💡 Need Help?

- Check the original [Astro Academia documentation](https://github.com/maiobarbero/astro_academia)
- Review [Astro documentation](https://docs.astro.build/)
- Look at the sample blog posts for formatting examples

---

*Happy researching and sharing your academic journey! 🎓*
