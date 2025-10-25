# Our Work Section - Complete Package

This folder contains all the necessary files for the "Our Work" section with the tagline **"Over a Decade of Experience, Infinite Innovation."**

## 📁 Folder Structure

```
OurWork_Section/
├── components/
│   ├── OurWork.jsx          # Main Our Work component
│   └── OurWork.css          # Styles for Our Work component
├── pages/
│   ├── Portfolio.jsx        # Portfolio page implementation
│   └── Portfolio.css        # Portfolio page styles
├── assets/                  # Asset folders (you need to copy your images here)
│   ├── Website_Portfolio/   # Website portfolio images
│   ├── logo-portfolio/      # Logo design images
│   ├── branding-portfolio/  # Branding project images
│   ├── Motion_video/        # Motion graphics videos and posters
│   └── Android_portfolio/   # Mobile app images
└── README.md               # This file
```

## 🚀 How to Use

### 1. Copy the Files
Copy all files from this folder to your project:

- **OurWork.jsx** → `src/components/OurWork.jsx`
- **OurWork.css** → `src/components/OurWork.css`
- **Portfolio.jsx** → `src/pages/Portfolio.jsx` (if you want the complete portfolio page)
- **Portfolio.css** → `src/pages/Portfolio.css` (if you want the complete portfolio page)

### 2. Copy Your Assets
Copy your image and video files to the corresponding asset folders in your project:

```
src/assets/
├── Website_Portfolio/       # Copy your website images here
├── logo-portfolio/          # Copy your logo images here
├── branding-portfolio/      # Copy your branding images here
├── Motion_video/            # Copy your motion graphics here
└── Android_portfolio/       # Copy your app images here
```

### 3. Install Dependencies
Make sure you have these dependencies installed:

```bash
npm install framer-motion
```

### 4. Import and Use

#### For Home Page:
```jsx
import OurWork from './components/OurWork'

// In your component
<OurWork isHomePage={true} />
```

#### For Portfolio Page:
```jsx
import OurWork from './components/OurWork'

// In your component
<OurWork isHomePage={false} />
```

## 🎨 Features

### ✨ Interactive Portfolio Gallery
- **5 Categories**: Website Development, Logo Design, Branding, Motion Graphics, App Development
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Powered by Framer Motion
- **Modal Viewers**: Click images to view in full-screen modal
- **Video Support**: Motion graphics with video playback
- **Load More**: Progressive loading for better performance

### 🎯 Key Components

1. **Tab Navigation**: Switch between different work categories
2. **Image Gallery**: Responsive grid layout with hover effects
3. **Modal System**: Full-screen image and video viewers
4. **Mobile Optimization**: Special mobile grid layout
5. **Load More Buttons**: Progressive content loading

### 📱 Responsive Breakpoints

- **Desktop**: 4-column grid layout
- **Tablet**: 2-column grid layout  
- **Mobile**: 2-column compact grid
- **Small Mobile**: Optimized single column

## 🎨 Styling

### CSS Variables Used
Make sure these CSS variables are defined in your main CSS:

```css
:root {
  --primary-orange: #FF6B35;
  --secondary-orange: #F7931E;
  --dark-orange: #E55A2B;
  --light-orange: #FFB366;
  --text-primary: #002B5B;
  --text-secondary: #073535;
  --text-white: #FFFFFF;
  --primary-white: #FFFFFF;
  --light-gray: #F8F9FA;
  --border-gray: #E0E0E0;
  --shadow-light: 0 2px 8px rgba(0,0,0,0.1);
  --shadow-medium: 0 4px 16px rgba(0,0,0,0.15);
  --shadow-large: 0 8px 32px rgba(0,0,0,0.2);
}
```

## 🔧 Customization

### Adding New Work Items
Edit the `WORKS` object in `OurWork.jsx`:

```jsx
const WORKS = {
  web: [
    { id: 1, img: imgWeb1 },
    { id: 2, img: imgWeb2 },
    // Add more items...
  ],
  // Add more categories...
};
```

### Changing Tab Labels
Edit the `TABS` array in `OurWork.jsx`:

```jsx
const TABS = [
  { label: "Your Custom Label", key: "custom" },
  // Add more tabs...
];
```

### Modifying Colors
Update the CSS variables or directly edit the styles in `OurWork.css`.

## 📋 Content Structure

### Main Heading
- **Title**: "Our Work"
- **Subtitle**: "Over a Decade of Experience, Infinite Innovation."

### Portfolio Categories
1. **Website Development** - Web design and development projects
2. **Logo Design** - Brand identity and logo designs
3. **Branding** - Complete branding packages
4. **Motion Graphics** - Animated content and videos
5. **App Development** - Mobile application designs

### Additional Sections (Portfolio Page)
- **Stats Section**: Project statistics and achievements
- **Testimonials**: Client feedback and reviews

## 🎯 SEO Optimization

The component includes SEO-friendly structure:
- Semantic HTML elements
- Proper alt tags for images
- Structured data for portfolio items
- Meta descriptions for portfolio pages

## 🚀 Performance Features

- **Lazy Loading**: Images load as needed
- **Progressive Enhancement**: Works without JavaScript
- **Optimized Animations**: Smooth 60fps animations
- **Mobile-First**: Optimized for mobile devices

## 📞 Support

If you need help implementing this section:

1. Check that all image paths are correct
2. Ensure Framer Motion is installed
3. Verify CSS variables are defined
4. Test on different screen sizes

## 🎉 Ready to Use!

This complete package gives you a professional, interactive portfolio section that showcases your work beautifully across all devices. Just copy the files, add your images, and you're ready to go!

---

**Note**: Remember to update the image import paths in `OurWork.jsx` to match your actual asset structure after copying the files to your project.
