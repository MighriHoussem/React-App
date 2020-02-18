import React  from "react";

const Ninjas = (props)=>
{
        // const ninjas = props.ninjas.map(ninja => {
        //     if(ninja.age > 25){
        //         return (
        //             <div className={"ninja alert alert-info col-md-12"} role="alert" key={"ninjas"+ninja.id}>
        //                 <span className={"col-sm-4"}>Name: {ninja.name}</span>
        //                 <span className={"col-sm-4"}>Age:{ninja.age} </span>
        //                 <span className={"col-sm-4"}>Belt: {ninja.belt} </span>
        //             </div>
        //         );
        //     }else {
        //         return null;
        //     }
        //
        // });
    const ninjas = props.ninjas.map((ninja)=>{
       return ninja.age > 10 ? (
           <div className={"ninja alert alert-info col-md-12"} role="alert" key={"ninjas"+ninja.id}>
               <span className={"col-sm-4"}>Name: {ninja.name}</span>
               <span className={"col-sm-4"}>Age:{ninja.age} </span>
               <span className={"col-sm-4"}>Belt: {ninja.belt} </span>
           </div>
       ): null ;

    });
        return (
            <div className={"ninjas-list"}>
                { ninjas }
            </div>
        );
    }


export default Ninjas;
