import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateHousePostsDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsOptional()
  price: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  pictures: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsNumber()
  @IsNotEmpty()
  area: number;

  @IsNumber()
  @IsNotEmpty()
  yearOfBuild: number;

  @IsNumber()
  @IsOptional()
  pricePerMeter: number;

  @IsNumber()
  @IsNotEmpty()
  numberOfRooms: number;

  @IsNumber()
  @IsNotEmpty()
  numberOfTotalFloors: number;

  @IsNumber()
  @IsNotEmpty()
  numberOfFloor: number;

  @IsBoolean()
  @IsNotEmpty()
  hasElevator: boolean;

  @IsBoolean()
  @IsNotEmpty()
  hasParking: boolean;
}
