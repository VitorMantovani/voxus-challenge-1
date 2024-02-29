import { Body, Controller, Get } from '@nestjs/common';
import {
  GetNextSunsetSunriseUseCaseDTO,
  IGetNextSunsetSunriseUseCase,
} from '../../domain/interfaces/useCases/get-next-sunset-sunrise';

@Controller()
export class SunsetSunriseController {
  constructor(
    private readonly getNextSunsetSunriseUseCase: IGetNextSunsetSunriseUseCase,
  ) {}

  @Get('/api/sun-event')
  async getSunsetSunriseTime(
    @Body() params: GetNextSunsetSunriseUseCaseDTO.Params,
  ) {
    const { status, data } =
      await this.getNextSunsetSunriseUseCase.execute(params);

    return {
      status,
      data,
    };
  }

  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
