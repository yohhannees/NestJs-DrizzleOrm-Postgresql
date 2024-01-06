/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '../../drizzle/schema';
import { DRIZZLE_ORM, DbProvider } from './drizzle.provider';

@Global()
@Module({
  providers: [DbProvider],
  exports: [DRIZZLE_ORM],
})
export class DrizzleModule {}
