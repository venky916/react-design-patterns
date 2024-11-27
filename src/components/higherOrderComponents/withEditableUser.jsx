import React, { useState, useEffect } from "react";
import axios from "axios";


export const withEditableUser = (Component, userId) => {
    
    return props => {
        const [originalData, setOriginalData] = useState(null);
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`);
                setOriginalData(response.data);
                setUser(response.data);
            } )()   
        }, [])

        const onChangeUser = changes => {
            setUser({...user,...changes})
        }

        const onSaveUser = async() => {
            const response = await axios.post(`/users/${userId}`,{user});
            setOriginalData(response.data);
            setUser(response.data);
        }

        const onResetUser = () => {
            setUser(originalData);
        }
        
        return <Component { ...props } user={ user } onChangeUser={ onChangeUser} onSaveUser={ onSaveUser}  onResetUser={onResetUser} />

    }
    
}
