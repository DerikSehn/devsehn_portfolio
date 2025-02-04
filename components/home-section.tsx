import { cn } from "@/lib/utils";

export default function HomeSection(props: { id: string, children: React.ReactNode, className?: string }) {

    return (
        <section className={cn("relative min-h-screen flex items-center justify-center overflow-hidden   bg-black", props.className)} id={props.id}>
            <div className="container mx-auto px-4 text-center z-10">
                {props.children}
            </div>
        </section>
    )   

}