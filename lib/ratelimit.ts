import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

// Check if Upstash credentials are configured
const hasUpstashConfig =
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.UPSTASH_REDIS_REST_TOKEN &&
  !process.env.UPSTASH_REDIS_REST_URL.includes('placeholder')

// Create Redis client only if credentials are available
const redis = hasUpstashConfig ? Redis.fromEnv() : null

// Create a new ratelimiter that allows 3 requests per 15 minutes for orders
export const orderRateLimit = redis ? new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "15 m"),
  analytics: true,
  prefix: "@upstash/ratelimit:order",
}) : null

// Create a new ratelimiter that allows 5 requests per 15 minutes for admin login
export const loginRateLimit = redis ? new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "15 m"),
  analytics: true,
  prefix: "@upstash/ratelimit:login",
}) : null
