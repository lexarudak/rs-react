import { FormPageCard } from 'base/types';
import React from 'react';

class FormCard extends React.Component<FormPageCard> {
  constructor(props: FormPageCard) {
    super(props);
  }

  public render() {
    return (
      <div className="form-card">
        <div className="form-card__img"></div>
        <div className="form-card__type">{this.props.type}</div>
        <div className="form-card__title">{this.props.name}</div>
        <div>
          <span className="form-card__name">Date:</span>
          <span className="form-card__value">{this.props.date}</span>
        </div>
        <div>
          <span className="form-card__name">Img:</span>
          <span className="form-card__value">{this.props.image}</span>
        </div>
        <div>
          <span className="form-card__name">Title style:</span>
          <span className="form-card__value">{this.props.titleStyle}</span>
        </div>
        <div>
          <span className="form-card__name">Border:</span>
          <span className="form-card__value">{this.props.border}</span>
        </div>
      </div>
    );
  }
}

export default FormCard;
