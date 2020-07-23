
let hTeam=[89,120,103]
let zTeam=[116,94,123]
let mTeam=[97,134,105]
let hSum=0
let zSum=0
let mSum=0
let hAvg=0
let zAvg=0
let mAvg=0

for(i of hTeam){
    hSum=hSum+i
}
for(i of zTeam){
    zSum=zSum+i
}

console.log("Average Score of Both Team:- ")
console.log('Team Heath '+hSum)
console.log('Team Zane '+zSum)

hAvg=hSum/3
zAvg=zSum/3

if(hAvg>zAvg){
    console.log(`Team Heath Wins with Avg Score of ${hAvg}`)
}else if(hAvg<zAvg){
    console.log(`Team Zane Wins with Avg Score of ${zAvg}`)
}else{
    console.log(`There is a Draw between both the Teams....`)
}
//---------Changing team Scores to show Diff. Winner---------
console.log('**************** Changing the Scores of Teams to Show Diff. Winner **************')
let hTeamChange=[116,94,153]
let zTeamChange=[90,120,103]
hSum=0
zSum=0
for(i of hTeamChange){
    hSum=hSum+i
}
for(i of zTeamChange){
    zSum=zSum+i
}
hAvg=hSum/3
zAvg=zSum/3

console.log("Average Score of Both Team:- ")
console.log('Team Heath '+hSum)
console.log('Team Zane '+zSum)

if(hAvg>zAvg){
    console.log(`Team Heath Wins with Avg Score of ${hAvg}`)
}else if(hAvg<zAvg){
    console.log(`Team Zane Wins with Avg Score of ${zAvg}`)
}else{
    console.log(`There is a Draw between both the Teams....`)
}

//---------Changing team Scores to show Draw-------------
console.log('**************** Changing the Scores of Teams to Show Draw Between Teams **************')
let hTeamDraw=[116,94,153]
let zTeamDraw=[116,94,153]
hSum=0
zSum=0
for(i of hTeamDraw){
    hSum=hSum+i
}
for(i of zTeamDraw){
    zSum=zSum+i
}
hAvg=hSum/3
zAvg=zSum/3

console.log("Average Score of Both Team:- ")
console.log('Team Heath '+hSum)
console.log('Team Zane '+zSum)

if(hAvg>zAvg){
    console.log(`Team Heath Wins with Avg Score of ${hAvg}`)
}else if(hAvg<zAvg){
    console.log(`Team Zane Wins with Avg Score of ${zAvg}`)
}else{
    console.log(`There is a Draw between both the Teams....`)
}

console.log('**************** Team Mariah Average Score ****************')

for(i of mTeam){
    mSum=mSum+i
}
mAvg=mSum/3

console.log(`Average Score of Team Mariah:- ${mAvg}`)
