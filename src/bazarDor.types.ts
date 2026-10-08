export interface INavlink {
  icon: "🍚" | "🫘" | "🛢️" | "🥬" | "🐟" | "🍗" | "🥛" | "🌶️";
  id: string;
  nameBn: string;
  slug: string;
}

export interface IMarqueeText {
  category: string;
  categoryIcon: string;
  categoryNameBn: string;
  change: { dir: string; pct: number };
  id: 1;
  image: string;
  lastMonth: number;
  lastWeek: number;
  markets: {
    division: string;
    market: string;
    max: number;
    min: number;
  }[];
  nameBn: string;
  slug: string;
  today: number;
  unit: string;
  yesterday: number;
}
