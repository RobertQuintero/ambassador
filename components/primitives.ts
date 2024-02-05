
import { tv } from "tailwind-variants";

export const title = tv({
	base: "tracking-tight inline font-semibold text-left ",
	variants: {
		color: {
			violet: "from-[#FF1CF7] to-[#b249f8]",
			yellow: "from-warning-400 to-warning-400/5",
			yellow2: "from-warning-500 to-warning/20",
			blue: "from-[#5EA2EF] to-[#0072F5]",
			cyan: "from-[#00b7fa] to-[#01cfea]",
			green: "from-[#6FEE8D] to-[#17c964]",
			pink: "from-[#FF72E1] to-[#F54C7A]",
			foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
		},
		size: {
			sm: "text-sm  md:text-base ",
			md: "text-base md:text-lg ",
			lg: "text-xl md:text-2xl leading-6 2xl:leading-7 pb-1 ",
			xl: "text-3xl md:text-4xl",
			v2xl: "text-2xl md:text-3xl",
			xxl: "text-4xl md:text-5xl scroll-m-20 pb-[0.5rem]  font-bold",
			xxxl: "text-4xl md:text-5xl 2xl:text-6xl font-bold",
		},
	},
	defaultVariants: {
		size: "sm",
	},
	compoundVariants: [
		{
			color: [
				"violet",
				"yellow",
				"yellow2",
				"blue",
				"cyan",
				"green",
				"pink",
				"foreground",
			],
			class: "bg-clip-text text-transparent bg-gradient-to-b",
		},
	],
});

export const paragraph = tv({
	base: " md:leading-8 leading-7 text-default-600 text-left ",
	variants: {
		size: {
				xs: "text-xs md:text-sm xl:leading-5 md:leading-5 leading-4",
				sm: "text-sm  md:text-base ",
				md: "text-base md:text-lg ",
				lg: "text-lg md:text-xl 2xl:leading-8 leading-7 ",
				xl: "text-xl md:text-2xl",
		},
	},
  defaultVariants:{
    size: "sm"
  }
});

export const descriptionShort = tv({
	base: "leading-7 text-default-500 ",
	variants: {
		size: {
				sm: "text-sm md:text-base line-clamp-2 ",
				md: "text-base md:text-lg line-clamp-3 ",
				lg: "text-lg md:text-xl line-clamp-3",
		},
	},
  defaultVariants:{
    size: "md"
  }
});

export const subtitle = tv({
	base: "",
	variants: {
		size: {
				sm: "text-sm sm:text-base 2xl:text-lg line-clamp-3 ",
		},
	},
  defaultVariants:{
    size: "sm"
  }
});




