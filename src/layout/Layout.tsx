import { Box } from '@chakra-ui/react'
import { Footer, Header } from 'layout'
import { ReactNode } from 'react'
import styles from './Layout.module.sass'

interface LayoutProps {
	children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<Box className={styles.layout}>
			<Header className={styles.header} />

			<Box className={styles.main} as='main'>
				{children}
			</Box>

			<Footer className={styles.footer} />
		</Box>
	)
}

