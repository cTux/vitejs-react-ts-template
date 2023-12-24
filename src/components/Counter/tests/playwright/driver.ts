import { PlaywrightBaseDriver } from '~/tests/drivers/PlaywrightBaseDriver';

export class CounterDriver extends PlaywrightBaseDriver {
  public componentSelector = 'h3#counter';
}
