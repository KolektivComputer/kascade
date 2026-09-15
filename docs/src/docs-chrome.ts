import { defineDocsChrome } from '@kolektiv/common-docs-chrome';

export const docs = defineDocsChrome({
  name: 'Kascade',
  title: 'Kascade Docs',
  description:
    'Polyglot monorepo runner. Ingest BSP from any build server, compose the graph, re-export one workspace to the IDE.',
  siteUrl: 'https://kascade.kolektiv.computer',
  base: '/',
  nav: [
    {
      label: 'Getting started',
      items: [
        { label: 'Overview', href: '/docs/', description: 'What Kascade is' },
        { label: 'Daemon', href: '/docs/daemon/', description: 'Long-lived kascade-daemon' },
      ],
    },
    {
      label: 'Project',
      items: [
        {
          label: 'GitHub',
          href: 'https://github.com/KolektivComputer/kascade',
          external: true,
          description: 'Source repository',
        },
      ],
    },
  ],
  repo: {
    url: 'https://github.com/KolektivComputer/kascade',
    branch: 'main',
  },
  footer: {
    tagline: 'A Kolektiv Computing project. Always spell Kascade.',
    links: [
      { label: 'GitHub', href: 'https://github.com/KolektivComputer/kascade' },
      { label: 'Kolektiv', href: 'https://kolektiv.computer' },
    ],
  },
  builtBy: { href: 'https://kolektiv.computer' },
});
