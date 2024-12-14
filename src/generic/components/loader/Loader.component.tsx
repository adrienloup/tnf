import { classNames } from "@/src/generic/utils/classNames";
import { Loader } from "@/src/generic/components/loader/Loader.type";
import styles from "./Loader.module.scss";

export const LoaderComponent = ({ size = "medium", className }: Loader) => {
  return (
    <div className={classNames([styles.loader, styles[size], className])}></div>
  );
};
