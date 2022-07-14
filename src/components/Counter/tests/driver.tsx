import { TestingLibraryBaseDriver } from '../../../../tests/drivers/TestingLibraryBaseDriver';
import { CounterProps } from '../types';
import cn from '../styles.module.scss';

export class CounterDriver extends TestingLibraryBaseDriver<CounterProps> {
  public componentSelector = `h3.${cn.counter}`;
  public defaultProps: CounterProps = {
    value: 0,
  };

  async renderFn(props): Promise<JSX.Element> {
    const { Counter } = await import('../index');
    return <Counter {...props} />;
  }
}
