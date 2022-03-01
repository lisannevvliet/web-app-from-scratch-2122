import { emojis } from './emojis.js';
import { $ } from './$.js';

export function render(data) {
    for (let i in data.products) {
        if (data.products[i].product_name != '') {
            // Empty string for the image.
            let image = ''

            // Add the image if there is any.
            if (data.products[i].image_small_url) {
                image = `<div class='image'><img src='${data.products[i].image_small_url}' alt='${data.products[i].product_name}'></div>`
            } else {
                image = `<div class='image'><img src='img/placeholder-image.png' alt='${data.products[i].product_name}'></div>`
            }
            
            // Add the product name, ingredients and image to the page.
            $('ul').insertAdjacentHTML('beforeend',`<li><button class='product'>
            ${image}
            <span class='span'>${data.products[i].product_name}<br> ${emojis(data.products[i].ingredients_analysis_tags)}</span><br>
            </button><br><br></li>`)
        }
    }
}