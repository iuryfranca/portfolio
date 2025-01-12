'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Particles } from '@/components/ui/particles'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
	const { theme } = useTheme()
	const [color, setColor] = useState('#000000')

	useEffect(() => {
		setColor(theme === 'dark' ? '#ffffff' : '#000000')
	}, [theme])

	return (
		<div className="relative max-w-7xl mx-auto flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
			<ModeToggle />

			<Particles
				className="absolute inset-0"
				quantity={200}
				ease={80}
				color={color}
				refresh
			/>
		</div>
	)
}
