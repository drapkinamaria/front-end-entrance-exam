export function setupEditable() {
    document.querySelectorAll('[contenteditable]').forEach(element => {
        element.addEventListener('blur', () => {
            localStorage.setItem(element.id, element.innerHTML);
        });

        if (localStorage.getItem(element.id)) {
            element.innerHTML = localStorage.getItem(element.id);
        }
    });
}
