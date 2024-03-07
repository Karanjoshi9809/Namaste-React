import { useState, useEffect } from "react"

function useIsOnline() {
    const [isOnline, setIsOnline] = useState(true)
    function handleStatusChange(status) {
        setIsOnline(status)
    }
    useEffect(() => {
        window.addEventListener('online', () => handleStatusChange(true))
        window.addEventListener('offline', () => handleStatusChange(false))
        return () => {
            window.removeEventListener('online', handleStatusChange)
            window.removeEventListener('offline', handleStatusChange)
        }
    }, [])

    return isOnline
}

export default useIsOnline