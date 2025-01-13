'use client'

import { LogoCarousel } from '@/components/ui/logo-carousel'
import Image from 'next/image'
import React, { type SVGProps } from 'react'

function AppleIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="209"
			height="256"
			viewBox="0 0 814 1000"
			fill="#FFFFFF"
			{...props}
		>
			<path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
		</svg>
	)
}

function DockerIcon() {
	return (
		<Image
			src="https://www.docker.com/wp-content/uploads/2024/01/icon-docker-square.svg"
			alt="Docker"
			fill
			priority={true}
		/>
	)
}

function VercelIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 256 222"
			width="150"
			height="150"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid"
			{...props}
		>
			<path fill="#FFFFFF" d="m128 0 128 221.705H0z" />
		</svg>
	)
}

const TypeScriptIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 256 256"
		width={150}
		height={150}
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid"
		{...props}
	>
		<path
			d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
			fill="#3178C6"
		/>
		<path
			d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"
			fill="#FFF"
		/>
	</svg>
)

function SupabaseIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 109 113"
			width="80"
			height="90"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347Z"
				fill="url(#a)"
			/>
			<path
				d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347Z"
				fill="url(#b)"
				fillOpacity=".2"
			/>
			<path
				d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072Z"
				fill="#3ECF8E"
			/>
			<defs>
				<linearGradient
					id="a"
					x1="53.974"
					y1="54.974"
					x2="94.163"
					y2="71.829"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#249361" />
					<stop offset="1" stopColor="#3ECF8E" />
				</linearGradient>
				<linearGradient
					id="b"
					x1="36.156"
					y1="30.578"
					x2="54.484"
					y2="65.081"
					gradientUnits="userSpaceOnUse"
				>
					<stop />
					<stop offset="1" stopOpacity="0" />
				</linearGradient>
			</defs>
		</svg>
	)
}

const TailwindCSSIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 54 33"
		{...props}
	>
		<g clipPath="url(#prefix__clip0)">
			<path
				fill="#38bdf8"
				fillRule="evenodd"
				d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
				clipRule="evenodd"
			/>
		</g>
		<defs>
			<clipPath id="prefix__clip0">
				<path fill="#fff" d="M0 0h54v32.4H0z" />
			</clipPath>
		</defs>
	</svg>
)

const NextjsIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={120}
		height={120}
		viewBox="0 0 180 180"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<mask
			id="mask0_408_139"
			style={{
				maskType: 'alpha',
			}}
			maskUnits="userSpaceOnUse"
			x={0}
			y={0}
			width={180}
			height={180}
		>
			<circle cx={90} cy={90} r={90} fill="black" />
		</mask>
		<g mask="url(#mask0_408_139)">
			<circle
				cx={90}
				cy={90}
				r={87}
				fill="black"
				stroke="white"
				strokeWidth={6}
			/>
			<path
				d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
				fill="url(#paint0_linear_408_139)"
			/>
			<rect
				x={115}
				y={54}
				width={12}
				height={72}
				fill="url(#paint1_linear_408_139)"
			/>
		</g>
		<defs>
			<linearGradient
				id="paint0_linear_408_139"
				x1={109}
				y1={116.5}
				x2={144.5}
				y2={160.5}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="white" />
				<stop offset={1} stopColor="white" stopOpacity={0} />
			</linearGradient>
			<linearGradient
				id="paint1_linear_408_139"
				x1={121}
				y1={54}
				x2={120.799}
				y2={106.875}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="white" />
				<stop offset={1} stopColor="white" stopOpacity={0} />
			</linearGradient>
		</defs>
	</svg>
)

const AndroidIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="100" height="70" fill="none">
		<g clipPath="url(#a)">
			<mask
				id="b"
				width="77"
				height="46"
				x="10"
				y="25"
				maskUnits="userSpaceOnUse"
			>
				<path
					fill="#8BD8A0"
					d="M86.518 65.477a38.874 38.874 0 0 0-3.295-8.737 39.093 39.093 0 0 0-9.17-11.568 39.181 39.181 0 0 0-4.862-3.579c.015-.025.028-.051.044-.076.784-1.355 1.571-2.709 2.356-4.064a51369.546 51369.546 0 0 1 3.956-6.821 3.58 3.58 0 0 0-1.264-4.866 3.607 3.607 0 0 0-2.195-.484 3.572 3.572 0 0 0-2.726 1.761c-.552.95-1.104 1.902-1.653 2.852l-2.304 3.97-2.356 4.064c-.085.148-.173.295-.258.445-.12-.047-.237-.095-.356-.14a39.039 39.039 0 0 0-13.932-2.552c-.135 0-.267 0-.402.002a39.053 39.053 0 0 0-12.468 2.163c-.453.158-.9.324-1.344.499l-.241-.415c-.785-1.356-1.572-2.71-2.357-4.065l-2.303-3.97-1.653-2.85a3.572 3.572 0 0 0-3.4-1.767 3.554 3.554 0 0 0-1.521.489 3.561 3.561 0 0 0-1.627 2.153 3.58 3.58 0 0 0 .362 2.713c.552.95 1.104 1.901 1.653 2.851l2.304 3.97c.784 1.355 1.571 2.709 2.356 4.064l.019.034a39.299 39.299 0 0 0-11.259 10.561 38.926 38.926 0 0 0-6.135 13.367C9.833 68.157 12 70.56 14.756 70.56h67.487c2.756 0 4.932-2.406 4.276-5.083Z"
				/>
			</mask>
			<g mask="url(#b)">
				<path fill="url(#c)" d="M87.83 23.827H4.77v46.731H87.83v-46.73Z" />
				<g filter="url(#d)" opacity=".8">
					<path
						fill="url(#e)"
						fillOpacity=".4"
						d="M51.345 38.826c8.232 5.806-14.937 6.444-23.888 19.133-8.95 12.69-1.776 34.73-10.008 28.924-5.083-6.97-5.857-21.11 3.094-33.8 8.95-12.69 23.82-16.86 30.802-14.257Z"
					/>
				</g>
				<g filter="url(#f)" opacity=".7">
					<path
						fill="url(#g)"
						fillOpacity=".4"
						d="M48.862 39.06c-7.532 5.448 13.667 6.047 21.857 17.955 8.19 11.908 1.625 32.59 9.157 27.142 4.65-6.541 5.358-19.81-2.831-31.718-8.19-11.909-21.794-15.821-28.183-13.38Z"
					/>
				</g>
				<g filter="url(#h)" opacity=".6">
					<path
						fill="#8BD8A0"
						d="M8.543 59.591c-3.162 9.948-4.79 18.31-3.637 18.676 1.154.367 4.653-7.4 7.815-17.348 3.162-9.947 16.205-20.794 15.052-21.16-1.154-.367-16.068 9.885-19.23 19.832Z"
					/>
				</g>
				<g filter="url(#i)" opacity=".5">
					<path
						fill="#8BD8A0"
						d="M87.998 59.591c3.162 9.948 4.79 18.31 3.637 18.676-1.153.367-4.652-7.4-7.814-17.348-3.162-9.947-16.206-20.794-15.052-21.16 1.153-.367 16.067 9.885 19.23 19.832Z"
					/>
				</g>
				<g filter="url(#j)" opacity=".1">
					<path
						fill="#202124"
						d="M29.462 41.488c.374-.245-1.604-3.932-4.418-8.236s-5.398-7.595-5.773-7.35c-.374.244 1.604 3.932 4.418 8.236s5.398 7.595 5.773 7.35Z"
					/>
				</g>
				<g filter="url(#k)" opacity=".3">
					<path
						fill="#fff"
						d="M28.296 30.445c3.276 5.38 4.874 7.846 5.238 7.624.364-.221-.644-3.045-3.92-8.426-3.158-7.186-8.855-2.9-8.293-2.115 1.095 2.107 2.787-4.626 6.975 2.917Z"
					/>
				</g>
				<path
					fill="url(#l)"
					fillOpacity=".9"
					d="M19.173 28.582c.59 2.041 3.018 3.133 5.42 2.438 2.403-.696 3.871-2.915 3.28-4.957-.59-2.041-3.017-3.133-5.42-2.438-2.403.696-3.871 2.915-3.28 4.957Z"
					opacity=".15"
				/>
				<path
					fill="url(#m)"
					fillOpacity=".9"
					d="M68.855 28.808c.59 2.042 3.018 3.134 5.42 2.438 2.403-.695 3.871-2.914 3.28-4.956-.59-2.042-3.017-3.133-5.42-2.438-2.403.695-3.871 2.914-3.28 4.956Z"
					opacity=".15"
				/>
				<g filter="url(#n)" opacity=".1">
					<path
						fill="#202124"
						d="M67.312 41.754c-.379-.239 1.54-3.958 4.283-8.307 2.744-4.349 5.275-7.681 5.653-7.442.378.238-1.54 3.957-4.284 8.306-2.743 4.349-5.274 7.681-5.653 7.443Z"
					/>
				</g>
				<mask
					id="o"
					width="14"
					height="10"
					x="61"
					y="33"
					maskUnits="userSpaceOnUse"
				>
					<path
						fill="#000"
						d="M69.551 41.825c-1.843-1.15-6.051-3.123-7.925-3.966l1.238-4.382 12.1 4.869c-1.036 1.639-3.57 4.628-5.413 3.48Z"
					/>
				</mask>
				<g filter="url(#p)" mask="url(#o)" opacity=".3">
					<path
						fill="#81C995"
						d="M64.027 38.53c-.918-.452-1.734-.672-1.822-.493-.088.18.6.564 1.518 1.015.919.451 1.72.798 1.808.62.088-.18-.585-.691-1.504-1.143Z"
					/>
				</g>
				<mask
					id="q"
					width="14"
					height="10"
					x="21"
					y="33"
					maskUnits="userSpaceOnUse"
				>
					<path
						fill="#000"
						d="M27.018 42.184c1.819-1.187 5.986-3.247 7.842-4.128L33.53 33.7l-11.997 5.117c1.07 1.617 3.665 4.554 5.483 3.367Z"
					/>
				</mask>
				<g filter="url(#r)" mask="url(#q)" opacity=".3">
					<path
						fill="#81C995"
						d="M32.47 38.778c.909-.47 1.72-.707 1.812-.53.091.178-.589.577-1.498 1.047s-1.702.833-1.794.656c-.092-.178.57-.703 1.48-1.173Z"
					/>
				</g>
				<g filter="url(#s)" opacity=".3">
					<path
						fill="#fff"
						d="M68.66 30.732c-3.064 5.307-4.567 7.737-4.955 7.514-.387-.224.49-3.016 3.553-8.323 3.493-9.22 10.415-8.002 9.28-2.962-.896 2.071-3.998-3.672-7.878 3.771Z"
					/>
				</g>
			</g>
			<path
				fill="url(#t)"
				fillOpacity=".7"
				d="M32.57 56.383c.472-.534.074-1.666-.887-2.53-.96-.864-2.121-1.132-2.592-.599-.47.533-.074 1.666.887 2.53.961.864 2.122 1.132 2.593.599Z"
			/>
			<path
				fill="url(#u)"
				fillOpacity=".7"
				d="M65.59 55.02c.962-.865 1.36-1.997.888-2.53-.47-.534-1.631-.266-2.592.598-.961.864-1.358 1.997-.888 2.53.471.533 1.632.265 2.593-.599Z"
			/>
			<path
				fill="#011B04"
				d="M33.203 59.112c1.165-2.91-.058-4.703-.815-5.26-2.185-2.705-5.127-.618-6 .558-.875 1.146-2.156 3.203-.904 6.025 1.253 2.821 6.263 2.322 7.72-1.323ZM63.408 59.177c-1.165-2.88.058-4.703.816-5.232 2.184-2.704 5.126-.617 6 .558.874 1.147 2.156 3.204.903 5.996-1.252 2.792-6.263 2.322-7.719-1.293v-.03Z"
				opacity=".09"
			/>
			<path
				fill="#202124"
				d="M69.993 61.169c1.806-1.205 2.097-3.997.64-6.202-1.456-2.204-4.106-2.998-5.912-1.792-1.806 1.205-2.098 3.997-.641 6.201 1.456 2.205 4.107 2.998 5.913 1.793Z"
			/>
			<path
				fill="#000"
				d="M32.507 59.284c1.456-2.205 1.194-4.938-.583-6.143-1.777-1.176-4.37-.353-5.826 1.822-1.456 2.205-1.194 4.938.583 6.143 1.777 1.176 4.37.353 5.826-1.822ZM64.084 59.318c-1.456-2.204-1.194-4.938.583-6.143 1.777-1.176 4.369-.353 5.826 1.822 1.456 2.205 1.194 4.938-.583 6.143-1.777 1.176-4.37.353-5.826-1.822Z"
			/>
			<path
				fill="url(#v)"
				d="M33.02 54.982c-.84-2.363-2.806-2.389-3.685-2.117.744-.435 2.182-.146 2.865.49.523.506.785 1.306.851 1.653l-.032-.026Z"
				opacity=".8"
			/>
			<path
				fill="url(#w)"
				d="M66.359 53.06c-2.068.118-2.738 1.764-2.826 2.557.204-.5.962-1.528 2.272-1.793 1.311-.235 3.03 1.264 3.729 2.058l.64-.735c-.407-.764-1.747-2.234-3.815-2.087Z"
			/>
			<path
				fill="#000"
				d="M69.968 54.763c1.398 1.705 1.544 3.733 1.37 4.585.349-1.675.232-3.292-1.108-4.938-.728-.911-1.864-1.41-2.68-1.646-.116-.03-.262-.059-.35-.088a1.949 1.949 0 0 0-.494-.088c.145.03.32.059.495.088.116 0 .233.059.35.088.582.206 1.368.647 2.446 1.999h-.029Z"
			/>
			<path
				fill="#E2DCE1"
				d="M28.45 54.067c-.816.177-1.428 1.03-1.602 1.44l.407.618s.292-.5.612-.823c.32-.324.816-.676 1.02-.823l-.408-.412h-.03ZM68.16 54.088c.787.147 1.399.97 1.603 1.381l-.408.588s-.291-.47-.612-.793c-.32-.324-.786-.647-.99-.794l.407-.382Z"
				opacity=".8"
			/>
			<g fill="#E2DCE1" opacity=".8">
				<path d="M31.772 58.47c-.379.206-.99.5-1.252.617l-.233.705a3.822 3.822 0 0 0 1.223-.705l.262-.617ZM32.993 55.38a4.641 4.641 0 0 0-.233-.617v.264c.117.206.204.588.233.764 0-.058.059-.235 0-.44v.029Z" />
			</g>
			<g fill="#E2DCE1" opacity=".8">
				<path d="M64.757 58.53c.378.205.99.499 1.252.617l.233.705a3.82 3.82 0 0 1-1.223-.705l-.262-.618ZM63.559 55.44c.058-.205.175-.5.233-.617v.265c-.117.206-.204.588-.233.764 0-.059-.058-.235 0-.44v.029Z" />
			</g>
		</g>
		<defs>
			<filter
				id="d"
				width="47.472"
				height="57.835"
				x="9.655"
				y="34.046"
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur
					result="effect1_foregroundBlur_18016_147346"
					stdDeviation="2.021"
				/>
			</filter>
			<filter
				id="f"
				width="44.123"
				height="54.771"
				x="43.228"
				y="34.325"
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur
					result="effect1_foregroundBlur_18016_147346"
					stdDeviation="2.021"
				/>
			</filter>
			<filter
				id="h"
				width="61.339"
				height="76.559"
				x="-14.479"
				y="20.735"
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur
					result="effect1_foregroundBlur_18016_147346"
					stdDeviation="9.507"
				/>
			</filter>
			<filter
				id="i"
				width="61.338"
				height="76.559"
				x="49.682"
				y="20.735"
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur
					result="effect1_foregroundBlur_18016_147346"
					stdDeviation="9.507"
				/>
			</filter>
			<filter
				id="j"
				width="14.323"
				height="19.654"
				x="17.205"
				y="23.868"
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur
					result="effect1_foregroundBlur_18016_147346"
					stdDeviation="1.011"
				/>
			</filter>
			<filter
				id="k"
				width="50.351"
				height="50.567"
				x="2.268"
				y="6.53"
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur
					result="effect1_foregroundBlur_18016_147346"
					stdDeviation="9.507"
				/>
			</filter>
			<filter
				id="n"
				width="14.074"
				height="19.816"
				x="65.243"
				y="23.971"
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur
					result="effect1_foregroundBlur_18016_147346"
					stdDeviation="1.011"
				/>
			</filter>
			<filter
				id="p"
				width="7.383"
				height="5.787"
				x="60.176"
				y="35.954"
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur
					result="effect1_foregroundBlur_18016_147346"
					stdDeviation="1.011"
				/>
			</filter>
			<filter
				id="r"
				width="7.35"
				height="5.849"
				x="28.961"
				y="36.168"
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur
					result="effect1_foregroundBlur_18016_147346"
					stdDeviation="1.011"
				/>
			</filter>
			<filter
				id="s"
				width="29.211"
				height="31.354"
				x="55.535"
				y="14.99"
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur
					result="effect1_foregroundBlur_18016_147346"
					stdDeviation="4.042"
				/>
			</filter>
			<radialGradient
				id="c"
				cx="0"
				cy="0"
				r="1"
				gradientTransform="matrix(-.81905 35.21948 -55.91098 -1.30024 48.088 56.388)"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset=".307" stopColor="#4FAF53" />
				<stop offset="1" stopColor="#118016" />
				<stop offset="1" stopColor="#4FAF53" stopOpacity="0" />
			</radialGradient>
			<radialGradient
				id="l"
				cx="0"
				cy="0"
				r="1"
				gradientTransform="rotate(163.34 9.761 15.383)scale(2.84692 2.06303)"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#fff" />
				<stop offset=".948" stopColor="#fff" stopOpacity="0" />
			</radialGradient>
			<radialGradient
				id="m"
				cx="0"
				cy="0"
				r="1"
				gradientTransform="rotate(163.34 34.586 19.134)scale(2.84692 2.06303)"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#fff" />
				<stop offset=".948" stopColor="#fff" stopOpacity="0" />
			</radialGradient>
			<radialGradient
				id="t"
				cx="0"
				cy="0"
				r="1"
				gradientTransform="rotate(132.973 4.405 34.714)scale(1.00274 1.82527)"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#93E19F" />
				<stop offset="1" stopColor="#93E19F" stopOpacity="0" />
			</radialGradient>
			<radialGradient
				id="u"
				cx="0"
				cy="0"
				r="1"
				gradientTransform="matrix(.68292 .73303 -1.33486 1.2436 65.193 53.949)"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#93E19F" />
				<stop offset="1" stopColor="#93E19F" stopOpacity="0" />
			</radialGradient>
			<linearGradient
				id="e"
				x1="20.102"
				x2="31.602"
				y1="52.772"
				y2="60.883"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#A8F0B9" />
				<stop offset="1" stopColor="#ADEEBC" stopOpacity="0" />
			</linearGradient>
			<linearGradient
				id="g"
				x1="76.156"
				x2="66.79"
				y1="53.619"
				y2="59.542"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#A8F0B9" />
				<stop offset="1" stopColor="#ADEEBC" stopOpacity="0" />
			</linearGradient>
			<linearGradient
				id="v"
				x1="30.847"
				x2="31.361"
				y1="51.668"
				y2="55.071"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#E2DDE2" />
				<stop offset="1" stopColor="#E2DDE2" stopOpacity="0" />
			</linearGradient>
			<linearGradient
				id="w"
				x1="66.854"
				x2="66.854"
				y1="53.06"
				y2="55.882"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#373637" />
				<stop offset="1" stopColor="#373637" stopOpacity="0" />
			</linearGradient>
			<clipPath id="a">
				<path fill="#fff" d="M.5 0h96v96H.5z" />
			</clipPath>
		</defs>
	</svg>
)

