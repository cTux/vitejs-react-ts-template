import { act } from 'react-dom/test-utils';
import { EnzymeBaseDriver } from '../../../../tests/drivers/EnzymeBaseDriver';

export class ButtonCounterDriver extends EnzymeBaseDriver<unknown> {
  async renderFn(props): Promise<JSX.Element> {
    const { ButtonCounter } = await import('../index');
    return <ButtonCounter {...props} />;
  }

  btn = {
    get: {
      text: () => this.componentRoot.text(),
    },
    when: {
      clicked: () =>
        act(() => {
          this.componentRoot.simulate('click');
        }),
    },
  };
}
