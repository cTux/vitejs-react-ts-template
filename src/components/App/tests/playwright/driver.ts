import { PlaywrightBaseDriver } from '../../../../../tests/drivers/PlaywrightBaseDriver';
import { CounterDriver } from '../../../Counter/tests/playwright/driver';
import { ButtonDriver } from '../../../Button/tests/playwright/driver';
import { serverPort } from './config';

export class AppDriver extends PlaywrightBaseDriver {
  public componentSelector = '#app';
  public port = serverPort;
  public counter: CounterDriver;
  public button: ButtonDriver;

  async afterRender() {
    this.counter = new CounterDriver(this.page, this.component);
    this.button = new ButtonDriver(this.page, this.component);
  }
}
