import { db } from '@/db/db'
import { account, session, user, verification } from '@/db/schema/auth-schema'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { nextCookies } from 'better-auth/next-js'

const PROVIDER = 'pg' as const
const COOKIE_PREFIX = 'better-auth' as const

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
  advanced: {
    useSecureCookies: true,
    cookiePrefix: COOKIE_PREFIX,
  },
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()],
})
