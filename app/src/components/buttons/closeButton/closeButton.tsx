import React from 'react';

function CloseButton({ closeFn }: { closeFn: () => void }) {
  return (
    <div
      className="close-button"
      onClick={() => {
        closeFn();
      }}
    >
      <div className="close-button__stick close-button__top-stick"></div>
      <div className="close-button__stick close-button__bottom-stick"></div>
    </div>
  );
}

export default CloseButton;
