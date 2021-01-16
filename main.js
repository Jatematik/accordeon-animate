const accordeon = () => {
    const accordion = document.getElementById('accordeon'),
        accordionPanel = accordion.querySelectorAll('.panel-heading'),
        accordionCollapse = accordion.querySelectorAll('.panel-collapse'),
        accordionGroup = accordion.querySelectorAll('.accordeon-group');
        
    const toggleAccordion = (index) => {
        for (let i = 0; i < accordionCollapse.length; i++) {
            if (index === i) {
                accordionCollapse[i].classList.add('active-collapse');
            } else {
                accordionCollapse[i].classList.remove('active-collapse');
            }
        }
        for (let i = 0; i < accordionGroup.length; i++) {
            if (index === i) {
                accordionGroup[i].style.cssText = `margin-bottom: ${accordionCollapse[i].offsetHeight}px;`;
            } else {
                accordionGroup[i].style.cssText = `margin-bottom: 0;`;
            }
        }
    };


    accordion.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        target = target.closest('.panel-heading');
        if (target) {
            accordionPanel.forEach((item, i) => {
                if (item === target) {
                    toggleAccordion(i);
                    item.querySelector('.fa-plus').classList.add('plus-active');
                } else {
                    item.querySelector('.fa-plus').classList.remove('plus-active');
                }
            });
        }
    });


};

accordeon();