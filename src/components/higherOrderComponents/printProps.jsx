export const printProps = Component => {
    return (props) => {
        console.log(props);
        <Component {...props} />
    }
}