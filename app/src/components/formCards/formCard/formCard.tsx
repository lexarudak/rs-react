import { FormPageCard } from 'base/types';
import React from 'react';
import { radioConfig } from '../../appForm/appFormConfig/appFormConfig';

function FormCard({ name, date, select, checkbox, radio, imageSrc }: FormPageCard) {
  function isBorder(textValue: string | null) {
    const [trueValue] = radioConfig.valuesArr;
    const { text } = trueValue;
    return text === textValue;
  }

  function addAdditionalStyles(select: string, checkbox: false | string[], radio: string | null) {
    const addStyles = [];
    if (isBorder(radio)) addStyles.push('form-card__border');
    if (checkbox)
      checkbox.forEach((style) => {
        addStyles.push(`form-card__${style.replace(/ /gi, '-').toLowerCase()}`);
      });
    addStyles.push(`form-card__${select.replace(/ /gi, '-').toLowerCase()}`);
    return addStyles.join(' ');
  }

  return (
    <div
      data-testid="form-card"
      className={`form-card ${addAdditionalStyles(select, checkbox, radio)}`}
    >
      <img className="form-card__img" src={imageSrc}></img>
      <div className="form-card__type">{select}</div>
      <div className="form-card__title">{name}</div>
      <div>
        <span className="form-card__name">Date:</span>
        <span className="form-card__value">{date}</span>
      </div>
      <div>
        <span className="form-card__name">Title style:</span>
        <span className="form-card__value">{checkbox && checkbox.join(' | ')}</span>
      </div>
      <div>
        <span className="form-card__name">Border:</span>
        <span className="form-card__value">{isBorder(radio) ? 'Yes' : 'No'}</span>
      </div>
    </div>
  );
}

export default FormCard;
