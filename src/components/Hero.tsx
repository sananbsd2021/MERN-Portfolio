'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
            {/* Background decorations */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 border border-primary/20 backdrop-blur-sm">
                        <p>สร้างเว็บไซต์ เทคโนโลยีล่าสุด มี ความเร็ว ประสิทธิภาพ ความสวยงาม ที่เหนือกว่า</p>
                        {/* พร้อมรับงาน Freelance และงานประจำ */}
                        💡ยินดีให้คำปรึกษา ไม่คิดค่าใช้จ่าย 🗣️
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-6"
                >
                    นักพัฒนา Full Stack <br />
                    <span className="text-primary">สร้างสรรค์ประสบการณ์ดิจิทัลที่เหนือระดับ</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl text-muted-foreground max-w-[600px] mb-8"
                >
                    เชี่ยวชาญด้าน MERN Stack เพื่อสร้างแอปพลิเคชันเว็บที่ขยายขนาดได้และมีประสิทธิภาพสูง ด้วยหลักการออกแบบที่ทันสมัย
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 w-full justify-center"
                >
                    <Button size="lg" className="h-12 px-8 text-lg group" asChild>
                        <Link href="#contact">
                            ติดต่อเรา
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-lg" asChild>
                        <Link href="#projects">
                            ดูผลงาน
                        </Link>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-12 flex items-center gap-6 text-muted-foreground"
                >
                    <Link href="https://github.com/sananbsd2021" target="_blank" className="hover:text-primary transition-colors">
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com/in/sanan" target="_blank" className="hover:text-primary transition-colors">
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:sanan@example.com" className="hover:text-primary transition-colors">
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                    </Link>
                    <Link href="https://www.facebook.com/sanan.sanan.10420" target="_blank" className="hover:text-primary transition-colors">
                        <Facebook className="h-6 w-6" />
                        <span className="sr-only">Facebook</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
