export default function User(data){
return (
    <div>
        <h1>User component </h1>
        <h1>FirstName:{data.firstName}</h1>
        <h1>LastName:{data.lastName}</h1>
        <h1>Email:{data.email}</h1>
    </div>
)
}