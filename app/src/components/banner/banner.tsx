import React from 'react';

function Banner(props: { text: string }) {
  return <h2 className="banner">{props.text}</h2>;
}

export default Banner;
