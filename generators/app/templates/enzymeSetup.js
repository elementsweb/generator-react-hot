/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// configure enzyme with adapter for react version
configure({ adapter: new Adapter() });
