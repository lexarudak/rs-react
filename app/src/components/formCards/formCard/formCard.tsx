import { FormPageCard } from 'base/types';
import React from 'react';
import config from '../../appForm/appFormConfig/appFormConfig';

class FormCard extends React.Component<FormPageCard> {
  constructor(props: FormPageCard) {
    super(props);
  }

  private isBorder(textValue: string) {
    const [trueValue] = config.radio.values;
    const [, trueValueText] = trueValue;
    return trueValueText === textValue;
  }

  private getTitleStyleText(titleStyles: string[]) {
    const cleanArr = titleStyles.filter((value) => value);
    return cleanArr.join(' | ');
  }

  private addAdditionalStyles(props: FormPageCard) {
    const addStyles = [];
    if (this.isBorder(props.border)) addStyles.push('form-card__border');
    this.props.titleStyle.forEach((style) => {
      if (style) addStyles.push(`form-card__${style.replace(/ /gi, '-').toLowerCase()}`);
    });
    addStyles.push(`form-card__${this.props.type.replace(/ /gi, '-').toLowerCase()}`);
    return addStyles.join(' ');
  }

  public render() {
    return (
      <div className={`form-card ${this.addAdditionalStyles(this.props)}`}>
        <img className="form-card__img" src={this.props.image}></img>
        <div className="form-card__type">{this.props.type}</div>
        <div className="form-card__title">{this.props.name}</div>
        <div>
          <span className="form-card__name">Date:</span>
          <span className="form-card__value">{this.props.date}</span>
        </div>
        <div>
          <span className="form-card__name">Title style:</span>
          <span className="form-card__value">{this.getTitleStyleText(this.props.titleStyle)}</span>
        </div>
        <div>
          <span className="form-card__name">Border:</span>
          <span className="form-card__value">
            {this.isBorder(this.props.border) ? 'Yes' : 'No'}
          </span>
        </div>
      </div>
    );
  }
}

export default FormCard;
