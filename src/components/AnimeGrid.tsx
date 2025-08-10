import { AnimeCard } from "./AnimeCard";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

export const AnimeGrid = () => {
  // Mock data for demonstration
  const latestAnime = [
    {
      title: "One Piece",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      episode: "Episode 1122",
      type: "TV",
      status: "CC" as const,
      rating: "1130"
    },
    {
      title: "Kaiju No. 8 Season 2",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=600&fit=crop",
      episode: "Episode 4",
      type: "TV",
      status: "CC" as const,
      rating: "4"
    },
    {
      title: "My Dress-Up Darling Season 2",
      image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=600&fit=crop",
      episode: "Episode 2",
      type: "TV",
      status: "SUB" as const
    },
    {
      title: "Demon Slayer: Infinity Castle",
      image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop",
      episode: "Movie",
      type: "Movie",
      status: "CC" as const,
      rating: "Movie"
    },
    {
      title: "Attack on Titan Final Season",
      image: "https://images.unsplash.com/photo-1611077543796-aa4a48cfeee6?w=400&h=600&fit=crop",
      episode: "Episode 24",
      type: "TV",
      status: "DUB" as const
    },
    {
      title: "Spirited Away",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      episode: "Movie",
      type: "Movie",
      status: "CC" as const,
      rating: "Movie"
    }
  ];

  const trendingAnime = [
    {
      title: "One Piece",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      type: "TV",
      status: "CC" as const,
      rating: "1130"
    },
    {
      title: "Kaiju No. 8 Season 2",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=400&fit=crop",
      type: "TV",
      status: "CC" as const,
      rating: "4"
    },
    {
      title: "My Dress-Up Darling Season 2",
      image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=300&h=400&fit=crop",
      type: "TV"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Latest Updates */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">LATEST UPDATES</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="border-border hover:border-primary">
              All
            </Button>
            <Button variant="ghost" size="sm">
              SUB
            </Button>
            <Button variant="ghost" size="sm">
              DUB
            </Button>
            <Button variant="ghost" size="sm">
              China
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {latestAnime.map((anime, index) => (
            <AnimeCard key={index} {...anime} />
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <aside className="lg:fixed lg:top-24 lg:right-4 lg:w-80 lg:space-y-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-4">
            <Flame className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-foreground">Top Trending</h3>
            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
              NOW
            </span>
          </div>
          
          <div className="space-y-3">
            {trendingAnime.map((anime, index) => (
              <div key={index} className="flex items-center space-x-3 cursor-pointer group">
                <span className="text-2xl font-bold text-primary group-hover:text-primary-hover">
                  {index + 1}
                </span>
                <img 
                  src={anime.image} 
                  alt={anime.title}
                  className="w-12 h-16 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-card-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {anime.title}
                  </h4>
                  <div className="flex items-center space-x-2 mt-1">
                    {anime.status && anime.rating && (
                      <span className="text-xs bg-primary text-primary-foreground px-1 rounded">
                        {anime.status} {anime.rating}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground">{anime.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};