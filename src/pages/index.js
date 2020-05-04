import React from 'react'

import Layout from '../theme/layout'
import Feed from '../components/Feed/Feed'
import Separator from '../components/Content/Separator'
import Logo from '../components/Logo/Logo'

export default () => (
	<div className="home">
		<Layout>
			<Logo />
			<Separator />
			<Feed />
		</Layout>
	</div>
)
