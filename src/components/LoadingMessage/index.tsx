import cn from './styles.module.scss';

export const LoadingMessage = () => {
  return (
    <div id={'loading'} className={cn.loading}>
      Loading...
    </div>
  );
};
