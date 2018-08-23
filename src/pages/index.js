/* global tw */
import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion';

import Layout from '../components/layout'

// const heading = css(tw('my-0 text-xl leading-tight'));
const Heading = styled('h1')`
  ${tw('my-0 text-xl leading-tight')};
  `;

const IndexPage = () => (
  <Layout>
    <Heading>Hello Tailwind Styled Header!</Heading>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
