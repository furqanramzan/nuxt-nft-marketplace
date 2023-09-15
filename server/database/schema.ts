import {
  serial,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/mysql-core';
import { mysqlTableCreator } from './utils';

const mysqlTable = mysqlTableCreator();

export const users = mysqlTable(
  'users',
  {
    id: serial('id').primaryKey(),
    address: varchar('address', { length: 256 }).notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
  },
  (table) => ({
    addressIdx: uniqueIndex('address_idx').on(table.address),
  }),
);
