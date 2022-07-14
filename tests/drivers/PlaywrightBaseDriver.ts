import { Locator, Page } from '@playwright/test';
import { BaseDriverTypes } from './types';
import { startServer } from '../server';
import { getViteServerConfig } from '../vitejs.server.config';
import { getPlayWrightGotoConfig } from '../playwright.config';

export class PlaywrightBaseDriver implements BaseDriverTypes<unknown, Locator> {
  public componentSelector = 'body';
  public port = getViteServerConfig().server.port;

  constructor(protected page: Page, private parent?: Locator) {}

  async beforeRender() {
    await startServer(this.port);
  }

  // eslint-disable-next-line
  async afterRender() {}

  async render(): Promise<void> {
    await this.beforeRender();
    await this.page.goto(
      `http://127.0.0.1:${this.port}/`,
      getPlayWrightGotoConfig()
    );
    await this.afterRender();
  }

  get root(): Locator {
    return this.parent ? this.parent : (this.page as unknown as Locator);
  }

  get component(): Locator {
    return this.root.locator(this.componentSelector);
  }
}
