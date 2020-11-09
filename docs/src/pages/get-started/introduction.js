import React from 'react'
import { Helmet } from 'react-helmet'
import TopBar from '../../components/TopBar'
import GetStartedSidebar from '../../components/GetStartedSidebar'
import SyntaxHighlighter from '../../components/SyntaxHighlighter'
import Layout from '../../components/Layout'
import PageFooter from '../../components/PageFooter'

const NativeLink = ({ ...props }) => {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>Introduction · MolecularUI</title>
      </Helmet>
      <div className="MainLayout">
        <TopBar />
        <main className="MainLayout-main">
          <div className="MainLayout-content">
            <section className="MainLayout-contentRight">
              <div
                className="Container-nextToSidebar"
                style={{ marginBottom: 160 }}
              >
                <div className="Content">
                  <h1>Introduction</h1>
                  <p className="p">
                    MolecularUI is a pragmatic UI kit for building evolving
                    products on the web.
                    <br /> It is built and maintained open-source by{' '}
                    <NativeLink href="https://segment.com/">Segment</NativeLink>
                    .
                  </p>
                  <h2>Core beliefs of MolecularUI</h2>
                  <p>
                    <strong>
                      MolecularUI is built on the belief that you can never
                      predict all future requirements, only prepare for it.
                    </strong>
                    {` `}
                    Instead of creating fixed configurations that work today,
                    MolecularUI promotes building systems that anticipate new
                    and changing design requirements.
                  </p>
                  <p>
                    <strong>
                      MolecularUI is built on the belief that things should work
                      out of the box with smart defaults and offer full control
                      when needed.
                    </strong>
                    {` `}
                    For example, MolecularUI implements most components on top
                    of a{' '}
                    <NativeLink href="https://github.com/segmentio/ui-box">
                      Box primitive
                    </NativeLink>{' '}
                    which allows for a lot of customization.
                  </p>
                  <p>
                    <strong>
                      MolecularUI is built on the belief that using MolecularUI
                      and contributing to MolecularUI should be a pleasant
                      experience.
                    </strong>{' '}
                    We prioritize documentation and all the tools for a solid
                    developer experience. We advocate respect and inclusivity in
                    our writings and interactions.
                  </p>
                  <h2>Install and use components</h2>
                  <p>
                    MolecularUI is made up of multiple components and tools
                    which you can import one by one. All you need to do is
                    install the <code>molecular-ui</code> package:
                  </p>
                </div>
                <SyntaxHighlighter>
                  {`
$ yarn add molecular-ui
# or
$ npm install --save molecular-ui
                `.trim()}
                </SyntaxHighlighter>
                <div className="Content">
                  <p>
                    A working version, assuming you are using something like{' '}
                    <NativeLink href="https://github.com/facebookincubator/create-react-app">
                      Create React App
                    </NativeLink>
                    , might look like this:
                  </p>
                </div>

                <SyntaxHighlighter>
                  {`
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'molecular-ui'

ReactDOM.render(
  <Button>I am using 🌲 MolecularUI!</Button>,
  document.getElementById('root')
)`}
                </SyntaxHighlighter>
              </div>
            </section>
          </div>
          <GetStartedSidebar />
        </main>
      </div>
      <PageFooter />
    </Layout>
  )
}
