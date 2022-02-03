import { EnzymeBaseDriver } from '../../../../tests/EnzymeBaseDriver';
import { LoadingMessage } from '../index';

export class LoadingMessageDriver extends EnzymeBaseDriver<
  typeof LoadingMessage,
  unknown
> {
  renderFn(props): JSX.Element {
    return <LoadingMessage {...props} />;
  }
}
