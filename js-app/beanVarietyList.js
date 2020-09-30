import HTMLComponent from "./beanVarietyComponent.js"
//import registerListeners from "./journal.js"... removed this from this module and invoked it in the journal.js...

const Render = {

    //This Function (method) is Responsible for rendering all the objects to the DOM
    // an array of journal entries is passed into the function
    // the entry log area on the dom is cleared
    // for each object in the array
    // each object is passed though the object -> html converter
    // then the entry log area in the html is targested and we inject each html converted object into the entry Log area of the dom.
    showBeanVarieties(beanObjectsArray) {
        console.log(beanObjectsArray)
        document.querySelector(".beanList").innerHTML = ""
        for (const beanObject of beanObjectsArray) {
            const beanHTMLRepresentation = HTMLComponent.beanVarietyConverter(beanObject)
            const beanArticleElement = document.querySelector(".beanList")
            beanArticleElement.innerHTML += beanHTMLRepresentation
        }
    }
}

export default Render