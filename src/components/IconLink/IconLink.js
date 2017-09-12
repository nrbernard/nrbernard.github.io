// @flow
import React, { type Node } from 'react'

import { Link } from '../../styles'

type Props = {
  type: string,
  url: string,
}

const IconLink = ({ type, url }: Props): Node => (
  <Link href={url}>
    <i className={`fa fa-${type}`} aria-hidden="true"></i>
  </Link>
)

export default IconLink
