import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        tasks: state.tasks.data
    };
};

export const tasksConnector = connect(mapStateToProps);