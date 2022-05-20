import { TestingLibraryBaseDriver } from '../../../../tests/drivers/TestingLibraryBaseDriver';

export class ButtonCounterDriver extends TestingLibraryBaseDriver<unknown> {
  async renderFn(props): Promise<JSX.Element> {
    const { ButtonCounter } = await import('../index');
    return <ButtonCounter {...props} />;
  }

  get root() {
    return this.renderedComponentInstance.getByRole(
      'button'
    ) as HTMLButtonElement;
  }
}
