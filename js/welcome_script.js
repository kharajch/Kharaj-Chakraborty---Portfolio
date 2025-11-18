        const text = "Welcome";
        const typingContainer = document.getElementById('typing-container');
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                typingContainer.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            } else {
                // Start loading animation
                setTimeout(() => {
                    document.body.innerHTML = `
                        <div style="text-align: center; color: var(--primary_color); padding: 50px;">
                            <h1>System Ready</h1>
                            <p>Welcome to my portfolio!</p>
                        </div>
                    `;
                }, 2000);
            }
        }
        setTimeout(typeWriter, 1000);
  setTimeout(() => {
             document.location = "main.html"; 
  }, 5000);