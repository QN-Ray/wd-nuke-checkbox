'use strict';

import { createElement, Component, PropTypes } from 'rax';
import { Icon, View, Text, Touchable } from 'nuke';
const css = {
    container: {
        width: '40rem',
        height: '40rem',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3089dc',
        borderRadius: '20rem'
    },
    small: {
        width: '40rem',
        height: '40rem',
        borderRadius: '20rem'
    },
    medium: {
        width: '48rem',
        height: '48rem',
        borderRadius: '24rem',
    },
    large: {
        width: '56rem',
        height: '56rem',
        borderRadius: '28rem'
    },
    empty: {
        backgroundColor: '#ffffff',
        borderWidth: '1rem',
        borderStyle: 'solid',
        borderColor: '#cccccc'
    },
    text: {
        fontSize: '28rem',
        color: '#ffffff',
        fontWeight: 'bold'
    },
    icon: {
        fontSize: '28rem',
        color: '#ffffff',
        marginTop: '5rem'
    },

    smallIcon: {
        fontSize: '28rem'
    },

    mediumIcon: {
        fontSize: '32rem'
    },

    largeIcon: {
        fontSize: '36rem'
    },

    disabled: {
        borderWidth: '2rem',
        borderStyle: 'solid',
        borderColor: '#bbbbbb',
        backgroundColor: '#dddddd'
    },
    disabledIcon: {
        color: '#bbbbbb'
    }
}

export default class CheckBox extends Component {

    constructor(props) {
        super(props);
    }

    value = ''


    getContent(checked, disabled) {

        

    }

    render() {
        let {onPress, style, disabled, checked, size, activeStyle, rect} = this.props;

        let disStyle = disabled?css.disabled:null;

        let disIconStyle = disabled?css.disabledIcon:null;

        let basicStyle = Object.assign({}, css.container, disStyle,  css[size], style);

        let iconStyle = Object.assign({}, css.icon, css[size+'Icon'], disIconStyle);

        if(rect) {
            basicStyle['borderRadius'] = 0;
            iconStyle['color'] = basicStyle['backgroundColor'];
            basicStyle = Object.assign({}, basicStyle, css.empty);
        }
        
        if(checked === 'indeterminate'){
            return <Touchable onPress={onPress} style={[basicStyle]}><Icon style={[iconStyle, {fontWeight: 'bold'}]} name="minus" /></Touchable>;
        }

        if(checked === true) {
            return <Touchable onPress={onPress} style={[basicStyle, activeStyle]}><Icon style={[iconStyle]} name="select" /></Touchable>;
        }

        if(checked === false) {
            return <Touchable onPress={onPress} style={[basicStyle, css.empty]}></Touchable>;
        }
    }
}


CheckBox.propTypes = {
    checked: PropTypes.oneOf([true, false, 'indeterminate']),
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
}

CheckBox.defaultProps = {
    checked: false,
    disabled: false,
    size: 'small',
    onPress: ()=> {}
}