function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating a response from an API
    const response = {
      status: 200,
      body: 'photo-profile-1',
    };
    // Resolve the promise with the response object
    resolve(response);
  });
}
export default getResponseFromAPI;
