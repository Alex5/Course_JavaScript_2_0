const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tabsLink = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector)

    const hideTabContent = () => {
        content.forEach(item => {
            item.style.display = 'none'
        })
        tabsLink.forEach(item => {
            item.classList.remove(activeClass)
        })
    }

    const showTabContent = (index = 0) => {
        content[index].style.display = 'flex'
        tabsLink[index].classList.add(activeClass)
    }

    hideTabContent()
    showTabContent()

    header.addEventListener('click', (e) => {
        tabsLink.forEach((item, i) => {
            if (e.target === item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    })
}

window.addEventListener('DOMContentLoaded', () => {
    tabs('.tabs-header', '.tab-link', '.tab-content', 'active')
})