import { ButtonDriver } from '~/components/Button/tests/playwright/driver';
import { CounterDriver } from '~/components/Counter/tests/playwright/driver';
import { PlaywrightBaseDriver } from '~/tests/drivers/PlaywrightBaseDriver';

export class AppDriver extends PlaywrightBaseDriver {
  public componentSelector = 'div#app';
  public counter: CounterDriver;
  public button: ButtonDriver;

  async gotoPage() {
    await super.gotoPage('/?path=/story/components-app--primary');
  }

  async afterRender() {
    this.counter = new CounterDriver(this.page, this.component);
    this.button = new ButtonDriver(this.page, this.component);
  }
}
