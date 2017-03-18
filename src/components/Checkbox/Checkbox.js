import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';
import { MDCCheckboxFoundation } from '@material/checkbox/dist/mdc.checkbox';
import { getCorrectEventName } from '@material/animation/dist/mdc.animation';
import omit from 'lodash.omit';

export default class Checkbox extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    dark: PropTypes.bool,
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func,
  };

  constructor({ checked, indeterminate }) {
    super();

    this.state = {
      classNames: [],
      checked,
      indeterminate,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.checkboxFoundation.init();
  }

  componentWillReceiveProps({ checked, indeterminate }) {
    if (checked !== this.props.checked) {
      this.setState({
        checked,
        indeterminate: false,
      });
    }
    if (indeterminate !== this.props.indeterminate) {
      this.setState({
        indeterminate,
      });
    }
  }

  componentDidUpdate() {
    this.input.indeterminate = this.state.indeterminate;
  }

  componentWillUnmount() {
    this.checkboxFoundation.destroy();
  }

  checkboxFoundation = new MDCCheckboxFoundation({
    addClass: (className) => {
      this.setState({
        classNames: this.state.classNames.concat([className]),
      });
    },
    removeClass: (className) => {
      this.setState({
        classNames: this.state.classNames.filter(c => c !== className),
      });
    },
    registerAnimationEndHandler: (handler) => {
      this.element.addEventListener(getCorrectEventName(window, 'animationend'), handler);
    },
    deregisterAnimationEndHandler: (handler) => {
      this.element.removeEventListener(getCorrectEventName(window, 'animationend'), handler);
    },
    registerChangeHandler: (handler) => {
      this.input.addEventListener('change', handler);
    },
    deregisterChangeHandler: (handler) => {
      this.input.removeEventListener('change', handler);
    },
    getNativeControl: () => this.input,
    forceLayout: () => {},
    isAttachedToDOM: () => Boolean(this.element),
  });

  handleChange(event) {
    this.setState({
      checked: event.target.checked,
      indeterminate: false,
    });

    this.props.onChange(event);
  }

  render() {
    const className = classNames('mdc-checkbox', {
      'mdc-checkbox--theme-dark': this.props.dark,
    }, this.props.className, this.state.classNames);

    const props = omit(this.props, [
      'className',
      'dark',
      'checked',
      'indeterminate',
      'onChange',
    ]);

    return (
      <div
        className={className}
        ref={(element) => { this.element = element; }}
      >
        <input
          type="checkbox"
          className="mdc-checkbox__native-control"
          ref={(input) => { this.input = input; }}
          checked={this.state.checked}
          onChange={this.handleChange}
          {...props}
        />
        <div className="mdc-checkbox__background">
          <svg
            version="1.1"
            className="mdc-checkbox__checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
          >
            <path
              className="mdc-checkbox__checkmark__path"
              fill="none"
              stroke="white"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
          <div className="mdc-checkbox__mixedmark" />
        </div>
      </div>
    );
  }
}

