#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');

const sourceDir = path.join(__dirname, 'templates');
const destDir = process.cwd();

console.log('Copying necessary files to: ', destDir);
try {
  fs.copySync(sourceDir, destDir, { overwrite: false, errorOnExist: false });
  console.log('Files copied successfully!');
} catch (err) {
  console.error('Error copying files:', err.message);
}