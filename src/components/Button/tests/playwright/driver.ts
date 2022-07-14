import { PlaywrightBaseDriver } from '../../../../../tests/drivers/PlaywrightBaseDriver';
import { serverPort } from './config';

export class ButtonDriver extends PlaywrightBaseDriver {
  public componentSelector = '#clickMe';
  public port = serverPort;
}
