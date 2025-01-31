import { Test, TestingModule } from '@nestjs/testing';
import { UserRideController } from './user-ride.controller';
import { UserRideService } from './user-ride.service';

describe('UserRideController', () => {
  let controller: UserRideController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRideController],
      providers: [UserRideService],
    }).compile();

    controller = module.get<UserRideController>(UserRideController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
