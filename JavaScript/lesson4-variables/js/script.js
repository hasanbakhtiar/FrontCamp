// const $1_In_fo = "Hello";
// console.log($1_In_fo);

// var info = 5;
// info = 10;
// console.log(info);

// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void

// ES5
// var - variable - global

// ES6
// let  - local
// const - constant - local

// global

// if (true) {
//   // local global
//   if (true) {
//     // local
//   }

//   // const a = 5;
//   var a = 5;
//   var a = 10;
// }
// console.log(a);

// const a = 5;
// console.log(a);

// if -> eger
// else -> deyilse
// else if -> deyilse eger

let infoSt = 10;
// let infoNd = 10;

// if (infoSt<infoNd) {
//     console.log("Hello");
// }else if(infoSt == 10){
//     console.log('10');
// }else{
//     console.log("Bye");
// }

// const myTime = 10;

// if (myTime >= 5 && myTime <= 10) {
//   console.log("good morning");
//   if (myTime >= 7 && myTime < 9) {
//         console.log("Get up");
//   }else if(myTime == 9){
//         console.log('have breakfast');
//   }else{
//         alert("go to work")
//   }
// } else if (myTime >= 11 && myTime <= 17) {
//   console.log("good afternoon");
// } else if (myTime >= 18 && myTime <= 22) {
//   console.log("good evening");
// } else if (myTime === 23) {
//   console.log("good night");
// } else {
//   console.log("no time");
// }




// let info = 5;
// switch (info) {
//   case 5:
//     let infoSt = 20;
//     console.log("this is 5");
//     info = infoSt;
//     if (info < 100) {
//       console.log(info);
//     }
//     break;

//   case 10:
//     console.log("this is 10");
//     break;

//   case "Hello":
//     console.log("this is hello");
//     break;
//   default:
//     console.log("this is default");
//     break;
// }



// try {
//     throw("her sey eladi");
//     consolasde.log("Hello");
// } catch (err) {
//     console.log(err);
//     // console.log('xeta var');
// }finally{
//     console.log('men hemise isleyirem');
// }