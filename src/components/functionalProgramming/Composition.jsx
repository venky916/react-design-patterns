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

export const DangerButton = props => {
    return <Button color={ 'red' } {...props} />
}

export const SucessButton = props => {
    return <Button size={'large'} color={'green'} {...props} />
}