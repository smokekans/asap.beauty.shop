import { useEffect, useState } from "react";

const queries = ["(max-width: 767px)", "(min-width: 768px)"];

const useMatchMedia = () => {
  const [values, setValues] = useState(
    queries.map((query) => matchMedia(query).matches)
  );

  useEffect(() => {
    const handler = () =>
      setValues(queries.map((query) => matchMedia(query).matches));

    queries.forEach((query) => {
      const list = matchMedia(query);
      list.addEventListener("change", handler);
      return () => list.removeEventListener("change", handler);
    });
  }, []);

  const typesOfScreen = ["isSmallScreen", "isBigScreen"];

  return typesOfScreen.reduce(
    (acc, screen, idx) => ({
      ...acc,
      [screen]: values[idx],
    }),
    {}
  );
};

export default useMatchMedia;
