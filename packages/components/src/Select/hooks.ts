import React from 'react';

const useFocusOptionWhilePressingKey = (
  listBoxRef: React.RefObject<HTMLUListElement>,
  isAutocomplete: boolean,
  setIsOpen: (isOpen: boolean) => void
) => {
  const keyPressString = React.useRef('');
  const keyPressStringTimeout = React.useRef<number>();

  const onAlphanumericKeyPressed = React.useCallback(
    (ev: React.KeyboardEvent) => {
      if (!isAutocomplete) {
        ev.stopPropagation();
        keyPressString.current += ev.key;

        const optionToSelect = [...listBoxRef.current!.children].find(
          (optionEl: Element) => {
            return optionEl.textContent
              ?.toLowerCase()
              .startsWith(keyPressString.current.toLowerCase());
          }
        );

        if (optionToSelect) {
          (optionToSelect as HTMLLIElement).focus();
          setIsOpen(true);
        }

        if (keyPressStringTimeout.current)
          clearTimeout(keyPressStringTimeout.current);
        keyPressStringTimeout.current = setTimeout(() => {
          keyPressString.current = '';
        }, 1000);
      }
    },
    [isAutocomplete, listBoxRef, setIsOpen]
  );

  return onAlphanumericKeyPressed;
};

export { useFocusOptionWhilePressingKey };
