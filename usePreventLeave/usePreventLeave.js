export const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
    //beforeunload는 window 가 닫히기 전에 function이 실행되는 걸 허락한다
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () =>
      window.removeEventListener("beforeunload", listener);
  
    return { enablePrevent, disablePrevent };
  };