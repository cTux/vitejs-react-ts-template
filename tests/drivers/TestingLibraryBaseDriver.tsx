import { render, RenderResult } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BaseDriverTypes } from './BaseDriver.types';

export class TestingLibraryBaseDriver<P> implements BaseDriverTypes<P> {
  protected renderedComponentInstance: RenderResult | undefined;
  private parentComponentInstance: HTMLElement | undefined;

  async renderFn(props: Partial<P> = {}): Promise<JSX.Element> {
    return <div {...props}>testing-library-base-driver</div>;
  }

  async render(props: Partial<P> = {}) {
    await this.beforeRender();
    await act(async () => {
      this.renderedComponentInstance = render(await this.renderFn(props));
    });
    await this.afterRender();
  }

  from(parent: HTMLElement) {
    this.parentComponentInstance = parent;
    return this;
  }

  // eslint-disable-next-line
  async beforeRender() {}

  // eslint-disable-next-line
  async afterRender() {}

  get root(): HTMLElement {
    return this.parentComponentInstance
      ? this.parentComponentInstance
      : this.renderedComponentInstance.baseElement;
  }

  get componentSelectFn() {
    return 'div';
  }

  get component(): HTMLElement {
    return this.root.querySelector(this.componentSelectFn);
  }
}
