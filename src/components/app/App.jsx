import React from 'react';

import image from 'images/panda-eating.jpg';
import OverlaidImage from 'components/overlaid-image';

// const styles = () => ({
//   root: {
//     flexGrow: 1
//   }
// });

const pandaEating = {
  source: image,
  width: 3081,
  height: 3002,
  meta: {
    alt: 'panda-eating',
    photographer: 'Debbie Molle'
  }
};

const App = () => <OverlaidImage image={pandaEating} />;

// App.propTypes = {
//   classes: PropTypes.shape({ root: PropTypes.string.isRequired }).isRequired
// };

export default App;
