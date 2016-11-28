// adapted from
// https://github.com/brianstone/gatsby-starter-clean/blob/master/pages/index.js

import React from 'react'
import Helmet from "react-helmet"

export default () => (
  <div>
    <Helmet
      title="React example"
      meta={[
        { "name": "description", "content": "Sample" },
        { "name": "keywords", "content": "sample, something" },
      ]}
      />
    <h1>
      Hello World!
    </h1>
    <p>Welcome to your new clean Gatsby site</p>
  </div>
)
