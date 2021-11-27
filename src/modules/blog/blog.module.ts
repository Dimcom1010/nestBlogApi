import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from "./controllers/blog.controller";

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [BlogController],
  providers: [],

})
export class BlogModule {}
