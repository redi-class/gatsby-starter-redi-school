// adapted from
// https://github.com/brianstone/gatsby-starter-clean/blob/master/pages/index.js

import React from 'react'
import Helmet from "react-helmet"
import { config } from 'config'
import 'css/styles.css'

export default () => (
  <div>
    <Helmet
      title={config.siteTitle}
      meta={[
        { "name": "description", "content": "Sample" },
        { "name": "keywords", "content": "sample, something" },
      ]}
      />
    <h1>
      Hello World!
    </h1>
    <p className="yellow" >Welcome to your new clean Gatsby site</p>
    <footer>
      Footer™ ©2016 Tiago Henriques
    </footer>
  </div>
)
