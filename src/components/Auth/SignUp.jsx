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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp({ changeCheck }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    createUserWithEmailAndPassword(
      auth,
      data.get("email"),
      data.get("password"),
      data.get("firstName"),
      data.get("lastName")
    )
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: `${data.get("firstName")} ${data.get("lastName")}`,
        });
        setDoc(doc(db, "users", user.uid), {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          phoneNumber: user.phoneNumber,
        });
        Cookies.set("id", user.uid, { expires: 7 });
        Cookies.set("accessToken", user.accessToken, { expires: 7 });
        console.log(Cookies.get("id"));
        console.log(user);
        navigate("/user");
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
        Зареєструватись
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Імʼя"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Прізвище"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="phoneNumber"
              label="Номер телефону"
              name="phoneNumber"
              autoComplete="p"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Електронна адреса"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="Запамʼятати мене"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Зареєструватись
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button
              variant="outline"
              onClick={changeCheck}
              sx={{ textTransform: "none" }}
            >
              Вже маєте обліковий запис? Увійти
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
