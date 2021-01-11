import Separator from '@/components/Content/Separator'
import StyledContent from '@/components/Content/StyledContent'
import Hero from '@/components/Header/Hero'
import React from 'react'

const Contact = () => (
	<>
		<Hero title="Contact" />
		<Separator />
		<StyledContent>
			<div className="content">
				<div className="wrap">
					<h2>Scheduling</h2>
					<p>Email <a className="email" href='&#109;ai&#108;to&#58;cloven&#37;6&#56;&#37;&#54;F%6F&#102;&#116;atto&#111;&#64;g&#109;ai%6&#67;%&#50;&#69;&#99;&#37;6F&#109;'>c&#108;ove&#110;&#104;&#111;oft&#97;ttoo&#64;gmail&#46;com</a> to schedule</p>
				</div>

				<div className="wrap">
					<h2><a href="http://eodtattoo.com/" target="_blank" rel="noopener noreferrer">End of Days Tattoo</a></h2>
					<p><strong>Address:</strong> 2024 E Colfax Ave, Denver, CO 80206</p>
					<p><strong>Phone:</strong> (303) 333-4880</p>
					<iframe title="Google map location for EOD Tattoo" style={{width: '100%'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12271.962756843563!2d-104.962645!3d39.73986!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1e7a616ab4bdb6e!2sEnd%20Of%20Days%20(EOD)%20Tattoo!5e0!3m2!1sen!2sus!4v1580315000093!5m2!1sen!2sus" height="450" frameBorder="0" allowFullScreen=""></iframe>
				</div>
			</div>
		</StyledContent>
	</>
)

export default Contact