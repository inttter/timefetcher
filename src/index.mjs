import fetch from 'node-fetch';

export default async function timefetcher(url, timeUnit = 'milliseconds', successMessage = '') {
  const startTime = process.hrtime();

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const data = await response.text();
    
    const elapsedTimeInSeconds = process.hrtime(startTime)[0] + process.hrtime(startTime)[1] / 1e9;
    const elapsedTime = convertTime(elapsedTimeInSeconds, timeUnit);

    const finalSuccessMessage = successMessage || `Fetched ${url} in ${elapsedTime.toFixed(2)} ${timeUnit}`;
    console.log(finalSuccessMessage);

    return data;
  } catch (error) {
    console.error(`Error fetching ${url}: ${error.message}`);
    throw error;
  }
}

function convertTime(timeInSeconds, targetUnit) {
  const timeUnitMap = {
    milliseconds: timeInSeconds * 1e3,
    seconds: timeInSeconds,
    minutes: timeInSeconds / 60,
    hours: timeInSeconds / 3600
  };
  return timeUnitMap[targetUnit] || timeInSeconds * 1e3;
}