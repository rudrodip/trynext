import ThemeToggler from "@/components/theme/toggler";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <div className="w-full flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">{siteConfig.name}</h1>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="outline" className="rounded-full" asChild>
            <a href={siteConfig.socials.github} target="_blank">
              <Github className="w-4 h-4" />
            </a>
          </Button>
          <ThemeToggler className="border" />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-8 px-4">
        <div className="max-w-5xl text-center space-y-4">
          <h2 className="text-4xl sm:text-6xl font-bold font-heading">
            {siteConfig.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>
      </div>

      <footer className="py-8 text-center text-muted-foreground">
        <p>Created by <a href={siteConfig.creator.url} target="_blank" className="underline hover:no-underline">{siteConfig.creator.name}</a></p>
      </footer>
    </main>
  )
}
