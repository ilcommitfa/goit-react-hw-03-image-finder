import axios from "axios";

const fetchImages = async(query, page) => {
    
    const response = await axios.get('https://pixabay.com/api',
        {params: {
            key: '34227355-634b3cfb76d00133b4cb8e037',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            page: page,
            per_page: 12
        }});
        return response.data.hits;
    };

    export default fetchImages;