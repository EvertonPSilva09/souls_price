import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoulsService } from './souls.service';
import { SoulsController } from './souls.controller';
import { Soul } from './entities/soul.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Soul])],
  controllers: [SoulsController],
  providers: [SoulsService],
})
export class SoulsModule {}
