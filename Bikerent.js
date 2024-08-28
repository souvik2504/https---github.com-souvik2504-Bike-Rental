function toggleDetails(button) {

    var bike = button.closest('.bike');
    var details = bike.querySelector('.details');
    
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
    changesize(bike)
}

function changesize(bike){
    
    bike.classList.toggle('viewdetails')
}