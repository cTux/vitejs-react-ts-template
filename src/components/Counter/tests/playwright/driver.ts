import { PlaywrightBaseDriver } from '../../../../../tests/drivers/PlaywrightBaseDriver';
import { serverPort } from './config';

export class CounterDriver extends PlaywrightBaseDriver {
  public componentSelector = 'h3';
  public port = serverPort;
}
