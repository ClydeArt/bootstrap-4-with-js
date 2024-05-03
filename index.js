const titleInput = document.getElementById('title')
const descInput = document.getElementById('desc')
const dateInput = document.getElementById('date')
const submit = document.getElementById('submit')
const form = document.getElementById('form')
const items = document.getElementById('items')

// Mo run ra ang handleSubmit everytime nga i submit ang form
form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    // Para di mo refresh ang page ig submit
    e.preventDefault()

    const title = titleInput.value
    const desc = descInput.value
    const date = dateInput.value

    const item = createTask(title, desc, date)

    items.appendChild(item)

    //save(title, desc, date, item.id)
    resetForm()
}

// Delete ang item
function deleteItem(e) {
    const item = e.target.parentElement

    items.removeChild(item)
    //remove(item.id)
}

// Helper function to reset form
function resetForm() {
    titleInput.value = ''
    descInput.value = ''
    dateInput.value = ''
}

function createTask(title, desc, date, uid = new Date().valueOf()) {
    const formattedDate = formatDate(date)

    const item = document.createElement('div')
    item.classList.add('item', 'px-4', 'py-3', 'd-flex', 'justify-content-between')
    item.id = uid.toString()

    const details = document.createElement('div')
    details.classList.add('details')

    const titleElement = document.createElement('div')
    titleElement.classList.add('title', 'fs-5', 'fw-bold')
    titleElement.innerText = title

    const descElement = document.createElement('div')
    descElement.classList.add('description', 'mb-1')
    descElement.innerText = desc

    const dateElement = document.createElement('div')
    dateElement.classList.add('date')
    dateElement.innerText = formattedDate

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('del', 'text-danger')
    deleteBtn.innerText = 'Delete'
    deleteBtn.addEventListener('click', deleteItem) // Use addEventListener instead of onclick

    details.appendChild(titleElement)
    details.appendChild(descElement)
    details.appendChild(dateElement)

    item.appendChild(details)
    item.appendChild(deleteBtn)

    return item
}

function formatDate(date) {
    const unFormattedDate = date == '' ? new Date() : new Date(date);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = unFormattedDate.getMonth()
    const day = unFormattedDate.getDate()
    const year = unFormattedDate.getFullYear()
    const formattedDate = `${months[month]} ${day}, ${year}`

    return formattedDate // Remove the parentheses here
} 
