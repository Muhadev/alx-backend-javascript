// 8-clean_set.js

function cleanSet(set, startString) {
    // Filter the set values that start with the specified startString
    const filteredValues = [...set].filter(value => value.startsWith(startString));
    
    // Map over the filtered values and remove the startString from each value
    const cleanedValues = filteredValues.map(value => value.slice(startString.length));
    
    // Join the cleaned values into a single string separated by '-'
    return cleanedValues.join('-');
  }
  
  export default cleanSet;
  