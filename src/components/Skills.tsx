'use client'


import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiNodedotjs,
    SiMongodb,
    SiDocker,
    SiAmazon,
    SiTailwindcss,
} from 'react-icons/si'

const skills = [
    {
        name: 'React',
        icon: SiReact,
        link: 'https://react.dev',
    },
    {
        name: 'Next.js',
        icon: SiNextdotjs,
        link: 'https://nextjs.org',
    },
    {
        name: 'TypeScript',
        icon: SiTypescript,
        link: 'https://www.typescriptlang.org',
    },
    {
        name: 'Node.js',
        icon: SiNodedotjs,
        link: 'https://nodejs.org',
    },
    {
        name: 'MongoDB',
        icon: SiMongodb,
        link: 'https://www.mongodb.com',
    },
    {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        link: 'https://tailwindcss.com',
    },
    {
        name: 'Docker',
        icon: SiDocker,
        link: 'https://www.docker.com',
    },
    {
        name: 'AWS',
        icon: SiAmazon,
        link: 'https://aws.amazon.com',
    },
]

export default function Skills() {
    return (
        <section id="skills" className="py-20 overflow-hidden">
            <div className="container px-4 md:px-6">
                {/* Title */}
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                    <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                        เทคโนโลยีที่เชี่ยวชาญ
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        เครื่องมือที่ใช้จริงในการพัฒนาโปรเจกต์
                    </p>
                </div>

                {/* Auto Slide */}
                <div className="relative">
                    <motion.div
                        className="flex gap-6 w-max"
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 25,
                            ease: 'linear',
                        }}
                    >
                        {[...skills, ...skills].map((skill, index) => {
                            const Icon = skill.icon
                            return (
                                <Link
                                    key={index}
                                    href={skill.link}
                                    target="_blank"
                                    className="block"
                                >
                                    <Card className="w-[200px] hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                                        <CardContent className="flex flex-col items-center justify-center gap-3 py-8">
                                            <Icon className="text-4xl text-primary" />
                                            <span className="font-semibold">{skill.name}</span>
                                        </CardContent>
                                    </Card>
                                </Link>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
