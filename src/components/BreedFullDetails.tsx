import { useState } from 'react';
import { Breed } from '../models/Breed';
import { ComboBox, Flex, Header, Item, View } from '@adobe/react-spectrum';
import BreedTextDetails from './BreedTextDetails';
import BreedImage from './BreedImage';
import { position, sizes, labels } from '../constants';
import BreedDialog from './BreedDialog';

interface BreedProps {
    breed: Breed
    data: Breed[]
}

const BreedFullDetails = ({ breed, data } : BreedProps) => {
    const [id, setId] = useState(breed.id);
    const [item, setItem] = useState(breed);

    const onSelectionChange = (updatedId: any) => {
        setId(updatedId);
        let index = data.map(x => x.id).indexOf(updatedId);
        // console.log(data[index])
        setItem(data[index]);
    }

    return <View>
        <Flex direction={position.COLUMN} gap={sizes.SIZE_150} alignItems={position.CENTER}>
            <ComboBox 
                label={labels.CHOOSE_A_BREED}
                defaultItems={data}
                defaultInputValue={breed?.name}
                selectedKey={id}
                onSelectionChange={onSelectionChange}
                >
                {option => <Item>{option?.name}</Item>}
            </ComboBox>
            {item && <BreedImage item={item} width={sizes.SIZE_2000} height={sizes.SIZE_2000} />}
            {item && <Header alignSelf={position.CENTER}><b>{item?.name}</b></Header>}
            {item && <BreedDialog breed={item} />}
            {item && <View width={sizes.SIZE_2000}><BreedTextDetails item={item} /></View>}
        </Flex>
    </View>
}

export default BreedFullDetails;
