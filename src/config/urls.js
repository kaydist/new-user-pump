const baseUrl = "https://fuel-dispenser-api.herokuapp.com";
const role = "user";

export const loginUrl = `${baseUrl}/v1/pump/${role}/login`;
export const signUpUrl = `${baseUrl}/v1/pump/${role}/signup`;
export const addUserUrl = `${baseUrl}/v1/pump/user/signup`;
export const allUsersUrl = `${baseUrl}/v1/pump/${role}/users`;
export const allAgentsUrl = `${baseUrl}/v1/pump/${role}/agent`;
export const depositUrl = `${baseUrl}/v1/pump/${role}/deposit`;
export const allTransactionsUrl = `${baseUrl}/v1/pump//transactions/account-statement`;
