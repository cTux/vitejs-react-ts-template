import { PlaywrightBaseDriver } from '../../../../../tests/drivers/PlaywrightBaseDriver';

export class ButtonDriver extends PlaywrightBaseDriver {
  public componentSelector = '#clickMe';
}