const FirebaseIcon = () => (
	<svg
		fill="none"
		height="80"
		width="60"
		viewBox="0 0 73 91"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M22.5752 87.933C26.3634 89.4568 30.4722 90.3615 34.7873 90.5132C40.6261 90.717 46.1816 89.5089 51.1455 87.2147C45.1923 84.8757 39.8009 81.4554 35.1974 77.2024C32.2171 81.9798 27.805 85.7506 22.5752 87.933Z"
			fill="#FF9100"
		/>
		<path
			d="M35.1996 77.2049C24.6952 67.4909 18.3219 53.4295 18.8613 38.0059C18.8787 37.5063 18.906 37.0042 18.9359 36.5046C17.0542 36.0174 15.0905 35.7216 13.0697 35.6495C10.1764 35.5476 7.37501 35.908 4.73026 36.6512C1.92643 41.5629 0.233686 47.1979 0.0224039 53.2356C-0.521958 68.8158 8.90619 82.4273 22.5749 87.9331C27.8047 85.7532 32.2168 81.9849 35.1996 77.2049Z"
			fill="#FFC400"
		/>
		<path
			d="M35.1998 77.2047C37.6433 73.2973 39.1222 68.7137 39.2962 63.7772C39.7486 50.792 31.019 39.6214 18.9361 36.5044C18.9063 37.004 18.8789 37.5061 18.8615 38.0057C18.3246 53.4268 24.6954 67.4883 35.1998 77.2047Z"
			fill="#FF9100"
		/>
		<path
			d="M37.9435 0C31.0632 5.51321 25.6271 12.7813 22.341 21.1555C20.4594 25.9529 19.2762 31.1032 18.9307 36.5045C31.0135 39.6216 39.7432 50.7922 39.2883 63.7798C39.1168 68.7163 37.6304 73.2949 35.1919 77.2074C39.7929 81.4653 45.1868 84.8806 51.14 87.2196C63.0911 81.6965 71.5697 69.81 72.0594 55.7511C72.3775 46.6411 68.8777 38.5229 63.9337 31.6699C58.7113 24.4242 37.9435 0 37.9435 0Z"
			fill="#DD2C00"
		/>
	</svg>
)

