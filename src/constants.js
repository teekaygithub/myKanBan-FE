var API = "";
if (process.env.NODE_ENV == 'production') {
    API = "http://ec2-54-193-55-175.us-west-1.compute.amazonaws.com:8080/";
} else {
    API = "http://localhost:8080/"
}

export var API;