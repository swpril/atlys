import { forwardRef } from 'react';
import './styles.scss';

const Dot = forwardRef(function ({}, ref) {
  return (
    <div className='dot'>
      <span ref={ref} />
    </div>
  );
});

export default Dot;