const AzureIcon = () => (
	<Image
		src="https://www.docker.com/wp-content/uploads/2023/10/logo-azure-1.svg"
		alt="Azure"
		fill
	/>
)

const VueIcon = () => (
	<svg viewBox="0 0 128 128" width="80" height="80">
		<path
			fill="#42b883"
			d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
		/>
		<path
			fill="#35495e"
			d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
		/>
	</svg>
)

const AngularIcon = () => (
	<Image
		src="https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif"
		alt="Angular"
		width={100}
		height={100}
		priority={true}
	/>
)

// Массив с логотипами
const allLogos = [
	{ name: 'Apple', id: 1, img: AppleIcon },
	{ name: 'CEO Supabase', id: 2, img: SupabaseIcon },
	{ name: 'Vercel', id: 3, img: VercelIcon },
	{ name: 'Nextjs', id: 4, img: NextjsIcon },
	{ name: 'Tailwind', id: 5, img: TailwindCSSIcon },
	{ name: 'Typescript', id: 6, img: TypeScriptIcon },
	{ name: 'Android', id: 7, img: AndroidIcon },
	{ name: 'Firebase', id: 8, img: FirebaseIcon },
	{ name: 'Azure', id: 9, img: AzureIcon },
	{ name: 'Docker', id: 10, img: DockerIcon },
	{ name: 'Vue', id: 11, img: VueIcon },
	{ name: 'Angular', id: 12, img: AngularIcon },
]

export function SkillTreeTechs() {
	return (
		<div className="mx-auto flex h-full w-full flex-col items-center space-y-8">
			<LogoCarousel columnCount={3} logos={allLogos} className="gap-4" />
		</div>
	)
}
