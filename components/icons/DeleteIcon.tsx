import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';

const DeleteIcon = () => {
    return (
        <View>
            <Svg viewBox='0 0 24 24' width='18' height='18'>
                <Path fill='white' d='M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z' />
            </Svg>
        </View>
    );
};

export default DeleteIcon;
