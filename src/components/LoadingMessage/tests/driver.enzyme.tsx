import { EnzymeBaseDriver } from '../../../../tests/drivers/EnzymeBaseDriver';

export class LoadingMessageDriver extends EnzymeBaseDriver<unknown> {
  async renderFn(props): Promise<JSX.Element> {
    const { LoadingMessage } = await import('../index');
    return <LoadingMessage {...props} />;
  }
}
