'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
    _inherits(Input, _Component);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    _createClass(Input, [{
        key: 'getClassName',
        value: function getClassName(props) {
            var newProps = "";
            newProps += props.className + ' ';
            newProps += props.hasOwnProperty('empty') && props.empty !== false ? "input-empty " : "";
            newProps += props.hasOwnProperty('selected') && props.empty !== false ? "input-selected " : "";
            newProps += props.hasOwnProperty('typing') && props.empty !== false ? "input-typing " : "";
            return newProps;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'label',
                { className: this.props.className },
                _react2.default.createElement('input', {
                    type: this.props.type ? this.props.type : "",
                    className: "uk-input " + this.getClassName(this.props),
                    placeholder: this.props.placeholder ? this.props.placeholder : "",
                    defaultValue: this.props.value ? this.props.value : "",
                    disabled: this.props.disabled ? this.props.disabled : null,
                    onChange: function onChange(e) {
                        return _this2.props.onChange(e);
                    } }),
                this.props.children
            );
        }
    }]);

    return Input;
}(_Component3.default);

exports.default = Input;