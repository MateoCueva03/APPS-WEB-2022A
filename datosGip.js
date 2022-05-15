let urlG = "https://api.giphy.com/v1/gifs/random?api_key=zCavOq2alC9DNPRyuFqfMVV2Pga47AU6&tag=goku";

const obtenerGif = async () => {
  try {
    let response = await fetch(urlG);

    if(!response.ok)
    {
        throw new Error("Ourrio un Error al realizar la petición")
    }

    let data = await response.json();
    console.log(data);
    pintarGif(data);

  } catch (error) 
  {
    console.log(error);
  }
};


const lista2 = document.getElementById("listarGif")

obtenerGif();



const pintarGif = (data) =>
{
   let item = lista2.querySelector(`#gif`);

    item.getElementsByTagName("img")[0].setAttribute("src", data.data.images.original.url);
  
    //img.src = content.data[0].images.downsized.url;
}
