import css from '../Notification/Notification.module.css'
export const Notification = ({ message }) => {
  return (
    <div className={css.noti}>
      <p>{message}</p>
    </div>
  );
};
