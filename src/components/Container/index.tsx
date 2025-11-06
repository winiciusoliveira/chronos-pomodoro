import styles from "./styles.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <section className={styles.content}>{children}</section>
      </div>
    </div>
  );
}
