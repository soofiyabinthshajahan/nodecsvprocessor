const fs = require("fs");

fs.readFile("demo.csv", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  const lines = data.trim().split("\n");

  const output = setTimeout(() => {
   
    lines.forEach((line, index) => {
      if (index % 2 == 1) {
        const fileName = `output_${index}.csv`;
        const content = line.trim();


          fs.writeFile(fileName, content, (err) => {
            if (err) {
              console.error(`Error writing ${fileName}:`, err);
              return;
            }
            console.log(`${fileName} created successfully.`);
          });
        
        
      }
    }, 2000);
  });
});
