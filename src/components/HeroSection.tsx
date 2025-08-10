import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Bookmark, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-anime.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-end pb-20">
        <div className="max-w-2xl">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            The Summer Hikaru Died
          </h1>

          {/* Tags */}
          <div className="flex items-center space-x-3 mb-4">
            <Badge variant="destructive" className="bg-primary text-primary-foreground">
              CC 5
            </Badge>
            <span className="text-foreground font-medium">TV</span>
            <span className="text-muted-foreground">Mystery, Supernatural, Psychological</span>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            It has been six months since Yoshiki Tsujinaka's best friend, Hikaru Indou, went missing in the mountains and 
            returned a week later with no recollection of what had transpired. Certain that it is not the Hikaru he knows who 
            came back, Yoshiki finally...
          </p>

          {/* Details */}
          <div className="grid grid-cols-3 gap-6 mb-8 text-sm">
            <div>
              <span className="text-muted-foreground block">Rating</span>
              <span className="text-foreground font-medium">R</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Release</span>
              <span className="text-foreground font-medium">2025</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Quality</span>
              <span className="text-foreground font-medium">HD</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 text-lg font-medium">
              <Play className="w-5 h-5 mr-2" />
              WATCH NOW
            </Button>
            <Button variant="outline" size="icon" className="border-border hover:border-primary">
              <Bookmark className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-2 text-foreground">
        <Button variant="ghost" size="icon" className="hover:bg-background-secondary">
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <span className="text-sm">1 / 10</span>
        <Button variant="ghost" size="icon" className="hover:bg-background-secondary">
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};