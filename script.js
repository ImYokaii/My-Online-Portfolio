const dots = document.querySelectorAll(".navigation a");
const removeActiveClass = () => {
    dots.forEach(dot => {
        dot.classList.remove("active");
    });
};

const addActiveClass =(entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log(entry.target.id);
            let currentDot = document.querySelector(`.navigation a[href='#${entry.target.id}']`);
            removeActiveClass();
            currentDot.classList.add("active");
        }
    })
};

const options = {
    threshold: 0.8
};

const observer = new IntersectionObserver(addActiveClass, options);
const sections = document.querySelectorAll("section");

sections.forEach(section => {
    observer.observe(section);
});