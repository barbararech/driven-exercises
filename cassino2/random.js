export default function randomNumber(min, max) { // min e max inclusos
    return Math.floor(Math.random() * (max - min + 1) + min)
}