import styles from './NameSection.module.postcss';

// Store
import useAppState from '@store/AppState';

// Components
import Input from '../Input';

const NameSection = () => {
	const { state, dispatch } = useAppState();

	const updateValue = (key: string, index: number, value: string) => {
		dispatch((prev) => ({
			...prev,
			nameList: prev.nameList.map((n, i) => {
				if (i === index) {
					return {
						...n,
						[key]: value,
					};
				}

				return n;
			}),
		}));
	};

	return (
		<section>
			<h1>Name Section</h1>

			{state.nameList.map((name, index) => (
				<div key={index} className={styles.inputs}>
					<Input
						value={name.firstName}
						onChange={(val: any) => {
							updateValue('firstName', index, val.target.value);
						}}
					/>
					<Input
						value={name.lastName}
						onChange={(val: any) => {
							updateValue('lastName', index, val.target.value);
						}}
					/>
				</div>
			))}
		</section>
	);
};

export default NameSection;
