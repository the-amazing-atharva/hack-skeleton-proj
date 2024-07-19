function upload() {
  const fileUploadInput = document.querySelector(".file-uploader");

  if (!fileUploadInput.value) {
    return;
  }

  const image = fileUploadInput.files[0];

  if (!image.type.includes("image")) {
    return alert("Only images are allowed!");
  }

  if (image.size > 10_000_000) {
    return alert("Maximum upload size is 10MB!");
  }

  /// Display the image on the screen ///

  const fileReader = new FileReader();
  fileReader.readAsDataURL(image);

  fileReader.onload = (fileReaderEvent) => {
    const profilePicture = document.querySelector(".profile-picture");
    profilePicture.style.backgroundImage = `url(${fileReaderEvent.target.result})`;
  };

  // upload image to the server or the cloud
}
