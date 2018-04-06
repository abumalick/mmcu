import PropTypes from 'prop-types';
import React from 'react';

import './semantic/dist/semantic.min.css';
import './index.global.css';

import Container from './components/Container';
import DefaultHeadMeta from './components/DefaultHeadMeta';
import Header from './components/Header';
import Content from './components/Content';

const AppContainer = props => (
  <Container>
    <DefaultHeadMeta />
    <Header />
    <Content>{props.children}</Content>
  </Container>
);

AppContainer.propTypes = {
  children: PropTypes.node,
};

export default AppContainer;
