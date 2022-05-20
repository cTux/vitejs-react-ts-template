import { EnzymeBaseDriver } from '../../../../tests/drivers/EnzymeBaseDriver';
import { AppProps } from '../types';

export class AppDriver extends EnzymeBaseDriver<AppProps> {
  static displayName: string;

  async renderFn(props): Promise<JSX.Element> {
    const { App } = await import('../index');
    return <App {...props} />;
  }
}

AppDriver.displayName = 'EnzymeAppDriver';
