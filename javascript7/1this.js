const student = {
    name: "ankit",
    age: 21,
    eng: 89,
    math:99,
    phy: 70,
    getavg()
    {
        let avg = (this.eng+ this.math + this.phy) / 3;
        console.log(avg);
    }
}

function getavg()
{
    console.log(this);
}

