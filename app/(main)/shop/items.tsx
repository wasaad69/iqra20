"use client";

import { refillHearts } from "@/actions/user-progress";
import { createStripeUrl } from "@/actions/user-subscription";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useTransition } from "react";

const POINTS_TO_REFILL= 10;

type Props = {
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
};

export const Items = ({
    hearts,
    points,
    hasActiveSubscription,
}: Props) => {
    const [pending, startTransition] = useTransition();

    const onRefillHearts = () => {
        if (pending || hearts === 5 || points < POINTS_TO_REFILL) {
            return;
        }
        startTransition(()=> {
            refillHearts()
            .catch(() => toast.error("Something went wrong"))

        });

    };

    const onUpgrade = () => {
        startTransition(() => {
            createStripeUrl()
            .then((response) => {
                if (response.data) {
                    window.location.href = response.data;
                }
            })
            .catch(() => toast.error("Something went wrong"))
        });
    };

    return (
        <ul className="w-full">
            <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
                <Image 
                src="/heart.png"
                alt="Heart"
                height={60}
                width={60}
                />
                <div className="flex-1">
                    <p className="text-neutral-700 text-base lg:text-xl font-bold">
                        Refil Hearts
                    </p>
                </div>
                <Button
                onClick={onRefillHearts}
                disabled={pending ||
                    hearts === 5 || points < POINTS_TO_REFILL}
                >
                    {hearts === 5
                    ? "full"
                : (
                    <div className="flex items-center">
                        <Image 
                        src="/blue_body_square.png"
                        alt="Points"
                        height={20}
                        width={20}/>
                        <p>
                            10
                        </p>
                    </div>
                )}
                </Button>
            </div>
            <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
                <Image
                src="/EpicHeart.png"
                alt="Unlimited"
                height={60}
                width={60}
                />
            <div className="flex-1">
                <p className="text-neutral-700 text-base lg:text-xl font-bold">
                    Unlimited Hearts
                </p>
            </div>
            <Button
                onClick={onUpgrade}
                disabled={pending || hasActiveSubscription}
            >
                {hasActiveSubscription ? "active": "upgrade"}
            </Button>
         </div>
        </ul>
    );
};