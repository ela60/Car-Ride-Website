// script.js
document.addEventListener('DOMContentLoaded', () => {
    
    const greenButton = document.querySelector('.green-button');
    const bannerButton = document.querySelector('.banner-btn');
    const contactButton = document.querySelector('.button-container');

   
    greenButton.addEventListener('click', () => {
        alert(' Your Explore More button was clicked!');
        console.log('Green button clicked at:', new Date().toLocaleTimeString());
    });

    
    bannerButton.addEventListener('click', () => {
        alert(' You clicked Submit button!');
        console.log('Banner button clicked at:', new Date().toLocaleTimeString());
    });

    
    contactButton.addEventListener('click', () => {
        alert(' You clicked Contact Today button !');
        console.log('Contact button clicked at:', new Date().toLocaleTimeString());
    });
});
