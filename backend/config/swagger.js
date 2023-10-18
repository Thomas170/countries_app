const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: "3.1.0",
        info: {
            title: "Countries App",
            version: "1.0.0",
            description:
                "This is a simple API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Thomas Cacelles",
                url: "https://linkedin.com/in/thomas-cacelles-841822231",
                email: "thomascacelles@icloud.com",
            },
        },
        servers: [
            {
                url: "http://localhost:8000",
            },
        ],
    },
    apis: ['./app/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
