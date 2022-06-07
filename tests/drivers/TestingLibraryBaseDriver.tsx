import { fireEvent, render, RenderResult } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BaseDriver } from './BaseDriver';

export class TestingLibraryBaseDriver<P> implements BaseDriver<P> {
  protected renderedComponentInstance: RenderResult | undefined;

  async renderFn(props: Partial<P> = {}): Promise<JSX.Element> {
    return <div {...props}>testing-library-base-driver</div>;
  }

  async render(props: Partial<P> = {}) {
    await this.beforeRender();
    const component = await this.renderFn(props);
    await act(async () => {
      this.renderedComponentInstance = await render(component);
    });
    await this.afterRender();
  }

  // eslint-disable-next-line
  async beforeRender() {}

  // eslint-disable-next-line
  async afterRender() {}

  findByDataHook(dataHook: string) {
    return this.renderedComponentInstance.getByTestId(dataHook);
  }

  get root() {
    return this.renderedComponentInstance.baseElement as HTMLElement;
  }

  component = {
    get: {
      text: () => this.root.textContent,
      html: () => this.root.innerHTML,
    },
    has: {
      class: (className: string) => this.root.classList.contains(className),
    },
    when: {
      clicked: () =>
        act(() => {
          fireEvent.click(this.root);
        }),
    },
  };
}
