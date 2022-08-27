import styles from './Input.module.postcss';

type InputProps = {
	type?: 'string' | 'file';
	value?: string;
	onChange?: any;
};

const InputByType = ({ type = 'string', value, onChange }: InputProps) => {
	switch (type) {
		case 'string':
			return (
				<>
					<input value={value} onChange={onChange} type="text" />
				</>
			);
		case 'file':
			return (
				<>
					<input type="file" />
				</>
			);
		default:
			return (
				<>
					<div>string</div>
				</>
			);
	}
};

const Input = ({ type, value, onChange }: InputProps) => {
	return (
		<div className={styles.inputContainer}>
			<InputByType type={type} value={value} onChange={onChange} />
		</div>
	);
};

export default Input;
