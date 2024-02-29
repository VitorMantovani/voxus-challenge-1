import * as moment from 'moment-timezone';

export function calculateRemainingTime(
  eventTime: string,
  timeZone: string,
): string {
  const currentMoment = moment().tz(timeZone);
  const sunEventMoment = moment.tz(eventTime, 'hh:mm:ss A', timeZone);

  if (sunEventMoment.isBefore(currentMoment)) sunEventMoment.add(1, 'day');

  const timeToSunEvent = moment.duration(sunEventMoment.diff(currentMoment));
  const hours = Math.floor(timeToSunEvent.asHours());
  const minutes = timeToSunEvent.minutes();
  const seconds = timeToSunEvent.seconds();

  const formattedTimeToSunEvent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  return formattedTimeToSunEvent;
}
