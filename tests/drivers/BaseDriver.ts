export interface BaseDriver<P> {
  render: (props?: P) => Promise<void>;
  component: {
    get: {
      text: () => string;
    };
    has: {
      class: (className: string) => boolean;
    };
  };
}
