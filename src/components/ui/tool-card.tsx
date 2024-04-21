import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowRight, MessageSquare, File, Code } from "lucide-react"

const tools = [
    {
        label: "Chat",
        icon: MessageSquare,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        href: "/chat"
    },
    {
        label: "Chat with PDF",
        icon: File,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        href: "/chat-pdf"
    },
    {
        label: "Code Generation",
        icon: Code,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        href: "/code-gen"
    },
]

export default function ToolCard() {
    return (
        <div className="md:p-10 space-y-7">
            {tools.map((tool) => (
                <Card
                    key={tool.href}
                    className="container w-1/5 h-20 pl-4 border flex items—center justify-between hover:shadow-md content-center transition cursor-pointer">
                    <div className="flex items-center gap-x-4">
                        <div className={cn("p-2 w—fit rounded", tool.bgColor)}>
                            <tool.icon className={cn("w-8 h—8", tool.color)} />
                        </div>
                        <div className="font-semibold">
                            {tool.label}
                        </div>
                    </div>
                    <ArrowRight className="w-8 h-8 mt-6" />
                </Card>
            ))}
        </div>
    )
}