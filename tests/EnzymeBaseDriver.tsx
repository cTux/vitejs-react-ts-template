import { mount, ReactWrapper } from 'enzyme';

export class EnzymeBaseDriver<C, P> {
  protected mountedComponentInstance: ReactWrapper<C, P> | undefined;

  baseRenderFn(el: JSX.Element) {
    return mount<C, P>(el);
  }

  renderFn(props: Partial<P> = {}): JSX.Element {
    return <div {...props}>enzyme-base-driver</div>;
  }

  render(props: Partial<P> = {}) {
    this.beforeRender();
    this.mountedComponentInstance = this.baseRenderFn(this.renderFn(props));
    this.afterRender();
  }

  // eslint-disable-next-line
  beforeRender() {}
  // eslint-disable-next-line
  afterRender() {}

  component = {
    html: () => this.mountedComponentInstance?.html(),
    props: () => this.mountedComponentInstance?.props(),
  };
}
