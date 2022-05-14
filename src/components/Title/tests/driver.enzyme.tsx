import { EnzymeBaseDriver } from '../../../../tests/drivers/EnzymeBaseDriver';
import { TitleProps } from '../types';

export class TitleDriver extends EnzymeBaseDriver<TitleProps> {
  async renderFn(props): Promise<JSX.Element> {
    const { Title } = await import('../index');
    return <Title {...props} />;
  }
}
