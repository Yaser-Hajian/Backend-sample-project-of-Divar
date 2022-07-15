import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  city?: string;
  
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;
}
