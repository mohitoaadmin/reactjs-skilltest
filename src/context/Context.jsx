import { createContext, useState } from "react";

export const UserContext = createContext(null);


const AccountProvider = ({ children }) => {
    const [users, setUsers] = useState();

    return (
        <UserContext.Provider value={{
            users,
            setUsers
        }}>
            {children}
        </UserContext.Provider>
    )
}


export default AccountProvider;