"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    field: {
      '&:first-child': {
        marginTop: 0
      },
      '&:last-child': {
        marginBottom: 0
      }
    },
    valueSliderContainer: {
      display: 'flex',
      alignItems: 'center',
      margin: [spacing * 3, 0, spacing * 2]
    },
    sliderValue: {
      width: spacing * 10
    },
    bolden: {
      fontWeight: 500
    },
    sliderPopperCard: {
      backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, 'primary'),
      color: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getContrastDefaultColorFromPaletteColor)(theme, 'primary'))
    },
    sliderPopperCardArrowContainer: {
      '& > svg': {
        '& > g > path': {
          fill: (0, _styles_utils.getHexFromPaletteColor)(theme, 'primary')
        }
      }
    }
  };
};

exports.styles = styles;