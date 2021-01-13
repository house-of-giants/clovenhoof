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
				{posts.map((post, i) => (
					<div key={post.id} className="post" style={{animationDelay: i * 100 + 'ms'}}>
						<h3 className="label">{romanize(i)}</h3>
						<div className="image">
							<a href={post.permalink} target="_blank" rel="noopener noreferrer">
								{post.media_type === 'VIDEO' ? (
									<video>
										<source src={post.media_url} />
									</video>
								) : (
									<img src={post.media_url} />
								)}
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