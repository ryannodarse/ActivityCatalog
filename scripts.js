//Run when page is fully loaded
window.onload = (event) => {
    // Variables: Grab all anchored items that are within lists
    const activities = document.querySelectorAll("li a");

    // Skills stretch: create dropdown for Browse
    const browse = document.querySelector("button[type='browse']");
    // const dropdown = document.createElement

    // Glow function
    function glow(activity) {
        activity.style.boxShadow = "0px 0px 10px 4px rgba(0, 255, 255, 0.5)";
    };

    // Remove glow function
    function removeGlow(activity) {
        activity.style.boxShadow = "none";
    };

    // forEach loop to iterate over activity links
    activities.forEach(activity => {
        // console.log(activity.style.backgroundColor);
        // let tagColor = activity.style.backgroundColor);

        // Basic logical decision
        if (activity.textContent.includes("Water")) {
            activity.style.color = "lightblue";
        }

        // Mouseover functionality
        activity.addEventListener("mouseover", () => glow(activity));

        // Mouseout functionality
        activity.addEventListener("mouseout", () => removeGlow(activity));
    })

    // Event listener
    browse.addEventListener("click", () => alert("Browse dropdown feature coming soon! Try navigating with the tags at the bottom."));

}
