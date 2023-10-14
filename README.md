![Logo](https://bounceinsights.com/wp-content/uploads/2020/06/method-draw-image-1.svg)


# Countries App

The principle of the project is to retrieve information concerning a country by entering its name.


## Run Locally

To launch the app:

```bash
  ./lauch.sh
```

To run tests:

```bash
  npm run test
```

To open the application in local:

```bash
  http://localhost:3000
```

To open the swagger documentation of the backend:

```bash
  http://localhost:8000/api-docs
```


## Environment file
You can create if you want a .env file with some environment variables. Here is an example of this file :

```bash
PORT=8000
REST_COUNTRIES_API_URL=https://restcountries.com/v3.1/name/
API_KEY=key
```
## API Reference

#### Get country details

```http
  GET /api/countries/{name}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |



## Tech Stack

**Client:** React

**Server:** Node, Express


## Author
Thomas Cacelles
- [Github](https://www.github.com/Thomas170)
- [LinkedIn](https://linkedin.com/in/thomas-cacelles-841822231)

