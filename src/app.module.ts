import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRideModule } from './user-ride/user-ride.module';

@Module({
  imports: [UserRideModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
