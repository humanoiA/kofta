import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LockIcon from '@material-ui/icons/Lock';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  register: {
    marginBottom: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
    marginLeft: theme.spacing(32)
  },
  cancel: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(70)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  dialo: {
    backgroundColor: theme.palette.grey[900],
  },
  formdialog: {
        '& .MuiTextField-root': {
          margin: theme.spacing(4),
          width: '25ch',
        },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={12} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <form className={classes.form} Validate>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                autoFocus
                />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                />
                <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Sign In
                </Button>
            </form>
            <Grid container>
              <Grid item xs>
                <Button color="primary">
                 Forgot Password?
                  </Button>
              </Grid>
              <Grid item>
                 <Button color="primary" onClick={handleClickOpen}>
                  {"Don't have an account? Sign Up"}
                  </Button> 
                  <Dialog open={open} fullWidth={true} onClose={handleClose} aria-labelledby="form-dialog-title" >
                  <IconButton className={classes.cancel} onClick={handleClose}>
            <CancelIcon />
            </IconButton> 
            <Avatar className={classes.register}>
             <PersonAddIcon />
          </Avatar> 
        <DialogTitle id="form-dialog-title"><Typography style={{marginLeft: theme.spacing(12)}} component="h1" variant="h4">
        Employee Registration
          </Typography></DialogTitle>
          <form className={classes.formdialog} Validate>
                <TextField
                variant="standard"
                margin="normal"
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                autoFocus
                />
                <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="username"
                label="Username"
                type="username"
                id="username"
                autoComplete="off"
                />
                <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="employee Id"
                label="Employee Id"
                type="employee Id"
                id="employee Id"
                autoComplete="off"
                />
                <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="first name"
                label="First Name"
                type="first name"
                id="first name"
                autoComplete="off"
                />
                <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="last name"
                label="Last Name"
                type="last name"
                id="last name"
                autoComplete="off"
                />
                <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                />
                <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="confirm password"
                label="Confirm Password"
                type="confirm password"
                id="confirm password"
                autoComplete="off"
                />
                <Button
                type="submit"
                
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Sign In
                </Button>
            </form>
      </Dialog>
               </Grid>                
            </Grid>
        </div>    
        </Grid>
    </Grid>    
  );
}