import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Fitmeal`;
    }, [title])
};
export default useTitle;