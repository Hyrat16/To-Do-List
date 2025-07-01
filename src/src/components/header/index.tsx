import style from "./index.module.css";

export function Header({ title }: { title: string }) {
  return (
    <header className={style.todoHeader}>
      <h1>{title}</h1>
    </header>
  );
}
