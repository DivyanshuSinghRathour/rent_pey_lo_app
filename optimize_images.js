const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesToOptimize = ['image1.png', 'image2.png', 'image3.png'];
const sourceDir = path.join(__dirname, 'src', 'assets', 'images');

async function optimizeImage(filename) {
    const inputPath = path.join(sourceDir, filename);
    const outputPath = path.join(sourceDir, `optimized_${filename}`);
    
    try {
        await sharp(inputPath)
            .resize(1024, 1024, { 
                fit: 'inside',
                withoutEnlargement: true
            })
            .png({ 
                quality: 80,
                compressionLevel: 9
            })
            .toFile(outputPath);
        
        fs.unlinkSync(inputPath);
        fs.renameSync(outputPath, inputPath);
        
        console.log(`Successfully optimized ${filename}`);
    } catch (error) {
        console.error(`Error optimizing ${filename}:`, error);
    }
}

async function main() {
    console.log('Starting image optimization...');
    
    for (const image of imagesToOptimize) {
        await optimizeImage(image);
    }
    
    console.log('Image optimization complete!');
}

main().catch(console.error); 