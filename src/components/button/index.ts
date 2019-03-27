import injectSheet from 'react-jss';
import { ButtonBase } from './button.base';
import { buttonStyle } from './button.style';

export const Button = injectSheet(buttonStyle, { link: true })(ButtonBase);