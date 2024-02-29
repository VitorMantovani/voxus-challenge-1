// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace GetNextSunsetSunriseUseCaseDTO {
  export type Params = {
    type: string;
    latitude: string;
    longitude: string;
  };

  export type Result = {
    status: number;
    data: Record<string, string>;
  };
}

export abstract class IGetNextSunsetSunriseUseCase {
  abstract execute(
    params: GetNextSunsetSunriseUseCaseDTO.Params,
  ): Promise<GetNextSunsetSunriseUseCaseDTO.Result>;
}
