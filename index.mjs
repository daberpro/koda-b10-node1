import fs from "node:fs";
import path from "node:path";

const files_lagu = [
    {
        artist: "madison beer",
        music: [
            "reckless",
            "bittersweet",
            "make you mine",
            "selfish",
            "yes baby"
        ]
    },
    {
        artist: "bruno mars",
        music: [
            "die with a smlie",
            "talking to the moon",
            "just the way you are",
            "Leave the door open",
            "that's what i like"
        ]
    },
    {
        artist: "porter robinson",
        music: [
            "die with a smlie",
            "shelter",
            "sad machine",
            "good bye to a world",
            "everything goes on"
        ]
    },
    {
        artist: "alan walker",
        music: [
            "faded",
            "sing me to sleep",
            "alone",
            "on my way",
            "darkside"
        ]
    },
    {
        artist: "hindia",
        music: [
            "wajahmu ku ingat slalu",
            "secukupnya",
            "everything you are",
            "evaluasi",
            "cincin"
        ]
    }
];


function generateLagu(folder_target) {

    if (!fs.existsSync(folder_target)) {
        fs.mkdirSync(folder_target);
    }

    files_lagu.forEach(({ artist, music: musics }) => {
        musics.forEach((music) => {
            fs.writeFileSync(
                path.join(folder_target, `${artist} - ${music}.mp4`),
                ""
            );
        });
    });
}

generateLagu("lagu-lagu");
