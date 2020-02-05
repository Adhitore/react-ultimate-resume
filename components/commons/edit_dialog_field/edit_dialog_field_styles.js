"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      margin: [spacing * 4, 0]
    },
    subtitle: {
      margin: [spacing, 0, spacing * 2]
    },
    componentErrorContainer: {
      marginTop: spacing * 2
    }
  };
};

exports.styles = styles;