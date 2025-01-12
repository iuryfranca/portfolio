import { cn } from '@/lib/utils'

export interface Feature {
	title: string
	description: string
	icon: React.ReactNode
	link: string
}

interface FeaturesSectionWithHoverEffectsProps {
	features: Feature[]
	className?: string
}

export function FeaturesSectionWithHoverEffects({
	features,
	className,
}: FeaturesSectionWithHoverEffectsProps) {

	return (
		<div
			className={cn(
				'relative z-10 flex w-full gap-4',
				className,
			)}>
			{features.map((feature, index) => (
				<Feature key={feature.title} {...feature} index={index} />
			))}
		</div>
	)
}

const Feature = ({
	title,
	description,
	icon,
	index,
	link,
}: {
	title: string
	description: string
	icon: React.ReactNode
	index: number
	link: string
}) => {
	return (
		<div
			className={cn(
				'group/feature relative flex w-full flex-col justify-center rounded-md border pr-2 py-2 dark:border-neutral-800',
				(index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
				index < 4 && 'lg:border-b dark:border-neutral-800',
				link && 'cursor-pointer',
			)}
		>
			{link ? (
				<a href={link} target="_blank" rel="noopener noreferrer">
					{index < 4 && (
						<div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
					)}
					{index >= 4 && (
						<div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
					)}
					<div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
						{icon}
					</div>
					<div className="relative z-10 mb-2 px-10 font-bold text-lg">
						<div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" />
						<span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
							{title}
						</span>
					</div>
					<p className="relative z-10 max-w-xs px-10 text-neutral-600 text-sm dark:text-neutral-300">
						{description}
					</p>
				</a>
			) : (
				<>
					{index < 4 && (
						<div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
					)}
					{index >= 4 && (
						<div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
					)}
					<div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
						{icon}
					</div>
					<div className="relative z-10 mb-2 px-10 font-bold text-lg">
						<div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" />
						<span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
							{title}
						</span>
					</div>
					<p className="relative z-10 max-w-xs px-10 text-neutral-600 text-sm dark:text-neutral-300">
						{description}
					</p>
				</>
			)}
		</div>
	)
}
