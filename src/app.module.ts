import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRideModule } from './user-ride/user-ride.module';
import { GuestRidesModule } from './guest-rides/guest-rides.module';

@Module({
  imports: [UserRideModule, GuestRidesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
