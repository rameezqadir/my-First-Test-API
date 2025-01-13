
// export default async function Home (){
// const url = await fetch ('http://localhost:3000/api/hello',{
//   cache: "no-store"
// } )
// const res=await url.json()
// console.log (res)
// return (
//   <div>
//   {}
//   <h1>{res.hello}</h1>
//   <h2>Hello from Route Handlers</h2></div>
// )
// }

export default async function Home (){
  const url= await fetch ('http://localhost:3000/api/hello',{
    cache: "no-store"
  })
  const res = await url.json()
  console.log(res)
  return(
   
    <div>{JSON.stringify(res)}</div>
   
  )
}