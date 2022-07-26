import {
    collection,
    addDoc,
    doc,
    deleteDoc,
    getDocs,
    query,
  } from "firebase/firestore";
  
  import { firestore } from "./firebase";
  import { Recipe } from "../recipe";
  

class RecipeService{

    constructor(){
        this.collection="recipes";

    }
    async makeRecipe(recipe){
        const collectionReference=collection(firestore,this.collection)
        const docRef=await addDoc(collectionReference,{
            name:recipe.name,
            description:recipe.description
        });
        recipe.id=docRef.id
        return recipe;
    }
    async readRecipes(){
        const collectionReference = collection(firestore, this.collection);
    const q = query(collectionReference);

    const querySnapshot = await getDocs(q);

    const recipes = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      
      const recipe = new Recipe(
        data.name,
        data.description,
        doc.id,
      );
      recipes.push(recipe);
    });
    return recipes;

    }
    async removeRecipe(recipe){
        await deleteDoc(doc(firestore, this.collection,recipe.id))

    }



}
const service= new RecipeService();

export default service;