# First thing first:
run yarn add to install all the dependencies

# to start the project
run yarn start and a new window on your browser should open. if not, go to http://localhost:3000/#/

# About this project
This project was made with React hooks. There are two main pages:
1. Home page- where you can search for movies. This page contains two smaller components:
    1. movie list which renders the movie preview using array map. each movie preview contains a card componnet from material ui
    2. search movie - which holds the search form and navigate and changes the query params
2. Movie details page - this component gets the movie id from query params. if there is no id or any other error of any kind, the page will automaticlly ridirect the user after 3 seconds

