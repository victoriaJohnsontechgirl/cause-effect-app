
function showDetails(name) {
    // Example data (replace with your actual data)
    const details = {
      John: {
        fullName: 'John Doe',
        address: '123 Main St, Cityville',
        telephone: '555-1234',
        birthday: 'January 1, 1980'
      },
      Alice: {
        fullName: 'Alice Johnson',
        address: '456 Oak St, Townsville',
        telephone: '555-5678',
        birthday: 'March 15, 1992'
      },
      Bob: {
        fullName: 'Bob Smith',
        address: '789 Pine St, Villagetown',
        telephone: '555-9876',
        birthday: 'December 5, 1985'
      }
      // Add more details as needed
    };

    // Get the detail pane element
    const detailPane = document.getElementById('detailPane');

    // Check if the selected name exists in the details object
    if (details.hasOwnProperty(name)) {
      const personDetails = details[name];

      // Update the detail pane with the selected person's information
      detailPane.innerHTML = `
        <h2>${personDetails.fullName}</h2><br>
        <p><strong>Address:</strong> ${personDetails.address}</p>
        <p><strong>Telephone:</strong> ${personDetails.telephone}</p>
        <p><strong>Birthday:</strong> ${personDetails.birthday}</p>
      `;
    } else {
      // If the selected name is not found, display a default message
      detailPane.innerHTML = '<p>Select a name to view details.</p>';
    }
  }