import { act } from 'react-dom/test-utils';
import { EnzymeBaseDriver } from '../../../../tests/EnzymeBaseDriver';
import { ButtonCounter } from '../index';

export class ButtonCounterDriver extends EnzymeBaseDriver<
  typeof ButtonCounter,
  unknown
> {
  renderFn(props): JSX.Element {
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
