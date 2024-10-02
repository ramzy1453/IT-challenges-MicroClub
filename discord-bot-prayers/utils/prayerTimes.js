import axios from "axios";

export async function getParyerTimes() {
  // A date in the DD-MM-YYYY format.

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  const response = await axios.get(
    `http://api.aladhan.com/v1/timings/${formattedDate}?latitude=28.026876&longitude=1.65284&method=19`
  );
  return response.data.data.timings;
}
