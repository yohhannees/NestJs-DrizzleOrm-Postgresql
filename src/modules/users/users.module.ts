/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DrizzleModule } from '@/modules/drizzle/drizzle.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
