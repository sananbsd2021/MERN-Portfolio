'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
    name: z.string().min(2, 'กรุณาระบุชื่ออย่างน้อย 2 ตัวอักษร'),
    email: z.string().email('รูปแบบอีเมลไม่ถูกต้อง'),
    message: z.string().min(10, 'ข้อความต้องมีความยาวอย่างน้อย 10 ตัวอักษร'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Failed to submit');

            setSubmitStatus('success');
            reset();
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6 max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="border-muted-foreground/10 shadow-lg">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl font-bold">ติดต่อเรา</CardTitle>
                            <CardDescription>
                                มีโปรเจกต์ในใจไหม? มาคุยกันว่าเราจะร่วมงานกันได้อย่างไร
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {submitStatus === 'success' ? (
                                <div className="text-center py-10 space-y-4">
                                    <div className="text-5xl">🎉</div>
                                    <h3 className="text-xl font-bold text-green-500">ส่งข้อความเรียบร้อยแล้ว!</h3>
                                    <p className="text-muted-foreground">ขอบคุณที่ติดต่อมา ผมจะรีบตอบกลับโดยเร็วที่สุดครับ</p>
                                    <Button variant="outline" onClick={() => setSubmitStatus('idle')}>ส่งข้อความอื่น</Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">ชื่อ</Label>
                                        <Input id="name" placeholder="ชื่อ-นามสกุล" {...register('name')} />
                                        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">อีเมล</Label>
                                        <Input id="email" type="email" placeholder="example@email.com" {...register('email')} />
                                        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">ข้อความ</Label>
                                        <Textarea id="message" placeholder="รายละเอียดโปรเจกต์..." className="min-h-[120px]" {...register('message')} />
                                        {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
                                    </div>

                                    {submitStatus === 'error' && (
                                        <p className="text-sm text-red-500 text-center">เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง</p>
                                    )}

                                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> กำลังส่ง...
                                            </>
                                        ) : 'ส่งข้อความ'}
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
