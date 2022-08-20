const location_current = location.href;
const item_selector = document.getElementsByClassName('nav-item');
const item_selector_length = item_selector.length;
for(let i = 0 ; i < item_selector_length ; i++)
{
    if(item_selector[i] === location_current)
    {
        console.log(item_selector[i]);
    }
}