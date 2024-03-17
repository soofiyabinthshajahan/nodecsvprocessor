const fs = require('fs');

fs.readFile('demo.csv', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const lines = data.trim().split('\n');

  lines.forEach((line, index) => {
    const fileName = `output_${index + 1}.csv`;
    const content = line.trim();

    fs.writeFile(fileName, content, (err) => {
      if (err) {
        console.error(`Error writing ${fileName}:`, err);
        return;
      }
      console.log(`${fileName} created successfully.`);
    });
  });
});
