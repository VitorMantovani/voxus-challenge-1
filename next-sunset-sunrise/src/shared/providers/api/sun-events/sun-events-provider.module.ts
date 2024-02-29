import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SunEventsProvider } from '.';
import { ISunEventsProvider } from 'shared/interfaces/providers/api/sun-events';

@Module({
  imports: [HttpModule],
  providers: [{ provide: ISunEventsProvider, useClass: SunEventsProvider }],
  exports: [ISunEventsProvider],
})
export class SunEventsProviderModule {}
