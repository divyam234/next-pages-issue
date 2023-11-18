import type { Config } from "drizzle-kit"

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  breakpoints: true,
} satisfies Config
