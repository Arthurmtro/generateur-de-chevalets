import styles from './Layout.module.postcss';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return <main className={styles.pageContent}>{children}</main>;
};

export default Layout;
