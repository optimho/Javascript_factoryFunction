/*
This is an example of a factory function that creates an object.
It is okay to use but is not the most popular way of creating an object
 */

function makeColor(r,g,b) {
    const color = {}
    color.r = r
    color.g = g
    color.b = b

    color.rgb = function () {
        const {r, g, b} = this;
        console.log(r)
        return `r ${r} g ${g} r ${b}`
    }

    color.hex = function () {
        const {r, g, b} = this;
        return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1))
    }

    color.saySomething = function()
    {
        alert(' Yeah what? ')
    }

    return color
}


const firstColor = makeColor(130,255,123)
// console.log(firstColor.rgb())

alert(firstColor.rgb())
alert(firstColor.hex())

/*
Constructor function - the prefered way of making an object.
The main difference is that all the methods in this object are in the prototype instead of the instance.
This means efficency, each instance does not have individual methods, but all the instances will reference a common prototype
fot the particular object.
 */

function Color(r,g,b){
    this.r = r
    this.g = g
    this.b = b
}

Color.prototype.rgb = function () {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`
}

Color.prototype.hex = function () {
    const {r, g, b} = this;
    return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1))
}

Color.prototype.rgba=function(a=1){
    const {r,g,b} = this
    return `rgba(${r}, ${g},${b}, ${a})`
}
// new Color(255,40,100)


const color1 = new Color(40,255,60)
const color2 = new Color(0,0,0)

