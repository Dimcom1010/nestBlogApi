import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BlogTable } from "../entitys/blog.entity";
import { CreateDto, UpdateDto } from "./dto";


//GetOne
//GetMany
//Post (Create or Update)
//Delete (Delete)


@Controller('rest/blog')
export class BlogController {

  @Get()
  getAllAction(): string {
    return "blog get getAllAction!"
  }
  @Get(':id')
  getOneAction(@Param('id')id:string): string {
    return "blog get getOneAction by id="+ id
  }
  //Create
  @Post(':id')
  createAction(
    @Param(':id') id:string,
    @Body() blog:CreateDto): CreateDto {
    console.log('Search by ID', id)
    console.log(blog, 'Saved')
    return blog;
  }
  //Update
  @Put(':id')
  updateAction(@Body() blog:UpdateDto): UpdateDto {

    console.log(blog, 'saved')
    return blog;
  }
  @Delete(':id')
  deleteAction(@Param('id')id:string): string {
    return "Delete blog by id="+ id
  }

}
