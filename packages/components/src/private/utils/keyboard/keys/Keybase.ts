abstract class KeyBase {
  constructor(readonly keyWhich: number, readonly keycode: string) {
    this.keyWhich = keyWhich;
    this.keycode = keycode;
  }

  public isKey(value: number | string) {
    if (typeof value === 'number' && value === this.keyWhich) return true;
    if (typeof value === 'string' && value === this.keycode) return true;

    return false;
  }
}

export default KeyBase;
