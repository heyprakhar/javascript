const marvel_heroes = ["ironman","thor"]
const dc_heroes = ["superman", "flash"]
// marvel_heroes.push(dc_heroes)
const merged = [...marvel_heroes,...dc_heroes]
console.log(merged);