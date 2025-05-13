"use client";

import { Check, Crown, Star, MoonStar, TextIcon } from "lucide-react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "react-circular-progressbar/dist/styles.css";
import LessonIdPage from "@/app/lesson/[lessonId]/page";
import { Progress } from "@/components/ui/progress";

type Props = {
    id: number;
    index: number;
    totalCount: number;
    locked?: boolean;
    current?: boolean;
    percentage: number;
};

export const LessonButton = ({
    id,
    index,
    totalCount,
    locked,
    current,
    percentage
}: Props) => {
    const cycleLength = 8;
    const cycleIndex = index % cycleLength;



    const isFirst = index === 0;
    const isLast = index === totalCount;
    const isCompleted = !current && !locked;

const TextIcon = ({ text }: { text: string }) => (
  <div className="h-10 w-30 text-white-700 flex items-center justify-center font-bold text-sm">
    {text}
  </div>
);
    const Icon =
  isCompleted
    ? () => <TextIcon text="Finished" />  // Checkmark for completed
    : isLast
    ? () => <TextIcon text="Fininsh Line" /> // Crown emoji
    : () => <TextIcon text="Insha allah" />; // Star emoji or just text

                    //<div className="absolute -top-8 left-28 px-3 py-2.5 border-2 font-bold uppercase text-purple-500 bg-white rounded-xl animate-bounce tracking-wide z-10">
                        //Iqra
                        //<div className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2" />
                    //</div>

    const content = (
        <div
            className="relative"
            style={{
                marginTop: isFirst && !isCompleted ? 60 : 24,
            }}
        >
            {current ? (
                <div >
                    <div>
                        <Button
                            size="rounded"
                            variant={locked ? "locked" : "secondary"}
                            className="h-[70px] w-[300px] border-b-8 animate-bounce"
                            
                        >

                            <div  className={cn(
                                    locked
                                        ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                                        : "fill-primary-foreground text-primary-foreground",
                                    isCompleted && "fill-none stroke-[4]"
                                )}>
                                <Progress className=" bg-gray-100 transition-all" value={percentage} />
                                <p>Iqra</p></div>
                            
                        </Button>
                    </div>
                </div>
            ) : (
                <Button
                    size="rounded"
                    variant={locked ? "locked" : "secondary"}
                    className="h-[70px] w-[300px] border-b-8"
                >
                    
                    <Icon  />
                </Button>
            )}
        </div>
    );

    if (locked) {
        return <div className="cursor-not-allowed">{content}</div>;
    }

    return <Link href={`/lesson/${id}`}>{content}</Link>;
//      add/${id}
};

