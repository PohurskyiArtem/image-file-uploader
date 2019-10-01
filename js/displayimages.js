function displayImages(imagesList, images) {
	imagesList.innerHTML = images.map(function (image, index) {
	  return `
		<li>
		  <figure>
			<img src=${image.url} alt="Image ${index + 1}">
			<figcaption>
				<div id="imageName">
					<p id="name" data-saveindex="${index}">${image.name}</p>
					<button data-changeindex="${index}" id="changeImageName">
					<i class="far fa-edit"></i>
					</button>
				</div>
			  <p>${(image.size / 1000).toFixed(1)} kB</p>
			</figcaption>
			<button id="removeButton" data-removeindex="${index}">Remove</button>
		  </figure>
		</li>
	  `
	}).join('');
  }