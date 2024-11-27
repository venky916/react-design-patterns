import { useState, useEffect } from 'react'

export const useDataSource = getResourcefunc => {

    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            const result = await getResourcefunc();
            setResource(result);
        })()
    }, [getResourcefunc])

    return resource;
}