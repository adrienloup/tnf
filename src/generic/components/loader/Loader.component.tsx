import { classNames } from "@/src/generic/utils/classNames";
import { Loader } from "@/src/generic/components/loader/Loader.type";
import styles from "./Loader.module.scss";

export const LoaderComponent = ({
  className,
  duration,
  size = "medium",
}: Loader) => {
  return (
    <div
      className={classNames([styles.loader, styles[size], className])}
      style={
        {
          "--loader-duration": `${duration}ms`,
        } as React.CSSProperties
      }
    ></div>
  );
};
