This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Todo app on React + Redux
### firebase app
https://chama-funky-todo.firebaseapp.com/login

## running the local server

### install it
```npm install```

### run the server
```npm start```

## Missing stuff
- There's no logic for sorting nor filtering
- I did not add the datepicker for expiration date of the todo items
- Error validation! nor for login, nor for corner cases

## stuff There
- integration with firebase realtime database
- hosting at firebase
- add todo, remove todo, toggle todo, all the simple stuff
- login!

## could improve
- login validation is a house of cards. It definitely needs some extra love
- component achitecture in general
- reducers are meant to be pure functions... well mine are not exactly that could've fix this but it would've meant a big refactor. ain't nobody got time for dat
