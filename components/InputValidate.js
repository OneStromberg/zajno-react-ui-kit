'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputValidate = function (_Component) {
    _inherits(InputValidate, _Component);

    function InputValidate(props) {
        _classCallCheck(this, InputValidate);

        var _this = _possibleConstructorReturn(this, (InputValidate.__proto__ || Object.getPrototypeOf(InputValidate)).call(this, props));

        _this.state = {
            validType: props.state
        };
        return _this;
    }

    _createClass(InputValidate, [{
        key: 'getClassName',
        value: function getClassName(props) {
            var newProps = "";
            //newProps += !props.className ? props.className + ' ' : '' ;
            newProps += props.hasOwnProperty('success') && props.success !== false ? "uk-form-success " : "";
            newProps += props.hasOwnProperty('error') && props.error !== false ? "uk-form-danger " : "";
            return newProps;
        }
    }, {
        key: 'onValidate',
        value: function onValidate(e) {
            var validType = null;
            var valid = null;
            if (typeof this.props.validate === 'function') {
                validType = this.props.validate(e.target.value, this.props.state);
            }
            this.setState({
                validType: validType
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'input-validator' },
                _react2.default.createElement('input', {
                    type: this.props.type ? this.props.type : "",
                    className: "uk-input " + this.getClassName(this.props),
                    placeholder: this.props.placeholder ? this.props.placeholder : "",
                    disabled: this.props.disabled ? this.props.disabled : null,
                    onChange: function onChange(e) {
                        return _this2.onValidate(e);
                    }
                }),
                _react2.default.createElement(
                    'div',
                    null,
                    this.state.validType
                )
            );
        }
    }]);

    return InputValidate;
}(_Component3.default);

exports.default = InputValidate;