import fetch from 'node-fetch';

export const google = async () => {
  try {
    const startFetchingTime = new Date();
    
    await fetch('https://www.google.com/search?q=potatoes&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiyhumpovr1AhVCIbkGHTCbCpYQ_AUoAnoECAIQBA&biw=1366&bih=634&dpr=1');

    const finishedFetchTime = new Date ();

    const fetchTimeElapsed = Number(finishedFetchTime) - Number(startFetchingTime);

    console.log(`google: OK - ${fetchTimeElapsed}ms`);
  } catch (error) {
    console.log("google: FAILURE");
    console.log(error);
  }
};

export const amazon = async () => {
  try {
    const startFetchingTime = new Date();
    
    await fetch('https://www.amazon.com.br/Apple-MacBook-13-3-Chip-256GB/dp/B08N5M7S6K/ref=asc_df_B08N5M7S6K/?tag=googleshopp00-20&linkCode=df0&hvadid=379817941610&hvpos=&hvnetw=g&hvrand=5290056914350446429&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1032017&hvtargid=pla-1031989413337&psc=1');

    const finishedFetchTime = new Date ();

    const fetchTimeElapsed = Number(finishedFetchTime) - Number(startFetchingTime);

    console.log(`amazon: OK - ${fetchTimeElapsed}ms`);
  } catch (error) {
    console.log("amazon: FAILURE");
    console.log(error);
  }
};

export const aliExpress = async () => {
  try {
    const startFetchingTime = new Date();
    
    await fetch('https://pt.aliexpress.com/item/4000718314666.html?gatewayAdapt=glo2bra&spm=a2g0o.home.15002.32.1d821c910Xfy27&gps-id=pcJustForYou&scm=1007.13562.265868.0&scm_id=1007.13562.265868.0&scm-url=1007.13562.265868.0&pvid=a2432bf7-7865-412a-9911-1fbe0e64fea7&_t=gps-id:pcJustForYou,scm-url:1007.13562.265868.0,pvid:a2432bf7-7865-412a-9911-1fbe0e64fea7,tpp_buckets:668%232846%238111%231996&pdp_ext_f=%257B%2522sku_id%2522%253A%252210000006257219762%2522%252C%2522sceneId%2522%253A%25223562%2522%257D&pdp_pi=-1%253B6.01%253B-1%253B-1%2540salePrice%253BBRL%253Brecommend-recommend');

    const finishedFetchTime = new Date ();

    const fetchTimeElapsed = Number(finishedFetchTime) - Number(startFetchingTime);

    console.log(`aliExpress: OK - ${fetchTimeElapsed}ms`);
  } catch (error) {
    console.log("aliExpress: FAILURE");
    console.log(error);
  }
};

export const youtube = async () => {
  try {
    const startFetchingTime = new Date();
    
    await fetch('https://www.youtube.com/watch?v=2JYJF9L5YW4&ab_channel=MemeTycoon');

    const finishedFetchTime = new Date ();

    const fetchTimeElapsed = Number(finishedFetchTime) - Number(startFetchingTime);

    console.log(`youtube: OK - ${fetchTimeElapsed}ms`);
  } catch (error) {
    console.log("youtube: FAILURE");
    console.log(error);
  }
};

export const githubStatus = async () => {
  try {
    const startFetchingTime = new Date();
    
    await fetch('https://www.githubstatus.com/');

    const finishedFetchTime = new Date ();

    const fetchTimeElapsed = Number(finishedFetchTime) - Number(startFetchingTime);

    console.log(`githubStatus: OK - ${fetchTimeElapsed}ms`);
  } catch (error) {
    console.log("githubStatus: FAILURE");
    console.log(error);
  }
};

export const giphy = async () => {
  try {
    const startFetchingTime = new Date();
    
    await fetch('https://giphy.com/');

    const finishedFetchTime = new Date ();

    const fetchTimeElapsed = Number(finishedFetchTime) - Number(startFetchingTime);

    console.log(`giphy: OK - ${fetchTimeElapsed}ms`);
  } catch (error) {
    console.log("giphy: FAILURE");
    console.log(error);
  }
};

export const coinmarketcap = async () => {
  try {
    const startFetchingTime = new Date();
    
    await fetch('https://coinmarketcap.com/');

    const finishedFetchTime = new Date ();

    const fetchTimeElapsed = Number(finishedFetchTime) - Number(startFetchingTime);

    console.log(`coinmarketcap: OK - ${fetchTimeElapsed}ms`);
  } catch (error) {
    console.log("coinmarketcap: FAILURE");
    console.log(error);
  }
};
