import './mocks/i18next.vitest.mock';
// eslint-disable-next-line
// @ts-ignore
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });
