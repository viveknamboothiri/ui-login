import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff'
    },
    card: {
      marginTop: theme.spacing(10)
    }
  })
);


type State = {
    firstname:string
    lastname:string
    email:string
    username: string
    password:  string
    helperText: string
    isError: boolean
};

const initialState:State = {
    firstname:'',
    lastname:'',
    email:'',
    username: '',
    password:  '',
    helperText:'',
    isError: false
};

type Action = 
    { type: 'setFirstname', payload: string }
  | { type: 'setLastname', payload: string }
  | { type: 'setEmail', payload: string }
  | { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'registerSuccess', payload: string }
  | { type: 'registerFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'setFirstname': 
        return {
          ...state,
          firstname: action.payload
        };
      case 'setLastname': 
        return {
          ...state,
          lastname: action.payload
        };
      case 'setEmail': 
        return {
          ...state,
          email: action.payload
        };
      case 'setUsername': 
        return {
          ...state,
          username: action.payload
        };
      case 'setPassword': 
        return {
          ...state,
          password: action.payload
        };
      case 'registerSuccess': 
        return {
          ...state,
          helperText: action.payload,
          isError: false
        };
      case 'registerFailed': 
        return {
          ...state,
          helperText: action.payload,
          isError: true
        };
      case 'setIsError': 
        return {
          ...state,
          isError: action.payload
        };
    }
}
  

const Register = () => {
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card} >
        <CardHeader className={classes.header} title="Sign Up" />
        <CardContent>
          <div>
          <TextField
              error={state.isError}
              fullWidth
              id="firstname"
              type="text"
              label="Firstname"
              placeholder="Firstname"
              margin="normal"
            />
            <TextField
              error={state.isError}
              fullWidth
              id="lastname"
              type="text"
              label="Lastname"
              placeholder="Lastname"
              margin="normal"
            />
            <TextField
              error={state.isError}
              fullWidth
              id="email"
              type="email"
              label="Email"
              placeholder="Email"
              margin="normal"
            />
            <TextField
              error={state.isError}
              fullWidth
              id="username"
              type="text"
              label="Username"
              placeholder="Username"
              margin="normal"
            //   onChange={handleUsernameChange}
            //   onKeyPress={handleKeyPress}
            />
            <TextField
              error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              helperText={state.helperText}
            //   onChange={handlePasswordChange}
            //   onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            // onClick={handleLogin}
            // disabled={state.isButtonDisabled}
            >
            Submit
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}
export default Register