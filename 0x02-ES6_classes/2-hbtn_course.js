class HolbertonCourse {
  constructor(name, length, students) {
    this._validateString(name, 'Name must be a string');
    this._validateNumber(length, 'Length must be a number');
    this._validateArray(students, 'Students must be an array of strings');

    this._name = name;
    this._length = length;
    this._students = students;
  }
  _validateString(value, errorMessage) {
    if (typeof value !== 'string') {
      throw new TypeError(errorMessage);
    }
  }
  _validateNumber(value, errorMessage) {
    if (typeof value !== 'number') {
      throw new TypeError(errorMessage);
    }
  }
  _validateArray(value, errorMessage) {
    if (!Array.isArray(value) || !value.every(item => typeof item === 'string')) {
      throw new TypeError(errorMessage);
    }
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._validateString(value, 'Name must be a string');
    this._name = value;
  }
  get length() {
    return this._length;
  }
  
  set length(value) {
    this._validateNumber(value, 'Length must be a number');
      this._length = value;
    }
  
    // Getter and Setter for students
    get students() {
      return this._students;
    }
  
    set students(value) {
      this._validateArray(value, 'Students must be an array of strings');
      this._students = value;
    }
  }
  
  export default HolbertonCourse;
  