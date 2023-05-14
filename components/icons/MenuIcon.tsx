import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';

const MenuIcon = () => {
    return (
        <View>
            <Svg viewBox='0 0 24 24' width='18' height='18'>
                <Path fill='white' d='M24,3c0,.55-.45,1-1,1H1c-.55,0-1-.45-1-1s.45-1,1-1H23c.55,0,1,.45,1,1ZM15,11H1c-.55,0-1,.45-1,1s.45,1,1,1H15c.55,0,1-.45,1-1s-.45-1-1-1Z' />
            </Svg>
        </View>
    );
};

export default MenuIcon;
