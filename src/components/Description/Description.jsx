import css from "../Description/Description.module.css";
export function Description({ name, info }) {
  return (
    <div className={css.desc}>
      <h1>{name}</h1>
      <p>{info}</p>
    </div>
  );
}
