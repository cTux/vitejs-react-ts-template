import { act } from 'react-dom/test-utils';
import { EnzymeBaseDriver } from '../../../../tests/EnzymeBaseDriver';
import { ButtonsLanguage } from '../index';

export class ButtonsLanguageDriver extends EnzymeBaseDriver<
  typeof ButtonsLanguage,
  unknown
> {
  renderFn(props): JSX.Element {
    return <ButtonsLanguage {...props} />;
  }

  get buttons() {
    return this.mountedComponentInstance.find('button');
  }

  btn = {
    get: {
      length: () => this.buttons.length,
    },
    when: {
      clicked: (lang: string) =>
        act(() => {
          this.findByDataHook(`btn-${lang}`).at(0).simulate('click');
        }),
    },
  };
}
