type ModalAspectSizes = 's' | 'm' | 'l' | 'xl';
type ModalSizes = Record<ModalAspectSizes, string>;

export interface Modal {
  readonly sizes: ModalSizes;
}
