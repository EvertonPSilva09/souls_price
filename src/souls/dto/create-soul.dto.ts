import { IsString, IsNumber } from 'class-validator';

export class CreateSoulDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  avg_price: number;

  @IsString()
  map: string;

  @IsString()
  monster: string;

  @IsString()
  rarity: string;
}
