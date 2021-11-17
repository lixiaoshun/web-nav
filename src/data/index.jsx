import home from "./home.json";
import lean from "./lean.json";
import life from "./life.json";
import movies from "./movies.json";
import tool from "./tool.json";

export const getData = function(title) {
  switch (title) {
    case "home":
      return home;  
    case "lean":
      return lean;
    case "life":
      return life;
    case "movies":
      return movies;
    case "tool":
      return tool;
  }
};