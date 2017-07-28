'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = require('rax');

var _index = require('nuke/lib/Icon/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('nuke/lib/View/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('nuke/lib/Text/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('nuke/lib/Touchable/index.js');

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var css = {
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
        borderRadius: '24rem'
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
};

var CheckBox = function (_Component) {
    _inherits(CheckBox, _Component);

    function CheckBox(props) {
        _classCallCheck(this, CheckBox);

        var _this = _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call(this, props));

        _this.value = '';
        return _this;
    }

    _createClass(CheckBox, [{
        key: 'getContent',
        value: function getContent(checked, disabled) {}
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                onPress = _props.onPress,
                style = _props.style,
                disabled = _props.disabled,
                checked = _props.checked,
                size = _props.size,
                activeStyle = _props.activeStyle,
                rect = _props.rect;


            var disStyle = disabled ? css.disabled : null;

            var disIconStyle = disabled ? css.disabledIcon : null;

            var basicStyle = Object.assign({}, css.container, disStyle, css[size], style);

            var iconStyle = Object.assign({}, css.icon, css[size + 'Icon'], disIconStyle);

            if (rect) {
                basicStyle['borderRadius'] = 0;
                iconStyle['color'] = basicStyle['backgroundColor'];
                basicStyle = Object.assign({}, basicStyle, css.empty);
            }

            if (checked === 'indeterminate') {
                return (0, _rax.createElement)(
                    _index8.default,
                    { onPress: onPress, style: [basicStyle] },
                    (0, _rax.createElement)(_index2.default, { style: [iconStyle, { fontWeight: 'bold' }], name: 'minus' })
                );
            }

            if (checked === true) {
                return (0, _rax.createElement)(
                    _index8.default,
                    { onPress: onPress, style: [basicStyle, activeStyle] },
                    (0, _rax.createElement)(_index2.default, { style: [iconStyle], name: 'select' })
                );
            }

            if (checked === false) {
                return (0, _rax.createElement)(_index8.default, { onPress: onPress, style: [basicStyle, css.empty] });
            }
        }
    }]);

    return CheckBox;
}(_rax.Component);

exports.default = CheckBox;


CheckBox.propTypes = {
    checked: _rax.PropTypes.oneOf([true, false, 'indeterminate']),
    disabled: _rax.PropTypes.bool,
    onPress: _rax.PropTypes.func,
    size: _rax.PropTypes.oneOf(['small', 'medium', 'large'])
};

CheckBox.defaultProps = {
    checked: false,
    disabled: false,
    size: 'small',
    onPress: function onPress() {}
};
module.exports = exports['default'];