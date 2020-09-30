
const HTMLComponent = {
    beanVarietyConverter(beanVariety) {
        const beanHTMLRepresentation = `<div class="journalEntryContainer">
    <section class = "entryLog__date">Name: ${beanVariety.name}</section>
    <section class = "entryLog__title">Region: ${beanVariety.region}</section>
    <section class = "entryLog__title">Region: ${beanVariety.notes}</section>

   </div>
   </article>`
        // Create your own HTML structure for a journal entry
        return beanHTMLRepresentation
    }
}
export default HTMLComponent
