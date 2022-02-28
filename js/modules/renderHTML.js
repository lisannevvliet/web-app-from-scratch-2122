import { $ } from './$.js';
import { veganStatus } from './veganStatus.js';

export function renderHTML(data) {
    for (let i in data.products) {
        if (data.products[i].product_name != '') {
            // Empty list of ingredients.
            let ingredients = ''
            // Retrieve the color which shows the vegan status.
            const color = veganStatus(data.products[i].ingredients_analysis_tags)

            // Fill the list of ingredients if there are any.
            if (data.products[i].ingredients_text) { ingredients = `Ingredients: ${data.products[i].ingredients_text}.<br>` }
            
            // Add the product name, ingredients and image to the page.
            $('ul').insertAdjacentHTML('beforeend',`<li>
            <button class='product'><span style='color:${color}'>${data.products[i].product_name}</span><br>
            ${ingredients}
            <img src='${data.products[i].image_small_url}' alt='${data.products[i].product_name}'></button><br><br>
            </li>`)
        }
    }

    // If there are more pages, show the 'More' button.
    if (data.products.length == 24) {
        $('.more').style.display = 'block'
    }
}