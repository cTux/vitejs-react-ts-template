import { Locator, Page } from '@playwright/test';
import { BaseDriverTypes } from './types';
import { getPlayWrightGotoConfig } from '../playwright.config';

export class PlaywrightBaseDriver implements BaseDriverTypes<unknown, Locator> {
  public componentSelector = 'body';

  constructor(protected page: Page, private parent?: Locator) {}

  // eslint-disable-next-line
  async beforeRender() {}

  // eslint-disable-next-line
  async gotoPage() {
    await this.page.goto('/', getPlayWrightGotoConfig());
  }

  // eslint-disable-next-line
  async afterRender() {}

  async render(): Promise<void> {
    await this.beforeRender();
    await this.gotoPage();
    await this.afterRender();
  }

  get root(): Locator {
    return this.parent ? this.parent : (this.page as unknown as Locator);
  }

  get component(): Locator {
    return this.root.locator(this.componentSelector);
  }
}
