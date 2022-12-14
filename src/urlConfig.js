// export const api = 'http://localhost:2000/api';
// export const generatePublicUrl = (fileName) => {
//   return `http://localhost:2000/public/${fileName}`;
// }
const baseUrl = "https://flipkart-rest-server.herokuapp.com";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};