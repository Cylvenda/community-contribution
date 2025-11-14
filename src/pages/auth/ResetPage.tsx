import Reset from "@/components/Forms/Reset"
import { GalleryVerticalEnd } from "lucide-react"

const ResetPage = () => {
    return (
        <>
            <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
                <div className="flex w-full max-w-md flex-col gap-6">
                    <a href="#" className="flex items-center gap-2 self-center font-medium">
                        <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                            <GalleryVerticalEnd className="size-4" />
                        </div>
                        Community Contibution Platform
                    </a>
                    <Reset />
                </div>
            </div>

        </>

    )
}

export default ResetPage