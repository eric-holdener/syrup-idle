import SmithingBox from "./SmithingBox";
import SmithingHeader from "./SmithingHeader";
import { All_Smithing_Recipes } from "./AllSmithingRecipes";
import { useDispatch } from "react-redux";
import { setTraining } from "../../../../state_management/Redux/Character/CharacterSlice";

export default function Smithing() {
  const dispatch = useDispatch();

  function setSmithingTraining(item) {
    dispatch(setTraining({
      skill_tree: "smithing",
      item: item
    }))
  }
  return (
    <div className="w-full h-full overflow-scroll">
      <SmithingHeader/>
      <div className="flex gap-10 w-full h-5/6 flex-wrap justify-center">
        {All_Smithing_Recipes.map((recipe) => <SmithingBox recipe={recipe} setSmithingTraining={setSmithingTraining} key={recipe.name}/>)}
      </div>
    </div>
  )
}