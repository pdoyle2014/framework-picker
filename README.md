

# Framework Picker

## About
Framework Picker enables users to view statistics about various JavaScript frameworks (pulled from the associated Github repo's via API), then cast a vote for their favorite Framework. 
Vote data is persisted in MongoDB Atlas. 
Framework Picker utilizes a React front end and Express back end.


### Front-End
The front end of this application is powered by React, with Axios to implement API calls.
The primary component is "FrameworkDisplay.js".
This component executes API calls to Github to retreive the dashboard data, as well as to its own back end to record vote data.
Within the componentDidMount() method, a setInterval() function ensures that data is fetched from the Github API and the dashboard is re-rendered every 10 seconds.
The state object within FrameworkDisplay.js stores the framework data fetched from Github, controls whether the voting modal is displayed, and stores the votes cast during the current browser session.
By storing the votes that have been cast during the current session, the application can prevent the same email address from voting twice in the same browser session.



### Back-End
The back end of this application is powered by Express.
A single file ("server.js") within the project's root directory ("framework_dashboard") contains all back-end code.
The backend is linked to a Mongo DB Atlas cluster for data persistence.
"server.js" implements a .post method to record a new vote, as well as a .get method to retrieve a tally of votes per choice.



### Fetching Vote Data
The vote data collected through this app is publicly available via API.
By executing a get request to /votes endpoint, users can access an object showing the total number of votes each framework receivd.



Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
