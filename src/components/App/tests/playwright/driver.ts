import { PlaywrightBaseDriver } from '~/tests/drivers/PlaywrightBaseDriver';
import { CounterDriver } from '~/components/Counter/tests/playwright/driver';
import { ButtonDriver } from '~/components/Button/tests/playwright/driver';

export class AppDriver extends PlaywrightBaseDriver {
  public componentSelector = '#app';
  public counter: CounterDriver;
  public button: ButtonDriver;

  async afterRender() {
    this.counter = new CounterDriver(this.page, this.component);
    this.button = new ButtonDriver(this.page, this.component);
  }
}
