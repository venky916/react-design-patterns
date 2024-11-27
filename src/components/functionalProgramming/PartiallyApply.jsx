export const PartiallyApply = (Component, partialProps) => {
    return props => {
        return <Component {...partialProps} {...props} />
    }
}

export const Button = ({ size, text, color, ...props }) => {
  return (
    <button
      style={{
        padding: size === 'large' ? '32px' : '16px',
        fontSize: size === 'large' ? '32px' : '16px',
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const DangerButton = PartiallyApply(Button, { color: "red" });
export const SucessButton = PartiallyApply(Button, { size: "large", color: "green" });