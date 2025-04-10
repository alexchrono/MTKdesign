const fs = require('fs');
const path = require('path');
const process = require('process');

const removeLogs = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${filePath}`, err);
      return;
    }

    let result = data;
    const patterns = [
      /console\.log\(.*?\);?/gs,
      /TurboLogger\..*?\(.*?\);?/gs,
      /print\(.*?\);?/gs,
      /ic\(.*?\);?/gs,
    ];

    patterns.forEach(pattern => {
      result = result.replace(pattern, '');
    });

    fs.writeFile(filePath, result, 'utf8', err => {
      if (err) {
        console.error(`Error writing file: ${filePath}`, err);
      } else {
        console.log(`Processed: ${filePath}`);
      }
    });
  });
};

const processDirectory = (dirPath) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${dirPath}`, err);
      return;
    }

    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      fs.stat(fullPath, (err, stat) => {
        if (err) {
          console.error(`Error stating file: ${fullPath}`, err);
          return;
        }

        if (stat.isFile()) {
          removeLogs(fullPath);
        } else if (stat.isDirectory()) {
          processDirectory(fullPath);
        }
      });
    });
  });
};

const targetPath = process.argv[2];
if (!targetPath) {
  console.log("Usage: node removeLogs.js <file_or_directory_path>");
  process.exit(1);
}

const fullPath = path.resolve(targetPath);
fs.stat(fullPath, (err, stat) => {
  if (err) {
    console.error(`Error stating target: ${fullPath}`, err);
    process.exit(1);
  }

  if (stat.isFile()) {
    removeLogs(fullPath);
  } else if (stat.isDirectory()) {
    processDirectory(fullPath);
  }
});
