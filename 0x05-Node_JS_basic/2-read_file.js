const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the file content into lines
    const lines = data.split('\n');
    
    // Remove empty lines
    const validLines = lines.filter(line => line.trim() !== '');

    // If the file is empty or contains only headers
    if (validLines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Extract the header and data lines
    const header = validLines[0].split(',');
    const studentData = validLines.slice(1);

    // Initialize an object to store students count and names by field
    const fieldCounts = {};

    studentData.forEach(line => {
      const [firstname, lastname, age, field] = line.split(',');

      if (!fieldCounts[field]) {
        fieldCounts[field] = { count: 0, students: [] };
      }

      fieldCounts[field].count += 1;
      fieldCounts[field].students.push(firstname);
    });

    // Calculate the total number of students
    const totalStudents = studentData.length;
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and the list of first names
    for (const field in fieldCounts) {
      if (fieldCounts.hasOwnProperty(field)) {
        const { count, students } = fieldCounts[field];
        console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
      }
    }
  } catch (err) {
    // Throw an error if the file cannot be read
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
