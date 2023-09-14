const express=require("express");
const fs=require("fs");
const path=require("path");

const app=express();
const ouputFolder="./Output";
if (!fs.existsSync(ouputFolder))
{
    fs.mkdirSync(ouputFolder)
}

const PORT=3000;

app.listen(PORT,()=>{
    console.log(`Server is Running on Port: http://localhost:${PORT}`);
});

app.get('/createFile',(req,res)=>{
    const currentTime= new Date();
    const dateTimeForFileName=`${(currentTime.getFullYear()).toString()}-${(currentTime.getMonth()+1).toString()}-${(currentTime.getDate().toString)}-${(currentTime.getHours().toString)}-${(currentTime.getMinutes().toString())}-${(currentTime.getSeconds().toString())}.txt`;
    const filePath=path.join(ouputFolder, dateTimeForFileName);
    fs.writeFile(filePath, currentTime.toISOString(),(err)=>{
        if(err){
            res.status(500).send(`Error Occured in file:${err}`);
            return;
        }
res.send(`File created Successfully at:  ${filePath}`);
    })
});

app.get('/getFiles',(req,res)=>{
    fs.readdir(ouputFolder,(err,files)=>{
        if(err){
            res.status(500).send(`Error Occured on Reading Files: ${err}`);
            return
        }
        console.log("List of files: \n", files);
        const textFiles = files.filter((file) => path.extname(file) === ".txt");
    
        res.json(textFiles);
    })
});