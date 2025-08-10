import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, User, Shuffle, List } from "lucide-react";
import { Logo } from "./Logo";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { label: "GENRES", icon: List },
    { label: "TYPES", icon: List },
    { label: "NEW RELEASES", icon: Shuffle },
    { label: "UPDATES", icon: Shuffle },
    { label: "ONGOING", icon: Shuffle },
    { label: "RECENT", icon: Shuffle },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Logo />
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md mx-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search anime"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background-secondary border-border focus:border-primary"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="text-sm">
              <Filter className="w-4 h-4 mr-1" />
              FILTER
            </Button>
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                className="text-sm hover:text-primary"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-sm bg-primary hover:bg-primary-hover">
              en
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              jp
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};