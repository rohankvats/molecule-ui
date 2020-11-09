import React from 'react'
import { Link } from 'gatsby'
import { Button } from '../../../src'
import spotIllustration from '../images/evergreen-spot-illustration.png'
import GitHubIcon from './GitHubIcon'
import LogoWordmark from './LogoWordmark'

const NativeLink = ({ ...props }) => {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export default class HomeHero extends React.PureComponent {
  render() {
    return (
      <section className="Hero">
        <div className="Hero-inner">
          <div className="Hero-left">
            <LogoWordmark style={{ marginBottom: 12 }} width={134} />
            <h1>An upGrad Design System for the Web</h1>
            <p>
              Molecular-ui is a React UI Framework for building ambitious
              products on the web. Brought to you by
              {` `}
              <NativeLink className="Link" href="https://segment.com/">
                Segment
              </NativeLink>
              .
            </p>
            <div>
              <Button
                is={Link}
                to="/components/"
                appearance="primary"
                height={40}
                marginRight={20}
              >
                Browse Components
              </Button>
            </div>
          </div>
          <div className="Hero-right">
            <img
              src={spotIllustration}
              alt="MolecularUI spot illustration"
              height="396"
            />
          </div>
        </div>
      </section>
    )
  }
}
