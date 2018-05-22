import { Prayer } from '../_models/index';

export const Prayer_1:Prayer = {
    title: "5 Days of Renewal",
    description: "Bring peace to your mind with 5 days of renewing prayer through scripture",
    id: 1,
    prayers: [
        `Jesus, gentle Shepherd,
        Bless Thy lamb to-day;
        Keep me in Thy footsteps,
        Never let me stray.
        Guard me through the daytime.
        Every hour, I pray;
        Keep my feet from straying
        From the narrow way. Amen.`,
        `Our Father in heaven, hallowed be your name. Your kingdom come, your will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from evil.`
    ]
}

export const Prayer_2:Prayer = {
    title: "14 Days of Prayers For Parents",
    description: "Start this 15 day guided prayer to pray life, grace and peace over your children.",
    id: 2,
    prayers: [
        "test 1 - 1",
        "test 1 - 2"
    ]
}

export const Prayer_3:Prayer = {
    title: "Day 3 - Prayer For Repentance",
    description: "Pray this prayer leading your children into repentence to encourage them to seek Christ.",
    id: 3,
    prayers: [
        "test 1 - 1",
        "test 1 - 2"
    ]
}

export const Prayers:Prayer[] = [Prayer_1, Prayer_2,
                                     Prayer_3]