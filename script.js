fetch("https://textures.neocities.org/manifest.json")
    .then((res) => res.json())
    .then((json) => {
        //Success! Your code goes here!
        let manifest = json;

        //Get the index of the fire category
        let fireIndex = manifest.catalogue
            .map(function (e) {
                return e.name;
            })
            .indexOf("fire-and-light");

        //Pick a random image from that category
        let fireCatagoryFileCount = manifest.catalogue[fireIndex].files.length;
        let randomImageName = manifest.catalogue[fireIndex].files[
            Math.floor(Math.random() * fireCatagoryFileCount) + 1];

        //Create a full texture url
        let textureURL = manifest.info.base_url + "/" 
        + manifest.info.textures_folder + "/" + manifest.catalogue[fireIndex].name 
        + "/" + randomImageName;

        alert(textureURL)
        document.getElementById("fire-and-light.jpg").src = textureURL;
    });