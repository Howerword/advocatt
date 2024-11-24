document.addEventListener("partialsLoaded", async () => {
    try {
        const header = await import("./swiper.js")
    } catch (error) {
        console.error("Error loading Swiper:", error)
    }
});
