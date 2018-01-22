import { connect } from 'react-redux'
import getSearchResult from '../../redux/actions/getSearchResult';
import SearchBar from '../../components/SearchBar'

const mapStateToProps = (state) => {
  return {
    result: state.search.result
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getResult: searchTerm => dispatch(getSearchResult(searchTerm))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
