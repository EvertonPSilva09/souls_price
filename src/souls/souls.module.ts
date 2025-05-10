import { Module } from '@nestjs/common';
import { SoulsService } from './souls.service';
import { SoulsController } from './souls.controller';

@Module({
  controllers: [SoulsController],
  providers: [SoulsService],
})
export class SoulsModule {}
