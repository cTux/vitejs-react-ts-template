import fetch from 'node-fetch';
import './mocks/i18next.vitest.mock';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

// eslint-disable-next-line
// @ts-ignore
global.fetch = fetch;
configure({ adapter: new Adapter() });
