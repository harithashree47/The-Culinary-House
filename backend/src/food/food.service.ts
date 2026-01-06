import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FoodService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    const category = await this.prisma.category.findUnique({
      where: { id: data.categoryId },
    });

    if (!category) throw new BadRequestException('Invalid category');

    return this.prisma.food.create({ data });
  }

  findAll() {
    return this.prisma.food.findMany({
      include: { category: true },
    });
  }

  findActive() {
    return this.prisma.food.findMany({
      where: { isActive: true },
      include: { category: true },
    });
  }

  async findById(id: number) {
    const food = await this.prisma.food.findUnique({
      where: { id },
      include: { category: true },
    });

    if (!food) throw new NotFoundException('Food not found');
    return food;
  }

  async update(id: number, data: any) {
    await this.findById(id);

    if (data.categoryId) {
      const category = await this.prisma.category.findUnique({
        where: { id: data.categoryId },
      });
      if (!category) throw new BadRequestException('Invalid category');
    }

    return this.prisma.food.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findById(id);

    return this.prisma.food.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
