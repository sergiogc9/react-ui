import Button from 'components/Button';
import Grid from 'components/Grid';
import Animate, { withAnimate } from './Animate';
import {
	FadeIn,
	FadeInAnimation,
	FadeOut,
	FadeOutAnimation,
	SlideDown,
	SlideDownAnimation,
	SlideUp,
	SlideUpAnimation
} from './animations';
import BaseAnimation, { BaseAnimationProps, withBaseAnimation } from './Base';
import AnimationList, { AnimationListProps } from './List';

export type { AnimationListProps, BaseAnimationProps };
export default {
	// Animation components
	Animate,
	BaseAnimation,
	List: AnimationList,
	withAnimate,
	withBaseAnimation,
	// Library animated components
	Button: withBaseAnimation(Button),
	Grid: withBaseAnimation(Grid),
	GridBox: withBaseAnimation(Grid.Box),
	GridRow: withBaseAnimation(Grid.Row),
	// Animations
	FadeIn,
	FadeInAnimation,
	FadeOut,
	FadeOutAnimation,
	SlideDown,
	SlideDownAnimation,
	SlideUp,
	SlideUpAnimation
};
