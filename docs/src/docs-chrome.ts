import { defineDocsChrome } from '@kolektiv/common-docs-chrome';

export const docs = defineDocsChrome({
  product: 'Kascade',
  siteUrl: 'https://kascade.kolektiv.computer',
  base: '/',
  nav: [
    { label: 'Getting started', href: '/docs/' },
    { label: 'Daemon', href: '/docs/daemon/' },
  ],
});
