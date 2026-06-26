import { r as __exportAll } from "./rolldown-runtime_CE-6LUnI.mjs";
import { S as createComponent, g as addAttribute, h as renderHead, i as renderComponent, m as maybeRenderHead, s as renderSlot, u as renderTemplate, x as createAstro } from "./server_DSV3oLON.mjs";
import "./compiler_BWsBKgaK.mjs";
import { clsx } from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { jsx, jsxs } from "react/jsx-runtime";
import { Icon } from "@iconify/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ExternalLink, Github, XIcon } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
var translation_default$1 = {
	stacks: {
		"title": "My Stacks",
		"subtitle": "Tech Arsenal"
	},
	projects: {
		"title": "Projects",
		"subtitle": "Works Gallery",
		"button": "View Projects"
	},
	services: {
		"title": "Services",
		"subtitle": "Solutions Suite",
		"ui": "UI Research",
		"web": "Web Development",
		"seo": "SEO Optimization",
		"auth": "Auth Integrations",
		"api": "API Development",
		"maps": "Interactive Maps",
		"dashboard": "Dashboards Design",
		"deploy": "Deployments",
		"testing": "Testing"
	},
	profile: {
		"available": "Available To Work",
		"resume": "Resume",
		"emailMe": "Email Me",
		"whatsappMe": "WhatsApp Me",
		"badges": {
			"Argentina": "Argentina",
			"Frontend": "Frontend",
			"Backend": "Backend",
			"Coderhouse": "Coderhouse",
			"ifts": "IFTS N°11",
			"Español": "Spanish",
			"Ingles": "English",
			"inProcess": "(In process)"
		},
		"name": "Franco Galluccio",
		"roles": [
			"Designer",
			"Developer",
			"Freelancer",
			"Creator"
		],
		"imA": "I'm a"
	},
	clients: {
		"title": "My Clients",
		"subtitle": "Satisfied Partners"
	},
	testimonials: {
		"title": "Testimonials",
		"subtitle": "Rave Reviews Showcase"
	},
	follow: {
		"title": "Follow Me",
		"subtitle": "Online Presence",
		"linkedin": "Linkedin",
		"github": "Github",
		"email": "Email"
	},
	workProcess: {
		"title": "Work Process",
		"subtitle": "Workflow Highlights",
		"planning": "Planning & Organization",
		"problemSolving": "Problem Solving",
		"communication": "Communication",
		"continuousLearning": "Continuous Learning"
	},
	workTogether: {
		"title": "Let's Work Together",
		"subtitle": "Let's Make Magic Happen Together!",
		"email": "Email Me",
		"whatsapp": "WhatsApp Me"
	},
	indicators: {
		"projects": "Projects",
		"happyClients": "Happy Clients",
		"yearExpertise": "Year Expertise"
	}
};
var translation_default = {
	stacks: {
		"title": "Mis Stacks",
		"subtitle": "Arsenal Tecnológico"
	},
	projects: {
		"title": "Proyectos",
		"subtitle": "Galería de Trabajos",
		"button": "Ver proyectos"
	},
	services: {
		"title": "Servicios",
		"subtitle": "Suite de Soluciones",
		"ui": "Investigación UI",
		"web": "Desarrollo Web",
		"seo": "Optimización SEO",
		"auth": "Integraciones de Autenticación",
		"api": "Desarrollo de API",
		"maps": "Mapas Interactivos",
		"dashboard": "Diseño de Dashboards",
		"deploy": "Despliegues",
		"testing": "Testing"
	},
	profile: {
		"available": "Disponible para trabajar",
		"resume": "CV",
		"emailMe": "Email",
		"whatsappMe": "WhatsApp",
		"badges": {
			"Argentina": "Argentina",
			"Frontend": "Frontend",
			"Backend": "Backend",
			"Coderhouse": "Coderhouse",
			"ifts": "IFTS N°11",
			"Español": "Español",
			"Ingles": "Inglés",
			"inProcess": "(En proceso)"
		},
		"name": "Franco Galluccio",
		"roles": [
			"Diseñador",
			"Desarrollador",
			"Freelance",
			"Creador"
		],
		"imA": "Soy un"
	},
	clients: {
		"title": "Mis Clientes",
		"subtitle": "Socios Satisfechos"
	},
	testimonials: {
		"title": "Testimonios",
		"subtitle": "Opiniones Destacadas"
	},
	follow: {
		"title": "Sígueme",
		"subtitle": "Presencia Online",
		"linkedin": "Linkedin",
		"github": "Github",
		"email": "Correo"
	},
	workProcess: {
		"title": "Proceso de Trabajo",
		"subtitle": "Flujo de desarrollo",
		"planning": "Planificación y Organización",
		"problemSolving": "Resolución de Problemas",
		"communication": "Comunicación",
		"continuousLearning": "Aprendizaje Continuo"
	},
	workTogether: {
		"title": "Trabajemos Juntos",
		"subtitle": "¡Hagamos magia!",
		"email": "Email",
		"whatsapp": "WhatsApp"
	},
	indicators: {
		"projects": "Proyectos",
		"happyClients": "Clientes",
		"yearExpertise": "Años"
	}
};
//#endregion
//#region src/i18n/index.ts
i18n.use(initReactI18next);
function detectLang() {
	if (typeof window !== "undefined" && window.__LANG__ === "en") return "en";
	return "es";
}
function initI18n(lng) {
	i18n.init({
		resources: {
			en: { translation: translation_default$1 },
			es: { translation: translation_default }
		},
		lng,
		fallbackLng: "es",
		interpolation: { escapeValue: false }
	});
}
initI18n(detectLang());
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const lang = Astro.preferredLocale === "en" ? "en" : "es";
	initI18n(lang);
	return renderTemplate`<html${addAttribute(lang, "lang")}><head><meta charset="UTF-8"><link rel="icon" type="image/svg+xml" href="/react.svg"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta property="og:image" content="/assets/og-image.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:title" content="Franco Galluccio"><meta property="og:description" content="Hey! This is my personal Portoflio 🚀 ⚛"><meta property="og:type" content="website"><meta property="og:url" content="https://franngl.vercel.app/"><meta name="description" content="Hey! This is my personal Portoflio 🚀 ⚛"><meta name="keywords" content="Franco Galluccio, portfolio, developer, react"><meta name="author" content="Franco Galluccio"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="/assets/og-image.jpg"><meta name="twitter:title" content="Franco Galluccio"><meta name="twitter:description" content="Hey! This is my personal Portoflio 🚀 ⚛"><title>Franco Galluccio Portfolio 🚀 ⚛</title><script>
      window.__LANG__ = "{lang}";
    <\/script>${renderHead($$result)}</head><body class="dark font-raleway">${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/fgalluccio/Documents/Code/Personal/Personal-Portfolio-2025/src/layouts/Layout.astro", void 0);
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/card.tsx
function Card({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card",
		className: cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-1 shadow-sm", className),
		...props
	});
}
function CardContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-content",
		className: cn("px-1", className),
		...props
	});
}
//#endregion
//#region src/hooks/useMediaScreen.ts
function useMediaScreen(breakpoint = 768) {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
		const handleChange = () => setIsMobile(mq.matches);
		handleChange();
		mq.addEventListener("change", handleChange);
		return () => mq.removeEventListener("change", handleChange);
	}, [breakpoint]);
	return isMobile;
}
//#endregion
//#region src/components/custom/CustomCard.tsx
var CustomCard = ({ icon, text, techIcons, type = "default", href, width = "60", className }) => {
	const [isPaused, setIsPaused] = useState(false);
	const [isClicked, setIsClicked] = useState(false);
	const isMobile = useMediaScreen();
	const isStack = type === "stack";
	const isFollow = type === "follow" && href;
	const handleCardClick = (e) => {
		if (isMobile && isStack) {
			e.preventDefault();
			setIsClicked(!isClicked);
		}
	};
	const handleIconMouseEnter = () => {
		if (!isMobile) setIsPaused(true);
	};
	const handleIconMouseLeave = () => {
		if (!isMobile) setIsPaused(false);
	};
	const handleIconClick = (e) => {
		if (isMobile) {
			e.stopPropagation();
			setIsPaused(!isPaused);
		}
	};
	const content = /* @__PURE__ */ jsx(Card, {
		className: `group relative rounded-xl bg-[#191919] text-white shadow-sm border border-[#212121] transition-all duration-300 hover:bg-[#1f1f1f] hover:border-[#2a2a2a] hover:shadow-lg overflow-hidden ${width ?? "w-fit"} ${className ?? ""} ${isMobile && isStack ? "cursor-pointer" : ""}`,
		onClick: handleCardClick,
		children: /* @__PURE__ */ jsxs(CardContent, {
			className: "relative flex items-center py-1 px-2 gap-2 h-full",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: `flex items-center gap-2 transition-transform duration-500 ease-in-out ${isStack ? isMobile ? isClicked ? "-translate-x-[120%]" : "" : "group-hover:-translate-x-[120%]" : ""}`,
					children: [/* @__PURE__ */ jsx("div", {
						className: `p-2 rounded-lg bg-[#2e2e2e] flex items-center justify-center`,
						children: /* @__PURE__ */ jsx("div", {
							className: "w-5 h-5 text-muted-foreground",
							children: icon
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "text-sm font-bold text-[rgba(230,230,230,0.8)] whitespace-nowrap",
						children: text
					})]
				}),
				type === "follow" && href && /* @__PURE__ */ jsx("div", {
					className: "absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
					children: /* @__PURE__ */ jsx(Icon, {
						icon: "hugeicons:link-square-01",
						className: "w-5 h-5 text-muted-foreground"
					})
				}),
				isStack && techIcons && techIcons.length > 0 && /* @__PURE__ */ jsx("div", {
					className: `absolute inset-0 flex items-center justify-start px-4 overflow-hidden transform transition-all duration-500 ease-in-out
              ${isStack ? isMobile ? isClicked ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none" : "translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto" : ""}`,
					children: /* @__PURE__ */ jsx("div", {
						className: "overflow-hidden w-full",
						children: /* @__PURE__ */ jsx("div", {
							className: "flex animate-scroll-left",
							style: { animationPlayState: isPaused ? "paused" : "running" },
							children: [...techIcons, ...techIcons].map((tech, index) => /* @__PURE__ */ jsx("div", {
								className: "flex-[0_0_auto] min-w-0 mr-3",
								children: /* @__PURE__ */ jsx("div", {
									title: tech.name,
									className: `flex items-center justify-center w-8 h-8 bg-[#2e2e2e] rounded-lg
                        transition-all duration-300 hover:bg-[#3a3a3a] hover:scale-105 group/icon ${isMobile ? "cursor-pointer" : ""}`,
									onMouseEnter: handleIconMouseEnter,
									onMouseLeave: handleIconMouseLeave,
									onClick: handleIconClick,
									children: /* @__PURE__ */ jsx("div", {
										className: "w-5 h-5\n                          filter grayscale brightness-75\n                          transition-all duration-300\n                          group-hover/icon:filter-none",
										children: /* @__PURE__ */ jsx(Icon, {
											icon: tech.icon,
											className: "w-5 h-5"
										})
									})
								})
							}, `${tech.name}-${index}`))
						})
					})
				}),
				isMobile && isStack && isClicked && /* @__PURE__ */ jsx("div", { className: "absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full animate-pulse" })
			]
		})
	});
	return isFollow ? /* @__PURE__ */ jsx("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		children: content
	}) : content;
};
//#endregion
//#region src/components/custom/Header.tsx
var Header = ({ title, subtitle, icon }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-1 items-center justify-center text-foreground",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex justify-center items-center gap-2 text-muted-foreground",
			children: [/* @__PURE__ */ jsx(Icon, {
				icon,
				className: "w-4.5 h-4 text-indigo-400"
			}), /* @__PURE__ */ jsxs("span", {
				className: "text-sm font-semibold font-raleway",
				children: [
					" ",
					title,
					" "
				]
			})]
		}), /* @__PURE__ */ jsxs("h1", {
			className: "text-lg font-semibold text-white",
			children: [
				" ",
				subtitle,
				" "
			]
		})]
	});
};
//#endregion
//#region src/sections/Stacks.tsx
var Stacks = () => {
	const isMobile = useMediaScreen();
	const { t } = useTranslation();
	const cards = [
		{
			type: "stack",
			icon: /* @__PURE__ */ jsx(Icon, {
				icon: "ion:brush",
				className: "w-5 h-5"
			}),
			text: "UI Design",
			techIcons: [
				{
					icon: "material-icon-theme:figma",
					name: "Figma"
				},
				{
					icon: "devicon:photoshop",
					name: "Photoshop"
				},
				{
					icon: "devicon:canva",
					name: "Canva"
				}
			],
			className: isMobile ? "w-33" : "w-39"
		},
		{
			type: "stack",
			icon: /* @__PURE__ */ jsx(Icon, {
				icon: "ion:pie-chart-sharp",
				className: "w-5 h-5"
			}),
			text: "Frontend",
			techIcons: [
				{
					icon: "devicon:react",
					name: "React"
				},
				{
					icon: "devicon:nextjs",
					name: "Next.js"
				},
				{
					icon: "devicon:typescript",
					name: "TypeScript"
				},
				{
					icon: "vscode-icons:file-type-tailwind",
					name: "Tailwind"
				},
				{
					icon: "devicon:materialui",
					name: "Material UI"
				}
			],
			className: isMobile ? "w-33" : "w-39"
		},
		{
			type: "stack",
			icon: /* @__PURE__ */ jsx(Icon, {
				icon: "ion:server",
				className: "w-5 h-5"
			}),
			text: "Backend",
			techIcons: [
				{
					icon: "devicon:nodejs",
					name: "Node.js"
				},
				{
					icon: "vscode-icons:file-type-nestjs",
					name: "Nest.js"
				},
				{
					icon: "devicon:postgresql",
					name: "PostgreSQL"
				}
			],
			className: isMobile ? "w-33" : "w-39"
		},
		{
			type: "stack",
			icon: /* @__PURE__ */ jsx(Icon, {
				icon: "ion:cloud-upload",
				className: "w-5 h-5"
			}),
			text: "DevOps",
			techIcons: [
				{
					icon: "skill-icons:vercel-light",
					name: "Vercel"
				},
				{
					icon: "logos:docker-icon",
					name: "Docker"
				},
				{
					icon: "skill-icons:aws-dark",
					name: "AWS"
				}
			],
			className: isMobile ? "w-33" : "w-39"
		}
	];
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center text-foreground pt-5 pb-4",
		children: [/* @__PURE__ */ jsx(Header, {
			title: t("stacks.title"),
			subtitle: t("stacks.subtitle"),
			icon: "ion:logo-buffer"
		}), /* @__PURE__ */ jsx("div", {
			className: `mt-6 px-5 grid grid-cols-2 gap-3 w-full max-w-sm`,
			children: cards.map((card, index) => /* @__PURE__ */ jsx("div", {
				className: "w-full",
				children: /* @__PURE__ */ jsx(CustomCard, {
					type: card.type,
					icon: card.icon,
					text: card.text,
					techIcons: card.techIcons,
					className: card.className
				})
			}, index))
		})]
	});
};
//#endregion
//#region src/components/ui/dialog.tsx
function Dialog({ ...props }) {
	return /* @__PURE__ */ jsx(DialogPrimitive.Root, {
		"data-slot": "dialog",
		...props
	});
}
function DialogTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(DialogPrimitive.Trigger, {
		"data-slot": "dialog-trigger",
		...props
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ jsx(DialogPrimitive.Portal, {
		"data-slot": "dialog-portal",
		...props
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
		"data-slot": "dialog-overlay",
		className: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
		...props
	});
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
	return /* @__PURE__ */ jsxs(DialogPortal, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
			"data-slot": "dialog-content",
			className: cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-4xl", className),
			...props,
			children: [children, showCloseButton && /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
				"data-slot": "dialog-close",
				className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ jsx(XIcon, {}), /* @__PURE__ */ jsx("span", {
					className: "sr-only",
					children: "Close"
				})]
			})]
		})]
	});
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "dialog-header",
		className: cn("flex flex-col gap-2 text-center sm:text-left", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(DialogPrimitive.Title, {
		"data-slot": "dialog-title",
		className: cn("text-lg leading-none font-semibold", className),
		...props
	});
}
//#endregion
//#region src/components/ui/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
			destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
			outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2 has-[>svg]:px-3",
			sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
			lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
			icon: "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
