export interface BaseDriverTypes<Props, Element> {
  beforeRender: () => Promise<void>;
  render: (props?: Props) => Promise<void>;
  afterRender: () => Promise<void>;
  root: Element;
  component: Element;
}
