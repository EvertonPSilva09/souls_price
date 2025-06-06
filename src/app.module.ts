import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoulsModule } from './souls/souls.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5438,
      username: 'postgres',
      password: 'postgres',
      database: 'souls_price_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    SoulsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
