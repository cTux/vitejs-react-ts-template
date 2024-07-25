import { render, RenderResult } from '@testing-library/react';
import { act } from 'react';

import { BaseDriverTypes } from './types';

export class TestingLibraryBaseDriver<Props>
  implements BaseDriverTypes<Props, HTMLElement>
{
  #renderedComponentInstance: RenderResult;
  #parent: HTMLElement;
  public componentSelector = 'div';
  public defaultProps: Props;

  // eslint-disable-next-line
  async beforeRender() {}

  async render(props?: Partial<Props>): Promise<void> {
    await this.beforeRender();
    await act(async () => {
      this.#renderedComponentInstance = render(
        await this.renderFn({ ...this.defaultProps, ...props })
      );
    });
    await this.afterRender();
  }

  // eslint-disable-next-line
  async afterRender() {}

  get root(): HTMLElement {
    return this.#parent
      ? this.#parent
      : this.#renderedComponentInstance.baseElement;
  }

  get component(): HTMLElement {
    return this.root.querySelector(this.componentSelector);
  }

  async renderFn(props?: Props): Promise<JSX.Element> {
    return <div {...props}>testing-library-base-driver</div>;
  }

  from<T extends TestingLibraryBaseDriver<Props>>(parent: HTMLElement): T {
    this.#parent = parent;
    return this as unknown as T;
  }
}
