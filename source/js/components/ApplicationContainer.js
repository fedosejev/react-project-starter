import { connect } from 'react-redux';
import Application from './Application';
import {
  doSomething,
} from '../actions/application';

const mapStateToProps = ({
  application,
}) => ({
  application,
});

const mapDispatchToProps = dispatch => ({
  doSomething: () => (
    dispatch(doSomething())
  ),
});

const ApplicationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);

export default ApplicationContainer;
