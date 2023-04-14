import { useState, useEffect } from "react";

const htmlElement = (): HTMLHtmlElement => {
  return document.getElementsByTagName("html")[0];
};

type WindowDimensions = {
  width?: number;
  height?: number;
  scrollHeight?: number;
  scrollWidth?: number;
};

export const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: undefined,
    height: undefined,
    scrollHeight: undefined,
    scrollWidth: undefined,
  });

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        scrollHeight: htmlElement().scrollHeight,
        scrollWidth: htmlElement().scrollWidth,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return (): void => window.removeEventListener("resize", handleResize);
  });

  return windowDimensions;
};
