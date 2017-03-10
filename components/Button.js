'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonClassPrefix = "uk-button-";

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'getClassName',
        value: function getClassName(props) {
            var newProps = "";
            newProps += props.hasOwnProperty('primary') && props.primary !== false ? ButtonClassPrefix + "primary" : "";
            newProps += props.hasOwnProperty('default') && props.primary !== false ? ButtonClassPrefix + "default" : "";
            newProps += props.hasOwnProperty('secondary') && props.secondary !== false ? ButtonClassPrefix + "secondary" : "";
            newProps += props.hasOwnProperty('danger') && props.danger !== false ? ButtonClassPrefix + "danger" : "";
            newProps += props.hasOwnProperty('text') && props.text !== false ? ButtonClassPrefix + "text" : "";
            newProps += props.hasOwnProperty('link') && props.link !== false ? ButtonClassPrefix + "link" : "";
            return newProps + _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'getClassName', this).call(this, props);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'button',
                { onClick: this.props.onClick, className: "uk-button " + this.getClassName(this.props) },
                this.props.children
            );
        }
    }]);

    return Button;
}(_Component3.default);

exports.default = Button;