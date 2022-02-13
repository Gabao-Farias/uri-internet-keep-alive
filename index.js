import fetch from 'node-fetch';
import { CronJob } from 'cron';

const fetchData = async () => {
  try {
    const response = await fetch('https://www.google.com/search?q=potatoes&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiyhumpovr1AhVCIbkGHTCbCpYQ_AUoAnoECAIQBA&biw=1366&bih=634&dpr=1');

    console.log(`Fetched data at: ${new Date()}`); 
  } catch (error) {
    console.log(error);

    console.log(`Error fetching data at: ${new Date()}`);
  }
};

fetchData();

var job = new CronJob('0,15,30,45 * * * * *', async () => {
  await fetchData();
});

job.start();
