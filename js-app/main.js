import Render from "./beanVarietyList.js";
import BeanVarietyForm from "./beanVarietyFormComponent.js";
import CreateBeanVariety from "./createBeanVariety.js";
import newBeanVarietyObject from "./createBeanVariety.js";

//BEAN VARIETY Route
const beanVarietyUrl = "https://localhost:5001/api/beanvariety/";

// Event Listener on Run Button 
//Get Bean Variety Array, Convert and Render each item in array to Dom
const listBeanButton = document.querySelector("#listBean-button");
listBeanButton.addEventListener("click", () => {
    getAllBeanVarieties()
        .then().then(beanVarieties => Render.showBeanVarieties(beanVarieties));
});

// API Request for data from bean Variety Route
function getAllBeanVarieties() {
    return fetch(beanVarietyUrl).then(resp => resp.json());
}


//Insert Bean Variety Form
document.querySelector(".beanForm").innerHTML = BeanVarietyForm.beanVarietyForm();

// Event Listener on Add Bean Button for Bean Variety Form
//Post Bean Variety Object, Convert Then Re-Render bean array to Dom
const addBeanButton = document.querySelector("#AddBeanVariety-button");
addBeanButton.addEventListener("click", (event) => {
    const beanName = document.getElementById("beanVariety.name").value
    const beanRegion = document.getElementById("beanVariety.region").value
    const beanNotes = document.getElementById("beanVariety.notes").value

    if (
        (beanName === "") ||
        (beanRegion === "")

    ) { alert("you forgot something") }
    else {
        // API Request for data from bean Variety Route
        const newBean = newBeanVarietyObject(beanName, beanRegion, beanNotes)

        fetch(beanVarietyUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBean)
        })


    }
});