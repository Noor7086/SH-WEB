# WebP Image Conversion Guide

## Quick Conversion (Using Sharp - Recommended)

### Step 1: Install Sharp
```bash
npm install sharp --save-dev
```

### Step 2: Run Conversion Script
```bash
node convert-to-webp.js
```

This will automatically convert all PNG, JPG, JPEG images to WebP format while preserving originals.

## Manual Conversion Options

### Option 1: Online Tools
1. **Squoosh** (Recommended): https://squoosh.app/
   - Upload image
   - Select WebP format
   - Adjust quality (85% recommended)
   - Download

2. **TinyPNG**: https://tinypng.com/
   - Supports WebP conversion
   - Batch processing available

### Option 2: Command Line (ImageMagick)
```bash
# Install ImageMagick first
# Windows: choco install imagemagick
# Mac: brew install imagemagick
# Linux: sudo apt-get install imagemagick

# Convert single image
magick input.png output.webp

# Batch convert all PNG files
for file in *.png; do magick "$file" "${file%.png}.webp"; done
```

### Option 3: Using cwebp (Google's WebP Tools)
```bash
# Install WebP tools
# Windows: Download from https://developers.google.com/speed/webp/download
# Mac: brew install webp
# Linux: sudo apt-get install webp

# Convert single image
cwebp -q 85 input.png -o output.webp

# Batch convert
for file in *.png; do cwebp -q 85 "$file" -o "${file%.png}.webp"; done
```

## Images That Need Conversion

### Projects Component
- `scuola.jpeg` → `scuola.webp`
- `sucola2.jpeg` → `sucola2.webp`
- `premier pulse.jpeg` → `premier pulse.webp`
- `premier pulse 2.jpeg` → `premier pulse 2.webp`
- `weflex.png` → `weflex.webp`
- `american.png` → `american.webp`
- `museum.png` → `museum.webp`
- `ess1.jpeg` → `ess1.webp`
- `ess2.jpeg` → `ess2.webp`
- `virtual1.PNG` → `virtual1.webp`
- `virtual2.PNG` → `virtual2.webp`
- `virtual3.PNG` → `virtual3.webp`
- `lab.jpg` → `lab.webp`
- `lab2.jpg` → `lab2.webp`
- `lab3.jpg` → `lab3.webp`
- `logo1.png` → `logo1.webp`
- `logo2.jpg` → `logo2.webp`
- `logo3.jpg` → `logo3.webp`
- `logo4.jpg` → `logo4.webp`
- `logo7.jpg` → `logo7.webp`
- `logo8.png` → `logo8.webp`

### OurWork Component
- `weflex.png` → `weflex.webp`
- `american.png` → `american.webp`
- `museum.png` → `museum.webp`
- `tidyspaces.png` → `tidyspaces.webp`
- `art.png` → `art.webp`
- `ajmartpk.png` → `ajmartpk.webp`

### Team Component
- `fahad.jpg` → `fahad.webp`
- `fahad .png` → `fahad .webp`
- `mahnoor profile.JPG` → `mahnoor profile.webp`
- `mahnoor1.png` → `mahnoor1.webp`
- `taha profile.jpg` → `taha profile.webp`
- `taha2.png` → `taha2.webp`
- `ibrahim profile.jpeg` → `ibrahim profile.webp`
- `ibrahim.png` → `ibrahim.webp`
- `ubaid profile.jpg` → `ubaid profile.webp`
- `ubaid portfolio .png` → `ubaid portfolio .webp`

### Other Components
- `gen logo.png` → `gen logo.webp` (Navbar, Footer)
- `earth.png` → `earth.webp` (Hero)
- `aboutus.jpg` → `aboutus.webp` (About)

## After Conversion

1. Update all imports in components to use `.webp` extension
2. Test website to ensure all images load
3. Verify image quality is acceptable
4. Consider removing original files to save space (keep backups!)

## Quality Settings

- **High Quality (Recommended)**: 85-90% - Best balance of quality and file size
- **Medium Quality**: 75-80% - Smaller files, slight quality loss
- **Low Quality**: 60-70% - Smallest files, noticeable quality loss

## Benefits of WebP

- **25-35% smaller** than JPEG/PNG
- **Better quality** at same file size
- **Faster loading** times
- **Better performance** on mobile
- **Modern browser support** (all major browsers)

## Browser Support

WebP is supported in:
- Chrome (since v23)
- Firefox (since v65)
- Edge (since v18)
- Safari (since v14)
- Opera (since v12.1)

For older browsers, we can add fallback support using `<picture>` element.

