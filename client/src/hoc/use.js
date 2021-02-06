import { useEffect } from "react";

export const useLogin = (failedCallback, succeedCallback) => {
  useEffect(() => {
    const loginStatus = true;
    if (loginStatus) {
      succeedCallback();
    } else {
      failedCallback();
    }
  });
};
