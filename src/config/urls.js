const baseUrl = "https://fuel-dispenser-api.onrender.com";
const role = "admin";

export const loginUrl = `${baseUrl}/v1/pump/${role}/login`;
export const signUpUrl = `${baseUrl}/v1/pump/${role}/signup`;
export const addUserUrl = `${baseUrl}/v1/pump/user/signup`;
export const allUsersUrl = `${baseUrl}/v1/pump/${role}/users`;
export const allAgentsUrl = `${baseUrl}/v1/pump/${role}/agent`;
