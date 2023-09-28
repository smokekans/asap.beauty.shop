import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

export default function InfoProduct({ data, otherVolume, currentPosition }) {
  const [number, setNumber] = useState(1);

  const matchingVolumes = Array.isArray(otherVolume)
    ? otherVolume.filter((item) => {
        const productSlug = item.product
          .toLowerCase()
          .replace(/& /g, "")
          .replace(/ /g, "-");
        const currentPositionSlug = currentPosition[4].toLowerCase();
        return productSlug === currentPositionSlug;
      })
    : [];

  return (
    <Box sx={{ p: 1, mt: "20px" }}>
      <Box>
        <Typography
          variant="body2"
          sx={{
            color: "black",
            fontFamily: "Comfortaa",
            fontSize: 10,
          }}
        >
          Артикул {data?.article}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "black",
            fontFamily: "Comfortaa",
            fontSize: 34,
          }}
        >
          {data?.brand} {data?.line}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "black",
            fontFamily: "Comfortaa",
            fontSize: 24,
          }}
        >
          {data?.name} {data?.volume}
        </Typography>
      </Box>
      <Box sx={{ mt: "16px", gap: "6px", display: "flex" }}>
        {matchingVolumes.map((item, index) => (
          <Link
            key={index}
            to={`/${item.brand.toLowerCase().replace(/ /g, "-")}/${item.subline
              .toLowerCase()
              .replace(/& /g, "")
              .replace(/ /g, "-")}/${item.type.toLowerCase()}/${item.product
              .toLowerCase()
              .replace(/& /g, "")
              .replace(/ /g, "-")}/${item.volume
              .toLowerCase()
              .replace(/ /g, "-")}`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor:
                  item.volume.replace(/ /g, "-") === currentPosition[5]
                    ? "rgba(0, 0, 0, 0.8)"
                    : "white",
                color:
                  item.volume.replace(/ /g, "-") === currentPosition[5]
                    ? "white"
                    : "rgba(0, 0, 0, 0.8)",
                height: "33px",
                fontFamily: "Comfortaa",
                boxShadow: "none",
                outline: "1px solid rgba(0, 0, 0, 0.2)",
                maxWidth: "210px",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  color: "white",
                  boxShadow: "none",
                },
              }}
            >
              {item.volume}
            </Button>
          </Link>
        ))}
      </Box>

      <Box sx={{ mt: "32px" }}>
        <Typography
          variant="h4"
          sx={{
            color: "black",
            fontFamily: "Comfortaa",
            fontSize: 24,
            textDecoration: "bold",
            ml: 1,
          }}
        >
          {data?.price}
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "flex-end" }}>
          <TextField
            id="outlined-number"
            label="Кількість"
            type="number"
            fullWidth
            defaultValue={number}
            onChange={(e) => setNumber(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              min: 1,
            }}
            sx={{
              mt: 2,
              size: "small",
              fontFamily: "Comfortaa",

              maxWidth: "90px",
            }}
          />
          <Button
            variant="contained"
            endIcon={<ShoppingCartOutlinedIcon />}
            sx={{
              height: "56px",
              fontFamily: "Comfortaa",
              boxShadow: "none",
              outline: "1px solid rgba(0, 0, 0, 0.2)",
              maxWidth: "210px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                color: "white",
                boxShadow: "none",
              },
            }}
          >
            Додати в кошик
          </Button>
        </Box>
        <Typography
          sx={{
            fontFamily: "Comfortaa",
            mt: "36px",
          }}
        >
          {data?.description}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Comfortaa",
            mt: "36px",
          }}
        >
          {data?.results}
        </Typography>
      </Box>
    </Box>
  );
}
