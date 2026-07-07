let heroes = [
    ["hulk","ironman","thor"],
    ["batman","spidey","captain"]
]

for(let i =0;i<heroes.length;i++)
{
    console.log(i,heroes[i],heroes[i].length);
    for(let j = 0;j<heroes.length;j++)
    {
        console.log(`j = ${j},${heroes[i][j]}`);
    }
}


let student = [["aman",4.3],["nitin",94.4],["karan",100]];
for(let i = 0;i<student.length;i++)
{
   console.log(`info of student #${i+1}`);
   for(let j = 0;j<student[i].length;j++)
   {
    console.log(student[i][j]);
   }
}


