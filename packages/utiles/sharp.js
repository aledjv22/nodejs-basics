const sharp = require('sharp');

// Load the file to work with
sharp('./nodejs_icon.png')
    .resize(80) // Modify the resolution size
    .grayscale() // Modify the color of the file to grayscale
    .toFile('nodejs_icon2.png'); // Store everything in a new indicated file.