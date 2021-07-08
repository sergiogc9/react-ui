import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  system,
  typography
} from 'styled-system';

const customBoxProps = system({
  cursor: { property: 'cursor' },
  backgroundClip: { property: 'backgroundClip' },
  boxSizing: { property: 'boxSizing' },
  fontFamily: { property: 'fontFamily', scale: 'fonts' },
  outline: { property: 'outline' },
  pointerEvents: { property: 'pointerEvents' },
  textDecoration: { property: 'textDecoration' },
  transform: { property: 'transform' },
  transition: { property: 'transition' },
  whiteSpace: { property: 'whiteSpace' }
});

const customGridProps = system({
  columnGap: { property: 'columnGap', scale: 'space' },
  gap: { property: 'gap', scale: 'space' },
  rowGap: { property: 'rowGap', scale: 'space' }
});

const customTextProps = system({
  cursor: { property: 'cursor' },
  textTransform: { property: 'textTransform' },
  transition: { property: 'transition' },
  textDecoration: { property: 'textDecoration' },
  whiteSpace: { property: 'whiteSpace' },
  wordBreak: { property: 'wordBreak' }
});

const customSvgProps = system({
  cursor: { property: 'cursor' },
  fill: { property: 'fill', scale: 'colors' },
  pointerEvents: { property: 'pointerEvents' },
  stroke: { property: 'stroke', scale: 'colors' }
});

const boxComposer = compose(
  background,
  border,
  color,
  customBoxProps,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography
);

const composers = {
  box: boxComposer,
  color: compose(color),
  grid: compose(boxComposer, customGridProps, grid),
  svg: compose(flexbox, layout, position, space, customSvgProps),
  text: compose(typography, color, space, layout, position, customTextProps)
};

export default composers;
