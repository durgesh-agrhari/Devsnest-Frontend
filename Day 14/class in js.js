<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class</h2>

<p>How to use a JavaScript Class.</p>

<p id="demo"></p>

<script>
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
myCar.name + " " + myCar.year;
</script>

</body>
</html>
