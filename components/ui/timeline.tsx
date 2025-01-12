'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      console.log('ref.current', ref.current)
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div
      className='w-full bg-transparent font-sans md:px-10'
      ref={containerRef}>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-16 md:px-8 lg:px-8'>
        <h2 className='mb-4 w-full max-w-4xl text-center font-semibold text-lg md:text-4xl'>
          Changelog da minha jornada
        </h2>
        <p className='w-full max-w-sm text-center font-light text-sm md:text-base'>
          Meus primeiros projetos e experimentos para praticar e aprender novas
          tecnologias estão aqui.
        </p>
      </div>

      <div ref={ref} className='relative mx-auto max-w-7xl pb-20'>
        {data.map((item, index) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            className='flex justify-start pt-10 md:gap-10 md:pt-32'>
            <motion.div className='sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm'>
              <div className='absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white md:left-3 dark:bg-black'>
                <div className='h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800' />
              </div>
              <h3 className='hidden font-bold text-neutral-500 text-xl md:block md:pl-20 md:text-5xl dark:text-neutral-500 '>
                {item.title}
              </h3>
            </motion.div>

            <div className='relative w-full pr-4 pl-20 md:pl-4'>
              <h3 className='mb-4 block text-left font-bold text-2xl text-neutral-500 md:hidden dark:text-neutral-500'>
                {item.title}
              </h3>
              {item.content}{' '}
            </div>
          </div>
        ))}
        <div
          style={{
            height: `${height}px`,
          }}
          className='absolute top-0 left-8 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-[0%] from-transparent via-neutral-200 to-[99%] to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700 '>
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[0%] from-purple-500 via-[10%] via-blue-500 to-transparent'
          />
        </div>
      </div>
    </div>
  )
}
