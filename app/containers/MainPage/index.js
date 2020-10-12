/**
 *
 * MainForm
 *
 */

import React, {useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {makeEventsSelector , makeFeaturedEventsSelector} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {loadEvents, loadFeaturedEvents} from './actions';

export function MainForm({
  error,
  events,
  featuredEvents,
  errorFeatured,
  loading,
  loadingFeatured,
  loadEvents,
  loadFeaturedEvents
}) {
  useInjectReducer({ key: 'mainForm', reducer });
  useInjectSaga({ key: 'mainForm', saga });
  console.log('featuredEvents : ' + JSON.stringify(featuredEvents));
  console.log('events : ' + JSON.stringify(events));

  useEffect(() => {
    loadFeaturedEvents('111',0,15);
    loadEvents('1111',0,15,'');
  }, []);

  return (
 
    <div>
      <Helmet>
        <title>MainForm</title>
        <meta name="description" content="Description of MainForm" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <div>
        <hr/>
        <div>Featured Events</div>
        { featuredEvents && featuredEvents.map((fevnt, index)=>{
         return <p>ID : {fevnt.id} and title is {fevnt.title}</p>
        })}
      </div>
      <div>
        <hr/>
        <div>Events</div>
        { 
        events && events.map((evnt, index)=>{
         return <p>ID : {evnt.id} and title is {evnt.title}</p>
        })}
      </div>
    </div>
  );
}

MainForm.propTypes = {
  featuredEvents: PropTypes.array,
  events: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  featuredEvents: makeFeaturedEventsSelector(),
  events: makeEventsSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadEvents: (tenentId,skip, take, searchTerm)=>
      dispatch(loadEvents(tenentId, skip, take, searchTerm)),
    loadFeaturedEvents: (tenentId, skip, take)=>
      dispatch(loadFeaturedEvents(tenentId,skip, take))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MainForm);
