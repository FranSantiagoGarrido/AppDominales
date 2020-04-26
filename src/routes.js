import Home from './components/Home.vue';
import SportNavBar from './components/SportNavBar.vue';
import Recipe from './components/Recipe.vue';
import Wellcome from './components/Wellcome.vue';
import Nutritionist from './components/Nutritionist.vue';

export default [
{path:'/', component:Wellcome},
{path:'/home', component:Home},
{path:'/sport', component:SportNavBar},
 {path:'/recipe', component:Recipe},
 {path:'/wellcome', component:Wellcome},
 {path:'/nutritionist', component:Nutritionist},  
]