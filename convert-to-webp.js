// Image Conversion Script to WebP
// Run this script to convert all images to WebP format
// Requires: npm install sharp --save-dev

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');

// Function to convert image to WebP
async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
    console.log(`✓ Converted: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to convert ${inputPath}:`, error.message);
    return false;
  }
}

// Function to recursively find and convert images
async function convertImagesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      await convertImagesInDirectory(filePath);
    } else if (stat.isFile()) {
      // Check if it's an image file (not already WebP)
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.JPG', '.JPEG', '.PNG'].includes(ext)) {
        const webpPath = filePath.replace(ext, '.webp');
        
        // Only convert if WebP doesn't already exist
        if (!fs.existsSync(webpPath)) {
          await convertToWebP(filePath, webpPath);
        } else {
          console.log(`⊘ Skipped (WebP exists): ${file}`);
        }
      }
    }
  }
}

// Main function
async function main() {
  console.log('🔄 Starting image conversion to WebP...\n');
  
  if (!fs.existsSync(assetsDir)) {
    console.error('❌ Assets directory not found!');
    return;
  }
  
  await convertImagesInDirectory(assetsDir);
  
  console.log('\n✅ Conversion complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Update component imports to use .webp extensions');
  console.log('2. Test the website to ensure all images load correctly');
  console.log('3. Consider removing original image files after verification');
}

main().catch(console.error);

