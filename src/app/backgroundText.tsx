export default async function BackgroundText() {
    return (
        <div className="background-text">
            {(await fetch("https://raw.githubusercontent.com/BradyBangasser/minifed-cpp/refs/heads/main/minified.txt")).text()}
        </div>
        )
}
