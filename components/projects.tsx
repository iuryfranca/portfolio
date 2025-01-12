import { HeroVideoDialog } from '@/components/ui/hero-video-dialog'
import { Timeline } from '@/components/ui/timeline'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { BlurFade } from './ui/blur-fade'
import { FeaturesSectionWithHoverEffects } from './ui/feature-section-with-hover-effects'
import { Separator } from './ui/separator'

export function Projects() {
	const data = [
		{
			title: '2022',
			content: (
				<div className="flex flex-col gap-8">
					<BlurFade delay={0.25} inView>
						<div className="flex flex-col">
							<div className="flex flex-col gap-2">
								<h2 className="w-full max-w-4xl font-semibold text-lg md:text-3xl mb-3">
									the-movie-db-challenge-next-13
								</h2>

								<p className="text-muted-foreground text-xs md:text-sm font-normal mb-8">
									Nesse projeto eu estava reaprendendo desenvolvimento web
									depois de 1 ano longe da área. Coloquei todo o meu foco em
									tecnologias mais populares da época e fiz esse pequeno e
									simples projeto para praticar e aprender.
								</p>
							</div>

							<div className="grid grid-rows-2 md:grid-cols-2 gap-4 md:grid-rows-none">
								<HeroVideoDialog
									animationStyle="from-center"
									videoSrc="https://ik.imagekit.io/iurygfranca/the-movie-next-13/the-movie-next-13-apresentacao.mp4"
									thumbnailSrc="https://ik.imagekit.io/iurygfranca/the-movie-next-13/the-movie-next-13-apresentacao.mp4/ik-thumbnail.jpg"
									thumbnailAlt="Hero Video"
								/>

								<FeaturesSectionWithHoverEffects
									features={[
										{
											title: 'Github',
											description: 'Acessar o repositório do projeto',
											icon: <Github />,
											link: 'https://github.com/iuryfranca/the-movie-db-challenge-next-13',
										},
									]}
								/>
							</div>
						</div>
					</BlurFade>

					<Separator />

					<BlurFade delay={0.25} inView>
						<div className="flex flex-col">
							<div className="flex flex-col gap-2">
								<h2 className="w-full max-w-4xl font-semibold text-lg md:text-3xl mb-3">
									the-movie-db-challenge-vue3
								</h2>

								<p className="text-muted-foreground text-xs md:text-sm font-normal mb-8">
									A ideia foi fazer a mesma aplicação do projeto anterior, mas
									agora em Vue 3.
								</p>
							</div>

							<div className="grid grid-rows-2 md:grid-cols-2 gap-4 md:grid-rows-none">
								<HeroVideoDialog
									animationStyle="from-center"
									videoSrc="https://ik.imagekit.io/iurygfranca/the-movie-vuejs/the-movie-vue-apresentacao.mp4"
									thumbnailSrc="https://ik.imagekit.io/iurygfranca/the-movie-vuejs/the-movie-vue-apresentacao.mp4/ik-thumbnail.jpg"
									thumbnailAlt="Hero Video"
								/>
								<FeaturesSectionWithHoverEffects
									features={[
										{
											title: 'Github',
											description: 'Acessar o repositório do projeto',
											icon: <Github />,
											link: 'https://github.com/iuryfranca/the-movie-db-challenge-vue3',
										},
									]}
								/>
							</div>
						</div>
					</BlurFade>
				</div>
			),
		},
		{
			title: 'Começo de 2023',
			content: (
				<div className="flex flex-col gap-8">
					<BlurFade delay={0.25} inView>
						<div className="flex flex-col">
							<div className="flex flex-col gap-2">
								<h2 className="w-full max-w-4xl font-semibold text-lg md:text-3xl mb-3">
									project-x
								</h2>

								<p className="text-muted-foreground text-xs md:text-sm font-normal">
									Aqui eu fui um pouco mais audacioso e fiz um projeto um pouco
									mais complexo. Tentei fazer uma E-commerce com Next.js 14. O
									objetivo era para usa aplicação onde o clinete pudesse
									escolher o produto, adicionar ao carrinho e finalizar a
									compra.
								</p>
								<p className="text-muted-foreground text-xs md:text-sm font-normal mb-8">
									Para isso fiz uma integração com a API do Firebase para usar o
									Storage, Auth e Firestore. Com isso o clinete poderia ter sua
									conta, com itens no carrinho e items favoritados.
								</p>
							</div>

							<div className="grid grid-rows-2 md:grid-cols-2 gap-4 md:grid-rows-none">
								<HeroVideoDialog
									animationStyle="from-center"
									videoSrc="https://ik.imagekit.io/iurygfranca/project-x/project-x-apresentacao.mp4"
									thumbnailSrc="https://ik.imagekit.io/iurygfranca/project-x/project-x-apresentacao.mp4/ik-thumbnail.jpg"
									thumbnailAlt="Hero Video"
								/>
								<HeroVideoDialog
									animationStyle="from-center"
									videoSrc="https://ik.imagekit.io/iurygfranca/project-x/project-x-listagem-items.mp4"
									thumbnailSrc="https://ik.imagekit.io/iurygfranca/project-x/project-x-listagem-items.mp4/ik-thumbnail.jpg"
									thumbnailAlt="Hero Video"
								/>
								<HeroVideoDialog
									animationStyle="from-center"
									videoSrc="https://ik.imagekit.io/iurygfranca/project-x/project-x-login-and-favorite.mp4"
									thumbnailSrc="https://ik.imagekit.io/iurygfranca/project-x/project-x-login-and-favorite.mp4/ik-thumbnail.jpg"
									thumbnailAlt="Hero Video"
								/>

								<FeaturesSectionWithHoverEffects
									features={[
										{
											title: 'Github',
											description: 'Acessar o repositório do projeto',
											icon: <Github />,
											link: 'https://github.com/iuryfranca/project-x-features',
										},
									]}
								/>
							</div>
						</div>
					</BlurFade>

					<Separator />

					<BlurFade delay={0.25} inView>
						<div className="flex flex-col">
							<div className="flex flex-col gap-2">
								<h2 className="w-full max-w-4xl font-semibold text-lg md:text-3xl mb-3">
									the-movie-db-challenge-vue3
								</h2>

								<p className="text-muted-foreground text-xs md:text-sm font-normal mb-8">
									A ideia foi fazer a mesma aplicação do projeto anterior, mas
									agora em Vue 3.
								</p>
							</div>

							<div className="relative flex flex-col gap-4">
								<HeroVideoDialog
									animationStyle="from-center"
									videoSrc="https://ik.imagekit.io/iurygfranca/the-movie-vuejs/the-movie-vue-apresentacao.mp4"
									thumbnailSrc="https://ik.imagekit.io/iurygfranca/the-movie-vuejs/the-movie-vue-apresentacao.mp4/ik-thumbnail.jpg"
									thumbnailAlt="Hero Video"
								/>
							</div>
						</div>
					</BlurFade>
				</div>
			),
		},
		{
			title: '2024',
			content: (
				<div className="flex flex-col gap-8">
					<BlurFade delay={0.25} inView>
						<div className="flex flex-col">
							<div className="flex flex-col gap-2">
								<h2 className="w-full max-w-4xl font-semibold text-lg md:text-3xl mb-3">
									Gcom Portal de Avaliações
								</h2>

								<p className="text-muted-foreground text-xs md:text-sm font-normal">
									Esse foi um projeto interno da Gcom. O objetivo era criar um
									portal para avaliações de clientes. Como nossos clientes são
									outras empresas de franquia, precisávamos de SaaS para que o
									dono de várias franquias conseguisse visualizar e editar as
									avaliações e suas configurações em um só lugar.
								</p>
							</div>

							<div className="grid grid-rows-2 md:grid-cols-2 gap-4 md:grid-rows-none">
								<HeroVideoDialog
									animationStyle="from-center"
									videoSrc="https://ik.imagekit.io/iurygfranca/gcom-portal/gcom-portal-avaliacao-fluxo-lista-avaliacoes.mp4"
									thumbnailSrc="https://ik.imagekit.io/iurygfranca/gcom-portal/gcom-portal-avaliacao-fluxo-lista-avaliacoes.mp4/ik-thumbnail.jpg"
									thumbnailAlt="Hero Video"
								/>
								<Image
									src="https://ik.imagekit.io/iurygfranca/gcom-portal/gcom-portal-avaliacao-personalizacao-avaliacao.png"
									alt="Hero Video"
									width={1000}
									height={400}
								/>
								<Image
									src="https://ik.imagekit.io/iurygfranca/gcom-portal/gcom-portal-avaliacao-personalizacao-email.png"
									alt="Hero Video"
									width={1000}
									height={400}
								/>

								<FeaturesSectionWithHoverEffects
									features={[
										{
											title: 'GCOM',
											description: 'Saiba mais sobre a GCOM',
											icon: <ExternalLink />,
											link: 'https://gcom.com.br/saas/',
										},
									]}
								/>
							</div>
						</div>
					</BlurFade>

					<Separator />
				</div>
			),
		},
	]
	return (
		<div className="relative h-full w-full" id="projects" data-section>
			<Timeline data={data} />
		</div>
	)
}
