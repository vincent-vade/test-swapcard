import { connect } from 'react-redux'
import ShowArtist from '../../components/ShowArtist'
import getShowArtist from '../../redux/actions/getShowArtist';

const mapStateToProps = (state) => {
  return {
    artist: state.detailArtist.artist
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getShowArtist: artistId => dispatch(getShowArtist(artistId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowArtist);
