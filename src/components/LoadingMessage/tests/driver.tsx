import { TestingLibraryBaseDriver } from '../../../../tests/drivers/TestingLibraryBaseDriver';
import cn from '../styles.module.scss';

export class LoadingMessageDriver extends TestingLibraryBaseDriver<unknown> {
  async renderFn(props): Promise<JSX.Element> {
    const { LoadingMessage } = await import('../index');
    return <LoadingMessage {...props} />;
  }

  get componentSelectFn() {
    return `div.${cn.loading}`;
  }
}
