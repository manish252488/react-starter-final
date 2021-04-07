import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  Link,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./index.less";
import * as actions from "../../store/actions";
import History from "../../@history";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
const Login = (props) => {
  const [email, changeEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const validate = () => {
    let flag = true;
    let err = {};
    setErrors({ email: "", password: "" });
    if (email === "") {
      err.email = "email cannot be empty!";
      flag = false;
    }
    if (password === "") {
      err.password = "password cannot be empty!";
      flag = false;
    }
    setErrors({ ...err });
    return flag;
  };
  const onSuccess = (path) => {
    setLoading(false);
    History.push("/");
  };
  const onFailure = (error) => {
    setLoading(false);
    setError(error);
  };
  const login = () => {
    setError("");

    if (validate()) {
      setLoading(true);
      dispatch(
        actions.login(
          { email: email, password: password },
          onSuccess,
          onFailure
        )
      );
    }
  };
  const socialLogin = (data, source = "facebook" || "google") => {
    console.log("google login data ", data);
  };
  return (
    <div className="loginPanel">
      <Typography color="error">{error}</Typography>
      <TextField
        type="email"
        variant="outlined"
        color="primary"
        defaultValue={email}
        label="Email *"
        fullWidth
        onChange={(ev) => changeEmail(ev.target.value)}
        helperText={errors.email}
      />
      <TextField
        type="password"
        variant="outlined"
        color="primary"
        defaultValue={password}
        label="Password *"
        fullWidth
        onChange={(ev) => setPassword(ev.target.value)}
        helperText={errors.password}
      />
      <Button
        startIcon={loading && <CircularProgress size={20} color="secondary" />}
        variant="contained"
        color="primary"
        onClick={login}
        fullWidth
      >
        Login
      </Button>

      <Grid container>
        <Grid item xs>
          <Link href="#" color="primary" variant="body2">
            Forgot password?
          </Link>
        </Grid>
      </Grid>
      <Grid container xs={12} justify="center" className="or-divider">
        <Grid item xs={1}>
          <Typography color="primary" variant="h6 ">OR</Typography>
        </Grid>
      </Grid>
      <Grid container xs={12} justify="center">
        <Grid item justify="center" xs={6}>
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={(data) => socialLogin(data, "google")}
            onFailure={(err) => onFailure(err.message)}
            cookiePolicy={"single_host_origin"}
            autoLoad={false}
          />
        </Grid>
        <Grid item >
          <FacebookLogin
            appId="1088597931155576"
            autoLoad={false}
            fields="name,email,picture"
            cssClass="facebook-button"
            icon="fa-facebook"
            callback={(data) => socialLogin(data, "facebook")}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
