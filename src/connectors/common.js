import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        common: state.common.meta
    };
};

export const commonConnector = connect(mapStateToProps);