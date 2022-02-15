import { exec } from 'child_process';

export const gitPull = () => {
  exec("git pull", (error, stdout) => {
    if (error) {
      console.log("git pull: FAILURE");
      // console.log(error);
      return;
    }

    console.log("git pull: OK\n");
    console.log(stdout);
  });
};
