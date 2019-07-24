import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        categories: state.categories.data
    };
};

export const appConnector = connect(mapStateToProps);