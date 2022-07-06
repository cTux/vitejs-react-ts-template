export interface BaseDriverTypes<P> {
  render: (props?: P) => Promise<void>;
}
