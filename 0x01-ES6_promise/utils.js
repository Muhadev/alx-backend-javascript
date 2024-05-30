// Simulated uploadPhoto function that returns a promise
function uploadPhoto() {
    return new Promise((resolve) => {
      // Simulating uploading a photo
      setTimeout(() => {
        resolve({ status: 200, body: 'photo-profile-1' });
      }, 1000); // Simulating a delay of 1 second
    });
  }
  
  // Simulated createUser function that returns a promise
  function createUser() {
    return new Promise((resolve) => {
      // Simulating creating a user
      setTimeout(() => {
        resolve({ firstName: 'Guillaume', lastName: 'Salva' });
      }, 1500); // Simulating a delay of 1.5 seconds
    });
  }
  
  export { uploadPhoto, createUser };
  