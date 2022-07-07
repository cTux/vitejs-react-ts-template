import { Locator, Page } from '@playwright/test';
import { BaseDriverTypes } from './BaseDriver.types';

export class PlaywrightBaseDriver implements BaseDriverTypes<unknown, Locator> {
  public componentSelector = 'body';

  constructor(protected page: Page, private parent?: Locator) {}

  // eslint-disable-next-line
  async beforeRender() {}

  // eslint-disable-next-line
  async afterRender() {}

  async render(): Promise<void> {
    await this.beforeRender();
    await this.page.goto('http://127.0.0.1:3093/');
    await this.afterRender();
  }

  get root(): Locator {
    return this.parent ? this.parent : (this.page as unknown as Locator);
  }

  get component(): Locator {
    return this.root.locator(this.componentSelector);
  }
}
