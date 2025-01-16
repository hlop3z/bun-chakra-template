import { objectToClass } from "../../utils/";

import Props from "./props";
import "./style.scss";

export default function Demo(props: Props) {
  return (
    <div {...props} className={objectToClass(props.class)}>
      <h3>Hello Demo</h3>
      {props.children}
    </div>
  );
}
