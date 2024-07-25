import { fireEvent } from '@testing-library/dom';
import { act } from 'react';

import { TestingLibraryBaseDriver } from '~/tests/drivers/TestingLibraryBaseDriver';

import { ButtonProps } from '../types';

export class ButtonDriver extends TestingLibraryBaseDriver<ButtonProps> {
  public componentSelector = 'button#clickMe';

  async renderFn(props: ButtonProps): Promise<JSX.Element> {
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
