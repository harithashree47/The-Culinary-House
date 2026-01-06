import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.category.create({ data });
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  findActive() {
    return this.prisma.category.findMany({
      where: { isActive: true },
    });
  }

  async findById(id: number) {
    const category = await this.prisma.category.findUnique({
      where: { id },
    });

    if (!category) throw new NotFoundException('Category not found');
    return category;
  }

  async update(id: number, data: any) {
    await this.findById(id);

    return this.prisma.category.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findById(id);

    return this.prisma.category.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
