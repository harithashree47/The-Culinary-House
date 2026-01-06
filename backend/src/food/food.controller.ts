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
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @All()
  async handleFood(@Req() req: Request, @Res() res: Response) {
    const method = req.method;

    if (method === 'POST') {
      const result = await this.foodService.create(req.body);
      return res.json(result);
    }

    if (method === 'GET') {
      const result = await this.foodService.findAll();
      return res.json(result);
    }

    return res.status(405).json({ error: `Method ${method} not allowed` });
  }

  @All('active')
  async handleActive(@Req() req: Request, @Res() res: Response) {
    const method = req.method;

    if (method === 'GET') {
      const result = await this.foodService.findActive();
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
      throw new BadRequestException('Invalid food id');
    }

    if (method === 'GET') {
      const result = await this.foodService.findById(id);
      return res.json(result);
    }

    if (method === 'PATCH') {
      const result = await this.foodService.update(id, req.body);
      return res.json(result);
    }

    if (method === 'DELETE') {
      const result = await this.foodService.softDelete(id);
      return res.json(result);
    }

    return res.status(405).json({ error: `Method ${method} not allowed` });
  }
}
