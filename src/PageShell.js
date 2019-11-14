import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageShell = Page => {

    return props =>
        <div className="page">

            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={100}
                transitionEnterTimeout={100}
                transitionLeaveTimeout={200}
                transitionName={'slideIn'}
            >
                <Page {...props} />
            </ReactCSSTransitionGroup>
        </div>;
};

export default PageShell;
