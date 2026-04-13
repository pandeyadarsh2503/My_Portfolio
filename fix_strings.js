const fs = require('fs');
const path = require('path');

const dir = 'src/components';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace \` with `
    content = content.replace(/\\`/g, '`');
    
    // Replace \${ with ${
    content = content.replace(/\\\$\{/g, '${');
    
    fs.writeFileSync(filePath, content, 'utf-8');
  }
});
console.log("Fixed template literals in all components.");
