import { UserDetailsID } from "../../components/hooksComp/UserDetailsID"

export const UserIdPage = () => {
    return (
        <>
            <UserDetailsID userId={'123'} />
            <UserDetailsID userId={'234'} />
            <UserDetailsID userId={'345'} />
        </>
    )
}