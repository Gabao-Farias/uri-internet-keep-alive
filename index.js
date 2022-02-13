import { CronJob } from 'cron';
import {
  google,
  aliExpress,
  amazon,
  youtube,
  githubStatus,
  giphy,
  coinmarketcap,
  downdetector,
  shouldideploytoday,
  theuselessweb,
  papertoilet
} from './fetches.js';

const fetchData = async () => {
    console.log(`\n\nStarted fetching data at: ${new Date()}\n`);

    await google();
    await amazon();
    await aliExpress();
    await youtube();
    await githubStatus();
    await giphy();
    await coinmarketcap();
    await downdetector();
    await shouldideploytoday();
    await theuselessweb();
    await papertoilet();

    console.log(`\n\nEnded fetching data at: ${new Date()}\n`);
};

fetchData();

var job = new CronJob('0,30 * * * * *', async () => {
  await fetchData();
});

job.start();
