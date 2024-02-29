// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace GetSunEventsByLatitudeAndLongitudeDTO {
  export type Params = { latitude: string; longitude: string };
  export type Result = {
    sunrise: string;
    sunset: string;
    solar_noon: string;
    day_length: string;
    civil_twilight_begin: string;
    civil_twilight_end: string;
    nautical_twilight_begin: string;
    nautical_twilight_end: string;
    astronomical_twilight_begin: string;
    astronomical_twilight_end: string;
  };
}

export abstract class ISunEventsProvider {
  abstract getSunEventsByLatitudeAndLongitude(
    params: GetSunEventsByLatitudeAndLongitudeDTO.Params,
  ): Promise<GetSunEventsByLatitudeAndLongitudeDTO.Result>;
}
