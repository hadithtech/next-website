import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'قريبًا | بودكاست حديث التقنية',
    description: 'حلقات جديدة ومثيرة قادمة قريبًا. اشترك للبقاء على اطلاع!',
};

export default function ComingSoonPageAr() {
    return (
        <div className="min-h-screen flex items-center justify-center py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Icon */}
                    <div className="mb-8">
                        <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                            <svg
                                className="w-12 h-12 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Content */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        المزيد من الحلقات قريبًا
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8">
                        نحن نعمل على محتوى جديد ومثير. ترقبوا الحلقات القادمة التي تضم ضيوفًا رائعين ومحادثات ثاقبة!
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/ar/subscribe"
                            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                        >
                            اشترك للحصول على التحديثات
                        </Link>

                        <Link
                            href="/ar/podcasts"
                            className="inline-flex items-center justify-center px-8 py-3 border border-input rounded-lg font-semibold hover:bg-accent transition-colors"
                        >
                            تصفح الحلقات المتاحة
                        </Link>
                    </div>

                    {/* Features */}
                    <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
                        <div>
                            <h3 className="font-semibold mb-2">📅 جدول منتظم</h3>
                            <p className="text-sm text-muted-foreground">
                                حلقات جديدة كل أسبوع
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">🎙️ ضيوف خبراء</h3>
                            <p className="text-sm text-muted-foreground">
                                قادة الصناعة والمبتكرون
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">💡 رؤى عميقة</h3>
                            <p className="text-sm text-muted-foreground">
                                مناقشات تقنية متعمقة
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
