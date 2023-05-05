# Remix on Next.js

Remix application runs on [Edge API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes#edge-api-routes) in Next.js.

## Demo

* <https://remix-on-next-yusukebe.vercel.app>

## Screenshot

`env` has `NEXT_RUNTIME:"edge"`, but the page is generated by Remix app.

![SS](https://ss.yusukebe.com/10890bf3d4779b8ef85b0afea96c618a35690c2adae0437952d0ddbb4d92dea6.png)

## Directory structure

```
.
├── README.md
├── next-env.d.ts
├── next.config.js
├── package.json
├── pages // <=== Next.js
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api
│   │   └── [...route].ts // <=== Edge API Routes
│   └── index.tsx
├── public
├── remix.app // <=== Remix App
│   ├── entry.client.tsx
│   ├── entry.server.tsx
│   ├── root.tsx
│   └── routes
│       └── $.tsx
├── remix.config.js
├── remix.env.d.ts
├── tsconfig.json
└── yarn.lock
```

## Author

Yusuke Wada <https://github.com/yusukebe>

## License

MIT