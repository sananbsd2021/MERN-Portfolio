'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-20 bg-background/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative aspect-square max-w-sm mx-auto md:mr-auto rounded-2xl overflow-hidden shadow-2xl bg-muted">
                            {/* Placeholder for About Image if we had one, or a stylized div */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 flex items-center justify-center text-4xl font-bold text-muted-foreground/20">
                                <img src="sanan__4448270.jpg" alt="About" className="w-full h-full object-cover fit-cover" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full md:w-1/2 space-y-6"
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">เกี่ยวกับฉัน</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            ผมเป็นนักพัฒนา Full Stack ที่มีความหลงใหลและเชี่ยวชาญใน MERN stack (MongoDB, Express, React, Node.js)
                            จุดเริ่มต้นของผมคือความอยากรู้อยากเห็นในการทำงานของเว็บไซต์ จนพัฒนามาเป็นอาชีพในการสร้างสรรค์
                            เว็บแอปพลิเคชันที่มีความซับซ้อนและประสิทธิภาพสูง
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            ผมมุ่งเน้นการสร้างอินเทอร์เฟซที่ใช้งานง่ายและเข้าใจผู้ใช้ พร้อมด้วยโครงสร้างฝั่งเซิร์ฟเวอร์ที่แข็งแกร่งและขยายขนาดได้
                            ไม่ว่าจะเป็น Landing Page เรียบง่าย หรือแพลตฟอร์ม SaaS ที่ซับซ้อน ผมทุ่มเทและใส่ใจในรายละเอียดทางเทคนิคทุกขั้นตอน
                        </p>
                        <div className="flex gap-4 pt-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-primary">10+</span>
                                <span className="text-sm text-muted-foreground">ปีประสบการณ์</span>
                            </div>
                            <div className="w-px bg-border h-12"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-primary">20+</span>
                                <span className="text-sm text-muted-foreground">โปรเจกต์สำเร็จ</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
