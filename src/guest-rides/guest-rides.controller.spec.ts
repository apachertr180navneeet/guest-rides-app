import { Test, TestingModule } from '@nestjs/testing';
import { GuestRidesController } from './guest-rides.controller';
import { GuestRidesService } from './guest-rides.service';

describe('GuestRidesController', () => {
  let controller: GuestRidesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuestRidesController],
      providers: [GuestRidesService],
    }).compile();

    controller = module.get<GuestRidesController>(GuestRidesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
