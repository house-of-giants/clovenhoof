import { romanize } from "@/utils/romanize"
import { colors } from "styles/base/variables"
import { StyledButtonLink } from "../Button/StyledButton"
import Sulfur from "../Sulfur"
import StyledFeed from "./StyledFeed"
import StyledGrid from "./StyledGrid"

const Feed = ({ posts }) => (
	<StyledFeed>
		<div className="feed-wrapper">
			<StyledGrid>
				{posts.map(({ node }, i) => (
					<div key={node.shortcode} className="post" style={{animationDelay: i * 100 + 'ms'}}>
						<h3 className="label">{romanize(i)}</h3>
						<div className="image">
							<a href={`https://instagram.com/p/${node.shortcode}`} target="_blank" rel="noopener noreferrer">
								<img src={node.display_resources[0].src} />
							</a>
						</div>
						<div className="icon">
							<Sulfur fill={colors.primary} />
						</div>
					</div>
				))}
			</StyledGrid>
			<p><StyledButtonLink href="https://instagram.com/clovenhoof_tattoo" target="_blank" rel="noopener noreferrer">More Work</StyledButtonLink></p>
		</div>
	</StyledFeed>
)

export default Feed