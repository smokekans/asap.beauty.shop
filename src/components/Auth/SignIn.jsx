import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { auth } from "../../firebase/config";
import Cookies from "js-cookie";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignIn({ changeCheck }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    signInWithEmailAndPassword(auth, data.get("email"), data.get("password"))
      .then((userCredential) => {
        const user = userCredential.user;
        Cookies.set("id", user.uid, { expires: 7 });
        Cookies.set("accessToken", user.accessToken, { expires: 7 });
        navigate("/user");
        console.log(user);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Увійти
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Електронна адреса"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Пароль"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Запамʼятати мене"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Увійти
        </Button>
        <Grid container>
          <Grid item xs>
            <Button
              variant="outline"
              onClick={changeCheck}
              sx={{ textTransform: "none" }}
            >
              Забули пароль?
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outline"
              onClick={changeCheck}
              sx={{ textTransform: "none" }}
            >
              Немає облікового запису? Зареєструватися
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
