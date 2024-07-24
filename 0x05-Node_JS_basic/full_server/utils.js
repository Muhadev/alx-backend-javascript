const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const header = lines[0].split(',');
      const students = {};

      for (const line of lines.slice(1)) {
        if (!line.trim()) continue;
        const values = line.split(',');
        const field = values[values.length - 1];
        const firstname = values[0];

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      }

      resolve(students);
    });
  });
}

module.exports = { readDatabase };
