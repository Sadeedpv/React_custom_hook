import React from 'react'
import axios from 'axios'

function useLoremipsum(length) {
    const [loremipsum, setLoremipsum] = React.useState('');
    React.useEffect(() => {

        const fetchLoremipsum = async () => {
            axios.get(`https://baconipsum.com/api/?type=meat-and-filler&paras=${length}`, {
              "Content-Type": 'application/json',
            })
            .then(res => {
                setLoremipsum(res.data);
            })
        }
        fetchLoremipsum();
    
    },[length])
    

    return loremipsum;
}

export default useLoremipsum