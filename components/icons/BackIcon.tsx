import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';

const BackIcon = () => {
    return (
        <View>
            <Svg viewBox='0 0 24 24' width='18' height='18'>
                <Path fill='white' d='M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z' />
            </Svg>
        </View>
    );
};

export default BackIcon;
