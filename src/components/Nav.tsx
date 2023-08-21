import avatar from '../../public/avatar.jpg'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useMediaQuery } from '../utils/hooks/useMediaQuery'

const navMotion = {
	visible: {
		opacity: 1,

		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.15
		}
	},
	hidden: {
		opacity: 0
	}
}
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
	{ name: 'Blog', href: '/blog', id: 2 },
	{ name: 'Contact', href: '/contact', id: 3 }
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
		<nav className='text-black relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32'>
			<svg
				className='absolute xl:hidden bottom-0 left-1/2 -translate-x-1/2'
				width='250'
				height={4}
				viewBox='0 0 250 4'
				fill='none'
				xmlns='https://www.w3.org/2000/svg'
			>
				<motion.path
					d='M2 2L428 2'
					stroke='black'
					strokeWidth={2}
					strokeLinecap='round'
					animate={{ pathLength: 1, opacity: 1 }}
					initial={{ pathLength: 0, opacity: 0 }}
					transition={{ delay: 1, duration: 0.75 }}
				/>
			</svg>
			<motion.a
				href='/'
				animate={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -25 }}
				transition={{ delay: 0.05 }}
				className='flex gap-12'
			>
				<img src={avatar} width='60rem'style={{ borderRadius: '50%' }} alt='Logo' />
			</motion.a>

			{!matches && (
				<h1 className='text-4xl font-bold' style={{ fontFamily: 'aAtmospheric' }}>
					<a href='/' style={{ fontFamily: 'aAtmospheric' }}>CCX.</a>
				</h1>
			)}

			{/* Nav Items animating in  */}
			{toggled && (
				<motion.div
					variants={navMotion}
					animate='visible'
					initial='hidden'
					className='fixed left-0 top-0  z-40 flex h-screen
          w-full flex-col items-center  justify-center  gap-24 bg-white text-2xl font-bold'
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
				// transition={{ delay: 0.35 }}
				onClick={() => setToggled((prevToggle) => !prevToggle)}
				className={'burger z-50 cursor-pointer space-y-1.5 md:hidden'}
			>
				<motion.span
					animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
					className='line-1 block h-0.5 w-8 bg-black'
				></motion.span>
				<motion.span
					animate={{ width: toggled ? 0 : 24 }}
					className='line-2 block h-0.5 w-6 bg-black'
				></motion.span>
				<motion.span
					animate={{
						rotateZ: toggled ? -45 : 0,
						y: toggled ? -8 : 0,
						width: toggled ? 32 : 24
					}}
					className='line-3 block h-0.5 w-4 bg-black'
				></motion.span>
			</motion.div>
		</nav>
	)
}