import style from "./styles.module.css";

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading(props: HeadingProps) {
  return <h1 className={(style.heading, style.icon)}>{props.children} </h1>;
}
