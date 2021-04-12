import ActionModel from "../../models/ActionModel";
import { ModalType } from "./LayoutModels";

const LAYOUT_ACTION_DOMAIN: string = "layout";

export const TOGGLE_MODAL: string = `${LAYOUT_ACTION_DOMAIN}/toggleModal`;

export const toggleModal = (
  param: ModalType | null
): ActionModel<ModalType | null> => {
  return {
    type: TOGGLE_MODAL,
    payload: param,
  };
};
