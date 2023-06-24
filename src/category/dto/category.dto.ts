import { IsNotEmpty , IsString } from "class-validator";

export class CreateCategoryDto { 
    @IsString()
    @IsNotEmpty()
    title:string;

    @IsString()
    @IsNotEmpty()
    lang:string;

    @IsNotEmpty()
    categoryId:number|string;
}

export class UpdateCategoryDto{
    @IsString()
    @IsNotEmpty()
    title:string;
    
    @IsNotEmpty()
    categoryId:number|string
}