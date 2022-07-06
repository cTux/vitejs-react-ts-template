import { TestingLibraryBaseDriver } from '../../../../tests/drivers/TestingLibraryBaseDriver';
import { CounterProps } from '../types';
import cn from '../styles.module.scss';

export class CounterDriver extends TestingLibraryBaseDriver<CounterProps> {
  async renderFn(props): Promise<JSX.Element> {
    const { Counter } = await import('../index');
    return <Counter {...props} />;
  }

  get componentSelectFn() {
    return `h3.${cn.counter}`;
  }
}
