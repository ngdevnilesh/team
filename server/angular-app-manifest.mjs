
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ngdevnilesh.github.io/team/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://ngdevnilesh.github.io/team"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1730, hash: 'bc92ebb185cdd6175ecf7867fef22fb3c57cb8b84ba8c2cbb18dc5e9aa53a945', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1161, hash: 'b8786e51a41a9b9d7a5e89a96197d3640a096378d9b1bf20eb6f932b29369a56', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 19405, hash: '1f5c4a059113910de2ea30d171275e79ef28b33e2226d6218fee2d8da34003d0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JGX4B2HB.css': {size: 73701, hash: 'Gx2aouZVGDY', text: () => import('./assets-chunks/styles-JGX4B2HB_css.mjs').then(m => m.default)}
  },
};
