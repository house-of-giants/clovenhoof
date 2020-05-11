import React from 'react'

import Layout from '../theme/layout'
import StyledContent from '../components/Content/StyledContent'
import Hero from '../components/Header/Hero'
import Separator from '../components/Content/Separator'

export default () => (
	<Layout>
		<Hero title="Contact" />
		<Separator />
		<StyledContent grid="2">
			<div className="content">
				<div className="wrap">
					<h2>Email to schedule</h2>
				</div>

				<div className="wrap">
					<h2><a href="http://eodtattoo.com/" target="_blank" rel="noopener noreferrer">End of Days Tattoo</a></h2>
					<p><strong>Address:</strong> 2024 E Colfax Ave, Denver, CO 80206</p>
					<p><strong>Phone:</strong> (303) 333-4880</p>
					<iframe title="Google map location for EOD Tattoo" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12271.962756843563!2d-104.962645!3d39.73986!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1e7a616ab4bdb6e!2sEnd%20Of%20Days%20(EOD)%20Tattoo!5e0!3m2!1sen!2sus!4v1580315000093!5m2!1sen!2sus" width="600" height="450" frameBorder="0" allowFullScreen=""></iframe>
				</div>
			</div>
		</StyledContent>
	</Layout>
)