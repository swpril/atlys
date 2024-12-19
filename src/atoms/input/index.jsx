const Input = ({ value, onChange, className, ...rest }) => (
  <input value={value} onChange={onChange} className={className} {...rest} />
);

export default Input;
