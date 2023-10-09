import {
  bigint,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
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

export const assets = mysqlTable('assets', {
  id: serial('id').primaryKey(),
  userId: bigint('user_id', { mode: 'number' })
    .notNull()
    .references(() => users.id),
  name: varchar('name', { length: 256 }).notNull(),
  slug: varchar('slug', { length: 256 }).notNull(),
  media: varchar('media', { length: 256 }).notNull(),
  description: text('description').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  products: many(assets),
}));

export const assetsRelations = relations(assets, ({ one }) => ({
  category: one(users, {
    fields: [assets.userId],
    references: [users.id],
  }),
}));
