import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ item }) => {
  return <li className={styles.item}>{item}</li>
}

Item.propTypes = {
  item: PropTypes.string.isRequired
}

export default Item
