import React from 'react';

function FormButton(props: { name: string; callback: (event: React.MouseEvent) => void }) {
  return (
    <button className="card-button" onClick={(event) => props.callback(event)}>
      {props.name}
    </button>
  );
}

export default FormButton;
