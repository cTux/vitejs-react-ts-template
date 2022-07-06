import { TestingLibraryBaseDriver } from '../../../../tests/drivers/TestingLibraryBaseDriver';
import { CounterDriver } from '../../Counter/tests/driver';
import { ButtonDriver } from '../../Button/tests/driver';
import cn from '../styles.module.scss';

export class AppDriver extends TestingLibraryBaseDriver<never> {
  public counter: CounterDriver;
  public button: ButtonDriver;

  async renderFn(props): Promise<JSX.Element> {
    const { App } = await import('../index');
    return <App {...props} />;
  }

  get componentSelectFn() {
    return `div.${cn.app}`;
  }

  async afterRender() {
    this.counter = new CounterDriver().from(this.component);
    this.button = new ButtonDriver().from(this.component);
  }
}
