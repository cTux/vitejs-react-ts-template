import { TestingLibraryBaseDriver } from '~/tests/drivers/TestingLibraryBaseDriver';

import { CounterProps } from '../types';

export class CounterDriver extends TestingLibraryBaseDriver<CounterProps> {
  public componentSelector = 'h3#counter';
  public defaultProps: CounterProps = {
    value: 0,
  };

  async renderFn(props: CounterProps): Promise<JSX.Element> {
    const { Counter } = await import('../index');
    return <Counter {...props} />;
  }
}
