
![Logo](https://bounceinsights.com/wp-content/uploads/2020/06/method-draw-image-1.svg)


# Countries App (frontend)

The principle of the project is to retrieve information concerning a country by entering its name.


## Environment file
You can create if you want a .env file with some environment variables. Here is an example of this file :

```bash
PORT=8000
CLIENT_PORT=3000
API_KEY=7f654d09-8e8d-43a2-9bbf-5b938fb15ac7
```
## Run Locally
### With Docker
Go in the backend folder if you haven't already:

```bash
cd backend
```

Run docker (build + run):

```bash
npm run docker
```

You can now make a request like: http://localhost:8000/api/countries/{name}


### Without Docker
Go in the backend folder if you haven't already:

```bash
cd backend
```

Install all the dependancies:

```bash
npm install
```

Run the app:

```bash
npm start
```

You can now make a request like: http://localhost:8000/api/countries/{name}


## Running Tests

To run tests, make the following command:

```bash
npm run test
```


## API Reference

#### Get country details

```http
  GET /api/countries/{name}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `x-api-key` | `string` | **Required in production**. Your API key |



## How the API is structured ?

- In the **config** folder, you will find the configuration for cors and swagger.

- In the **tests** folder, you will find the tests.

- In the **src/controllers** folder, you will find the controllers of the api which corresponds to the first part in action when calling an endpoint.

- In the **src/middlewares** folder, you will find the middlewares like the api key verification or the logger.

- In the **src/models** folder, you will find the models used like the DTOs (objects received or returned to the client) or the DAOs (objects stored in the database).

- In the **src/routes** folder, you will find the endpoints of the api.

- In the **src/services** folder, you will find the logic of the API like communications with the database or calls to public APIs.

- In the **src/utils** folder, you will find some useful functions.
## Tech Stack

**Server:** Express/NodeJs

## Libraries

- **axios**: To make requests easily.
- **cors**: To handle which request origins can call the backend.
- **dotenv**: To use environment variables in any files.
- **express**: To handle the server part.
- **swagger-jsdoc/swagger-ui-express**: To document the api with swagger.
- **jest**: To make some tests.
## Author

Thomas Cacelles

- [Github](https://www.github.com/Thomas170)
- [LinkedIn](https://linkedin.com/in/thomas-cacelles-841822231)

