export const NumberedList = ({ items, resourceName, itemComponent: ItemComponent }) => {
    return (
        <>
            { items.map((item, i) => (
                <>
                    <h1>{ i+1}</h1>
                    <ItemComponent key={ i }  { ...{ [resourceName]: item } } />
                </>
            )) }
        </>
    );
};