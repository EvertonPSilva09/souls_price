import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSoulDto } from './dto/create-soul.dto';
import { UpdateSoulDto } from './dto/update-soul.dto';
import { Soul } from './entities/soul.entity';

@Injectable()
export class SoulsService {
  constructor(
    @InjectRepository(Soul)
    private readonly soulRepository: Repository<Soul>,
  ) {}

  async create(createSoulDto: CreateSoulDto): Promise<Soul> {
    const soul = this.soulRepository.create(createSoulDto);
    return this.soulRepository.save(soul);
  }

  findAll(): Promise<Soul[]> {
    return this.soulRepository.find();
  }

  findOne(id: number): Promise<Soul> {
    return this.soulRepository.findOne({ where: { id } }).then((soul) => {
      if (!soul) {
        throw new NotFoundException(`Soul with ID ${id} not found`);
      }
      return soul;
    });
  }

  async update(id: number, updateSoulDto: UpdateSoulDto): Promise<Soul> {
    await this.soulRepository.update(id, updateSoulDto);
    return this.soulRepository.findOne({ where: { id } }).then((soul) => {
      if (!soul) {
        throw new NotFoundException(`Soul with ID ${id} not found`);
      }
      return soul;
    });
  }

  async remove(id: number): Promise<void> {
    await this.soulRepository.delete(id);
  }
}
