// Mock candidate data
const candidates = [
    { name: 'John Doe', role: 'Software Engineer', location: 'Delhi' },
    { name: 'Jane Smith', role: 'UX Designer', location: 'New York, NY' },
    // Add more candidate objects as needed
  ];
  
  // Function to filter candidates based on location and job role
  function filterCandidates(location, jobRole) {
    return candidates.filter(candidate =>
      candidate.location.toLowerCase().includes(location.toLowerCase()) &&
      candidate.role.toLowerCase().includes(jobRole.toLowerCase())
    );
  }
  
  // Function to display filtered candidates
  function displayCandidates(candidates) {
    const candidateResults = document.getElementById('candidate-results');
    candidateResults.innerHTML = '';
  
    if (candidates.length === 0) {
      candidateResults.innerHTML = '<p>No candidates found.</p>';
    } else {
      candidates.forEach(candidate => {
        const candidateItem = document.createElement('div');
        candidateItem.classList.add('candidate-item');
  
        const candidateInfo = document.createElement('div');
        candidateInfo.classList.add('candidate-info');
  
        const candidateName = document.createElement('h3');
        candidateName.classList.add('candidate-name');
        candidateName.textContent = candidate.name;
  
        const candidateRole = document.createElement('p');
        candidateRole.classList.add('candidate-role');
        candidateRole.textContent = candidate.role;
  
        const candidateLocation = document.createElement('p');
        candidateLocation.classList.add('candidate-location');
        candidateLocation.textContent = candidate.location;
  
        candidateInfo.appendChild(candidateName);
        candidateInfo.appendChild(candidateRole);
        candidateInfo.appendChild(candidateLocation);
  
        candidateItem.appendChild(candidateInfo);
  
        candidateResults.appendChild(candidateItem);
      });
    }
  }
  
  // Handle form submission
  const searchForm = document.querySelector('.search-form');
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const locationInput = document.getElementById('location');
    const jobRoleInput = document.getElementById('job-role');
  
    const location = locationInput.value;
    const jobRole = jobRoleInput.value;
  
    const filteredCandidates = filterCandidates(location, jobRole);
    displayCandidates(filteredCandidates);
  });
  