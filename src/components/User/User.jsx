import { Box, Button, Container, IconButton, TextField } from "@mui/material";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { useRef, useState } from "react";
import { auth, db, storage } from "../../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import UserAvatar from "./UserAvatar";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

export default function User() {
  const [user, setUser] = useState({});
  const fileInputRef = useRef(null);
  const [updateInput, setUpdateInput] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      console.log("User is signed out");
    }
  });
  const [displayName, setDisplayName] = useState(user.displayName);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const handleAddPhoto = async (e) => {
    const file = e.target.files[0];
    const imageId = Date.now().toString();
    const path = `userAvatars/${user.uid}/${imageId}.jpeg`;

    const imageRef = ref(storage, path);
    await uploadBytes(imageRef, file);

    const imageURL = await getDownloadURL(ref(storage, imageRef));
    const updatedUser = {
      ...user,
      photoURL: imageURL,
    };

    setUser(updatedUser);
    updateProfile(auth.currentUser, imageURL, {
      photoURL: imageURL,
    });
    updateDoc(doc(db, "users", user.uid), {
      photoURL: imageURL,
    });
  };

  const handleRemovePhoto = async () => {
    await updateDoc(doc(db, "users", user.uid), {
      photoURL: null,
    });
    const updatedUser = {
      ...user,
      photoURL: null,
    };

    setUser(updatedUser);
  };

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleChangeInput = () => {
    setUpdateInput(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    updateProfile(auth.currentUser, data.get("name"), data.get("phoneNumber"), {
      displayName: `${data.get("name")}`,
      phoneNumber: `${data.get("phoneNumber")}`,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Box sx={{ display: "block" }}>
        <UserAvatar
          user={user}
          fileInputRef={fileInputRef}
          handleAddPhoto={handleAddPhoto}
          handleFileSelect={handleFileSelect}
          handleRemovePhoto={handleRemovePhoto}
        />
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            width: "500px",
          }}
        >
          <TextField
            margin="normal"
            id="name"
            label="Імʼя та прізвище"
            name="name"
            defaultValue={user.displayName}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />

          <TextField
            margin="normal"
            id="phoneNumber"
            label="Номер телефону"
            name="phoneNumber"
            value={phoneNumber}
            type="tel"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Змінити
          </Button>
          {!updateInput ? (
            <IconButton aria-label="staer-update" onClick={handleChangeInput}>
              <CreateOutlinedIcon />
            </IconButton>
          ) : (
            <IconButton aria-label="done-update" type="submit">
              <CheckOutlinedIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Container>
  );
}
