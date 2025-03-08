import { integer, pgTable, serial, text, uuid } from 'drizzle-orm/pg-core';
import { users } from './user.schema';
import { posts } from './post.schema';

//one to many
export const comments = pgTable('comments', {
  id: serial().primaryKey(),
  text: text().notNull(),
  authorId: uuid('author_id').references(() => users.id),
  postId: integer('post_id').references(() => posts.id),
});
