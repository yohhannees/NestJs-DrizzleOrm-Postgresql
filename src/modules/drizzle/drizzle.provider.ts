/* eslint-disable prettier/prettier */
import { FactoryProvider, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from '../../drizzle/schema';
import { DefaultLogger, LogWriter } from 'drizzle-orm';

export const DRIZZLE_ORM = 'DRIZZLE_ORM';

export const DbProvider: FactoryProvider = {
  provide: DRIZZLE_ORM,
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    //declare a logger
    const logger = new Logger('DRIZZLE_ORM');
    logger.debug('Connecting to PlanetScale...');

    //get the connection string from the environment variables
    const connectionString = configService.get<string>('database.url');
    const pool = new Pool({
      connectionString: connectionString,
    });

    //connect to PlanetScale
    logger.debug('Connected to PlanetScale!');

    // create a custom logger
    class CustomDbLogWriter implements LogWriter {
      write(message: string) {
        logger.verbose(message);
      }
    }

    //return the drizzle instance
    return drizzle(pool, {
      schema,
      logger: new DefaultLogger({ writer: new CustomDbLogWriter() }),
    });
  },
};
