

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
