import { useRouteError } from "react-router-dom"

function Error() {
    const err = useRouteError()
    const { status, statusText } = err;
    return (
        <>
            <h1>Opps!!!</h1>
            <h1>Someting Went Wrong</h1>
            <h1>{`${status} : ${statusText}`}</h1>
        </>
    )
}

export default Error