export function viewResult(element) {
    let viewResult = document.createElement('h1');
    viewResult.innerHTML = element;
    document.querySelector('body').appendChild (viewResult);
}