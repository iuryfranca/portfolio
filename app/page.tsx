'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { SkillTree } from '@/components/skill-tree'
import { BlurFade } from '@/components/ui/blur-fade'
import { ExpandableTabs, type TabItem } from '@/components/ui/expandable-tabs'
import { Particles } from '@/components/ui/particles'
import { WordRotate, type WordsProps } from '@/components/ui/word-rotate'
import { HelpCircle, HomeIcon, LayoutList, Settings } from 'lucide-react'

export default function Home() {
  const { theme } = useTheme()
  const [color, setColor] = useState('#000000')

  const tabs = [
    { title: 'Home', icon: HomeIcon },
    { type: 'separator' },
    { title: 'Projects', icon: LayoutList },
    { title: 'Sobre', icon: HelpCircle },
    { title: 'Settings', icon: Settings },
  ] as TabItem[]

	const words = [
		{ word: 'React Pleno', color: '#58C4DC' },
		{ word: 'Vue Pleno', color: '#41B883' },
		{ word: 'Angular Pleno', color: '#F4084E' },
		{ word: 'Mobile Júnior', color: '#fbff00' },
		{ word: '.NET Intermediário', color: '#9d3dbc' },
	] as WordsProps[]

  useEffect(() => {
    setColor(theme === 'dark' ? '#ffffff' : '#000000')
  }, [theme])

  return (
    <div className='relative flex min-h-screen flex-col items-center justify-start gap-8 overflow-hidden bg-gradient-to-b from-60% from-background to-slate-900'>
      <div className='relative flex h-[700px] w-full flex-col items-center justify-center'>
        <Particles
          quantity={200}
          ease={80}
          color={color}
          className='absolute inset-0'
          refresh
        />

        <div className='flex h-full w-full gap-12 flex-col items-center justify-center'>
          <div className='flex max-w-80 flex-col items-center justify-center sm:max-w-96 lg:max-w-md'>
            <BlurFade delay={0.25} inView className='w-full'>
              <h2 className='font-bold text-4xl tracking-tighter sm:text-5xl xl:text-6xl/none'>
                Hello World 👋
              </h2>
            </BlurFade>

            <BlurFade delay={0.25 * 2} inView className='w-full'>
              <span className='text-pretty text-2xl tracking-tighter sm:text-3xl xl:text-4xl/none'>
                Me chamo Iury França
              </span>
            </BlurFade>
          </div>

          <div className='max-w-80 flex-col flex sm:flex-row sm:max-w-none gap-2 items-center justify-center'>
						<span className=' text-black dark:text-white'>Tenho 5 anos de experiência e me considero </span>
            <WordRotate
              className=' text-black dark:text-white'
              words={words}
            />
          </div>
        </div>

        <ExpandableTabs tabs={tabs} className='fixed top-2 right-2 z-50' />
      </div>

      <div className='relative mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center mb-36'>
				<SkillTree />
      </div>
    </div>
  )
}
