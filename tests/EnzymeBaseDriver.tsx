import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';

export class EnzymeBaseDriver<C, P> {
  protected mountedComponentInstance: ReactWrapper<C, P> | undefined;

  baseRenderFn(el: JSX.Element) {
    return mount<C, P>(el);
  }

  renderFn(props?: P): JSX.Element {
    return <div {...props}>enzyme-base-driver</div>;
  }

  async render(props?: P) {
    await act(() => {
      this.mountedComponentInstance = this.baseRenderFn(this.renderFn(props));
      return this.afterRender();
    });
  }

  // eslint-disable-next-line
  async afterRender() {}

  findByDataHook(dataHook: string) {
    return this.mountedComponentInstance.find(`[data-qa="${dataHook}"]`);
  }

  get componentRoot() {
    return this.mountedComponentInstance.children().at(0);
  }

  component = {
    get: {
      text: () => this.mountedComponentInstance.text(),
      props: () => this.mountedComponentInstance.props(),
    },
    has: {
      class: (className: string) => this.componentRoot.hasClass(className),
    },
  };
}
