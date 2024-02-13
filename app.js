const moveEffect = document.getElementById("avatar");

parent.addEventListener("mousemove", function (event) {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;
  moveEffect.style.transform = "translate(" + x * 10 + "px, " + y * 10 + "px)";
});
