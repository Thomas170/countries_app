
![Logo](https://bounceinsights.com/wp-content/uploads/2020/06/method-draw-image-1.svg)


# Countries App (frontend)

The principle of the project is to retrieve information concerning a country by entering its name.


## Environment file
You can create if you want a .env file with some environment variables. Here is an example of this file :

```bash
REACT_APP_BACKEND_API_URL=http://localhost:8000
REACT_APP_API_KEY=7f654d09-8e8d-43a2-9bbf-5b938fb15ac7
```
## Run Locally
### With Docker
Go in the frontend folder if you haven't already:

```bash
cd frontend
```

Run docker (build + run):

```bash
npm run docker
```

Go to http://localhost:3000


### Without Docker
Go in the frontend folder if you haven't already:

```bash
cd frontend
```

Install all the dependancies:

```bash
npm install
```

Run the app:

```bash
npm start
```

Go to http://localhost:3000


## Running Tests

To run tests **by opening** the cypress window for **unit** tests:

```bash
  npm run cypress:unit:open
```

To run tests **without** opening the cypress window for **unit** tests:

```bash
  npm run cypress:unit:run
```

To run tests **by opening** the cypress window for **e2e** tests:

```bash
  npm run cypress:e2e:open
```

To run tests by **without** the cypress window for **e2e** tests:

```bash
  npm run cypress:e2e:run
```


## How the app works ?

To use the app, go to **http://localhost:3000** (in local) or to **https://countries-app-website.vercel.app**.

You will see a **Search Bar**. Type a country **name** in it and click on the **Search Button**.

If the country name exists, **details about it** will appear under the search bar. You just have to read it and do it again if you want!

## How the app is structured ?

- In the **public** folder, you will find the images and fonts used in the app.

- In the **cypress/e2e** folder, you will find the end to end tests.

- In the **src/components** folder, you will find all the main components of the app (like home page etc...).

- In the **src/shared** folder, you will find all the global/reusable components (like a simple button etc...).

- In the **src/services** folder, you will find all the API calls to the backend.


## Tech Stack

**Client:** React

## Libraries

- **axios**: To make requests easily.
- **react-icons**: To use icons.
- **react-loader-spinner**: To add a component loader in html/css
- **concurrently**: To run to npm scripts in parallel.
- **cypress**: To make some tests.

## Author

Thomas Cacelles

- [Github](https://www.github.com/Thomas170)
- [LinkedIn](https://linkedin.com/in/thomas-cacelles-841822231)

