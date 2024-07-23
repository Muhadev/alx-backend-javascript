const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n');
      const validLines = lines.filter((line) => line.trim() !== '');

      if (validLines.length <= 1) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      const studentData = validLines.slice(1);

      const fieldCounts = {};

      studentData.forEach((line) => {
        const [firstname, , , field] = line.split(',');

        if (!fieldCounts[field]) {
          fieldCounts[field] = { count: 0, students: [] };
        }

        fieldCounts[field].count += 1;
        fieldCounts[field].students.push(firstname);
      });

      const totalStudents = studentData.length;
      console.log(`Number of students: ${totalStudents}`);

      Object.keys(fieldCounts).forEach((field) => {
        const { count, students } = fieldCounts[field];
        console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
