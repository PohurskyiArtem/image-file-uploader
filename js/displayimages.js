function displayImages(imagesList, results) {
	imagesList.innerHTML = results.map(function (result) {
	  return `
	  <li>
		  <img src=${result.url}>
	  </li>
	`
	}).join('')
  }