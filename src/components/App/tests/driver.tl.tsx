import { TestingLibraryBaseDriver } from '../../../../tests/drivers/TestingLibraryBaseDriver';
import { AppProps } from '../types';

export class AppDriver extends TestingLibraryBaseDriver<AppProps> {
  static displayName: string;

  async renderFn(props): Promise<JSX.Element> {
    const { App } = await import('../index');
    return <App {...props} />;
  }
}

AppDriver.displayName = 'TestingLibraryAppDriver';
