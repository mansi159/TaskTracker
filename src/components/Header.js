import PropTypes from 'prop-types';
import Buttons from './Buttons';

const Header = ({title, onAdd}) => {
  
  return (
    <header>
        <h1 className = 'header'>{title}</h1>
        <Buttons color='purple' text = 'Add' onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header