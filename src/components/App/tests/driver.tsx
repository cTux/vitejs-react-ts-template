import { EnzymeBaseDriver } from '../../../../tests/EnzymeBaseDriver';
import { App } from '../index';
import { AppProps } from '../types';

export class AppDriver extends EnzymeBaseDriver<typeof App, AppProps> {
  renderFn(props): JSX.Element {
    return <App {...props} />;
  }
}
