import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'sanpf-cv.vercel.app';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/', // Disallow API routes from crawling
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
