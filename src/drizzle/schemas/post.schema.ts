import { pgTable, serial, text, uuid } from 'drizzle-orm/pg-core';
import { users } from './user.schema';

//one to many
export const posts = pgTable('posts', {
  id: serial().primaryKey(),
  title: text().notNull(),
  content: text().notNull(),
  authorId: uuid('author_id').references(() => users.id),
});
