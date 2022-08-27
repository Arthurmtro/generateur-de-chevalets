import styles from './HomePage.module.postcss';

// Components
import NameSection from '@components/NameSection';
import ToolSection from '@components/ToolSection';

const HomePage = () => {
	return (
		<div className={styles.homePage}>
			<NameSection />
			<ToolSection />
		</div>
	);
};

export default HomePage;
