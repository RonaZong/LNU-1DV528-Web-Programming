/**
 * Client-side JavaScript
 */

document.addEventListener('DOMContentLoaded', async () => {
    const issuesList = document.getElementById('issues-list');
    const socket = new WebSocket(`wss://${window.location.host}`);
    
    // Fetch initial issues
    try {
      const response = await fetch('/api/issues');
      const issues = await response.json();
      renderIssues(issues);
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
    
    // WebSocket handlers
    socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      handleWebSocketEvent(data);
    });
    
    function renderIssues(issues) {
      issuesList.innerHTML = issues.map(issue => `
        <div class="issue" data-id="${issue.id}">
          <h3>#${issue.iid} - ${issue.title}</h3>
          <p>${issue.description || 'No description'}</p>
          <p>Status: ${issue.state}</p>
        </div>
      `).join('');
    }
    
    function handleWebSocketEvent(event) {
      // Update UI based on WebSocket events
      switch (event.type) {
        case 'issue_opened':
          // Add new issue to the list
          break;
        case 'issue_updated':
          // Update existing issue
          break;
        case 'issue_closed':
          // Mark issue as closed
          break;
        case 'issue_reopened':
          // Mark issue as reopened
          break;
      }
    }
  });