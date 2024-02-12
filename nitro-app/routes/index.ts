export default defineEventHandler((event) => {
  setResponseHeaders(event, {
    "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Credentials': 'true',
    "Access-Control-Allow-Headers": '*',
    "Access-Control-Expose-Headers": '*'
  })
  if (getMethod(event) === 'OPTIONS') {
    event.res.statusCode = 204
    event.res.statusMessage = "No Content."
    return 'OK'
  }

  // Respond with JSON message for other requests
  event.res.setHeader('Content-Type', 'application/json');
  event.res.statusCode = 200;
  event.res.end(JSON.stringify({
    message: `You Have Been Greeted from Node-API 🙂.  
   The purpose of this setup is to demonstrate how a Vue.js frontend and Express.js backend can be containerized using Docker.
Docker containers provide a lightweight and portable way to package, distribute, and run applications.
By containerizing both the frontend and backend, you can ensure consistency and ease of deployment across different environments.
Overall, this setup showcases a simple web application architecture with separate frontend and backend components interacting via HTTP requests, suitable for demonstrating Docker containerization.` }));

})