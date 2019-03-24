import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/overlaid-image';

// const styles = () => ({
//   root: {
//     flexGrow: 1
//   }
// });

const pandaEating = {
  
}

const App = ({ classes }) => (
  <div className={classes.root}>
    <Image image={""} />
  </div>
);

App.propTypes = {
  classes: PropTypes.shape({ root: PropTypes.string.isRequired }).isRequired
};

export default App;
