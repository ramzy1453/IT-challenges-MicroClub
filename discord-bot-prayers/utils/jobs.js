import { CronJob } from "cron";

export async function startCronJob(
  prayers,
  cb,
  { timezone = "Africa/Algiers" }
) {
  const jobs = [];

  for (const [prayer, time] of Object.entries(prayers)) {
    const date = new Date();
    const [hours, minutes] = time.split(":");
    date.setHours(hours, minutes, 0);
    console.log(date);
    const job = new CronJob(
      date,
      () => {
        cb(prayer, time);
      },
      null,
      true,
      timezone
    );
    job.start();
    jobs.push(job);
  }

  return jobs;
}
