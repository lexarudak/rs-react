import { FormBlock } from 'base/types';
import React from 'react';

function AppFormBlock({ inputBlock, err }: FormBlock) {
  return (
    <div className="app-form__block">
      <div className="app-form__input-block">{inputBlock}</div>
      <div className="app-form__error-block">
        <span className={!err ? 'app-form__error-text' : 'app-form__error-text_active'}>
          {err?.message}
        </span>
      </div>
    </div>
  );
}

export default AppFormBlock;
