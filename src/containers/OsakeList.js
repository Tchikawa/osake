import List from '../components/List';
import { connect } from 'react-redux';
import { getOsakeList } from '../actions';

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    osakeList: state.osakeList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getOsakeList: () => {
    dispatch(getOsakeList());
  },
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(List);
