import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Soul {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column('decimal')
  avg_price: number;

  @Column()
  map: string;

  @Column()
  monster: string;

  @Column()
  rarity: string;
}
