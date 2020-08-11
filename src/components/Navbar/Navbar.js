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
import { FormControl, Input, InputLabel, InputAdornment } from "@material-ui/core";
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

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
      marginLeft: theme.spacing(8),
      width: '50ch',
    },
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
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(30),
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
                type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                //onChange={someChangeHandler}
                InputProps={{ // <-- This is where the toggle button is added.
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
                  <Dialog open={open && open === "second"} fullWidth={true}  aria-labelledby="form-dialog-title" PaperProps={{
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
            <Avatar className={classes.register}>
             <PersonAddIcon />
          </Avatar> 
        <DialogTitle id="form-dialog-title"><Typography className={classes.typo} component="h1" variant="h4">
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
                type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                //onChange={someChangeHandler}
                InputProps={{ // <-- This is where the toggle button is added.
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
                type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                //onChange={someChangeHandler}
                InputProps={{ // <-- This is where the toggle button is added.
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
                id="confirm password"
                autoComplete="off"
                />
                <Button
                type="submit"
                
                variant="contained"
                color="primary"
                className={classes.submitregs}
                >
                Sign 
                </Button>
            </form>
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