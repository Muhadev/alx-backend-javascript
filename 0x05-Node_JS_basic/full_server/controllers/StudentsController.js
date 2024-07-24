const { readDatabase } = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    const databaseFile = process.argv[2];
    readDatabase(databaseFile)
      .then((students) => {
        const responseParts = ['This is the list of our students'];
        const fields = Object.keys(students).sort();

        fields.forEach((field) => {
          const list = students[field];
          responseParts.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        });

        res.status(200).send(responseParts.join('\n'));
      })
      .catch((error) => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const databaseFile = process.argv[2];
    readDatabase(databaseFile)
      .then((students) => {
        const list = students[major] || [];
        res.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch((error) => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
