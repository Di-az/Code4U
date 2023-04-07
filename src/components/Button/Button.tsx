import React from 'react';
import style from './Button.module.css';

type Props = {
  location: string;
  text: string;
  onClickHandler: () => void;
  type?: string;
  isDisable?: boolean;
};

export default function Button({
  location,
  text,
  onClickHandler,
  type,
  isDisable,
}: Props) {
  const isSubmit: boolean = type === 'submit';
  return (
    <button
      className={style[location]}
      onClick={onClickHandler}
      disabled={isDisable}
      type={isSubmit ? 'submit' : 'button'}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  isDisable: false,
};
