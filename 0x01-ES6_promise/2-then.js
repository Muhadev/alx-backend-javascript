function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.log('Got a response from the API');
      return new Error();
    });
}
export default handleResponseFromAPI;
