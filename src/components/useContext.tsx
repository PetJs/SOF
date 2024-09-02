import { useContext } from "react";
import { RecipeContext } from "./suggestions";

function useRecipeContext() {
    const context = useContext(RecipeContext); //Allows us to access the context
    if (!context) {
      throw new Error("useRecipeContext must be used within an AppProvider");
    }
    return context;
  };
  
  export default useRecipeContext;