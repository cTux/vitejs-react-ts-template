import { JSDOM } from 'jsdom';
import { describe, expect, it } from 'vitest';
import { ButtonDriver } from './driver';

const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');

// eslint-disable-next-line
// @ts-ignore
global.window = dom.window;

// eslint-disable-next-line
// @ts-ignore
global.document = dom.window.document;

// eslint-disable-next-line
// @ts-ignore
global.describe = describe;

// eslint-disable-next-line
// @ts-ignore
global.it = it;

// eslint-disable-next-line
// @ts-ignore
global.expect = expect;

describe('Button', () => {
  it('should render w/o errors', async () => {
    const driver = new ButtonDriver();
    await driver.render();
    expect(driver.component.textContent).toEqual('Click me!');
  });
});
