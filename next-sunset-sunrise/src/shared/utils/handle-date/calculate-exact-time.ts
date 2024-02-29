import * as moment from 'moment-timezone';

export function calculateExactTime(
  currentTime: string,
  remainingTime: string,
  timeZone: string,
): string {
  const currentMoment = moment.tz(currentTime, 'DD-MM-YYYY HH:mm:ss', timeZone);
  const remainingTimeParts = remainingTime
    .split(':')
    .map((part) => parseInt(part, 10));

  currentMoment.add(remainingTimeParts[0], 'hours');
  currentMoment.add(remainingTimeParts[1], 'minutes');
  currentMoment.add(remainingTimeParts[1], 'seconds');

  const exactTime = currentMoment.format('DD-MM-YYYY HH:mm:ss');

  return exactTime;
}
