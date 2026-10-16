import { Inter, Cairo } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";
import { getDirection } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cairo = Cairo({
    subsets: ["arabic", "latin"],
    display: 'swap',
    variable: '--font-cairo',
});

export const metadata: Metadata = {
    title: "حديث التقنية | Hadith Tech",
    description: "بودكاست تقني عربي يستضيف خبراء ومبتكرين في مجال التكنولوجيا",
    openGraph: {
        title: "حديث التقنية | Hadith Tech",
        description: "بودكاست تقني عربي يستضيف خبراء ومبتكرين في مجال التكنولوجيا",
        locale: "ar_SA",
    },
};

export default function ArRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ar" dir="rtl" className={cairo.variable}>
            <body className="font-sans">
                <Navbar />
                <main className="py-2">{children}</main>
                <Footer locale="ar" />
            </body>
        </html>
    );
}
