import { EnzymeBaseDriver } from '../../../../tests/EnzymeBaseDriver';
import { Title } from '../index';
import { TitleProps } from '../types';

export class TitleDriver extends EnzymeBaseDriver<typeof Title, TitleProps> {
  renderFn(props): JSX.Element {
    return <Title {...props} />;
  }
}
