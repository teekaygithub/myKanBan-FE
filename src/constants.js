var API = "";
if (process.env.NODE_ENV == 'production') {
    API = "http://ec2-54-183-254-184.us-west-1.compute.amazonaws.com:8080/";
} else {
    API = "https://localhost:8443/"
}

export var API;