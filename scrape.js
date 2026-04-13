const https = require('https');
const fs = require('fs');

https.get('https://www.arjavjain.me/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('scraped.html', data);
    console.log('Website fetched successfully!');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
