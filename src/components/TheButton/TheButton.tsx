import { CSSProperties } from 'react';
import styles from './TheButton.module.postcss';

type TheButtonProps = {
	children?: React.ReactNode;
	value?: string;
	rounded?: boolean;
	variant?: 'primary' | 'secondary';
	size?: 'small' | 'medium' | 'large';
	onClick?: () => void;
};

const TheButton = ({
	children,
	value,
	rounded = false,
	onClick,
	variant = 'primary',
	size = 'small',
}: TheButtonProps) => {
	const calcPadding = () => {
		if (rounded) return '0.25rem 0.75rem';

		switch (size) {
			case 'large':
				return '1rem 1.5rem';
			case 'medium':
				return '0.75rem 1rem';
			default:
				return '0.5rem 0.5rem';
		}
	};

	return (
		<button
			onClick={onClick}
			className={styles.btn}
			style={
				{
					'--btn-variant':
						variant === 'primary'
							? 'var(--theme-primary)'
							: 'var(--theme-secondary)',
					'--btn-padding': calcPadding(),
					'--btn-radius': rounded ? '100%' : '1rem',
				} as CSSProperties
			}
		>
			{children || value}
		</button>
	);
};

export default TheButton;
