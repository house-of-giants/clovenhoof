import React from 'react'

import Layout from '../theme/layout'
import Feed from '../components/Feed/Feed'
import Separator from '../components/Content/Separator'
import Logo from '../components/Logo/Logo'
import SEO from '../components/SEO/SEO'

export default () => (
	<div className="home">
		<Layout>
			<SEO titleTemplate="%s" />
			<Logo />
			<Separator />
			<Feed />
		</Layout>
	</div>
)
