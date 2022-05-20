import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { BaseDriver } from './BaseDriver';

export class EnzymeBaseDriver<P> implements BaseDriver<P> {
  protected renderedComponentInstance: ReactWrapper<unknown, P> | undefined;

  baseRenderFn(el: JSX.Element) {
    return mount<unknown, P>(el);
  }

  async renderFn(props?: P): Promise<JSX.Element> {
    return <div {...props}>enzyme-base-driver</div>;
  }

  async render(props?: P) {
    await this.beforeRender();
    const component = await this.renderFn(props);
    act(() => {
      this.renderedComponentInstance = this.baseRenderFn(component);
    });
    await this.afterRender();
  }

  // eslint-disable-next-line
  async beforeRender() {}

  // eslint-disable-next-line
  async afterRender() {}

  findByDataHook(dataHook: string) {
    return this.renderedComponentInstance.find(`[data-qa="${dataHook}"]`);
  }

  get componentRoot() {
    return this.renderedComponentInstance.children().at(0);
  }

  component = {
    get: {
      text: () => this.renderedComponentInstance.text(),
      html: () => this.renderedComponentInstance.html(),
      props: () => this.renderedComponentInstance.props(),
    },
    has: {
      class: (className: string) => this.componentRoot.hasClass(className),
    },
  };
}
