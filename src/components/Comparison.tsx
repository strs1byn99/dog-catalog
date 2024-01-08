import { useEffect, useState } from 'react';
import { Breed } from '../models/Breed';
import { Divider, Flex, Heading, View } from '@adobe/react-spectrum';
import BreedFullDetails from './BreedFullDetails';
import Loading from './Loading';
import CatalogLink from './CatalogLink';
import { route, sizes, labels, position } from '../constants';
import { API_KEY, GET_ALL_BREEDS_URL } from '../config/url';


const Comparison = () => {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(GET_ALL_BREEDS_URL, {
                    headers: {
                        "x-api-key": API_KEY
                    }
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch data. Status: ${response.status}`);
                }

                const jsonData = await response.json();
                setData(jsonData);
                setColumns(jsonData.slice(0, 5));
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
  
    return <div className='compare-app'>
        <Flex direction={position.COLUMN} alignItems={position.CENTER}>
            <Heading alignSelf={position.CENTER} level={1}>{labels.COMPARE_DOG_BREEDS}</Heading>
            <Divider />
            <CatalogLink route={route.ROOT} label={labels.BACK_TO_CATALOG} />
            <Heading alignSelf={position.CENTER} level={3}>{labels.WHICH_IS_YOUR_FAVORITE}</Heading>
            {loading ? <Loading /> : <View  width={sizes.SIZE_2000} paddingBottom={sizes.SIZE_1000}>
                <Flex direction={position.ROW} justifyContent={position.CENTER} gap={sizes.SIZE_200} >
                    {columns.map((breed: Breed) =>
                        <BreedFullDetails key={breed.id} data={data} breed={breed} />
                    )}
                </Flex>
            </View>}
        </Flex>
    </div>
}

export default Comparison;