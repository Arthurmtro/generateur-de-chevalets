import styles from './ToolSection.module.postcss';

import TheButton from '@components/TheButton';
import useAppState from '@store/AppState';
import Input from '@components/Input';

const ToolSection = () => {
	const { state, dispatch } = useAppState();

	return (
		<section className={styles.toolSection}>
			<article className={styles.toolContent}>
				<div className={styles.nameListInfos}>
					<span>There is {state.nameList.length} names</span>

					<TheButton
						rounded
						onClick={() =>
							dispatch((prev) => ({
								...prev,
								nameList: prev.nameList.concat({
									firstName: '',
									lastName: '',
								}),
							}))
						}
					>
						+
					</TheButton>
				</div>

				<Input type="file" />
			</article>

			<footer className={styles.toolFooter}>
				<TheButton value="Generate" size="large" />
			</footer>
		</section>
	);
};

export default ToolSection;
