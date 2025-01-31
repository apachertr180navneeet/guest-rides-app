import { Controller } from '@nestjs/common';
import { GuestRidesService } from './guest-rides.service';

@Controller('guest-rides')
export class GuestRidesController {
  constructor(private readonly guestRidesService: GuestRidesService) {}
}
