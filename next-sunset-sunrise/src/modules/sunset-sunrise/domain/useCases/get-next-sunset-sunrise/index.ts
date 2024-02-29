import { ISunEventsProvider } from 'shared/interfaces/providers/api/sun-events';
import {
  GetNextSunsetSunriseUseCaseDTO,
  IGetNextSunsetSunriseUseCase,
} from '../../interfaces/useCases/get-next-sunset-sunrise';
import { calculateRemainingTime } from 'shared/utils/handle-date/calculate-remaining-time';
import * as moment from 'moment-timezone';
import { calculateExactTime } from 'shared/utils/handle-date/calculate-exact-time';
import { Injectable } from '@nestjs/common';
import { SUN_EVENTS } from '../../constants/sunset-sunrise';

@Injectable()
export class GetNextSunsetSunriseUseCase
  implements IGetNextSunsetSunriseUseCase
{
  constructor(private readonly sunEventsProvider: ISunEventsProvider) {}
  async execute({
    type,
    latitude,
    longitude,
  }: GetNextSunsetSunriseUseCaseDTO.Params): Promise<GetNextSunsetSunriseUseCaseDTO.Result> {
    const timeZone = process.env.TIMEZONE;

    if (typeof latitude !== 'string' || typeof longitude !== 'string')
      return {
        status: 400,
        data: { message: 'Invalid latitude or longitude' },
      };

    const sunEvents =
      await this.sunEventsProvider.getSunEventsByLatitudeAndLongitude({
        latitude: latitude.toLowerCase(),
        longitude: longitude.toLowerCase(),
      });

    if (!SUN_EVENTS.includes(type))
      return { status: 400, data: { message: 'Invalid sun event' } };

    const choosenSunEventTime = sunEvents[type];

    const remainingTime = calculateRemainingTime(choosenSunEventTime, timeZone);
    const requestDateTime = moment.tz(timeZone).format('DD-MM-YYYY HH:mm:ss');
    const exactDateTime = calculateExactTime(
      requestDateTime,
      remainingTime,
      timeZone,
    );

    return {
      status: 200,
      data: { remainingTime, exactDateTime, requestDateTime },
    };
  }
}
