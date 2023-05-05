import { Hono } from 'hono'
import { env } from 'hono/adapter'
import { logger } from 'hono/logger'
import { handle } from 'hono/nextjs'
import type { AppLoadContext } from '@remix-run/cloudflare'
import { createRequestHandler } from '@remix-run/cloudflare'

import * as build from '../../build'

export const config = {
  runtime: 'edge',
}

// @ts-ignore
const handleRemixRequest = createRequestHandler(build, process.env.NODE_ENV)

const app = new Hono()

app.use('*', logger())

app.get('*', async (c) => {
  const loadContext: AppLoadContext = { env: env(c) }
  return await handleRemixRequest(c.req.raw, loadContext)
})

app.showRoutes()

export default handle(app)
