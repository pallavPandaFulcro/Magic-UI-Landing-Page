"use client";
import BlurIn from "@/components/magicui/blur-in";

import IconCloud from "@/components/magicui/icon-cloud";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import WordPullUp from "@/components/magicui/word-pull-up";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Meteors from "@/components/magicui/meteors";
import Particles from "@/components/magicui/particles";
import { MagicCard } from "@/components/magicui/magic-card";
import BlurFade from "@/components/magicui/blur-fade";
import SparklesText from "@/components/magicui/sparkles-text";
import HyperText from "@/components/magicui/hyper-text";

import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import React from "react";
import Image from "next/image";
const images = Array.from({ length: 15 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
export default function Home() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <>
      <div className="relative overflow-hidden ">
        <section className="p-8">
          <div className="flex justify-evenly gap-24  items-center">
            <SparklesText text="Magic UI" />
            <NavigationMenu className="md:hidden">
              <NavigationMenuList >
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Check Details</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            {/* <Icons.logo className="h-6 w-6" /> */}
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Magic UI
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components that you can copy
                              and paste into your apps. Accessible.
                              Customizable. Open Source.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <RainbowButton>Explore Components</RainbowButton>
          </div>
        </section>
        <section id="heroSection" className="p-8">
          <div className=" h-[750px] rounded-lg w-full bg-background overflow-hidden ">
            <Particles
              className="absolute inset-0"
              quantity={3000}
              ease={40}
              color={color}
              refresh
            />
            <div className="flex flex-col justify-center items-center mt-44  ">
              <WordPullUp
                className="text-2xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-12"
                words="Empower Your Projects with Magic UI"
              />
              <HyperText
                className="text-2xl font-bold text-black dark:text-white"
                text=" Discover the ease of creating stunning, responsive web
                applications with Magic UI."
              />
            </div>
          </div>
        </section>
        <section className="p-8">
          <div>
            <WordPullUp words="Service" className="" />
            <div className="flex flex-col md:flex-row justify-evenly gap-10 mt-8 text-start">
              <WordPullUp
                className=" w-full md:w-1/3 text-2xl text-wrap  justify-start"
                words=" Magic UI is a comprehensive UI library designed for building
                responsive, modern web applications with minimal effort. It
                offers a wide range of customizable components, including
                buttons, modals, forms, and navigation elements, that are built
                to ensure consistency across devices. The library emphasizes
                ease of use, providing developers with flexible APIs and
                built-in accessibility features. Magic UI also includes theming
                capabilities, allowing for seamless customization of styles to
                match project-specific design requirements."
              />
              <div className="relative flex h-full w-full md:w-2/3 max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background  ">
                <IconCloud iconSlugs={slugs} />
              </div>
            </div>
          </div>
        </section>

        <section
          id="Projects"
          className="flex  w-full flex-col gap-4  mt-8 mb-8 p-8 "
        >
          <WordPullUp words="Projects" />
          <div className="flex  w-full flex-col gap-4  lg:h-[280px] lg:flex-row lg:flex-wrap  justify-center">
            <MagicCard
              className="cursor-pointer w-full h-[240px] md:h-full md:w-80 flex-col items-center justify-center shadow-2xl whitespace-nowrap text-3xl"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              Project 1
            </MagicCard>
            <MagicCard
              className="cursor-pointer w-full h-[240px] md:h-full  md:w-80 flex-col items-center justify-center shadow-2xl whitespace-nowrap text-3xl"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              Project 2
            </MagicCard>
            <MagicCard
              className=" relative w-full h-[240px] md:h-full md:w-80 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-3xl"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <Meteors number={50} />
              Project 3
            </MagicCard>
            <MagicCard
              className=" relative w-full h-[240px] md:h-full  md:w-80 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-3xl"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <Meteors number={50} />
              Project 4
            </MagicCard>
            <MagicCard
              className="cursor-pointer flex-col w-full  h-[240px] md:h-full md:w-80 items-center justify-center shadow-2xl whitespace-nowrap text-3xl"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              Project 5
            </MagicCard>
          </div>
        </section>
        <section id="photos" className="flex flex-col mt-80 p-8 ">
          <BlurIn word="Gallery" />
          <div className="columns-2 gap-4 sm:columns-3 mt-8 mb-8">
            {images.map((imageUrl, idx) => (
              <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                <img
                  className="mb-4 size-full rounded-lg object-contain"
                  src={imageUrl}
                  alt={`Random stock image ${idx + 1}`}
                 
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="Data" className="md:p-52 h-[300px] w-full">
          <BlurIn word="Testimonials" />
          <Carousel className="w-full ">
            <CarouselContent>
              <CarouselItem className=" w-full h-[280px]">
                <BlurFade>
                  <div className="p-1">
                    <div className=" text-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="text-4xl text-themeDarkGray my-4 mx-auto"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z"></path>
                      </svg>
                      <div>
                        <h4 className="text-1xl font-semibold">
                          There is a lot of exciting stuff going on in the stars
                          above us that make astronomy so much fun. The truth is
                          the universe is a constantly changing, moving, some
                          would say “living” thing because you just never know
                          what you are going to see on any given night of
                          stargazing.
                        </h4>
                      </div>
                      <div>
                        <div className="mt-8">
                          <Image
                            alt="MicroSoft Logo"
                            loading="lazy"
                            width="0"
                            height="40"
                            decoding="async"
                            data-nimg="1"
                            className="mx-auto w-auto h-[30px] grayscale opacity-30"
                            src="https://cdn.magicui.design/companies/Microsoft.svg"
                          />
                        </div>
                      </div>
                      <div className="">
                        <div>
                          <h4 className="text-1xl font-semibold my-2">
                            Leslie Alexander
                          </h4>
                        </div>
                      </div>
                      <div>
                        <div className=" mb-3">
                          <span className="text-sm text-themeDarkGray">
                            UI Designer
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              </CarouselItem>
              <CarouselItem className=" w-full h-[200px]">
                <BlurFade>
                  <div className="p-1">
                    <div className=" text-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="text-4xl text-themeDarkGray my-4 mx-auto"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z"></path>
                      </svg>
                      <div>
                        <h4 className="text-1xl font-semibold">
                          There is a lot of exciting stuff going on in the stars
                          above us that make astronomy so much fun. The truth is
                          the universe is a constantly changing, moving, some
                          would say “living” thing because you just never know
                          what you are going to see on any given night of
                          stargazing.
                        </h4>
                      </div>
                      <div>
                        <div className="mt-8">
                          <Image
                            alt="Amazon Logo"
                            loading="lazy"
                            width="0"
                            height="40"
                            decoding="async"
                            data-nimg="1"
                            className="mx-auto w-auto h-[30px] grayscale opacity-30"
                            src="https://cdn.magicui.design/companies/Amazon.svg"
                          />
                        </div>
                      </div>
                      <div className="">
                        <div>
                          <h4 className="text-1xl font-semibold my-2">
                            Leslie Alexander
                          </h4>
                        </div>
                      </div>
                      <div>
                        <div className=" mb-3">
                          <span className="text-sm text-themeDarkGray">
                            UI Designer
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              </CarouselItem>
              <CarouselItem className=" w-full h-[200px]">
                <div className="p-1">
                  <div className=" text-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="text-4xl text-themeDarkGray my-4 mx-auto"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z"></path>
                    </svg>
                    <div>
                      <h4 className="text-1xl font-semibold">
                        There is a lot of exciting stuff going on in the stars
                        above us that make astronomy so much fun. The truth is
                        the universe is a constantly changing, moving, some
                        would say “living” thing because you just never know
                        what you are going to see on any given night of
                        stargazing.
                      </h4>
                    </div>
                    <div>
                      <div className="mt-8">
                        <Image
                          alt="Amazon Logo"
                          loading="lazy"
                          width="0"
                          height="40"
                          decoding="async"
                          data-nimg="1"
                          className="mx-auto w-auto h-[30px] grayscale opacity-30"
                          src="https://cdn.magicui.design/companies/Amazon.svg"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div>
                        <h4 className="text-1xl font-semibold my-2">
                          Leslie Alexander
                        </h4>
                      </div>
                    </div>
                    <div>
                      <div className=" mb-3">
                        <span className="text-sm text-themeDarkGray">
                          UI Designer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className=" w-full h-[200px]">
                <BlurFade>
                  <div className="p-1">
                    <div className=" text-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="text-4xl text-themeDarkGray my-4 mx-auto"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z"></path>
                      </svg>
                      <div>
                        <h4 className="text-1xl font-semibold">
                          There is a lot of exciting stuff going on in the stars
                          above us that make astronomy so much fun. The truth is
                          the universe is a constantly changing, moving, some
                          would say “living” thing because you just never know
                          what you are going to see on any given night of
                          stargazing.
                        </h4>
                      </div>
                      <div>
                        <div className="mt-8">
                          <Image
                            alt="MicroSoft Logo"
                            loading="lazy"
                            width="0"
                            height='60'
                            decoding="async"
                            data-nimg="1"
                            className="mx-auto w-auto h-[30px] grayscale opacity-30"
                            src="https://cdn.magicui.design/companies/Microsoft.svg"
                          />
                        </div>
                      </div>
                      <div className="">
                        <div>
                          <h4 className="text-1xl font-semibold my-2">
                            Leslie Alexander
                          </h4>
                        </div>
                      </div>
                      <div>
                        <div className=" mb-3">
                          <span className="text-sm text-themeDarkGray">
                            UI Designer
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <div
          data-state="active"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:R5dttqlb:-trigger-preview"
          id="radix-:R5dttqlb:-content-preview"
          // tabindex="0"
          className="mt-40 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full overflow-hidden border-t bg-gray-200"
        >
          <div className="w-full overflow-x-auto">
            <footer className="mx-auto max-w-7xl space-y-8 px-16 pt-16  text-xs font-medium text-muted-foreground">
              <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                <nav className="flex flex-col items-start space-y-2.5 md:space-y-1.5">
                  <h3 className="mb-2 font-semibold uppercase tracking-wide text-foreground">
                    Products
                  </h3>

                  <HoverCard>
                    <HoverCardTrigger>Todo List</HoverCardTrigger>
                  </HoverCard>
                  <a href="#" className="transition hover:text-foreground">
                    Product Management
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Git Manager
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Status Reporter
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Email Management
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Responsibilities
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Teams
                  </a>
                </nav>
                <nav className="flex flex-col items-start space-y-2.5 md:space-y-1.5">
                  <h3 className="mb-2 font-semibold uppercase tracking-wide text-foreground">
                    Resources
                  </h3>
                  <a href="#" className="transition hover:text-foreground">
                    Technical Support
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Licensing
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Community
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Knowledge Base
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Marketplace
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    My Account
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Support Ticket
                  </a>
                </nav>
                <nav className="flex flex-col items-start space-y-2.5 md:space-y-1.5">
                  <h3 className="mb-2 font-semibold uppercase tracking-wide text-foreground">
                    Learn
                  </h3>
                  <a href="#" className="transition hover:text-foreground">
                    Certification
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Partners
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Documentation
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Developer Resources
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Purchasing FAQ
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Enterprise services
                  </a>
                </nav>
                <nav className="flex flex-col items-start space-y-2.5 md:space-y-1.5">
                  <h3 className="mb-2 font-semibold uppercase tracking-wide text-foreground">
                    About Us
                  </h3>
                  <a href="#" className="transition hover:text-foreground">
                    Company
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Careers
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Events
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Blogs
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Contact
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Security
                  </a>
                  <a href="#" className="transition hover:text-foreground">
                    Privacy
                  </a>
                </nav>
              </div>
              <div className="flex flex-col space-y-4 border-t py-8 sm:items-center sm:justify-between md:flex-row md:space-y-0">
                <p>© 2025 MagicUI, Inc.</p>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-foreground"
                >
                  <path d="m3.25 10.347.705-.66 1.41-1.318c2.22-2.292 5.803-2.292 8.004 0l4.228 3.952a.288.288 0 0 1 0 .42l-8.67 8.105"></path>
                  <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></path>
                </svg>
                <p>Have a nice day! 🎉</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
