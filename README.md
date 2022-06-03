# 💯 Pokemon Hunt 💯

## User Stories:

- [X] As a user, I want there to be a landing page at the / page that displays the message “Welcome to the world of Pokemon!” where I can click to enter so that I can enter the application.
- [X] As a user, i want to be directed to the /forest page that will take me to a pokemon forest so that I have a default region to go to
- [X] As a user, I want to see a few options of different regions (town, forest, gym, beach) that I can be redirect to so that I can see pokemon in that region
- [X] As a user, I should see a button that brings up a pokedex with pokemon names that I have had yet to see, with the image of a question mark beside them so that I know I have more pokemon to discover
- [X] As a user, when I visit a region, I should be redirected to a page with /*region name* and see a background image that corresponds with the type of region I’m visiting, so that i can see which region I'm in.
- [X] As a user, if I visit a pokemon region, I should see 3-5 pokemon whose types correspond with the region so that I can click and add them to my pokedex
- [X] As a user, if I click on a pokemon, I should be able to add it to my pokedex so I can now see its icon and click to view pokemon details within the pokedex
- [X] As a user, I should be able to see tabs at the top of the page with regions I can go to (above the image of the current region) so that I can navigate between regions
- [X] As a pokemon master, I should see a toolbar at the bottom of my screen so that I can access my pokedex


## Figma Wireframe:
 - https://www.figma.com/file/zMOWAWBfgvCfvJFiq0iHCv/Cool?node-id=0%3A1


## Region & Types:

- [X] Forest Region: Grass, Bug, Flying, Poison, Fairy
- [X] Town Region: Normal, Electric
- [X] Water Region: Water, Ice, Dragon
- [X] Rock Region: Rock, Fighting, Ground
- [X] Gym: Machop/Machoke/Machamp
- [X] Spooky: Ghost, Psychic, Dark
- [X] Volcano Region: Fire, Ground, Steel


## Routes:

- Landing Page - “/”
- Locations - “/:region”
- Pokedex - “/pokedex”


# Setup & Dependencies:
## GitHub Repo:

  - Pull github repo for this project
    - git@github.com:DarkninjaD/Project2Pokemon.git
  - Navigate to and open repo in your IDE

## Install Dependencies:

- Run line in terminal:

        npm install

- Run line in terminal:

        npm install cypress --save-dev @testing-library/cypress



# General Use

- Run line in terminal:

        npm start

- Navigate to http://localhost:3000/ to get to the homepage
- Click `Enter` to enter the world of Pokemon
- In a location, you can do several things:
    1. Navigate to a different location by clicking on the corresponding buttons on the right hand side of the screen
    2. Click on your Pokedex to see all the Pokemon that you have caught
    3. Catch a Pokemon by clicking on its icon in the screen
- In the Pokedex, you should be able to do several things:
    1. Mouse over Pokemon you've caught to see details
    2. Press the back button to go back to the location you were in
    3. Press the `debug` button to get all pokemon (was originally for debuggin but it's actually nice to have)
    4. Press the `release all pokemon` button to release all the pokemon and no longer have pokemon in the pokedex


## Additional Use

- If you want to see more pokemon, perhaps from different generations you can!
    1. Open the repo in your IDE
    2. Navigate to `App.js`
    3. On line 89, change the url from https://pokeapi.co/api/v2/pokemon/?limit=151 to however many you'd like by changing the limit
        - Ex. https://pokeapi.co/api/v2/pokemon/?limit=721
        - Caution: Loading time will begin to take longer
