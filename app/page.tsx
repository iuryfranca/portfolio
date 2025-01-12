'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Projects } from '@/components/projects'
import { SkillTree } from '@/components/skill-tree'
import { BlurFade } from '@/components/ui/blur-fade'
import { ExpandableTabs, type TabItem } from '@/components/ui/expandable-tabs'
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects'
import { Particles } from '@/components/ui/particles'
import { WordRotate, type WordsProps } from '@/components/ui/word-rotate'
import { Separator } from '@radix-ui/react-separator'
import {
	Github,
	HomeIcon,
	Instagram,
	LayoutList,
	Linkedin,
	Settings,
	UserSearch,
} from 'lucide-react'

export default function Home() {
	const { theme } = useTheme()
	const [color, setColor] = useState('#58C4DC')

	const handleColor = (color: string) => {
		setColor(color)
	}

	const tabs = [
		{ title: 'Início', icon: HomeIcon, id: 'home' },
		{ type: 'separator', id: 'separator-1' },
		{ title: 'Projetos', icon: LayoutList, id: 'projects' },
		{ title: 'Sobre', icon: UserSearch, id: 'sobre' },
		{ title: 'Settings', icon: Settings, id: 'settings' },
	] as TabItem[]

	const words = [
		{ word: 'FullStack Pleno', color: '#FFFFFF' },
		{ word: 'Angular Pleno', color: '#F4084E' },
		{ word: 'React Pleno', color: '#58C4DC' },
		{ word: 'Vue Pleno', color: '#41B883' },
		{ word: 'Mobile Júnior', color: '#ff9500' },
		{ word: '.NET Intermediário', color: '#9d3dbc' },
		{ word: 'Python Júnior', color: '#fbff00' },
	] as WordsProps[]

	const features = [
		{
			title: 'Github',
			description: 'Acessar o repositório do projeto',
			icon: <Github />,
			link: 'https://github.com/iuryfranca',
		},
		{
			title: 'Linkedin',
			description: 'Acessar o perfil do LinkedIn',
			icon: <Linkedin />,
			link: 'https://www.linkedin.com/in/iury-franca/',
		},
		{
			title: 'Instagram',
			description: 'Acessar o perfil do Instagram',
			icon: <Instagram />,
			link: 'https://www.instagram.com/iuryfrancaa/',
		}
	]

	useEffect(() => {
		setColor(theme === 'dark' ? '#ffffff' : '#000000')
	}, [theme])

	return (
		<div className="relative flex min-h-screen flex-col items-center justify-start gap-8 overflow-hidden bg-gradient-to-b from-10% from-background to-slate-900">
			<div
				className="relative flex h-[850px] w-full flex-col items-center justify-center md:h-[700px]"
				id="home"
				data-section
			>
				<Particles
					quantity={200}
					ease={60}
					color={color}
					className="absolute inset-0"
					refresh
				/>

				<div className="flex h-full w-full max-w-80 flex-col items-center justify-center gap-12 sm:max-w-lg">
					<div className="flexflex-col w-full items-center justify-center">
						<BlurFade delay={0.25} inView className="w-full">
							<h2 className="font-bold text-5xl tracking-tighter">
								Hello World 👋
							</h2>
						</BlurFade>

						<BlurFade delay={0.25 * 2} inView className="w-full">
							<span className="text-pretty text-3xl tracking-tighter sm:text-4xl xl:text-5xl/none">
								Me chamo Iury França
							</span>
						</BlurFade>
					</div>

					<BlurFade delay={0.25 * 3} inView className="w-full">
						<div className='flex flex-col content-start items-center gap-2 sm:max-w-none sm:flex-row'>
							<span className=" text-black dark:text-white">
								Tenho 5 anos de experiência e me considero{' '}
							</span>
							<WordRotate
								className=" text-black dark:text-white"
								words={words}
								onChange={handleColor}
							/>
						</div>
					</BlurFade>
				</div>

				<ExpandableTabs tabs={tabs} className="fixed top-3 right-3 z-50" />
			</div>

			<Projects />

			<BlurFade delay={0.25} inView className="w-full">
				<div
					className='relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 rounded-xl bg-zinc-900 py-20 md:mb-10'
					id="sobre"
					data-section
				>
					<div className='flexflex-col mx-auto items-center justify-center px-4'>
						<h2 className="w-full max-w-3xl text-center text-lg md:text-2xl">
							Techs and Clients
						</h2>
					</div>
					<SkillTree />

					<Separator />

					<div className='flexflex-col mx-auto items-center justify-center px-4'>
						<h2 className="w-full max-w-3xl text-center text-lg md:text-2xl">
							Contatos
						</h2>
					</div>
					<FeaturesSectionWithHoverEffects
						features={features}
						className="flex max-w-5xl flex-col p-4 md:flex-row md:p-0"
					/>
				</div>
			</BlurFade>
		</div>
	)
}
