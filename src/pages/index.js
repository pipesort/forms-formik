import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import NavPage from './formpage'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NavPage />
  </Layout>
)

export default IndexPage
