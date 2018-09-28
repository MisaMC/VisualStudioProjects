import {Recipe} from '../recipes/recipe.model';
export class RecipeService{
    recipes: Recipe[] = [
        new Recipe('A test recipe 1','this is a simply test 1 out of 3','https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/comidarapida.jpg'),
        new Recipe('A test recipe 2','this is a simply test 2 out of 3','http://foodandtravel.mx/home/wp-content/uploads/2017/08/tacoslapastorFT.jpg'),
        new Recipe('A test recipe 3','this is a simply test 3 out of 3','https://cdn-3.expansion.mx/dims4/default/d528803/2147483647/strip/true/crop/800x533+0+0/resize/800x533!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fbe%2F8f%2F9a20186a476a868772781d5b5ae3%2Falitas.jpg')
      ];
      getRecipes() {
        return this.recipes.slice();
    }

 }
