import { Locator, Page } from '@playwright/test';
import { BaseDriverTypes } from './types';
import { getPlayWrightGotoConfig } from '../playwright.config';

export class PlaywrightBaseDriver implements BaseDriverTypes<unknown, Locator> {
  public componentSelector = 'body';

  constructor(protected page: Page, private parent?: Locator) {}

  // eslint-disable-next-line
  async beforeRender() {}

  async gotoPage(url = '/') {
    await this.page.goto(url, getPlayWrightGotoConfig());
  }

  // eslint-disable-next-line
  async afterRender() {}

  async render(): Promise<void> {
    await this.beforeRender();
    await this.gotoPage();
    await this.afterRender();
  }

  get root(): Locator {
    if (this.parent) {
      return this.parent;
    }
    return this.page as unknown as Locator;
  }

  get component(): Locator {
    return this.root.locator(this.componentSelector);
  }
}
