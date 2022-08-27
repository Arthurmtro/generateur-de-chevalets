import { Link } from 'react-router-dom';
import { ReactComponent as LogoElement } from '@assets/images/Logo.svg';
import styles from './NavBar.module.postcss';

const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<LogoElement width="613" height="98" />
			<div className={styles.links}>
				<Link to={'/'}>Generateur</Link>
				<Link to={'/documentation'}>Documentation</Link>
			</div>
		</nav>
	);
};

export default NavBar;
