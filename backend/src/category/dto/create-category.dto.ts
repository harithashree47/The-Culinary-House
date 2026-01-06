import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsString()
  imageurl: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
