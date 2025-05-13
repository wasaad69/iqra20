import { auth } from "@clerk/nextjs/server";

const allowedIds = [
    "user_2wWnYhw52DiqLe7RsLakPTF56Wq"
];

export const getIsAdmin = async() => {
    const { userId } = await auth();

    if (!userId) {
        return false;
    }
    return allowedIds.indexOf(userId) !== -1
}