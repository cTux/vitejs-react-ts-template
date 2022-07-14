import { TestingLibraryBaseDriver } from '~/tests/drivers/TestingLibraryBaseDriver';
import { CounterDriver } from '~/components/Counter/tests/driver';
import { ButtonDriver } from '~/components/Button/tests/driver';
import cn from '../styles.module.scss';

export class AppDriver extends TestingLibraryBaseDriver<unknown> {
  public componentSelector = `div.${cn.app}`;
  public counter: CounterDriver;
  public button: ButtonDriver;

  async renderFn(): Promise<JSX.Element> {
    const { App } = await import('../index');
    return <App />;
  }

  async afterRender() {
    this.counter = new CounterDriver().from(this.component);
    this.button = new ButtonDriver().from(this.component);
  }
}
