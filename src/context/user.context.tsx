import { ReactNode, createContext, useState } from "react";

interface IUserContext {
    userId: number,
    setUserId: React.Dispatch<React.SetStateAction<number>>;
}

interface IUserContProv {
    children: ReactNode;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserContextProvider: React.FC<IUserContProv> = ({ children }) => {
    const [userId, setUserId] = useState(1);
    return (
        <>
            <UserContext.Provider value={{userId, setUserId}}>
                {children}
            </UserContext.Provider>
        </>
    )
}