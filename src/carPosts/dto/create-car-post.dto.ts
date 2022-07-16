import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCarPostsDto {
  @IsNumber()
  @IsNotEmpty()
  usage: number;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsOptional()
  motorCondition: string;

  @IsString()
  @IsOptional()
  gearBox: string;
}
