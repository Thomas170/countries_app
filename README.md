
![Logo](https://bounceinsights.com/wp-content/uploads/2020/06/method-draw-image-1.svg)


# Countries App (frontend)

The principle of the project is to retrieve information concerning a country by entering its name.

⚠️ There are a lot of information for both backend and frontend apps so there are a README.md file inside each app with more details. ⚠️


## Run Locally
### With Docker and Docker compose
Run the launch script:

```bash
./launch.sh
```

If there is a permission error, make :

```bash
chmod +xr launch.sh
```

If it still doesn't work, you can build and run manually :

```bash
docker-compose build
docker-compose up
```

Go to http://localhost:3000


### Without Docker
Run the backend app:

```bash
cd backend
npm install
npm start
```

Go back in the root folder with another terminal:

```bash
cd ..
```

Run the frontend app:

```bash
cd frontend
npm install
npm start
```

Go to http://localhost:3000


## How the app works ?

To use the app, go to **http://localhost:3000** (in local) or to **https://countries-app-website.vercel.app**

⚠️ The app is deployed on **Vercel** because Heroku has become paid. ⚠️

You will see a **Search Bar**. Type a country **name** in it and click on the **Search Button**.

If the country name exists, **details about it** will appear under the search bar. You just have to read it and do it again if you want!

## Tech Stack

**Client:** React
**Server:** Express/NodeJs

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

