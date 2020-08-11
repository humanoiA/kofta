import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
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
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { dark } from '@material-ui/core/styles/createPalette';
import { FormControl, Input,  InputAdornment } from "@material-ui/core";
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Container from '@material-ui/core/Container';

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
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pape: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  forgot: {
    marginLeft: theme.spacing(32),
    backgroundColor: theme.palette.secondary.main,
  },
  register: {
    marginBottom: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
    marginLeft: theme.spacing(35)
  },
  cancel: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(70)
  },
  back: {
    marginTop: theme.spacing(-6),
    marginRight: theme.spacing(70)
  },
  form: {
    margin: 'auto',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      marginLeft: theme.spacing(10),
      width: '50ch',
    },
  },
  formregis: {
  width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  dialo: {
    backgroundColor: theme.palette.grey[900],
  },
  typo: {
    marginLeft: theme.spacing(15)
  },
  forgo: {
    marginLeft: theme.spacing(18)
  },
  formdialog: {
        '& .MuiTextField-root': {
          margin: theme.spacing(3),
          width: '25ch',
        },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    marginLeft: theme.spacing(30),
  },
  submitregs: {
    margin: theme.spacing(3, 0, 2),
  },
  submitforgo: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(30),
  },
  submitback: {
    margin: theme.spacing(3, 0, 2),
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(14),
  },
}));

  
function Navigationbar(){
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return(
        <Navbar bg="transparent" variant="dark">
    <Navbar.Brand href="#" style={{color:'black'}}>
      <img
        alt=""
        src="/logo192.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Kofta
    </Navbar.Brand>
    <div className="row col-11 d-flex justify-content-end text-white" >
            <button className="btn btn-default" onClick={() => setOpen("first")}>Login</button>
            <Dialog open={open && open === "first"} fullWidth={true} onClose={handleClose} aria-labelledby="form-dialog-title" >
                  <IconButton className={classes.cancel} onClick={handleClose}>
            <CancelIcon />
            </IconButton>  
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                autoFocus
                />
               <TextField
                label='Password'
                variant="outlined"
                type={showPassword ? "text" : "password"} 
                InputProps={{ 
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
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
                <Button color="primary" onClick={() => setOpen("third")}>
                 Forgot Password?
                  </Button>
              </Grid>
              <Grid item>
                 <Button color="primary" onClick={() => setOpen("second")}>
                  {"Don't have an account? Sign Up"}
                  </Button> 
                  </Grid>
                </Grid>  
                  </div>  
      </Dialog>
      </div>
                  <Dialog open={open && open === "second"} fullWidth={true}  aria-labelledby="form-dialog-title">
                  <IconButton className={classes.cancel} onClick={handleClose}>
            <CancelIcon />
            </IconButton> 
            <IconButton className={classes.back} onClick={() => setOpen("first")}>
            <ChevronLeftIcon />
            </IconButton>
          <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.pape}>
        <Avatar className={classes.avatar}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.formregis} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                label='Password'
                variant="outlined"
                fullWidth
                type={showPassword ? "text" : "password"} 
                InputProps={{ 
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitregs}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
      </Dialog>
      <Dialog open={open && open === "third"} fullWidth={true}  aria-labelledby="form-dialog-title" PaperProps={{
    style: {
      backgroundColor: '#424242',
      boxShadow: 'none',
    }}}>
                  <IconButton className={classes.cancel} onClick={handleClose}>
            <CancelIcon />
            </IconButton> 
            <IconButton className={classes.back} onClick={() => setOpen("first")}>
            <ChevronLeftIcon />
            </IconButton>
            <Avatar className={classes.forgot}>
            <LockIcon />
          </Avatar>
        <DialogTitle id="form-dialog-title"><Typography className={classes.forgo} component="h1" variant="h4">
        Forgot Password
          </Typography></DialogTitle>
          <form className={classes.form} Validate>
               <TextField
                variant="outlined"
                margin="normal"
                required                
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                autoFocus
                />
                <Button
                type="submit"
                
                variant="contained"
                color="primary"
                className={classes.submitforgo}
                >
                Submit
                </Button>
            </form>
      </Dialog>
  </Navbar>
    )
}
export default Navigationbar;