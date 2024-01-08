import { useEffect, useState } from 'react';
import { Breed } from '../models/Breed';
import BreedAvatar from './BreedAvatar';
import { Divider, Flex, Heading, View } from '@adobe/react-spectrum';
import Loading from './Loading';
import CatalogSearch from './CatalogSearch';
import CatalogLink from './CatalogLink';
import * as constants from '../constants';
import { API_KEY, GET_ALL_BREEDS_URL } from '../config/url';

const { sizes, labels, position, route } = constants;


const Catalog = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [hasSearchResult, setHasSearchResult] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                // option: could use useAsyncList from Adobe's react-stately
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
                setFilteredData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        let filtered = data.filter((each: Breed) => each.name?.toLowerCase().match(searchTerm.trim().toLowerCase()));
        setFilteredData(filtered.length > 0? filtered : data);
        setHasSearchResult(filtered.length > 0? true : false);
    }, [searchTerm])
        

    return <Flex direction={position.COLUMN} alignItems={position.CENTER}>
        <Heading alignSelf={position.CENTER} level={1}>{labels.DOG_CATALOG}</Heading>
        <Divider />
        <CatalogLink label={labels.GO_TO_COMPARE_BREEDS} route={route.COMPARE} />
        {loading ? <Loading /> : <Flex direction={position.COLUMN}>
            <CatalogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <View paddingBottom={sizes.SIZE_1000} paddingStart={sizes.SIZE_2000} paddingEnd={sizes.SIZE_2000} >
                {!hasSearchResult && searchTerm.trim().length > 0 && <Heading>{labels.NO_MATCHING_RESULT}</Heading>}
                <Flex direction={position.ROW} gap={sizes.SIZE_200} wrap>
                    {filteredData.map((breed: Breed) =>
                        <BreedAvatar key={breed.id} breed={breed} />
                    )}
                </Flex>
            </View>
        </Flex>}
    </Flex>;
}

export default Catalog;