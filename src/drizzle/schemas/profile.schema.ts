import { jsonb, pgTable, serial, uuid } from 'drizzle-orm/pg-core';
import { users } from './user.schema';

//one to one relation
export const profileInfo = pgTable('profileInfo', {
  id: serial('id').primaryKey(),
  metadata: jsonb('metadata'),
  userId: uuid('user_id').references(() => users.id),
});
