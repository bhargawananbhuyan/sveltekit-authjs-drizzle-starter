import type { InferSelectModel } from 'drizzle-orm'
import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'
import { createInsertSchema } from 'drizzle-zod'

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 255 }).notNull(),
	email: varchar('email', { length: 255 }).notNull().unique(),
	avatarUrl: text('avatar_url'),
	createdAt: timestamp('created_at').defaultNow()
})

export const insertUserSchema = createInsertSchema(users)

export type User = InferSelectModel<typeof users>
