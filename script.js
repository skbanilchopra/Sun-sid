document.getElementById('astroForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  let dob = document.getElementById('dob').value;
  let tob = document.getElementById('tob').value;
  let place = document.getElementById('place').value;

  // dummy kundali output
  let resultBox = document.getElementById('result');
  resultBox.innerText = `Calculating Kundali for:
Date: ${dob}
Time: ${tob}
Place: ${place}`;

  // later connect API or library
});
