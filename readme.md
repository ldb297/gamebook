# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Node.js, Express, PostgreSQL, Passport Application

## gamebook
An open discussion board for your friends and family to chat about your favorite video games! Non-users can view current discussion boards, adding capabilities of joining discussions once signed up or logged in to application.

## installation
There are a few steps to hosting this application locally. (must have node and postgres)

**I built this application on a M1 MBP, so some of these instructions may not track for windows users.**

-clone repository into a local directory

-terminal:```npm i``` to install all dependencies

-terminal:```sequelize init``` to initialize sequelize command line environment for database mgmt

-open postgres and ensure its running

-terminal:```createdb gamebook``` to create local version of server

-terminal:```nodemon``` i use nodemon to run my local servers, you could also just run the command ```node server.js``` to boot up the server. Near the last lines of my server.js you'll find the local PORT is 8888.

 ## Current Features
-landing page displays ongoing threads

-profile page displays related threads

-single discussion page displaying responsive api data with scrolling comments box

-search page for finding new games to discuss

 
 ## Proposed Additions
-browse page (loads possible post ideas based on user)

-favorites lists specific to users

-audio alerts for failed authentication

