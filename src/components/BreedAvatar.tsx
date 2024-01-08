import { Breed } from '../models/Breed';
import { Flex, View } from '@adobe/react-spectrum';
import BreedDialog from './BreedDialog';
import { position, sizes } from '../constants';
import BreedImage from './BreedImage';

interface BreedProps {
    breed: Breed
}

const BreedAvatar = ({ breed } : BreedProps) => {

    return <Flex direction={position.COLUMN} 
                width={sizes.SIZE_2000}
                height={sizes.SIZE_3000}
                justifyContent={position.CENTER}
                alignContent={position.CENTER}>
                <BreedImage item={breed} height={sizes.SIZE_2000} width={sizes.SIZE_2000} />
                <View height={sizes.SIZE_500} justifySelf={position.CENTER} alignSelf={position.CENTER}>
                    <b>{breed.name}</b>
                </View>
                <BreedDialog breed={breed} />
            </Flex>
}

export default BreedAvatar;