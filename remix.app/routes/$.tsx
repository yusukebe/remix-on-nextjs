import { json, type LoaderFunction } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'

export const loader: LoaderFunction = ({ context }) => {
  const env = context.env as Record<string, unknown>
  return json({
    env,
  })
}

export default function Index() {
  const env = useLoaderData()

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Remix on Next.js</h1>
      <pre>{JSON.stringify(env)}</pre>
    </div>
  )
}
