import { createRef, useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

const useAnimator = () => {
  const ref = useRef({
    refs: createRef(),
  });
  const initial = "hidden";
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const transition = { duration: 1.5, delay: 0.25 };
  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 75,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return {
    ref,
    mainControls,
    slideControls,
    initial,
    animationVariants,
    transition,
  };
};

export default useAnimator;
