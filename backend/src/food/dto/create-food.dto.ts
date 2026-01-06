import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateFoodDto {
  @IsString()
  name: string;

  @IsString()
  imageurl: string;

  @IsString()
  description: string;

  @IsInt()
  price: number;

  @IsInt()
  categoryId: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
