import logo from '../../public/favicon.svg'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useMediaQuery } from '../utils/hooks/useMediaQuery'

const itemMotion = {
	visible: { opacity: 1, x: 0 },
	hidden: { opacity: 0, x: -100 }
}
const itemMotionDesktop = {
	visible: { opacity: 1, x: 0 },
	hidden: { opacity: 1, x: 0 }
}
const navLinks = [
	{ name: 'Home', href: '/', id: 1 },
	{ name: 'Contact', href: '/contact', id: 2 }
]

const NavLinks = ({
	isMobile,
	className
}: {
  isMobile: boolean
  className: string
}) => (
	<div className={className}>
		{navLinks.map(({ name, href, id }) => (
			<motion.a
				style={{ fontFamily: 'aAtmospheric' }}
				key={id}
				variants={isMobile ? itemMotion : itemMotionDesktop}
				href={href}
			>
				{name}
			</motion.a>
		))}
	</div>
)

export default function Nav () {
	const [toggled, setToggled] = useState(false)
	const matches = useMediaQuery('(min-width: 768px)')

	return (
		<nav className='text-white relative mx-8 mb-10 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32'>
			<a
				href='/'
				className='flex gap-12'
			>
				<img src={logo} width='60rem' alt='Logo' />
			</a>

			{toggled && (
				<motion.div
					className='fixed left-0 top-0  z-50 flex h-screen
          w-full flex-col items-center  justify-center  gap-24 bg-dark text-2xl font-bold'
				>
					<NavLinks
						className=' flex flex-col gap-24 text-lg '
						isMobile={!matches}
					/>
				</motion.div>
			)}

			{matches && (
				<motion.div
					animate={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 25 }}
					transition={{ delay: 0.35 }}
					className=' xl:flex xl:items-center  xl:justify-center xl:gap-12 xl:text-lg   '
				>
					<NavLinks className='flex gap-12' isMobile={matches} />
				</motion.div>
			)}


			{/* Hamburger Toggle */}
			<motion.div
				animate={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: 25 }}
				transition={{ delay: 0.35 }}
				onClick={() => setToggled((prevToggle) => !prevToggle)}
				className={'burger z-50 cursor-pointer space-y-1.5 sm:block md:hidden'}
			>
				<motion.span
					animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
					className='line-1 block h-0.5 w-8 bg-white'
				></motion.span>
				<motion.span
					animate={{ width: toggled ? 0 : 24 }}
					className='line-2 block h-0.5 w-6 bg-white'
				></motion.span>
				<motion.span
					animate={{
						rotateZ: toggled ? -45 : 0,
						y: toggled ? -8 : 0,
						width: toggled ? 32 : 24
					}}
					className='line-3 block h-0.5 w-4 bg-white'
				></motion.span>
			</motion.div>
		</nav>
	)
}