import Render from "./beanVarietyList.js";
import BeanVariety from "./createBeanVariety.js"

const url = "https://localhost:5001/api/beanvariety/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then().then(beanVarieties => Render.showBeanVarieties(beanVarieties));
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}