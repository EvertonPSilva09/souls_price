import { Injectable } from '@nestjs/common';
import { CreateSoulDto } from './dto/create-soul.dto';
import { UpdateSoulDto } from './dto/update-soul.dto';

@Injectable()
export class SoulsService {
  create(createSoulDto: CreateSoulDto) {
    return 'This action adds a new soul';
  }

  findAll() {
    return `This action returns all souls`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soul`;
  }

  update(id: number, updateSoulDto: UpdateSoulDto) {
    return `This action updates a #${id} soul`;
  }

  remove(id: number) {
    return `This action removes a #${id} soul`;
  }
}
