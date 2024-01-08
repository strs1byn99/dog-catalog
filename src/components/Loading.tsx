import { Flex, ProgressCircle} from '@adobe/react-spectrum';
import * as labels from '../constants/label';
import * as position from '../constants/position';

const Loading = () => {
    return <Flex justifyContent={position.CENTER} >
        <ProgressCircle aria-label={labels.LOADING_LABEL} value={50} isIndeterminate />
    </Flex>;
}

export default Loading;