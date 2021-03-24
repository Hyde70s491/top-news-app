import StoreModel from "../../models/StoreModel";
import { ModalType } from "../../stores/layout/LayoutModels";

export const selectActiveModal = (state: StoreModel): ModalType | null =>
  state.layout.activeModal;
