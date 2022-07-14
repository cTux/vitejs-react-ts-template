import { act } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import { TestingLibraryBaseDriver } from '~/tests/drivers/TestingLibraryBaseDriver';
import { ButtonProps } from '../types';

export class ButtonDriver extends TestingLibraryBaseDriver<ButtonProps> {
  public componentSelector = 'button';

  async renderFn(props): Promise<JSX.Element> {
    const { Button } = await import('../index');
    return <Button {...props} />;
  }

  trigger = {
    click: () => {
      act(() => {
        fireEvent.click(this.component);
      });
    },
  };
}
