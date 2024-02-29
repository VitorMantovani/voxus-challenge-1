import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';
import {
  GetSunEventsByLatitudeAndLongitudeDTO,
  ISunEventsProvider,
} from 'shared/interfaces/providers/api/sun-events';

@Injectable()
export class SunEventsProvider implements ISunEventsProvider {
  constructor(private readonly httpServive: HttpService) {}
  async getSunEventsByLatitudeAndLongitude(
    params: GetSunEventsByLatitudeAndLongitudeDTO.Params,
  ): Promise<GetSunEventsByLatitudeAndLongitudeDTO.Result> {
    const sunEvents = await firstValueFrom(
      this.httpServive
        .get(process.env.SUNRISE_SUNSET_API, {
          params: {
            lat: params.latitude,
            lng: params.longitude,
            date: 'today',
            tzid: process.env.TIMEZONE,
          },
        })
        .pipe(
          map((response) => {
            return response.data?.results;
          }),
        ),
    );

    return sunEvents;
  }
}
