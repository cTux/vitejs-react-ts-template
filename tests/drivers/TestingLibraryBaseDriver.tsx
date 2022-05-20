import { render, RenderResult } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BaseDriver } from './BaseDriver';

export class TestingLibraryBaseDriver<P> implements BaseDriver<P> {
  protected renderedComponentInstance: RenderResult | undefined;

  baseRenderFn(el: JSX.Element): RenderResult {
    return render(el);
  }

  async renderFn(props: Partial<P> = {}): Promise<JSX.Element> {
    return <div {...props}>testing-library-base-driver</div>;
  }

  async render(props: Partial<P> = {}) {
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
    return this.renderedComponentInstance.getByTestId(
      `[data-qa="${dataHook}"]`
    );
  }

  component = {
    get: {
      text: () => this.renderedComponentInstance.baseElement.textContent,
      html: () => this.renderedComponentInstance.baseElement.innerHTML,
    },
    has: {
      class: (className: string) =>
        this.renderedComponentInstance.baseElement.classList.contains(
          className
        ),
    },
  };
}
