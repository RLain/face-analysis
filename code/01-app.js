
/**
 * Function to POST an image to the FaceAnaysis API and receive a response
 */
 console.log('The start')
 let form = document.querySelector('formElem');
 const data = new FormData(form);
 data.append("image_file", "happy.jpeg");
 
 const options = {
   method: 'POST',
   headers: {
     'X-RapidAPI-Host': 'faceanalysis.p.rapidapi.com',
     'X-RapidAPI-Key': API_KEY 
   },
   body: data
 };
 
 fetch('https://faceanalysis.p.rapidapi.com/age_gender/process_file', options)
   .then(response => response.json())
   .then(response => console.log(response))
   .catch(err => console.error(err));

