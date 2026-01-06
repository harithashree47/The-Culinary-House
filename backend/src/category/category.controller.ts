import {
  Controller,
  All,
  Req,
  Res,
  Param,
  ParseIntPipe,
  BadRequestException,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @All()
  async handleCategory(@Req() req: Request, @Res() res: Response) {
    const method = req.method;

    if (method === 'POST') {
      const result = await this.categoryService.create(req.body);
      return res.json(result);
    }

    if (method === 'GET') {
      const result = await this.categoryService.findAll();
      return res.json(result);
    }

    return res.status(405).json({ error: `Method ${method} not allowed` });
  }

  @All('active')
  async handleActive(@Req() req: Request, @Res() res: Response) {
    const method = req.method;

    if (method === 'GET') {
      const result = await this.categoryService.findActive();
      return res.json(result);
    }

    return res.status(405).json({ error: `Method ${method} not allowed` });
  }

  @All(':id')
  async handleById(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const method = req.method;

    if (!id || Number.isNaN(id)) {
      throw new BadRequestException('Invalid category id');
    }

    if (method === 'GET') {
      const result = await this.categoryService.findById(id);
      return res.json(result);
    }

    if (method === 'PATCH') {
      const result = await this.categoryService.update(id, req.body);
      return res.json(result);
    }

    if (method === 'DELETE') {
      const result = await this.categoryService.softDelete(id);
      return res.json(result);
    }

    return res.status(405).json({ error: `Method ${method} not allowed` });
  }
}
