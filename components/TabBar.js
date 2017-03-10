'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _TabButton = require('./TabButton');

var _TabButton2 = _interopRequireDefault(_TabButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabClassPrefix = "uk-tab";

var TabBar = function (_Component) {
    _inherits(TabBar, _Component);

    function TabBar() {
        _classCallCheck(this, TabBar);

        return _possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).apply(this, arguments));
    }

    _createClass(TabBar, [{
        key: 'getClassName',
        value: function getClassName(props) {
            var newProps = "";
            newProps += props.className + ' ';
            newProps += props.hasOwnProperty('center') && props.center !== false ? "uk-flex-center " : "";
            return newProps;
        }
    }, {
        key: 'onItemClick',
        value: function onItemClick() {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'ul',
                { className: this.getClassName(this.props) + TabClassPrefix },
                _react2.default.Children.map(this.props.children, function (child, i) {
                    return _react2.default.createElement(
                        _TabButton2.default,
                        { active: _this2.props.activeItem === i ? true : false, onItemClick: _this2.onItemClick.bind(_this2) },
                        child
                    );
                })
            );
        }
    }]);

    return TabBar;
}(_Component3.default);

exports.default = TabBar;