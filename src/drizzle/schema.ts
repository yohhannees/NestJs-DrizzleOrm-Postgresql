/* eslint-disable prettier/prettier */
import {
  serial,
  text,
  pgTable
} from 'drizzle-orm/pg-core';
import { InferModel,  } from 'drizzle-orm';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email'),
});


export const address = pgTable('table', {
  id: serial('id').primaryKey(),
  street: text('street'),
});

export type User = InferModel<typeof users, 'select'>;
export type NewUser = InferModel<typeof users, 'insert'>;
