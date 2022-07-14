import { EmptyTLDriver } from './EmptyTLDriver';

describe('EmptyTLDriver', () => {
  it('should render', async () => {
    const driver = new EmptyTLDriver();
    await driver.render();
    expect(driver.component.innerHTML).toMatchSnapshot();
  });
});
