import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        textAlign: "center",
        bgcolor: "rgba(255, 255, 255, 0.4)",
      }}
    >
      <Container>
        <Typography variant="body2" color="text.secondary">
          {"Copyright © "}
          <Link color="text.secondary" href="https://github.com/smokekans">
            Smokekans
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}
