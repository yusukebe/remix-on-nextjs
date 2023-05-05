/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: 'remix.app',
  ignoredRouteFiles: ['**/.*'],
  serverConditions: ['worker'],
  serverDependenciesToBundle: 'all',
  serverMainFields: ['module', 'main'],
  serverMinify: true,
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral',
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
}
