import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { FoodModule } from './food/food.module';

@Module({
  imports: [PrismaModule, AuthModule, CategoryModule, FoodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
