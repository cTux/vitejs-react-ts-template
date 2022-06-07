import { CancellablePromise } from './cancellablePromise.types';

export const makeCancelable = <T>(
  promise: Promise<T>
): CancellablePromise<T> => {
  let rejectFn;

  const wrappedPromise: CancellablePromise<T> = new Promise(
    (resolve, reject) => {
      rejectFn = reject;
      Promise.resolve(promise).then(resolve).catch(reject);
    }
  );

  wrappedPromise.cancel = () => {
    rejectFn({ canceled: true });
  };

  return wrappedPromise;
};
