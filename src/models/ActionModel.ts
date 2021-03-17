import { Action } from "redux";

interface ActionModel<Type> extends Action {
  readonly type: string;
  readonly payload?: Type;
  readonly error?: boolean;
  readonly meta?: any;
}

export default ActionModel;