//#endregion
//#region src/components/custom/TopProjectsModal.tsx
var projects = [
	{
		name: "Juguetes Perdidos",
		image: "/assets/juguetes-perdidos.png",
		githubUrl: "https://github.com/FrannGL/Juguetes-Perdidos-BEER",
		demoUrl: "https://juguetes-perdidos.vercel.app/"
	},
	{
		name: "Helpdesk JST",
		image: "/assets/helpdesk.png",
		githubUrl: "https://github.com/FrannGL/front-jst-ot-helpdesk",
		demoUrl: "https://front-jst-ot-helpdesk.vercel.app/"
	},
	{
		name: "Job Mapper",
		image: "/assets/job-mapper-2.png",
		githubUrl: "https://github.com/FrannGL/Job-Mapper-Backend",
		demoUrl: "https://job-mapper-web.vercel.app/"
	},
	{
		name: "Finanex Backoffice",
		image: "/assets/backoffice.png",
		githubUrl: "https://github.com/FinanexApp/front-backoffice",
		demoUrl: "https://staging.backoffice.finanex.io/"
	},
	{
		name: "Container IQ",
		image: "/assets/containeriq.png",
		githubUrl: "https://github.com/FinanexApp/front-containeriq",
		demoUrl: "https://staging.container-iq.finanex.io/"
	},
	{
		name: "MNJ Dashboard",
		image: "/assets/mnj.png",
		githubUrl: "https://github.com/FrannGL/JST-Dashboard-Administrativo",
		demoUrl: "https://mnj-dashboard.vercel.app/"
	}
];
var TopProjectsModal = ({ open, setOpen, trigger }) => {
	return /* @__PURE__ */ jsxs(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(DialogTrigger, {
			asChild: true,
			children: trigger
		}), /* @__PURE__ */ jsxs(DialogContent, {
			className: "max-w-5xl max-h-[80vh] overflow-y-auto",
			children: [/* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, {
				className: "text-2xl font-bold",
				children: /* @__PURE__ */ jsx(Header, {
					title: "My Works",
					subtitle: "My top 6 Projects",
					icon: "tabler:briefcase-filled"
				})
			}) }), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4",
				children: projects.map((project, index) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl overflow-hidden bg-[#121212] border border-[#2a2a2a] shadow-lg transition hover:shadow-xl group",
					children: [/* @__PURE__ */ jsx("div", {
						className: "relative w-full h-[150px] overflow-hidden",
						children: /* @__PURE__ */ jsx("img", {
							src: project.image,
							alt: project.name,
							className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-4 flex items-center justify-between",
						children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h3", {
							className: "text-white font-semibold text-sm",
							children: project.name
						}) }), /* @__PURE__ */ jsxs("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ jsx(motion.div, {
								whileHover: { scale: 1.2 },
								whileTap: { scale: .95 },
								children: /* @__PURE__ */ jsx(Button, {
									variant: "ghost",
									size: "icon",
									className: "hover:bg-[#2a2a2a] rounded-full",
									asChild: true,
									children: /* @__PURE__ */ jsx("a", {
										href: project.githubUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": "GitHub",
										children: /* @__PURE__ */ jsx(Github, { className: "w-4 h-4" })
									})
								})
							}), /* @__PURE__ */ jsx(motion.div, {
								whileHover: { scale: 1.2 },
								whileTap: { scale: .95 },
								children: /* @__PURE__ */ jsx(Button, {
									variant: "ghost",
									size: "icon",
									className: "hover:bg-[#2a2a2a] rounded-full",
									asChild: true,
									children: /* @__PURE__ */ jsx("a", {
										href: project.demoUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": "View Demo",
										children: /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" })
									})
								})
							})]
						})]
					})]
				}, index))
			})]
		})]
	});
};
//#endregion
//#region src/sections/Projects.tsx
var images = [
	"/assets/juguetes-perdidos.png",
	"/assets/Fuego-burgers.png",
	"/assets/Notimation.png",
	"/assets/Maular.png",
	"/assets/backoffice.png",
	"/assets/backoffice-2.png",
	"/assets/containeriq-2.png",
	"/assets/containeriq.png",
	"/assets/helpdesk.png",
	"/assets/job-mapper-2.png",
	"/assets/job-mapper.png"
];
var Projects = () => {
	const [open, setOpen] = useState(false);
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center gap-6 py-5 pb-10 text-foreground",
		style: {
			maxWidth: "100%",
			boxSizing: "border-box"
		},
		children: [/* @__PURE__ */ jsx(Header, {
			title: t("projects.title"),
			subtitle: t("projects.subtitle"),
			icon: "ion:briefcase"
		}), /* @__PURE__ */ jsxs("div", {
			className: "w-full relative",
			children: [/* @__PURE__ */ jsx(TopProjectsModal, {
				open,
				setOpen,
				trigger: /* @__PURE__ */ jsx("button", {
					id: "projects-button",
					className: "cursor-pointer absolute left-1/2 top-15 z-20 -translate-x-1/2 rounded-lg bg-indigo-500 px-5 py-2 text-sm sm:text-base text-white font-semibold shadow-lg transition-colors hover:bg-indigo-700 border-[3px] border-black",
					type: "button",
					children: t("projects.button")
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "overflow-hidden rounded-lg",
				children: /* @__PURE__ */ jsx("div", {
					className: "flex w-max gap-2 projects-animate-scroll-left",
					children: [...images, ...images].map((src, index) => /* @__PURE__ */ jsx("div", {
						className: "w-[180px] h-[80px] flex-shrink-0",
						style: { flexShrink: 0 },
						children: /* @__PURE__ */ jsx("img", {
							src,
							alt: `Project ${index}`,
							className: "w-full h-full object-cover rounded-lg shadow-md"
						})
					}, index))
				})
			})]
		})]
	});
};
//#endregion
//#region src/sections/Services.tsx
var cardsData = [
	{
		key: "ui",
		icon: /* @__PURE__ */ jsx(Icon, {
			icon: "ion:brush",
			className: "w-5 h-5"
		})
	},
	{
		key: "web",
		icon: /* @__PURE__ */ jsx(Icon, {
			icon: "mdi:web",
			className: "w-5 h-5"
		})
	},
	{
		key: "seo",
		icon: /* @__PURE__ */ jsx(Icon, {
			icon: "streamline-ultimate:seo-search-graph-bold",
			className: "w-5 h-5"
		})
	},
	{
		key: "auth",
		icon: /* @__PURE__ */ jsx(Icon, {
			icon: "simple-icons:auth0",
			className: "w-5 h-5"
		})
	},
	{
		key: "api",
		icon: /* @__PURE__ */ jsx(Icon, {
			icon: "mdi:api",
			className: "w-5 h-5"
		})
	},
	{
		key: "maps",
		icon: /* @__PURE__ */ jsx(Icon, {
			icon: "mdi:map-outline",
			className: "w-5 h-5"
		})
	},
	{
		key: "dashboard",
		icon: /* @__PURE__ */ jsx(Icon, {
			icon: "mdi:view-dashboard-outline",
			className: "w-5 h-5"
		})
	},
	{
		key: "deploy",
		icon: /* @__PURE__ */ jsx(Icon, {
			icon: "mdi:cloud-upload-outline",
			className: "w-5 h-5"
		})
	},
	{
		key: "testing",
		icon: /* @__PURE__ */ jsx(Icon, {
			icon: "mdi:bug-outline",
			className: "w-5 h-5"
		})
	}
];
var Services = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center py-5 w-full h-full text-foreground overflow-hidden",
		children: [/* @__PURE__ */ jsx(Header, {
			title: t("services.title"),
			subtitle: t("services.subtitle"),
			icon: "ion:grid"
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-6 w-full overflow-hidden",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex w-fit gap-4 animate-[scroll-carousel_50s_linear_infinite]",
				children: [...Array(2)].flatMap((_, i) => cardsData.map((card) => /* @__PURE__ */ jsx(CustomCard, {
					type: "services",
					icon: card.icon,
					text: t(`services.${card.key}`),
					className: "flex-shrink-0"
				}, `${card.key}-${i}`)))
			})
		})]
	});
};
//#endregion
//#region src/components/custom/AnimatedBorder.tsx
var AnimatedBorderButton = ({ children, className = "", ...props }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative w-full group rounded-lg",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute -inset-[1px] rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 opacity-50" }),
			/* @__PURE__ */ jsx("div", {
				className: "absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden",
				children: /* @__PURE__ */ jsx("div", { className: "traveling-light" })
			}),
			/* @__PURE__ */ jsx(Button, {
				className: `cursor-pointer relative w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-all duration-300 ${className}`,
				...props,
				children
			})
		]
	});
};
//#endregion
//#region src/components/custom/BlinkingDot.tsx
var BlinkingDot = () => /* @__PURE__ */ jsx(motion.span, {
	className: "text-lg text-green-400",
	animate: { opacity: [
		1,
		.2,
		1
	] },
	transition: {
		duration: 1.5,
		repeat: Infinity,
		repeatType: "loop"
	},
	children: "●"
});
//#endregion
//#region src/components/custom/TypingText.tsx
var TypingText = () => {
	const { t } = useTranslation();
	const roles = useMemo(() => {
		return t("profile.roles", { returnObjects: true });
	}, [t]);
	const [index, setIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [reverse, setReverse] = useState(false);
	const [blink, setBlink] = useState(true);
	useEffect(() => {
		if (index >= roles.length) return;
		if (subIndex === roles[index].length + 1 && !reverse) {
			setTimeout(() => setReverse(true), 1e3);
			return;
		}
		if (subIndex === 0 && reverse) {
			setReverse(false);
			setIndex((prev) => (prev + 1) % roles.length);
			return;
		}
		const timeout = setTimeout(() => {
			setSubIndex((prev) => prev + (reverse ? -1 : 1));
		}, reverse ? 60 : 120);
		return () => clearTimeout(timeout);
	}, [
		subIndex,
		index,
		reverse,
		roles
	]);
	useEffect(() => {
		const interval = setInterval(() => {
			setBlink((prev) => !prev);
		}, 500);
		return () => clearInterval(interval);
	}, []);
	return /* @__PURE__ */ jsxs("p", {
		className: "text-lg text-muted-foreground",
		children: [
			t("profile.imA", "I'm a"),
			" ",
			/* @__PURE__ */ jsxs("span", {
				className: "text-indigo-400 font-semibold",
				children: [roles.length > 0 ? roles[index].substring(0, subIndex) : "", /* @__PURE__ */ jsx("span", {
					className: "inline-block w-1",
					children: blink ? "|" : " "
				})]
			})
		]
	});
};
//#endregion
//#region src/components/ui/badge.tsx
var badgeVariants = cva("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
		secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
		destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
		outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : "span", {
		"data-slot": "badge",
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
//#region src/sections/Profile.tsx
var badgesData = [
	{
		icon: "ion:location-sharp",
		label: "Argentina"
	},
	{
		icon: "ion:code-slash-outline",
		label: "Frontend"
	},
	{
		icon: "ion:server",
		label: "Backend"
	},
	{
		icon: "ion:ribbon-sharp",
		label: "Coderhouse"
	},
	{
		icon: "game-icons:graduate-cap",
		label: "ifts"
	},
	{
		icon: "ion:language-sharp",
		label: "Español"
	},
	{
		icon: "ion:language-sharp",
		label: "Ingles"
	}
];
var ProfileCard = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx(Card, {
		className: "text-white p-4 bg-[#101010]",
		children: /* @__PURE__ */ jsxs(CardContent, {
			className: "p-0 flex flex-col gap-1.5",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col md:flex-row items-center md:items-start justify-between mb-4 gap-4",
					children: [/* @__PURE__ */ jsx("div", {
						className: "w-full md:w-28 flex-shrink-0 rounded-xl overflow-hidden bg-transparent md:bg-muted",
						children: /* @__PURE__ */ jsx("img", {
							src: "/assets/avatar.jpg",
							alt: "Profile",
							className: "w-40 h-35 object-cover mx-auto md:mx-0 rounded-2xl"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-4 flex-1 w-full",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 bg-[#191919] border border-[rgba(33,33,33,0.8)] w-fit pt-0.5 px-3 rounded-xl",
								children: [/* @__PURE__ */ jsx(BlinkingDot, {}), /* @__PURE__ */ jsx("span", {
									className: "text-sm font-semibold text-muted-foreground whitespace-nowrap",
									children: t("profile.available")
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "items-center gap-2 pr-2 hidden md:flex",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-sm font-semibold text-[rgba(230,230,230,0.8)]",
									children: t("profile.resume")
								}), /* @__PURE__ */ jsx("a", {
									href: "/assets/CV.pdf",
									download: true,
									className: "flex items-center gap-2 cursor-pointer select-none text-sm font-semibold text-[rgba(230,230,230,0.8)] group",
									children: /* @__PURE__ */ jsx("div", {
										className: "p-2.5 rounded-lg bg-[#1f1f1f] group-hover:bg-[#2a2a2a] transition-colors duration-300 flex items-center justify-center",
										children: /* @__PURE__ */ jsx(Icon, {
											icon: "entypo:download",
											className: "w-5 h-5 text-muted-foreground"
										})
									})
								})]
							})]
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-xl md:text-2xl lg:text-xl font-semibold mt-1",
							children: "Franco Galluccio"
						}), /* @__PURE__ */ jsx(TypingText, {})] })]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-1.5 mb-4 justify-start md:justify-start",
					children: badgesData.map(({ icon, label }) => /* @__PURE__ */ jsxs(Badge, {
						className: "[&>svg]:size-4.5 text-sm text-white py-1 px-2 flex items-center bg-transparent shadow-none border border-[rgba(33,33,33,0.8)]",
						children: [/* @__PURE__ */ jsx(Icon, {
							icon,
							className: "text-indigo-400 h-6 w-6 mr-2"
						}), t(`profile.badges.${label}`)]
					}, label))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col md:flex-row gap-4",
					children: [/* @__PURE__ */ jsx("a", {
						href: "mailto:francoivangalluccio.com",
						className: "w-full",
						children: /* @__PURE__ */ jsxs(AnimatedBorderButton, {
							className: "flex-1 p-6 text-md font-semibold text-muted-foreground",
							children: [/* @__PURE__ */ jsx(Icon, {
								icon: "mdi:email-outline",
								className: "size-6 mr-2 text-indigo-400"
							}), t("profile.emailMe")]
						})
					}), /* @__PURE__ */ jsx("a", {
						href: "https://wa.me/5491121557802",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "w-full",
						children: /* @__PURE__ */ jsxs(AnimatedBorderButton, {
							className: "flex-1 p-6 text-md font-semibold text-muted-foreground",
							children: [/* @__PURE__ */ jsx(Icon, {
								icon: "ic:baseline-whatsapp",
								className: "size-6 mr-2 text-indigo-400"
							}), t("profile.whatsappMe")]
						})
					})]
				})
			]
		})
	});
};
//#endregion
//#region src/sections/Clients.tsx
var cards = [
	{
		key: "ui",
		src: "/assets/logo_notimation.png",
		alt: "Notimation",
		text: "Notimation"
	},
	{
		key: "web",
		src: "/assets/jst.png",
		alt: "JST Seguridad en el Transporte",
		text: "JST | Seguridad en el Transporte"
	},
	{
		key: "seo",
		src: "/assets/finanex.png",
		alt: "Finanex",
		text: "Finanex"
	},
	{
		key: "fit",
		src: "/assets/fit.png",
		alt: "Fit",
		text: "Fit"
	},
	{
		key: "nefra",
		src: "/assets/nefra.png",
		alt: "Nefra",
		text: "Nefra"
	},
	{
		key: "zerobug",
		src: "/assets/zerobug.png",
		alt: "Zerobug",
		text: "Zerobug"
	}
];
var Clients = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center pb-6.5 pt-5 gap-1 text-foreground",
		children: [/* @__PURE__ */ jsx(Header, {
			title: t("clients.title"),
			subtitle: t("clients.subtitle"),
			icon: "ion:rocket-sharp"
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-4 w-full overflow-hidden",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex w-fit gap-4 animate-[scroll-carousel-right_20s_linear_infinite]",
				children: [...Array(2)].flatMap((_, i) => cards.map(({ key, src, alt }) => /* @__PURE__ */ jsx("div", {
					className: "flex flex-col items-center justify-center w-48 h-[50px] bg-[#191919] text-white rounded-lg shadow-sm border border-[#212121] mx-2 p-1 flex-shrink-0",
					children: /* @__PURE__ */ jsx("img", {
						src,
						alt,
						className: "max-h-full object-contain"
					})
				}, `${key}-${i}`)))
			})
		})]
	});
};
//#endregion
//#region src/components/ui/avatar.tsx
function Avatar({ className, ...props }) {
	return /* @__PURE__ */ jsx(AvatarPrimitive.Root, {
		"data-slot": "avatar",
		className: cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className),
		...props
	});
}
function AvatarImage({ className, ...props }) {
	return /* @__PURE__ */ jsx(AvatarPrimitive.Image, {
		"data-slot": "avatar-image",
		className: cn("aspect-square size-full", className),
		...props
	});
}
function AvatarFallback({ className, ...props }) {
	return /* @__PURE__ */ jsx(AvatarPrimitive.Fallback, {
		"data-slot": "avatar-fallback",
		className: cn("bg-muted flex size-full items-center justify-center rounded-full", className),
		...props
	});
}
//#endregion
//#region src/components/ui/separator.tsx
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
	return /* @__PURE__ */ jsx(SeparatorPrimitive.Root, {
		"data-slot": "separator",
		decorative,
		orientation,
		className: cn("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
		...props
	});
}
//#endregion
//#region src/components/custom/TestimonialCard.tsx
var TestimonialCard = ({ name, company, date, content, avatarUrl }) => {
	return /* @__PURE__ */ jsx(Card, {
		className: "bg-[#191919] text-foreground shadow-md rounded-xl border border-muted",
		children: /* @__PURE__ */ jsxs(CardContent, {
			className: "p-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ jsxs(Avatar, {
							className: "w-12 h-12 rounded-md",
							children: [/* @__PURE__ */ jsx(AvatarImage, {
								src: avatarUrl,
								alt: name,
								className: "object-cover"
							}), /* @__PURE__ */ jsx(AvatarFallback, { children: name[0] })]
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-sm font-semibold",
							children: name
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground",
							children: company
						})] })]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground mt-1 whitespace-nowrap",
						children: date
					})]
				}),
				/* @__PURE__ */ jsx(Separator, { className: "my-3" }),
				/* @__PURE__ */ jsx("p", {
					className: "text-xs leading-relaxed text-muted-foreground",
					children: content
				})
			]
		})
	});
};
//#endregion
//#region src/sections/Testimonials.tsx
var testimonials = [
	{
		name: "Kevin Fiorentino",
		company: "Notimation",
		date: "16/10/2024",
		content: "Trabajé más de un año con Fran, indirectamente, como líder de su líder. Realmente ha sido exponencial ver su crecimiento como desarrollador front-end. Desde arrancar completamente de abajo, sabiendo lo básico, a hacerse cargo de proyectos y desarrollos grandes en poco tiempo. Fran hizo ese \"clic\" que considero deben hacer los programadores en donde demuestran haber \"pasado de nivel\". Un día comenzó a proponer, analizar, resolver a otro ritmo. Con mayor eficacia, eficiencia e incluso en cantidad de tareas. Sumado a su buen trato diario y gran comunicación constante que ha tenido con su líder o directamente conmigo. Tienen todos los soft y hard skills necesarios para este trabajo. Todo por delante como desarrollador de software.",
		avatarUrl: "/assets/testimonials-01.jfif"
	},
	{
		name: "Lucía Dias",
		company: "Notimation",
		date: "25/03/2024",
		content: "Hace casi un año que trabajo con Franco en el equipo de desarrollo front-end en Notimation. Desde el principio, demostró un entusiasmo notable por aprender y una actitud proactiva por resolver sus tareas. Franco aborda sus responsabilidades con rapidez y eficacia. Destaca como una persona muy comunicativa, amigable y de confianza. Sin duda, se convirtió en un pilar fundamental de nuestro equipo. Recomiendo absolutamente trabajar con él.",
		avatarUrl: "/assets/testimonials-02.jfif"
	},
	{
		name: "Emiliano Carasa",
		company: "Finanex",
		date: "03/07/2025",
		content: "Trabajé con Franco como desarrollador Front-End y fue un verdadero placer. Es detallista, comprometido y siempre busca mejorar lo que hace, incluso cuando ya está bien. Tiene una gran actitud, aporta valor en cada entrega y eleva la calidad del equipo. Lo recomiendo sin dudas.",
		avatarUrl: "/assets/testimonials-03.jfif"
	},
	{
		name: "Ivan Klimberg",
		company: "Finanex",
		date: "03/07/2025",
		content: "Franco es alguien que se esfuerza en entender el producto en el que trabaja y no da vueltas en pensar y desarrollar soluciones para los problemas que se le presentan. Una persona responsable y facil de trabajar con el, recomiendo a futuros empleadores.",
		avatarUrl: "/assets/testimonials-04.jfif"
	}
];
var Testimonials = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center px-4 pt-5 gap-2 text-foreground",
		children: [/* @__PURE__ */ jsx(Header, {
			title: t("testimonials.title"),
			subtitle: t("testimonials.subtitle"),
			icon: "ion:happy-sharp"
		}), /* @__PURE__ */ jsx("div", {
			className: "testimonial-carousel mt-2 h-[265px] overflow-hidden",
			children: /* @__PURE__ */ jsx("div", {
				className: "testimonial-carousel-inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
				children: Array(3).fill(null).flatMap(() => testimonials).map((t, index) => /* @__PURE__ */ jsx(TestimonialCard, { ...t }, `${t.name}-${index}`))
			})
		})]
	});
};
//#endregion
//#region src/sections/WorkProcess.tsx
var WorkProcess = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center gap-1 pt-5 pb-3 text-foreground",
		children: [/* @__PURE__ */ jsx(Header, {
			title: t("workProcess.title"),
			subtitle: t("workProcess.subtitle"),
			icon: "fluent:star-emphasis-16-filled"
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-3 mt-6",
			children: [
				/* @__PURE__ */ jsx(CustomCard, {
					icon: /* @__PURE__ */ jsx(Icon, {
						icon: "mdi:calendar-check",
						className: "w-5 h-5 mx-auto my-auto"
					}),
					text: t("workProcess.planning"),
					type: "follow"
				}),
				/* @__PURE__ */ jsx(CustomCard, {
					icon: /* @__PURE__ */ jsx(Icon, {
						icon: "material-symbols:problem",
						className: "w-5 h-5 mx-auto my-auto"
					}),
					text: t("workProcess.problemSolving"),
					type: "follow"
				}),
				/* @__PURE__ */ jsx(CustomCard, {
					icon: /* @__PURE__ */ jsx(Icon, {
						icon: "mdi:message-text-outline",
						className: "w-5 h-5 mx-auto my-auto"
					}),
					text: t("workProcess.communication"),
					type: "follow"
				}),
				/* @__PURE__ */ jsx(CustomCard, {
					icon: /* @__PURE__ */ jsx(Icon, {
						icon: "iconoir:learning",
						className: "w-5 h-5 mx-auto my-auto"
					}),
					text: t("workProcess.continuousLearning"),
					type: "follow"
				})
			]
		})]
	});
};
//#endregion
//#region src/sections/Follow.tsx
var Follow = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col pt-5 items-center justify-center text-foreground",
		children: [/* @__PURE__ */ jsx(Header, {
			title: t("follow.title"),
			subtitle: t("follow.subtitle"),
			icon: "mdi:heart"
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-2 mt-3 pb-2.5 w-full max-w-md px-2",
			children: [
				/* @__PURE__ */ jsx(CustomCard, {
					icon: /* @__PURE__ */ jsx(Icon, {
						icon: "mdi:linkedin",
						className: "w-5 h-5"
					}),
					text: "Linkedin",
					type: "follow",
					href: "https://www.linkedin.com/in/franngl/"
				}),
				/* @__PURE__ */ jsx(CustomCard, {
					icon: /* @__PURE__ */ jsx(Icon, {
						icon: "mdi:github",
						className: "w-5 h-5"
					}),
					text: "Github",
					type: "follow",
					href: "https://github.com/FrannGL"
				}),
				/* @__PURE__ */ jsx(CustomCard, {
					icon: /* @__PURE__ */ jsx(Icon, {
						icon: "mdi:email-outline",
						className: "w-5 h-5"
					}),
					text: "Email",
					type: "follow",
					href: "mailto:francoivangalluccio.com"
				})
			]
		})]
	});
};
//#endregion
//#region src/sections/WorkTogether.tsx
var WorkTogether = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full flex flex-col items-center justify-center pb-2.5 pt-2 px-5 text-foreground",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-1.5 items-center justify-center text-foreground",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "p-3 rounded-full bg-[#2e2e2e] flex items-center justify-center",
					children: /* @__PURE__ */ jsx(Icon, {
						icon: "solar:crown-line-bold",
						className: "w-8 h-8 text-indigo-400"
					})
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-1xl font-semibold text-white",
					children: t("workTogether.title")
				}),
				/* @__PURE__ */ jsx("span", {
					className: "text-sm text-muted-foreground",
					children: t("workTogether.subtitle")
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-4 mt-5 w-full",
			children: [/* @__PURE__ */ jsx("a", {
				href: "mailto:francoivangalluccio.com",
				className: "w-full",
				children: /* @__PURE__ */ jsxs(AnimatedBorderButton, {
					className: "flex-1 p-6 text-md font-semibold text-muted-foreground",
					children: [/* @__PURE__ */ jsx(Icon, {
						icon: "mdi:email-outline",
						className: "size-6 mr-2 text-indigo-400"
					}), t("workTogether.email")]
				})
			}), /* @__PURE__ */ jsx("a", {
				href: "https://wa.me/5491121557802",
				target: "_blank",
				rel: "noopener noreferrer",
				className: "w-full",
				children: /* @__PURE__ */ jsxs(AnimatedBorderButton, {
					className: "flex-1 p-6 text-md font-semibold text-muted-foreground",
					children: [/* @__PURE__ */ jsx(Icon, {
						icon: "ic:baseline-whatsapp",
						className: "size-6 mr-2 text-indigo-400"
					}), t("workTogether.whatsapp")]
				})
			})]
		})]
	});
};
//#endregion
//#region src/components/custom/AnimatedCount.tsx
var AnimatedCount = ({ from = 0, to, duration = 2, once = true, toFixed = 0, usd = false, className }) => {
	const ref = useRef(null);
	const inView = useInView(ref, {
		once,
		amount: .5
	});
	const count = useMotionValue(from);
	const formatted = useTransform(count, (latest) => {
		const options = {
			minimumFractionDigits: toFixed,
			maximumFractionDigits: toFixed
		};
		if (usd) {
			options.style = "currency";
			options.currency = "USD";
		}
		return new Intl.NumberFormat("es-AR", options).format(latest);
	});
	useEffect(() => {
		if (inView) animate(count, to, { duration });
	}, [
		inView,
		to,
		duration,
		count
	]);
	return /* @__PURE__ */ jsx(motion.span, {
		ref,
		className,
		children: formatted
	});
};
//#endregion
//#region src/sections/Indicator.tsx
var Indicator = ({ value, label, iconName }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center py-2 gap-1 bg-[#101010] border border-[rgba(33,33,33,0.8)] text-foreground border rounded-xl",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "text-5xl md:text-6xl font-semibold bg-gradient-to-b from-white to-zinc-900 bg-clip-text text-transparent",
			children: [/* @__PURE__ */ jsx(AnimatedCount, { to: Number(value) }), /* @__PURE__ */ jsx("span", {
				className: "text-indigo-400 text-4xl",
				children: "+"
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-2 flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold text-[rgba(230,230,230,0.8)] border-0 md:border md:border-[rgba(33,33,33,1)]",
			children: [/* @__PURE__ */ jsx(Icon, {
				icon: iconName,
				className: "h-4.5 w-4 text-indigo-400"
			}), /* @__PURE__ */ jsx("span", { children: label })]
		})]
	});
};
//#endregion
//#region src/components/custom/IndicatorsGrid.tsx
var IndicatorsGrid = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-3 gap-3 sm:grid-cols-2 md:grid-cols-3",
		children: [
			{
				value: 10,
				label: t("indicators.projects"),
				iconName: "ion:flag"
			},
			{
				value: 6,
				label: t("indicators.happyClients"),
				iconName: "mingcute:happy-fill"
			},
			{
				value: "03",
				label: t("indicators.yearExpertise"),
				iconName: "ion:star"
			}
		].map((item, i) => /* @__PURE__ */ jsx(Indicator, {
			value: item.value,
			label: item.label,
			iconName: item.iconName
		}, i))
	});
};
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
createAstro("https://astro.build");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	Astro.preferredLocale;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="min-h-screen h-screen items-center grid grid-cols-1 xl:grid-cols-[25%_32%_41%] gap-3 p-8 text-white"><div class="flex flex-col gap-3 order-2 md:order-none"><div class="bg-[#101010] rounded-3xl border border-[rgba(33,33,33,0.8)]">${renderComponent($$result, "Stacks", Stacks, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/sections/Stacks",
		"client:component-export": "default"
	})}</div><div class="bg-[#101010] rounded-xl border border-[rgba(33,33,33,0.8)]">${renderComponent($$result, "Projects", Projects, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/sections/Projects",
		"client:component-export": "default"
	})}</div><div class="bg-[#101010] rounded-xl border border-[rgba(33,33,33,0.8)]">${renderComponent($$result, "Services", Services, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/sections/Services",
		"client:component-export": "default"
	})}</div></div><div class="flex flex-col gap-3.5 order-1 md:order-none"><div class="order-2 md:order-none rounded-xl">${renderComponent($$result, "IndicatorsGrid", IndicatorsGrid, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/components/custom/IndicatorsGrid",
		"client:component-export": "default"
	})}</div><div class="order-1 md:order-none">${renderComponent($$result, "ProfileCard", ProfileCard, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/sections/Profile",
		"client:component-export": "default"
	})}</div><div class="bg-[#101010] rounded-xl border border-[rgba(33,33,33,0.8)] order-3 md:order-none">${renderComponent($$result, "Clients", Clients, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/sections/Clients",
		"client:component-export": "default"
	})}</div></div><div class="flex flex-col gap-3 order-3 md:order-none"><div class="flex flex-col md:flex-row gap-2"><div class="bg-[#101010] rounded-xl border border-[rgba(33,33,33,0.8)] md:w-[56%]">${renderComponent($$result, "Testimonials", Testimonials, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/sections/Testimonials",
		"client:component-export": "default"
	})}</div><div class="bg-[#101010] rounded-xl border border-[rgba(33,33,33,0.8)] md:w-[44%]">${renderComponent($$result, "WorkProcess", WorkProcess, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/sections/WorkProcess",
		"client:component-export": "default"
	})}</div></div><div class="flex flex-col md:flex-row order-4 md:order-none gap-2"><div class="bg-[#101010] rounded-xl border border-[rgba(33,33,33,0.8)] md:w-[40%]">${renderComponent($$result, "Follow", Follow, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/sections/Follow",
		"client:component-export": "default"
	})}</div><div class="bg-[#101010] rounded-xl border border-[rgba(33,33,33,0.8)] mb-10 sm:mb-0 md:w-[60%]">${renderComponent($$result, "WorkTogether", WorkTogether, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/sections/WorkTogether",
		"client:component-export": "default"
	})}</div></div></div></div>` })}`;
}, "C:/Users/fgalluccio/Documents/Code/Personal/Personal-Portfolio-2025/src/pages/index.astro", void 0);
var $$file = "C:/Users/fgalluccio/Documents/Code/Personal/Personal-Portfolio-2025/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
