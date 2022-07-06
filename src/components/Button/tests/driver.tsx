import { TestingLibraryBaseDriver } from '../../../../tests/drivers/TestingLibraryBaseDriver';
import { act } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';

export class ButtonDriver extends TestingLibraryBaseDriver<unknown> {
  async renderFn(props): Promise<JSX.Element> {
    const { Button } = await import('../index');
    return <Button {...props} />;
  }

  get componentSelectFn() {
    return 'button';
  }

  when = {
    buttonClicked: () => {
      act(() => {
        fireEvent.click(this.component);
      });
    },
  };
}
