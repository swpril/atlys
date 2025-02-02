import './styles.scss';

const Dropdown = ({
  onChange,
  options = [],
  selected,
  disabled,
  className,
  defaultValue,
  ...rest
}) => (
  <select
    value={selected}
    onChange={onChange}
    disabled={disabled}
    className={`select ${className}`}
    {...rest}>
    <option value={''} disabled>
      -
    </option>
    {options.map(({ label, id }, index) => {
      return (
        <option key={`${index}-${id}`} value={id}>
          {label}
        </option>
      );
    })}
  </select>
);

export default Dropdown;
