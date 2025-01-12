'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import * as React from 'react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface Tab {
  id: string
  title: string
  icon: LucideIcon
  type?: never
}

interface Separator {
  type: 'separator'
  id: string
}

export type TabItem = Tab | Separator

interface ExpandableTabsProps {
  tabs: TabItem[]
  className?: string
  activeColor?: string
  onChange?: (id: string | null) => void
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? '.5rem' : 0,
    paddingLeft: isSelected ? '1rem' : '.5rem',
    paddingRight: isSelected ? '1rem' : '.5rem',
  }),
}

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: 'auto', opacity: 1 },
  exit: { width: 0, opacity: 0 },
}

const transition = { delay: 0.1, type: 'spring', bounce: 0, duration: 0.6 }

export function ExpandableTabs({
  tabs,
  className,
  activeColor = 'text-primary',
  onChange,
}: ExpandableTabsProps) {

  const [activeTabId, setActiveTabId] = React.useState(
    'home'
  )

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]')
      let currentTabId: string | null = null

      // biome-ignore lint/complexity/noForEach: <explanation>
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0

        if (isVisible) {
          currentTabId = section.id
        }
      })

      setActiveTabId(currentTabId ?? 'home')
      onChange?.(currentTabId)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSelect = (tabId: string) => {
    setActiveTabId(tabId)

    setTimeout(() => {
      const element = document.getElementById(tabId)

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 500);

  }

  const Separator = () => (
    <div className='mx-1 h-[24px] w-[1.2px] bg-border' aria-hidden='true' />
  )

  return (
    <TooltipProvider>
      <div
        className={cn(
          'flex flex-wrap items-center gap-2 rounded-xl border bg-background p-1 shadow-sm',
          className
        )}>
        {tabs.map((tab) => {
          if (tab.type === 'separator') {
            return <Separator key={tab.id} />
          }

          const Icon = tab.icon
          const isSelected = activeTabId === tab.id

          return (
            <motion.button
              key={tab.id}
              variants={buttonVariants}
              initial={false}
              animate='animate'
              custom={isSelected}
              onClick={() => handleSelect(tab.id)}
              transition={transition}
              className={cn(
                'relative flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300',
                isSelected
                  ? cn('bg-muted', activeColor)
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Icon size={20} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tab.title}</p>
                </TooltipContent>
              </Tooltip>
              <AnimatePresence initial={false}>
                {isSelected && (
                  <motion.span
                    variants={spanVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={transition}
                    className='overflow-hidden'>
                    {tab.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          )
        })}
      </div>
    </TooltipProvider>
  )
}
