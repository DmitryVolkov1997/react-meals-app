import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Button, Container, useColorMode } from '@chakra-ui/react'
import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { GiMeal } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import styles from './Header.module.sass'

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Header = ({ className, ...props }: HeaderProps) => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Box
			boxShadow='base'
			rounded='md'
			as='header'
			className={cn(styles.header, className)}
			{...props}
		>
			<Container maxW='6xl' mx='auto'>
				<Box
					minHeight='80px'
					display='flex'
					justifyContent='space-between'
					alignItems='center'
				>
					<Link to='/'>
						<GiMeal size={60} />
					</Link>

					<Button
						onClick={toggleColorMode}
						bg='transparent'
					>
						{colorMode === 'light' ? (
							<MoonIcon fontSize={37} />
						) : (
							<SunIcon fontSize={37} />
						)}
					</Button>
				</Box>
			</Container>
		</Box>
	)
}

