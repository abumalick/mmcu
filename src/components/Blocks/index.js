import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'phenomic'
import Markdown from '../../components/Markdown'
import Svg from 'react-svg-inline' // <Svg svg={ twitterSvg } cleanup />

import cal from '../../../content/assets/icons/cal.svg'
import clock from '../../../content/assets/icons/clock.svg'
import direction from '../../../content/assets/icons/direction.svg'
import note from '../../../content/assets/icons/note.svg'
const icons = {
  cal,
  clock,
  direction,
  note,
}
import styles from './styles.css'

// <Image src={`/assets/icons/${block.icone}.svg`} alt={block.icone} centered height={props.theme === 'pieddepage' ? '16px' : '35px'} />
const Block = ({block, className, theme}, {metadata: {info: {blocs}}}) => (
  <div className={`block block-${theme} ${className}`}>
    <h3>
      <Svg
        className="block-svg"
        svg={icons[blocs[block].icone]}
        height={theme === 'pieddepage' ? '16px' : '35px'}
      />{' '}
      {blocs[block].titre}
    </h3>
    <div className={styles.blockText}>
      <Markdown text={blocs[block].texte} />
    </div>
    <Link to={`/${block}`}>{blocs[block].lien}</Link>
  </div>
)
Block.propTypes = {
  block: PropTypes.string.isRequired,
  className: PropTypes.string,
  theme: PropTypes.string.isRequired,
}
Block.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

const Blocks = ({theme}, {metadata: {info}}) => {
  const columns =
    theme === 'barrelaterale'
      ? {mobile: 16, tablet: 16, computer: 16}
      : {mobile: 16, tablet: 8, computer: 5}
  return (
    <div
      className={`flex ${
        theme === 'barrelaterale' ? 'flex-column' : styles.pb12
      } justify-between items-stretch`}>
      {info[theme].map((block) => (
        <Block
          key={block}
          block={block}
          className={`flex1 ${styles.mw300} ${
            theme === 'barrelaterale' ? styles.mb25 : ''
          }`}
          theme={theme}
        />
      ))}
    </div>
  )
}

Blocks.propTypes = {
  theme: PropTypes.string.isRequired,
}
Blocks.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Blocks
export {Block}
