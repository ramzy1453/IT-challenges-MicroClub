import { Client, Events, GatewayIntentBits } from "discord.js";
import { startCronJob } from "./utils/jobs.js";
import { getParyerTimes } from "./utils/prayerTimes.js";
import "dotenv/config";
import { CronJob } from "cron";

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.on(Events.ClientReady, (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}`);
});

client.login(process.env.TOKEN);

async function main() {
  const prayers = await getParyerTimes({ cityName: "Algiers" });
  const jobs = startCronJob(
    prayers,
    (prayer, time) => {
      console.log(`It's time for ${prayer} prayer! : ${time}`);
      client.channels.cache
        .get(process.env.channelId)
        .send(`It's time for ${prayer} prayer! : ${time}`);
    },
    {
      timezone: "Africa/Algiers",
    }
  );
}

// start job every day
const mainJob = new CronJob("0 0 0 * * *", main, null, true, "Africa/Algiers");
mainJob.start();
