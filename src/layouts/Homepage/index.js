import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Container, Grid, Image} from 'semantic-ui-react';
import {Link} from 'phenomic';

import Page from '../Page';
import Blocks from '../../components/Blocks';
import Services from '../../components/Services';
import styles from './index.css';
import enhanceCollection from 'phenomic/lib/enhance-collection';

import Svg from 'react-svg-inline'; // <Svg svg={ twitterSvg } cleanup />
import logo from '../../../content/assets/logo.svg';
import logoSimple from '../../../content/assets/logoSimple.svg';
//<Image src={`/assets/icons/house.svg`} alt={'logo'} centered height="60px" />

export default class Homepage extends Component {
  static propTypes = {
    head: PropTypes.object.isRequired,
    body: PropTypes.string,
  };

  static contextTypes = {
    collection: PropTypes.array,
    metadata: PropTypes.object,
  };

  render() {
    const {collection} = this.context;
    return (
      <div>
        <Page
          {...this.props}
          header={
            <div>
              <div className={styles.hero}>
                <img src={this.context.metadata.info.logo} height="50px" />
              </div>
              <Blocks theme="blocksaccueil" className="hide-mobile" />
            </div>
          }
          body="">
          {
            <div className={styles.hero2}>
              <Grid textAlign="center">
                <Grid.Column
                  key="img"
                  className={`${styles.hero2Img} hide-mobile`}
                  tablet={8}
                  computer={8}>
                  <Image
                    src={this.props.head.hero2}
                    alt="Photo de La Maison Médicale"
                    fluid
                  />
                </Grid.Column>
                <Grid.Column key="body" mobile={16} tablet={8} computer={8}>
                  <div className={styles.hero2Body}>
                    <img src={this.context.metadata.info.logoSimple} height="50px" />
                    <h1>
                      {this.props.head.titre}
                    </h1>
                    <p
                      contentEditable="true"
                      dangerouslySetInnerHTML={{__html: this.props.body}}
                    />
                  </div>
                </Grid.Column>
              </Grid>
            </div>
          }
          <Services />
        </Page>
      </div>
    );
  }
}
