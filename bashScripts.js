import { exec } from 'child_process';

export const returnBash = () => {
  exec("return", (error) => {
    if (error) {
      console.log("Returned after all cases result FAILURE");
      return;
    }
    return;
  });
};
