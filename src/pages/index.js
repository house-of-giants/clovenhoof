import React from 'react'

import Layout from '../theme/layout'
import Feed from '../components/Feed/Feed'

export default () => (
	<div className="home">
		<Layout>
			<h1>Latest Work</h1>
			<Feed />
		</Layout>
	</div>
)
