import { Box, Button, Container, TextField, Typography } from "@mui/material";
import ImageSlider from "./ImageSlider";
import { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FeaturesPath from "./FeaturesPath";
import DescriptionPath from "./DescriptionPath";
import AromaPath from "./AromaPath";
import CatalogPath from "../Brand/Line/CatalogPath";

export default function Product({ data, catalogCurrentLine }) {
  const [number, setNumber] = useState(1);

  return (
    <Container sx={{ mt: "68px" }}>
      <Box sx={{ display: "flex" }}>
        <ImageSlider data={data} />
        <Box sx={{ p: 1, mt: "60px" }}>
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
      </Box>

      <FeaturesPath data={data?.features} name="Особливості" />
      <DescriptionPath data={data?.ingredients} name="Інградієнти" />
      <DescriptionPath data={data?.howtouse} name="Спосіб застосування" />
      <AromaPath data={data?.aroma} name="Аромат" sx={{ mx: "auto" }} />

      <CatalogPath products={catalogCurrentLine} />
    </Container>
  );
}
