import { Box, MobileStepper, Button } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase/config";
import { Link } from "react-router-dom";

export default function MainPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [baners, setBaners] = useState([]);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    const banerRef = ref(database, "infoPage/baner");
    onValue(banerRef, (snapshot) => {
      const data = snapshot.val();
      setBaners(data);
    });
  }, []);

  useEffect(() => {
    let intervalId;

    if (autoPlay) {
      intervalId = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, activeStep]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  const handleMouseEnter = () => {
    setAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setAutoPlay(true);
  };
  const maxSteps = baners.length;

  return (
    <Box sx={{}}>
      <Box
        sx={{
          maxWidth: "100vw",
          flexGrow: 1,
          transition: "background-image 1s ease-in-out",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          to={`/${baners[activeStep]?.brand}/${baners[activeStep]?.line}/${baners[activeStep]?.type}/${baners[activeStep]?.product}/${baners[activeStep]?.volume}`}
        >
          <Box
            component="img"
            sx={{
              backgroundImage: `url(${baners[activeStep]?.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "700px",
              backgroundRepeat: "no-repeat",
              width: 1,
              transition: "background-image 1s ease-in-out",
            }}
          />
        </Link>
        <MobileStepper
          position="static"
          nextButton={
            <Button
              sx={{
                mt: "-800px",
                color: "black",

                "&:hover": { bgcolor: "transparent" },
              }}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              sx={{
                mt: "-800px",
                color: "black",

                "&:hover": { bgcolor: "transparent" },
              }}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </Box>
    </Box>
  );
}
