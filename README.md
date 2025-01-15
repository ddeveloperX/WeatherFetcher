In this README i explain the steps that are made. 
From setup the project in VSCode to fetch and parse data from the OpenWeather -> KNMI API.
Beside the project files should be available in a public git repo.

Goal:
Display the current day: sunshine duration, UV Index and Rain sum in a card

API: 
https://open-meteo.com/en/docs/knmi-api

VSCode project setup:
1. mkdir WeatherFetcher
2. cd WeatherFetcher
3. npm -init -y
4. vi packages.json add "type": "module"
5. npm i express ejs axios

Git setup and push:
1. Create new Repository at GitHub
2. git init
3. git commit -m "Initial project commit"
4. git add .
5. git remote add origin https://github.com/[username]/[reponame].git
6. git push -u origin master







