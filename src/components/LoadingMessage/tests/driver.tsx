import { TestingLibraryBaseDriver } from '~/tests/drivers/TestingLibraryBaseDriver';

export class LoadingMessageDriver extends TestingLibraryBaseDriver<unknown> {
  public componentSelector = 'div#loading';

  async renderFn(): Promise<JSX.Element> {
    const { LoadingMessage } = await import('../index');
    return <LoadingMessage />;
  }
}
