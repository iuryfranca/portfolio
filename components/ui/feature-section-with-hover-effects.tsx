import { cn } from '@/lib/utils'

export interface Feature {
	title: string
	description: string
	icon: React.ReactNode
	link: string
}

export function FeaturesSectionWithHoverEffects({
	features,
}: {
	features: Feature[]
}) {
	// const features: Feature[] = [
	//   {
	//     title: "Ease of use",
	//     description:
	//       "It's as easy as using an Apple, and as expensive as buying one.",
	//     icon: <Eraser />,
	//   },
	//   {
	//     title: "Pricing like no other",
	//     description:
	//       "Our prices are best in the market. No cap, no lock, no credit card required.",
	//     icon: <DollarSign />,
	//   },
	//   {
	//     title: "100% Uptime guarantee",
	//     description: "We just cannot be taken down by anyone.",
	//     icon: <Cloud />,
	//   },
	//   {
	//     title: "Multi-tenant Architecture",
	//     description: "You can simply share passwords instead of buying new seats",
	//     icon: <AlertOctagon />,
	//   },
	//   {
	//     title: "24/7 Customer Support",
	//     description:
	//       "We are available a 100% of the time. Atleast our AI Agents are.",
	//     icon: <HeartPulse />,
	//   },
	//   {
	//     title: "Money back guarantee",
	//     description:
	//       "If you donot like EveryAI, we will convince you to like us.",
	//     icon: <LayoutDashboard />,
	//   },
	//   {
	//     title: "And everything else",
	//     description: "I just ran out of copy ideas. Accept my sincere apologies",
	//     icon: <FastForward />,
	//   },
	// ];

	return (
		<div className="relative z-10 flex w-full flex-row">
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
				'group/feature relative flex w-full flex-col justify-center rounded-md border dark:border-neutral-800',
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
