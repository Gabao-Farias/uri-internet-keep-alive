import { CronJob } from 'cron';
import { returnBash } from './bashScripts.js';
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
import { validateAllRequestsFailed } from './validations.js';

const fetchData = async () => {
    console.log(`\n\nStarted fetching data at: ${new Date()}\n`);

    const requestsResults = [];

    requestsResults.push(await amazon());
    requestsResults.push(await aliExpress());
    requestsResults.push(await youtube());
    requestsResults.push(await githubStatus());
    requestsResults.push(await giphy());
    requestsResults.push(await coinmarketcap());
    requestsResults.push(await stackoverflow());

    console.log(`\n\nEnded fetching data at: ${new Date()}\n`);

    const allRequestsFailed = validateAllRequestsFailed(requestsResults);

    return allRequestsFailed;
};

var job = new CronJob('0,30 * * * * *', async () => {
  await keepAlive();
});

const keepAlive = async () => {
  const fetchedDataResults = await fetchData();
  if (fetchedDataResults) {
    console.log("All results status FAILURE");
    console.log("Stopping cron job...");
    job.stop();

    console.log(`\n\nStopped cron job at: ${new Date()}\n`);
    returnBash();
    return;
  }
  gitPull();
};

keepAlive();

job.start();
