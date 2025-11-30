# Quick WebP Setup Guide

## ✅ Code Updated!

All component imports have been updated to use `.webp` extensions. Now you need to convert your images.

## 🚀 Quick Conversion (Recommended)

### Option 1: Using Sharp (Automated - Best for Batch)

1. **Install Sharp:**
   ```bash
   npm install sharp --save-dev
   ```

2. **Run Conversion Script:**
   ```bash
   npm run convert-to-webp
   ```

This will automatically convert all PNG, JPG, JPEG images to WebP format in the `src/assets` folder.

### Option 2: Online Tool (Manual - Best for Quality Control)

1. Go to **Squoosh**: https://squoosh.app/
2. Upload each image
3. Select **WebP** format
4. Set quality to **85%** (recommended)
5. Download and replace the original file with `.webp` extension

### Option 3: Command Line (ImageMagick)

```bash
# Install ImageMagick first, then:
magick input.png output.webp
```

## 📋 Images That Need Conversion

### Main Assets:
- `earth.png` → `earth.webp`
- `aboutus.jpg` → `aboutus.webp`
- `gen logo.png` → `gen logo.webp`

### OurWork Component:
- `weflex.png` → `weflex.webp`
- `american.png` → `american.webp`
- `museum.png` → `museum.webp`
- `tidyspaces.png` → `tidyspaces.webp`
- `art.png` → `art.webp`
- `ajmartpk.png` → `ajmartpk.webp`

### Projects Component:
- `scuola.jpeg` → `scuola.webp`
- `sucola2.jpeg` → `sucola2.webp`
- `premier pulse.jpeg` → `premier pulse.webp`
- `premier pulse 2.jpeg` → `premier pulse 2.webp`
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

### Team Component:
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

## ✅ After Conversion

1. **Test the website** - Make sure all images load correctly
2. **Verify quality** - Check that images look good
3. **Check file sizes** - WebP should be 25-35% smaller
4. **Remove originals** (optional) - After confirming everything works

## 🎯 Benefits

- **25-35% smaller file sizes**
- **Faster page loads**
- **Better mobile performance**
- **Modern browser support** (all major browsers)

## ⚠️ Note

If you get import errors after conversion, make sure:
1. The `.webp` files exist in the correct locations
2. File names match exactly (including spaces and case)
3. Run `npm run dev` to see if there are any issues

## 🔄 Fallback Support

The code is set up to use WebP directly. If you need fallback support for older browsers, the `WebPImage` component in `src/components/WebPImage.jsx` can be used, but it's not necessary for modern browsers.

