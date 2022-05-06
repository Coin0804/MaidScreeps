interface Project{
    todo :()=>ReturnCode
    nextProject :number|string
    timeneed :number
    nolimit ?:boolean
}