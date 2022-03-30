import { css } from 'styled-components';
import systemCSS from '@styled-system/css';

/**
 * This is the default css base configuration recommended for use along applications.
 * It should be added at a root level in each application using a GlobalStyle component:
 *
 * -----------------------
 * import { createGlobalStyle } from 'styled-components';
 * import { reset } from '@sergiogc9/react-ui-theme';
 *
 * const GlobalStyle = createGlobalStyle`
 *    ${reset}
 * `;
 * -----------------------
 */
const reset = css`
	/* Box sizing rules */
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	/* Remove default padding */
	ul,
	ol {
		padding: 0;
	}

	/* Remove default margin */
	body,
	h1,
	h2,
	h3,
	h4,
	p,
	ul,
	ol,
	li,
	figure,
	figcaption,
	blockquote,
	dl,
	dd {
		margin: 0;
	}

	/* Set core body defaults */
	body {
		scroll-behavior: smooth;
		text-rendering: optimizeSpeed;
		line-height: 1.5;

		font-family: ${props => props.theme.fonts.main};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		${systemCSS({ bg: 'common.background', color: 'common.text' })}
	}

	/* Remove list styles on ul, ol elements with a class attribute */
	ul,
	ol {
		list-style: none;
	}

	/* Make images easier to work with */
	img {
		max-width: 100%;
		display: block;
	}

	/* Inherit fonts for inputs and buttons */
	input,
	button,
	textarea,
	select {
		font: inherit;
		margin: 0;
	}

	/* Remove all animations and transitions for people that prefer not to see them */
	@media (prefers-reduced-motion: reduce) {
		* {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}

	/* Remove weird effect in some mobile devices when clicking buttons */
	html {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	/* Remove default edge password show icon on focus */
	input::-ms-reveal,
	input::-ms-clear {
		display: none;
	}

	/* Improve scrolling bar if dark mode */
	${props =>
		props.theme.mode === 'dark' &&
		css`
			:root {
				color-scheme: dark;
			}
		`}
`;

export default reset;
