document.addEventListener('DOMContentLoaded', () => {
    const historyList = document.getElementById('history-list');
  
    const fakeHistory = [
      {
        title: "Refund Request - #1234",
        url: "https://tickettool.xyz/transcript/v1/1111393507123404860/1364727493730500700/transcript-closed-0005.html/abc123",
        description: "Escalated issue about billing confusion",
        extractedAt: "2025-04-21T14:35:00Z"
      },
      {
        title: "Bug Report - UI Glitch",
        url: "https://tickettool.xyz/transcript/v1/1111393507123404860/1364727493730500700/transcript-closed-0008.html/xyz456",
        description: "Steps to reproduce a message overflow bug",
        extractedAt: "2025-04-22T10:12:00Z"
      },
      {
        title: "General Inquiry - Support",
        url: "https://tickettool.xyz/transcript/v1/1111393507123404860/1364727493730500700/transcript-closed-0012.html/testlink",
        description: "",
        extractedAt: "2025-04-23T08:00:00Z"
      }
    ];
  
    historyList.innerHTML = ""; // Clear fallback message
  
    fakeHistory.forEach(entry => {
      const card = document.createElement("div");
      card.className = "history-card";
  
      card.innerHTML = `
        <div class="history-title">${entry.title}</div>
        <div class="history-url"><a href="${entry.url}" target="_blank">${entry.url}</a></div>
        ${entry.description ? `<div class="history-description">${entry.description}</div>` : ""}
      `;
  
      historyList.appendChild(card);
    });
  });
  