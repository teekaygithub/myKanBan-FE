export let API:string = "";

if (process.env.NODE_ENV == 'production') {
    API = "https://ec2-54-193-55-175.us-west-1.compute.amazonaws.com:8443/";
} else {
    API = "http://localhost:8080/"
}