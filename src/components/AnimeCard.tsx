import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface AnimeCardProps {
  title: string;
  image: string;
  episode?: string;
  type: string;
  status?: "CC" | "DUB" | "SUB";
  rating?: string;
}

export const AnimeCard = ({ title, image, episode, type, status, rating }: AnimeCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay with badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Top badges */}
        <div className="absolute top-2 left-2 flex items-center space-x-1">
          {status && (
            <Badge 
              variant={status === "CC" ? "destructive" : "secondary"}
              className={`text-xs ${
                status === "CC" ? "bg-primary text-primary-foreground" : 
                status === "DUB" ? "bg-green-600" : "bg-blue-600"
              }`}
            >
              {status} {rating}
            </Badge>
          )}
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-2 left-2 right-2">
          <Badge variant="secondary" className="text-xs mb-1">
            {type}
          </Badge>
          {episode && (
            <p className="text-xs text-muted-foreground">{episode}</p>
          )}
        </div>
      </div>
      
      <div className="p-3">
        <h3 className="font-medium text-sm text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </Card>
  );
};