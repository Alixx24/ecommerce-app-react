import { Button } from "../components/ui/button"
import AppLayout from "./layouts/AppLayout"

export default function Shadcn() {


    return (
        <>
             <AppLayout />
            <h1 className="text-2xl font-bold">سلام، داشبورد فارسی 👋</h1>
            <div className="flex gap-2">
                <Button>دکمه‌ی اصلی</Button>
                <Button variant="outline">دکمه‌ی فرعی</Button>
                <Button variant="destructive">حذف</Button>
            </div>
        </>
    )
}
