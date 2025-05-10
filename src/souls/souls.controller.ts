import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SoulsService } from './souls.service';
import { CreateSoulDto } from './dto/create-soul.dto';
import { UpdateSoulDto } from './dto/update-soul.dto';

@Controller('souls')
export class SoulsController {
  constructor(private readonly soulsService: SoulsService) {}

  @Post()
  create(@Body() createSoulDto: CreateSoulDto) {
    return this.soulsService.create(createSoulDto);
  }

  @Get()
  findAll() {
    return this.soulsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soulsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoulDto: UpdateSoulDto) {
    return this.soulsService.update(+id, updateSoulDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soulsService.remove(+id);
  }
}
