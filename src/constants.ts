const prodApi: string = "https://ec2-54-193-55-175.us-west-1.compute.amazonaws.com:8443/";
const devApi: string = "http://localhost:8080/";

export const API: string = process.env.NODE_ENV === 'production' ? prodApi : devApi;