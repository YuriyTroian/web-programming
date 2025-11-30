import React, {useState} from 'react';
import {getStoneList} from "../../fetching";

const ElementsGet = () => {
    const [elem, setElem] = useState([])

    const fetch = async () => {
        const data = await getStoneList()
        setElem(data)
    }

    return elem
};

export default ElementsGet;