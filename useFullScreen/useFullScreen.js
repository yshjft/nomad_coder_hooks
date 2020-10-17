// 이상함.... 제대로 작동 안함
export const useFullScreen = (callback) => {
    const element = useRef();
    const triggerFull = () => {
      if (element.current) {
        element.current.requestFullscreen();
        if (callback && typeof callback === "function") {
          callback(true);
        }
      }
    };
    const exitFull = () => {
      document.exitFullscreen();
      if (callback && typeof callback === "function") {
        callback(false);
      }
    };
    return { element, triggerFull, exitFull };
  };