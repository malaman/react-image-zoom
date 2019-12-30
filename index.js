'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _jsImageZoom = require('js-image-zoom');

var _jsImageZoom2 = _interopRequireDefault(_jsImageZoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactImageZoom = function (_React$Component) {
  _inherits(ReactImageZoom, _React$Component);

  function ReactImageZoom(props) {
    _classCallCheck(this, ReactImageZoom);

    var _this = _possibleConstructorReturn(this, (ReactImageZoom.__proto__ || Object.getPrototypeOf(ReactImageZoom)).call(this, props));

    _this.container = undefined;
    _this.getRef = _this.getRef.bind(_this);
    return _this;
  }

  _createClass(ReactImageZoom, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.rerenderImageZoom(this.props);
    }
  }, {
    key: 'UNSAFE_componentWillUnmount',
    value: function UNSAFE_componentWillUnmount() {
      this.imageZoom.kill();
      this.imageZoom = void 0;
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props !== nextProps) {
        this.kill();
        this.rerenderImageZoom(nextProps);
      }
    }
  }, {
    key: 'rerenderImageZoom',
    value: function rerenderImageZoom(props) {
      this.imageZoom = new _jsImageZoom2.default(this.container, JSON.parse(JSON.stringify(props)));
    }
  }, {
    key: 'setup',
    value: function setup() {
      this.imageZoom.setup();
    }
  }, {
    key: 'kill',
    value: function kill() {
      this.imageZoom.kill();
    }
  }, {
    key: 'getRef',
    value: function getRef(ref) {
      this.container = ref;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { ref: this.getRef });
    }
  }]);

  return ReactImageZoom;
}(_react2.default.Component);

ReactImageZoom.propTypes = {
  width: _propTypes2.default.number,
  img: _propTypes2.default.string,
  height: _propTypes2.default.number,
  zoomWidth: _propTypes2.default.number,
  scale: _propTypes2.default.number,
  offset: _propTypes2.default.object,
  zoomStyle: _propTypes2.default.string,
  zoomLensStyle: _propTypes2.default.string,
  zoomPosition: _propTypes2.default.oneOf(['top', 'left', 'bottom', 'right', 'original'])
};

exports.default = ReactImageZoom;
module.exports = exports['default'];
