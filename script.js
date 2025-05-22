document.addEventListener('DOMContentLoaded', function() {
    // Update time in menu bar
    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        document.getElementById('current-time').textContent = `${hours}:${minutes} ${ampm}`;
    }
    
    updateTime();
    setInterval(updateTime, 60000);
    
    // Sidebar navigation
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const sections = document.querySelectorAll('section');
    
    sidebarItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Remove active class from all sidebar items
            sidebarItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => section.classList.remove('active-section'));
            
            // Show corresponding section
            if (sections[index]) {
                sections[index].classList.add('active-section');
            }
        });
    });
    
    // Window drag functionality (simplified)
    const windowHeader = document.querySelector('.window-header');
    const mainWindow = document.getElementById('main-window');
    
    let isDragging = false;
    let offsetX, offsetY;
    
    windowHeader.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - mainWindow.getBoundingClientRect().left;
        offsetY = e.clientY - mainWindow.getBoundingClientRect().top;
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        mainWindow.style.position = 'absolute';
        mainWindow.style.left = (e.clientX - offsetX) + 'px';
        mainWindow.style.top = (e.clientY - offsetY) + 'px';
    });
    
    document.addEventListener('mouseup', function() {
        isDragging = false;
    });
});
