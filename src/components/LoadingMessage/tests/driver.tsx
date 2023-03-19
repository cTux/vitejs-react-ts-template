import { TestingLibraryBaseDriver } from '~/tests/drivers/TestingLibraryBaseDriver';

import cn from '../styles.module.scss';

export class LoadingMessageDriver extends TestingLibraryBaseDriver<unknown> {
  public componentSelector = `div.${cn.loading}`;

  async renderFn(): Promise<JSX.Element> {
    const { LoadingMessage } = await import('../index');
    return <LoadingMessage />;
  }
}
