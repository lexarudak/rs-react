import { FormBlock } from 'base/types';
import React from 'react';

function AppFormBlock({ inputBlock, isValid, errorText }: FormBlock) {
  return (
    <div className="app-form__block">
      <div className="app-form__input-block">{inputBlock}</div>
      <div className="app-form__error-block">
        <span className={isValid ? 'app-form__error-text' : 'app-form__error-text_active'}>
          {errorText}
        </span>
      </div>
    </div>
  );
}

export default AppFormBlock;
