import { Module } from '@nestjs/common';
import { SunsetSunriseController } from './presentation/controllers/sunset-sunrise.controller';
import { GetNextSunsetSunriseUseCase } from './domain/useCases/get-next-sunset-sunrise';
import { IGetNextSunsetSunriseUseCase } from './domain/interfaces/useCases/get-next-sunset-sunrise';
import { SunEventsProviderModule } from 'shared/providers/api/sun-events/sun-events-provider.module';

@Module({
  imports: [SunEventsProviderModule],
  controllers: [SunsetSunriseController],
  providers: [
    {
      useClass: GetNextSunsetSunriseUseCase,
      provide: IGetNextSunsetSunriseUseCase,
    },
  ],
  exports: [IGetNextSunsetSunriseUseCase],
})
export class SunsetSunriseModule {}
