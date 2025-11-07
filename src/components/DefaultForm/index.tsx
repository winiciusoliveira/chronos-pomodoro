import type React from "react";
import styles from "./styles.module.css";

type DefaultFormProps = {
  children: React.ReactNode;
};

export function DefaultForm({ children }: DefaultFormProps) {
  return (
    <form className={styles.form} action="">
      <div className={styles.formRow}>{children}</div>
    </form>
  );
}
