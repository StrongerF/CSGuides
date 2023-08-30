function ShowDialog(title, map, side, tick, src) 
{
    var modal = document.getElementById("modal-space");
    modal.style.display = "flex";
    var Title = document.getElementById("title").textContent = title;
    var Map = document.getElementById("map").textContent = map;
    var Side = document.getElementById("side").textContent = side;
    var Tick = document.getElementById("tick").textContent = tick;
    var Video = document.getElementById("video").src = src;
}
function CloseDialog() 
{
    var modal = document.getElementById("modal-space");
    modal.style.display = "none";
}

function ChangeImages(grenade, isMouseOverImage)
{
    if (isMouseOverImage)
        var image = document.getElementById(grenade).src = "/src/images/grenades/dust2/" + grenade + "2.png";
    else
        var image = document.getElementById(grenade).src = "/src/images/grenades/dust2/" + grenade + ".jpg";
}