const isObject = x => typeof x === 'object' && typeof x !== null;

export const RecursiveComponent = ({ data }) => {
    
    if (!isObject(data)) {
        return (
            <li className="p-1 m-1">
                {data}
            </li>
        )
    }
    const pairs = Object.entries(data);

    return pairs.map(([key, value]) => (
        <li key={ key } className="p-1 m-1">
            {key}
        <ul className="p-2 m-2">
          <RecursiveComponent data={value} />
        </ul>
      </li>
    ));
    
}



