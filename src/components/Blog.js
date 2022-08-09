import styled from 'styled-components';

import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';
import Header from './Header';
import Section from './Section';
import SectionHeader from './SectionHeader';
import RgbText from './RgbText';

import { content } from '../modules/content';

import { VIOLET } from '../colors';

export default function Blog() {
	return (
		<RgbText>
			<StyledDiv>
				<Navbar />
				<Body>
					<Header
						text="Blog"
						subtext="Breaking your minds since 2022."
					/>
					<SectionHeader text="Articles" />
					<Section>
						{
							content.map((c, idx) => <p key={idx}><a className="blog-article-link nav-link" href={`/blog/${idx}/${c.uri}`}>{c.title}</a></p>)
						}
					</Section>
				</Body>
			</StyledDiv>
		</RgbText>
	);
}

const StyledDiv = styled.div`
  .blog-article-link {
    text-decoration: none;
    color: ${VIOLET};
    font-family: Inconsolata Regular;
  }

  .blog-article-link:hover {
    text-decoration: underline;
  }

`;
