import {
  index,
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  uuid,
} from 'drizzle-orm/pg-core';
import { users } from './user.schema';

//one to many
export const groups = pgTable('groups', {
  id: serial().primaryKey(),
  name: text().notNull(),
});

//many to many
export const usersToGroups = pgTable(
  'usersToGroups',
  {
    userId: uuid('user_id').references(() => users.id),
    groupId: integer('group_id').references(() => groups.id),
  },
  (t) => [
    primaryKey({
      columns: [t.groupId, t.userId],
    }),
    index('userIdIndex').on(t.userId),
  ],
);
