export enum ModalType {
  Search = "search",
}

export interface LayoutState {
  readonly activeModal: ModalType | null;
}
