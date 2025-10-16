// Path to events.json
const eventsJsonPath = '../assets/data/events.json';

// Container where events will be displayed
const eventsContainer = document.querySelector('.events-list');

// Fetch events from JSON and display them
fetch(eventsJsonPath)
  .then(response => response.json())
  .then(data => {
      const events = data.events;
      if(eventsContainer && events.length > 0){
          eventsContainer.innerHTML = ''; // Clear existing content

          events.forEach(event => {
              const eventItem = document.createElement('li');
              eventItem.classList.add('event-item');

              eventItem.innerHTML = `
                <strong>${event.title}</strong> - ${event.date} | ${event.time} <br>
                <em>${event.description}</em> <br>
                <a href="${event.registration_url}" target="_blank">Register / More Info</a>
              `;

              eventsContainer.appendChild(eventItem);
          });
      }
  })
  .catch(error => {
      console.error('Error loading events:', error);
      if(eventsContainer){
          eventsContainer.innerHTML = '<li>No events available at the moment.</li>';
      }
  });
