import test from 'tape';

import organizationActions from './actions/organizationActions';
import organizationComponentSpecs from './components/organizations';
import organizationReducerSpecs from './reducers';

organizationActions();
organizationComponentSpecs();
organizationReducerSpecs();