import { Controller } from '@nestjs/common';
import { UserRideService } from './user-ride.service';

@Controller('user-ride')
export class UserRideController {
  constructor(private readonly userRideService: UserRideService) {}
}
