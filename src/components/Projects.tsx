'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
    {
        title: 'แพลตฟอร์ม E-Commerce',
        description: 'โซลูชันอีคอมเมิร์ซครบวงจร พร้อมระบบตะกร้าสินค้า การชำระเงิน และแดชบอร์ดผู้ดูแลระบบ',
        tags: ['Next.js', 'MongoDB', 'Stripe', 'Shadcn'],
        github: '#',
        demo: '#',
        image: 'ecommerce.png',
    },
    {
        title: 'แอปจัดการงาน (Task Manager)',
        description: 'ระบบจัดการงานที่ทำงานร่วมกันได้แบบเรียลไทม์ พร้อมพื้นที่ทำงานของทีม',
        tags: ['React', 'Node.js', 'Socket.io', 'Tailwind'],
        github: '#',
        demo: '#',
        image: 'task.png',
    },
    {
        title: 'เครื่องมือสร้างคอนเทนต์ AI',
        description: 'แอปพลิเคชัน SaaS ที่ใช้ OpenAI API เพื่อสร้างเนื้อหาทางการตลาด',
        tags: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL'],
        github: '#',
        demo: '#',
        image: 'ai.png',
    },
    {
        title: 'Food Delivery',
        description: 'แอป Food Delivery ครบวงจร พร้อมระบบสั่งอาหารและแดชบอร์ดร้านค้า',
        tags: ['Next.js', 'Tailwind', 'MongoDB', 'Shadcn'],
        github: 'https://github.com/sananbsd2021/fooddelivery',
        demo: 'https://fooddelivery-five-rho.vercel.app/',
        image: 'food.png',
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
    const [imageError, setImageError] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-shadow border-muted-foreground/10">
                {/* IMAGE */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <span className="text-sm font-medium">ดูรายละเอียด</span>
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
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground/30 bg-secondary/30 gap-2">
                            <ImageIcon className="h-10 w-10" />
                            <span className="text-sm font-medium">{project.title}</span>
                        </div>
                    )}
                </div>

                <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>

                <CardFooter className="gap-2">
                    <Button variant="outline" size="sm" className="lg" asChild>
                        <Link href={project.github} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            ดูโค้ด
                        </Link>
                    </Button>

                    <Button size="sm" className="lg" asChild>
                        <Link href={project.demo} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            ดูเดโม
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        ผลงานเด่น
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        ผลงานที่คัดสรรมาเพื่อแสดงทักษะทางเทคนิคและความสามารถในการแก้ปัญหา
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
