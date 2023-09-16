import "swiper/swiper-bundle.min.css";
import { Box, List, ListItem, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Product({ data }) {
  return (
    <>
      <Box>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data?.image?.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                sx={{ width: 500 }}
                alt="product"
                src={item?.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Typography variant="h3">
          {data?.brand} {data?.line} {data?.product} {data?.name}
        </Typography>
        <List>
          {data?.features?.map((feature, index) => {
            return (
              <ListItem key={index}>
                <Typography variant="body2">{feature}</Typography>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
}
