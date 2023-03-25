import { RefObject } from 'react';

interface InputBlock extends React.Component {
  errorText: string;
  blockRef: RefObject<HTMLDivElement>;
}

export default InputBlock;
