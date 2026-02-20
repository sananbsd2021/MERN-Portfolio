'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Image as ImageIcon, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';

const categories = ['All', 'Web', 'AI', 'Fullstack'];

const projects = [
    {
        title: 'แพลตฟอร์ม E-Commerce',
        description: 'โซลูชันอีคอมเมิร์ซครบวงจร พร้อมระบบตะกร้าสินค้า การชำระเงิน และแดชบอร์ดผู้ดูแลระบบ เสริมด้วยระบบจัดการสต็อกขั้นสูง',
        tags: ['Next.js', 'MongoDB', 'Stripe', 'Shadcn'],
        category: 'Web',
        github: '#',
        demo: '#',
        image: 'ecommerce.png',
    },
    {
        title: 'แอปจัดการงาน (Task Manager)',
        description: 'ระบบจัดการงานที่ทำงานร่วมกันได้แบบเรียลไทม์ พร้อมพื้นที่ทำงานของทีมและการแจ้งเตือนอัจฉริยะ',
        tags: ['React', 'Node.js', 'Socket.io', 'Tailwind'],
        category: 'Fullstack',
        github: 'https://github.com/sananbsd2021/MERN-TaskManager',
        demo: 'https://mern-task-manager-weld.vercel.app/',
        image: 'task.png',
    },
    {
        title: 'เครื่องมือสร้างคอนเทนต์ AI',
        description: 'แอปพลิเคชัน SaaS ที่ใช้ OpenAI API เพื่อสร้างเนื้อหาทางการตลาดและรูปภาพโดยอัตโนมัติ',
        tags: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL'],
        category: 'AI',
        github: '#',
        demo: '#',
        image: 'ai.png',
    },
    {
        title: 'Food Delivery',
        description: 'แอป Food Delivery ครบวงจร พร้อมระบบสั่งอาหารและแดชบอร์ดร้านค้าที่ใช้งานง่าย',
        tags: ['Next.js', 'Tailwind', 'MongoDB', 'Shadcn'],
        category: 'Web',
        github: 'https://github.com/sananbsd2021/MERN-FoodDelivery',
        demo: 'https://mern-food-delivery-sigma.vercel.app/',
        image: 'food.png',
    },
    {
        title: 'Living Room',
        description: 'แพลตฟอร์ม Living Room มือสอง ซื้อบ้าน ขายบ้าน คอนโด ที่ดิน อพาร์ทเม้นท์ อสังหาริมทรัพย์ระดับพรีเมียม',
        tags: ['Next.js', 'Tailwind', 'MongoDB', 'Shadcn'],
        category: 'Web',
        github: 'https://github.com/sananbsd2021/MERN-Livingroom',
        demo: 'https://mern-livingroom.vercel.app/',
        image: 'livingroom.png',
    },
    {
        title: 'WMS Pro - Warehouse Management System',
        description: 'ระบบจัดการคลังสินค้าสำหรับองค์กรขนาดใหญ่ พร้อมระบบสั่งสินค้าและแดชบอร์ดสรุปผลแบบเรียลไทม์',
        tags: ['React', 'Node.js', 'Socket.io', 'Tailwind'],
        category: 'Fullstack',
        github: 'https://github.com/sananbsd2021/MERN-WMSpro',
        demo: 'https://mern-wm-spro.vercel.app/',
        image: 'wms.png',
    },
    {
        title: 'Mobile Application Line OA Line Liff Application',
        description: 'Line LIFF : Mobile Application Line OA Line Liff Application เชื่อมต่อกับ Line สำหรับธุรกิจ',
        tags: ['Mobile App', 'Tailwind', 'Line LIFF'],
        category: 'Mobile App',
        github: 'https://github.com/sananbsd2021/LineLiff',
        demo: 'https://mern-app-script.vercel.app',
        image: 'lineliff.png',
    },
    {
        title: 'Bun + Elysia + MongoDB = Stack ที่ Dev สาย Performance',
        description: 'REST API พร้อม Deploy แล้ว ด้วยพลัง Elysia + MongoDB',
        tags: ['Bun', 'Elysia', 'Mongodb'],
        category: 'API',
        github: 'https://github.com/sananbsd2021/elysia-api-development',
        demo: 'https://elysia-api-development.vercel.app/',
        image: 'lineliff.png',
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
    const [imageError, setImageError] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
        >
            <Card className="h-full flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-300 border-muted-foreground/10 bg-card/50 backdrop-blur-sm">
                {/* IMAGE */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 translate-y-2 group-hover:translate-y-0">
                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-semibold text-primary">Explore Project</span>
                            <div className="h-0.5 w-12 bg-primary rounded-full transition-all duration-500 delay-100 transform scale-x-0 group-hover:scale-x-100 origin-left" />
                        </div>
                    </div>

                    {!imageError ? (
                        <Image
                            src={
                                project.image.startsWith('http')
                                    ? project.image
                                    : `/projects/${project.image}`
                            }
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground/30 bg-secondary/30 gap-2">
                            <ImageIcon className="h-10 w-10" />
                            <span className="text-sm font-medium">{project.title}</span>
                        </div>
                    )}
                </div>

                <CardHeader className="space-y-1">
                    <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-[10px] uppercase tracking-wider bg-primary/5 text-primary border-primary/20">
                            {project.category}
                        </Badge>
                    </div>
                    <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2 min-h-[40px] text-sm leading-relaxed">
                        {project.description}
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow pt-0">
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-[10px] px-2 py-0 bg-secondary/50 font-normal">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>

                <CardFooter className="gap-3 pt-4 border-t border-muted/50">
                    <Button variant="ghost" size="sm" className="w-[100px] justify-center group/btn hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                        <Link href={project.github} target="_blank">
                            <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                            <span className="text-xs font-medium">Github</span>
                        </Link>
                    </Button>

                    <Button size="sm" className="w-[100px] justify-center shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all" asChild>
                        <Link href={project.demo} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            <span className="text-xs font-medium">Demo</span>
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="py-24 bg-background/50 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60">
                            ผลงานที่ภาคภูมิใจ
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-[800px] mx-auto leading-relaxed">
                            รวมโปรเจกต์ที่ผมได้พัฒนาขึ้นเพื่อแก้ปัญหาจริงและฝึกฝนทักษะในเทคโนโลยีสมัยใหม่
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-2 pt-4"
                    >
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={activeCategory === category ? "default" : "outline"}
                                size="sm"
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full px-6 transition-all duration-300 ${activeCategory === category
                                    ? "shadow-lg shadow-primary/20 scale-105"
                                    : "hover:bg-primary/5 hover:border-primary/30"
                                    }`}
                            >
                                {category}
                            </Button>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[400px]"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                        <Filter className="h-10 w-10 mb-4 opacity-20" />
                        <p>ยังไม่มีโปรเจกต์ในหมวดหมู่นี้</p>
                    </div>
                )}
            </div>
        </section>
    );
}
