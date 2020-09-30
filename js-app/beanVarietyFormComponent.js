
const HTMLComponent = {
    beanVarietyForm(beanVariety) {
        const beanHTMLRepresentation = `
        <form>
            <div class="journalEntryContainer">
                <input type="hidden" id="beanVariety.Id" value="" />
                <fieldset>
                    <label for="beanName">Bean Variatal:</label>
                    <input type="text" id="beanVariety.name" name="beanName" />
                </fieldset>
                <fieldset>
                    <label for="beanRegion">Bean Region:</label>
                    <input type="text" id="beanVariety.region" name="beanRegion" />
                </fieldset>
                <fieldset>
                    <label for="beanRegion">Bean Notes:</label>
                    <input type="text" id="beanVariety.notes" name="beanNotes" />
                </fieldset>
        </form>
        <div>
            <button id="AddBeanVariety-button">Add New Bean</button>
        </div>
  `
        // Create your own HTML structure for a journal entry
        return beanHTMLRepresentation
    }
}
export default HTMLComponent
