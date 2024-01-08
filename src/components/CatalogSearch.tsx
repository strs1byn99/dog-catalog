import { Flex, SearchField, View } from '@adobe/react-spectrum';
import { position, labels } from '../constants';
import { SIZE_100 } from '../constants/size';

interface CatalogSearchProps {
    searchTerm: string
    setSearchTerm: ((value: string) => void)
}

const CatalogSearch = ({searchTerm, setSearchTerm}: CatalogSearchProps) => {
    return <View padding={SIZE_100}>
        <Flex justifyContent={position.CENTER}>
            <SearchField label={labels.SEARCH_LABEL} value={searchTerm} onChange={setSearchTerm} />
        </Flex>
    </View>
}

export default CatalogSearch;