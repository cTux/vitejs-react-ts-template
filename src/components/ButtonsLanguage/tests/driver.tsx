import { act } from 'react-dom/test-utils';
import { TestingLibraryBaseDriver } from '../../../../tests/drivers/TestingLibraryBaseDriver';
import { fireEvent } from '@testing-library/react';

export class ButtonsLanguageDriver extends TestingLibraryBaseDriver<unknown> {
  async renderFn(props): Promise<JSX.Element> {
    const { ButtonsLanguage } = await import('../index');
    return <ButtonsLanguage {...props} />;
  }

  get buttons() {
    return this.renderedComponentInstance.getAllByRole('button');
  }

  btn = {
    get: {
      length: () => this.buttons.length,
    },
    when: {
      clicked: (lang: string) =>
        act(() => {
          fireEvent.click(this.findByDataHook(`btn-${lang}`).firstChild);
        }),
    },
  };
}
