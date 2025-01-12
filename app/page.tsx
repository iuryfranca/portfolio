'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Projects } from '@/components/projects'
import { SkillTree } from '@/components/skill-tree'
import { BlurFade } from '@/components/ui/blur-fade'
import { ExpandableTabs, type TabItem } from '@/components/ui/expandable-tabs'
import { Particles } from '@/components/ui/particles'
import { WordRotate, type WordsProps } from '@/components/ui/word-rotate'
import { HomeIcon, LayoutList, Settings, UserSearch } from 'lucide-react'

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

  useEffect(() => {
    setColor(theme === 'dark' ? '#ffffff' : '#000000')
  }, [theme])

  return (
    <div className='relative flex min-h-screen flex-col items-center justify-start gap-8 overflow-hidden bg-gradient-to-b from-10% from-background to-slate-800'>
      <div
        className='relative flex h-[850px] md:h-[700px] w-full flex-col items-center justify-center'
        id='home'
        data-section>
        <Particles
          quantity={200}
          ease={60}
          color={color}
          className='absolute inset-0'
          refresh
        />

        <div className='flex h-full w-full flex-col items-center justify-center gap-12'>
          <div className='flex max-w-80 flex-col items-center justify-center sm:max-w-96 lg:max-w-md'>
            <BlurFade delay={0.25} inView className='w-full'>
              <h2 className='font-bold text-5xl tracking-tighter sm:text-6xl xl:text-7xl/none'>
                Hello World 👋
              </h2>
            </BlurFade>

            <BlurFade delay={0.25 * 2} inView className='w-full'>
              <span className='text-pretty text-3xl tracking-tighter sm:text-4xl xl:text-5xl/none'>
                Me chamo Iury França
              </span>
            </BlurFade>
          </div>

          <BlurFade delay={0.25 * 3} inView className='w-full'>
            <div className='flex flex-col items-center justify-center gap-2 sm:max-w-none sm:flex-row'>
              <span className=' text-black dark:text-white'>
                Tenho 5 anos de experiência e me considero{' '}
              </span>
              <WordRotate
                className=' text-black dark:text-white'
                words={words}
                onChange={handleColor}
              />
            </div>
          </BlurFade>
        </div>

        <ExpandableTabs tabs={tabs} className='fixed top-3 right-3 z-50' />
      </div>

      <Projects />

      <div
        className='relative mx-auto mb-20 flex h-[400px] w-full max-w-6xl flex-col items-center justify-center'
        id='sobre'
        data-section>
        <BlurFade delay={0.25} inView className='w-full'>
          <SkillTree />
        </BlurFade>
      </div>
    </div>
  )
}
