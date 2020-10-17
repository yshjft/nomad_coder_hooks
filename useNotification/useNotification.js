// 제대로 작동 안함
export const useNotification = (title, options) => {
    if (!("Noitfication" in window)) {
      return;
    }
    const fireNotifi = () => {
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(title, options);
          } else {
            return;
          }
        });
      } else {
        new Notification(title, options);
      }
    };
    return fireNotifi;
  };