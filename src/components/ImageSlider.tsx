import { useState } from 'react';
import { Flex, Image, View } from '@adobe/react-spectrum';
import * as constants from '../constants';
import Loading from './Loading';

const { sizes, position } = constants;

interface SlidesProps {
  items: string[]
  loading: boolean
}

const ImageSlider = ({ items, loading }: SlidesProps) => {
  const [index, setIndex] = useState(0);

  return (
    <View>
    {loading ? <Loading /> : <>
      <Flex direction={position.COLUMN} gap={sizes.SIZE_100} width={sizes.SIZE_3000} alignItems={position.CENTER}>
        <Image
          src={items[index]}
          alt="img"
          height="size-2400"
          width="size-2400"
          objectFit="cover"
          />
        <Flex direction={position.ROW} gap={sizes.SIZE_100} wrap>
          {items.map((item, idx) => 
            <div key={idx} onClick={() => setIndex(idx)}>
            <Image src={items[idx]} width={sizes.SIZE_400} height={sizes.SIZE_400} flexGrow={1} objectFit="cover" alt="img" />
            </div>
          )}
        </Flex>
      </Flex>
    </>}
    </View>
  );
};

export default ImageSlider;