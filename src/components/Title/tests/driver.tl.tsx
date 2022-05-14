import { TestingLibraryBaseDriver } from '../../../../tests/drivers/TestingLibraryBaseDriver';
import { TitleProps } from '../types';

export class TitleDriver extends TestingLibraryBaseDriver<TitleProps> {
  async renderFn(props): Promise<JSX.Element> {
    const { Title } = await import('../index');
    return <Title {...props} />;
  }
}
