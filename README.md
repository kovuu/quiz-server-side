# Mikah application(back-end)

A back-end of test React/Nodejs project used as questionnaire to collect user replies and provide the final result with pictures.
The project also has an admin section to make CRUD operations for any question/reply

![demo](./assets/demo.gif)

## Getting Started

To deploy the application on a local machine, 
enter the database data in config/config.json. Also you need to enter your AWS s3 keys in .env.

### Prerequisites

Make sure you have NodeJS and npm installed before starting the program.
Also you need to have aws api keys for S3.


### Installing

After you prepare your configs you can start installing dependencies on the server with the command below

    npm install

After installing you can start server:
    
    npm run start
    
or use a nodemon:
     
    npm run dev       
   


## Running the tests

Unit tests are run by the command below:
    
    npm run test
    

## Deployment

Deploy instruction:

1. create new Heroku project
    
        $ heroku login
        $ heroku create
        $ git init
        $ heroku git:remote -a ${name_of_your_project}
       
2. Deploy your application

        $ git add .
        $ git commit -am "make it better"
        $ git push heroku master    