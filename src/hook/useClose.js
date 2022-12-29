import {useState} from 'react';

const useClose = ()=> {

    const [isClose, setIsClose] = useState(false)

    function open() {

        setIsClose(true)
    }

    function close() {
        setIsClose(false)
    }

    return {
        isClose,
        open,
        close
    }
}