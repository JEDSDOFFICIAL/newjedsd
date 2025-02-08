import { cn } from "@/lib/utils";
import {Marquee} from "../magicui/marquee";

const reviews = [
  {
   
    body: "Submit A Un-published Manuscript with us",
    
  },
  {
   
    body: "Welcome for Innauragual Article",
   
  },
  {
    
    body: "Publish Your Tutorial with Us",
    
  },
  {
   
    body: "Welcome to Our Editorial Team",
    
  },
  {
    
    body: "Be a Reviwer",
   
  },
  
];

const firstRow = reviews.slice(0, reviews.length);


const ReviewCard = ({
  
  body
}: {
  
  body: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-fit cursor-pointer overflow-hidden rounded-xl border-2 p-4",
        // light styles
        "border-gray-950/[1] shadow-sm shadow-black/50 bg-gray-100/85 hover:bg-gray-400/[5]"
      )}
    >
      {/* <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote> */}
      <p>{body}</p>
    </div>
  );
};

export function MarqueeDemo({className}: {className?: string}) {
  return (
    <div className={cn("relative flex h-fit w-full flex-col items-center justify-center overflow-hidden", className)}>
      <Marquee pauseOnHover className="[--duration:20s]" reverse>
        {firstRow.map((review,index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-cyan-500/50 dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-cyan-500/50 dark:from-background"></div> */}
    </div>
  );
}
