import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SunEventsProviderModule } from 'shared/providers/api/sun-events/sun-events-provider.module';
import { SunsetSunriseModule } from 'modules/sunset-sunrise/sunset-sunrise.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SunEventsProviderModule,
    SunsetSunriseModule,
  ],
})
export class AppModule {}
