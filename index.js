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
  papertoilet,
  stackoverflow
} from './fetches.js';
import { gitPull } from './github.js';

const fetchData = async () => {
    console.log(`\n\nStarted fetching data at: ${new Date()}\n`);

    // await google();
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
    await stackoverflow();

    console.log(`\n\nEnded fetching data at: ${new Date()}\n`);
};

const keepAlive = async () => {
  await fetchData();
  gitPull();
};

keepAlive();

var job = new CronJob('0,30 * * * * *', async () => {
  await keepAlive();
});

job.start();
