
// let array = ['miller','mike','simon','suzan'];
// array.sort();
//     array.map((item) =>{
//       console.log(item);
//     })
//     array.forEach((item)=> {
//        console.log(item);
//     })
//     console.log(array); 


/* objects */
    // const snipe = {
    //       name:'miller enakpo',age:20
    // }

    // console.log(snipe.name);
    // console.log(snipe.age);


/* error handling */

        // try {
        //     const name = "miller";
        // name = 20;
        // } catch (error) {
        //     console.log(error.message);
        // } 

/* conditional statement */
        // const age = 25;
        // if(age===5){
        // console.log('it matches ');
        // }else{
        // console.log(' does not match');
        // }



/* switch statement */
        // const number = 1+4;
        // switch (number) {
        //     case 2:
        //         console.log(' the number is 2');
        //         break;
        //     case 5:
        //             console.log(' the number is 5');
        //         break;

        //     default:
        //         console.log('cant find the answer');
        //         break;
        // }


    /* objects and operations */
      
                // const users =[  {
                //         name:' miller',
                //         age:20,
                //         grade:50,

                //     },
                //     { 
                //     name:'simon',
                //     age:70,
                //     grade:80
                //     }
                // ]

            // users.map((item)=>{
            //     if(item.name=='simon'){
            //         console.log(item.age);
            //     }

            // }) 

/* adding values to sum */
        // let sum = 0;
        // users.map((item)=>{
        // sum += item.grade;
        // })
        // console.log(sum);
         


/* mapping through objects nd arrays */

        // const users ={
        //       age:10
        // }
        // const school ={
        //     age: 30
        // }
        // const hospital ={
        // name:"hospital"
        // }
        // let sum = 0;
        // let new_array = [];
        // new_array.push(users,hospital,school);
        
        // new_array.map((new_array)=>{
        //     if(new_array.age){
        //         sum += new_array.age;
        //     }    
    
        // })
        // console.log(sum);

    
    /* object of objecs inside a single array */

            //             const school_array = [
            //                     school_base={
            //                         school_1:{
            //                             networth:10000
            //                         },
            //                         school_2:{
            //                             networth:40000
            //                         },
            //                         school_3:{
            //                             networth:60000
            //                         }
            //                     } 
                            
            //             ]


            //     const keyValue = (input) => Object.entries(input).forEach((
            //         [key, value])=>{
            //             console.log(key + ' networth is '+ value.networth)
            //         })
            //     school_array.map((item) =>{
            //         keyValue(item)
            //         if(item.school_1.networth > item.school_2.networth && item.school_1.networth > item.school_3.networth){
            //             console.log('school1 has the highest networth')
            //         }else if(item.school_2.networth > item.school_1.networth && item.school_2.networth > item.school_3.networth){
            //             console.log('school2 has the highest networth')
            //         }else{
            //             console.log('school3 has the highest networth')}
                    
            //     })

            //    school_array.push(school_base);
            //    school_array.map((item)=>{
            //     if(item.school_3 >= item.school_1 && item.school_1){
            //         result = item.school_3;
            //       }else{
            //        console.log(' false');
            //     }
            // })

            // console.log(result,' has the highest networth '); 


/* working with functions */

        // const names  =[];
        // function addnames (name){
        //     return names.push(name);

        // }
        // addnames(' sunday simon');

        // console.log(names); 
 
         array=[];
        function item (name){
            array.push(name);
            return;
           
        }
       
        item(" the man no laugh");
        console.log(array);

        /* insert arrray values into database */
                // const DB = [];
                // function addnames(userdata){
                
                // userdata.map((item)=>{
                //     DB.push(item);
                //     }); 
                // return;

                
                // }

                // addnames([{name:'miller',age:30},{name:'prince',age:23}])
                // console.log(DB);


                //  DB.forEach((item)=>{
                //   result = item.name+' is '+ item.age+' years  old';
                //   console.log(result);
                // })

            