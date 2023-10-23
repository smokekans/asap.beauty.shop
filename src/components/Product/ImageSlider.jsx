import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, Pagination } from "swiper/modules";
import { Box } from "@mui/material";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageSlider.css";

export default function ImageSlider({ data }) {
  return (
    <Box
      sx={{
        maxWidth: 500,
        height: "100hv",
        flexGrow: 1,
        color: "white",
        mr: 3,
      }}
    >
      <Swiper
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
      >
        {data?.image?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Box className="swiper-zoom-container">
                <Box
                  component="img"
                  sx={{
                    height: 500,
                    display: "block",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  src={item}
                  alt="Destination"
                />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
