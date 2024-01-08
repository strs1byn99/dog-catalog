import { Breed } from '../models/Breed';
import { Image, View } from '@adobe/react-spectrum';

interface BreedImageProps {
    item: Breed
    width: string
    height: string
}

const BreedImage = ({ item, width, height } : BreedImageProps) => {
    return <View >
        <Image
            src={item.image.url}
            width={width}
            height={height}
            objectFit="cover"
            alt={`${item.name} Image`}
        />
    </View>
}

export default BreedImage;