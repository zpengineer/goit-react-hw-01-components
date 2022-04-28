import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
