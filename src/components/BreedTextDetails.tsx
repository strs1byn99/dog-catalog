import { sizes } from '../constants';
import { Breed } from '../models/Breed';
import { Header, View } from '@adobe/react-spectrum';


interface BreedTextDetailsProps {
    item: Breed
}

const BreedTextDetails = ({ item } : BreedTextDetailsProps) => {
    return <View >
            {item?.life_span && <Header><b>Life Span:</b> {item.life_span}</Header>}
            {item?.origin && <Header><b>Origin:</b> {item.origin}</Header>}
            {item?.temperament && <Header><b>Temperament:</b> {item.temperament}</Header>}
            {item?.bred_for && <Header><b>Bred For:</b> {item.bred_for}</Header>}
            {item?.breed_group && <Header><b>Breed Group:</b> {item.breed_group}</Header>}
            {item?.weight && <Header><b>Weight:</b> {item.weight?.imperial} lbs / {item.weight?.metric} kg </Header>}
            {item?.height && <Header><b>Height:</b> {item.height?.imperial} lbs / {item.height?.metric} kg </Header>}
        </View>
}

export default BreedTextDetails;