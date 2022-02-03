import { mount, ReactWrapper } from 'enzyme';

export class EnzymeBaseDriver<C, P> {
  protected mountedComponentInstance: ReactWrapper<C, P> | undefined;
  private componentInstance: ReactWrapper | undefined;

  baseRenderFn(el: JSX.Element) {
    return mount<C, P>(el);
  }

  renderFn(props: Partial<P> = {}): JSX.Element {
    return <div {...props}>enzyme-base-driver</div>;
  }

  render(props: Partial<P> = {}) {
    this.beforeRender();
    this.mountedComponentInstance = this.baseRenderFn(this.renderFn(props));
    this.componentInstance = this.mountedComponentInstance.children().at(0);
    this.afterRender();
  }

  // eslint-disable-next-line
  beforeRender() {}
  // eslint-disable-next-line
  afterRender() {}

  component = {
    get: {
      html: () => this.mountedComponentInstance?.html(),
      props: () => this.mountedComponentInstance?.props(),
    },
    has: {
      class: (className: string) => this.componentInstance?.hasClass(className),
    },
  };
}
