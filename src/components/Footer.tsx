export default function Footer() {
    return (
        <footer className="py-8 bg-muted/50 border-t">
            <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Sanan - MERN Developer. สงวนลิขสิทธิ์
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <a href="#" className="hover:text-primary transition-colors">นโยบายความเป็นส่วนตัว</a>
                    <a href="#" className="hover:text-primary transition-colors">เงื่อนไขการให้บริการ</a>
                </div>
            </div>
        </footer>
    );
}
