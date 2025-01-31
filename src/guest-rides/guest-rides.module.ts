import { Module } from '@nestjs/common';
import { GuestRidesService } from './guest-rides.service';
import { GuestRidesController } from './guest-rides.controller';

@Module({
  controllers: [GuestRidesController],
  providers: [GuestRidesService],
})
export class GuestRidesModule {}
