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
import constants from "../../config/constants";
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
    if (source === "google")
      dispatch(
        actions.login(
          { email: data.profileObj.email, password: data.profileObj.googleId },
          onSuccess,
          onFailure
        )
      );
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
        <Grid itemxs>
          <Link href="#" color="primary" variant="body2">
            Forgot password?
          </Link>
        </Grid>
      </Grid>
      <Grid container justify="center" className="or-divider">
        <Grid item xs={1}>
          <Typography color="primary">OR</Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={8}>
          <GoogleLogin
            clientId={constants.google_client_id}
            buttonText="Login with Google"
            onSuccess={(data) => socialLogin(data, "google")}
            onFailure={(err) => onFailure(err.message)}
            cookiePolicy={"single_host_origin"}
            autoLoad={false}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
