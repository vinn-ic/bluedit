const postLocation = document.getElementById("ShowpostLocation")

const response = await fetch('../php/')
const data = await response.json();
