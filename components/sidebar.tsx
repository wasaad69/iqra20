import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import {
    ClerkLoading,
    ClerkLoaded,
    UserButton,
} from "@clerk/nextjs";
import {Loader} from "lucide-react";

type Props = {
    className?: string;
};

export const Sidebar = ({ className } :Props) => {
    return(
        <div className={cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 bg-gray-300 flex-col", className, )}>
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/ahmad.png" height={40} width={40} alt="Mascot"/>
                    <h1 className="text-2xl fontextrabold text-green-650 tracking-wide">
                        Iqra
                    </h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem 
                href="/learn" 
                label="learn"
                iconSrc="/blue_body_square.png"
                />
                <SidebarItem 
                href="/leaderboard" 
                label="leaderboard"
                iconSrc="/blue_body_square.png"
                />
                <SidebarItem 
                href="/shop" 
                label="shop"
                iconSrc="/blue_body_square.png"
                />
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton
                     />
                </ClerkLoaded>
            </div>
        </div>
    );
};