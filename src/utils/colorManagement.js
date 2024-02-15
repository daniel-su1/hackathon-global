const getColorScheme = (eventType) => {
  let colorScheme = {
    bgGradient: "linear-gradient(90deg,  rgb(63, 57, 48), rgb(42, 65, 80))", // Default background gradient
    startingColor: "rgb(247, 206, 88)", // Default starting color
    endingColor: "rgb(25, 251, 255)", // Default ending color
    tagColor: "rgba(247, 206, 88, 0.6)", // Default tag color
    eventType: "Tech Talk", // Default event type
    accentGradient: `linear-gradient(90deg, "rgb(247, 206, 88)", "rgb(25, 251, 255)")`
  };

  switch (eventType) {
    case "workshop":
      colorScheme = {
        bgGradient: "linear-gradient(90deg, rgb(23, 50, 81), rgb(43, 37, 80))",
        startingColor: "rgb(31, 166, 255)",
        endingColor: "rgb(137, 107, 255)",
        tagColor: "rgba(31, 166, 255, 0.6)",
        eventType: "Workshop",
      };
      break;
    case "activity":
      colorScheme = {
        bgGradient: "linear-gradient(90deg, rgb(64, 45, 43), rgb(67, 25, 80))",
        startingColor: "rgb(240, 147, 68)",
        endingColor: "rgb(255, 44, 251)",
        tagColor: "rgba(240, 147, 68, 0.6)",
        eventType: "Activity",
      };
      break;
  }
  colorScheme.accentGradient = `linear-gradient(90deg, ${colorScheme.startingColor}, ${colorScheme.endingColor})`;
  colorScheme.startingColorTransparent = colorScheme.startingColor
  .replace("rgb", "rgba")
  .replace(
    ")",
    ", " + (eventType === "tech_talk" ? "0.6)" : "0.75)")
  );
  colorScheme.endingColorTransparent = colorScheme.endingColor
  .replace("rgb", "rgba")
  .replace(
    ")",
    ", " + (eventType === "tech_talk" ? "0.6)" : "0.75)")
  );
  return colorScheme;
};

export default getColorScheme;
