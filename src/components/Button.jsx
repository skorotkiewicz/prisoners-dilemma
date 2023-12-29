const Button = ({ disabled, onClick, children, ...rest }) => {
  return (
    <button disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
