import { configure } from 'enzyme';
import * as Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import jestFetchMock from 'jest-fetch-mock';

jestFetchMock.enableMocks();
configure({ adapter: new Adapter() });
