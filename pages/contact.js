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
					<h2><a href="https://www.facebook.com/bristoltattooco/" target="_blank" rel="noopener noreferrer">The Bristol Tattoo Company</a></h2>
					<p><strong>Address:</strong> 504 State St, Bristol, TN 37620</p>
					<p><strong>Phone:</strong> (423) 573-7804</p>
					<iframe title="Google map location for The Bristol Tattoo Company" style={{width: '100%'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12813.242959827836!2d-82.1820997!3d36.5948244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4124003a7b4a0572!2sThe%20Bristol%20Tattoo%20Company!5e0!3m2!1sen!2sus!4v1617893203363!5m2!1sen!2sus" height="450" frameBorder="0" allowFullScreen=""></iframe>
				</div>
			</div>
		</StyledContent>
	</>
)

export default Contact