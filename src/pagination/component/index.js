'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import IconFont from 'src/components/IconFont';


var Option = _antd.Select.Option;
/**
 * 组件： 分页组件
 * 参数： 
 * className (非必传)
 * pageSizeOptions 默认为['10', '20', '30'],
 * infoDIY 默认为 共${maxPage}页 / 共${total}条记录, 可自定义修改
 * current (必传，当前page)
 * total, (必传,总数)
 * pageSize, （必传,每页多少条）
 * onChange (必传) 回调函数，接收page 和pageSize, type('pre'--上一页点击， 'next'--点击下一页， undefined为其他改变时)
 */

var PaginationComp = function (_Component) {
  _inherits(PaginationComp, _Component);

  /**
   * infoDIY = "共<%maxPage%> / 共<%total%>条记录"
   */
  function PaginationComp(props) {
    _classCallCheck(this, PaginationComp);

    var _this = _possibleConstructorReturn(this, (PaginationComp.__proto__ || Object.getPrototypeOf(PaginationComp)).call(this, props));

    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(PaginationComp, [{
    key: 'onPressEnter',
    value: function onPressEnter(e, maxPage) {
      var _props = this.props,
          onChange = _props.onChange,
          pageSize = _props.pageSize;

      var value = +e.target.value;
      if (value && value > 0) {
        if (value <= maxPage) {
          onChange && onChange(value, pageSize);
        } else {
          onChange && onChange(maxPage, pageSize);
        }
      }
      this.setState({
        value: ''
      });
    }
  }, {
    key: 'inputChange',
    value: function inputChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: 'getListInfo',
    value: function getListInfo(total, maxPage) {
      var infoDIY = this.props.infoDIY;

      var info = '\u5171' + maxPage + '\u9875 / \u5171' + total + '\u6761\u8BB0\u5F55';
      if (infoDIY) {
        info = infoDIY.replace('<%maxPage%>', maxPage).replace('<%total%>', total);
      }
      return info;
    }
  }, {
    key: 'handlePageChange',
    value: function handlePageChange(type) {
      var _props2 = this.props,
          current = _props2.current,
          onChange = _props2.onChange,
          pageSize = _props2.pageSize;

      current = type === 'prev' ? current - 1 : current + 1;
      onChange && onChange(current, pageSize, type);
    }
    /**
     * 下拉框修改
     */

  }, {
    key: 'pageSizeOptionsHandel',
    value: function pageSizeOptionsHandel(pageSizeOptions) {
      var optionsArray = [];
      pageSizeOptions.forEach(function (item) {
        optionsArray.push({
          key: item,
          label: item + '条每/页'
        });
      });
      return optionsArray;
    }
    /**
     * 下拉框选中
     */

  }, {
    key: 'pageSizeChange',
    value: function pageSizeChange(pageSize) {
      var _props3 = this.props,
          current = _props3.current,
          onChange = _props3.onChange,
          total = _props3.total;
      // 判断current的数值 --- 如果当前current和pageSize的数据存在,current 保留

      if (total - pageSize * (current - 1) < 0) {
        current = Math.ceil(total / pageSize);
      }
      onChange && onChange(current, pageSize);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props4 = this.props,
          _props4$current = _props4.current,
          current = _props4$current === undefined ? 1 : _props4$current,
          _props4$total = _props4.total,
          total = _props4$total === undefined ? 0 : _props4$total,
          pageSize = _props4.pageSize,
          _props4$pageSizeOptio = _props4.pageSizeOptions,
          pageSizeOptions = _props4$pageSizeOptio === undefined ? ['10', '20', '30'] : _props4$pageSizeOptio,
          _props4$className = _props4.className,
          className = _props4$className === undefined ? '' : _props4$className;

      var maxPage = Math.ceil(total / pageSize) || 1;
      var disabledPrev = current <= 1;
      var disabledNext = current >= maxPage;
      current = disabledNext ? maxPage : current;
      var selectOptionsArray = this.pageSizeOptionsHandel(pageSizeOptions);
      return _react2.default.createElement(
        'div',
        { className: 'pagination-box-tlzj ' + className },
        _react2.default.createElement(
          'span',
          { className: 'list-info' },
          this.getListInfo(total, maxPage)
        ),
        _react2.default.createElement(
          'span',
          { className: 'pagination-btn' },
          _react2.default.createElement(
            _antd.Button,
            {
              type: 'normal',
              className: 'page-btn',
              disabled: disabledPrev,
              onClick: function onClick() {
                return _this2.handlePageChange('prev');
              }
            },
            '\u5DE6\u7BAD\u5934'
          ),
          _react2.default.createElement(
            'span',
            null,
            '\u7B2C',
            current,
            '\u9875'
          ),
          _react2.default.createElement(
            _antd.Button,
            {
              type: 'normal',
              className: 'page-btn',
              disabled: disabledNext,
              onClick: function onClick() {
                return _this2.handlePageChange('next');
              }
            },
            '\u53F3\u7BAD\u5934'
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'pagination-select' },
          _react2.default.createElement(
            _antd.Select,
            { value: pageSize + '' || pageSizeOptions[0].key, onChange: this.pageSizeChange },
            selectOptionsArray.map(function (item) {
              return _react2.default.createElement(
                Option,
                { key: item.key, title: item.label },
                item.label
              );
            })
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'pagination-go' },
          '\u8DF3\u8F6C',
          _react2.default.createElement(_antd.Input, {
            className: 'input-box',
            value: this.state.value,
            onPressEnter: function onPressEnter(value) {
              return _this2.onPressEnter(value, maxPage);
            },
            onChange: this.inputChange
          }),
          '\u9875'
        )
      );
    }
  }]);

  return PaginationComp;
}(_react.Component);

exports.default = PaginationComp;