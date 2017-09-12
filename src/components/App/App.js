// @flow
import React, { Component } from 'react'

import IconLink from '../IconLink/IconLink'

import {
  Link,
  List,
  ListItem,
  SubTitle,
  Title,
  Wrapper
} from '../../styles'

class App extends Component<{}> {
  render() {
    const socialLinks = [
      { type: 'envelope', url: 'mailto:nick@nrbernard.com' },
      { type: 'github', url: 'https://github.com/nrbernard' },
      { type: 'linkedin', url: 'http://www.linkedin.com/in/nickbernard' },
    ]

    return (
      <Wrapper>
        <Title>
          <Link href="/">
            bernard
          </Link>
        </Title>

        <SubTitle href="https://www.brainpickings.org/2017/03/06/hermann-hesse-little-joys-my-belief/">
          heads up, dear friends!
        </SubTitle>

        <List
          css={{ marginBottom: '2em' }}
        >
          {socialLinks.map((link) => (
            <ListItem key={link.type}>
              <IconLink type={link.type} url={link.url} />
            </ListItem>
          ))}
        </List>

        <p>I'm Nick Bernard, and I live in Portland, Oregon.</p>

        <p>I used to write <Link href="http://www.forgetmagazine.com/130214b.htm">poems</Link>, but now I write code.</p>

        <p>Let's get in touch!</p>
      </Wrapper>
    )
  }
}

export default App
