import { ReactWrapper } from 'enzyme';
import { EnzymeBaseDriver } from '../../../../tests/EnzymeBaseDriver';
import { App } from '../index';
import { AppProps } from '../types';

export class AppDriver extends EnzymeBaseDriver<typeof App, AppProps> {
  private btnInstance: ReactWrapper | undefined;
  private titleInstance: ReactWrapper | undefined;

  renderFn(props: Partial<AppProps> = {}): JSX.Element {
    return <App {...props} />;
  }

  afterRender() {
    this.btnInstance = this.mountedComponentInstance?.find('button').at(0);
    this.titleInstance = this.mountedComponentInstance?.find('h1').at(0);
  }

  title = {
    text: () => this.titleInstance?.text(),
  };

  btn = {
    text: () => this.btnInstance?.text(),
    click: () => this.btnInstance?.simulate('click'),
  };
}
