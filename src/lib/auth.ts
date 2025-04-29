import { db } from '@/db/db'
import { account, session, user, verification } from '@/db/schema/auth-schema'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { nextCookies } from 'better-auth/next-js'

const PROVIDER = 'pg' as const

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: PROVIDER,
    schema: {
      user,
      session,
      account,
      verification,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()],
})
