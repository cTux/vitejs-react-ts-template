import { act } from 'react-dom/test-utils';
import { EnzymeBaseDriver } from '../../../../tests/drivers/EnzymeBaseDriver';

export class ButtonsLanguageDriver extends EnzymeBaseDriver<unknown> {
  async renderFn(props): Promise<JSX.Element> {
    const { ButtonsLanguage } = await import('../index');
    return <ButtonsLanguage {...props} />;
  }

  get buttons() {
    return this.renderedComponentInstance.find('button');
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
