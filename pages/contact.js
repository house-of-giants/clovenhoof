import StyledContent from '@/components/Content/StyledContent'
import Hero from '@/components/Header/Hero'
import React from 'react'

const Contact = () => (
	<>
		<Hero title="Contact" />
		<StyledContent>
			<div className="content">
				<div className="wrap">
					<h2>Scheduling</h2>
					<p>Email <a className="email" href='&#109;ai&#108;to&#58;cloven&#37;6&#56;&#37;&#54;F%6F&#102;&#116;atto&#111;&#64;g&#109;ai%6&#67;%&#50;&#69;&#99;&#37;6F&#109;'>c&#108;ove&#110;&#104;&#111;oft&#97;ttoo&#64;gmail&#46;com</a> to schedule</p>
				</div>

				<div className="wrap">
					<h2><a href="https://www.imperialtattoova.com/" target="_blank" rel="noopener noreferrer">Imperial Tattoo Company</a></h2>
					<p><strong>Address:</strong> 793 W Main Street, Unit 7, Abingdon, VA 24210</p>
					<p><strong>Phone:</strong> (276) 525-1140</p>
					<iframe title="Google map location for Imperial Tattoo Company" style={{width: '100%'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.7268429813703!2d-82.00017888427392!3d36.705101379968276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885012df8dca7a0f%3A0x58fd52c032a8d4e1!2sImperial%20Tattoo!5e0!3m2!1sen!2sus!4v1666032034750!5m2!1sen!2sus" height="450" frameBorder="0" allowFullScreen=""></iframe>
				</div>
			</div>
		</StyledContent>
	</>
)

export default Contact