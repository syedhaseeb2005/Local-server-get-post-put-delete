
// import { log } from "console";
import express from "express";

import fs from 'fs'

const app = express()
const port = 8000

app.use(express.json())

const PersonDetails  = fs.readFileSync('./PersonDetails.json', 'utf-8')

let PersonDetailData = JSON.parse(PersonDetails )

// console.log(JSON.parse(PersonDetails))

app.get('/api/v1/PersonDetails', (req, res) => {
    res.status(200).json({
        status: "success",
        data: PersonDetailData
    })
})

            // get data
            
            
// app.get('/api/v1/PersonDetails/:PersonDetailId', (req, res) => {
//     console.log(req.params.PersonDetailId, "==>>params")
//     console.log(typeof req.params.PersonDetailId, "==>>typeof")
//     console.log(PersonDetailData?.data.length, "==>>length")

//     if ((req.params.PersonDetailId * 1) > PersonDetailData?.data.length) {
//         return res.status(404).send("Data not available")
//     }

//     const singleDetails  = PersonDetailData?.data?.find(PersonDetail => PersonDetail.id == req.params.PersonDetailId)

//     console.log(singleDetails , '==>>>singledetails');

//     res.status(200).json({
//         status: "success",
//         data: singleDetails
//     })
// })



                // delete data
                
                
// app.delete('/api/v1/PersonDetails/:PersonDetailId',(req,res)=>{
//     console.log(req.params.PersonDetailId, "==>>params")
//     const filterData = PersonDetailData.data.filter(PersonDetails => PersonDetails.id !=(req.params.PersonDetailId * 1))

//     PersonDetailData.data = filterData
//     fs.writeFile('./PersonDetails.json',JSON.stringify(PersonDetailData),()=>{
    //         res.status(200).send({
        //             status: "success",
        //             data: "Successfully Deleted"
        //         })
        //     })
        // })

        
        // post data
        

// app.post('/api/v1/PersonDetails/:PersonDetailId',(req,res)=>{
//     console.log(PersonDetailData.data.length, "ha mil raha hy")
//     if(!req.body.PersonName || !req.body.Qualificatiion || !req.body.Nationality || !req.body.Religion){
//         res.status(200).send({
//             status: "Rejected",
//             data: "Missing Feild"
//         })
//     }
//     const datainDB = {
//         id: PersonDetailData.data.length + 1,
//         ...req.body
//     }
    
//     PersonDetailData.data.push(datainDB)
//     fs.writeFile('./PersonDetails.json',JSON.stringify(PersonDetailData),()=>{
//         res.status(200).send({
//         status: "success",
//         data: "Successfully ADDED"
//         })
//       })
// })

// patch and put 


app.put('/api/v1/PersonDetails/:PersonDetailId',(req,res)=>{
    console.log(req.params.PersonDetailId);

    let indexNumber;

    PersonDetailData.data.forEach((tour,index) => {
        if(PersonDetails.id ===(req.params.PersonDetailId * 1)){
            indexNumber = index
        }
    });
    PersonDetailData.data.splice(indexNumber,1,req.body)
    fs.writeFile('./PersonDetails.json',JSON.stringify(PersonDetailData),()=>{
        res.status(200).send({
        status: "success",
        data: "Successfully Updated"
        })
      })
})

app.listen(port, () => {
    console.log(`Server running on port number ${port}`)
})
