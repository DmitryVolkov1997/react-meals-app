import { Box, Container, Heading } from '@chakra-ui/react'
import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { FaRegCopyright } from 'react-icons/fa'
import styles from './Footer.module.sass'
interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Footer = ({ className, ...props }: FooterProps) => {
	return (
		<Box
			as='footer'
			boxShadow='dark-lg'
			minHeight='80px'
			className={cn(styles.footer, className)}
			{...props}
		>
			<Container maxW='6xl'>
				<Box
					minHeight='80px'
					display='flex'
					justifyContent='center'
					alignItems='center'
					gap='0 5px'
				>
					<Heading as='h4' size='md'>
						{new Date().getFullYear()}
					</Heading>
					<FaRegCopyright fontSize={20} />
				</Box>
			</Container>
		</Box>
	)
}

