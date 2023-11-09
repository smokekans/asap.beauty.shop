import { Avatar, Box, IconButton, Input } from "@mui/material";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";

export default function UserAvatar({
  user,
  fileInputRef,
  handleAddPhoto,
  handleFileSelect,
  handleRemovePhoto,
}) {
  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        width: "300px",
      }}
    >
      <Avatar
        variant="square"
        alt={user.displayName}
        src={user.photoURL}
        sx={{ width: 250, height: 250 }}
      />
      <Box
        sx={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          type="file"
          onChange={handleAddPhoto}
          inputRef={fileInputRef}
          style={{ display: "none" }}
        />

        {!user.photoURL ? (
          <IconButton aria-label="add-photo" onClick={handleFileSelect}>
            <AddAPhotoOutlinedIcon />
          </IconButton>
        ) : (
          <Box>
            <IconButton aria-label="update-photo" onClick={handleFileSelect}>
              <LoopOutlinedIcon />
            </IconButton>
            <IconButton aria-label="remove-photo" onClick={handleRemovePhoto}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
}
