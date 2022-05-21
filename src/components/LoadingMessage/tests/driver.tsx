import { TestingLibraryBaseDriver } from '../../../../tests/drivers/TestingLibraryBaseDriver';

export class LoadingMessageDriver extends TestingLibraryBaseDriver<unknown> {
  async renderFn(props): Promise<JSX.Element> {
    const { LoadingMessage } = await import('../index');
    return <LoadingMessage {...props} />;
  }
}
