// CONTENTBOX INDICATORS //

const contentBox = document.getElementsByClassName("contentBox")[0];

contentBox.addEventListener('scroll', () => {
    const scrollHeight = contentBox.scrollTop;
    console.log(scrollHeight);
    
    if (scrollHeight >= -10){
        projectScrollIndicator1.style.opacity = '1'
        projectScrollIndicator2.style.opacity = '0.5'
        projectScrollIndicator3.style.opacity = '0.2'
        projectScrollIndicator4.style.opacity = '0.1'
        projectScrollIndicator5.style.opacity = '0'

    }
    if (scrollHeight >= 400 ){
        projectScrollIndicator1.style.opacity = '0.5'
        projectScrollIndicator2.style.opacity = '1'
        projectScrollIndicator3.style.opacity = '0.5'
        projectScrollIndicator4.style.opacity = '0.2'
        projectScrollIndicator5.style.opacity = '0.1'
    
    
    }
    if (scrollHeight >= 900){
        projectScrollIndicator1.style.opacity = '0.2'
        projectScrollIndicator2.style.opacity = '0.5'
        projectScrollIndicator3.style.opacity = '1'
        projectScrollIndicator4.style.opacity = '0.5'
        projectScrollIndicator5.style.opacity = '0.2'
       
    }
    if (scrollHeight >= 1400){
        projectScrollIndicator1.style.opacity = '0.1'
        projectScrollIndicator2.style.opacity = '0.2'
        projectScrollIndicator3.style.opacity = '0.5'
        projectScrollIndicator4.style.opacity = '1'
        projectScrollIndicator5.style.opacity = '0.5'

    }
    if (scrollHeight >= 1876){
        projectScrollIndicator1.style.opacity = '0'
        projectScrollIndicator2.style.opacity = '0.1'
        projectScrollIndicator3.style.opacity = '0.2'
        projectScrollIndicator4.style.opacity = '0.5'
        projectScrollIndicator5.style.opacity = '1'

    }


}
);


const projectScrollIndicator1 = document.getElementById('projectScrollIndicator1')
const projectScrollIndicator2 = document.getElementById('projectScrollIndicator2')
const projectScrollIndicator3 = document.getElementById('projectScrollIndicator3')
const projectScrollIndicator4 = document.getElementById('projectScrollIndicator4')
const projectScrollIndicator5 = document.getElementById('projectScrollIndicator5')

projectScrollIndicator1.addEventListener('click', () => {contentBox.scrollTop = '0'})
projectScrollIndicator2.addEventListener('click', () => {contentBox.scrollTop = '570'})
projectScrollIndicator3.addEventListener('click', () => {contentBox.scrollTop = '1080'})
projectScrollIndicator4.addEventListener('click', () => {contentBox.scrollTop = '1610'})
projectScrollIndicator5.addEventListener('click', () => {contentBox.scrollTop = '2150'})

