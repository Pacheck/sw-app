import { useState, useEffect} from 'react';

import { getAllPlanets } from '../services/api.js';

export default function usePlanets(){
    const [planets, setPlanets] = useState({});
    const [loading, setLoading] = useState(true);
    const [actualPage, setActualPage] = useState(1);

    useEffect(() => {
        let mounted = true;

        const fetchData = async () => {
            setLoading(true);
            const response = await getAllPlanets(actualPage);
        
            console.log(response);

            if(mounted){
                setPlanets(response.data);

                setLoading(false);
            }
        };

        fetchData();
        
        console.log(planets);

        return () => {
            mounted = false;
        }
    }, [actualPage])

    return {
        planets,
        loading,
        actualPage,
        setActualPage
    }
}
