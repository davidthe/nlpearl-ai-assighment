import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run init:serve:development',
        production: 'nx run init:serve:production',
      },
      ciWebServerCommand: 'nx run init:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
