// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Viết một chương trình JavaScript sử dụng vòng lặp for
//         để in ra các số nguyên tố từ 1 đến 10.</title>
// </head>

// <body>
//     <script>
        
        for (let number = 10; number <= 50; number++) {
            let prime = true;
            for (let divisor = 2; divisor < i; divisor++) {
                if (number % divisor === 0) {
                    prime = false;
                    break;
                }
            }
            if (prime) {
                console.log(number)
            }

        }

            // let i =2
            // while(i<=10){
            //     let prime = true;
            //     let j =2
            //     while ( j<i){
            //         if( i%j === 0){
            //             prime = false;
            //             break;
            //         }else 
            //     }
            // }
        


       
//     </script>
// </body>

// </html>