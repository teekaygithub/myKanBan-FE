var API = "";
if (process.env.NODE_ENV == 'production') {
    API = "http://mykanbanbe-env.eba-53cbc8m6.us-west-1.elasticbeanstalk.com/";
} else {
    API = "http://localhost:8080/"
}

export var API;