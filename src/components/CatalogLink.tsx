import { View } from '@adobe/react-spectrum';
import { Link } from 'react-router-dom';
import { SIZE_100 } from '../constants/size';

interface CatalogLink {
    label: string
    route: string
}

const CatalogLink = ({ label, route } : CatalogLink) => {
    return <View padding={SIZE_100}><Link to={route}>{label}</Link></View>
}

export default CatalogLink;