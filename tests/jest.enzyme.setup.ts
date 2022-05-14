import jestFetchMock from 'jest-fetch-mock';
import * as Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

jestFetchMock.enableMocks();
configure({ adapter: new Adapter() });
